import { fireEvent, screen, waitFor } from "@testing-library/react";
import KanjiWordDisplay  from "./KanjiWordDisplay"
import { render } from "__test-utils__";
import { server } from "__test-utils__/msw.ts";
import {
  useGetKanjiByCharacterHandlers
} from "api/hooks/kanji/useGetKanjiByCharacter/useGetKanjiByCharacter.handlers.ts";

beforeEach(() => {
  server.use(...useGetKanjiByCharacterHandlers)
})

test("Should render the character if it does not match a known Kanji character", () => {
  const { component } = render(<KanjiWordDisplay value="き" />)
  expect(component.getByText("き")).toBeInTheDocument()
})

test("Should render the character as Inspectable if it is a known Kanji character", async () => {
  const { component } = render(<KanjiWordDisplay value="小" />)

  fireEvent.mouseOver(component.getByText("小"))

  expect(await screen.findByTestId("小-information")).toBeInTheDocument()
  await waitFor(() => {
    expect(screen.getByText("small, little")).toBeInTheDocument()
  })
})
