import { faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../styles/sass/components/ui/buttons/FavouritesButton.module.scss";
import { useEffect, useState } from "react";
import { Fade } from "react-bootstrap";
import { Numbers } from "../../../utility/Numbers";
import Arrays from "../../../utility/Arrays";
import SessionMode from "../../../domain/session/SessionMode";
import Icon from "../menu/icon/Icon";
import PlayMode from "../../../domain/session/PlayMode";

export interface FavouriteButtonProps {
    preset: SessionMode;
    editing: boolean;
    className?: string;
    onDelete?: (preset: SessionMode) => void;
    onStart?: (preset: SessionMode) => void;
}

const FavouriteButton = (props: FavouriteButtonProps) => {

    const { preset, editing, className, onDelete, onStart } = props;

    const isPlay = preset instanceof PlayMode;
    const backgroundColourClass = isPlay ? styles.play : styles.learn;

    const [inside, setInside] = useState(false);
    const [classes, setClasses] = useState([styles.favourite, backgroundColourClass, className ?? ""]);

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
            onStart?.(preset);
        }
    }

    const testId = `favourite-button-${preset.displayName.toLowerCase().replace(" ", "-")}`;

    return (
        <div className={classes.join(" ")} data-testid={testId}>
            {!editing && (
                <div
                    onClick={handleStart}
                    className={styles.surface}
                    onMouseOut={handleMouseOut}
                    onMouseEnter={handleMouseEnter}
                />
            )}

            {editing && (
                <FontAwesomeIcon
                    title="Delete"
                    icon={faTimes}
                    className={styles.delete}
                    onClick={() => onDelete?.(preset)}
                />
            )}

            {!editing && inside && (
                <Fade in={inside} timeout={2000} appear>
                    <div className={styles.container}>
                        <FontAwesomeIcon icon={faStar} fixedWidth className={styles.star} />
                        <span className={styles.name}>Start {isPlay ? "Play" : "Learn"}</span>
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