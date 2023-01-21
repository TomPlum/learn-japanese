import { PropsWithChildren } from "react"
import { Button } from "react-bootstrap"
import styles from "../../../styles/sass/components/ui/buttons/KanaQuantityButton.module.scss"
import { useTranslation } from "react-i18next"

interface KanaQuantityButtonProps {
    cards: number
    selected: number
    onClick: (quantity: number) => void
}

const KanaQuantityButton = (props: PropsWithChildren<KanaQuantityButtonProps>) => {
    const { cards, selected, children, onClick } = props

    const { t } = useTranslation("translation", { keyPrefix: "wizard.steps.question.cards-quantity" })

    return (
        <Button onClick={() => onClick(cards)} className={selected === cards ? styles.selected : styles.notSelected}>
            {children}
            <p className={styles.name}>{t(cards.toString())}</p>
        </Button>
    )
}

export default KanaQuantityButton
