import { fireEvent, screen, waitFor } from "@testing-library/react"
import SessionWizard from "./SessionWizard"
import userEvent from "@testing-library/user-event"
import KanjiSettings from "types/session/settings/data/KanjiSettings"
import { GameSettingsBuilder } from "types/session/settings/game/GameSettings"
import { QuestionSettingsBuilder } from "types/session/settings/game/QuestionSettings"
import LearnableField from "types/learn/LearnableField"
import QuestionType from "types/game/QuestionType"
import { HintSettingsBuilder } from "types/session/settings/game/HintSettings"
import { TimeSettingsBuilder } from "types/session/settings/game/TimeSettings"
import { render } from "__test-utils__"
import { getValueLastCalledWith } from "__test-utils__/Queries"
import { SessionSettingsBag } from "context/SessionSettingsContext"
import { KyoikuGrade } from "types/kanji/KyoikuGrade.ts"
import { LifeSettingsBuilder } from "types/session/settings/game/LifeSettings.ts"
import { server } from "__test-utils__/msw.ts"
import {
  useGetDefaultPresetsHandlers,
  useGetDefaultPresetsHandlersError,
  useGetDefaultPresetsHandlersMultiplePresets
} from "api/hooks/presets/useGetDefaultPresets"
import { KanaSettingsBuilder } from "types/session/settings/data/KanaSettings.ts"

const onCloseHandler = vi.fn()

const setup = () => {
  const response = render(<SessionWizard onClose={onCloseHandler} />)

  return {
    next: response.component.getByText("Next"),
    close: response.component.getByTitle("Close"),
    ...response
  }
}

test("Should render the mode step on initial render", () => {
  setup()
  const modeStep = screen.getByTestId("wizard-mode-step")
  expect(modeStep).toBeInTheDocument()
})

test("Given the current step is type, custom is selected and mode is play, when clicking next, it should render the question step", () => {
  const { next } = setup()

  // Change to 'Play' mode
  fireEvent.click(screen.getByText("Play"))

  // Select the default topic
  fireEvent.click(next)

  // Advance to the 'Type' step
  fireEvent.click(next)

  // Select the 'Custom' type
  fireEvent.click(screen.getByText("Custom"))

  // Clicking 'Next' should advance to the question settings step
  fireEvent.click(next)
  expect(screen.getByTestId("question-settings-form"))
})

test("Given the current step is type, custom is selected and mode is learn, when clicking next, it should render the data step", () => {
  const { next } = setup()

  // Change to 'Learn' mode
  fireEvent.click(screen.getByText("Learn"))

  // Select the default topic
  fireEvent.click(next)

  // Advance to the 'Type' step
  fireEvent.click(next)

  // Select the 'Custom' type
  fireEvent.click(screen.getByText("Custom"))

  // Clicking 'Next' should advance to the data settings step
  fireEvent.click(next)
  expect(screen.getByTestId("wizard-data-settings-step"))
})

test("Given the current step is question and type is custom, when clicking back, it should render the type step", () => {
  const { next } = setup()

  // Change to 'Play' mode
  fireEvent.click(screen.getByText("Play"))
  fireEvent.click(next)

  // Select the 'Jōyō Kanji' Topic
  fireEvent.click(screen.getByText("Jōyō Kanji"))
  fireEvent.click(next)

  // Select the 'Custom' type
  fireEvent.click(screen.getByText("Custom"))
  fireEvent.click(next)

  // Clicking 'Back' should go back to the type step
  fireEvent.click(screen.getByText("Back"))
  expect(screen.getByTestId("wizard-type-settings-step"))
})

test("Given the current step is data, type is custom and mode is learn, when clicking back, it should render the type step", () => {
  const { next } = setup()

  // Change to 'Learn' mode
  fireEvent.click(screen.getByText("Learn"))
  fireEvent.click(next)

  // Skip topic selection
  fireEvent.click(next)

  // Select the 'Custom' type
  fireEvent.click(screen.getByText("Custom"))
  fireEvent.click(next)

  // Skip through to data step
  fireEvent.click(next) // Skip question settings
  fireEvent.click(next) // Skip life settings
  fireEvent.click(next) // Skip hint settings
  fireEvent.click(next) // Skip time settings

  // Clicking 'Back' should go back to the type step
  fireEvent.click(screen.getByText("Back"))
  expect(screen.getByTestId("wizard-type-settings-step")).toBeInTheDocument()
})

