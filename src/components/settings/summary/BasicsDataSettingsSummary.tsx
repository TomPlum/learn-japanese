import BasicsSettings from "../../../domain/session/settings/data/BasicsSettings"
import KeyWordDataSummary from "./KeyWordDataSummary"

export interface BasicsDataSettingsSummaryProps {
  settings: BasicsSettings
  className?: string
}

const BasicsDataSettingsSummary = (props: BasicsDataSettingsSummaryProps) => {
  const { settings, className } = props

  const words = []

  if (settings.weather) words.push("weather")
  if (settings.body) words.push("body")
  if (settings.directions) words.push("directions")
  if (settings.animals) words.push("animals")
  if (settings.colours) words.push("colours")
  if (settings.family) words.push("family")

  return <KeyWordDataSummary words={words} className={className} />
}

export default BasicsDataSettingsSummary
