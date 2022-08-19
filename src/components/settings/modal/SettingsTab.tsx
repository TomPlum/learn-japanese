import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../styles/sass/components/settings/modal/SettingsTab.module.scss";
import { SettingsType } from "./SettingsModal";

export interface SettingsTabProps {
    title: string;
    selected?: boolean;
    type: SettingsType;
    icon: IconDefinition;
    onClick: (type: SettingsType) => void;
}

const SettingsTab = (props: SettingsTabProps) => {

    const { icon, title, selected, type, onClick } = props;

    const classNames = [styles.container];
    if (selected) classNames.push(styles.selected);

    return (
        <div className={classNames.join(" ")} title={title} onClick={() => onClick(type)}>
            <FontAwesomeIcon icon={icon} fixedWidth className={styles.icon} />
        </div>
    );
}

export default SettingsTab;
