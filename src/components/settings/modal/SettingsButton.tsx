import { faExclamationCircle, faExclamationTriangle, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/sass/components/settings/modal/SettingsButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { useOnComponentBlur } from "../../../hooks";

export interface SettingsButtonProps {
    id?: string;
    name: string;
    className?: string;
    icon: IconDefinition;
    onClick?: () => void;
    confirm?: 'warn' | 'danger';
}

const SettingsButton = (props: SettingsButtonProps) => {

    const { id, name, icon, confirm, className, onClick } = props;

    const ref = useRef(null);

    const cancel = () => {
        setExtraClass("");
        setIsConfirming(false);
    }

    useOnComponentBlur(ref, cancel);

    const [extraClass, setExtraClass] = useState("");
    const [isConfirming, setIsConfirming] = useState(false);

    const handleClick = () => {
        if (confirm) {
            if (isConfirming) {
                onClick?.();
                cancel();
            } else {
                setIsConfirming(true);
                setExtraClass(confirm === 'warn' ? styles.warn : styles.danger);
            }
        } else {
            onClick?.();
        }
    }

    const title = isConfirming ? "Are you sure?" : "";
    const buttonText = isConfirming ? "Click to confirm" : name;
    const classes = [styles.button, className, extraClass].join(" ");
    const buttonIcon = isConfirming ? confirm === 'warn' ? faExclamationCircle : faExclamationTriangle : icon;

    return (
        <div ref={ref} className={classes} onClick={handleClick} title={title} data-testid={id}>
            <FontAwesomeIcon icon={buttonIcon} className={styles.icon} />
            <span className={styles.name}>{buttonText}</span>
        </div>
    );
}

export default SettingsButton;
