import CalendarSettings from "../../../../domain/session/settings/data/CalendarSettings"
import KeyWordDataSummary from "./../KeyWordDataSummary"

export interface CalendarDataSettingsSummaryProps {
  settings: CalendarSettings
  className?: string
}

const CalendarDataSettingsSummary = (props: CalendarDataSettingsSummaryProps) => {
  const { settings, className } = props

  const words = []

  if (settings.phrases) words.push("phrases")
  if (settings.nouns) words.push("nouns")
  if (settings.days) words.push("days")
  if (settings.months) words.push("months")
  if (settings.seasons) words.push("seasons")

  return <KeyWordDataSummary words={words} className={className} />
}

export default CalendarDataSettingsSummary
