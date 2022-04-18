import PresetService, { LearnPlayPresets } from "../../service/PresetService";
import LearnMode from "../../domain/session/LearnMode";
import { KanaSettingsBuilder } from "../../domain/session/settings/data/KanaSettings";
import LearnSettings from "../../domain/session/settings/LearnSettings";
import PlayMode from "../../domain/session/PlayMode";
import { faGraduationCap, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { GameSettingsBuilder } from "../../domain/session/settings/game/GameSettings";
import SessionMode from "../../domain/session/SessionMode";
import DataSettings from "../../domain/session/settings/data/DataSettings";
import ModeSettings from "../../domain/session/settings/ModeSettings";

const mockGetAllPresets = jest.fn();
const mockFavouritePresets = jest.fn();
const mockDeleteFavouritePlayPreset = jest.fn();
const mockDeleteFavouriteLearnPreset = jest.fn();
jest.mock("../../repository/PresetRepository", () => {
    return function() {
        return {
            getAllPresets: mockGetAllPresets,
            getFavouritePresets: mockFavouritePresets,
            deleteFavouritePlayPreset: mockDeleteFavouritePlayPreset,
            deleteFavouriteLearnPreset: mockDeleteFavouriteLearnPreset
        };
    };
});

const learnPreset = new LearnMode(1, "Hiragana", "#fdb40e", "あ", new KanaSettingsBuilder().withHiragana().build(), new LearnSettings());
const playPreset = new PlayMode(2, "Test Mode", "#fdb40e", faGraduationCap, new KanaSettingsBuilder().build(), new GameSettingsBuilder().build());

describe("Preset Service", () => {
    const service = new PresetService();

    describe("Get All Presets", () => {
        it("Should return the presets from the repository when the call succeeds", () => {
            mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] });
            return service.getAllPresets().then((response: LearnPlayPresets) => {
                expect(response).toStrictEqual({ learn: [learnPreset], play: [playPreset] });
            });
        });

        it("Should return empty preset array if the repository call fails with an error message", () => {
            mockGetAllPresets.mockRejectedValueOnce({ error: "Failed to retrieve presets." });
            return service.getAllPresets().then((response: LearnPlayPresets) => {
                expect(response).toStrictEqual({ learn: [], play: [], error: "Failed to retrieve presets." });
            });
        });
    });

    describe("Get Favourite Presets", () => {
        it("Should return the presets from the repository when the call succeeds", () => {
            mockFavouritePresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] });
            return service.getFavouritePresets().then((response: LearnPlayPresets) => {
                expect(response).toStrictEqual({ learn: [learnPreset], play: [playPreset], error: undefined });
            });
        });

        it("Should return empty preset array if the repository call fails with an error message", () => {
            mockFavouritePresets.mockRejectedValueOnce({ error: "Failed to retrieve favourite presets." });
            return service.getFavouritePresets().then((response: LearnPlayPresets) => {
                expect(response).toStrictEqual({ learn: [], play: [], error: "Failed to retrieve favourite presets." });
            });
        });

        it("Should return the whole response body in the error field if an error isn't preset in the response", () => {
            mockFavouritePresets.mockRejectedValueOnce("Failed to retrieve favourite presets.");
            return service.getFavouritePresets().then((response: LearnPlayPresets) => {
                expect(response.error).toStrictEqual("Failed to retrieve favourite presets.");
            });
        });
    });

    describe("Remove Favourite Preset", () => {
        it("Should call the delete play preset favourite repository function when the preset is of play type", () => {
            mockDeleteFavouritePlayPreset.mockResolvedValueOnce({ success: true });
            return service.removeFavouritePreset(playPreset).then(() => {
                expect(mockDeleteFavouritePlayPreset).toHaveBeenLastCalledWith(2);
                expect(mockDeleteFavouriteLearnPreset).not.toHaveBeenCalled();
            });
        });

        it("Should return the success status from the repository for a play preset", () => {
            mockDeleteFavouritePlayPreset.mockResolvedValueOnce({ success: false, error: "Failed to delete." });
            return service.removeFavouritePreset(playPreset).then(response => {
                expect(response.success).toBe(false);
            });
        });

        it("Should return the error message from the repository for a play preset", () => {
            mockDeleteFavouritePlayPreset.mockResolvedValueOnce({ success: false, error: "Failed to delete." });
            return service.removeFavouritePreset(playPreset).then(response => {
                expect(response.error).toBe("Failed to delete.");
            });
        });

        it("Should call the delete learn preset favourite repository function when the preset is of learn type", () => {
            mockDeleteFavouriteLearnPreset.mockResolvedValueOnce({ success: true });
            return service.removeFavouritePreset(learnPreset).then(() => {
                expect(mockDeleteFavouriteLearnPreset).toHaveBeenLastCalledWith(1);
                expect(mockDeleteFavouritePlayPreset).not.toHaveBeenCalled();
            });
        });

        it("Should return the success status from the repository for a learn preset", () => {
            mockDeleteFavouriteLearnPreset.mockResolvedValueOnce({ success: false, error: "Failed to delete." });
            return service.removeFavouritePreset(learnPreset).then(response => {
                expect(response.success).toBe(false);
            });
        });

        it("Should return the error message from the repository for a learn preset", () => {
            mockDeleteFavouriteLearnPreset.mockResolvedValueOnce({ success: false, error: "Failed to delete." });
            return service.removeFavouritePreset(learnPreset).then(response => {
                expect(response.error).toBe("Failed to delete.");
            });
        });

        it("Should return a false success status if an unknown preset type is passed in", () => {
            return service.removeFavouritePreset(new UnknownPresetType()).then(response => {
                expect(response.success).toBe(false);
            });
        });

        it("Should return a generic error message if an unknown preset type is passed in", () => {
            return service.removeFavouritePreset(new UnknownPresetType()).then(response => {
                expect(response.error).toBe("Failed to remove favourite preset.");
            });
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
