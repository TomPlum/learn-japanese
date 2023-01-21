import { CalendarSettingsBuilder } from "../../../../domain/session/settings/data/CalendarSettings"
import { render } from "@testing-library/react"
import CalendarDataSettingsSummary from "../../../../components/settings/summary/CalendarDataSettingsSummary"

let settings = new CalendarSettingsBuilder()

beforeEach(() => {
  settings = new CalendarSettingsBuilder()
})

test("Should render the phrases text if passed", () => {
  settings.withPhrases()
  const { container } = render(<CalendarDataSettingsSummary settings={settings.build()} />)
  expect(container).toHaveTextContent("phrases")
})

test("Should render the nouns text if passed", () => {
  settings.withTemporalNouns()
  const { container } = render(<CalendarDataSettingsSummary settings={settings.build()} />)
  expect(container).toHaveTextContent("nouns")
})

test("Should render the days text if passed", () => {
  settings.withDays()
  const { container } = render(<CalendarDataSettingsSummary settings={settings.build()} />)
  expect(container).toHaveTextContent("days")
})

test("Should render the months text if passed", () => {
  settings.withMonths()
  const { container } = render(<CalendarDataSettingsSummary settings={settings.build()} />)
  expect(container).toHaveTextContent("months")
})

test("Should render the seasons text if passed", () => {
  settings.withSeasons()
  const { container } = render(<CalendarDataSettingsSummary settings={settings.build()} />)
  expect(container).toHaveTextContent("seasons")
})

test("Should render the correct text if multiple are passed", () => {
  settings.withPhrases().withTemporalNouns().withDays().withMonths().withSeasons()
  const { container } = render(<CalendarDataSettingsSummary settings={settings.build()} />)
  expect(container).toHaveTextContent("phrases, nouns, days, months and seasons")
})
