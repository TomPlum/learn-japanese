import { PropsWithChildren } from "react"
import ComponentTree from "../../../utility/ComponentTree"
import Underline, { UnderlineStrategy } from "../Underline"
import styles from "../../../styles/sass/components/ui/genki/GenkiUnderlineDisplay.module.scss"

export interface GenkiUnderlineDisplayProps {
    underline?: UnderlineStrategy
    book: number
    className?: string
}

const GenkiUnderlineDisplay = (props: PropsWithChildren<GenkiUnderlineDisplayProps>) => {
    const { underline, book, className, children } = props

    const value: string = new ComponentTree(children).getDeepestLeafNode()
    const underlineClass = book == 1 ? styles.genkiOneUnderline : styles.genkiTwoUnderline

    return (
        <Underline strategy={underline} underlineClass={[underlineClass, className].join(" ")}>
            <span>{value}</span>
        </Underline>
    )
}

export default GenkiUnderlineDisplay
