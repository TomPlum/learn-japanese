import PresetConverter from "../../converter/PresetConverter";
import PlayMode from "../../domain/session/PlayMode";
import { KanaSettingsBuilder } from "../../domain/session/settings/data/KanaSettings";
import { GameSettingsBuilder } from "../../domain/session/settings/game/GameSettings";
import { DataSettingsRequest, GameConfigRequest } from "../../repository/PresetRepository";
import LearnMode from "../../domain/session/LearnMode";
import LearnSettings from "../../domain/session/settings/LearnSettings";
import SessionMode from "../../domain/session/SessionMode";

const mockDataSettingsConverter = jest.fn();
jest.mock("../../converter/DataSettingsConverter", () => {
    return function() { return { convertRequest: mockDataSettingsConverter } };
});

const mockGameSettingsConverter = jest.fn();
jest.mock("../../converter/GameSettingsConverter", () => {
   return function() { return { convertRequest: mockGameSettingsConverter } };
});

const playPreset = new PlayMode(1, "Test Mode", "#fdb40e", "FaGraduationCap", new KanaSettingsBuilder().build(), new GameSettingsBuilder().build());
const learnPreset = new LearnMode(1, "Test Learn", "#fdb40e", "あ", new KanaSettingsBuilder().withHiragana().build(), new LearnSettings());

const gameSettingsRequest: GameConfigRequest = {
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
};

const dataSettingsRequest: DataSettingsRequest = {
    quantity: 50,
    config: {
        regular: true,
        hiragana: true,
        katakana: false,
        diagraphs: false,
        diacriticals: true,
        onlyDiagraphs: false,
    }
};

describe("Preset Converter", () => {
    const converter = new PresetConverter();

    describe("Convert API Request", () => {
        it("Should convert the preset when it is of play type", () => {
            mockGameSettingsConverter.mockReturnValueOnce(gameSettingsRequest);
            mockDataSettingsConverter.mockReturnValueOnce(dataSettingsRequest);

            const target = converter.convertRequest(playPreset);

            expect(mockDataSettingsConverter).toHaveBeenLastCalledWith(playPreset.dataSettings);
            expect(mockGameSettingsConverter).toHaveBeenLastCalledWith(playPreset.modeSettings);
            expect(target).toStrictEqual({
                name: "Test Mode",
                icon: "FaGraduationCap",
                colour: "fdb40e",
                topic: "Hiragana & Katakana",
                data: dataSettingsRequest,
                game: gameSettingsRequest
            });
        });

        it("Should convert the preset when it is of learn type", () => {
            mockDataSettingsConverter.mockReturnValueOnce(dataSettingsRequest);

            const target = converter.convertRequest(learnPreset);

            expect(mockDataSettingsConverter).toHaveBeenLastCalledWith(learnPreset.dataSettings);
            expect(mockGameSettingsConverter).not.toHaveBeenCalled();
            expect(target).toStrictEqual({
                name: "Test Learn",
                icon: "あ",
                colour: "fdb40e",
                topic: "Hiragana & Katakana",
                data: dataSettingsRequest
            });
        });

        it("Should throw an exception if the preset type is unknown", () => {
            const expectedErrorMessage = "Cannot convert unknown preset type [UnknownPresetType]";
            const convertUnknownPresetType = () => converter.convertRequest(new UnknownPresetType());
            expect(convertUnknownPresetType).toThrow(expectedErrorMessage);
        });

        class UnknownPresetType extends SessionMode {
            constructor() {
                super(1, "Test", "fff", "faApple", new KanaSettingsBuilder().build(), new GameSettingsBuilder().build());
            }

            getUniqueID(): string {
                return "test";
            }
        }
    });
});
