import styles from "../../../styles/sass/components/layout/wizard/GridItem.module.scss";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import SessionMode from "../../../domain/session/SessionMode";

export interface GridItemProps {
    icon: IconDefinition | string;
    iconColour?: string;
    type: SessionMode;
    selected: SessionMode;
    className?: string;
    style?: {},
    onClick: (mode: SessionMode) => void;
}

const GridItem = (props: GridItemProps) => {
    const { icon, type, selected, iconColour, className, style, onClick } = props;
    const isSelected = selected.displayName === type.displayName;
    const colour = isSelected ? iconColour : "#000"
    const buttonClass = [className, (isSelected ? styles.selected : styles.notSelected), styles.button].join(" ");

    const handleOnClick = () => onClick(type);

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

            <p className={styles.name}>{type.displayName}</p>
        </Button>
    );
}

export default GridItem;
