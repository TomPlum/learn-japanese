import styles from "../../../styles/sass/components/layout/wizard/GridItem.module.scss";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface GridItem {
    getShortName: () => string;
    getLongName: () => string;
}

export interface GridItemProps<T extends GridItem> {
    icon: IconDefinition | string;
    iconColour?: string;
    selected: string;
    className?: string;
    value: T,
    style?: {},
    small?: boolean;
    onClick: (mode: T) => void;
}

const GridItem = <T extends GridItem>(props: GridItemProps<T>) => {
    const { icon, value, selected, small, iconColour, className, style, onClick } = props;
    const isSelected = selected === value.getShortName() || selected === value.getLongName();
    const colour = isSelected ? iconColour : "#000"
    const buttonClass = [className, (isSelected ? styles.selected : styles.notSelected), styles.button].join(" ");

    const handleOnClick = () => onClick(value);

    const isFontAwesomeIcon = () => {
        return !(typeof icon === 'string');
    }

    return (
        <Button onClick={handleOnClick} className={buttonClass} style={style}>
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
    );
}

export default GridItem;
