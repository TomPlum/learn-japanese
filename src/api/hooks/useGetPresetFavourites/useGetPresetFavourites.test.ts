import LearnMode from "types/session/LearnMode.ts";
import LearnSettings from "types/session/settings/LearnSettings.ts";
import PlayMode from "types/session/PlayMode.ts";
import { renderHook } from "@testing-library/react";
import useGetPresetFavourites from "api/hooks/useGetPresetFavourites/useGetPresetFavourites.ts";
import { GameSettingsBuilder } from "types/session/settings/game/GameSettings.ts";
import { LifeSettingsBuilder } from "types/session/settings/game/LifeSettings.ts";
import { HintSettingsBuilder } from "types/session/settings/game/HintSettings.ts";
import { TimeSettingsBuilder } from "types/session/settings/game/TimeSettings.ts";
import { QuestionSettingsBuilder } from "types/session/settings/game/QuestionSettings.ts";
import LearnableField from "types/learn/LearnableField.ts";
import QuestionType from "types/game/QuestionType.ts";
import { KanaSettingsBuilder } from "types/session/settings/data/KanaSettings.ts";
import { server } from "__test-utils__/msw.ts";
import {
  useGetPresetFavouritesHandlers
} from "api/hooks/useGetPresetFavourites";

describe('Get Preset Favourites API Hook', () => {
  const gameSettings = new GameSettingsBuilder()
    .withLifeSettings(new LifeSettingsBuilder().withQuantity(12).isEnabled(true).build())
    .withHintSettings(new HintSettingsBuilder().withQuantity(8).isEnabled(true).areUnlimited(false).build())
    .withTimeSettings(new TimeSettingsBuilder().isTimed(true).isCountDown(false).withSecondsPerQuestion(0).build())
    .withQuestionSettings(
      new QuestionSettingsBuilder()
        .withFields(LearnableField.KANA, LearnableField.ROMAJI)
        .withQuantity(150)
        .withType(QuestionType.CHOICE)
        .withCardQuantity(4)
        .withScoreTracking(true)
        .build()
    )
    .build()

  const dataSettings = new KanaSettingsBuilder()
    .withHiragana(true)
    .withKatakana(false)
    .withDiagraphs(false)
    .withDiacriticals(true)
    .withOnlyDiagraphs(false)
    .withQuantity(50)
    .build()

  it("Should return the learn and play presets", () => {
    server.use(...useGetPresetFavouritesHandlers)

    const { result } = renderHook(useGetPresetFavourites)

    expect(result.current.data).toStrictEqual({
      learn: [
        new LearnMode(
          1,
          "Example Learn Preset",
          "An example learn preset desc",
          "ffffff",
          "faApple",
          dataSettings,
          new LearnSettings(),
          "Hiragana & Katakana",
          undefined,
          false,
          1
        )
      ],
      play: [
        new PlayMode(
          1,
          "Example Play Preset",
          "An example play preset desc",
          "ffffff",
          "faApple",
          dataSettings,
          gameSettings,
          "Hiragana & Katakana",
          undefined,
          false,
          2
        )
      ]
    })
  })
})