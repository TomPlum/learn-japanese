import { fireEvent, screen } from "@testing-library/react";
import LaunchPresetConfirmationModal, { LaunchPresetConfirmationModalProps } from "../../../components/settings/LaunchPresetConfirmationModal";
import { GameSettingsBuilder } from "../../../domain/session/settings/game/GameSettings";
import LearnSettings from "../../../domain/session/settings/LearnSettings";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { store } from "../../../store";
import { clearGameSettings } from "../../../slices/GameSettingsSlice";
import { clearDataSettings } from "../../../slices/DataSettingsSlice";
import PresetBuilder from "../../../domain/session/PresetBuilder";
import { KanjiSettingsBuilder } from "../../../domain/session/settings/data/KanjiSettings";
import renderTranslatedReduxConsumer from "../../renderTranslatedReduxConsumer";
import { localStorageMock } from "../../../setupTests";

const history = createMemoryHistory();
const onDismissHandler = jest.fn();

const playPreset = new PresetBuilder()
    .withID(1)
    .withDisplayName("Test Play")
    .withColour("#ffffff")
    .withIcon("FaAtom")
    .withDataSettings(new KanjiSettingsBuilder().withQuantity(25).withJoyoKanji().build())
    .withGameSettings(new GameSettingsBuilder().build())
    .withTopicName("Topic")
    .build();

const learnPreset = new PresetBuilder()
    .withID(2)
    .withDisplayName("Test Learn")
    .withColour("#fdb40e")
    .withIcon("あ")
    .withDataSettings(new KanjiSettingsBuilder().withQuantity(25).withJoyoKanji().build())
    .withLearnSettings(new LearnSettings())
    .withTopicName("Topic")
    .build();

let props: LaunchPresetConfirmationModalProps;

const setup = () => {
    const component = renderTranslatedReduxConsumer(
        <Router history={history}>
            <LaunchPresetConfirmationModal {...props} />
        </Router>
    );

    return {
        start: component.getByText('Start'),
        close: component.getByTitle('Close'),
        ...component
    };
}

beforeEach(() => {
    props = {
        preset: playPreset,
        onDismiss: onDismissHandler
    }
});

afterEach(() => {
    store.dispatch(clearGameSettings());
    store.dispatch(clearDataSettings());
});

test('It should render the preset display name', () => {
    setup();
    expect(screen.getByText('Test Play')).toBeInTheDocument();
});

test('It should render the game session settings summary if the preset is of play type', () => {
    props.preset = playPreset;
    setup();
    expect(screen.getByTestId('session-settings-summary')).toBeInTheDocument();
});

test('It should render the learn session settings summary if the preset is of learn type', () => {
    props.preset = learnPreset;
    setup();
    expect(screen.getByTestId('learn-session-settings-summary')).toBeInTheDocument();
});

test('It should call the onDismiss event handler when clicking the close button', () => {
    const { close } = setup();
    fireEvent.click(close);
    expect(onDismissHandler).toHaveBeenCalled();
});

test('It should route to the play page and set the game and data settings in the redux store when starting', () => {
    // The Redux store should start empty
    expect(store.getState().gameSettings.settings).toBeUndefined();
    expect(store.getState().dataSettings.settings).toBeUndefined();

    const { start } = setup();

    // Start the session with the preset config
    fireEvent.click(start);

    // Starting the game should set the game and data settings in the Redux store
    expect(store.getState().gameSettings.settings).toStrictEqual({
        hints: {
            enabled: true,
            quantity: 0,
            unlimited: false
        },
        lives: {
            enabled: true,
            quantity: 5
        },
        question: {
            answerField: "learnable.field.romaji.name",
            answerFilter: -1,
            cards: 1,
            quantity: 1,
            questionField: "learnable.field.kana.name",
            score: false,
            type: "text"
        },
        time: {
            countdown: false,
            secondsPerQuestion: 0,
            timed: false
        }
    });
    expect(store.getState().dataSettings.settings).toStrictEqual({
        grades: [1, 2, 3, 4, 5, 6, 8],
        quantity: 25,
        tags: [],
        topic: "Jōyō Kanji"
    });

    // It should also set the session settings with the preset
    expect(store.getState().sessionSettings.lastPlaySession).toStrictEqual({
        "colour": "#ffffff",
        "data": {
            "grades": [1, 2, 3, 4, 5, 6, 8],
            "quantity": 25,
            "tags": [],
            "topic": "Jōyō Kanji"
        },
        "game": {
            "hints": {
                "enabled": true,
                "quantity": 0,
                "unlimited": false
            },
            "lives": {
                "enabled": true,
                "quantity": 5
            },
            "question": {
                "answerField": "learnable.field.romaji.name",
                "answerFilter": -1,
                "cards": 1,
                "quantity": 1,
                "questionField": "learnable.field.kana.name",
                "score": false,
                "type": "text"
            },
            "time": {
                "countdown": false,
                "secondsPerQuestion": 0,
                "timed": false
            }
        },
        "icon": "FaAtom",
        "id": 1,
        "isPreset": true,
        "name": "Test Play",
        "topic": "Topic"
    });

    // Should re-direct to the /play page
    expect(history.location.pathname).toBe('/play');
});

test('It should route to the learn page and set data settings in the redux store when starting', () => {
    props.preset = learnPreset;

    // The Redux store should start empty
    expect(store.getState().gameSettings.settings).toBeUndefined();
    expect(store.getState().dataSettings.settings).toBeUndefined();

    const { start } = setup();

    // Start the session with the preset config
    fireEvent.click(start);

    // Starting the game should set the data settings in the Redux store
    expect(store.getState().gameSettings.settings).toBeUndefined();
    expect(store.getState().dataSettings.settings).toStrictEqual({
        grades: [1, 2, 3, 4, 5, 6, 8],
        quantity: 25,
        tags: [],
        topic: "Jōyō Kanji"
    });

    // It should also set the session settings for the learn preset
    expect(store.getState().sessionSettings.lastLearnSession).toStrictEqual({
        "colour": "#fdb40e",
        "data": {
            "grades": [1, 2, 3, 4, 5, 6, 8],
            "quantity": 25,
            "tags": [],
            "topic": "Jōyō Kanji"
        },
        "icon": "あ",
        "id": 2,
        "isPreset": true,
        "name": "Test Learn",
        "topic": "Topic"
    });

    // Should re-direct to the /play page
    expect(history.location.pathname).toBe('/learn');
});

test('It should set the selected preset id in the local storage', () => {
    props.preset = playPreset;
    const { start } = setup();

    // Start the session with the preset config
    fireEvent.click(start);

    expect(localStorageMock.getItem("selected-preset-id")).toBe("1");
});
