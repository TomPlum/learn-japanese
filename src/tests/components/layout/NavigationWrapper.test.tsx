import { fireEvent, screen } from "@testing-library/react";
import NavigationWrapper from "../../../components/layout/NavigationWrapper";
import renderReduxConsumer from "../../renderReduxConsumer";

const setup = () => {
    const component = renderReduxConsumer(<NavigationWrapper />);
    return {
        login: component.getByText('Login'),
        ...component
    }
}

test('Clicking the login button while not logged in should launch the user modal', async () => {
    const { login } = setup();
    fireEvent.click(login);
    expect(await screen.findByTestId('user-modal')).toBeInTheDocument();
});

test('Clicking "x" close button in the user modal should close it', async () => {
    const { login } = setup();

    //Clicking login should load the modal
    fireEvent.click(login);
    const userModal = await screen.findByTestId('user-modal');
    expect(userModal).toBeInTheDocument();

    //Clicking the 'x' button should close it
    fireEvent.click(screen.getByText('Close'));
    expect(userModal).not.toBeInTheDocument();
});
