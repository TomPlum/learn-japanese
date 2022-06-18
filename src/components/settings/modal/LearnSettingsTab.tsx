import SettingsTabTitle from "./SettingsTabTitle";
import styles from "../../../styles/sass/components/settings/modal/LearnSettingsTab.module.scss";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import SettingsDropdown from "./SettingsDropdown";

const LearnSettingsTab = () => {

    const handleCardQuantityChange = (cards: string) => {

    }

    return (
        <div data-testid="learn-settings-tab">
            <SettingsTabTitle
                title="Learn Settings"
                description="Configure settings related to learning Japanese."
            />

            <div className={styles.section}>
                <p className={styles.heading}>Flash Cards Per Day</p>
                <p className={styles.text}>
                    Set the number of new flash cards you wish to see per day. New cards will only be issued if your
                    deck is active and you have no outstanding cards to be reviewed.
                </p>
                <SettingsDropdown
                    buttonIcon={faCopy}
                    id="learn-settings-cards-selector"
                    onChange={handleCardQuantityChange}
                    options={[
                        { name: '10' },
                        { name: '20' },
                        { name: '30' },
                        { name: '40' },
                        { name: '50' }
                    ]}
                />
            </div>
        </div>
    );
}

export default LearnSettingsTab;
