import styles from "../../../../styles/sass/components/ui/buttons/favourite/ExistingFavouriteButton.module.scss";
import { Fade } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faTimes } from "@fortawesome/free-solid-svg-icons";
import Icon from "../../menu/icon/Icon";
import { useState } from "react";
import { CustomIcon } from "../../../../domain/Icon";

export interface ExistingFavouriteButtonProps {
    id: number;
    name: string;
    selected: boolean;
    className?: string;
    onRemove: (id: number) => void;
    onCancel: (id: number) => void;
    icon: CustomIcon;
}

const ExistingFavouriteButton = (props: ExistingFavouriteButtonProps) => {
    const { id, name, icon, selected, className, onRemove, onCancel } = props;

    const [inside, setInside] = useState(false);

    let classes = [styles.button, className, selected ? styles.delete : ""];
    const testId = `existing-favourite-button-${id}`;

    return (
        <div className={classes.join(" ")} data-testid={testId}>
            <div
                className={styles.surface}
                onMouseOut={() => setInside(false)}
                onMouseEnter={() => setInside(true)}
                onClick={() => selected ? onCancel(id) : onRemove(id)}
            />

            {inside && (
                <Fade in={inside} timeout={2000} appear>
                    <div className={styles.container}>
                        <FontAwesomeIcon
                            fixedWidth
                            icon={selected ? faTimes : faBan}
                            className={selected ? styles.times : styles.ban}
                        />
                        <span className={styles.name}>
                            {selected ? "Cancel" : "Remove"}
                        </span>
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

export default ExistingFavouriteButton;
