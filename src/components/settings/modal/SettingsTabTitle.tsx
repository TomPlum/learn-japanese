import styles from "../../../styles/sass/components/settings/modal/SettingsTabTitle.module.scss";

export interface SettingsTabTitleProps {
    title: string;
    className?: string;
    description: string;
}

const SettingsTabTitle = (props: SettingsTabTitleProps) => {
    const { title, description, className } = props;

    return (
        <div className={className}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
            <hr className={styles.rule} />
        </div>
    );
}

export default SettingsTabTitle;
