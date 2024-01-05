import { NumbersSettingsBuilder } from "../../../../domain/session/settings/data/NumbersSettings"
import { render } from "@testing-library/react"
import NumbersDataSettingsSummary  from "./NumbersDataSettingsSummary"

let settings = new NumbersSettingsBuilder()

beforeEach(() => {
  settings = new NumbersSettingsBuilder()
})

test("Should render the sequence text if passed", () => {
  settings.withSequence()
  const { container } = render(<NumbersDataSettingsSummary settings={settings.build()} />)
  expect(container).toHaveTextContent("sequence")
})

test("Should render the age text if passed", () => {
  settings.withAge()
  const { container } = render(<NumbersDataSettingsSummary settings={settings.build()} />)
  expect(container).toHaveTextContent("age")
})

test("Should render the counters text if passed", () => {
  settings.withCounters()
  const { container } = render(<NumbersDataSettingsSummary settings={settings.build()} />)
  expect(container).toHaveTextContent("counters")
})

test("Should render the units text if passed", () => {
  settings.withUnits()
  const { container } = render(<NumbersDataSettingsSummary settings={settings.build()} />)
  expect(container).toHaveTextContent("units")
})

test("Should render the exceptions text if passed", () => {
  settings.withExceptions()
  const { container } = render(<NumbersDataSettingsSummary settings={settings.build()} />)
  expect(container).toHaveTextContent("exceptions")
})

test("Should render the numbers text if passed", () => {
  settings.withNumbers()
  const { container } = render(<NumbersDataSettingsSummary settings={settings.build()} />)
  expect(container).toHaveTextContent("numbers")
})

test("Should render the correct text if multiple are passed", () => {
  settings.withSequence().withAge().withCounters().withUnits().withExceptions().withNumbers()
  const { container } = render(<NumbersDataSettingsSummary settings={settings.build()} />)
  expect(container).toHaveTextContent("sequence, age, counters, units, exceptions and numbers")
})
