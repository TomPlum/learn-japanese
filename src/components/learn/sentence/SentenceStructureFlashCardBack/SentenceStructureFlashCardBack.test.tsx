import { fireEvent, waitFor } from "@testing-library/react";
import SentenceStructureFlashCardBack  from "./SentenceStructureFlashCardBack"
import { findByTextWithMarkup } from "__test-utils__/Queries";
import Definition from "types/sentence/Definition"
import { server } from "__test-utils__/msw.ts";
import {
  useGetKanjiByCharacterHandlers
} from "api/hooks/kanji/useGetKanjiByCharacter/useGetKanjiByCharacter.handlers.ts";
import { render } from "__test-utils__";


beforeEach(() => {
  server.use(...useGetKanjiByCharacterHandlers)
})

const onResetHandler = vi.fn()

const adjective = new Definition(["small", "little"], "小さい", "ちいさい", "い Adjective")

test("Clicking the reset button should call the onReset event handler", async () => {
  const { component } = render(
    <SentenceStructureFlashCardBack data={adjective} onClick={onResetHandler} showRomaji={false} />
  )
  fireEvent.click(component.getByTitle("Reset"))
  await waitFor(() => expect(onResetHandler).toHaveBeenCalled())
})

test("Should render the kanji variation", async () => {
  render(<SentenceStructureFlashCardBack data={adjective} onClick={onResetHandler} showRomaji={false} />)
  expect(await findByTextWithMarkup("小さい")).toBeInTheDocument()
})

test("Should render the kana", async () => {
  const { component } = render(
    <SentenceStructureFlashCardBack data={adjective} onClick={onResetHandler} showRomaji={false} />
  )
  expect(await component.findByText("ちいさい")).toBeInTheDocument()
})

test("Should render the romaji if passed as true", async () => {
  const { component } = render(
    <SentenceStructureFlashCardBack data={adjective} onClick={onResetHandler} showRomaji={true} />
  )
  expect(await component.findByText("chīsai")).toBeInTheDocument()
})

test("Should not render the romaji if passed as false", async () => {
  const { component } = render(
    <SentenceStructureFlashCardBack data={adjective} onClick={onResetHandler} showRomaji={false} />
  )
  await waitFor(() => expect(component.queryByText("chiisai")).not.toBeInTheDocument())
})
