import renderReduxConsumer from "../../renderReduxConsumer";
import PlayPage from "../../../components/pages/PlayPage";
import Definition from "../../../domain/sentence/Definition";
import { store } from "../../../store";
import { clearGameSettings, setGameSettings } from "../../../slices/GameSettingsSlice";
import { GameSettingsBuilder } from "../../../domain/session/settings/game/GameSettings";
import { LifeSettingsBuilder } from "../../../domain/session/settings/game/LifeSettings";
import { HintSettingsBuilder } from "../../../domain/session/settings/game/HintSettings";
import { TimeSettingsBuilder } from "../../../domain/session/settings/game/TimeSettings";
import { QuestionSettingsBuilder } from "../../../domain/session/settings/game/QuestionSettings";
import LearnableField from "../../../domain/learn/LearnableField";
import QuestionType from "../../../domain/game/QuestionType";
import { KanaSettingsBuilder } from "../../../domain/session/settings/data/KanaSettings";
import { clearDataSettings, setDataSettings } from "../../../slices/DataSettingsSlice";
import { fireEvent, screen } from "@testing-library/react";
import { getByTextWithMarkup } from "../../Queries";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const mockLearningDataService = jest.fn();
jest.mock("../../../service/LearningDataService", () => function() {
    return { read: mockLearningDataService }
});

const gameSettings = new GameSettingsBuilder()
    .withLifeSettings(
        new LifeSettingsBuilder()
            .withQuantity(5)
            .isEnabled(true)
            .build()
    )
    .withHintSettings(
        new HintSettingsBuilder()
            .withQuantity(3)
            .isEnabled(true)
            .areUnlimited(false)
            .build()
    )
    .withTimeSettings(
        new TimeSettingsBuilder()
            .isTimed(true)
            .isCountDown(false)
            .withSecondsPerQuestion(0)
            .build()
    )
    .withQuestionSettings(
        new QuestionSettingsBuilder()
            .withFields(LearnableField.KANA, LearnableField.ROMAJI)
            .withQuantity(1)
            .withType(QuestionType.TEXT)
            .withScoreTracking(true)
            .build()
    )
    .build();

const dataSettings = new KanaSettingsBuilder()
    .withHiragana(true)
    .withKatakana(false)
    .withDiagraphs(false)
    .withDiacriticals(true)
    .withOnlyDiagraphs(false)
    .withQuantity(50)
    .build();

const history = createMemoryHistory();

afterEach(() => {
    store.dispatch(clearDataSettings());
    store.dispatch(clearGameSettings());
});
// TODO: Why is the setDataSettings() dispatch saying its un-serialisable? Seems the whole Topic is the payload...
test('Should render the game if game and data settings are present', async () => {
    mockLearningDataService.mockResolvedValueOnce([new Definition(["not much"], undefined, "あまり", "Adverb")]);
    store.dispatch(setGameSettings(gameSettings));
    store.dispatch(setDataSettings(dataSettings));

    renderReduxConsumer(<PlayPage />);

    expect(await screen.findByTestId('memory-game')).toBeInTheDocument();
});

test('Should render an error message if the game settings are undefined', () => {
    store.dispatch(clearGameSettings());
    store.dispatch(setDataSettings(dataSettings));

    renderReduxConsumer(<PlayPage />);

    expect(mockLearningDataService).not.toHaveBeenCalled();
    expect(screen.queryByTestId('memory-game')).not.toBeInTheDocument();
    expect(screen.getByText('It looks like your game settings are missing!')).toBeInTheDocument();
    expect(getByTextWithMarkup('Click here to go back home.')).toBeInTheDocument();
});

test('Should render an error message if the data settings are undefined', () => {
    store.dispatch(setGameSettings(gameSettings));
    store.dispatch(clearDataSettings());

    renderReduxConsumer(<PlayPage />);

    expect(mockLearningDataService).not.toHaveBeenCalled();
    expect(screen.queryByTestId('memory-game')).not.toBeInTheDocument();
    expect(screen.getByText('It looks like your game settings are missing!')).toBeInTheDocument();
    expect(getByTextWithMarkup('Click here to go back home.')).toBeInTheDocument();
});

test('Should render the results screen when exiting the game', async () => {
    // Set game and data settings
    mockLearningDataService.mockResolvedValueOnce([new Definition(["not much"], undefined, "あまり", "Adverb")]);
    store.dispatch(setGameSettings(gameSettings));
    store.dispatch(setDataSettings(dataSettings));

    // Render the page and wait for the game to load
    renderReduxConsumer(<Router history={history}><PlayPage /></Router>);
    expect(await screen.findByTestId('memory-game')).toBeInTheDocument();

    // Close the game
    fireEvent.click(screen.getByTitle('Quit'));
    fireEvent.click(screen.getByText('Yes'));

    // Should render the results screen
    expect(screen.getByTestId('game-results-screen')).toBeInTheDocument();

    // Click the finish button
    fireEvent.click(screen.getByText('Finish'));

    // Should clear the settings from the Redux store
    expect(store.getState().gameSettings.settings).toBeUndefined();
    expect(store.getState().dataSettings.settings).toBeUndefined();

    // Should re-direct to the home page
    expect(history.location.pathname).toBe('/home');
});
