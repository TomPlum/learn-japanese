import { renderHook, waitFor } from "@testing-library/react";
import { server } from "__test-utils__/msw.ts";
import useGetPresets from "api/hooks/useGetPresets/useGetPresets.ts";
import { useGetPresetsHandlers } from "api/hooks/useGetPresets/useGetPresets.handlers.ts";
import { wrapper } from "__test-utils__";
import LearnMode from "domain/session/LearnMode.ts";
import LearnSettings from "domain/session/settings/LearnSettings.ts";
import PlayMode from "domain/session/PlayMode.ts";
import { GameSettingsBuilder } from "domain/session/settings/game/GameSettings.ts";
import { LifeSettingsBuilder } from "domain/session/settings/game/LifeSettings.ts";
import { HintSettingsBuilder } from "domain/session/settings/game/HintSettings.ts";
import { TimeSettingsBuilder } from "domain/session/settings/game/TimeSettings.ts";
import { QuestionSettingsBuilder } from "domain/session/settings/game/QuestionSettings.ts";
import LearnableField from "domain/learn/LearnableField.ts";
import QuestionType from "domain/game/QuestionType.ts";
import { KanaSettingsBuilder } from "domain/session/settings/data/KanaSettings.ts";

describe('Get Presets API Hook', () => {
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

  it("Should return the learn and play presets", async () => {
    server.use(...useGetPresetsHandlers)
    const { result } = renderHook(useGetPresets, { wrapper })
    await waitFor(() => {
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
            false
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
            false
          )
        ]
      })
    })
  })
})