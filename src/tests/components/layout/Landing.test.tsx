import Arrays from "../../../utility/Arrays";
import { render, screen } from "@testing-library/react";
import Landing from "../../../components/layout/Landing";

const setup = () => {
    const component = render(<Landing/>);
    return {
        play: screen.getByText('Play'),
        search: screen.getByText('Search'),
        ...component
    }
}

beforeEach(() => {
    Arrays.shuffle = jest.fn().mockImplementation((array: any[]) => {
        return array;
    });

    jest.useFakeTimers();
});

afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
});

test('Should render the leading heading', () => {
    setup();
    expect(screen.getByText('Japanese')).toBeInTheDocument();
});

test('Should render the description', () => {
    setup();
    expect(screen.getByText(
        'A simple memory training app for learning the Japanese Hiragana and Katakana syllabaries.'
    )).toBeInTheDocument();
});

test('Should render the play button', () => {
    const { play } = setup();
    expect(play).toBeInTheDocument();
});

test('Should render the search button', () => {
    const { search } = setup();
    expect(search).toBeInTheDocument();
});

test('Should render the kana carousel', () => {
    setup();
    expect(screen.getByText('あ')).toBeInTheDocument();
});

test('Clicking the play button should route the user to /play', () => {
    const { play } = setup();
    expect(play).toHaveAttribute('href', '/play');
});

test('Clicking the search button should route the user to /search', () => {
    const { search } = setup();
    expect(search).toHaveAttribute('href', '/search');
});