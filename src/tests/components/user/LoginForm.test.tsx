import { fireEvent } from "@testing-library/react";
import LoginForm from "../../../components/user/LoginForm";
import renderReduxConsumer from "../../renderReduxConsumer";

const onSuccessHandler = jest.fn();

const setup = () => {
    const component = renderReduxConsumer(<LoginForm onSuccess={onSuccessHandler}/>);

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

test('Pressing the enter key while the username and password are valid should invoke login', () => {
    const { username, password, container } = setup();
    fireEvent.change(username, { target: { value: 'TomPlum42' }});
    fireEvent.change(password, { target: { value: 'Password'}});
    fireEvent.keyDown(container, { key: 'Enter', code: 13, charCode: 13 });
    expect(onSuccessHandler).toHaveBeenCalled();
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

test('Clicking the login button while the form is valid should call the onSubmit event handler', () => {
    const { username, password, login } = setup();

    //Enter Credentials
    fireEvent.change(username, { target: { value: 'TomPlum42 ' }});
    fireEvent.change(password, { target: { value: 'P4ssw0rd ' }});

    //Login
    fireEvent.click(login);
    expect(onSuccessHandler).toHaveBeenCalled();
});
