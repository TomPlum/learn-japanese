import { screen } from "@testing-library/react";
import Main from "../../../components/layout/Main";
import { Environment } from "../../../utility/Environment";
import { createHashHistory } from "history";
import { HashRouter } from "react-router-dom";
import renderReduxConsumer from "../../renderReduxConsumer";

//Mock scrollIntoView() as it doesn't exist in JSDom
const scrollIntoView = jest.fn();
window.HTMLElement.prototype.scrollIntoView = scrollIntoView;

const setup = () => {
    renderReduxConsumer(
        <HashRouter>
            <Main/>
        </HashRouter>
    );
}

beforeEach(() => {
    Environment.variable = jest.fn().mockReturnValue("landing page description");
});

test('Navigating to the root URI should route to the Landing page', () => {
    setup();
    expect(screen.getByTestId('landing-page')).toBeInTheDocument();
});

test('Navigating to the /menu/play should route to the main menu in play mode', () => {
    createHashHistory().push('/menu/play');
    setup();
    expect(screen.getByText('Learn')).toBeInTheDocument(); //If in play, the mode button shows learn
});

test('Navigating to the /menu/learn should route to the main menu in learn mode', () => {
    createHashHistory().push('/menu/learn');
    setup();
    expect(screen.getByText('Play')).toBeInTheDocument(); //If in learn, the mode button shows play
});

test('Navigating to the /search should route to the Search page', () => {
    createHashHistory().push('/search');
    setup();
    expect(screen.getByTestId('search-page')).toBeInTheDocument();
});

test('Navigating to the /help should route to the Help page', () => {
    createHashHistory().push('/help');
    setup();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
});

test('Navigating to an unknown URI should route to the Not Found page', () => {
    createHashHistory().push('/nope');
    setup();
    expect(screen.getByText('Nani!?')).toBeInTheDocument();
});
