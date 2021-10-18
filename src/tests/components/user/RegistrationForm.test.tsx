import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import RegistrationForm from "../../../components/user/RegistrationForm";
import authService from "../../../service/AuthenticationService";
import each from "jest-each";

const onSuccessHandler = jest.fn();
const mockRegister = jest.fn();

beforeEach(() => {
    authService.register = mockRegister;
});

const setup = () => {
    const component = render(<RegistrationForm onSuccess={onSuccessHandler} />);
    return {
        email: component.getByPlaceholderText('Enter email'),
        username: component.getByPlaceholderText('Username'),
        nickname: component.getByPlaceholderText('Nickname'),
        password: component.getByPlaceholderText('Password'),
        secondPassword: component.getByPlaceholderText('Confirm Password'),
        register: component.getByText('Register'),
        ...component
    }
}

test('The email field should start empty', () => {
    const { email } = setup();
    expect(email).toHaveValue("");
});

test('The username field should start empty', () => {
    const { username } = setup();
    expect(username).toHaveValue("");
});

test('The nickname field should start empty', () => {
    const { nickname } = setup();
    expect(nickname).toHaveValue("");
});

test('The password field should start empty', () => {
    const { password } = setup();
    expect(password).toHaveValue("");
});

test('The second password field should start empty', () => {
    const { secondPassword } = setup();
    expect(secondPassword).toHaveValue("");
});

test('The form should start invalid', () => {
    const { register } = setup();
    expect(register).toBeDisabled();
});

test('When all fields are valid, the register button should be enabled', () => {
    setValidFields();
    const register = screen.getByText('Register');
    expect(register).not.toBeDisabled();
});

test('Clicking the register button when it is enabled should call the onSuccess event handler', async () => {
    mockRegister.mockResolvedValueOnce({ data: { success: true } });
    setValidFields();
    fireEvent.click(screen.getByText('Register'));
    await waitFor(() => expect(onSuccessHandler).toHaveBeenCalledWith("TomPlum42"));
});

test('When register returns an error it should display it in an alert if the promise resolved', async () => {
    mockRegister.mockResolvedValueOnce({ error: "Internal Server Error." });
    setValidFields();
    fireEvent.click(screen.getByText('Register'));
    await waitFor(() => expect(screen.getByText('Internal Server Error.')).toBeInTheDocument());
});

test('When register returns an error it should display it in an alert if the promise was rejected', async () => {
    mockRegister.mockRejectedValueOnce({ error: "Internal Server Error." });
    setValidFields();
    fireEvent.click(screen.getByText('Register'));
    await waitFor(() => expect(screen.getByText('Internal Server Error.')).toBeInTheDocument());
});

test('Focusing the email field should show the info text', () => {
    const { email } = setup();
    fireEvent.focus(email);
    expect(screen.getByText("Your email address will not be shared with anyone else.")).toBeInTheDocument();
});

test('Blurring the email field should hide the info text', () => {
    const { email } = setup();
    fireEvent.blur(email);
    expect(screen.queryByText("Your email address will not be shared with anyone else.")).not.toBeInTheDocument();
});

each(
    ["", "tom@domain", "tomhotmail.com", "tom@aol.c"]
).test('Typing an invalid email address [%s] should disable the register button', (value: string) => {
    setValidFields();
    fireEvent.change(screen.getByPlaceholderText('Enter email'), { target: { value: value }});
    expect(screen.getByText('Register')).toBeDisabled();
});

each(
    ["", "a", "ab", "abcdefghijklmnoq"]
).test('Typing an invalid username [%s] should disable the register button', (value: string) => {
    setValidFields();
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: value }});
    expect(screen.getByText('Register')).toBeDisabled();
});

each(
    ["", "a", "ab", "abcdefghijklm"]
).test('Typing an invalid nickname [%s] should disable the register button', (value: string) => {
    setValidFields();
    fireEvent.change(screen.getByPlaceholderText('Nickname'), { target: { value: value }});
    expect(screen.getByText('Register')).toBeDisabled();
});

each(
    ["P4ssw0rd", "Password-", "P4SSW0RD-", "p4ssw0rd-", "P4swrd-", "Aa0-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"]
).test('Typing an invalid password [%s] should disable the register button', (value: string) => {
    setValidFields();
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: value }});
    expect(screen.getByText('Register')).toBeDisabled();
});

each(
    ["P4ssw0rd", "Password-", "P4SSW0RD-", "p4ssw0rd-", "P4swrd-", "Aa0-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"]
).test('Typing an invalid secondary password [%s] should disable the register button', (value: string) => {
    setValidFields();
    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), { target: { value: value }});
    expect(screen.getByText('Register')).toBeDisabled();
});

function setValidFields() {
    const { email, username, nickname, secondPassword, password, register  } = setup();
    fireEvent.change(email, { target: { value: 'thomas.plumpton@domain.com' }});
    fireEvent.change(username, { target: { value: 'TomPlum42' }});
    fireEvent.change(nickname, { target: { value: 'Tom' }});
    fireEvent.change(password, { target: { value: 'P4ssw0rd-' }});
    fireEvent.change(secondPassword, { target: { value: 'P4ssw0rd-' }});
    expect(register).not.toBeDisabled();
}

