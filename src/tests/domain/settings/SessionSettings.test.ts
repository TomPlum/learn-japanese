import { SessionSettings } from "../../../domain/session/settings/SessionSettings";
import { KanaSettingsBuilder } from "../../../domain/session/settings/data/KanaSettings";
import { GameSettingsBuilder } from "../../../domain/session/settings/game/GameSettings";
import LearnSettings from "../../../domain/session/settings/LearnSettings";
import PlayMode from "../../../domain/session/PlayMode";
import LearnMode from "../../../domain/session/LearnMode";
import SessionMode from "../../../domain/session/SessionMode";

describe("Session Settings", () => {

    const dataSettings = new KanaSettingsBuilder().build();
    const learnSettings = new LearnSettings();
    const gameSettings = new GameSettingsBuilder().build();

    describe("For Game Session Static Factory Constructor", () => {
        it("Should set the given data settings", () => {
            const sessionSettings = SessionSettings.forGame(dataSettings, gameSettings);
            expect(sessionSettings.dataSettings).toStrictEqual(dataSettings);
        });

        it("Should set the given game settings", () => {
            const sessionSettings = SessionSettings.forGame(dataSettings, gameSettings);
            expect(sessionSettings.gameSettings).toStrictEqual(gameSettings);
        });

        it("Should set the learn settings as undefined", () => {
            const sessionSettings = SessionSettings.forGame(dataSettings, gameSettings);
            expect(sessionSettings.learnSettings).toStrictEqual(undefined);
        });
    });

    describe("For Learn Session Static Factory Constructor", () => {
        it("Should set the given data settings", () => {
            const sessionSettings = SessionSettings.forLearning(dataSettings, learnSettings);
            expect(sessionSettings.dataSettings).toStrictEqual(dataSettings);
        });

        it("Should set the given learn settings", () => {
            const sessionSettings = SessionSettings.forLearning(dataSettings, learnSettings);
            expect(sessionSettings.learnSettings).toStrictEqual(learnSettings);
        });

        it("Should set the game settings as undefined", () => {
            const sessionSettings = SessionSettings.forLearning(dataSettings, learnSettings);
            expect(sessionSettings.gameSettings).toStrictEqual(undefined);
        });
    });

    describe("From Preset Static Factory Constructor", () => {

        const mockForGameConstructor = jest.fn();
        const mockForLearningConstructor = jest.fn();

        const gameSessionSettings = SessionSettings.forGame(dataSettings, gameSettings);
        const learnSessionSettings = SessionSettings.forLearning(dataSettings, learnSettings);
        const playPreset = new PlayMode(1, "Test Play", "#ffffff", "FaAtom", new KanaSettingsBuilder().build(), new GameSettingsBuilder().build());
        const learnPreset = new LearnMode(1, "Test Learn", "#fdb40e", "あ", new KanaSettingsBuilder().withHiragana().build(), new LearnSettings());

        beforeEach(() => {
            SessionSettings.forGame = mockForGameConstructor;
            SessionSettings.forLearning = mockForLearningConstructor;
        });

        it("Should delegate to the for game static factory constructor if the preset is of play type", () => {
            mockForGameConstructor.mockReturnValueOnce(gameSessionSettings);
            const response = SessionSettings.fromPreset(playPreset);
            expect(response).toStrictEqual(gameSessionSettings);
        });

        it("Should delegate to the for learning static factory constructor if the preset is of learn type", () => {
            mockForLearningConstructor.mockReturnValueOnce(learnSessionSettings);
            const response = SessionSettings.fromPreset(learnPreset);
            expect(response).toStrictEqual(learnSessionSettings);
        });

        it("Should throw an exception if an unknown preset type is passed in", () => {
            const expectedErrorMessage = "Unknown preset type";
            const unknownPresetType = () => SessionSettings.fromPreset(new UnknownPresetType());
            expect(unknownPresetType).toThrow(expectedErrorMessage);
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
