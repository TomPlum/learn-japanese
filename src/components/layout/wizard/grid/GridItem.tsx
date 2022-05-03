import styles from "../../../../styles/sass/components/layout/wizard/grid/GridItem.module.scss";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Inspectable from "../../../ui/Inspectable";
import ConditionalWrapper from "../../../ui/ConditionalWrapper";
import { CustomIcon } from "../../../../domain/Icon";
import Icon from "../../../ui/menu/icon/Icon";

export interface GridItem {
    getShortName: () => string;
    getLongName: () => string;
}

export interface GridItemProps<T extends GridItem> {
    value: T,
    style?: {},
    desc?: string,
    small?: boolean;
    icon: CustomIcon;
    selected: string;
    editable?: boolean;
    className?: string;
    iconColour?: string;
    onEdit?: () => void;
    onClick: (mode: T) => void;
}

const GridItem = <T extends GridItem>(props: GridItemProps<T>) => {
    const { icon, value, selected, desc, small, iconColour, className, style, editable, onEdit, onClick } = props;

    const isSelected = selected === value.getShortName() || selected === value.getLongName();
    const colour = isSelected ? iconColour : "#000"
    const popover = { title: value.getLongName(), text: desc! };
    const buttonClass = [className, (isSelected ? styles.selected : styles.notSelected), styles.button].join(" ");

    const handleOnClick = () => onClick(value);

    return (
        <ConditionalWrapper condition={isSelected && !!desc} wrapper={button =>
            <Inspectable popover={popover} placement="bottom" className={styles.inspectable} disableUnderline>
                {button}
            </Inspectable>
        }>
            <Button onClick={handleOnClick} className={buttonClass} style={style}>
                {editable &&
                    <FontAwesomeIcon icon={faCog} className={styles.edit} onClick={onEdit} title="Edit" />
                }

                <Icon value={icon} style={{ color: colour }} className={styles.icon} />

                <p className={styles.name}>{small ? value.getShortName() : value.getLongName()}</p>
            </Button>
        </ConditionalWrapper>
    );
}

export default GridItem;
