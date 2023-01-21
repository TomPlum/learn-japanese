import { GameSettingsBuilder } from "../../../domain/session/settings/game/GameSettings"
import { KanjiSettingsBuilder } from "../../../domain/session/settings/data/KanjiSettings"
import { SessionSettings } from "../../../domain/session/settings/SessionSettings"
import LearnableField from "../../../domain/learn/LearnableField"
import QuestionType from "../../../domain/game/QuestionType"
import { fireEvent, render, screen } from "@testing-library/react"
import { QuestionSettingsBuilder } from "../../../domain/session/settings/game/QuestionSettings"
import { LifeSettingsBuilder } from "../../../domain/session/settings/game/LifeSettings"
import { HintSettingsBuilder } from "../../../domain/session/settings/game/HintSettings"
import { TimeSettingsBuilder } from "../../../domain/session/settings/game/TimeSettings"
import { getByTextWithElements } from "../../Queries"
import LearnSettings from "../../../domain/session/settings/LearnSettings"
import { WizardStep } from "../../../components/layout/wizard/SessionWizard"
import SessionSettingsSummary from "../../../components/settings/SessionSettingsSummary"
import renderWithTranslation from "../../renderWithTranslation"

const onSelectStageHandler = jest.fn()

const gameSettings = new GameSettingsBuilder()
const dataSettings = new KanjiSettingsBuilder()
let settings: SessionSettings

const { KANA, ROMAJI } = LearnableField
const { MATCH, RANDOM, TEXT, CHOICE, AUDIO } = QuestionType

function withGameSettings(gameSettings: GameSettingsBuilder) {
    settings = SessionSettings.forGame(dataSettings.build(), gameSettings.build())
}

function withDataSettings(dataSettings: KanjiSettingsBuilder) {
    settings = SessionSettings.forGame(dataSettings.build(), gameSettings.build())
}

test("Should render the initial text", () => {
    withGameSettings(new GameSettingsBuilder())
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("You'll be given the")).toBeInTheDocument()
})

test("Should render the question field name", () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withFields(KANA, ROMAJI).build()))
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("You'll be given the")).toBeInTheDocument()
})

test("Should render the intermediary text between the question field and type", () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withFields(KANA, ROMAJI).build()))
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("and must")).toBeInTheDocument()
})

test('Should render the action word "type" if the question type is text', () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withType(TEXT).build()))
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("type")).toBeInTheDocument()
})

test('Should render the action word "match" if the question type is match', () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withType(MATCH).build()))
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("match")).toBeInTheDocument()
})

test('Should render the action word "pick" and the card quantity if the question type is choice', () => {
    withGameSettings(
        gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withType(CHOICE).withCardQuantity(4).build())
    )
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("pick from 4 cards")).toBeInTheDocument()
})

test('Should render the action word "listen to" if the question type is audio', () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withType(AUDIO).build()))
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("listen to")).toBeInTheDocument()
})

test('Should render the action word "answer" if the question type is random', () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withType(RANDOM).build()))
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("answer")).toBeInTheDocument()
})

test("Should render the intermediary text between the question type and answer field", () => {
    withGameSettings(new GameSettingsBuilder())
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("the")).toBeInTheDocument()
})

test("Should render the answer field name", () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withFields(KANA, ROMAJI).build()))
    renderWithTranslation(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("Rōmaji")).toBeInTheDocument()
})

test("Should render the intermediary text between the answer field and question quantity", () => {
    withGameSettings(new GameSettingsBuilder())
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("for")).toBeInTheDocument()
})

test("Should render the number of questions to be answered", () => {
    withDataSettings(dataSettings.withQuantity(60))
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("60")).toBeInTheDocument()
})

test("Should render the intermediary text between the question quantity and topic name", () => {
    withGameSettings(new GameSettingsBuilder())
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("questions about")).toBeInTheDocument()
})

test("Should render the topic name", () => {
    withDataSettings(new KanjiSettingsBuilder())
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("Jōyō Kanji")).toBeInTheDocument()
})

test("Should render the intermediary text between the topic name and the life quantity", () => {
    withGameSettings(new GameSettingsBuilder())
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("You'll have")).toBeInTheDocument()
})

test("Should render the number of lives chosen", () => {
    withGameSettings(new GameSettingsBuilder().withLifeSettings(new LifeSettingsBuilder().withQuantity(5).build()))
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("5 lives")).toBeInTheDocument()
})

test('Should render "unlimited lives" if there are 0 lives chosen"', () => {
    withGameSettings(new GameSettingsBuilder().withLifeSettings(new LifeSettingsBuilder().isEnabled(false).build()))
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("unlimited lives")).toBeInTheDocument()
})

test("Should render the number of hints chosen", () => {
    withGameSettings(new GameSettingsBuilder().withHintSettings(new HintSettingsBuilder().withQuantity(3).build()))
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("3 hints")).toBeInTheDocument()
})

test('Should render "no hints" if there are 0 hints chosen"', () => {
    withGameSettings(new GameSettingsBuilder().withHintSettings(new HintSettingsBuilder().withQuantity(0).build()))
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("no hints")).toBeInTheDocument()
})

