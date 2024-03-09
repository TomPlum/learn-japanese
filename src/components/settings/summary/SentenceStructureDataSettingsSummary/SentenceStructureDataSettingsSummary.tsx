import SentenceStructureSettings from "types/session/settings/data/SentenceStructureSettings"
import KeyWordDataSummary from "./../KeyWordDataSummary"

export interface SentenceStructureDataSettingsSummaryProps {
  settings: SentenceStructureSettings
  className?: string
}

const SentenceStructureDataSettingsSummary = (props: SentenceStructureDataSettingsSummaryProps) => {
  const { settings, className } = props

  const words = []

  if (settings.particles) words.push("particles")
  if (settings.adjectives) words.push("adjectives")
  if (settings.adverbs) words.push("adverbs")
  if (settings.nouns) words.push("nouns")
  if (settings.expressions) words.push("expressions")
  if (settings.verbs) words.push("verbs")

  return <KeyWordDataSummary words={words} className={className} />
}

export default SentenceStructureDataSettingsSummary
