import { fireEvent, screen } from "@testing-library/react";
import LaunchPresetConfirmationModal from "../../../components/settings/LaunchPresetConfirmationModal"
import { GameSettingsBuilder } from "types/session/settings/game/GameSettings"
import LearnSettings from "types/session/settings/LearnSettings"
import PresetBuilder from "types/session/PresetBuilder"
import KanjiSettings, { KanjiSettingsBuilder } from "types/session/settings/data/KanjiSettings"
import { render } from "__test-utils__"
import { localStorageMock } from "../../../setupTests"
import { SessionSettingsBag } from "context/SessionSettingsContext";
import { getValueLastCalledWith } from "__test-utils__/Queries.ts";
import { LaunchPresetConfirmationModalProps } from "components/settings/LaunchPresetConfirmationModal/types.ts"
import { QuestionSettingsBuilder } from "types/session/settings/game/QuestionSettings.ts";
import QuestionType from "types/game/QuestionType.ts";
import LearnableField from "types/learn/LearnableField.ts";
import { HintSettingsBuilder } from "types/session/settings/game/HintSettings.ts";
import { LifeSettingsBuilder } from "types/session/settings/game/LifeSettings.ts";
import { TimeSettingsBuilder } from "types/session/settings/game/TimeSettings.ts";
import { KyoikuGrade } from "types/kanji/KyoikuGrade.ts";

const onDismissHandler = vi.fn()

const playPreset = new PresetBuilder()
  .withID(1)
  .withDisplayName("Test Play")
  .withColour("#ffffff")
  .withIcon("FaAtom")
  .withDataSettings(new KanjiSettingsBuilder().withQuantity(25).withJoyoKanji().build())
  .withGameSettings(new GameSettingsBuilder().build())
  .withTopicName("Topic")
  .build()

const learnPreset = new PresetBuilder()
  .withID(2)
  .withDisplayName("Test Learn")
  .withColour("#fdb40e")
  .withIcon("あ")
  .withDataSettings(new KanjiSettingsBuilder().withQuantity(25).withJoyoKanji().build())
  .withLearnSettings(new LearnSettings())
  .withTopicName("Topic")
  .build()

let props: LaunchPresetConfirmationModalProps

const setup = () => {
  const response = render(<LaunchPresetConfirmationModal {...props} />)

  return {
    start: response.component.getByText("Start"),
    close: response.component.getByTitle("Close"),
    ...response
  }
}

beforeEach(() => {
  props = {
    preset: playPreset,
    onDismiss: onDismissHandler
  }
})

test("It should render the preset display name", () => {
  setup()
  expect(screen.getByText("Test Play")).toBeInTheDocument()
})

test("It should render the game session settings summary if the preset is of play type", () => {
  props.preset = playPreset
  setup()
  expect(screen.getByTestId("session-settings-summary")).toBeInTheDocument()
})

test("It should render the learn session settings summary if the preset is of learn type", () => {
  props.preset = learnPreset
  setup()
  expect(screen.getByTestId("learn-session-settings-summary")).toBeInTheDocument()
})

test("It should call the onDismiss event handler when clicking the close button", () => {
  const { close } = setup()
  fireEvent.click(close)
  expect(onDismissHandler).toHaveBeenCalled()
})

test("It should route to the play page and set the game and data settings in context when starting", async () => {
  const { history, onSessionSettingsContextValueChange } = render(
    <LaunchPresetConfirmationModal {...props} />
  )

  // Start the session with the preset config
  fireEvent.click(screen.getByTestId('launch-preset-start'))

  // Starting the game should set the game and data settings in context
  const sessionSettings = getValueLastCalledWith<SessionSettingsBag>(onSessionSettingsContextValueChange)

  expect(sessionSettings.gameSettings).toStrictEqual(new GameSettingsBuilder()
    .withQuestionSettings(
      new QuestionSettingsBuilder()
        .withType(QuestionType.TEXT)
        .withFields(LearnableField.KANA, LearnableField.ROMAJI)
        .withCardQuantity(1)
        .withScoreTracking(false)
        .build()
    )
    .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(0).build())
    .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(5).build())
    .withTimeSettings(new TimeSettingsBuilder().isTimed(false).isCountDown(false).build())
    .build()
  )

  expect(sessionSettings.dataSettings).toStrictEqual(new KanjiSettings(
    [KyoikuGrade.ONE, KyoikuGrade.TWO, KyoikuGrade.THREE, KyoikuGrade.FOUR, KyoikuGrade.FIVE, KyoikuGrade.SIX, KyoikuGrade.EIGHT],
    [],
    25
  ))

  // It should also set the session settings with the preset
  const lastPlaySession = getValueLastCalledWith<SessionSettingsBag>(onSessionSettingsContextValueChange).lastPlaySession
  expect(lastPlaySession).toStrictEqual({
    colour: "#ffffff",
    data: {
      grades: [1, 2, 3, 4, 5, 6, 8],
      quantity: 25,
      tags: [],
      topic: "Jōyō Kanji"
    },
    game: {
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
    },
    icon: "FaAtom",
    id: 1,
    isPreset: true,
    name: "Test Play",
    topic: "Topic"
  })

  // Should re-direct to the /play page
  expect(history.location.pathname).toBe("/play")
})

test("It should route to the learn page and set data settings in the context when starting a learn preset", () => {
  props.preset = learnPreset

  const { start, history, onSessionSettingsContextValueChange } = setup()

  // Start the session with the preset config
  fireEvent.click(start)

  // Starting the game should set the data settings in context, but leave game settings undefined
  const sessionSettings = getValueLastCalledWith<SessionSettingsBag>(onSessionSettingsContextValueChange)

  expect(sessionSettings.gameSettings).toBeUndefined()
  expect(sessionSettings.dataSettings).toStrictEqual(new KanjiSettings(
    [KyoikuGrade.ONE, KyoikuGrade.TWO, KyoikuGrade.THREE, KyoikuGrade.FOUR, KyoikuGrade.FIVE, KyoikuGrade.SIX, KyoikuGrade.EIGHT],
    [],
    25
  ))

  // It should also set the session settings for the learn preset
  expect(sessionSettings.lastLearnSession).toStrictEqual({
    colour: "#fdb40e",
    data: {
      grades: [1, 2, 3, 4, 5, 6, 8],
      quantity: 25,
      tags: [],
      topic: "Jōyō Kanji"
    },
    icon: "あ",
    id: 2,
    isPreset: true,
    name: "Test Learn",
    topic: "Topic"
  })

  // Should re-direct to the /play page
  expect(history.location.pathname).toBe("/learn")
})

test("It should set the selected preset id in the local storage", () => {
  props.preset = playPreset
  const { start } = setup()

  // Start the session with the preset config
  fireEvent.click(start)

  expect(localStorageMock.getItem("selected-preset-id")).toBe("1")
})
