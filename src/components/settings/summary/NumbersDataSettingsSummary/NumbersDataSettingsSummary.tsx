import NumbersSettings from "../../../../domain/session/settings/data/NumbersSettings"
import KeyWordDataSummary from "./../KeyWordDataSummary"

export interface NumbersDataSettingsSummaryProps {
  settings: NumbersSettings
  className?: string
}

const NumbersDataSettingsSummary = (props: NumbersDataSettingsSummaryProps) => {
  const { settings, className } = props

  const words = []

  if (settings.sequence) words.push("sequence")
  if (settings.age) words.push("age")
  if (settings.counters) words.push("counters")
  if (settings.units) words.push("units")
  if (settings.exceptions) words.push("exceptions")
  if (settings.numbers) words.push("numbers")

  return <KeyWordDataSummary words={words} className={className} />
}

export default NumbersDataSettingsSummary
