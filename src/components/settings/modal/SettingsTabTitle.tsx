import styles from "../../../styles/sass/components/settings/modal/SettingsTabTitle.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export interface SettingsTabCloseProps {
    className?: string;
    onClick: () => void;
}

export interface SettingsTabTitleProps {
    title: string;
    className?: string;
    description: string;
    close?: SettingsTabCloseProps;
}

const SettingsTabTitle = (props: SettingsTabTitleProps) => {
    const { title, description, className, close } = props;

    return (
        <div className={[className, styles.container].join(" ")}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
            <hr className={styles.rule} />
            {close && (
                <FontAwesomeIcon
                    title="Close"
                    icon={faTimes}
                    onClick={close.onClick}
                    data-testid="close-settings-tab"
                    className={[close.className, styles.close].join(" ")}
                />
            )}
        </div>
    );
}

export default SettingsTabTitle;
