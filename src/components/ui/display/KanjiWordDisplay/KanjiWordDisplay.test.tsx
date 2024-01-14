import { fireEvent, render, screen } from "@testing-library/react"
import KanjiWordDisplay  from "./KanjiWordDisplay"
import { Kanji } from "types/kanji/Kanji"
import { KanjiReading } from "types/kanji/KanjiReading"
import { ReadingType } from "types/kanji/ReadingType"
import { KyoikuGrade } from "types/kanji/KyoikuGrade"
import JLTPLevel from "types/learn/JLTPLevel"

const mockKanjiRepository = vi.fn()
vi.mock("repository/KanjiRepository", () => ({
  default: function () {
    return { getByValue: mockKanjiRepository }
  }
}))

const kanji = new Kanji(
  "鳥",
  [new KanjiReading("tori", "とり", ReadingType.KUN), new KanjiReading("chou", "ちょう", ReadingType.ON)],
  ["bird"],
  KyoikuGrade.TWO,
  JLTPLevel.N5,
  "",
  [],
  10,
  ["animal"]
)

test("Should render the character if it does not match a known Kanji character", () => {
  const component = render(<KanjiWordDisplay value="き" />)
  expect(component.getByText("き")).toBeInTheDocument()
})

test("Should render the character as Inspectable if it is a known Kanji character", async () => {
  mockKanjiRepository.mockResolvedValue(kanji)
  const component = render(<KanjiWordDisplay value="鳥" />)

  fireEvent.mouseOver(component.getByText("鳥"))

  expect(await screen.findByTestId("鳥-information")).toBeInTheDocument()
  expect(mockKanjiRepository).toHaveBeenCalledWith("鳥")
  expect(screen.getByText("bird")).toBeInTheDocument()
})
