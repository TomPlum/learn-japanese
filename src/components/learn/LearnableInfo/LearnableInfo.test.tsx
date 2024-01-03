import { render } from "@testing-library/react"
import LearnableInfo  from "./LearnableInfo"
import Definition from "../../../domain/sentence/Definition"

const adjective = new Definition(["interesting", "funny"], "面白い", "おもしろい", "い Adjective")

test("Should render the meanings", () => {
  const component = render(<LearnableInfo value={adjective} />)
  expect(component.getByText("interesting or funny")).toBeInTheDocument()
})

test("Should render the kanji variation", () => {
  const component = render(<LearnableInfo value={adjective} />)
  expect(component.getByText("面白い")).toBeInTheDocument()
})

test("Should render the kana", () => {
  const component = render(<LearnableInfo value={adjective} />)
  expect(component.getByText("おもしろい")).toBeInTheDocument()
})

test("Should render a hyphen if the kanji variation is undefined", () => {
  const adjective = new Definition(["interesting", "funny"], undefined, "おもしろい", "い Adjective")
  const component = render(<LearnableInfo value={adjective} />)
  expect(component.getByText("-")).toBeInTheDocument()
})
