import { fireEvent, screen, waitFor } from "@testing-library/react"
import PresetSelectionStep, {
  PresetSelectionStepProps
} from "../../../../../components/layout/wizard/steps/PresetSelectionStep"
import Topic from "types/Topic"
import { AppMode } from "types/AppMode"
import { getValueLastCalledWith } from "__test-utils__/Queries"
import PlayMode from "types/session/PlayMode"
import { KanaSettingsBuilder } from "types/session/settings/data/KanaSettings"
import { GameSettingsBuilder } from "types/session/settings/game/GameSettings"
import PresetBuilder from "types/session/PresetBuilder"
import LearnSettings from "types/session/settings/LearnSettings"
import { testUser } from "setupTests.ts"
import { render } from "__test-utils__"
import { User } from "context/UserContext";
import { server } from "__test-utils__/msw.ts";
import { useGetPresetsHandlers, useGetPresetsHandlersEmpty, useGetPresetsHandlersError } from "api/hooks/presets/useGetPresets";
import { useGetDefaultPresetsHandlers } from "api/hooks/presets/useGetDefaultPresets";
import userEvent from "@testing-library/user-event";
import { HintSettingsBuilder } from "types/session/settings/game/HintSettings.ts";
import { LifeSettingsBuilder } from "types/session/settings/game/LifeSettings.ts";
import { QuestionSettingsBuilder } from "types/session/settings/game/QuestionSettings.ts";
import QuestionType from "types/game/QuestionType.ts";
import { TimeSettingsBuilder } from "types/session/settings/game/TimeSettings.ts";

const onSelectHandler = vi.fn()
const onChangeTopicHandler = vi.fn()
const isValidHandler = vi.fn()

const playPreset = new PresetBuilder()
  .withID(2)
  .withDisplayName("Example Play Preset")
  .withDescription("An example play preset desc")
  .withColour("ffffff")
  .withIcon("faApple")
  .withDataSettings(new KanaSettingsBuilder()
    .withDiacriticals(true)
    .withQuantity(50)
    .withHiragana(true)
    .build())
  .withGameSettings(new GameSettingsBuilder()
    .withHintSettings(new HintSettingsBuilder()
      .withQuantity(8)
      .build())
    .withLifeSettings(new LifeSettingsBuilder()
      .withQuantity(12)
      .build())
    .withQuestionSettings(new QuestionSettingsBuilder()
      .withQuantity(150)
      .withCardQuantity(4)
      .withScoreTracking(true)
      .withType(QuestionType.CHOICE)
      .build())
    .withTimeSettings(new TimeSettingsBuilder()
      .isTimed(true)
      .build())
    .build())
  .withTopicName("Hiragana & Katakana")
  .build()

const learnPreset = new PresetBuilder()
  .withID(2)
  .withDisplayName("Test Learn")
  .withColour("#fdb40e")
  .withIcon("あ")
  .withDataSettings(new KanaSettingsBuilder().build())
  .withLearnSettings(new LearnSettings())
  .withTopicName("Hiragana & Katakana")
  .withShortName("Short Learn")
  .withFavouriteID(2)
  .withDescription("TestLearnDescription")
  .build()

let props: PresetSelectionStepProps

const setup = (user?: User) => {
  const { component } = render(<PresetSelectionStep {...props} />, { user })
  return {
    topic: component.getByTestId("wizard-topic-selector"),
    ...component
  }
}

beforeEach(() => {
  props = {
    mode: AppMode.PLAY,
    preset: playPreset,
    topic: Topic.KANA,
    onSelect: onSelectHandler,
    isValid: isValidHandler,
    onChangeTopic: onChangeTopicHandler
  }
})

test("Should render the play preset options from the given presets when the mode is play", async () => {
  // Set the mode to 'Play' and preset
  server.use(...useGetPresetsHandlers)
  props.mode = AppMode.PLAY
  props.preset = playPreset
  setup(testUser)

  expect(await screen.findByTestId('presets')).toBeInTheDocument()

  // Should render play presets
  expect(await screen.findByTestId("grid-item-1")).toBeInTheDocument()
  expect(screen.queryByTestId("grid-item-2")).not.toBeInTheDocument()
})

test("Should render the learn preset options from the given presets when the mode is learn", async () => {
  // Set the mode to 'Learn' and preset
  server.use(...useGetPresetsHandlers)
  props.mode = AppMode.LEARN
  props.preset = learnPreset
  setup(testUser)

  // Should render default learn preset and custom since user is logged in
  expect(await screen.findByText("Test Learn")).toBeInTheDocument()
  expect(await screen.findByText("Test Custom Learn")).toBeInTheDocument()
  expect(screen.queryByText("Test Play")).not.toBeInTheDocument()
})

test("Should render the default presets when there is no user logged in", async () => {
  // Set the mode to 'Learn' and preset
  server.use(...[...useGetPresetsHandlers, ...useGetDefaultPresetsHandlers])
  props.mode = AppMode.LEARN
  props.preset = learnPreset
  setup()

  // Should render default learn presets
  expect(await screen.findByText("Example Learn Preset")).toBeInTheDocument()
  expect(screen.queryByText("Test Custom Learn")).not.toBeInTheDocument()
})

test("Should render an empty state message if no presets are returned", async () => {
  server.use(...useGetPresetsHandlersEmpty)
  setup(testUser)
  expect(await screen.findByText("No presets available for this topic.")).toBeInTheDocument()
})

test("Should render an error message if the service call fails and returns one", async () => {
  server.use(...useGetPresetsHandlersError)
  setup(testUser)
  expect(await screen.findByText("Failed to retrieve presets.")).toBeInTheDocument()
})

test("Selecting a preset should call the onSelect event handler with that preset", async () => {
  server.use(...useGetPresetsHandlers)
  setup(testUser)

  fireEvent.click(await screen.findByTestId("grid-item-1"))

  expect(await screen.findByText("An example play preset desc")).toBeInTheDocument()
  expect(getValueLastCalledWith<PlayMode>(onSelectHandler).displayName).toBe("Test Play")
})

test("Selecting a preset should call the onChangeTopic event handler with that topic", async () => {
  server.use(...useGetPresetsHandlers)
  const { topic } = setup(testUser)
  await waitFor(() => expect(topic).not.toBeDisabled())

  // Change the topic to 'Basics'
  await userEvent.click(screen.getByTestId("topic-selector-toggle"))
  expect(await screen.findByTestId('topic-selector-menu')).toBeInTheDocument()
  await userEvent.click(await screen.findByText("Basics"))

  // Should call the event handler
  expect(onChangeTopicHandler).toHaveBeenLastCalledWith(Topic.BASICS)
})

test("It should select the first preset if one is not passed as selected", async () => {
  props.preset = undefined
  props.mode = AppMode.PLAY
  server.use(...useGetDefaultPresetsHandlers)
  setup()

  // Mouse over to show the description, this only happens when selected
  fireEvent.mouseOver(await screen.findByTestId("grid-item-2"))

  expect(onSelectHandler).toHaveBeenCalledWith(playPreset)
})

test("It should call the isValid event handler with false if the get all presets call fails", async () => {
  server.use(...useGetPresetsHandlersError)

  setup(testUser)

  await waitFor(() => expect(isValidHandler).toHaveBeenCalledTimes(2))
  expect(isValidHandler).toHaveBeenLastCalledWith(false)
})
