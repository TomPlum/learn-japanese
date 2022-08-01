import { store } from "../../../store";
import { clearUser, setUser } from "../../../slices/UserSlice";
import renderReduxConsumer from "../../renderReduxConsumer";
import ProfileCard from "../../../components/cards/ProfileCard";
import { fireEvent } from "@testing-library/react";
import { testUser } from "../../../setupTests";
import renderTranslatedReduxConsumer from "../../renderTranslatedReduxConsumer";

const onDismissHandler = jest.fn();

beforeEach(() => {
    store.dispatch(clearUser());
});

test('It should render the dismiss button if there no user logged in', () => {
    store.dispatch(clearUser());
    const component = renderTranslatedReduxConsumer(<ProfileCard onDismiss={onDismissHandler} />);
    fireEvent.click(component.getByTestId('dismiss-profile-card'));
    expect(onDismissHandler).toHaveBeenCalled();
});

test('It should not render the dismiss button if there a user logged in', () => {
    store.dispatch(setUser(testUser));
    const component = renderTranslatedReduxConsumer(<ProfileCard onDismiss={onDismissHandler} />);
    expect(component.queryByTitle('Dismiss')).not.toBeInTheDocument();
});

test('It should render the username if there is a user logged in', () => {
    store.dispatch(setUser(testUser));
    const component = renderTranslatedReduxConsumer(<ProfileCard onDismiss={onDismissHandler} />);
    expect(component.getByText('TomPlum42')).toBeInTheDocument();
});

test('It should render a generic username text if the user is not logged in', () => {
    store.dispatch(clearUser());
    const component = renderTranslatedReduxConsumer(<ProfileCard onDismiss={onDismissHandler} />);
    expect(component.getByText('User Profile')).toBeInTheDocument();
});

test('It should render a go-to-profile link button if the user is logged in', () => {
    store.dispatch(setUser(testUser));
    const component = renderTranslatedReduxConsumer(<ProfileCard onDismiss={onDismissHandler} />);
    expect(component.getByText('Go to profile')).toHaveAttribute('href', "/profile");
});

test('It should render a register link button if the user is not logged in', () => {
    store.dispatch(clearUser());
    const component = renderTranslatedReduxConsumer(<ProfileCard onDismiss={onDismissHandler} />);
    expect(component.getByText('Register')).toHaveAttribute('href', "/register");
});

test('It should render a notification centre link if the user is logged in', () => {
    store.dispatch(setUser(testUser));
    const component = renderTranslatedReduxConsumer(<ProfileCard onDismiss={onDismissHandler} />);
    expect(component.getByText('Notification Centre').parentElement).toHaveAttribute('href', "/notifications");
});

test('It should render an account settings link if the user is logged in', () => {
    store.dispatch(setUser(testUser));
    const component = renderTranslatedReduxConsumer(<ProfileCard onDismiss={onDismissHandler} />);
    expect(component.getByText('Account Settings').parentElement).toHaveAttribute('href', "/settings?type=user");
});

test('It should render a show me around tour link if the user is logged in', () => {
    store.dispatch(setUser(testUser));
    const component = renderTranslatedReduxConsumer(<ProfileCard onDismiss={onDismissHandler} />);
    expect(component.getByText('Show Me Around').parentElement).toHaveAttribute('href', "/home/tour");
});

test('It should render an registration reason when the user is not logged in', () => {
    store.dispatch(clearUser());
    const component = renderTranslatedReduxConsumer(<ProfileCard onDismiss={onDismissHandler} />);
    const reason = 'Create an account to save custom presets, compete in the high-scores, and track your progress and statistics.';
    expect(component.getByText(reason)).toBeInTheDocument();
});
