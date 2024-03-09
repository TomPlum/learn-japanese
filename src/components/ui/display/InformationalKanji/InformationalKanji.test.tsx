import { fireEvent, screen, waitFor } from "@testing-library/react";
import InformationalKanji  from "./InformationalKanji"
import { server } from "__test-utils__/msw.ts";
import {
  useGetKanjiByCharacterHandlers
} from "api/hooks/kanji/useGetKanjiByCharacter/useGetKanjiByCharacter.handlers.ts";
import { render } from "__test-utils__";

const setup = () => {
  const { component } = render(<InformationalKanji value="小" />)
  return {
    kanji: component.getByText("小"),
    ...component
  }
}

test("Hovering over the character should render the popover", async () => {
  server.use(...useGetKanjiByCharacterHandlers)
  const { kanji } = setup()

  fireEvent.mouseOver(kanji)

  expect(await screen.findByTestId("小-information")).toBeInTheDocument()
  await waitFor(() => {
    expect(screen.getByText("small, little")).toBeInTheDocument()
  })
})
