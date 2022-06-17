import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/sass/components/settings/modal/SettingsBooleanButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface BooleanStateProps {
    name: string;
    className?: string;
    icon: IconDefinition;
}

export interface SettingsBooleanButtonProps {
    state: boolean;
    truthy: BooleanStateProps;
    falsy: BooleanStateProps;
    onClick?: (state: boolean) => void;
}

const SettingsBooleanButton = (props: SettingsBooleanButtonProps) => {
    const { state, truthy, falsy, onClick } = props;

    const name = state ? truthy.name : falsy.name;
    const icon = state ? truthy.icon : falsy.icon;
    const className = state ? truthy.className : falsy.className;

    return (
        <div className={[styles.button, className].join(" ")} onClick={() => onClick?.(!state)}>
            <FontAwesomeIcon icon={icon} className={styles.icon} />
            <span className={styles.name}>{name}</span>
        </div>
    );
}

export default SettingsBooleanButton;
