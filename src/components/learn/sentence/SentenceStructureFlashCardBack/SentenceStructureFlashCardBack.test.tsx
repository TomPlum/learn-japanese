import { fireEvent, render, waitFor } from "@testing-library/react";
import SentenceStructureFlashCardBack  from "./SentenceStructureFlashCardBack"
import { findByTextWithMarkup } from "__test-utils__/Queries";
import Definition from "../../../../domain/sentence/Definition"
import { Kanji } from "../../../../domain/kanji/Kanji.ts"
import { KyoikuGrade } from "../../../../domain/kanji/KyoikuGrade.ts"
import JLTPLevel from "../../../../domain/learn/JLTPLevel.ts"

const mockKanjiRepository = vi.fn()
vi.mock("repository/KanjiRepository.ts", () => ({
  default: function () {
    return { getByValue: mockKanjiRepository }
  }
}))

beforeEach(() => {
  mockKanjiRepository.mockResolvedValue(
    new Kanji("面", [], ["screen"], KyoikuGrade.THREE, JLTPLevel.N5, "", [], 12, [])
  )
})

const onResetHandler = vi.fn()

const adjective = new Definition(["interesting", "funny"], "面白い", "おもしろい", "い Adjective")

test("Clicking the reset button should call the onReset event handler", async () => {
  const component = render(
    <SentenceStructureFlashCardBack data={adjective} onClick={onResetHandler} showRomaji={false} />
  )
  fireEvent.click(component.getByTitle("Reset"))
  await waitFor(() => expect(onResetHandler).toHaveBeenCalled())
})

test("Should render the kanji variation", async () => {
  render(<SentenceStructureFlashCardBack data={adjective} onClick={onResetHandler} showRomaji={false} />)
  expect(await findByTextWithMarkup("面白い")).toBeInTheDocument()
})

test("Should render the kana", async () => {
  const component = render(
    <SentenceStructureFlashCardBack data={adjective} onClick={onResetHandler} showRomaji={false} />
  )
  expect(await component.findByText("おもしろい")).toBeInTheDocument()
})

test("Should render the romaji if passed as true", async () => {
  const component = render(
    <SentenceStructureFlashCardBack data={adjective} onClick={onResetHandler} showRomaji={true} />
  )
  expect(await component.findByText("omoshiroi")).toBeInTheDocument()
})

test("Should render the romaji if passed as false", async () => {
  const component = render(
    <SentenceStructureFlashCardBack data={adjective} onClick={onResetHandler} showRomaji={false} />
  )
  await waitFor(() => expect(component.queryByText("omoshiroi")).not.toBeInTheDocument())
})
