import { fireEvent, render, screen } from "@testing-library/react"
import InformationalKanji from "../../../../components/ui/display/InformationalKanji"
import { Kanji } from "../../../../domain/kanji/Kanji"
import { KyoikuGrade } from "../../../../domain/kanji/KyoikuGrade"
import JLTPLevel from "../../../../domain/learn/JLTPLevel"

jest.mock("../../../../repository/KanjiRepository")

const mockKanjiRepository = jest.fn()
jest.mock("../../../../repository/KanjiRepository", () => {
  return function () {
    return { getByValue: mockKanjiRepository }
  }
})

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
