import renderReduxConsumer from "../../renderReduxConsumer";
import ProfilePage from "../../../components/pages/ProfilePage";
import { clearUser, setUser, User } from "../../../slices/UserSlice";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { store } from "../../../store";
import { act, fireEvent, screen, waitFor } from "@testing-library/react";

const history = createMemoryHistory();

const setup = () => {
    const component = renderReduxConsumer(
        <Router history={history}>
            <ProfilePage />
        </Router>
    );

    return {
        edit: component.queryByTitle('Edit'),
        ...component
    }
}

beforeEach(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    store.dispatch(clearUser());
});

const user: User = {
    username: "TomPlum42",
    nickname: "Tom",
    email: "tom@hotmail.com",
    creationDate: "2021-08-09T00:00",
    enabled: true,
    credentialsExpired: false,
    locked: false,
    expired: false,
    roles: ["user"]
}

test('Given an undefined user in context, it should redirect', () => {
    setup();
    expect(history.location.pathname).toEqual("/menu");
});

test('Given a valid user in context, it render the creation date', () => {
    store.dispatch(setUser(user));
    const component = setup();
    expect(component.getByText('9th August 2021')).toBeInTheDocument();
});

test('Given a valid user in context, it render the username', () => {
    store.dispatch(setUser(user));
    const component = setup();
    expect(component.getByText('TomPlum42')).toBeInTheDocument();
});

test('Given a valid user in context, it render the nickname', () => {
    store.dispatch(setUser(user));
    const component = setup();
    expect(component.getByText('Tom')).toBeInTheDocument();
});

test('Given a valid user in context, it render the email', () => {
    store.dispatch(setUser(user));
    const component = setup();
    expect(component.getByText('tom@hotmail.com')).toBeInTheDocument();
});

test('Clicking the edit button should render the save button', () => {
    store.dispatch(setUser(user));
    const { edit } = setup();

    expect(edit).toBeInTheDocument();
    expect(screen.queryByTitle('Save')).not.toBeInTheDocument();

    fireEvent.click(edit!);

    expect(screen.queryByTitle('Edit')).not.toBeInTheDocument();
    expect(screen.queryByTitle('Save')).toBeInTheDocument();
});

test('Clicking the edit button should change the nickname text into a field with the value', () => {
    store.dispatch(setUser(user));
    const { edit } = setup();
    expect(screen.queryByPlaceholderText('Nickname')).not.toBeInTheDocument();

    fireEvent.click(edit!);

    expect(screen.getByPlaceholderText('Nickname')).toBeInTheDocument();
});

test('Changing the users nickname and clicking save should update the nickname value', async () => {
    store.dispatch(setUser(user));
    const { edit } = setup();

    fireEvent.click(edit!);
    fireEvent.change(screen.getByPlaceholderText('Nickname'), { target: { value: 'Will' }});
    fireEvent.click(screen.getByTitle('Save'));

    await waitFor(() => expect(screen.getByText('Will')).toBeInTheDocument());
});

test('Clicking the save button should change the icon to a loading icon', () => {
    store.dispatch(setUser(user));
    const { edit } = setup();

    fireEvent.click(edit!);
    fireEvent.click(screen.getByTitle('Save'));

    expect(screen.getByTitle('Saving...')).toBeInTheDocument();
});

test('After updating user details, the loading icon should return back to the edit icon', () => {
    store.dispatch(setUser(user));
    const { edit } = setup();

    fireEvent.click(edit!);
    fireEvent.click(screen.getByTitle('Save'));
    act(() => { jest.runAllTimers() });

    expect(screen.getByTitle('Edit')).toBeInTheDocument();
});
