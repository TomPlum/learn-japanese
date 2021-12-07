import { fireEvent, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import NavigationBar, { NavigationBarProps } from "../../../components/layout/NavigationBar";
import { createMemoryHistory } from "history";
import { AppMode } from "../../../domain/AppMode";
import { store } from "../../../store";
import { setActive, setApplicationMode } from "../../../slices/ModeSlice";
import renderReduxConsumer from "../../renderReduxConsumer";
import { clearUser, setUser, User } from "../../../slices/UserSlice";

const history = createMemoryHistory();
const onLaunchLoginModalHandler = jest.fn();

let props: NavigationBarProps;

const user: User = {
    username: "TomPlum42",
    nickname: "Tom",
    email: "tom@hotmail.com",
    creationDate: "2021-08-09T00:00",
    expired: false,
    locked: false,
    credentialsExpired: false,
    enabled: true,
    roles: ["user"],
    token: "TOKEN",
    preferences: {
        defaultFont: "Gothic",
        theme: "Dark Mode",
        language: "English",
        highScores: "Ask Each Time",
        defaultMode: "Play",
        cardsPerDay: 10,
        confidenceMenuStyle: "Numbers 1 - 6"
    }
};

const setup = () => {
    const component = renderReduxConsumer(
        <Router history={history}>
            <NavigationBar {...props} />
        </Router>
    );

    return {
        home: component.getByTestId('home-button-nav-link'),
        theme: component.getByTestId('theme-button'),
        font: component.getByTestId('font-selector'),
        login: component.getByTestId('user-button-nav-link'),
        ...component
    }
}

beforeEach(() => {
    props = {
        onLaunchLoginModal: onLaunchLoginModalHandler
    };
    store.dispatch(setActive(true));
    store.dispatch(setApplicationMode(AppMode.LEARN));
});

test('Clicking the \'Home\' button should route the user to the menu', () => {
    const { home } = setup();
    fireEvent.click(home);
    expect(history.location.pathname).toBe('/');
});

test('Passing active as false should disable the Login Button', () => {
    store.dispatch(setActive(false));
    const { login } = setup();
    expect(login).toHaveAttribute('aria-disabled', 'true');
});

test('Passing active as false should disable the Home Button', () => {
    store.dispatch(setActive(false));
    const { home } = setup();
    expect(home).toHaveAttribute('aria-disabled', 'true');
});

test('Clicking the login button while not logged in should call the onLaunchLogin event handler', () => {
    const { login } = setup();
    fireEvent.click(login);
    expect(onLaunchLoginModalHandler).toHaveBeenCalled();
});

test('Should render the notifications button if the user is logged in', () => {
    store.dispatch(setUser(user));
    setup();
    expect(screen.getByTestId('notifications-button')).toBeInTheDocument();
});

test('Should not render the notifications button if the user is not logged in', () => {
    store.dispatch(clearUser());
    setup();
    expect(screen.queryByTestId('notifications-button')).not.toBeInTheDocument();
});
