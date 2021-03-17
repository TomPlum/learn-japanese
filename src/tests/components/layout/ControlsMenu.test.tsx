import { fireEvent, render } from "@testing-library/react";
import { Router } from "react-router-dom";
import ControlsMenu from "../../../components/layout/ControlsMenu";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();

const setup = () => {
    const component = render(<Router history={history}><ControlsMenu /></Router>);
    return {
        home: component.getByText('HOME'),
        mode: component.getByText('LIGHT'),
        font: component.getByText('FONT'),
        help: component.getByText('HELP'),
        ...component
    }
}

test('Clicking the \'Home\' button should route the user to the landing page', () => {
    const { home } = setup();
    fireEvent.click(home);
    expect(history.location.pathname).toBe('/');
});

test('Clicking the \'Help\' button should route the user to the help page', () => {
    const { help } = setup();
    fireEvent.click(help);
    expect(history.location.pathname).toBe('/help');
});