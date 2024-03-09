import LearnMode from "types/session/LearnMode.ts";
import LearnSettings from "types/session/settings/LearnSettings.ts";
import PlayMode from "types/session/PlayMode.ts";
import { renderHook, waitFor } from "@testing-library/react";
import useGetPresetFavourites from "api/hooks/presets/useGetPresetFavourites/useGetPresetFavourites.ts";
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
} from "api/hooks/presets/useGetPresetFavourites";
import { wrapper } from "__test-utils__";

describe('Get Preset Favourites API Hook', () => {
  const gameSettings = new GameSettingsBuilder()
    .withLifeSettings(new LifeSettingsBuilder().withQuantity(10).isEnabled(true).build())
    .withHintSettings(new HintSettingsBuilder().withQuantity(3).isEnabled(true).areUnlimited(false).build())
    .withTimeSettings(new TimeSettingsBuilder().isTimed(true).isCountDown(false).withSecondsPerQuestion(0).build())
    .withQuestionSettings(
      new QuestionSettingsBuilder()
        .withFields(LearnableField.KANA, LearnableField.ROMAJI)
        .withQuantity(0)
        .withType(QuestionType.TEXT)
        .withCardQuantity(0)
        .withScoreTracking(true)
        .build()
    )
    .build()

  const dataSettings = new KanaSettingsBuilder()
    .withHiragana(true)
    .withKatakana(true)
    .withDiagraphs(true)
    .withDiacriticals(true)
    .withOnlyDiagraphs(false)
    .withQuantity(50)
    .build()

  it("Should return the learn and play presets", async () => {
    server.use(...useGetPresetFavouritesHandlers)

    const { result } = renderHook(useGetPresetFavourites, { wrapper })

    await waitFor(() => {
      expect(result.current.data).toStrictEqual(
        [
          new LearnMode(
            2,
            "Test Learn",
            "An example learn preset desc",
            "ffffff",
            "faApple",
            dataSettings,
            new LearnSettings(),
            "Hiragana & Katakana",
            undefined,
            false,
            2
          ),
          new PlayMode(
            1,
            "Test Play",
            "An example play preset desc",
            "ffffff",
            "faApple",
            dataSettings,
            gameSettings,
            "Hiragana & Katakana",
            undefined,
            false,
            1
          )
        ]
      )
    })
  })
})