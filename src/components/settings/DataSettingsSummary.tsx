import DataSettings from "../../domain/session/settings/data/DataSettings"
import KanaSettings from "../../domain/session/settings/data/KanaSettings"
import KanjiSettings from "../../domain/session/settings/data/KanjiSettings"
import NumbersSettings from "../../domain/session/settings/data/NumbersSettings"
import SentenceStructureSettings from "../../domain/session/settings/data/SentenceStructureSettings"
import CalendarSettings from "../../domain/session/settings/data/CalendarSettings"
import BasicsSettings from "../../domain/session/settings/data/BasicsSettings"
import styles from "../../styles/sass/components/settings/DataSettingsSummary.module.scss"
import KanaDataSettingsSummary from "./summary/KanaDataSettingsSummary"
import SentenceStructureDataSettingsSummary from "./summary/SentenceStructureDataSettingsSummary"
import CalendarDataSettingsSummary from "./summary/CalendarDataSettingsSummary"
import BasicsDataSettingsSummary from "./summary/BasicsDataSettingsSummary"
import KanjiDataSettingsSummary from "./summary/KanjiDataSettingsSummary"
import NumbersDataSettingsSummary from "./summary/NumbersDataSettingsSummary"

export interface DataSettingsSummaryProps {
  settings: DataSettings
}

const DataSettingsSummary = (props: DataSettingsSummaryProps) => {
  const { settings } = props

  const className = styles.word

  const isKanaSettings = (settings: DataSettings): settings is KanaSettings => {
    return (settings as KanaSettings).onlyDiagraphs !== undefined
  }

  const isKanjiSettings = (settings: DataSettings): settings is KanjiSettings => {
    return (settings as KanjiSettings).grades !== undefined
  }

  const isNumbersSettings = (settings: DataSettings): settings is NumbersSettings => {
    return (settings as NumbersSettings).sequence !== undefined
  }

  const isSentenceStructureSettings = (settings: DataSettings): settings is SentenceStructureSettings => {
    return (settings as SentenceStructureSettings).particles !== undefined
  }

  const isCalendarSettings = (settings: DataSettings): settings is CalendarSettings => {
    return (settings as CalendarSettings).phrases !== undefined
  }

  const isBasicsSettings = (settings: DataSettings): settings is BasicsSettings => {
    return (settings as BasicsSettings).weather !== undefined
  }

  if (isKanaSettings(settings)) {
    return <KanaDataSettingsSummary settings={settings} className={className} />
  } else if (isSentenceStructureSettings(settings)) {
    return <SentenceStructureDataSettingsSummary settings={settings} className={className} />
  } else if (isCalendarSettings(settings)) {
    return <CalendarDataSettingsSummary settings={settings} className={className} />
  } else if (isBasicsSettings(settings)) {
    return <BasicsDataSettingsSummary settings={settings} className={className} />
  } else if (isKanjiSettings(settings)) {
    return <KanjiDataSettingsSummary settings={settings} className={className} />
  } else if (isNumbersSettings(settings)) {
    return <NumbersDataSettingsSummary settings={settings} className={className} />
  }

  return null
}

export default DataSettingsSummary
