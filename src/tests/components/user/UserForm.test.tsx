import { fireEvent, render, screen } from "@testing-library/react";
import UserForm, { LoginRegistrationFormProps } from "../../../components/user/UserForm";
import { Provider } from "react-redux";
import { userStore } from "../../../store";

let props: LoginRegistrationFormProps;

const onCloseHandler = jest.fn();

beforeEach(() => {
    props = {
        show: true,
        location: "",
        onClose: onCloseHandler
    }
});

const setup = () => {
    const component = render(<Provider store={userStore}><UserForm {...props} /></Provider>);
    return {
        switchForm: component.getByText("I don't have an account"),
        close: component.getByText('Close'),
        ...component
    }
}

test('Should render the login form by default', () => {
    setup();
    expect(screen.getAllByText('Login')[1]).toBeInTheDocument();
});

test('Clicking the "I don\'t have an account" button should switch to the registration form', () => {
    const { switchForm } = setup();
    fireEvent.click(switchForm);
    expect(screen.getAllByText('Register')[1]).toBeInTheDocument();
});

test('Clicking the close button should call the onClose event handler', async () => {
    const { close } = setup();
    fireEvent.click(close);
    expect(onCloseHandler).toHaveBeenCalled();
});
