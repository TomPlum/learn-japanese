import { fireEvent, render, screen } from "@testing-library/react";
import GameSettingsMenu, { GameSettingsMenuProps } from "../../../components/layout/GameSettingsMenu";
import Topic from "../../../types/Topic";
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
        basics: component.getByText('Basics'),
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

describe("Rendering Game Menus", () => {
    test('Should default to \'Hiragana & Katakana\' game type', () => {
        setup();
        expect(screen.getByText('Relaxed')).toBeInTheDocument();
    });
});

describe("Rendering Learn Menus", () => {
    beforeEach(() => {
        props.mode = AppMode.LEARN;
    });

    test('Should default to \'Hiragana & Katakana\' learn type', () => {
        setup();
        expect(screen.getByTestId('learn-kana-menu')).toBeInTheDocument();
    });

    test('Should switch to the selected topics learn menu after clicking it', () => {
        const { numbers, kana } = setup();
        fireEvent.click(numbers);
        fireEvent.click(kana);
        expect(screen.getByTestId('learn-kana-menu')).toBeInTheDocument();
    });
});

describe("Starting Game", () => {
    test('Starting a kana game should call the onStartGame event handler with correct type and settings', () => {
        const { start } = setup();
        fireEvent.click(start);
        expect(onStartGameHandler).toHaveBeenCalledWith({ topic: Topic.KANA, settings: RELAXED });
    });

    //TODO: Re-enable once implemented calendar game
    test.skip('Starting a calendar game should call the onStartGame event handler with correct type and settings', () => {
        const { start, calendar } = setup();
        fireEvent.click(calendar);
        fireEvent.click(start);
        expect(onStartGameHandler).toHaveBeenCalledWith({ topic: Topic.CALENDAR, settings: undefined });
    });

    //TODO: Re-enable once created numbers menu with a start button
    test.skip('Starting a numbers game should call the onStartGame event handler with correct type', () => {
        const { start, numbers } = setup();
        fireEvent.click(numbers);
        fireEvent.click(start);
        expect(onStartGameHandler).toHaveBeenCalledWith({ topic: Topic.NUMBERS, settings: undefined });
    });
});

describe("Starting Learn Session", () => {
    beforeEach(() => {
        props.mode = AppMode.LEARN;
    });

    test('Starting a kana learning session should call the onStartLearn event handler with correct type and settings', () => {
        const { start } = setup();
        fireEvent.click(start);
        expect(onStartLearnHandler).toHaveBeenCalledWith({ topic: Topic.KANA, settings: { kana: { hiragana: true } } });
    });

    test('Starting a calendar learning session should call the onStartLearn event handler with the correct type and settings', () => {
        const { calendar } = setup();
        fireEvent.click(calendar);
        fireEvent.click(screen.getByText('Start'));
        expect(onStartLearnHandler).toHaveBeenCalledWith({ topic: Topic.CALENDAR, settings: { calendar: { days: true } } });
    });

})