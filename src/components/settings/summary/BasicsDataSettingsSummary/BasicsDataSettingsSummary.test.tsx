import { BasicsSettingsBuilder } from "types/session/settings/data/BasicsSettings"
import { render } from "@testing-library/react"
import BasicsDataSettingsSummary  from "./BasicsDataSettingsSummary"

let settings = new BasicsSettingsBuilder()

beforeEach(() => {
  settings = new BasicsSettingsBuilder()
})

test("Should render the weather text if passed", () => {
  settings.withWeather()
  const { container } = render(<BasicsDataSettingsSummary settings={settings.build()} />)
  expect(container).toHaveTextContent("weather")
})

test("Should render the body text if passed", () => {
  settings.withBody()
  const { container } = render(<BasicsDataSettingsSummary settings={settings.build()} />)
  expect(container).toHaveTextContent("body")
})

test("Should render the directions text if passed", () => {
  settings.withDirections()
  const { container } = render(<BasicsDataSettingsSummary settings={settings.build()} />)
  expect(container).toHaveTextContent("directions")
})

test("Should render the animals text if passed", () => {
  settings.withAnimals()
  const { container } = render(<BasicsDataSettingsSummary settings={settings.build()} />)
  expect(container).toHaveTextContent("animals")
})

test("Should render the colours text if passed", () => {
  settings.withColours()
  const { container } = render(<BasicsDataSettingsSummary settings={settings.build()} />)
  expect(container).toHaveTextContent("colours")
})

test("Should render the family text if passed", () => {
  settings.withFamily()
  const { container } = render(<BasicsDataSettingsSummary settings={settings.build()} />)
  expect(container).toHaveTextContent("family")
})

test("Should render the correct text if multiple are passed", () => {
  settings.withWeather().withBody().withDirections().withAnimals().withColours().withFamily()
  const { container } = render(<BasicsDataSettingsSummary settings={settings.build()} />)
  expect(container).toHaveTextContent("weather, body, directions, animals, colours and family")
})
