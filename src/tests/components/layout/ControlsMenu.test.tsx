import { fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import ControlsMenu, { ControlsMenuProps } from "../../../components/layout/ControlsMenu";
import { createMemoryHistory } from "history";
import { AppMode } from "../../../domain/AppMode";
import { store } from "../../../store";
import { setActive, setApplicationMode } from "../../../slices/ModeSlice";
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
        home: component.getByTestId('home-button-nav-link'),
        theme: component.getByTestId('theme-button'),
        font: component.getByTestId('font-selector'),
        login: component.getByTestId('user-button-nav-link'),
        ...component
    }
}

beforeEach(() => {
    props = {
        onLaunchLoginModal: onLaunchLoginModalHandler
    };
    store.dispatch(setActive(true));
    store.dispatch(setApplicationMode(AppMode.LEARN));
});

test('Clicking the \'Home\' button should route the user to the menu', () => {
    const { home } = setup();
    fireEvent.click(home);
    expect(history.location.pathname).toBe('/');
});

test('Passing active as false should disable the Login Button', () => {
    store.dispatch(setActive(false));
    const { login } = setup();
    expect(login).toHaveAttribute('aria-disabled', 'true');
});

test('Passing active as false should disable the Home Button', () => {
    store.dispatch(setActive(false));
    const { home } = setup();
    expect(home).toHaveAttribute('aria-disabled', 'true');
});

test('Clicking the login button while not logged in should call the onLaunchLogin event handler', () => {
    const { login } = setup();
    fireEvent.click(login);
    expect(onLaunchLoginModalHandler).toHaveBeenCalled();
});
