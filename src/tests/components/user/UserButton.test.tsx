import { fireEvent, screen } from "@testing-library/react";
import UserButton, { UserButtonProps } from "../../../components/user/UserButton";
import renderReduxConsumer from "../../renderReduxConsumer";
import { store } from "../../../store";
import { clearUser, setUser, User } from "../../../slices/UserSlice";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

let props: UserButtonProps;
const history = createMemoryHistory();
const onClickHandler = jest.fn();

let user: User;

beforeEach(() => {
    props = {
        disabled: false,
        onClick: onClickHandler
    };

    user = {
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
});

afterEach(() => {
    store.dispatch(clearUser());
});

const setup = () => {
    const component = renderReduxConsumer(<Router history={history}><UserButton {...props} /></Router>);
    return {
        ...component
    }
}

test('Should display the users nickname if they have one and they are logged in', () => {
    store.dispatch(setUser(user));
    setup();
    expect(screen.getByText('Tom')).toBeInTheDocument();
});

test('Should display the users username if they don\'t have a nickname are logged in', () => {
    user.nickname = undefined;
    store.dispatch(setUser(user));

    setup();

    expect(screen.getByText('TomPlum42')).toBeInTheDocument();
});

test('Should display \'Login\' when the user is not logged in', () => {
    setup();
    expect(screen.getByText('Login')).toBeInTheDocument();
});

test('Clicking the button should show the dropdown menu if they are logged in', async () => {
    store.dispatch(setUser(user));
    setup();

    fireEvent.click(screen.getByText('Tom'));

    expect(await screen.findByText('Profile')).toBeInTheDocument();
    expect(await screen.findByText('Stats')).toBeInTheDocument();
    expect(await screen.findByText('Highscores')).toBeInTheDocument();
    expect(await screen.findByText('Logout')).toBeInTheDocument();

    expect(onClickHandler).not.toHaveBeenCalled();
});

test('Clicking the button should call the onClick event handler', () => {
    setup();

    fireEvent.click(screen.getByText('Login'));

    expect(screen.queryByText('Profile')).not.toBeInTheDocument();
    expect(screen.queryByText('Stats')).not.toBeInTheDocument();
    expect(screen.queryByText('Logout')).not.toBeInTheDocument();
    expect(onClickHandler).toHaveBeenCalled();
});

test('Clicking the logout button should clear the user from the redux store', async () => {
    store.dispatch(setUser(user));

    setup();

    //Click the button to show the dropdown menu
    fireEvent.click(screen.getByText('Tom'));

    //Click logout
    fireEvent.click(await screen.findByText('Logout'));

    expect(store.getState().user).toStrictEqual({ user: undefined });
});

//TODO: Not working for some reason.
test.skip('Clicking the high-scores option should route to the high-scores page', async () => {
    store.dispatch(setUser(user));
    setup();

    //Click the button to show the dropdown menu
    fireEvent.click(screen.getByText('Tom'));

    //Click high-scores
    fireEvent.click(await screen.findByText('Highscores'));

    expect(history.location.pathname).toBe("/high-scores");
});
