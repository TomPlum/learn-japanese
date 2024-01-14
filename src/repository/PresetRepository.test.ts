import RestClient from "../rest/RestClient.ts"
import PresetRepository, {
  DataSettingsRequest,
  GameConfigRequest,
  LearnPresetRequest,
  LearnPresetResponse,
  PlayPresetRequest,
  PlayPresetResponse
} from "./PresetRepository.ts"
import { GameSettingsBuilder } from "types/session/settings/game/GameSettings.ts"
import { LifeSettingsBuilder } from "types/session/settings/game/LifeSettings.ts"
import { HintSettingsBuilder } from "types/session/settings/game/HintSettings.ts"
import { TimeSettingsBuilder } from "types/session/settings/game/TimeSettings.ts"
import { QuestionSettingsBuilder } from "types/session/settings/game/QuestionSettings.ts"
import LearnableField from "types/learn/LearnableField.ts"
import QuestionType from "types/game/QuestionType.ts"
import { KanaSettingsBuilder } from "types/session/settings/data/KanaSettings.ts"
import LearnMode from "types/session/LearnMode.ts"
import LearnSettings from "types/session/settings/LearnSettings.ts"
import PlayMode from "types/session/PlayMode.ts"
import Topic from "types/Topic.ts"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { SessionSettings } from "types/session/settings/SessionSettings.ts"

const mockDataSettingsConverter = vi.fn()
vi.mock("converter/DataSettingsConverter", () => ({
  default: function () {
    return { convert: mockDataSettingsConverter }
  }
}))

const mockGameSettingsConverter = vi.fn()
vi.mock("converter/GameSettingsConverter", () => ({
  default: function () {
    return { convert: mockGameSettingsConverter }
  }
}))

const mockPresetConverter = vi.fn()
vi.mock("converter/PresetConverter", () => ({
  default: function () {
    return { convertRequest: mockPresetConverter }
  }
}))

//Mock RestClient Methods
const mockPost = vi.fn()
const mockGet = vi.fn()
const mockDelete = vi.fn()
const mockPatch = vi.fn()

beforeEach(() => {
  RestClient.post = mockPost
  RestClient.get = mockGet
  RestClient.delete = mockDelete
  RestClient.patch = mockPatch
})

const learnPresetResponse: LearnPresetResponse = {
  id: 1,
  name: "Example Learn Preset",
  description: "An example learn preset desc",
  topic: "Hiragana & Katakana",
  icon: "faApple",
  colour: "ffffff",
  data: {
    quantity: 50,
    config: {
      hiragana: true,
      katakana: true,
      diagraphs: true,
      diacriticals: true,
      onlyDiagraphs: false,
      regular: true
    }
  }
}

const playPresetResponse: PlayPresetResponse = {
  id: 1,
  name: "Example Play Preset",
  description: "An example play preset desc",
  topic: "Hiragana & Katakana",
  icon: "faApple",
  colour: "ffffff",
  data: {
    quantity: 50,
    config: {
      hiragana: true,
      katakana: true,
      diagraphs: true,
      diacriticals: true,
      onlyDiagraphs: false,
      regular: true
    }
  },
  game: {
    hints: {
      enabled: true,
      quantity: 3,
      unlimited: false
    },
    lives: {
      enabled: true,
      quantity: 10
    },
    time: {
      timed: true,
      countdown: false,
      secondsPerQuestion: 0
    },
    question: {
      questionField: "Kana",
      answerField: "Romaji",
      quantity: 0,
      score: true,
      type: "Text",
      answerFilter: undefined,
      cards: 0
    }
  }
}

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

