import Arrays from "../../../utility/Arrays";
import { render, screen } from "@testing-library/react";
import Landing from "../../../components/layout/Landing";
import { Kana } from "../../../types/Kana";
import KanaType from "../../../types/KanaType";
import { KanaColumn } from "../../../types/KanaColumn";
import { Environment } from "../../../utility/Environment";

const environment = jest.fn();

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
        return [new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)];
    });

    Environment.variable = environment;

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
    environment.mockReturnValue("landing page description");
    setup();
    expect(environment).toHaveBeenCalledWith("LANDING_DESC");
    expect(screen.getByText('landing page description')).toBeInTheDocument();
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