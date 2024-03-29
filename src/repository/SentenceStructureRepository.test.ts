import SentenceStructureRepository from "./SentenceStructureRepository.ts"
import { AdjectiveData, AdverbData, ExpressionData, VerbData } from "../data/DataTypes.ts"
import { adjectives, adverbs, expressions, verbs } from "../data/SentenceStructure.ts"
import { AdjectiveType } from "../domain/sentence/AdjectiveType.ts"
import { VerbType } from "../domain/sentence/VerbType.ts"
import Definition from "../domain/sentence/Definition.ts"
import { SentenceStructureSettingsBuilder } from "../domain/session/settings/data/SentenceStructureSettings.ts"

vi.mock("data/SentenceStructure")

describe("Sentence Structure Repository", () => {
  const mockAdjectives = adjectives as jest.MockedFunction<() => AdjectiveData[]>
  const mockVerbs = verbs as jest.MockedFunction<() => VerbData[]>
  const mockAdverbs = adverbs as jest.MockedFunction<() => AdverbData[]>
  const mockExpressions = expressions as jest.MockedFunction<() => ExpressionData[]>

  beforeEach(() => {
    mockAdjectives.mockReturnValue([
      {
        meanings: ["small"],
        kana: "ちいさい",
        kanjiForm: "小さい",
        type: AdjectiveType.I
      }
    ])

    mockVerbs.mockReturnValue([
      {
        meanings: ["to use"],
        kana: "つかう",
        kanjiForm: "使う",
        type: VerbType.U
      }
    ])

    mockAdverbs.mockReturnValue([
      {
        meanings: ["not much"],
        kana: "あまり~",
        genkiLesson: 3
      }
    ])

    mockExpressions.mockReturnValue([
      {
        meanings: ["That's right", "Let me see"],
        kana: "そうですね",
        genkiLesson: 3
      }
    ])
  })

  const repository = new SentenceStructureRepository()

  it("Should return the adjectives when the adjectives property is passed as true", () => {
    const settings = new SentenceStructureSettingsBuilder().withAdjectives().build()
    return repository.read(settings).then((response) => {
      expect(mockAdjectives).toHaveBeenCalled()
      expect(response).toStrictEqual([new Definition(["small"], "小さい", "ちいさい", "い Adjective")])
    })
  })

  it("Should return the verbs when the verbs property is passed as true", () => {
    const settings = new SentenceStructureSettingsBuilder().withVerbs().build()
    return repository.read(settings).then((response) => {
      expect(mockVerbs).toHaveBeenCalled()
      expect(response).toStrictEqual([new Definition(["to use"], "使う", "つかう", "う Verb")])
    })
  })

  it("Should return the adverbs when the adverbs property is passed as true", () => {
    const settings = new SentenceStructureSettingsBuilder().withAdverbs().build()
    return repository.read(settings).then((response) => {
      expect(mockAdverbs).toHaveBeenCalled()
      expect(response).toStrictEqual([new Definition(["not much"], undefined, "あまり~", "Adverb")])
    })
  })

  it("Should return the expressions when the expressions property is passed as true", () => {
    const settings = new SentenceStructureSettingsBuilder().withExpressions().build()
    return repository.read(settings).then((response) => {
      expect(mockExpressions).toHaveBeenCalled()
      expect(response).toStrictEqual([
        new Definition(["That's right", "Let me see"], undefined, "そうですね", "Expression")
      ])
    })
  })

  it("Should return an empty array if no settings are passed", () => {
    const settings = new SentenceStructureSettingsBuilder().build()
    return repository.read(settings).then((response) => {
      expect(response).toHaveLength(0)
    })
  })
})
