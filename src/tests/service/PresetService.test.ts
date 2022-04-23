import PresetService, { LearnPlayPresets } from "../../service/PresetService";
import LearnMode from "../../domain/session/LearnMode";
import { KanaSettingsBuilder } from "../../domain/session/settings/data/KanaSettings";
import LearnSettings from "../../domain/session/settings/LearnSettings";
import PlayMode from "../../domain/session/PlayMode";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { GameSettingsBuilder } from "../../domain/session/settings/game/GameSettings";

const mockGetAllPresets = jest.fn();
const mockFavouritePresets = jest.fn();
const mockDeleteFavouritePreset = jest.fn();
jest.mock("../../repository/PresetRepository", () => {
    return function() {
        return {
            getAllPresets: mockGetAllPresets,
            getFavouritePresets: mockFavouritePresets,
            deleteFavouritePreset: mockDeleteFavouritePreset,
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
        it("Should call the delete preset favourite repository function", () => {
            mockDeleteFavouritePreset.mockResolvedValueOnce({ success: true });
            return service.removeFavouritePreset(playPreset).then(() => {
                expect(mockDeleteFavouritePreset).toHaveBeenLastCalledWith(2);
            });
        });

        it("Should return the success status from the repository", () => {
            mockDeleteFavouritePreset.mockResolvedValueOnce({ success: false, error: "Failed to delete." });
            return service.removeFavouritePreset(playPreset).then(response => {
                expect(response.success).toBe(false);
            });
        });

        it("Should return the error message from the repository", () => {
            mockDeleteFavouritePreset.mockResolvedValueOnce({ success: false, error: "Failed to delete." });
            return service.removeFavouritePreset(playPreset).then(response => {
                expect(response.error).toBe("Failed to delete.");
            });
        });
    });
});
