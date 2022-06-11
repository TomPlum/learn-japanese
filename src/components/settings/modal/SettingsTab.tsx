import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../styles/sass/components/settings/modal/SettingsTab.module.scss";

export interface SettingsTabProps {
    icon: IconDefinition;
    selected?: boolean;
    title: string;
}

const SettingsTab = (props: SettingsTabProps) => {

    const { icon, title, selected } = props;

    const classNames = [styles.container];
    if (selected) classNames.push(styles.selected);

    return (
        <div className={classNames.join(" ")} title={title}>
            <FontAwesomeIcon icon={icon} fixedWidth className={styles.icon} />
        </div>
    );
}

export default SettingsTab;
