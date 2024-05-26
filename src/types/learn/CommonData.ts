import { Learnable, LearningExample } from "./Learnable"

export default class CommonData extends Learnable {
  private readonly question: string
  private readonly kanji: string
  private readonly title: string
  private readonly kana: string[]
  private readonly meaning: string
  private readonly example: LearningExample | undefined

  constructor(
    question: string,
    kana: string[],
    kanji: string,
    title: string,
    meaning: string,
    example?: LearningExample
  ) {
    super()
    this.question = question
    this.kanji = kanji
    this.kana = kana
    this.title = title
    this.meaning = meaning
    this.example = example
  }

  getQuestion() {
    return this.question
  }

  getKana(): string[] {
    return this.kana
  }

  getMeanings(): string[] {
    return [this.meaning]
  }

  getTitle(): string {
    return this.title
  }

  getKanjiVariation(): string {
    return this.kanji
  }

  getExample(): LearningExample | undefined {
    return this.example
  }

  getHint(): string {
    return "It starts with " + this.getKana()[0][0]
  }

  getUniqueID(): string {
    return this.meaning + "-" + this.kana.join("-")
  }
}
