import RestClient from "../../rest/RestClient";
import PresetRepository, { DataSettingsRequest, FavouriteLearnPresetResponse, FavouritePlayPresetResponse, GameConfigRequest, LearnPresetRequest, LearnPresetResponse, PlayPresetRequest, PlayPresetResponse } from "../../repository/PresetRepository";
import { GameSettingsBuilder } from "../../domain/session/settings/game/GameSettings";
import { LifeSettingsBuilder } from "../../domain/session/settings/game/LifeSettings";
import { HintSettingsBuilder } from "../../domain/session/settings/game/HintSettings";
import { TimeSettingsBuilder } from "../../domain/session/settings/game/TimeSettings";
import { QuestionSettingsBuilder } from "../../domain/session/settings/game/QuestionSettings";
import LearnableField from "../../domain/learn/LearnableField";
import QuestionType from "../../domain/game/QuestionType";
import { KanaSettingsBuilder } from "../../domain/session/settings/data/KanaSettings";
import LearnMode from "../../domain/session/LearnMode";
import LearnSettings from "../../domain/session/settings/LearnSettings";
import PlayMode from "../../domain/session/PlayMode";
import Topic from "../../domain/Topic";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const mockDataSettingsConverter = jest.fn();
jest.mock("../../converter/DataSettingsConverter", () => function() { return { convert: mockDataSettingsConverter } });

const mockGameSettingsConverter = jest.fn();
jest.mock("../../converter/GameSettingsConverter", () => function() { return { convert: mockGameSettingsConverter } });

const mockPresetConverter = jest.fn();
jest.mock("../../converter/PresetConverter", () => {
    return function() { return { convertRequest: mockPresetConverter } };
});

//Mock RestClient Methods
const mockPost = jest.fn();
const mockGet = jest.fn();
const mockDelete = jest.fn();
const mockPatch = jest.fn();

beforeEach(() => {
    RestClient.post = mockPost;
    RestClient.get = mockGet;
    RestClient.delete = mockDelete;
    RestClient.patch = mockPatch;
});

