import { fireEvent, render, screen } from "@testing-library/react";
import SettingsMenu, { GameSettingsMenuProps } from "../../../components/layout/SettingsMenu";
import Topic from "../../../types/Topic";
import { AppMode } from "../../../types/AppMode";
import { SessionSettings } from "../../../types/session/settings/SessionSettings";
import { CalendarSettingsBuilder } from "../../../types/session/settings/data/CalendarSettings";
import { KanaSettingsBuilder } from "../../../types/session/settings/data/KanaSettings";
import LearnSettings from "../../../types/session/settings/LearnSettings";
import { GameSettingsBuilder } from "../../../types/session/settings/game/GameSettings";
import { QuestionSettingsBuilder } from "../../../types/session/settings/game/QuestionSettings";
import { QuestionType } from "../../../types/game/QuestionType";
import { LifeSettingsBuilder } from "../../../types/session/settings/game/LifeSettings";


const onStartHandler = jest.fn();

let props: GameSettingsMenuProps;

const setup = () => {
    const component = render(<SettingsMenu {...props} />);
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
        onStart: onStartHandler,
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
        expect(onStartHandler).toHaveBeenCalledWith(
            SessionSettings.forGame(
                new KanaSettingsBuilder().withEverything().build(),
                new GameSettingsBuilder()
                    .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.ROMAJI).withScoreTracking(false).build())
                    .withLifeSettings(new LifeSettingsBuilder().isEnabled(false).build())
                    .build()
            )
        );
    });

    //TODO: Re-enable once implemented calendar game
    test.skip('Starting a calendar game should call the onStartGame event handler with correct type and settings', () => {
        const { start, calendar } = setup();
        fireEvent.click(calendar);
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalledWith({ topic: Topic.CALENDAR, settings: undefined });
    });

    //TODO: Re-enable once created numbers menu with a start button
    test.skip('Starting a numbers game should call the onStartGame event handler with correct type', () => {
        const { start, numbers } = setup();
        fireEvent.click(numbers);
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalledWith({ topic: Topic.NUMBERS, settings: undefined });
    });
});

describe("Starting Learn Session", () => {
    beforeEach(() => {
        props.mode = AppMode.LEARN;
    });

    test('Starting a kana learning session should call the onStartLearn event handler with correct type and settings', () => {
        const { start } = setup();
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalledWith(SessionSettings.forLearning(
            new KanaSettingsBuilder().withHiragana().build(),
            new LearnSettings())
        );
    });

    test('Starting a calendar learning session should call the onStartLearn event handler with the correct type and settings', () => {
        const { calendar } = setup();
        fireEvent.click(calendar);
        fireEvent.click(screen.getByText('Start'));
        expect(onStartHandler).toHaveBeenCalledWith(SessionSettings.forLearning(
            new CalendarSettingsBuilder().withDays().build(),
            new LearnSettings())
        );
    });

})