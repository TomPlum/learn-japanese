import { faSmile, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/sass/components/settings/modal/SettingsButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface SettingsButtonProps {
    name: string;
    icon: IconDefinition;
    className?: string;
    onClick?: () => void;
}

const SettingsButton = (props: SettingsButtonProps) => {

    const { name, icon, className, onClick } = props;

    return (
        <div className={[styles.button, className].join(" ")} onClick={onClick}>
            <FontAwesomeIcon icon={icon} className={styles.icon} />
            <span className={styles.name}>{name}</span>
        </div>
    );
}

export default SettingsButton;
