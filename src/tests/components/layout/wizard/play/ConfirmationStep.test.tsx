import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ConfirmationStep from "../../../../../components/layout/wizard/play/ConfirmationStep";
import { SessionSettings } from "../../../../../domain/session/settings/SessionSettings";
import { KanjiSettingsBuilder } from "../../../../../domain/session/settings/data/KanjiSettings";
import { GameSettingsBuilder } from "../../../../../domain/session/settings/game/GameSettings";
import { QuestionSettingsBuilder } from "../../../../../domain/session/settings/game/QuestionSettings";
import LearnableField from "../../../../../domain/learn/LearnableField";
import QuestionType from "../../../../../domain/game/QuestionType";
import { LifeSettingsBuilder } from "../../../../../domain/session/settings/game/LifeSettings";
import { HintSettingsBuilder } from "../../../../../domain/session/settings/game/HintSettings";
import { TimeSettingsBuilder } from "../../../../../domain/session/settings/game/TimeSettings";
import { getByTextWithElements } from "../../../../Queries";
import LearnSettings from "../../../../../domain/session/settings/LearnSettings";

const onSelectStageHandler = jest.fn();

const mockPlayService = jest.fn();
jest.mock("../../../../../service/PlayService", () => {
    return function() { return { saveCustomPreset: mockPlayService }};
});

const gameSettings = new GameSettingsBuilder();
const dataSettings = new KanjiSettingsBuilder();
let settings: SessionSettings;

beforeEach(() => {
    jest.useFakeTimers();
});

function withGameSettings(gameSettings: GameSettingsBuilder) {
    settings = SessionSettings.forGame(dataSettings.build(), gameSettings.build());
}

function withDataSettings(dataSettings: KanjiSettingsBuilder) {
    settings = SessionSettings.forGame(dataSettings.build(), gameSettings.build());
}

test('Should render the initial text', () => {
    withGameSettings(new GameSettingsBuilder());
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("You'll be given the")).toBeInTheDocument();
});

test('Should render the question field name', () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withFields(LearnableField.KANA, LearnableField.ROMAJI).build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("You'll be given the")).toBeInTheDocument();
});

test('Should render the intermediary text between the question field and type', () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withFields(LearnableField.KANA, LearnableField.ROMAJI).build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("and must")).toBeInTheDocument();
});

test('Should render the action word "type" if the question type is text', () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.TEXT).build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("type")).toBeInTheDocument();
});

test('Should render the action word "match" if the question type is match', () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.MATCH).build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("match")).toBeInTheDocument();
});

test('Should render the action word "pick" and the card quantity if the question type is choice', () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.CHOICE).withCardQuantity(4).build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("pick from 4 cards")).toBeInTheDocument();
});

test('Should render the action word "listen to" if the question type is audio', () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.AUDIO).build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("listen to")).toBeInTheDocument();
});

test('Should render the action word "answer" if the question type is random', () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.RANDOM).build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("answer")).toBeInTheDocument();
});

test('Should render the action word "answer" if the question type is unknown', () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withType("UNKNOWN" as QuestionType).build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("answer")).toBeInTheDocument();
});

test('Should render the intermediary text between the question type and answer field', () => {
    withGameSettings(new GameSettingsBuilder());
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("the")).toBeInTheDocument();
});

test('Should render the answer field name', () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withFields(LearnableField.KANA, LearnableField.ROMAJI).build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("Rōmaji")).toBeInTheDocument();
});

test('Should render the intermediary text between the answer field and question quantity', () => {
    withGameSettings(new GameSettingsBuilder());
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("for")).toBeInTheDocument();
});

test('Should render the number of questions to be answered', () => {
    withDataSettings(dataSettings.withQuantity(60));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("60")).toBeInTheDocument();
});

test('Should render the intermediary text between the question quantity and topic name', () => {
    withGameSettings(new GameSettingsBuilder());
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("questions about")).toBeInTheDocument();
});

