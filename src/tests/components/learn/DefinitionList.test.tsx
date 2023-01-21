import { render } from "@testing-library/react"
import DefinitionList from "../../../components/learn/DefinitionList"
import { getByTextWithMarkup } from "../../Queries"

test("Should display a single definition in inline mode", () => {
  const component = render(<DefinitionList words={["test"]} mode="inline" />)
  expect(component.getByText("test")).toBeInTheDocument()
})

test("Should display two definitions with a single or between in inline mode", () => {
  render(<DefinitionList words={["one", "two"]} mode="inline" />)
  expect(getByTextWithMarkup("one or two")).toBeInTheDocument()
})

test.skip("Should display three definitions with an or between each word in inline mode", () => {
  render(<DefinitionList words={["one", "two", "three"]} mode="inline" />)
  expect(getByTextWithMarkup("one or two or three")).toBeInTheDocument()
})

test("Should display a single definition in stacked mode", () => {
  const component = render(<DefinitionList words={["test"]} mode="stacked" />)
  expect(component.getByText("test")).toBeInTheDocument()
})

test("Should display two definitions with a single or between in stacked mode", () => {
  const component = render(<DefinitionList words={["one", "two"]} mode="stacked" />)
  expect(component.getByText("one")).toBeInTheDocument()
  expect(component.getByText("or")).toBeInTheDocument()
  expect(component.getByText("two")).toBeInTheDocument()
})

test("Should display three definitions with an or between each word in stacked mode", () => {
  const component = render(<DefinitionList words={["one", "two", "three"]} mode="stacked" />)
  expect(component.getByText("one")).toBeInTheDocument()
  expect(component.getByText("two")).toBeInTheDocument()
  expect(component.getByText("three")).toBeInTheDocument()
  expect(component.getAllByText("or").length).toBe(2)
})
