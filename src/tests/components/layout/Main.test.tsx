import { render, screen } from "@testing-library/react";
import Main from "../../../components/layout/Main";
import { Environment } from "../../../utility/Environment";

beforeEach(() => {
    Environment.variable = jest.fn().mockReturnValue("landing page description");
});

test('Navigating to the root URI should route to the Landing page', () => {
    render(<Main/>);
    expect(screen.getByTestId('landing-page')).toBeInTheDocument();
});

test('Navigating to the /play should route to the Game page', () => {
    window.history.pushState({}, 'Play', '/play');
    render(<Main/>);
    expect(screen.getByText('Relaxed')).toBeInTheDocument();
});

test('Navigating to the /search should route to the Search page', () => {
    window.history.pushState({}, 'Search', '/search');
    render(<Main/>);
    expect(screen.getByText('あ')).toBeInTheDocument();
});

test('Navigating to an unknown URI should route to the Not Found page', () => {
    window.history.pushState({}, 'Not Found', '/nope');
    render(<Main/>);
    expect(screen.getByText('Nani!?')).toBeInTheDocument();
});