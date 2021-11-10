import { fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import ControlsMenu, { ControlsMenuProps } from "../../../components/layout/ControlsMenu";
import { createMemoryHistory } from "history";
import { AppMode } from "../../../domain/AppMode";
import { store } from "../../../store";
import { setApplicationMode } from "../../../slices/ModeSlice";
import renderReduxConsumer from "../../renderReduxConsumer";

const history = createMemoryHistory();
const onLaunchLoginModalHandler = jest.fn();

let props: ControlsMenuProps;

const setup = () => {
    const component = renderReduxConsumer(
        <Router history={history}>
            <ControlsMenu {...props} />
        </Router>
    );

    return {
        home: component.getByText('Home'),
        mode: component.getByText('Play'),
        theme: component.getByText('Light'),
        font: component.getByText('Font'),
        login: component.getByText('Login'),
        ...component
    }
}

beforeEach(() => {
    props = {
        active: true,
        onLaunchLoginModal: onLaunchLoginModalHandler
    };
    store.dispatch(setApplicationMode(AppMode.LEARN));
});

test('Clicking the \'Home\' button should route the user to the landing page', () => {
    const { home } = setup();
    fireEvent.click(home);
    expect(history.location.pathname).toBe('/');
});

test('Passing active as true should enable the App Mode Button', () => {
    props.active = true;
    const { mode } = setup();
    expect(mode.parentElement).not.toHaveAttribute('aria-disabled', 'true');
});

test.skip('Passing active as false should disable the App Mode Button', () => {
    props.active = false;
    const { mode } = setup();
    expect(mode.parentElement).toHaveAttribute('aria-disabled', 'true');
});

test('Passing active as false should disable the Login Button', () => {
    props.active = false;
    const { login } = setup();
    expect(login.parentElement).toHaveAttribute('aria-disabled', 'true');
});

test('Passing active as false should disable the Home Button', () => {
    props.active = false;
    const { home } = setup();
    expect(home.parentElement).toHaveAttribute('aria-disabled', 'true');
});

test('Clicking the login button while not logged in should call the onLaunchLogin event handler', () => {
    const { login } = setup();
    fireEvent.click(login);
    expect(onLaunchLoginModalHandler).toHaveBeenCalled();
});

//TODO: Location is not updating for some reason.
test.skip('Clicking the \'Help\' button should route the user to the help page', () => {
    /*const { help } = setup();
    fireEvent.click(help);
    expect(history.location.pathname).toBe('/help');*/
});
