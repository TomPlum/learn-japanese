import { fireEvent, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import RegistrationForm from "../../../components/user/RegistrationForm";
import authService from "../../../service/AuthenticationService";
import each from "jest-each";
import renderWithTranslation from "../../renderWithTranslation";

const onSuccessHandler = jest.fn();
const mockRegister = jest.fn();
const mockUsernameEligible = jest.fn();
const mockEmailEligible = jest.fn();

jest.mock("../../../service/UserService", () => {
    return function() {
        return {
            usernameExists: mockUsernameEligible,
            emailAlreadyRegistered: mockEmailEligible
        }
    };
});

beforeEach(() => {
    authService.register = mockRegister;
    mockUsernameEligible.mockResolvedValueOnce({ exists: false });
    mockEmailEligible.mockResolvedValueOnce({ exists: false });
});

const setup = () => {
    const component = renderWithTranslation(<RegistrationForm onSuccess={onSuccessHandler} />);
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

test('When all fields are valid, the register button should be enabled', async () => {
    await setValidFields();
    const register = screen.getByText('Register');
    expect(register).not.toBeDisabled();
});

test('Clicking the register button when it is enabled should call the onSuccess event handler', async () => {
    mockRegister.mockReset().mockResolvedValueOnce({ data: { success: true } });
    await setValidFields();
    fireEvent.click(screen.getByText('Register'));
    await waitFor(() => expect(onSuccessHandler).toHaveBeenCalledWith("TomPlum42"));
});

test('When register returns an error it should display it in an alert if the promise resolved', async () => {
    mockRegister.mockReset().mockResolvedValueOnce({ error: "Internal Server Error." });
    await setValidFields();
    fireEvent.click(screen.getByText('Register'));
    await waitFor(() => expect(screen.getByText('Internal Server Error.')).toBeInTheDocument());
});

test('When register returns an error it should display it in an alert if the promise was rejected', async () => {
    mockRegister.mockReset().mockRejectedValueOnce({ error: "Internal Server Error." });
    await setValidFields();
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
).test('Typing an invalid email address [%s] should disable the register button', async (value: string) => {
    await setValidFields();
    fireEvent.change(screen.getByPlaceholderText('Enter email'), { target: { value: value }});
    expect(screen.getByText('Register')).toBeDisabled();
});

each(
    ["", "a", "ab", "abcdefghijklmnoq"]
).test('Typing an invalid username [%s] should disable the register button', async (value: string) => {
    await setValidFields();
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: value }});
    expect(screen.getByText('Register')).toBeDisabled();
});

each(
    ["", "a", "ab", "abcdefghijklm"]
).test('Typing an invalid nickname [%s] should disable the register button', async (value: string) => {
    await setValidFields();
    fireEvent.change(screen.getByPlaceholderText('Nickname'), { target: { value: value }});
    expect(screen.getByText('Register')).toBeDisabled();
});

each(
    ["P4ssw0rd", "Password-", "P4SSW0RD-", "p4ssw0rd-", "P4swrd-", "Aa0-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"]
).test('Typing an invalid password [%s] should disable the register button', async (value: string) => {
    await setValidFields();
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: value }});
    expect(screen.getByText('Register')).toBeDisabled();
});

each(
    ["P4ssw0rd", "Password-", "P4SSW0RD-", "p4ssw0rd-", "P4swrd-", "Aa0-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"]
).test('Typing an invalid secondary password [%s] should disable the register button', async (value: string) => {
    await setValidFields();
    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), { target: { value: value }});
    expect(screen.getByText('Register')).toBeDisabled();
});

test('Should display an informational message if the user already exists', async () => {
    mockUsernameEligible.mockReset().mockResolvedValue({ exists: true });
    const { username } = setup();
    fireEvent.change(username, { target: { value: 'TomPlum42' }});
    expect(await screen.findByText('This username is already taken.'));
});

test('Should render an error message if the username eligibility service returns an error', async () => {
    mockUsernameEligible.mockReset().mockResolvedValue({ error: "Failed to get username eligibility" });
    const { username } = setup();
    fireEvent.change(username, { target: { value: 'TomPlum42' }});
    expect(await screen.findByText('Failed to get username eligibility'));
});

