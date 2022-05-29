import { store } from "../../../store";
import { clearUser, setUser, User } from "../../../slices/UserSlice";
import { createMemoryHistory } from "history";
import renderReduxConsumer from "../../renderReduxConsumer";
import LoginPage from "../../../components/pages/LoginPage";
import { Router } from "react-router-dom";
import { fireEvent, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import auth from "../../../service/AuthenticationService";

const user: User = {
    username: "TomPlum42",
    nickname: "Tom",
    email: "tom@hotmail.com",
    creationDate: "2021-08-09T00:00",
    enabled: true,
    credentialsExpired: false,
    locked: false,
    expired: false,
    roles: ["user"],
    token: "TOKEN",
    refreshToken: "REFRSEH_TOKEN",
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

const validLoginResponse = {
    username: "TomPlum42",
    email: "tom@hotmail.com",
    nickname: "Tom",
    roles: ["admin"],
    creationDate: "2021-10-15",
    locked: false,
    expired: false,
    credentialsExpired: false,
    enabled: true,
    token: "TOKEN",
    refreshToken: "REFRESH_TOKEN",
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

const mockLogin = jest.fn();
const history = createMemoryHistory();

beforeEach(() => {
    auth.login = mockLogin;
    store.dispatch(clearUser());
});

test('Should redirect to the home page if the user is already logged in', () => {
    store.dispatch(setUser(user));
    renderReduxConsumer(<Router history={history}><LoginPage /></Router>);
    expect(history.location.pathname).toBe('/home');
});

test('Should render the login form when there is no user logged in', () => {
    store.dispatch(clearUser());
    const component = renderReduxConsumer(<Router history={history}><LoginPage /></Router>);
    expect(component.getByTestId('login-form')).toBeInTheDocument();
});

test('Should redirect to the home page after successfully logging in', async () => {
    // Start with no user
    store.dispatch(clearUser());
    const component = renderReduxConsumer(<Router history={history}><LoginPage /></Router>);

    // Log in
    mockLogin.mockResolvedValueOnce(validLoginResponse);
    fireEvent.change(component.getByPlaceholderText('Username'), { target: { value: "TomPlum" } });
    fireEvent.change(component.getByPlaceholderText('Password'), { target: { value: "MyPassword123-" } });

    // Should redirect to the home page on submit
    fireEvent.click(component.getByText('Login'));
    await waitForElementToBeRemoved(await component.findByTestId('login-loading'));
    await waitFor(() => expect(history.location.pathname).toBe('/home'));
});

test('Should pass the username from the location query parameter into the login form', () => {
    store.dispatch(clearUser());
    history.push("/home?username=TestingUser");
    const component = renderReduxConsumer(<Router history={history}><LoginPage /></Router>);
    expect(component.getByPlaceholderText('Username')).toHaveValue("TestingUser");
});
