import { server } from "__test-utils__/msw.ts";
import { useGetKanjiPageHandlers } from "api/hooks/kanji/useGetKanjiPage/useGetKanjiPage.handlers.ts";
import { renderHook } from "@testing-library/react";
import useGetKanjiPage from "api/hooks/kanji/useGetKanjiPage/useGetKanjiPage.ts";
import { wrapper } from "__test-utils__";
import KanjiSettings from "types/session/settings/data/KanjiSettings.ts";
import { KyoikuGrade } from "types/kanji/KyoikuGrade.ts";
import { Kanji } from "types/kanji/Kanji.ts";
import { Paged } from "api/hooks/kanji/useGetKanjiPage/types.ts";
import { KanjiReading } from "types/kanji/KanjiReading.ts";
import { ReadingType } from "types/kanji/ReadingType.ts";
import JLTPLevel from "types/learn/JLTPLevel.ts";
import { Example } from "types/kanji/Example.ts";

describe('Get Kanji Page API Hook', () => {
  it('should return a response if the endpoint and HTTP method are correct', async () => {
    server.use(...useGetKanjiPageHandlers)

    const { result } = renderHook(useGetKanjiPage, { wrapper })

    const response = await result.current.mutateAsync({
      settings: new KanjiSettings([KyoikuGrade.TWO], [], 50),
      pagination: {
        page: 1,
        size: 10
      }
    })

    expect(response).toStrictEqual<Paged<Kanji>>({
      results: [
        new Kanji(
          "小",
          [
            new KanjiReading("shō", "しょう", ReadingType.ON),
            new KanjiReading("chīsai", "ちいさい", ReadingType.KUN)
          ],
          ["small", "little"],
          KyoikuGrade.ONE,
          JLTPLevel.N4,
          "https://en.wiktionary.org/wiki/%E5%B0%8F#Kanji",
          [new Example('小説', ['しょうせつ'], ['novel', 'short story'])],
          3,
          ["size"]
        )
      ],
      pages: 1,
      quantity: 1
    })
  })
})