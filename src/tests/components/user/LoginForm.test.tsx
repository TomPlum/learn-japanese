import { fireEvent, render } from "@testing-library/react";
import LoginForm from "../../../components/user/LoginForm";
import { Provider } from "react-redux";
import { userStore } from "../../../store";

const onSuccessHandler = jest.fn();

const setup = () => {
    const component = render(<Provider store={userStore}><LoginForm onSuccess={onSuccessHandler}/></Provider>);

    return {
        username: component.getByPlaceholderText('Username'),
        password: component.getByPlaceholderText('Password'),
        login: component.getByText('Login'),
        ...component
    }
}

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

test('Clicking the login button while the form is valid should call the onSubmit event handler', () => {
    const { username, password, login } = setup();

    //Enter Credentials
    fireEvent.change(username, { target: { value: 'TomPlum42 ' }});
    fireEvent.change(password, { target: { value: 'P4ssw0rd ' }});

    //Login
    fireEvent.click(login);
    expect(onSuccessHandler).toHaveBeenCalled();
});
