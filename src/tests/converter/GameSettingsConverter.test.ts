import { GameSettingsBuilder } from "../../domain/session/settings/game/GameSettings";
import { LifeSettingsBuilder } from "../../domain/session/settings/game/LifeSettings";
import { HintSettingsBuilder } from "../../domain/session/settings/game/HintSettings";
import { TimeSettingsBuilder } from "../../domain/session/settings/game/TimeSettings";
import { QuestionSettingsBuilder } from "../../domain/session/settings/game/QuestionSettings";
import LearnableField from "../../domain/learn/LearnableField";
import QuestionType from "../../domain/game/QuestionType";
import { Kana } from "../../domain/kana/Kana";
import GameSettingsConverter from "../../converter/GameSettingsConverter";

describe("Game Settings Converter", () => {

    const converter = new GameSettingsConverter();

    describe("Serialise", () => {
        it("Should convert valid game settings", () => {
            const settings = new GameSettingsBuilder()
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

            const serialised = converter.serialise(settings);

            expect(serialised).toStrictEqual({
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
                    answerFilter: ""
                }
            });
        });
    });

    describe("De-Serialise", () => {
        it("Should de-serialise a valid JSON object", () => {
            const state = {
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
                    answerFilter: ""
                }
            }

            const deserialised = converter.deserialise(state);

            expect(JSON.stringify(deserialised)).toStrictEqual(
                JSON.stringify(new GameSettingsBuilder()
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
                    .build())
            );
        });
    });
});