describe("Preset Repository", () => {
  const repository = new PresetRepository()

  describe("Get Default Presets", () => {
    it("Should call the rest client with the correct endpoint", () => {
      mockGet.mockResolvedValueOnce({})
      return repository.getDefaultPresets().then(() => {
        expect(mockGet).toHaveBeenLastCalledWith("/presets/default")
      })
    })

    it("Should return the default learn and play presets", () => {
      mockGet.mockResolvedValueOnce({ data: { learn: [learnPresetResponse], play: [playPresetResponse] } })
      mockDataSettingsConverter.mockReturnValue(dataSettings)
      mockGameSettingsConverter.mockReturnValueOnce(gameSettings)

      return repository.getDefaultPresets().then((response) => {
        expect(mockDataSettingsConverter).toHaveBeenCalledWith(Topic.KANA, learnPresetResponse.data)
        expect(mockDataSettingsConverter).toHaveBeenCalledWith(Topic.KANA, playPresetResponse.data)
        expect(mockGameSettingsConverter).toHaveBeenCalledWith(playPresetResponse.game)
        expect(response).toStrictEqual({
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

    it("Should return the API error if the call fails", () => {
      mockGet.mockRejectedValueOnce({ error: "Failed to retrieve presets." })
      return repository.getDefaultPresets().then((response) => {
        expect(response).toEqual({ learn: [], play: [], error: "Failed to retrieve presets." })
      })
    })
  })

  describe("Delete Favourite Preset", () => {
    it("Should call the rest client with the correct endpoint", () => {
      mockDelete.mockResolvedValueOnce({})
      return repository.deleteFavouritePreset(12).then(() => {
        expect(mockDelete).toHaveBeenLastCalledWith("/presets/favourites/delete?=12")
      })
    })

    it("Should return true if the API call succeeds", () => {
      mockDelete.mockResolvedValueOnce({})
      return repository.deleteFavouritePreset(12).then((response) => {
        expect(response.success).toBe(true)
      })
    })

    it("Should return false if the API call fails", () => {
      mockDelete.mockRejectedValueOnce({})
      return repository.deleteFavouritePreset(12).then((response) => {
        expect(response.success).toBe(false)
      })
    })

    it("Should return the error message if the API calls fails and has one in the response", () => {
      mockDelete.mockRejectedValueOnce({ error: "Failed to delete favourite." })
      return repository.deleteFavouritePreset(12).then((response) => {
        expect(response.error).toStrictEqual({ error: "Failed to delete favourite." })
      })
    })
  })

  describe("Update Favourite Presets", () => {
    it("Should call the rest client with the correct endpoint and payload", () => {
      mockPatch.mockResolvedValueOnce({})
      return repository.updateFavouritePresets([1, 2], [3]).then(() => {
        expect(mockPatch).toHaveBeenLastCalledWith("/presets/favourites/update", {
          add: [1, 2],
          remove: [3]
        })
      })
    })

    it("Should return true if the API call succeeds", () => {
      mockPatch.mockResolvedValueOnce({})
      return repository.updateFavouritePresets([1], []).then((response) => {
        expect(response.success).toBe(true)
      })
    })

    it("Should return false if the API call fails", () => {
      mockPatch.mockRejectedValueOnce({})
      return repository.updateFavouritePresets([1, 2, 3], [7]).then((response) => {
        expect(response.success).toBe(false)
      })
    })

    it("Should return the error message if the API calls fails and has one in the response", () => {
      mockPatch.mockRejectedValueOnce({ error: "Failed to update favourites." })
      return repository.updateFavouritePresets([5, 7], [1]).then((response) => {
        expect(response.error).toStrictEqual("Failed to update favourites.")
      })
    })

    it("Should return the whole response if the API calls fails but has no error field in the response", () => {
      mockPatch.mockRejectedValueOnce({ code: 500, reason: "A network error has occurred." })
      return repository.updateFavouritePresets([2, 4], [8]).then((response) => {
        expect(response.error).toStrictEqual({ code: 500, reason: "A network error has occurred." })
      })
    })
  })

  describe("Save Custom Play Preset", () => {
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

    beforeEach(() => {
      mockPresetConverter.mockReturnValueOnce(presetRequest)
    })

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

  describe("Save Custom Learn Preset", () => {
    const request = {
      name: "Hiragana",
      icon: "あ",
      colour: "#fdb40e",
      settings: SessionSettings.forLearning(new KanaSettingsBuilder().withHiragana().build(), new LearnSettings())
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

    const presetRequest: LearnPresetRequest = {
      name: "Hiragana",
      topic: "Hiragana & Katakana",
      icon: "FaHiragana",
      colour: "ffffff",
      data: dataSettingsRequest
    }

    beforeEach(() => {
      mockPresetConverter.mockReturnValueOnce(presetRequest)
    })

    it("Should call the rest client with the correct endpoint and request payload", () => {
      mockPost.mockResolvedValueOnce({})
      return repository.saveLearnPreset(request).then(() => {
        expect(mockPost).toHaveBeenLastCalledWith("/presets/custom/learn/save", presetRequest)
      })
    })

    it("Should return true if the API call succeeds", () => {
      mockPost.mockResolvedValueOnce({})
      return repository.saveLearnPreset(request).then((response) => {
        expect(response.success).toBe(true)
      })
    })

    it("Should return false if the API call fails", () => {
      mockPost.mockRejectedValueOnce({})
      return repository.saveLearnPreset(request).then((response) => {
        expect(response.success).toBe(false)
      })
    })

    it("Should return the error message if the API calls fails and has one in the response", () => {
      mockPost.mockRejectedValueOnce({ error: "Failed to save preset." })
      return repository.saveLearnPreset(request).then((response) => {
        expect(response.error).toStrictEqual("Failed to save preset.")
      })
    })
  })
})
