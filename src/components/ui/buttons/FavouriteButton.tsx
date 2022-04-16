import { faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../styles/sass/components/ui/buttons/FavouritesButton.module.scss";
import { useEffect, useState } from "react";
import { Fade } from "react-bootstrap";
import { Numbers } from "../../../utility/Numbers";
import Arrays from "../../../utility/Arrays";
import SessionMode from "../../../domain/session/SessionMode";
import Icon from "../menu/icon/Icon";

export interface FavouriteButtonProps {
    preset: SessionMode;
    editing: boolean;
    className?: string;
    onDelete?: () => void;
    onStart?: () => void;
}

const FavouriteButton = (props: FavouriteButtonProps) => {

    const { preset, editing, className, onDelete, onStart } = props;

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
        <div className={classes.join(" ")}>
            <div
                onClick={handleStart}
                className={styles.surface}
                onMouseOut={handleMouseOut}
                onMouseEnter={handleMouseEnter}
            />

            {editing && (
                <FontAwesomeIcon
                    title="Delete"
                    icon={faTimes}
                    onClick={onDelete}
                    className={styles.delete}
                />
            )}

            {!editing && inside && (
                <Fade in={inside} timeout={2000} appear>
                    <div className={styles.container}>
                        <FontAwesomeIcon icon={faStar} fixedWidth className={styles.star} />
                        <span className={styles.name}>Start</span>
                    </div>
                </Fade>
            )}

            {!inside && (
                <Fade in={!inside} timeout={2000} appear>
                    <div className={styles.container}>
                        <Icon value={preset.icon} className={styles.icon} />
                        <span className={styles.name}>{preset.displayName}</span>
                    </div>
                </Fade>
            )}
        </div>
    );
}

export default FavouriteButton;
