import { faStar, faTimes, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../styles/sass/components/ui/buttons/FavouritesButton.module.scss";
import { useEffect, useState } from "react";
import { Fade } from "react-bootstrap";
import { Numbers } from "../../../utility/Numbers";
import Arrays from "../../../utility/Arrays";

export interface FavouriteButtonProps {
    name: string;
    editing: boolean;
    className?: string;
    icon: IconDefinition;
    onDelete?: () => void;
    onStart?: () => void;
}

const FavouriteButton = (props: FavouriteButtonProps) => {

    const { name, editing, className, icon, onDelete, onStart } = props;

    const [inside, setInside] = useState(false);
    const [classes, setClasses] = useState([styles.favourite, className ?? ""]);

    useEffect(() => {
        if (editing) {
            setTimeout(() => {
                setClasses(existing => {
                    return Arrays.remove(existing.concat(styles.shake), styles.pause);
                });
            }, Numbers.randomInt(50, 1000));
        } else {
            setClasses(existing => {
                return Arrays.remove(existing, styles.shake).concat(styles.pause);
            });
        }
    }, [editing]);

    const handleMouseEnter = () => {
        if (!editing) {
            setInside(true);
        }
    }

    const handleMouseOut = () => {
        setInside(false);
    }

    const handleStart = () => {
        if (inside && !editing) {
            onStart?.();
        }
    }

    return (
        <div className={classes.join(" ")} onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} onClick={handleStart}>
            {editing && (
                <FontAwesomeIcon
                    title="Delete"
                    icon={faTimes}
                    onClick={onDelete}
                    className={styles.delete}
                />
            )}

            {!editing && inside && (
                <Fade in={inside} timeout={1000} appear>
                    <div className={styles.container}>
                        <FontAwesomeIcon icon={faStar} fixedWidth className={styles.star} />
                        <span className={styles.name}>Start</span>
                    </div>
                </Fade>
            )}

            {!inside && (
                <Fade in={!inside} timeout={1000} appear>
                    <div className={styles.container}>
                        <FontAwesomeIcon icon={icon} fixedWidth className={styles.icon} />
                        <span className={styles.name}>{name}</span>
                    </div>
                </Fade>
            )}
        </div>
    );
}

export default FavouriteButton;