test("Clicking the back button in a normal scenario should go back a single step", () => {
  // Should start on the initial mode selection step
  const { next } = setup()
  expect(screen.getByTestId("wizard-mode-step")).toBeInTheDocument()

  // Advance to the 'Topic' step
  fireEvent.click(next)
  expect(screen.getByTestId("wizard-topic-settings-step")).toBeInTheDocument()

  // Clicking back should go back to the mode step
  fireEvent.click(screen.getByText("Back"))
  expect(screen.getByTestId("wizard-mode-step")).toBeInTheDocument()
})

test("Clicking Start in the confirmation step for custom play should set the selected settings in context", async () => {
  const { next, history, onSessionSettingsContextValueChange } = setup()

  // Select 'Play' mode
  fireEvent.click(screen.getByText("Play"))
  fireEvent.click(next)

  // Select the 'Jōyō Kanji' Topic
  fireEvent.click(screen.getByText("Jōyō Kanji"))
  fireEvent.click(next)

  // Select the 'Custom' type
  fireEvent.click(screen.getByText("Custom"))
  fireEvent.click(next)

  // Select some custom question settings
  fireEvent.click(screen.getByText("Multiple Choice"))
  fireEvent.click(screen.getByText("6"))
  await userEvent.selectOptions(screen.getAllByTestId("learnable-field-selector")[0], "Kanji")
  await userEvent.selectOptions(screen.getAllByTestId("learnable-field-selector")[1], "English Meaning")
  fireEvent.click(next)

  // Change the hint settings
  fireEvent.click(screen.getByTestId("enable-hints"))
  fireEvent.click(next)

  // Change the life settings
  fireEvent.click(screen.getByTestId("enable-lives"))
  fireEvent.click(next)

  // Change the time settings
  fireEvent.click(screen.getByTestId("Countdown"))
  fireEvent.click(next)

  // Select data settings
  fireEvent.click(screen.getByText("Grade 1"))
  fireEvent.change(screen.getByPlaceholderText("Quantity"), { target: { value: 50 } })
  fireEvent.click(next)

  // Starting the game should set the game and data settings in context
  fireEvent.click(screen.getByText("Start"))
  const sessionContext = getValueLastCalledWith<SessionSettingsBag>(onSessionSettingsContextValueChange)

  expect(sessionContext.gameSettings).toStrictEqual(new GameSettingsBuilder()
    .withQuestionSettings(
      new QuestionSettingsBuilder()
        .withType(QuestionType.CHOICE)
        .withFields(LearnableField.KANJI, LearnableField.MEANING)
        .withCardQuantity(6)
        .withQuantity(1)
        .withScoreTracking(true)
        .build()
    )
    .withHintSettings(new HintSettingsBuilder().isEnabled(false).withQuantity(3).build())
    .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(0).build())
    .withTimeSettings(new TimeSettingsBuilder().isTimed(false).isCountDown(true).withSecondsPerQuestion(10).build())
    .build()
  )

  expect(sessionContext.dataSettings).toStrictEqual(new KanjiSettings([KyoikuGrade.ONE], [], 50))

  // Should re-direct to the /play page
  expect(history.location.pathname).toBe("/play")
})

test("Clicking Start in the confirmation step for preset play should set the selected settings in context", async () => {
  server.use(...useGetDefaultPresetsHandlers)

  const { next, history, onSessionSettingsContextValueChange } = setup()

  // Select 'Play' mode
  fireEvent.click(screen.getByText("Play"))
  fireEvent.click(next)

  // Select the 'Hiragana & Katakana' Topic
  fireEvent.click(screen.getByText("Hiragana & Katakana"))
  fireEvent.click(next)

  // Select the 'Preset' type
  fireEvent.click(screen.getAllByText("Preset")[0])
  fireEvent.click(next)

  // Wait for presets to load
  expect(await screen.findByText("Example Play Preset")).toBeInTheDocument()

  // Starting the game should set the game and data settings in context
  fireEvent.click(screen.getByText("Start"))

  const sessionContext = getValueLastCalledWith<SessionSettingsBag>(onSessionSettingsContextValueChange)

  expect(sessionContext.gameSettings).toStrictEqual(new GameSettingsBuilder()
    .withQuestionSettings(
      new QuestionSettingsBuilder()
        .withType(QuestionType.CHOICE)
        .withFields(LearnableField.KANA, LearnableField.ROMAJI)
        .withCardQuantity(4)
        .withQuantity(150)
        .withScoreTracking(true)
        .build()
    )
    .withHintSettings(new HintSettingsBuilder().isEnabled(true).withQuantity(8).build())
    .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(12).build())
    .withTimeSettings(new TimeSettingsBuilder().isTimed(true).isCountDown(false).withSecondsPerQuestion(0).build())
    .build()
  )

  expect(sessionContext.dataSettings).toStrictEqual(
    new KanaSettingsBuilder()
      .withQuantity(50)
      .withDiacriticals(true)
      .withHiragana(true)
      .build()
  )

  // Should re-direct to the /play page
  expect(history.location.pathname).toBe("/play")
})

