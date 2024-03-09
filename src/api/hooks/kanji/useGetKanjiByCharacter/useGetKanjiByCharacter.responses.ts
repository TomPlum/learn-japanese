import { KanjiResponseModel } from "repository/KanjiRepository.ts";

export const useGetKanjiByCharacterResponses: KanjiResponseModel = {
  character: "小",
  grade: 1,
  strokes: 3,
  jlpt: 4,
  source: "https://en.wiktionary.org/wiki/%E5%B0%8F#Kanji",
  meanings: ["small", "little"],
  readings: [
    { value: "ちいさい", type: "kun" },
    { value: "しょう", type: "on" }
  ],
  examples: [{ value: "小説", kana: ["しょうせつ"], english: ["novel", "short story"] }],
  tags: ["size"]
}