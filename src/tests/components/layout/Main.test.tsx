import { render, screen } from "@testing-library/react";
import Main from "../../../components/layout/Main";
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { Environment } from "../../../utility/Environment";

const setup = (route: string) => {
    const history = createMemoryHistory();
    history.push(route);
    render(
        <Router history={history}>
            <Main/>
        </Router>
    );
}

beforeEach(() => {
    Environment.variable = jest.fn().mockReturnValue("landing page description")
});

test('Navigating to the root URI should route to the Landing page', () => {
    setup('/');
    expect(screen.getByTestId('landing-page')).toBeInTheDocument();
});

test('Navigating to the /play should route to the Game page', () => {
    setup('/play');
    expect(screen.getByText('Relaxed')).toBeInTheDocument();
});

test('Navigating to the /search should route to the Search page', () => {
    setup('/search');
    expect(screen.getByText('あ')).toBeInTheDocument();
});