test("Clicking Start in the confirmation step for custom learn should set the selected settings in context", () => {
  const { next, history, onSessionSettingsContextValueChange } = setup()

  // Select 'Learn' mode
  fireEvent.click(screen.getByText("Learn"))
  fireEvent.click(next)

  // Select the 'Jōyō Kanji' Topic
  fireEvent.click(screen.getByText("Jōyō Kanji"))
  fireEvent.click(next)

  // Select the 'Custom' type
  fireEvent.click(screen.getByText("Custom"))
  fireEvent.click(next)

  // Select data settings
  fireEvent.click(screen.getByText("Grade 2"))
  fireEvent.change(screen.getByPlaceholderText("Quantity"), { target: { value: 25 } })
  fireEvent.click(next)

  // Starting the game should set the data settings in context
  fireEvent.click(screen.getByText("Start"))

  const sessionContext = getValueLastCalledWith<SessionSettingsBag>(onSessionSettingsContextValueChange)
  expect(sessionContext.gameSettings).toBeUndefined()
  expect(sessionContext.dataSettings).toStrictEqual(new KanjiSettings([KyoikuGrade.TWO], [], 25))

  // Should re-direct to the /learn page
  expect(history.location.pathname).toBe("/learn")
})

test("Clicking a stage link in the confirmation step for play should render the chosen step", () => {
  const { next } = setup()

  // Select 'Play' mode
  fireEvent.click(screen.getByText("Play"))
  fireEvent.click(next)

  // Skip topic selection
  fireEvent.click(next)

  // Select the 'Custom' type
  fireEvent.click(screen.getByText("Custom"))
  fireEvent.click(next)

  // Skip through to data step
  fireEvent.click(next) // Skip question settings
  fireEvent.click(next) // Skip life settings
  fireEvent.click(next) // Skip hint settings
  fireEvent.click(next) // Skip time settings

  // Select data settings
  fireEvent.change(screen.getByPlaceholderText("Quantity"), { target: { value: 10 } })
  fireEvent.click(next)

  // Clicking a stage link in the confirmation text should switch to that step
  fireEvent.click(screen.getByText("Hiragana & Katakana"))
  expect(screen.getByTestId("wizard-topic-settings-step")).toBeInTheDocument()
})

test("Clicking a stage link in the confirmation step for learn should render the chosen step", () => {
  const { next } = setup()

  // Select 'Learn' mode
  fireEvent.click(screen.getByText("Learn"))
  fireEvent.click(next)

  // Skip topic selection
  fireEvent.click(next)

  // Select the 'Custom' type
  fireEvent.click(screen.getByText("Custom"))
  fireEvent.click(next)

  // Skip through to data step
  fireEvent.click(next) // Skip question settings
  fireEvent.click(next) // Skip life settings
  fireEvent.click(next) // Skip hint settings
  fireEvent.click(next) // Skip time settings

  // Select data settings
  fireEvent.change(screen.getByPlaceholderText("Quantity"), { target: { value: 10 } })
  fireEvent.click(next)

  // Clicking a stage link in the confirmation text should switch to that step
  fireEvent.click(screen.getByText("learning"))
  expect(screen.getByTestId("wizard-mode-step")).toBeInTheDocument()
})

test("Clicking a stage link in the footer should render that stage", () => {
  setup()

  // Skip straight to the type step
  fireEvent.click(screen.getByTitle("Preset or Custom"))

  expect(screen.getByTestId("wizard-type-settings-step")).toBeInTheDocument()
})

