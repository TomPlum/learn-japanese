import { renderHook, waitFor } from "@testing-library/react"
import useGetKanjiByFilter from "api/hooks/kanji/useGetKanjiByFilter/useGetKanjiByFilter.ts"
import { server } from "__test-utils__/msw.ts"
import { useGetKanjiByFilterHandlers } from "api/hooks/kanji/useGetKanjiByFilter/useGetKanjiByFilter.handlers.ts"
import { wrapper } from "__test-utils__"
import { Kanji } from "types/kanji/Kanji.ts"
import { KanjiReading } from "types/kanji/KanjiReading.ts"
import { ReadingType } from "types/kanji/ReadingType.ts"
import { KyoikuGrade } from "types/kanji/KyoikuGrade.ts";
import JLTPLevel from "types/learn/JLTPLevel.ts";
import { KanjiSearch } from "service/KanjiService.ts";
import { Example } from "types/kanji/Example.ts";

describe("Get Kanji By Filter API Hook", () => {
  it("should return a valid response if the URI is correct", async () => {
    server.use(...useGetKanjiByFilterHandlers)

    const { result } = renderHook(
      () =>
        useGetKanjiByFilter({
          grades: [],
          levels: [],
          strokes: undefined,
          paging: {
            page: 1,
            size: 2
          },
          search: "test"
        }),
      { wrapper }
    )

    await waitFor(() => {
      expect(result.current.data).toStrictEqual<KanjiSearch>({
        kanji: [
          {
            field: 'meaning',
            value: new Kanji(
              "一",
              [
                new KanjiReading('ichi', "いち", ReadingType.ON),
                new KanjiReading('itsu', "いつ", ReadingType.ON),
                new KanjiReading("hitotsu", "ひとつ", ReadingType.KUN),
                new KanjiReading('hito', "ひと", ReadingType.KUN)
              ],
              ['one'],
              KyoikuGrade.ONE,
              JLTPLevel.N4,
              "https://en.wiktionary.org/wiki/%E4%B8%80#Kanji",
              [
                new Example('一月', ['いちがつ'], ['January']),
                new Example('一つ', ['ひとつ'], ['one']),
                new Example('一番', ['いちばん'], ["first", "number one", "game", "round", "best", "bout"]),
                new Example("一部", ["いちぶ"], ["one part", "one section", "some", "one portion"]),
                new Example("一般", ["いっぱん"], ["general", "universal", "ordinary", "liberal"])
              ],
              1,
              ['number'],
            )

          },
          {
            field: 'meaning',
            value: new Kanji(
              "右",
              [
                new KanjiReading('yū', "ゆう", ReadingType.ON),
                new KanjiReading('u', "う", ReadingType.ON),
                new KanjiReading("migi", "みぎ", ReadingType.KUN),
              ],
              ['right'],
              KyoikuGrade.ONE,
              JLTPLevel.N4,
              "https://en.wiktionary.org/wiki/%E5%8F%B3#Kanji",
              [
                new Example("右翼",["うよく"],["right wing (political)"]),
                new Example("右手", ["みぎて"], ["right hand"]),
                new Example("左右",["さゆう"], ["control", "influence", "left and right"])
              ],
              5,
              ['direction'],
            )

          }
        ],
        pages: 1,
        quantity: 2
      })
    })
  })
})