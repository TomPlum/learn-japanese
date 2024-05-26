import PresetConverter from "./PresetConverter.ts"
import { KanaSettingsBuilder } from "types/session/settings/data/KanaSettings.ts"
import { GameSettingsBuilder } from "types/session/settings/game/GameSettings.ts"
import LearnSettings from "types/session/settings/LearnSettings.ts"
import { GameSettingState, KanaDataSettingsState, SessionSettingsState } from "context/SessionSettingsContext"

const mockDataSettingsConverter = vi.fn()
const mockDeserialiseDataSettings = vi.fn()
vi.mock("converter/DataSettingsConverter", () => ({
  default: function () {
    return {
      convertRequest: mockDataSettingsConverter,
      deserialise: mockDeserialiseDataSettings
    }
  }
}))

const mockGameSettingsConverter = vi.fn()
const mockDeserialiseGameSettings = vi.fn()
vi.mock("converter/GameSettingsConverter", () => ({
  default: function () {
    return {
      convertRequest: mockGameSettingsConverter,
      deserialise: mockDeserialiseGameSettings
    }
  }
}))

describe("Preset Converter", () => {
  const converter = new PresetConverter()

  describe("Convert Session Settings", () => {
    const gameSettingsState: GameSettingState = {
      hints: {
        quantity: 8,
        enabled: true,
        unlimited: false
      },
      lives: {
        quantity: 12,
        enabled: true
      },
      time: {
        timed: true,
        countdown: false,
        secondsPerQuestion: 0
      },
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

    const dataSettingsState: KanaDataSettingsState = {
      quantity: 50,
      regular: true,
      hiragana: true,
      katakana: false,
      diagraphs: false,
      diacriticals: true,
      onlyDiagraphs: false,
      topic: "Hiragana & Katakana"
    }

    const playSessionSettings: SessionSettingsState = {
      isPreset: true,
      id: 1,
      name: "Test Play Settings",
      colour: "#ffffff",
      topic: "Hiragana & Katakana",
      icon: "FaApple",
      game: gameSettingsState,
      data: dataSettingsState
    }

    const learnSessionSettings: SessionSettingsState = {
      isPreset: true,
      id: 2,
      name: "Test Learn Settings",
      colour: "#ffffff",
      topic: "Hiragana & Katakana",
      icon: "FaApple",
      data: dataSettingsState
    }

    const gameSettings = new GameSettingsBuilder().build()
    const dataSettings = new KanaSettingsBuilder().build()

    beforeEach(() => {
      mockDeserialiseDataSettings.mockReturnValueOnce(dataSettings)
    })

    describe("Play Preset", () => {
      beforeEach(() => {
        mockDeserialiseGameSettings.mockReturnValueOnce(gameSettings)
      })

      it("Should convert the ID", () => {
        const target = converter.convertSessionSettings(playSessionSettings)
        expect(target.id).toStrictEqual(1)
      })

      it("Should convert the name", () => {
        const target = converter.convertSessionSettings(playSessionSettings)
        expect(target.displayName).toStrictEqual("Test Play Settings")
      })

      it("Should convert the colour", () => {
        const target = converter.convertSessionSettings(playSessionSettings)
        expect(target.colour).toStrictEqual("#ffffff")
      })

      it("Should convert the icon", () => {
        const target = converter.convertSessionSettings(playSessionSettings)
        expect(target.icon).toStrictEqual("FaApple")
      })

      it("Should convert the topic", () => {
        const target = converter.convertSessionSettings(playSessionSettings)
        expect(target.topicName).toStrictEqual("Hiragana & Katakana")
      })

      it("Should convert the game settings using the dedicated converter class", () => {
        const target = converter.convertSessionSettings(playSessionSettings)
        expect(mockDeserialiseGameSettings).toHaveBeenCalledWith(gameSettingsState)
        expect(target.modeSettings).toStrictEqual(gameSettings)
      })

      it("Should convert the data settings using the dedicated converter class", () => {
        const target = converter.convertSessionSettings(playSessionSettings)
        expect(mockDeserialiseDataSettings).toHaveBeenCalledWith(dataSettingsState)
        expect(target.dataSettings).toStrictEqual(dataSettings)
      })
    })

    describe("Learn Preset", () => {
      it("Should convert the ID", () => {
        const target = converter.convertSessionSettings(learnSessionSettings)
        expect(target.id).toStrictEqual(2)
      })

      it("Should convert the name", () => {
        const target = converter.convertSessionSettings(learnSessionSettings)
        expect(target.displayName).toStrictEqual("Test Learn Settings")
      })

      it("Should convert the colour", () => {
        const target = converter.convertSessionSettings(learnSessionSettings)
        expect(target.colour).toStrictEqual("#ffffff")
      })

      it("Should convert the icon", () => {
        const target = converter.convertSessionSettings(learnSessionSettings)
        expect(target.icon).toStrictEqual("FaApple")
      })

      it("Should convert the topic", () => {
        const target = converter.convertSessionSettings(learnSessionSettings)
        expect(target.topicName).toStrictEqual("Hiragana & Katakana")
      })

      it("Should set the learn settings to a new instance", () => {
        const target = converter.convertSessionSettings(learnSessionSettings)
        expect(target.modeSettings).toStrictEqual(new LearnSettings())
      })

      it("Should convert the data settings using the dedicated converter class", () => {
        const target = converter.convertSessionSettings(learnSessionSettings)
        expect(mockDeserialiseDataSettings).toHaveBeenCalledWith(dataSettingsState)
        expect(target.dataSettings).toStrictEqual(dataSettings)
      })
    })
  })
})
