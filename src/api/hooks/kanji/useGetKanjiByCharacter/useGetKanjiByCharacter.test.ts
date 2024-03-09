import { server } from "__test-utils__/msw.ts"
import { useGetKanjiByCharacterHandlers } from "api/hooks/kanji/useGetKanjiByCharacter/useGetKanjiByCharacter.handlers.ts"
import { renderHook, waitFor } from "@testing-library/react"
import useGetKanjiByCharacter from "api/hooks/kanji/useGetKanjiByCharacter/useGetKanjiByCharacter.ts"
import { wrapper } from "__test-utils__"
import { Kanji } from "types/kanji/Kanji.ts"
import { KanjiReading } from "types/kanji/KanjiReading.ts"
import { ReadingType } from "types/kanji/ReadingType.ts"
import { KyoikuGrade } from "types/kanji/KyoikuGrade.ts"
import JLTPLevel from "types/learn/JLTPLevel.ts"
import { Example } from "types/kanji/Example.ts"

describe("Get Kanji By Character API Hook", () => {
  it("should return a valid response when the URL and path variables are correct", async () => {
    server.use(...useGetKanjiByCharacterHandlers)

    const { result } = renderHook(() => useGetKanjiByCharacter({ character: "小" }), {
      wrapper
    })

    await waitFor(() => {
      expect(result.current.data).toStrictEqual(
        new Kanji(
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
      )
    })
  })
})