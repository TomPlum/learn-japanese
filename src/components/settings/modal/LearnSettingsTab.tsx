import SettingsTabTitle from "./SettingsTabTitle";
import styles from "../../../styles/sass/components/settings/modal/LearnSettingsTab.module.scss";
import { faCopy, faFont } from "@fortawesome/free-solid-svg-icons";
import SettingsDropdown from "./SettingsDropdown";

const LearnSettingsTab = () => {

    const handleCardQuantityChange = (cards: string) => {

    }

    const handleRomajiPreferenceChange = (preference: string) => {

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

            <div className={styles.section}>
                <p className={styles.heading}>Rōmaji Settings</p>
                <p className={styles.text}>
                    Set the default behaviour for showing rōmaji variants of kana.  Rōmaji or ローマ字 (rōmaji) is the
                    romanisation of the Japanese written language.
                </p>
                <SettingsDropdown
                    buttonIcon={faFont}
                    id="learn-settings-romaji-selector"
                    onChange={handleRomajiPreferenceChange}
                    options={[
                        { name: 'Always Show' },
                        { name: 'Ask Each Time' },
                        { name: 'Always Hide' }
                    ]}
                />
            </div>
        </div>
    );
}

export default LearnSettingsTab;
