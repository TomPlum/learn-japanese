import { fireEvent, screen, waitFor } from "@testing-library/react";
import LoginForm from "../../../components/user/LoginForm";
import renderReduxConsumer from "../../renderReduxConsumer";
import auth, { LoginResponse } from "../../../service/AuthenticationService";

jest.mock("../../../service/AuthenticationService");

const onSuccessHandler = jest.fn();
const loginService = auth.login as jest.MockedFunction<() => Promise<LoginResponse>>;
let registeredUsername: string | undefined = undefined;

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

const setup = () => {
    const component = renderReduxConsumer(<LoginForm onSuccess={onSuccessHandler} username={registeredUsername} />);

    return {
        username: component.getByPlaceholderText('Username'),
        password: component.getByPlaceholderText('Password'),
        login: component.getByText('Login'),
        ...component
    }
}

test('Should focus the username field on mount', () => {
    const { username } = setup();
    expect(username).toHaveFocus();
});

test('Pressing the enter key while the username and password are valid should invoke login', async () => {
    loginService.mockResolvedValueOnce(validLoginResponse);

    const { username, password, container } = setup();

    fireEvent.change(username, { target: { value: 'TomPlum42' }});
    fireEvent.change(password, { target: { value: 'Password'}});
    fireEvent.keyDown(container, { key: 'Enter', code: 13, charCode: 13 });

    await waitFor(() => expect(onSuccessHandler).toHaveBeenCalled());
});

test('Pressing the enter key while the username is invalid should not call the onSuccess handler', () => {
    const { password, container } = setup();
    fireEvent.change(password, { target: { value: 'Password' }});
    fireEvent.keyDown(container, { key: 'Enter', code: 13, charCode: 13 });
    expect(onSuccessHandler).not.toHaveBeenCalled();
});

test('Pressing the enter key while the password is invalid should not call the onSuccess handler', () => {
    const { username, container } = setup();
    fireEvent.change(username, { target: { value: 'Tom' }});
    fireEvent.keyDown(container, { key: 'Enter', code: 13, charCode: 13 });
    expect(onSuccessHandler).not.toHaveBeenCalled();
});

test('Clicking the login button while the form is invalid should not call the onSuccess event handler', () => {
    const { login } = setup();
    fireEvent.click(login);
    expect(onSuccessHandler).not.toHaveBeenCalled();
});

test('The username must be present for the form the be valid', () => {
    const { username, password, login } = setup();

    //Enter Credentials
    fireEvent.change(username, { target: { value: '' }});
    fireEvent.change(password, { target: { value: 'P4ssw0rd '}});

    expect(login).toBeDisabled();
});

test('The password must be present for the form the be valid', () => {
    const { username, password, login } = setup();

    //Enter Credentials
    fireEvent.change(username, { target: { value: 'TomPlum42' }});
    fireEvent.change(password, { target: { value: ''}});

    expect(login).toBeDisabled();
});

test('Entering a valid username and password should enable the Login button', () => {
    const { username, password, login } = setup();

    //Enter Credentials
    fireEvent.change(username, { target: { value: 'TomPlum42' }});
    fireEvent.change(password, { target: { value: 'Password'}});

    expect(login).not.toBeDisabled();
});

test('When the login API call returns successfully, then it should call the onSuccess event handler', async () => {
    loginService.mockResolvedValueOnce(validLoginResponse);

    const { username, password, login } = setup();

    //Enter Credentials
    fireEvent.change(username, { target: { value: 'TomPlum42' }});
    fireEvent.change(password, { target: { value: 'P4ssw0rd' }});

    //Login
    fireEvent.click(login);
    await waitFor(() => expect(onSuccessHandler).toHaveBeenCalled());
});

test('Clicking the login button while the form is valid should call the authentication service', async () => {
    loginService.mockResolvedValueOnce(validLoginResponse);

    const { username, password, login } = setup();

    //Enter Credentials
    fireEvent.change(username, { target: { value: 'TomPlum42' }});
    fireEvent.change(password, { target: { value: 'P4ssw0rd' }});

    //Login
    fireEvent.click(login);

    await waitFor(() => expect(loginService).toHaveBeenLastCalledWith("TomPlum42", "P4ssw0rd"));
});

test('When the auth service returns an error, it should render a generic error message', async () => {
    loginService.mockRejectedValue("It's broken");

    const { username, password, login } = setup();

    //Enter Credentials
    fireEvent.change(username, { target: { value: 'TomPlum42' }});
    fireEvent.change(password, { target: { value: 'P4ssw0rd' }});

    //Login
    fireEvent.click(login);

    expect(await screen.findByText('Sorry, an unknown error has occurred.')).toBeInTheDocument();
});

test('When the auth service returns an an authentication error then it should render an alert', async () => {
    loginService.mockRejectedValue("AUTHENTICATION_ERROR");

    const { username, password, login } = setup();

    //Enter Credentials
    fireEvent.change(username, { target: { value: 'TomPlum42' }});
    fireEvent.change(password, { target: { value: 'P4ssw0rd' }});

    //Login
    fireEvent.click(login);

    await waitFor(() => expect(screen.getByText("Username or password is incorrect.")).toBeInTheDocument());
});

test('When the auth service returns an an authentication error then it should remove the password value', async () => {
    loginService.mockRejectedValue("AUTHENTICATION_ERROR");

    const { username, password, login } = setup();

    //Enter Credentials
    fireEvent.change(username, { target: { value: 'TomPlum42' }});
    fireEvent.change(password, { target: { value: 'P4ssw0rd' }});

    expect(password).toHaveValue('P4ssw0rd');

    //Login
    fireEvent.click(login);

    await waitFor(() => expect(password).toHaveValue(""));
});


test('When the auth service returns an an authentication error then it should invalidate the form', async () => {
    loginService.mockRejectedValue("AUTHENTICATION_ERROR");

    const { username, password, login } = setup();

    //Enter Credentials
    fireEvent.change(username, { target: { value: 'TomPlum42' }});
    fireEvent.change(password, { target: { value: 'P4ssw0rd' }});

    expect(login).not.toBeDisabled();

    //Login
    fireEvent.click(login);

    await waitFor(() => expect(login).toBeDisabled());
});

test('When the username prop is passed then it should populate the username field with it', () => {
    registeredUsername = "TomPlum42";
    const { username } = setup();
    expect(username).toHaveValue("TomPlum42");
});

test('When the username prop is passed then it should render a success alert', () => {
    registeredUsername = "TomPlum42";
    setup();
    expect(screen.getByText('Registration successful. You can log-in below.')).toBeInTheDocument();
});

test('When the username prop is passed then it should focus the password field', () => {
    registeredUsername = "TomPlum42";
    const { password } = setup();
    expect(password).toHaveFocus();
});
