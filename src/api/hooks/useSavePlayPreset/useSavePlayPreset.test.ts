import { renderHook, waitFor } from "@testing-library/react";
import { server } from "__test-utils__/msw.ts";
import useGetPresets from "api/hooks/useGetPresets/useGetPresets.ts";
import { useGetPresetsHandlers } from "api/hooks/useGetPresets/useGetPresets.handlers.ts";
import { wrapper } from "__test-utils__";
import LearnMode from "types/session/LearnMode.ts";
import LearnSettings from "types/session/settings/LearnSettings.ts";
import PlayMode from "types/session/PlayMode.ts";
import { GameSettingsBuilder } from "types/session/settings/game/GameSettings.ts";
import { LifeSettingsBuilder } from "types/session/settings/game/LifeSettings.ts";
import { HintSettingsBuilder } from "types/session/settings/game/HintSettings.ts";
import { TimeSettingsBuilder } from "types/session/settings/game/TimeSettings.ts";
import { QuestionSettingsBuilder } from "types/session/settings/game/QuestionSettings.ts";
import LearnableField from "types/learn/LearnableField.ts";
import QuestionType from "types/game/QuestionType.ts";
import { KanaSettingsBuilder } from "types/session/settings/data/KanaSettings.ts";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { SessionSettings } from "types/session/settings/SessionSettings.ts";
import { DataSettingsRequest, GameConfigRequest, PlayPresetRequest } from "repository/PresetRepository.ts";

describe('Save Custom Play Preset API Hook', () => {
  const request = {
    name: "Test Mode",
    icon: faGraduationCap,
    colour: "#fdb40e",
    settings: SessionSettings.forGame(new KanaSettingsBuilder().build(), new GameSettingsBuilder().build())
  }

  const gameSettingsRequest: GameConfigRequest = {
    hints: { quantity: 8, enabled: true, unlimited: false },
    lives: { quantity: 12, enabled: true },
    time: { timed: true, countdown: false, secondsPerQuestion: 0 },
    question: {
      cards: 4,
      score: true,
      type: "Multiple Choice",
      quantity: 150,
      answerField: "Rōmaji",
      questionField: "Kana",
      answerFilter: 0
    }
  }

  const dataSettingsRequest: DataSettingsRequest = {
    quantity: 50,
    config: {
      regular: true,
      hiragana: true,
      katakana: false,
      diagraphs: false,
      diacriticals: true,
      onlyDiagraphs: false
    }
  }

  const presetRequest: PlayPresetRequest = {
    name: "Example Preset",
    topic: "Hiragana & Katakana",
    icon: "FaHiragana",
    colour: "ffffff",
    data: dataSettingsRequest,
    game: gameSettingsRequest
  }

  it("Should call the rest client with the correct endpoint and request payload", () => {
    mockPost.mockResolvedValueOnce({})
    return repository.savePlayPreset(request).then(() => {
      expect(mockPost).toHaveBeenLastCalledWith("/presets/custom/play/save", presetRequest)
    })
  })

  it("Should return true if the API call succeeds", () => {
    mockPost.mockResolvedValueOnce({})
    return repository.savePlayPreset(request).then((response) => {
      expect(response.success).toBe(true)
    })
  })

  it("Should return false if the API call fails", () => {
    mockPost.mockRejectedValueOnce({})
    return repository.savePlayPreset(request).then((response) => {
      expect(response.success).toBe(false)
    })
  })

  it("Should return the error message if the API calls fails and has one in the response", () => {
    mockPost.mockRejectedValueOnce({ error: "Failed to save preset." })
    return repository.savePlayPreset(request).then((response) => {
      expect(response.error).toStrictEqual("Failed to save preset.")
    })
  })
})