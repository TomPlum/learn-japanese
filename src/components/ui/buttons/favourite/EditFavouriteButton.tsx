import styles from "../../../../styles/sass/components/ui/buttons/favourite/EditFavouriteButton.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTimes, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-bootstrap";
import Icon from "../../menu/icon/Icon";
import { Icon as IconType } from "../../../../domain/Icon";

export interface EditFavouriteButtonProps {
    id: number;
    name: string;
    selected: boolean;
    className?: string;
    onAdd: (id: number) => void;
    onCancel: (id: number) => void;
    icon: IconDefinition | IconType | string;
}

const EditFavouriteButton = (props: EditFavouriteButtonProps) => {
    const { id, name, icon, selected, className, onAdd, onCancel } = props;

    const [inside, setInside] = useState(false);

    const classes = [styles.button, selected ? styles.selected : ""];
    if (className) classes.push(className);

    const handleClick = () => selected ? onCancel(id) : onAdd(id);

    const testId = `edit-favourite-button-${id}`;

    return (
        <div className={classes.join(" ")} data-testid={testId}>
            <div
                onClick={handleClick}
                className={styles.surface}
                onMouseOut={() => setInside(false)}
                onMouseEnter={() => setInside(true)}
            />

            {inside && (
                <Fade in={inside} timeout={2000} appear>
                    <div className={styles.container}>
                        <FontAwesomeIcon
                            fixedWidth
                            icon={selected ? faTimes : faStar}
                            className={selected ? styles.delete : styles.star}
                        />
                        <span className={styles.name}>{selected ? "Cancel" : "Favourite"}</span>
                    </div>
                </Fade>
            )}

            {!inside && (
                <Fade in={!inside} timeout={2000} appear>
                    <div className={styles.container}>
                        <Icon value={icon} className={styles.icon} />
                        <span className={styles.name}>{name}</span>
                    </div>
                </Fade>
            )}
        </div>
    );
}

export default EditFavouriteButton;
