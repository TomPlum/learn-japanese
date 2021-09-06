import { fireEvent, screen } from "@testing-library/react";
import SettingsMenu, { SettingsMenuProps } from "../../../components/layout/SettingsMenu";
import Topic from "../../../domain/Topic";
import { AppMode } from "../../../domain/AppMode";
import { SessionSettings } from "../../../domain/session/settings/SessionSettings";
import { CalendarSettingsBuilder } from "../../../domain/session/settings/data/CalendarSettings";
import { KanaSettingsBuilder } from "../../../domain/session/settings/data/KanaSettings";
import LearnSettings from "../../../domain/session/settings/LearnSettings";
import { getValueLastCalledWith } from "../../Queries";
import renderReduxConsumer from "../../renderReduxConsumer";

//Mock scrollIntoView() as it doesn't exist in JSDom
const scrollIntoView = jest.fn();
window.HTMLElement.prototype.scrollIntoView = scrollIntoView;

const onStartHandler = jest.fn();

let props: SettingsMenuProps;

const setup = () => {
    const component = renderReduxConsumer(<SettingsMenu {...props} />);
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

test('Should call scroll into view on mount', () => {
    setup();
    expect(scrollIntoView).toHaveBeenCalled();
});

test('Should call scroll into view when changing topic', () => {
    const { kanji } = setup();
    expect(scrollIntoView).toHaveBeenCalled();
    fireEvent.click(kanji);
    expect(scrollIntoView).toHaveBeenCalledTimes(2);
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
        const settings = getValueLastCalledWith<SessionSettings>(onStartHandler);
        expect(settings.dataSettings).toStrictEqual(new KanaSettingsBuilder().withEverything().build());
        /*expect(settings.gameSettings).toBe(new GameSettingsBuilder()
            .withQuestionSettings(new QuestionSettingsBuilder()
                .withFields(LearnableField.KANA, LearnableField.ROMAJI)
                .withType(QuestionType.TEXT)
                .withScoreTracking(false)
                .build()
            )
            .withLifeSettings(new LifeSettingsBuilder().isEnabled(false).build())
            .build());*/ //TODO: Stupid function equality not working for answerFilter
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
