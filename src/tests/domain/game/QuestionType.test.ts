import QuestionType from "../../../domain/game/QuestionType";
import each from "jest-each";

describe("Question Type", () => {
    describe("Static Factory Constructor", () => {
        it("Should convert text name", () => {
            const name = "Text";
            const type = QuestionType.fromName(name);
            expect(type).toBe(QuestionType.TEXT);
        });

        it("Should convert choice name", () => {
            const name = "Multiple Choice";
            const type = QuestionType.fromName(name);
            expect(type).toBe(QuestionType.CHOICE);
        });

        it("Should convert audio name", () => {
            const name = "Audio";
            const type = QuestionType.fromName(name);
            expect(type).toBe(QuestionType.AUDIO);
        });

        it("Should convert match name", () => {
            const name = "Match";
            const type = QuestionType.fromName(name);
            expect(type).toBe(QuestionType.MATCH);
        });

        it("Should convert random name", () => {
            const name = "Random";
            const type = QuestionType.fromName(name);
            expect(type).toBe(QuestionType.RANDOM);
        });

        each(["text", "unknown", null, undefined]).it("Should convert invalid name [%s]", (name: string) => {
            expect(() => QuestionType.fromName(name)).toThrow(`Invalid QuestionType [${name}]`);
        });
    });
});
