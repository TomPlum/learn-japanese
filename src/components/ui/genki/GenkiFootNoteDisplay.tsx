import styles from "../../../styles/sass/components/ui/genki/GenkiFootNoteDisplay.module.scss"
import { PropsWithChildren } from "react"

export interface GenkiFootNoteDisplayProps {
    reference: number
    book: number
    className?: string
}

const GenkiFootNoteDisplay = (props: PropsWithChildren<GenkiFootNoteDisplayProps>) => {
    const { children, reference, book, className } = props

    const refClass = book === 1 ? styles.refBookOne : styles.refBookTwo

    return (
        <div className={[styles.container, className].join(" ")} data-testid="genki-foot-note">
            <span className={refClass} data-testid="genki-foot-note-ref">
                {reference}
            </span>
            <i className={styles.text}>{children}</i>
        </div>
    )
}

export default GenkiFootNoteDisplay
