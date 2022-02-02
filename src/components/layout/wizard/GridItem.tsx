import styles from "../../../styles/sass/components/layout/wizard/GridItem.module.scss";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface GridItemProps<T> {
    icon: IconDefinition | string;
    iconColour?: string;
    name: string;
    selected: string;
    className?: string;
    value: T,
    style?: {},
    onClick: (mode: T) => void;
}

const GridItem = <T,>(props: GridItemProps<T>) => {
    const { icon, name, value, selected, iconColour, className, style, onClick } = props;
    const isSelected = selected === name;
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
                    icon={icon as IconDefinition}
                    fixedWidth
                    className={styles.icon}
                    style={{ color: colour }}
                />
            }

            {!isFontAwesomeIcon() &&
                <span className={styles.textIcon} style={{ color: colour }}>
                    {icon}
                </span>
            }

            <p className={styles.name}>{name}</p>
        </Button>
    );
}

export default GridItem;
