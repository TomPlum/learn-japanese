import Arrays from "../../../utility/Arrays";
import { fireEvent, render, screen } from "@testing-library/react";
import LandingPage from "../../../components/pages/LandingPage";
import { Kana } from "../../../types/kana/Kana";
import KanaType from "../../../types/kana/KanaType";
import { KanaColumn } from "../../../types/kana/KanaColumn";
import { Environment } from "../../../utility/Environment";
import matchMediaPolyfill from 'mq-polyfill';
import { getByTextWithMarkup } from "../../Queries";
import { when } from 'jest-when';
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history'

const environment = jest.fn();
const shuffle = jest.fn();
const getRandomObject = jest.fn();

const history = createMemoryHistory();

const setup = () => {
    const component = render(
        <Router history={history}>
            <LandingPage/>
        </Router>
    );

    return {
        play: screen.getByText('Play'),
        learn: screen.getByText('Learn'),
        search: screen.getByText('Search'),
        help: screen.getByText('Help'),
        japaneseInspectable: screen.getByTestId('japanese-inspectable'),
        hiraganaInspectable: screen.getByTestId('hiragana-inspectable'),
        katakanaInspectable: screen.getByTestId('katakana-inspectable'),
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


    //Always returns the first element so it is deterministic
    Arrays.getRandomObject = getRandomObject;
    getRandomObject.mockImplementation((array: any[]) => {
        const objects = [...array];
        const first = objects[0];
        objects.splice(0, 1);
        return [first, objects];
    });
});

afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.restoreAllMocks();
});

test('Should render the leading heading', () => {
    setup();
    expect(screen.getByText('Japanese')).toBeInTheDocument();
});

test('Should render the description', () => {
    environment.mockReturnValueOnce("hiragana desc");
    environment.mockReturnValueOnce("katakana desc");
    setup();

    expect(environment).toHaveBeenCalledWith("HIRAGANA_DESC");
    expect(environment).toHaveBeenCalledWith("KATAKANA_DESC");

    const description = 'A simple memory training app for learning the Japanese Hiragana and Katakana syllabaries.';
    expect(getByTextWithMarkup(description)).toBeInTheDocument();
});

test('Should render the play button', () => {
    const { play } = setup();
    expect(play).toBeInTheDocument();
});

test('Should render the learn button', () => {
    const { learn } = setup();
    expect(learn).toBeInTheDocument();
});

test('Should render the search button', () => {
    const { search } = setup();
    expect(search).toBeInTheDocument();
});

test('Should render the help button', () => {
    const { help } = setup();
    expect(help).toBeInTheDocument();
});

test('Should render the kana carousel', () => {
    getRandomObject.mockReturnValueOnce([new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false), []]); //Parallax BG
    getRandomObject.mockReturnValueOnce([ new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false), []]); //Carousel
    setup();
    expect(screen.getByText('あ')).toBeInTheDocument();
});

test('Clicking the play button should route the user to /menu/play', () => {
    const { play } = setup();
    fireEvent.click(play);
    expect(history.location.pathname).toBe('/menu/play');
});

test('Clicking the learn button should route the user to /menu/learn', () => {
    const { learn } = setup();
    fireEvent.click(learn);
    expect(history.location.pathname).toBe('/menu/learn');
});

test('Clicking the search button should route the user to /search', () => {
    const { search } = setup();
    fireEvent.click(search);
    expect(history.location.pathname).toBe('/search');
});

test('Clicking the help button should route the user to /search', () => {
    const { help } = setup();
    fireEvent.click(help);
    expect(history.location.pathname).toBe('/help');
});

test('Hovering over the \'Japanese\' inspectable text in the heading should render an info overlay', async () => {
    when(environment).calledWith('JAPANESE_KANJI_DESC').mockReturnValue('Japanese Kanji Description');
    const { japaneseInspectable } = setup();

    fireEvent.mouseOver(japaneseInspectable);

    expect(await screen.findByText('Nihongo (日本語)'));
    expect(await screen.findByText('Japanese Kanji Description'));
});

test('Hovering over the \'Hiragana\' inspectable text in the description should render an info overlay', async () => {
    when(environment).calledWith('HIRAGANA_DESC').mockReturnValue('Hiragana Description');
    const { hiraganaInspectable } = setup();

    fireEvent.mouseOver(hiraganaInspectable);

    expect(await screen.findByText('Hiragana (ひらがな)'));
    expect(await screen.findByText('Hiragana Description'));
});

test('Hovering over the \'Katakana\' inspectable text in the description should render an info overlay', async () => {
    when(environment).calledWith('KATAKANA_DESC').mockReturnValue('Katakana Description');
    const { katakanaInspectable } = setup();

    fireEvent.mouseOver(katakanaInspectable);

    expect(await screen.findByText('Katakana (カタカナ)'));
    expect(await screen.findByText('Katakana Description'));
});
