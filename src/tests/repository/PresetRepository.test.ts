//Mock Kanji Converter
import RestClient from "../../rest/RestClient";
import PresetRepository, { LearnPresetResponse, PlayPresetResponse } from "../../repository/PresetRepository";
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

const mockDataSettingsConverter = jest.fn();
jest.mock("../../converter/DataSettingsConverter", () => function() { return { convert: mockDataSettingsConverter } });

const mockGameSettingsConverter = jest.fn();
jest.mock("../../converter/GameSettingsConverter", () => function() { return { convert: mockGameSettingsConverter } });

//Mock RestClient Methods
const mockPost = jest.fn();
const mockGet = jest.fn();

beforeEach(() => {
    RestClient.post = mockPost;
    RestClient.get = mockGet;
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

        it("Should return a concatenated arrays of learn and play presets", () => {
            mockGet.mockResolvedValueOnce({ data: { learn: [learnPresetResponse], play: [playPresetResponse ]} });
            mockDataSettingsConverter.mockReturnValue(dataSettings);
            mockGameSettingsConverter.mockReturnValueOnce(gameSettings);

            return repository.getAllPresets().then(response => {
                expect(mockDataSettingsConverter).toHaveBeenCalledWith(Topic.KANA, learnPresetResponse.data);
                expect(mockDataSettingsConverter).toHaveBeenCalledWith(Topic.KANA, playPresetResponse.data);
                expect(mockGameSettingsConverter).toHaveBeenCalledWith(playPresetResponse.game);
                expect(response).toStrictEqual([
                    new LearnMode("Example Learn Preset", "ffffff", "faApple", dataSettings, new LearnSettings(), undefined, false),
                    new PlayMode("Example Play Preset", "ffffff", "faApple", dataSettings, gameSettings, undefined, false)
                ]);
            });
        });
    });
});
