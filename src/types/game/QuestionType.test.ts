import QuestionType from "./QuestionType.ts"
import each from "jest-each"

describe("Question Type", () => {
  describe("Static Factory Constructor", () => {
    it("Should convert text name", () => {
      const name = "text"
      const type = QuestionType.fromName(name)
      expect(type).toBe(QuestionType.TEXT)
    })

    it("Should convert choice name", () => {
      const name = "choice"
      const type = QuestionType.fromName(name)
      expect(type).toBe(QuestionType.CHOICE)
    })

    it("Should convert audio name", () => {
      const name = "audio"
      const type = QuestionType.fromName(name)
      expect(type).toBe(QuestionType.AUDIO)
    })

    it("Should convert match name", () => {
      const name = "match"
      const type = QuestionType.fromName(name)
      expect(type).toBe(QuestionType.MATCH)
    })

    it("Should convert random name", () => {
      const name = "random"
      const type = QuestionType.fromName(name)
      expect(type).toBe(QuestionType.RANDOM)
    })

    each(["TEXT", "unknown", null, undefined]).it("Should convert invalid name [%s]", (name: string) => {
      expect(() => QuestionType.fromName(name)).toThrow(`Invalid QuestionType [${name}]`)
    })
  })
})
