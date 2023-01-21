import { useState } from "react"
import { KanjiReading } from "../../../domain/kanji/KanjiReading"
import Inspectable from "../../ui/Inspectable"
import { Environment } from "../../../utility/Environment"
import { ReadingType } from "../../../domain/kanji/ReadingType"
import commonStyles from "../../../styles/sass/components/learn/kanji/KanjiFlashCardBack.module.scss"
import styles from "../../../styles/sass/components/learn/kanji/KanjiReadingDisplay.module.scss"
import SpinnerController from "../../ui/SpinnerController"
import Copyable from "../../ui/Copyable"

export interface KanjiReadingDisplayProps {
    type: ReadingType
    showRomaji: boolean
    readings: KanjiReading[]
}

const KanjiReadingDisplay = (props: KanjiReadingDisplayProps) => {
    const { type, readings, showRomaji } = props

    const [selected, setSelected] = useState(readings[0])

    const getReadingFormatted = (): string => {
        let formatted = selected?.kana ?? "N/A"

        if (showRomaji) {
            formatted += ` (${selected.romaji})`
        }

        return formatted
    }

    const getTitle = () => {
        switch (type) {
            case ReadingType.ON:
                return "On-yomi Reading"
            case ReadingType.KUN:
                return "Kun-yomi Reading"
        }
    }

    const getText = () => {
        switch (type) {
            case ReadingType.ON:
                return Environment.variable("ONYOMI_DESC")
            case ReadingType.KUN:
                return Environment.variable("KUNYOMI_DESC")
        }
    }

    return (
        <div className={styles.wrapper}>
            <SpinnerController
                values={readings}
                onChange={(value: KanjiReading) => setSelected(value)}
                disabledTitle={`This kanji has only one Jōyō ${type.toLowerCase()} reading`}
            />

            <span className={[commonStyles.text, styles.reading].join(" ")}>
                <Inspectable popover={{ title: getTitle(), text: getText() }}>
                    <span className={commonStyles.label}>{type}</span>
                </Inspectable>

                {readings.length > 0 ? (
                    <>
                        <span>: </span>
                        <Copyable inline>
                            <span>{getReadingFormatted()}</span>
                        </Copyable>
                    </>
                ) : (
                    <span title={`This kanji has no ${type.toLowerCase()} reading`}>: N/A</span>
                )}
            </span>
        </div>
    )
}

export default KanjiReadingDisplay
