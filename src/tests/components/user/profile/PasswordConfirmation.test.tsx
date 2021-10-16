import { fireEvent, render, screen } from "@testing-library/react";
import PasswordConfirmation from "../../../../components/user/profile/PasswordConfirmation";
import PopOver from "../../../../components/ui/PopOver";

const onSubmitHandler = jest.fn();
const onDismissHandler = jest.fn();

const deleteAccountPopover = <PopOver
    title="Delete Account"
    text="Delete your user account and all of your personal data. This is an irreversible operation.
         You'll need to provide your password for confirmation."
/>

const setup = () => {
    const component = render(<PasswordConfirmation
        onSubmit={onSubmitHandler}
        onDismiss={onDismissHandler}
        alertInfo={deleteAccountPopover}
    />);

    return {
        password: component.getByPlaceholderText('Password'),
        back: component.getByText('I\'ve changed my mind'),
        confirm: component.getByText('Delete my account'),
        ...component
    }
}

test('Should focus the password field on mount', () => {
    const { password } = setup();
    expect(password).toHaveFocus();
});

test('Should render the confirmation warning', () => {
    setup();
    expect(screen.getByText('Please confirm your password.')).toBeInTheDocument();
});

test('Should render the danger alert', () => {
    setup();
    expect(screen.getByText('Remember - this operation is irreversible.')).toBeInTheDocument();
});

test('Should render the delete account button as disabled on mount', () => {
    const { confirm } = setup();
    expect(confirm).toBeDisabled();
});

test('Entering a password value should enable the delete my account button', () => {
    const { password } = setup();
    fireEvent.change(password, { target: { value: "MyPassword123-" }})
    expect(password).not.toBeDisabled();
});

test('Clicking the delete account button should call the onSubmitHandler with the password value', () => {
    const { password, confirm } = setup();
    fireEvent.change(password, { target: { value: "MyPassword123-" }});
    fireEvent.click(confirm);
    expect(onSubmitHandler).toHaveBeenLastCalledWith("MyPassword123-");
});

test('Clicking the "I\'ve changed my mind" button should call the onDismiss event handler', () => {
    const { back } = setup();
    fireEvent.click(back);
    expect(onDismissHandler).toHaveBeenCalled();
});
