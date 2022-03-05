import styles from "../../../../styles/sass/components/layout/wizard/grid/GridItem.module.scss";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Inspectable from "../../../ui/Inspectable";
import ConditionalWrapper from "../../../ui/ConditionalWrapper";

export interface GridItem {
    getShortName: () => string;
    getLongName: () => string;
}

export interface GridItemProps<T extends GridItem> {
    value: T,
    style?: {},
    desc?: string,
    small?: boolean;
    selected: string;
    editable?: boolean;
    className?: string;
    iconColour?: string;
    onEdit?: () => void;
    onClick: (mode: T) => void;
    icon: IconDefinition | string;
}

const GridItem = <T extends GridItem>(props: GridItemProps<T>) => {
    const { icon, value, selected, desc, small, iconColour, className, style, editable, onEdit, onClick } = props;

    const isSelected = selected === value.getShortName() || selected === value.getLongName();
    const colour = isSelected ? iconColour : "#000"
    const popover = { title: value.getLongName(), text: desc! };
    const buttonClass = [className, (isSelected ? styles.selected : styles.notSelected), styles.button].join(" ");

    const handleOnClick = () => onClick(value);

    const isFontAwesomeIcon = () => {
        return !(typeof icon === 'string');
    }

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

                {isFontAwesomeIcon() &&
                    <FontAwesomeIcon
                        fixedWidth
                        className={styles.icon}
                        style={{ color: colour }}
                        icon={icon as IconDefinition}
                    />
                }

                {!isFontAwesomeIcon() &&
                    <span className={styles.textIcon} style={{ color: colour }}>
                        {icon}
                    </span>
                }

                <p className={styles.name}>{small ? value.getShortName() : value.getLongName()}</p>
            </Button>
        </ConditionalWrapper>
    );
}

export default GridItem;
