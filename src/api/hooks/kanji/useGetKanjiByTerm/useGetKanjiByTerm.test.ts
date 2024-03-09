import { server } from "__test-utils__/msw.ts";
import { useGetKanjiByTermHandlers } from "api/hooks/kanji/useGetKanjiByTerm/useGetKanjiByTerm.handlers.ts";
import { renderHook } from "@testing-library/react";
import useGetKanjiByTerm from "api/hooks/kanji/useGetKanjiByTerm/useGetKanjiByTerm.ts";
import { wrapper } from "__test-utils__";
import { KanjiSearch } from "service/KanjiService.ts";
import { Kanji } from "types/kanji/Kanji.ts";
import { KanjiReading } from "types/kanji/KanjiReading.ts";
import { ReadingType } from "types/kanji/ReadingType.ts";
import { KyoikuGrade } from "types/kanji/KyoikuGrade.ts";
import JLTPLevel from "types/learn/JLTPLevel.ts";
import { Example } from "types/kanji/Example.ts";

describe('Get Kanji By Search Term API Hook', () => {
  it('should return a response if the endpoint, parameters and HTTP method match', async () => {
    server.use(...useGetKanjiByTermHandlers)

    const { result } = renderHook(useGetKanjiByTerm, { wrapper })

    const response = await result.current.mutateAsync({
      search: 'tree',
      pagination: {
        page: 0,
        size: 10
      }
    })

    expect(response).toStrictEqual<KanjiSearch>({
      quantity: 1,
      pages: 1,
      kanji: [
        {
          field: 'meaning',
          value: new Kanji(
            "小",
            [new KanjiReading("shō", "しょう", ReadingType.ON), new KanjiReading("chīsai", "ちいさい", ReadingType.KUN)],
            ["small", "little"],
            KyoikuGrade.ONE,
            JLTPLevel.N4,
            "https://en.wiktionary.org/wiki/%E5%B0%8F#Kanji",
            [new Example("小説", ["しょうせつ"], ["novel", "short story"])],
            3,
            ["size"]
          )
        }
      ]
    })
  })
})