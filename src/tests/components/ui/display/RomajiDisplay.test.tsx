import { fireEvent, render, screen } from "@testing-library/react"
import RomajiDisplay from "../../../../components/ui/display/RomajiDisplay"
import { Environment } from "../../../../utility/Environment"

const environment = vi.fn()

beforeEach(() => {
  Environment.variable = environment
})

test("Should display the opening parenthesis", () => {
  const component = render(<RomajiDisplay kana={"すき"} />)
  expect(component.getByText("(")).toBeInTheDocument()
})

test("Should display the closing parenthesis", () => {
  const component = render(<RomajiDisplay kana={"すき"} />)
  expect(component.getByText(")")).toBeInTheDocument()
})

test("Should display the romaji for the given kana", () => {
  const component = render(<RomajiDisplay kana={"すき"} />)
  expect(component.getByText("suki")).toBeInTheDocument()
})

test("Hovering over the romaji should display the inspectable popover", async () => {
  environment.mockReturnValueOnce("test-title")
  const component = render(<RomajiDisplay kana={"すき"} />)

  fireEvent.mouseOver(component.getByText("suki"))

  expect(await screen.findByText("Why is the rōmaji incorrect?")).toBeInTheDocument()
  expect(await screen.findByText("test-title")).toBeInTheDocument()
})
