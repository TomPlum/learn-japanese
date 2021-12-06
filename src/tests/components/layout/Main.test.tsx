import { screen } from "@testing-library/react";
import Main from "../../../components/layout/Main";
import { Environment } from "../../../utility/Environment";
import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import renderReduxConsumer from "../../renderReduxConsumer";

//Mock scrollIntoView() as it doesn't exist in JSDom
const scrollIntoView = jest.fn();
window.HTMLElement.prototype.scrollIntoView = scrollIntoView;

const setup = () => {
    renderReduxConsumer(
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    );
}

beforeEach(() => {
    Environment.variable = jest.fn().mockReturnValue("landing page description");
});

test('Navigating to the root URI should route to the Landing page', async () => {
    createBrowserHistory().push('/example-base-path/');
    setup();
    expect(await screen.findByTestId('landing-page')).toBeInTheDocument();
});

test('Navigating to the /menu/play should route to the main menu in play mode', () => {
    createBrowserHistory().push('/example-base-path/menu/play');
    setup();
    expect(screen.getByText('Select Game Mode')).toBeInTheDocument(); //If in play, the mode button shows learn
});

test('Navigating to the /menu/learn should route to the main menu in learn mode', () => {
    createBrowserHistory().push('/example-base-path/menu/learn');
    setup();
    expect(screen.getByText('Select Topic')).toBeInTheDocument(); //If in learn, the mode button shows play
});

test('Navigating to the /search should route to the Search page', async () => {
    createBrowserHistory().push('/example-base-path/search');
    setup();
    expect(await screen.findByTestId('search-page')).toBeInTheDocument();
});

test('Navigating to the /help should route to the Help page', async () => {
    createBrowserHistory().push('/example-base-path/help');
    setup();
    expect(await screen.findByText('Frequently Asked Questions')).toBeInTheDocument();
});

test('Navigating to an unknown URI should route to the Not Found page', () => {
    createBrowserHistory().push('/example-base-path/nope');
    setup();
    expect(screen.getByText('Nani!?')).toBeInTheDocument();
});
