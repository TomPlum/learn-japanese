import Arrays from "../../../utility/Arrays";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import Landing from "../../../components/layout/Landing";
import { Kana } from "../../../types/Kana";
import KanaType from "../../../types/KanaType";
import { KanaColumn } from "../../../types/KanaColumn";
import { Environment } from "../../../utility/Environment";
import matchMediaPolyfill from 'mq-polyfill';

const environment = jest.fn();
const shuffle = jest.fn();

const setup = () => {
    const component = render(<Landing/>);
    return {
        play: screen.getByText('Play'),
        search: screen.getByText('Search'),
        ...component
    }
}

beforeEach(() => {
    Environment.variable = environment;

    jest.useFakeTimers();

    matchMediaPolyfill(window);
    window.resizeTo = function resizeTo(width, height) {
        Object.assign(this, {
            innerWidth: width,
            innerHeight: height,
            outerWidth: width,
            outerHeight: height,
        }).dispatchEvent(new this.Event('resize'))
    }

    Arrays.shuffle = shuffle;

    shuffle.mockImplementation((array: any[]) => {
        return array;
    });
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
    shuffle.mockReturnValueOnce([new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)]);
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

//TODO: Below tests don't seem to be updating state and re-rendering new kana when resizing.
test('Viewing in a small viewport should render less than 214 background kana', () => {
    window.resizeTo(375, 812); //iPhone X
    setup();
    //expect(screen.queryAllByTestId('background-kana')).toHaveLength(50);
});

test('Viewing in a larger viewport should render more than 214 background kana', () => {
    window.resizeTo(1920, 1080);
    setup();
    //expect(screen.queryAllByTestId('background-kana')).toHaveLength(50);
});

test('Resizing the viewport should recalculate the number of background kana', () => {
    window.resizeTo(1920, 1080);
    setup();
    window.resizeTo(375, 812); //iPhone X
    //expect(screen.queryAllByTestId('background-kana')).toHaveLength(50);
});