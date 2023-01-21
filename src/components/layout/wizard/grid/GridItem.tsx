import styles from "../../../../styles/sass/components/layout/wizard/grid/GridItem.module.scss"
import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog } from "@fortawesome/free-solid-svg-icons"
import Inspectable from "../../../ui/Inspectable"
import ConditionalWrapper from "../../../ui/ConditionalWrapper"
import { CustomIcon } from "../../../../domain/Icon"
import Icon from "../../../ui/menu/icon/Icon"
import { useTranslation } from "react-i18next"

export interface GridItem {
    getShortName: () => string
    getLongName: () => string
}

export interface GridItemProps<T extends GridItem> {
    value: T
    style?: {}
    id: string
    desc?: string
    small?: boolean
    icon: CustomIcon
    selected: string
    editable?: boolean
    className?: string
    iconColour?: string
    onEdit?: () => void
    onClick: (mode: T) => void
}

const GridItem = <T extends GridItem>(props: GridItemProps<T>) => {
    const { id, icon, value, selected, desc, small, iconColour, className, style, editable, onEdit, onClick } = props

    const { t } = useTranslation()
    const shortName = t(value.getShortName())
    const longName = t(value.getLongName())
    const isSelected = t(selected) === shortName || t(selected) === longName
    const colour = isSelected ? iconColour : "#000"
    const popover = { title: longName, text: desc! }
    const buttonClass = [className, isSelected ? styles.selected : styles.notSelected, styles.button].join(" ")

    const handleOnClick = () => onClick(value)

    return (
        <ConditionalWrapper
            condition={isSelected && !!desc}
            wrapper={(button) => (
                <Inspectable popover={popover} placement="bottom" className={styles.inspectable} disableUnderline>
                    {button}
                </Inspectable>
            )}
        >
            <Button onClick={handleOnClick} className={buttonClass} style={style} data-testid={`grid-item-${id}`}>
                {editable && <FontAwesomeIcon icon={faCog} className={styles.edit} onClick={onEdit} title="Edit" />}

                <Icon value={icon} style={{ color: colour }} className={styles.icon} />

                <p className={styles.name}>{small ? shortName : longName}</p>
            </Button>
        </ConditionalWrapper>
    )
}

export default GridItem
