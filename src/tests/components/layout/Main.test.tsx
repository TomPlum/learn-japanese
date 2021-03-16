import { render, screen } from "@testing-library/react";
import Main from "../../../components/layout/Main";
import { Environment } from "../../../utility/Environment";
import { createHashHistory } from "history";
import { HashRouter } from "react-router-dom";

const setup = () => {
    render(
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

test('Navigating to the /play should route to the Game page', () => {
    createHashHistory({}).push('/play');
    setup();
    expect(screen.getByText('Relaxed')).toBeInTheDocument();
});

test('Navigating to the /search should route to the Search page', () => {
    createHashHistory({}).push('/search');
    setup();
    expect(screen.getByTestId('search-page')).toBeInTheDocument();
});

test('Navigating to the /help should route to the Help page', () => {
    createHashHistory({}).push('/help');
    setup();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
});

test('Navigating to an unknown URI should route to the Not Found page', () => {
    createHashHistory({}).push('/nope');
    setup();
    expect(screen.getByText('Nani!?')).toBeInTheDocument();
});