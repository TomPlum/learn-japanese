import { fireEvent, render, screen } from "@testing-library/react"
import InformationalKanji  from "./InformationalKanji"
import { Kanji } from "types/kanji/Kanji"
import { KyoikuGrade } from "types/kanji/KyoikuGrade"
import JLTPLevel from "types/learn/JLTPLevel"

vi.mock("repository/KanjiRepository")

const mockKanjiRepository = vi.fn()
vi.mock("repository/KanjiRepository", () => ({
  default: function () {
    return { getByValue: mockKanjiRepository }
  }
}))

const setup = () => {
  const component = render(<InformationalKanji value="猫" />)
  return {
    kanji: component.getByText("猫"),
    ...component
  }
}

test("Hovering over the character should render the popover", async () => {
  mockKanjiRepository.mockResolvedValueOnce(
    new Kanji("猫", [], ["cat"], KyoikuGrade.EIGHT, JLTPLevel.N5, "", [], 12, [])
  )
  const { kanji } = setup()

  fireEvent.mouseOver(kanji)

  expect(await screen.findByTestId("猫-information")).toBeInTheDocument()
  expect(screen.getByText("cat")).toBeInTheDocument()
})
