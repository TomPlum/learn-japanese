import PresetConverter from "../../converter/PresetConverter";
import PlayMode from "../../domain/session/PlayMode";
import { KanaSettingsBuilder } from "../../domain/session/settings/data/KanaSettings";
import { GameSettingsBuilder } from "../../domain/session/settings/game/GameSettings";
import { DataSettingsRequest, GameConfigRequest } from "../../repository/PresetRepository";
import LearnMode from "../../domain/session/LearnMode";
import LearnSettings from "../../domain/session/settings/LearnSettings";
import SessionMode from "../../domain/session/SessionMode";
import { SessionSettingsState } from "../../slices/SessionSettingsSlice";
import { GameSettingState } from "../../slices/GameSettingsSlice";
import { DataSettingsState, KanaDataSettingsState } from "../../slices/DataSettingsSlice";

const mockDataSettingsConverter = jest.fn();
const mockDeserialiseDataSettings = jest.fn();
jest.mock("../../converter/DataSettingsConverter", () => {
    return function() { return {
        convertRequest: mockDataSettingsConverter,
        deserialise: mockDeserialiseDataSettings
    }};
});

const mockGameSettingsConverter = jest.fn();
const mockDeserialiseGameSettings = jest.fn();
jest.mock("../../converter/GameSettingsConverter", () => {
   return function() { return {
       convertRequest: mockGameSettingsConverter,
       deserialise: mockDeserialiseGameSettings
   }};
});

const playPreset = new PlayMode(1, "Test Mode", "#fdb40e", "FaGraduationCap", new KanaSettingsBuilder().build(), new GameSettingsBuilder().build(), "Topic");
const learnPreset = new LearnMode(1, "Test Learn", "#fdb40e", "あ", new KanaSettingsBuilder().withHiragana().build(), new LearnSettings(), "Topic");

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
                super(1, "Test", "fff", "faApple", new KanaSettingsBuilder().build(), new GameSettingsBuilder().build(), "Topic");
            }

            getUniqueID(): string {
                return "test";
            }
        }
    });

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
                answerFilter: "0"
            }
        };

        const dataSettingsState: KanaDataSettingsState = {
            quantity: 50,
            regular: true,
            hiragana: true,
            katakana: false,
            diagraphs: false,
            diacriticals: true,
            onlyDiagraphs: false,
            topic: "Hiragana & Katakana"
        };

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

        const gameSettings = new GameSettingsBuilder().build();
        const dataSettings = new KanaSettingsBuilder().build();

        beforeEach(() => {
            mockDeserialiseDataSettings.mockReturnValueOnce(dataSettings);
        });

        describe("Play Preset", () => {

            beforeEach(() => {
                mockDeserialiseGameSettings.mockReturnValueOnce(gameSettings);
            });

            it("Should convert the ID", () => {
                const target = converter.convertSessionSettings(playSessionSettings);
                expect(target.id).toStrictEqual(1);
            });

            it("Should convert the name", () => {
                const target = converter.convertSessionSettings(playSessionSettings);
                expect(target.displayName).toStrictEqual("Test Play Settings");
            });

            it("Should convert the colour", () => {
                const target = converter.convertSessionSettings(playSessionSettings);
                expect(target.colour).toStrictEqual("#ffffff");
            });

            it("Should convert the icon", () => {
                const target = converter.convertSessionSettings(playSessionSettings);
                expect(target.icon).toStrictEqual("FaApple");
            });

            it("Should convert the topic", () => {
                const target = converter.convertSessionSettings(playSessionSettings);
                expect(target.topicName).toStrictEqual("Hiragana & Katakana");
            });

            it("Should convert the game settings using the dedicated converter class", () => {
                const target = converter.convertSessionSettings(playSessionSettings);
                expect(mockDeserialiseGameSettings).toHaveBeenCalledWith(gameSettingsState);
                expect(target.modeSettings).toStrictEqual(gameSettings);
            });

            it("Should convert the data settings using the dedicated converter class", () => {
                const target = converter.convertSessionSettings(playSessionSettings);
                expect(mockDeserialiseDataSettings).toHaveBeenCalledWith(dataSettingsState);
                expect(target.dataSettings).toStrictEqual(dataSettings);
            });
        });

        describe("Learn Preset", () => {
            it("Should convert the ID", () => {
                const target = converter.convertSessionSettings(learnSessionSettings);
                expect(target.id).toStrictEqual(2);
            });

            it("Should convert the name", () => {
                const target = converter.convertSessionSettings(learnSessionSettings);
                expect(target.displayName).toStrictEqual("Test Learn Settings");
            });

            it("Should convert the colour", () => {
                const target = converter.convertSessionSettings(learnSessionSettings);
                expect(target.colour).toStrictEqual("#ffffff");
            });

            it("Should convert the icon", () => {
                const target = converter.convertSessionSettings(learnSessionSettings);
                expect(target.icon).toStrictEqual("FaApple");
            });

            it("Should convert the topic", () => {
                const target = converter.convertSessionSettings(learnSessionSettings);
                expect(target.topicName).toStrictEqual("Hiragana & Katakana");
            });

            it("Should set the learn settings to a new instance", () => {
                const target = converter.convertSessionSettings(learnSessionSettings);
                expect(target.modeSettings).toStrictEqual(new LearnSettings());
            });

            it("Should convert the data settings using the dedicated converter class", () => {
                const target = converter.convertSessionSettings(learnSessionSettings);
                expect(mockDeserialiseDataSettings).toHaveBeenCalledWith(dataSettingsState);
                expect(target.dataSettings).toStrictEqual(dataSettings);
            });
        });
    });
});
