import { KanjiSearchResponseModel } from "api/hooks/kanji/useGetKanjiByFilter/types.ts";

export const useGetKanjiByFilterResponses: KanjiSearchResponseModel = {
  total: 2,
  pages: 1,
  results: [
    {
      field: "meaning",
      value: {
        character: "一",
        grade: 1,
        strokes: 1,
        jlpt: 4,
        source: "https://en.wiktionary.org/wiki/%E4%B8%80#Kanji",
        meanings: ["one"],
        readings: [
          {
            value: "ひとつ",
            type: "kun"
          },
          {
            value: "ひと",
            type: "kun"
          },
          {
            value: "いち",
            type: "on"
          },
          {
            value: "いつ",
            type: "on"
          }
        ],
        examples: [
          {
            value: "一月",
            kana: ["いちがつ"],
            english: ["January"]
          },
          {
            value: "一つ",
            kana: ["ひとつ"],
            english: ["one"]
          },
          {
            value: "一番",
            kana: ["いちばん"],
            english: ["first", "number one", "game", "round", "best", "bout"]
          },
          {
            value: "一部",
            kana: ["いちぶ"],
            english: ["one part", "one section", "some", "one portion"]
          },
          {
            value: "一般",
            kana: ["いっぱん"],
            english: ["general", "universal", "ordinary", "liberal"]
          }
        ],
        tags: ["number"]
      }
    },
    {
      field: "meaning",
      value: {
        character: "右",
        grade: 1,
        strokes: 5,
        jlpt: 4,
        source: "https://en.wiktionary.org/wiki/%E5%8F%B3#Kanji",
        meanings: ["right"],
        readings: [
          {
            value: "ゆう",
            type: "on"
          },
          {
            value: "う",
            type: "on"
          },
          {
            value: "みぎ",
            type: "kun"
          }
        ],
        examples: [
          {
            value: "右翼",
            kana: ["うよく"],
            english: ["right wing (political)"]
          },
          {
            value: "右手",
            kana: ["みぎて"],
            english: ["right hand"]
          },
          {
            value: "左右",
            kana: ["さゆう"],
            english: ["control", "influence", "left and right"]
          }
        ],
        tags: ["direction"]
      }
    },
  ]
}