import { fireEvent, screen, waitFor } from "@testing-library/react"
import PresetSelectionStep, {
  PresetSelectionStepProps
} from "../../../../../components/layout/wizard/steps/PresetSelectionStep"
import Topic from "../../../../../domain/Topic"
import { AppMode } from "../../../../../domain/AppMode"
import { getValueLastCalledWith } from "tests/Queries"
import PlayMode from "../../../../../domain/session/PlayMode"
import { KanaSettingsBuilder } from "../../../../../domain/session/settings/data/KanaSettings"
import { GameSettingsBuilder } from "../../../../../domain/session/settings/game/GameSettings"
import PresetBuilder from "../../../../../domain/session/PresetBuilder"
import LearnSettings from "../../../../../domain/session/settings/LearnSettings"
import { store } from "../../../../../store"
import { clearUser, setUser } from "../../../../../slices/UserSlice"
import { testUser } from "../../../../../setupTests"
import renderTranslatedReduxConsumer from "tests/renderTranslatedReduxConsumer"

const mockGetAllPresets = vi.fn()
const mockGetDefaultPresets = vi.fn()
vi.mock("../../../../../service/PresetService", () => ({
  default: function () {
    return {
      getAllPresets: mockGetAllPresets,
      getDefaultPresets: mockGetDefaultPresets
    }
  }
}))

const onSelectHandler = vi.fn()
const onChangeTopicHandler = vi.fn()
const isValidHandler = vi.fn()

const playPreset = new PresetBuilder()
  .withID(1)
  .withDisplayName("Test Play")
  .withDescription("This is an example play description")
  .withColour("#ffffff")
  .withIcon("FaAtom")
  .withDataSettings(new KanaSettingsBuilder().build())
  .withGameSettings(new GameSettingsBuilder().build())
  .withTopicName("Hiragana & Katakana")
  .withShortName("Short Play")
  .withFavouriteID(1)
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

const customPreset = new PresetBuilder()
  .withID(3)
  .withDisplayName("Custom Learn Preset")
  .withColour("#fdb40e")
  .withIcon("あ")
  .withDataSettings(new KanaSettingsBuilder().build())
  .withLearnSettings(new LearnSettings())
  .withTopicName("Hiragana & Katakana")
  .withShortName("Custom Preset")
  .withFavouriteID(3)
  .isCustom()
  .build()

let props: PresetSelectionStepProps

const setup = () => {
  const component = renderTranslatedReduxConsumer(<PresetSelectionStep {...props} />)
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

afterEach(() => {
  store.dispatch(clearUser())
})

test("Should render the play preset options from the given presets when the mode is play", async () => {
  // Set the mode to 'Play' and preset
  store.dispatch(setUser(testUser))
  mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] })
  props.mode = AppMode.PLAY
  props.preset = playPreset
  setup()

  // Should render play presets
  expect(await screen.findByText("Short Play")).toBeInTheDocument()
  expect(screen.queryByText("Short Learn")).not.toBeInTheDocument()
})

test("Should render the learn preset options from the given presets when the mode is learn", async () => {
  // Set the mode to 'Learn' and preset
  store.dispatch(setUser(testUser))
  mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset, customPreset], play: [playPreset] })
  props.mode = AppMode.LEARN
  props.preset = learnPreset
  setup()

  // Should render default learn preset and custom since user is logged in
  expect(await screen.findByText("Short Learn")).toBeInTheDocument()
  expect(await screen.findByText("Custom Preset")).toBeInTheDocument()
  expect(screen.queryByText("Short Play")).not.toBeInTheDocument()
})

test("Should render the default presets when there is no user logged in", async () => {
  // Set the mode to 'Learn' and preset
  store.dispatch(clearUser())
  mockGetDefaultPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] })
  mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset, customPreset], play: [playPreset] })
  props.mode = AppMode.LEARN
  props.preset = learnPreset
  setup()

  // Should render default learn presets
  expect(await screen.findByText("Short Learn")).toBeInTheDocument()
  expect(screen.queryByText("Custom Preset")).not.toBeInTheDocument()
})

test("Should render an empty state message if no presets are returned", async () => {
  store.dispatch(setUser(testUser))
  mockGetAllPresets.mockResolvedValueOnce({ learn: [], play: [] })
  setup()
  expect(await screen.findByText("No presets available for this topic.")).toBeInTheDocument()
})

test("Should render an error message if the service call fails and returns one", async () => {
  store.dispatch(setUser(testUser))
  mockGetAllPresets.mockResolvedValueOnce({ learn: [], play: [], error: "Failed to retrieve presets." })
  setup()
  expect(await screen.findByText("Failed to retrieve presets.")).toBeInTheDocument()
})

test("Selecting a preset should call the onSelect event handler with that preset", async () => {
  store.dispatch(setUser(testUser))
  mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] })
  setup()

  fireEvent.click(await screen.findByText("Short Play"))

  expect(await screen.findByText("This is an example play description")).toBeInTheDocument()
  expect(getValueLastCalledWith<PlayMode>(onSelectHandler).displayName).toBe("Test Play")
})

test("Selecting a preset should call the onChangeTopic event handler with that topic", async () => {
  store.dispatch(setUser(testUser))
  mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] })
  const { topic } = setup()
  await waitFor(() => expect(topic).not.toBeDisabled())

  // Change the topic to 'Basics'
  fireEvent.click(screen.getByText("Hiragana & Katakana"))
  fireEvent.click(screen.getByText("Basics"))

  // Should call the event handler
  expect(onChangeTopicHandler).toHaveBeenLastCalledWith(Topic.BASICS)
})

test("It should select the first preset if one is not passed as selected", async () => {
  props.preset = undefined
  props.mode = AppMode.PLAY
  mockGetDefaultPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] })
  setup()

  // Mouse over to show the description, this only happens when selected
  fireEvent.mouseOver(await screen.findByTestId("grid-item-1"))

  expect(onSelectHandler).toHaveBeenCalledWith(playPreset)
})

test("It should call the isValid event handler with false if the get all presets call fails", async () => {
  store.dispatch(setUser(testUser))
  mockGetAllPresets.mockResolvedValueOnce({ error: "Whoops." })

  setup()

  await waitFor(() => expect(isValidHandler).toHaveBeenCalledTimes(2))
  expect(isValidHandler).toHaveBeenLastCalledWith(false)
})
