import { act, fireEvent, screen } from "@testing-library/react";
import renderReduxConsumer from "../../renderReduxConsumer";
import ErrorContainer from "../../../components/error/ErrorContainer";
import { addControllerMessage, addNotification, clearNotifications } from "../../../slices/NotificationSlice";
import { store } from "../../../store";
import { Provider } from "react-redux";

let mockDate: typeof jest;

beforeEach(() => {
    mockDate = jest.useFakeTimers('modern');
});

afterEach(() => {
    store.dispatch(clearNotifications());
});

const setup = () => {
    const component = renderReduxConsumer(<ErrorContainer />);
    return {
        ...component
    }
}

test('Adding an error to the store should render a toast in the error container', () => {
    store.dispatch(addNotification({ title: "Example Title", body: "Example Body" }));

    const component = setup();

    expect(component.getByText("Example Title")).toBeInTheDocument();
    expect(component.getByText("Example Body")).toBeInTheDocument();
});

test('Clicking the X on an error should remove it from the screen', () => {
    store.dispatch(addNotification({ title: "Example Title", body: "Example Body" }));

    const component = setup();

    //Should start with a notification
    expect(component.getByText("Example Title")).toBeInTheDocument();
    expect(component.getByText("Example Body")).toBeInTheDocument();

    //Click the 'x' to dismiss it
    fireEvent.click(component.getByText('Close'))

    //It should disappear
    expect(component.queryByText("Example Title")).not.toBeInTheDocument();
    expect(component.queryByText("Example Body")).not.toBeInTheDocument();
});

test('Clicking the clear button on the controller message should clear all notification', () => {
    store.dispatch(addControllerMessage());
    store.dispatch(addNotification({ title: "Message 1", body: "Example Body 1" }));
    store.dispatch(addNotification({ title: "Message 2", body: "Example Body 2" }));

    const component = setup();

    //Should start with the notifications and controller message
    expect(component.getByText("Message 1")).toBeInTheDocument();
    expect(component.getByText("Message 2")).toBeInTheDocument();
    expect(component.getByText("Clear all notifications")).toBeInTheDocument();

    //Click the clear button to dismiss it
    fireEvent.click(component.getByText('Clear all notifications'))

    //They should all be cleared
    expect(component.queryByText("Message 1")).not.toBeInTheDocument();
    expect(component.queryByText("Message 2")).not.toBeInTheDocument();
    expect(component.queryByText("Clear all notifications")).not.toBeInTheDocument();
});

test('It should display "Just now" if the notification is less than 1 minute old', () => {
    store.dispatch(addNotification({ title: "Message 1", body: "Example Body 1" }));
    const component = setup();
    expect(component.getByText('Just now')).toBeInTheDocument();
});

test('It should display the number of minutes elapsed since dispatch if the message is less than 1 hour old', () => {
    //Dispatch an error message at 12:00
    mockDate.setSystemTime(new Date(Date.UTC(2021, 9, 25, 12, 0, 0)));
    store.dispatch(addNotification({ title: "Message 1", body: "Example Body 1" }));

    //Set the current time as 12:24:46
    mockDate.setSystemTime(new Date(Date.UTC(2021, 9, 25, 12, 24, 46)));

    const component = setup();

    expect(component.getByText('24m ago')).toBeInTheDocument();
});

test('It should display the number of hours and minutes elapsed since dispatch if the message is over 1 hour old', () => {
    //Dispatch an error message at 12:00
    mockDate.setSystemTime(new Date(Date.UTC(2021, 9, 25, 12, 0, 0)));
    store.dispatch(addNotification({ title: "Message 1", body: "Example Body 1" }));

    //Set the current time as 15:46:50
    mockDate.setSystemTime(new Date(Date.UTC(2021, 9, 25, 15, 46, 50)));

    const component = setup();

    expect(component.getByText('3h 46m ago')).toBeInTheDocument();
});

test('It should update the notification times every minute', () => {
    //Dispatch an error message at 12:00
    mockDate.setSystemTime(new Date(Date.UTC(2021, 9, 25, 12, 0, 0)));
    store.dispatch(addNotification({ title: "Message 1", body: "Example Body 1" }));

    //Render the container, it should default the time to "Just now"
    setup();
    expect(screen.getByText('Just now')).toBeInTheDocument();

    //Rerender the container
    act(() => { jest.advanceTimersByTime(60 * 1000) });
    expect(screen.getByText('1m ago')).toBeInTheDocument();
});

test('It should push a controller message into the container when there are 5 notifications present', () => {
    store.dispatch(addNotification({ title: "Message 1", body: "Example Body 1" }));
    store.dispatch(addNotification({ title: "Message 2", body: "Example Body 2" }));
    store.dispatch(addNotification({ title: "Message 3", body: "Example Body 3" }));
    store.dispatch(addNotification({ title: "Message 4", body: "Example Body 4" }));

    //Render the container with 4 errors, shouldn't have a controller
    const { rerender } = setup();
    expect(screen.queryByText('Clear all notifications')).not.toBeInTheDocument();

    //Dispatch the 5th error
    store.dispatch(addNotification({ title: "Message 5", body: "Example Body 5" }));
    rerender(<Provider store={store}><ErrorContainer /></Provider>)

    //Should render the controller
    expect(screen.getByText("Too many notifications?")).toBeInTheDocument();
    expect(screen.getByText("Clear all notifications")).toBeInTheDocument();
});

it('Should dismiss the controller message when clicking the "x"', () => {
    store.dispatch(addControllerMessage());
    const component = setup();

    expect(screen.getByText("Too many notifications?")).toBeInTheDocument();
    fireEvent.click(component.getByText('Close'));
    expect(screen.queryByText("Too many notifications?")).not.toBeInTheDocument();
});
