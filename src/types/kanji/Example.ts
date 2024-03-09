export class Example {
  private readonly _kanji: string
  private readonly _kana: string[]
  private readonly _english: string[]

  constructor(kanji: string, kana: string[], english: string[]) {
    this._kanji = kanji
    this._kana = kana
    this._english = english
  }

  get kanji(): string {
    return this._kanji
  }

  get kana(): string[] {
    return this._kana
  }

  get english(): string[] {
    return this._english
  }
}
