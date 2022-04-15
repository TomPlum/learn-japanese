import PresetService, { LearnPlayPresets } from "../../service/PresetService";
import LearnMode from "../../domain/session/LearnMode";
import { KanaSettingsBuilder } from "../../domain/session/settings/data/KanaSettings";
import LearnSettings from "../../domain/session/settings/LearnSettings";
import PlayMode from "../../domain/session/PlayMode";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { GameSettingsBuilder } from "../../domain/session/settings/game/GameSettings";

const mockGetAllPresets = jest.fn();
const mockFavouritePresets = jest.fn();
jest.mock("../../repository/PresetRepository", () => {
    return function() {
        return { getAllPresets: mockGetAllPresets, getFavouritePresets: mockFavouritePresets };
    };
});

const learnMode = new LearnMode("Hiragana", "#fdb40e", "あ", new KanaSettingsBuilder().withHiragana().build(), new LearnSettings());
const playMode = new PlayMode("Test Mode", "#fdb40e", faGraduationCap, new KanaSettingsBuilder().build(), new GameSettingsBuilder().build());

describe("Preset Service", () => {
    const service = new PresetService();

    describe("Get All Presets", () => {
        it("Should return the presets from the repository when the call succeeds", () => {
            mockGetAllPresets.mockResolvedValueOnce({ learn: [learnMode], play: [playMode] });
            return service.getAllPresets().then((response: LearnPlayPresets) => {
                expect(response).toStrictEqual({ learn: [learnMode], play: [playMode] });
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
            mockFavouritePresets.mockResolvedValueOnce({ learn: [learnMode], play: [playMode] });
            return service.getFavouritePresets().then((response: LearnPlayPresets) => {
                expect(response).toStrictEqual({ learn: [learnMode], play: [playMode] });
            });
        });

        it("Should return empty preset array if the repository call fails with an error message", () => {
            mockFavouritePresets.mockRejectedValueOnce({ error: "Failed to retrieve favourite presets." });
            return service.getFavouritePresets().then((response: LearnPlayPresets) => {
                expect(response).toStrictEqual({ learn: [], play: [], error: "Failed to retrieve favourite presets." });
            });
        });
    });
});
