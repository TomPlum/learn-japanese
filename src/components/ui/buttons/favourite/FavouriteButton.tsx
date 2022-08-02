import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../../styles/sass/components/ui/buttons/favourite/FavouritesButton.module.scss";
import { useState } from "react";
import { Fade } from "react-bootstrap";
import SessionMode from "../../../../domain/session/SessionMode";
import Icon from "../../menu/icon/Icon";
import PlayMode from "../../../../domain/session/PlayMode";
import LoadingDots from "../../loading/LoadingDots";
import { useTranslation } from "react-i18next";

export interface FavouriteButtonProps {
    preset: SessionMode;
    className?: string;
    selected: boolean;
    onStart?: (preset: SessionMode) => void;
}

const FavouriteButton = (props: FavouriteButtonProps) => {

    const { preset, selected, className, onStart } = props;

    const isPlay = preset instanceof PlayMode;
    const backgroundColourClass = isPlay ? styles.play : styles.learn;

    const [inside, setInside] = useState(false);
    const { t, ready } = useTranslation();

    const handleMouseEnter = () => {
        setInside(true);
    }

    const handleMouseOut = () => {
        setInside(false);
    }

    const handleStart = () => {
        onStart?.(preset);
    }

    const testId = `favourite-button-${preset.favourite_id}`;

    return (
        <div className={[styles.favourite, backgroundColourClass, className ?? ""].join(" ")} data-testid={testId}>
            <div
                onClick={handleStart}
                className={styles.surface}
                onMouseOut={handleMouseOut}
                onMouseEnter={handleMouseEnter}
            />

            {(selected || !ready) && (
                <div className={styles.container}>
                    <LoadingDots type="flashing" className={styles.loading} colour="#FFF" />
                </div>
            )}

            {inside && (
                <Fade in={inside} timeout={2000} appear>
                    <div className={styles.container}>
                        <FontAwesomeIcon icon={faPlay} fixedWidth className={styles.playIcon} />
                        <span className={styles.name}>{t(`presets.${isPlay ? "play" : "learn"}.start`)}</span>
                    </div>
                </Fade>
            )}

            {!inside && !selected && ready && (
                <Fade in={!inside} timeout={2000} appear>
                    <div className={styles.container}>
                        <Icon value={preset.icon} className={styles.icon} />
                        <span className={styles.name}>{ready ? t(preset.displayName) : ""}</span>
                    </div>
                </Fade>
            )}
        </div>
    );
}

export default FavouriteButton;