test("Closing the wizard should call the onClose event handler", async () => {
  // Click the 'x' button to close
  const { close } = setup()
  fireEvent.click(close)

  // Should render the confirmation modal
  expect(await screen.findByText("Are you sure?")).toBeInTheDocument()
  expect(await screen.findByText("You'll lose your current configuration.")).toBeInTheDocument()

  // Clicking yes should call the event handler
  fireEvent.click(screen.getByText("Yes"))
  expect(onCloseHandler).toHaveBeenCalled()
})

test("Dismissing the confirmation modal should not call the onClose event handler", async () => {
  // Click the 'x' button to close
  const { close } = setup()
  fireEvent.click(close)

  // Should render the confirmation modal
  expect(await screen.findByText("Are you sure?")).toBeInTheDocument()
  expect(await screen.findByText("You'll lose your current configuration.")).toBeInTheDocument()

  // Clicking yes should call the event handler
  fireEvent.click(screen.getByText("No"))
  expect(onCloseHandler).not.toHaveBeenCalled()
})

test("Switching from the mode step and back again should maintain its selection state", () => {
  const { next } = setup()

  // Change the mode selection to 'Learn'
  fireEvent.click(screen.getByText("Learn"))

  // Advance to the 'Topic' step
  fireEvent.click(next)

  // Go back to the 'Mode' step
  fireEvent.click(screen.getByText("Back"))

  // Learn should still be selected
  expect(screen.getByText("Learn").parentElement).toHaveClass("selected")
})

test("Switching from the topic step and back again should maintain its selection state", () => {
  const { next } = setup()

  // Advance to the 'Topic' step
  fireEvent.click(next)

  // Change the topic selection to 'Basics'
  fireEvent.click(screen.getByText("Basics"))

  // Advance to the 'Type' step
  fireEvent.click(next)

  // Go back to the 'Topic' step
  fireEvent.click(screen.getByText("Back"))

  // Basics should still be selected
  expect(screen.getByText("Basics").parentElement).toHaveClass("selected")
})

test("Switching from the type step and back again should maintain its selection state", () => {
  const { next } = setup()

  // Advance to the 'Type' step
  fireEvent.click(screen.getByTitle("Preset or Custom"))

  // Change the type selection to 'Custom'
  fireEvent.click(screen.getByText("Custom"))

  // Advance to the 'Question Settings' step
  fireEvent.click(next)

  // Go back to the 'Type' step
  fireEvent.click(screen.getByText("Back"))

  // Custom should still be selected
  expect(screen.getByText("Custom").parentElement).toHaveClass("selected")
})

test("Switching from the preset step and back again should maintain its selection state", async () => {
  server.use(...useGetDefaultPresetsHandlersMultiplePresets)
  const { next } = setup()

  // Advance to the 'Preset' step
  fireEvent.click(screen.getByTitle("Preset or Custom"))
  fireEvent.click(next)

  // Change the topic to 'Basics'
  await waitFor(() => expect(screen.getByTestId("wizard-topic-selector")).not.toBeDisabled())
  await userEvent.click(screen.getByTestId("topic-selector-toggle"))
  expect(await screen.findByTestId("topic-selector-menu")).toBeInTheDocument()
  fireEvent.click(await screen.findByText("Basics"))

  // Change the preset selection to 'Test Play'
  fireEvent.click(screen.getByText("Example Play Preset 2"))

  // Go back to the 'Type' step
  fireEvent.click(screen.getByText("Back"))

  // Return to the 'Preset' step
  fireEvent.click(next)

  // The 'Basics' topic should still be selected
  expect(screen.getByText("Basics")).toBeInTheDocument()

  // The 'Test Play' preset should still be selected
  expect((await screen.findByText("Example Play Preset 2")).parentElement).toHaveClass("selected")
})

test("The start button should be disabled if the preset is undefined", async () => {
  server.use(...useGetDefaultPresetsHandlersError)
  const { next } = setup()

  fireEvent.click(next) // Go to topic selection
  fireEvent.click(screen.getByText("Next")) // Go to type selection
  fireEvent.click(screen.getByText("Next")) // Go to preset selection

  await waitFor(() => expect(screen.getByText("Start")).toBeDisabled())
})
