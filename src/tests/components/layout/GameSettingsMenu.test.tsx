import { fireEvent, render, screen } from "@testing-library/react";
import GameSettingsMenu, { GameSettingsMenuProps } from "../../../components/layout/GameSettingsMenu";
import { Topic } from "../../../types/Topic";
import { RELAXED } from "../../../data/GameModePresets";
import { AppMode } from "../../../types/AppMode";


const onStartGameHandler = jest.fn();
const onStartLearnHandler = jest.fn();

let props: GameSettingsMenuProps;

const setup = () => {
    const component = render(<GameSettingsMenu {...props} />);
    return {
        kana: component.queryAllByText('Hiragana & Katakana')[1],
        numbers: component.getByText('Numbers & Counting'),
        kanji: component.getByText('Jōyō Kanji'),
        colours: component.getByText('Colours'),
        weather: component.getByText('Weather'),
        calendar: component.getByText('Days & Months'),
        start: screen.getByText('Start'),
        ...component
    }
}

beforeEach(() => {
    props = {
        onStartGame: onStartGameHandler,
        onStartLearn: onStartLearnHandler,
        mode: AppMode.PLAY
    };
});

test('Should default to \'Hiragana & Katakana\' game type', () => {
    setup();
    expect(screen.getByText('Relaxed')).toBeInTheDocument();
});

test('Should switch to \'Numbers & Counting\' game type menu after selecting it', () => {
    const { numbers } = setup();
    fireEvent.click(numbers);
    expect(screen.getByText('Numbers menu here')).toBeInTheDocument();
});

test('Should switch to \'Jōyō Kanji\' game type menu after selecting it', () => {
    const { kanji } = setup();
    fireEvent.click(kanji);
    expect(screen.getByText('Kanji menu here')).toBeInTheDocument();
});

test('Should switch to \'Colours\' game type menu after selecting it', () => {
    const { colours } = setup();
    fireEvent.click(colours);
    expect(screen.getByText('Colours menu here')).toBeInTheDocument();
});

test('Should switch to \'Weather\' game type menu after selecting it', () => {
    const { weather } = setup();
    fireEvent.click(weather);
    expect(screen.getByText('Weather menu here')).toBeInTheDocument();
});

test('Should switch to \'Days & Months\' game type menu after selecting it', () => {
    const { calendar } = setup();
    fireEvent.click(calendar);
    expect(screen.getByText('Calendar menu here')).toBeInTheDocument();
});

test('Starting a kana game should call the onStartGame event handler with correct type and settings', () => {
    const { start } = setup();
    fireEvent.click(start);
    expect(onStartGameHandler).toHaveBeenCalledWith({ topic: Topic.KANA, settings: RELAXED });
});

test('Starting a kana learning session should call the onStartLearn event handler with correct type and settings', () => {
    props.mode = AppMode.LEARN;
    const { start } = setup();
    fireEvent.click(start);
    expect(onStartLearnHandler).toHaveBeenCalledWith({ topic: Topic.KANA, settings: { hiragana: true } });
});

//TODO: Re-enable once created numbers menu with a start button
test.skip('Starting a numbers game should call the onStartGame event handler with correct type', () => {
    const { start, numbers } = setup();
    fireEvent.click(numbers);
    fireEvent.click(start);
    expect(onStartGameHandler).toHaveBeenCalledWith({ topic: Topic.NUMBERS, settings: undefined });
});