test('Should render an error message if the username eligibility service rejects the promise', async () => {
    mockUsernameEligible.mockReset().mockRejectedValueOnce({ error: "Failed to get username eligibility" });
    const { username } = setup();
    fireEvent.change(username, { target: { value: 'TomPlum42' }});
    expect(await screen.findByText('Failed to get username eligibility'));
});

test('Should display an informational message if the email already exists', async () => {
    mockEmailEligible.mockReset().mockResolvedValue({ exists: true });
    const { email } = setup();
    fireEvent.change(email, { target: { value: 'tom@hotmail.com' }});
    expect(await screen.findByText('This email address is already registered.'));
});

test('Should render an error message if the email eligibility service returns an error', async () => {
    mockEmailEligible.mockReset().mockResolvedValue({ error: "Failed to get email eligibility" });
    const { email } = setup();
    fireEvent.change(email, { target: { value: 'tom@hotmail.com' }});
    expect(await screen.findByText('Failed to get email eligibility'));
});

test('Should render an error message if the email eligibility service rejects the promise', async () => {
    mockEmailEligible.mockReset().mockRejectedValueOnce({ error: "Failed to get email eligibility" });
    const { email } = setup();
    fireEvent.change(email, { target: { value: 'tom@hotmail.com' }});
    expect(await screen.findByText('Failed to get email eligibility'));
});

test('Should render the password policy rule about lowercase characters if there aren\'t any', () => {
    const { password } = setup();
    fireEvent.change(password, { target: { value: 'A' }});
    expect(screen.getByText('Password must contain at least one lowercase character.'));
});

test('Should render the password policy rule about uppercase characters if there aren\'t any', () => {
    const { password } = setup();
    fireEvent.change(password, { target: { value: 'a' }});
    expect(screen.getByText('Password must contain at least one uppercase character.'));
});

test('Should render the password policy rule about numbers if there aren\'t any', () => {
    const { password } = setup();
    fireEvent.change(password, { target: { value: 'aA' }});
    expect(screen.getByText('Password must contain at least one number.'));
});

test('Should render the password policy rule about special characters if there aren\'t any', () => {
    const { password } = setup();
    fireEvent.change(password, { target: { value: 'aA1' }});
    expect(screen.getByText('Password must contain at least one special character.'));
});

test('Should render the password policy rule about length if it it too short.', () => {
    const { password } = setup();
    fireEvent.change(password, { target: { value: 'aA1-' }});
    expect(screen.getByText('Password must be between 8 and 36 characters (inclusive).'));
});

test('Should render the passwords do not match error if the first password is valid and the second does not match', () => {
    const { password, secondPassword } = setup();
    fireEvent.change(password, { target: { value: 'Password123-' }});
    fireEvent.change(secondPassword, { target: { value: 'Password123' }});
    expect(screen.getByText('Passwords do not match.')).toBeInTheDocument();
});

test('Should not render the passwords do not match error if the first password is invalid', () => {
    const { password, secondPassword } = setup();
    fireEvent.change(password, { target: { value: 'Pa' }});
    fireEvent.change(secondPassword, { target: { value: 'Password123' }});
    expect(screen.queryByText('Passwords do not match.')).not.toBeInTheDocument();
});

test('Should stop rendering the email is already registered message after clearing the field', async () => {
    // Type in a valid email address
    mockEmailEligible.mockReset().mockResolvedValue({ exists: true });
    const { email } = setup();
    fireEvent.change(email, { target: { value: 'test@domain.com' }});

    // Should display the error message about already being registered
    const errorMessage = await screen.findByText('This email address is already registered.');
    expect(errorMessage).toBeInTheDocument();

    // Clearing the field should stop rendering the message
    fireEvent.change(email, { target: { value: '' }});
    await waitForElementToBeRemoved(errorMessage);
});

async function setValidFields() {
    const { email, username, nickname, secondPassword, password, register  } = setup();
    fireEvent.change(email, { target: { value: 'thomas.plumpton@domain.com' }});
    expect(await screen.findByText('Email address is available.'));

    fireEvent.change(username, { target: { value: 'TomPlum42' }});
    expect(await screen.findByText('Username is available.'));

    fireEvent.change(nickname, { target: { value: 'Tom' }});
    fireEvent.change(password, { target: { value: 'P4ssw0rd-' }});
    fireEvent.change(secondPassword, { target: { value: 'P4ssw0rd-' }});

    expect(register).not.toBeDisabled();
}

