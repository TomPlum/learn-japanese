import { render, screen } from "@testing-library/react";
import Main from "../../components/layout/Main";
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

const setup = (route: string) => {
    const history = createMemoryHistory();
    history.push(route);
    render(
        <Router history={history}>
            <Main/>
        </Router>
    );
}

test('Navigating to the root URI should route to the Landing page', () => {
    setup('/');
    expect(screen.getByText('A simple memory training app for learning the Japanese Hiragana and Katakana syllabaries.')).toBeInTheDocument();
});

test('Navigating to the /play should route to the Game page', () => {
    setup('/play');
    expect(screen.getByText('Relaxed')).toBeInTheDocument();
});

test('Navigating to the /search should route to the Search page', () => {
    setup('/search');
    expect(screen.getByText('あ')).toBeInTheDocument();
});