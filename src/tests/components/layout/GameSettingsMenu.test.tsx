import { fireEvent, render, screen } from "@testing-library/react";
import GameSettingsMenu from "../../../components/layout/GameSettingsMenu";
import { Topic } from "../../../types/Topic";
import { RELAXED } from "../../../data/GameModePresets";
import { AppMode } from "../../../types/AppMode";


const onStartHandler = jest.fn();

const setup = () => {
    const component = render(<GameSettingsMenu onStartGame={onStartHandler} mode={AppMode.PLAY}/>);
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

test('Starting a kana game should call the onStart event handler with correct type and settings', () => {
    const { start } = setup();
    fireEvent.click(start);
    expect(onStartHandler).toHaveBeenCalledWith({ type: Topic.KANA, settings: RELAXED });
});

//TODO: Re-enable once created numbers menu with a start button
test.skip('Starting a numbers game should call the onStart event handler with correct type', () => {
    const { start, numbers } = setup();
    fireEvent.click(numbers);
    fireEvent.click(start);
    expect(onStartHandler).toHaveBeenCalledWith({ type: Topic.NUMBERS, settings: undefined });
});