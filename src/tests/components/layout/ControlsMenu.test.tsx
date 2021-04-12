import { fireEvent, render } from "@testing-library/react";
import { Router } from "react-router-dom";
import ControlsMenu, { ControlsMenuProps } from "../../../components/layout/ControlsMenu";
import { createMemoryHistory } from "history";
import { AppMode } from "../../../types/AppMode";

const history = createMemoryHistory();
const onChangeAppModeHandler = jest.fn();

let props: ControlsMenuProps;

const setup = () => {
    const component = render(<Router history={history}><ControlsMenu {...props} /></Router>);
    return {
        home: component.getByText('Home'),
        mode: component.getByText('Learn'),
        theme: component.getByText('Light'),
        font: component.getByText('Font'),
        help: component.getByText('Help'),
        ...component
    }
}

beforeEach(() => {
    props = {
        active: true,
        onChangeAppMode: onChangeAppModeHandler,
        startingMode: AppMode.PLAY
    };
});

test('Clicking the \'Home\' button should route the user to the landing page', () => {
    const { home } = setup();
    fireEvent.click(home);
    expect(history.location.pathname).toBe('/');
});

test('Clicking the App Mode button should call the onChangeAppMode event handler', () => {
    const { mode } = setup();
    fireEvent.click(mode);
    expect(onChangeAppModeHandler).toHaveBeenCalled();
});

test('Passing active as true should enable the App Mode Button', () => {
    props.active = true;
    const { mode } = setup();
    expect(mode.parentElement).not.toHaveAttribute('aria-disabled', 'true');
});

test('Passing active as false should disable the App Mode Button', () => {
    props.active = false;
    const { mode } = setup();
    expect(mode.parentElement).toHaveAttribute('aria-disabled', 'true');
});

//TODO: Location is not updating for some reason.
test.skip('Clicking the \'Help\' button should route the user to the help page', () => {
    const { help } = setup();
    fireEvent.click(help);
    expect(history.location.pathname).toBe('/help');
});