const learnPresetResponse: LearnPresetResponse = {
    id: 1,
    name: "Example Learn Preset",
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
    .withLifeSettings(
        new LifeSettingsBuilder()
            .withQuantity(12)
            .isEnabled(true)
            .build()
    )
    .withHintSettings(
        new HintSettingsBuilder()
            .withQuantity(8)
            .isEnabled(true)
            .areUnlimited(false)
            .build()
    )
    .withTimeSettings(
        new TimeSettingsBuilder()
            .isTimed(true)
            .isCountDown(false)
            .withSecondsPerQuestion(0)
            .build()
    )
    .withQuestionSettings(
        new QuestionSettingsBuilder()
            .withFields(LearnableField.KANA, LearnableField.ROMAJI)
            .withQuantity(150)
            .withType(QuestionType.CHOICE)
            .withCardQuantity(4)
            .withScoreTracking(true)
            .build()
    )
    .build();

const dataSettings = new KanaSettingsBuilder()
    .withHiragana(true)
    .withKatakana(false)
    .withDiagraphs(false)
    .withDiacriticals(true)
    .withOnlyDiagraphs(false)
    .withQuantity(50)
    .build();

describe("Preset Repository", () => {
    const repository = new PresetRepository();

    describe("Get All Presets", () => {
        it("Should call the rest client with the correct endpoint", () => {
            mockGet.mockResolvedValueOnce({ });
            return repository.getAllPresets().then(() => {
                expect(mockGet).toHaveBeenLastCalledWith("/presets/all");
            });
        });

        it("Should return the learn and play presets", () => {
            mockGet.mockResolvedValueOnce({ data: { learn: [learnPresetResponse], play: [playPresetResponse ]} });
            mockDataSettingsConverter.mockReturnValue(dataSettings);
            mockGameSettingsConverter.mockReturnValueOnce(gameSettings);

            return repository.getAllPresets().then(response => {
                expect(mockDataSettingsConverter).toHaveBeenCalledWith(Topic.KANA, learnPresetResponse.data);
                expect(mockDataSettingsConverter).toHaveBeenCalledWith(Topic.KANA, playPresetResponse.data);
                expect(mockGameSettingsConverter).toHaveBeenCalledWith(playPresetResponse.game);
                expect(response).toStrictEqual({
                    learn: [new LearnMode(1, "Example Learn Preset", "ffffff", "faApple", dataSettings, new LearnSettings(), undefined, false)],
                    play: [new PlayMode(1, "Example Play Preset", "ffffff", "faApple", dataSettings, gameSettings, undefined, false)]
                });
            });
        });

        it("Should return the API error if the call fails", () => {
            mockGet.mockRejectedValueOnce({ error: "Failed to retrieve presets." });
            return repository.getAllPresets().then(response => {
                expect(response).toEqual({ learn: [], play: [], error: "Failed to retrieve presets." });
            });
        });
    });

    describe("Get Favourite Presets", () => {

        const learnResponse: FavouriteLearnPresetResponse = {
            id: 1,
            preset: learnPresetResponse
        }

        const playResponse: FavouritePlayPresetResponse = {
            id: 2,
            preset: playPresetResponse
        }

        it("Should call the rest client with the correct endpoint", () => {
            mockGet.mockResolvedValueOnce({ });
            return repository.getFavouritePresets().then(() => {
                expect(mockGet).toHaveBeenLastCalledWith("/presets/favourites");
            });
        });

        it("Should return the learn and play presets", () => {
            mockGet.mockResolvedValueOnce({ data: { learn: [learnResponse], play: [playResponse]} });
            mockDataSettingsConverter.mockReturnValue(dataSettings);
            mockGameSettingsConverter.mockReturnValueOnce(gameSettings);

            return repository.getFavouritePresets().then(response => {
                expect(mockDataSettingsConverter).toHaveBeenCalledWith(Topic.KANA, learnResponse.preset.data);
                expect(mockDataSettingsConverter).toHaveBeenCalledWith(Topic.KANA, playResponse.preset.data);
                expect(mockGameSettingsConverter).toHaveBeenCalledWith(playResponse.preset.game);
                expect(response).toStrictEqual({
                    learn: [new LearnMode(1, "Example Learn Preset", "ffffff", "faApple", dataSettings, new LearnSettings(), undefined, false, 1)],
                    play: [new PlayMode(1, "Example Play Preset", "ffffff", "faApple", dataSettings, gameSettings, undefined, false, 2)]
                });
            });
        });

        it("Should return the API error if the call fails", () => {
            mockGet.mockRejectedValueOnce({ error: "Failed to retrieve favourite presets." });
            return repository.getFavouritePresets().then(response => {
                expect(response).toEqual({ learn: [], play: [], error: "Failed to retrieve favourite presets." });
            });
        });

        it("Should return the whole response if the API call fails but has no error field", () => {
            mockGet.mockRejectedValueOnce("Failed to retrieve favourite presets.");
            return repository.getFavouritePresets().then(response => {
                expect(response.error).toStrictEqual("Failed to retrieve favourite presets.");
            });
        });
    });

    describe("Delete Favourite Preset", () => {
        it("Should call the rest client with the correct endpoint", () => {
            mockDelete.mockResolvedValueOnce({ });
            return repository.deleteFavouritePreset(12).then(() => {
                expect(mockDelete).toHaveBeenLastCalledWith("/presets/favourites/delete?=12");
            });
        });

        it("Should return true if the API call succeeds", () => {
            mockDelete.mockResolvedValueOnce({ });
            return repository.deleteFavouritePreset(12).then(response => {
                expect(response.success).toBe(true);
            });
        });

        it("Should return false if the API call fails", () => {
            mockDelete.mockRejectedValueOnce({ });
            return repository.deleteFavouritePreset(12).then(response => {
                expect(response.success).toBe(false);
            });
        });

        it("Should return the error message if the API calls fails and has one in the response", () => {
            mockDelete.mockRejectedValueOnce({ error: "Failed to delete favourite." });
            return repository.deleteFavouritePreset(12).then(response => {
                expect(response.error).toStrictEqual({ error: "Failed to delete favourite." });
            });
        });
    });

    describe("Update Favourite Presets", () => {
        it("Should call the rest client with the correct endpoint and payload", () => {
            mockPatch.mockResolvedValueOnce({ });
            return repository.updateFavouritePresets([1, 2], [3]).then(() => {
                expect(mockPatch).toHaveBeenLastCalledWith("/presets/favourites/update", {
                    add: [1, 2],
                    remove: [3]
                });
            });
        });

        it("Should return true if the API call succeeds", () => {
            mockPatch.mockResolvedValueOnce({ });
            return repository.updateFavouritePresets([1], []).then(response => {
                expect(response.success).toBe(true);
            });
        });

        it("Should return false if the API call fails", () => {
            mockPatch.mockRejectedValueOnce({ });
            return repository.updateFavouritePresets([1, 2, 3], [7]).then(response => {
                expect(response.success).toBe(false);
            });
        });

        it("Should return the error message if the API calls fails and has one in the response", () => {
            mockPatch.mockRejectedValueOnce({ error: "Failed to update favourites." });
            return repository.updateFavouritePresets([5, 7], [1]).then(response => {
                expect(response.error).toStrictEqual("Failed to update favourites.");
            });
        });

        it("Should return the whole response if the API calls fails but has no error field in the response", () => {
            mockPatch.mockRejectedValueOnce({ code: 500, reason: "A network error has occurred."});
            return repository.updateFavouritePresets([2, 4], [8]).then(response => {
                expect(response.error).toStrictEqual({ code: 500, reason: "A network error has occurred."});
            });
        });
    });

    describe("Save Custom Play Preset", () => {

        const preset = new PlayMode(1, "Test Mode", "#fdb40e", faGraduationCap, new KanaSettingsBuilder().build(), new GameSettingsBuilder().build());

        const gameSettingsRequest: GameConfigRequest = {
            hints: { quantity: 8, enabled: true, unlimited: false },
            lives: { quantity: 12, enabled: true },
            time: { timed: true, countdown: false, secondsPerQuestion: 0 },
            question: { cards: 4, score: true, type: "Multiple Choice", quantity: 150, answerField: "Rōmaji", questionField: "Kana", answerFilter: 0 }
        }

        const dataSettingsRequest: DataSettingsRequest = {
            quantity: 50,
            config: { regular: true, hiragana: true, katakana: false, diagraphs: false, diacriticals: true, onlyDiagraphs: false }
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
            mockPresetConverter.mockReturnValueOnce(presetRequest);
        });

        it("Should call the rest client with the correct endpoint and request payload", () => {
            mockPost.mockResolvedValueOnce({ });
            return repository.savePlayPreset(preset).then(() => {
                expect(mockPost).toHaveBeenLastCalledWith("/presets/custom/play/save", presetRequest);
            });
        });

        it("Should return true if the API call succeeds", () => {
            mockPost.mockResolvedValueOnce({ });
            return repository.savePlayPreset(preset).then(response => {
                expect(response.success).toBe(true);
            });
        });

        it("Should return false if the API call fails", () => {
            mockPost.mockRejectedValueOnce({ });
            return repository.savePlayPreset(preset).then(response => {
                expect(response.success).toBe(false);
            });
        });

        it("Should return the error message if the API calls fails and has one in the response", () => {
            mockPost.mockRejectedValueOnce({ error: "Failed to save preset." });
            return repository.savePlayPreset(preset).then(response => {
                expect(response.error).toStrictEqual("Failed to save preset.");
            });
        });
    });

    describe("Save Custom Learn Preset", () => {

        const preset = new LearnMode(1, "Hiragana", "#fdb40e", "あ", new KanaSettingsBuilder().withHiragana().build(), new LearnSettings());

        const dataSettingsRequest: DataSettingsRequest = {
            quantity: 50,
            config: { regular: true, hiragana: true, katakana: false, diagraphs: false, diacriticals: true, onlyDiagraphs: false }
        }

        const presetRequest: LearnPresetRequest = {
            name: "Hiragana",
            topic: "Hiragana & Katakana",
            icon: "FaHiragana",
            colour: "ffffff",
            data: dataSettingsRequest
        }

        beforeEach(() => {
            mockPresetConverter.mockReturnValueOnce(presetRequest);
        });

        it("Should call the rest client with the correct endpoint and request payload", () => {
            mockPost.mockResolvedValueOnce({ });
            return repository.saveLearnPreset(preset).then(() => {
                expect(mockPost).toHaveBeenLastCalledWith("/presets/custom/learn/save", presetRequest);
            });
        });

        it("Should return true if the API call succeeds", () => {
            mockPost.mockResolvedValueOnce({ });
            return repository.saveLearnPreset(preset).then(response => {
                expect(response.success).toBe(true);
            });
        });

        it("Should return false if the API call fails", () => {
            mockPost.mockRejectedValueOnce({ });
            return repository.saveLearnPreset(preset).then(response => {
                expect(response.success).toBe(false);
            });
        });

        it("Should return the error message if the API calls fails and has one in the response", () => {
            mockPost.mockRejectedValueOnce({ error: "Failed to save preset." });
            return repository.saveLearnPreset(preset).then(response => {
                expect(response.error).toStrictEqual("Failed to save preset.");
            });
        });
    });
});