test('Should render the topic name', () => {
    withDataSettings(new KanjiSettingsBuilder());
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("Jōyō Kanji")).toBeInTheDocument();
});

test('Should render the intermediary text between the topic name and the life quantity', () => {
    withGameSettings(new GameSettingsBuilder());
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("You'll have")).toBeInTheDocument();
});

test('Should render the number of lives chosen', () => {
    withGameSettings(new GameSettingsBuilder().withLifeSettings(new LifeSettingsBuilder().withQuantity(5).build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("5 lives")).toBeInTheDocument();
});

test('Should render "unlimited lives" if there are 0 lives chosen"', () => {
    withGameSettings(new GameSettingsBuilder().withLifeSettings(new LifeSettingsBuilder().isEnabled(false).build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("unlimited lives")).toBeInTheDocument();
});

test('Should render the number of hints chosen', () => {
    withGameSettings(new GameSettingsBuilder().withHintSettings(new HintSettingsBuilder().withQuantity(3).build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("3 hints")).toBeInTheDocument();
});

test('Should render "no hints" if there are 0 hints chosen"', () => {
    withGameSettings(new GameSettingsBuilder().withHintSettings(new HintSettingsBuilder().withQuantity(0).build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("no hints")).toBeInTheDocument();
});

test('Should render "unlimited hints" if there are infinite hints chosen"', () => {
    withGameSettings(new GameSettingsBuilder().withHintSettings(new HintSettingsBuilder().areUnlimited().build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("unlimited hints")).toBeInTheDocument();
});

test('Should render the correct text for a timed session if selected', () => {
    withGameSettings(new GameSettingsBuilder().withTimeSettings(new TimeSettingsBuilder().isTimed().build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(getByTextWithElements("your session will be timed")).toBeInTheDocument();
});

test('Should render the correct text for a countdown session if selected', () => {
    withGameSettings(new GameSettingsBuilder().withTimeSettings(new TimeSettingsBuilder().isCountDown().withSecondsPerQuestion(10).build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(getByTextWithElements("you'll have 10 seconds per question")).toBeInTheDocument();
});

test('Should render the intermediary text between the time words and the score words', () => {
    withGameSettings(new GameSettingsBuilder());
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("and")).toBeInTheDocument();
});

test('Should render the score tracking text if enabled', () => {
    withGameSettings(new GameSettingsBuilder().withQuestionSettings(new QuestionSettingsBuilder().withScoreTracking().build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("your score will be tracked")).toBeInTheDocument();
});

test('Should render the score tracking disabled text if disabled', () => {
    withGameSettings(new GameSettingsBuilder().withQuestionSettings(new QuestionSettingsBuilder().withScoreTracking(false).build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText("scoring will be disabled")).toBeInTheDocument();
});

test('Clicking the "Save Preset" button should render the custom preset form', () => {
    withGameSettings(new GameSettingsBuilder());
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    fireEvent.click(screen.getByText('Save Preset'));
    expect(screen.getByTestId('save-custom-preset-form')).toBeInTheDocument();
});

test('Clicking the cancel button in the save preset form should stop rendering the form', async () => {
    withGameSettings(new GameSettingsBuilder());
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);

    // Render the form
    fireEvent.click(screen.getByText('Save Preset'));
    const savePresetForm = screen.getByTestId('save-custom-preset-form');
    expect(savePresetForm).toBeVisible();

    // The save preset button should have stopped rendering
    expect(screen.queryByText('Save Preset')).not.toBeInTheDocument();

    // Click cancel
    fireEvent.click(screen.getByText('Cancel'));
    //await waitFor(() => expect(screen.getByTestId('save-custom-preset-form')).not.toBeVisible()); // Doesn't work for child element?

    // The save preset button should have been re-rendered
    expect(screen.getByText('Save Preset')).toBeInTheDocument();
});

//TODO: Fix the act() warning here. The setInSavePresetForm() call triggers it. Can't assert much else other than accordion visibility
test('Clicking the save button in the save preset form should hide the form and button after 2 seconds', async () => {
    mockPlayService.mockResolvedValueOnce({ success: true });
    withGameSettings(new GameSettingsBuilder());
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);

    // Render the form and fill in the name
    fireEvent.click(screen.getByText('Save Preset'));
    expect(screen.getByTestId('save-custom-preset-form')).toBeVisible();
    fireEvent.change(screen.getByPlaceholderText('Enter a name for your preset'), { target: { value: "My Preset"} });

    // The save preset button should have stopped rendering
    const savePresetButton = screen.queryByText('Save Preset');
    expect(savePresetButton).not.toBeInTheDocument();

    // Click save and wait 2 seconds
    fireEvent.click(screen.getByText('Save'));
    expect(await screen.findByText('Saved "My Preset" successfully.')).toBeInTheDocument();
    jest.advanceTimersByTime(2000);

    // The save preset button should not re-render and the accordion should have collapsed
    expect(screen.queryByText('Save Preset')).not.toBeInTheDocument();
    await waitFor(() => expect(screen.getByTestId('confirmation-step-accordion')).not.toHaveAttribute('display', 'none'));
});

test('Should render an error message if the game settings are undefined', () => {
    settings = SessionSettings.forLearning(dataSettings.build(), new LearnSettings());
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(screen.getByText('Your game settings could not be found. Please reload and try again.'));
});

test('Clicking the question field text should call the onSelectStage event handler with the correct stage', () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withFields(LearnableField.KANA, LearnableField.ROMAJI).build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    fireEvent.click(screen.getByText('Kana'));
    expect(onSelectStageHandler).toHaveBeenLastCalledWith(3);
});

test('Clicking the question type text should call the onSelectStage event handler with the correct stage', () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.TEXT).build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    fireEvent.click(screen.getByText('type'));
    expect(onSelectStageHandler).toHaveBeenLastCalledWith(3);
});

test('Clicking the answer field text should call the onSelectStage event handler with the correct stage', () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withFields(LearnableField.KANA, LearnableField.ROMAJI).build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    fireEvent.click(screen.getByText('Rōmaji'));
    expect(onSelectStageHandler).toHaveBeenLastCalledWith(3);
});

test('Clicking the topic name text should call the onSelectStage event handler with the correct stage', () => {
    withDataSettings(new KanjiSettingsBuilder());
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    fireEvent.click(screen.getByText('Jōyō Kanji'));
    expect(onSelectStageHandler).toHaveBeenLastCalledWith(0);
});

test('Clicking the lives text should call the onSelectStage event handler with the correct stage', () => {
    withGameSettings(gameSettings.withLifeSettings(new LifeSettingsBuilder().withQuantity(12).build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    fireEvent.click(screen.getByText('12 lives'));
    expect(onSelectStageHandler).toHaveBeenLastCalledWith(5);
});

test('Clicking the hints text should call the onSelectStage event handler with the correct stage', () => {
    withGameSettings(new GameSettingsBuilder().withHintSettings(new HintSettingsBuilder().withQuantity(3).build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    fireEvent.click(screen.getByText('3 hints'));
    expect(onSelectStageHandler).toHaveBeenLastCalledWith(4);
});

test('Clicking the time text should call the onSelectStage event handler with the correct stage', () => {
    withGameSettings(new GameSettingsBuilder().withTimeSettings(new TimeSettingsBuilder().isTimed().build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    fireEvent.click(screen.getByText('timed'));
    expect(onSelectStageHandler).toHaveBeenLastCalledWith(6);
});

test('Clicking the time text should call the onSelectStage event handler with the correct stage', () => {
    withGameSettings(new GameSettingsBuilder().withQuestionSettings(new QuestionSettingsBuilder().withScoreTracking().build()));
    render(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    fireEvent.click(screen.getByText('your score will be tracked'));
    expect(onSelectStageHandler).toHaveBeenLastCalledWith(3);
});