test('Should render "unlimited hints" if there are infinite hints chosen"', () => {
    withGameSettings(new GameSettingsBuilder().withHintSettings(new HintSettingsBuilder().areUnlimited().build()))
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("unlimited hints")).toBeInTheDocument()
})

test("Should render the correct text for a timed session if selected", () => {
    withGameSettings(new GameSettingsBuilder().withTimeSettings(new TimeSettingsBuilder().isTimed().build()))
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(getByTextWithElements("your session will be timed")).toBeInTheDocument()
})

test("Should render the correct text for a countdown session if selected", () => {
    withGameSettings(
        new GameSettingsBuilder().withTimeSettings(
            new TimeSettingsBuilder().isCountDown().withSecondsPerQuestion(10).build()
        )
    )
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(getByTextWithElements("you'll have 10 seconds per question")).toBeInTheDocument()
})

test("Should render the intermediary text between the time words and the score words", () => {
    withGameSettings(new GameSettingsBuilder())
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("and")).toBeInTheDocument()
})

test("Should render the score tracking text if enabled", () => {
    withGameSettings(
        new GameSettingsBuilder().withQuestionSettings(new QuestionSettingsBuilder().withScoreTracking().build())
    )
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("your score will be tracked")).toBeInTheDocument()
})

test("Should render the score tracking disabled text if disabled", () => {
    withGameSettings(
        new GameSettingsBuilder().withQuestionSettings(new QuestionSettingsBuilder().withScoreTracking(false).build())
    )
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("scoring will be disabled")).toBeInTheDocument()
})

test("Should render an error message if the game settings are undefined", () => {
    settings = SessionSettings.forLearning(dataSettings.build(), new LearnSettings())
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    expect(screen.getByText("Your game settings could not be found. Please reload and try again."))
})

test("Clicking the question field text should call the onSelectStage event handler with the correct stage", () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withFields(KANA, ROMAJI).build()))
    renderWithTranslation(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    fireEvent.click(screen.getByText("Kana"))
    expect(onSelectStageHandler).toHaveBeenLastCalledWith(WizardStep.QUESTION)
})

test("Clicking the question type text should call the onSelectStage event handler with the correct stage", () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withType(TEXT).build()))
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    fireEvent.click(screen.getByText("type"))
    expect(onSelectStageHandler).toHaveBeenLastCalledWith(WizardStep.QUESTION)
})

test("Clicking the answer field text should call the onSelectStage event handler with the correct stage", () => {
    withGameSettings(gameSettings.withQuestionSettings(new QuestionSettingsBuilder().withFields(KANA, ROMAJI).build()))
    renderWithTranslation(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    fireEvent.click(screen.getByText("Rōmaji"))
    expect(onSelectStageHandler).toHaveBeenLastCalledWith(WizardStep.QUESTION)
})

test("Clicking the question quantity text should call the onSelectStage event handler with the correct stage", () => {
    withDataSettings(new KanjiSettingsBuilder().withQuantity(65))
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    fireEvent.click(screen.getByText("65"))
    expect(onSelectStageHandler).toHaveBeenLastCalledWith(WizardStep.DATA)
})

test("Clicking the topic name text should call the onSelectStage event handler with the correct stage", () => {
    withDataSettings(new KanjiSettingsBuilder())
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    fireEvent.click(screen.getByText("Jōyō Kanji"))
    expect(onSelectStageHandler).toHaveBeenLastCalledWith(WizardStep.TOPIC)
})

test("Clicking the lives text should call the onSelectStage event handler with the correct stage", () => {
    withGameSettings(gameSettings.withLifeSettings(new LifeSettingsBuilder().withQuantity(12).build()))
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    fireEvent.click(screen.getByText("12 lives"))
    expect(onSelectStageHandler).toHaveBeenLastCalledWith(WizardStep.LIVES)
})

test("Clicking the hints text should call the onSelectStage event handler with the correct stage", () => {
    withGameSettings(new GameSettingsBuilder().withHintSettings(new HintSettingsBuilder().withQuantity(3).build()))
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    fireEvent.click(screen.getByText("3 hints"))
    expect(onSelectStageHandler).toHaveBeenLastCalledWith(WizardStep.HINT)
})

test("Clicking the time text should call the onSelectStage event handler with the correct stage", () => {
    withGameSettings(new GameSettingsBuilder().withTimeSettings(new TimeSettingsBuilder().isTimed().build()))
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    fireEvent.click(screen.getByText("timed"))
    expect(onSelectStageHandler).toHaveBeenLastCalledWith(WizardStep.TIME)
})

test("Clicking the time text should call the onSelectStage event handler with the correct stage", () => {
    withGameSettings(
        new GameSettingsBuilder().withQuestionSettings(new QuestionSettingsBuilder().withScoreTracking().build())
    )
    render(<SessionSettingsSummary settings={settings} onSelectStage={onSelectStageHandler} />)
    fireEvent.click(screen.getByText("your score will be tracked"))
    expect(onSelectStageHandler).toHaveBeenLastCalledWith(WizardStep.QUESTION)
})
