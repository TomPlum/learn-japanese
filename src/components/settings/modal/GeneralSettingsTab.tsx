import styles from "../../../styles/sass/components/settings/modal/GeneralSettingsTab.module.scss";

const GeneralSettingsTab = () => {
    return (
        <div data-testid="general-settings-tab">
            <p className={styles.title}>General Settings</p>
            <p className={styles.description}>
                General settings for common elements and actions around the app.
            </p>
            <hr className={styles.rule} />
        </div>
    );
}

export default GeneralSettingsTab;
