import { fireEvent, render, screen } from "@testing-library/react";
import GameSettingsMenu from "../../../components/layout/GameSettingsMenu";
import { GameType } from "../../../types/GameType";
import { RELAXED } from "../../../data/GameModePresets";


const onStartHandler = jest.fn();

const setup = () => {
    const component = render(<GameSettingsMenu onStart={onStartHandler}/>);
    return {
        kana: component.queryAllByText('Hiragana & Katakana')[1],
        numbers: component.getByText('Numbers & Counting'),
        kanji: component.getByText('Jōyō Kanji'),
        start: screen.getByText('START'),
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

test('Starting a kana game should call the onStart event handler with correct type and settings', () => {
    const { start } = setup();
    fireEvent.click(start);
    expect(onStartHandler).toHaveBeenCalledWith({ type: GameType.KANA, settings: RELAXED });
});

//TODO: Re-enable once created numbers menu with a start button
test.skip('Starting a numbers game should call the onStart event handler with correct type', () => {
    const { start, numbers } = setup();
    fireEvent.click(numbers);
    fireEvent.click(start);
    expect(onStartHandler).toHaveBeenCalledWith({ type: GameType.NUMBERS, settings: undefined });
});