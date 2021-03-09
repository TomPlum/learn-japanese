import Arrays from "../../../utility/Arrays";
import { fireEvent, render, screen } from "@testing-library/react";
import Landing from "../../../components/layout/Landing";
import { Kana } from "../../../types/Kana";
import KanaType from "../../../types/KanaType";
import { KanaColumn } from "../../../types/KanaColumn";
import { Environment } from "../../../utility/Environment";
import matchMediaPolyfill from 'mq-polyfill';
import { getByTextWithMarkup } from "../../Queries";
import { when } from 'jest-when';

const environment = jest.fn();
const shuffle = jest.fn();

const setup = () => {
    const component = render(<Landing/>);
    return {
        play: screen.getByText('Play'),
        search: screen.getByText('Search'),
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

test('Hovering over the \'Japanese\' inspectable text in the heading should render an info overlay', () => {
    when(environment).calledWith('JAPANESE_KANJI_DESC').mockReturnValue('Japanese Kanji Description');
    const { japaneseInspectable } = setup();
    fireEvent.mouseOver(japaneseInspectable);
    expect(screen.getByTitle('Nihongo (日本語)'));
    expect(screen.getByText('Japanese Kanji Description'));
});

test('Hovering over the \'Hiragana\' inspectable text in the description should render an info overlay', () => {
    when(environment).calledWith('HIRAGANA_DESC').mockReturnValue('Hiragana Description');
    const { hiraganaInspectable } = setup();
    fireEvent.mouseOver(hiraganaInspectable);
    expect(screen.getByTitle('Hiragana (ひらがな)'));
    expect(screen.getByText('Hiragana Description'));
});

test('Hovering over the \'Katakana\' inspectable text in the description should render an info overlay', () => {
    when(environment).calledWith('KATAKANA_DESC').mockReturnValue('Katakana Description');
    const { katakanaInspectable } = setup();
    fireEvent.mouseOver(katakanaInspectable);
    expect(screen.getByTitle('Katakana (カタカナ)'));
    expect(screen.getByText('Katakana Description'));
});
