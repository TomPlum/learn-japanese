import { useEffect, useState } from "react"
import { Kanji } from "../../../domain/kanji/Kanji"
import KanjiRepository from "../../../repository/KanjiRepository"
import Copyable from "../Copyable"
import Inspectable from "../Inspectable"
import KanjiReadingDisplay from "../../learn/kanji/KanjiReadingDisplay"
import { ReadingType } from "../../../domain/kanji/ReadingType"
import LoadingSpinner from "../loading/LoadingSpinner"
import styles from "../../../styles/sass/components/ui/display/InformationalKanji.module.scss"

export interface InformationalKanjiProps {
    value: string
    className?: string
}

const InformationalKanji = (props: InformationalKanjiProps) => {
    const { value, className } = props

    const [loading, setLoading] = useState(false)
    const [kanji, setKanji] = useState<Kanji>()

    useEffect(() => {
        setLoading(true)
        new KanjiRepository()
            .getByValue(value)
            .then((kanji) => {
                setKanji(kanji)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const overlay = (
        <div key={`${value}-popover`} data-testid={`${value}-information`}>
            <LoadingSpinner active={loading} variant="primary" />

            <KanjiReadingDisplay showRomaji={false} type={ReadingType.ON} readings={kanji?.getOnyomiReadings() ?? []} />

            <KanjiReadingDisplay
                showRomaji={false}
                type={ReadingType.KUN}
                readings={kanji?.getKunyomiReadings() ?? []}
            />
        </div>
    )

    const title = kanji?.getMeanings().slice(0, 4).join(", ") ?? "Loading..."
    const popover = { title: title, text: overlay, className: styles.popover }

    return (
        <Copyable className={className} placement="top" key={`copyable${value}`} inline>
            <Inspectable key={`inspectable-${value}`} placement="top" className={className} popover={popover}>
                <span key={value}>{value}</span>
            </Inspectable>
        </Copyable>
    )
}

export default InformationalKanji
