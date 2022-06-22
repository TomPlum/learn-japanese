import SettingsTabTitle from "./SettingsTabTitle";
import styles from "../../../styles/sass/components/settings/modal/UserSettingsTab.module.scss";
import SettingsButton from "./SettingsButton";
import { faBookOpen, faCalendarCheck, faChartPie, faClock, faFireAlt, faGlobe, faGlobeAmericas, faMedal, faSkull, faUserFriends, faUserSecret, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faChrome, faFirefoxBrowser, faSafari } from "@fortawesome/free-brands-svg-icons";
import SettingsDropdown from "./SettingsDropdown";
import { useState } from "react";
import PasswordConfirmation from "../../user/profile/PasswordConfirmation";
import PopOver from "../../ui/PopOver";
import { isChrome, isFirefox, isSafari } from 'react-device-detect'
import UserService from "../../../service/UserService";
import { Preference } from "../../../domain/user/Preference";

const UserSettingsTab = () => {

    const userService = new UserService();

    const [confirmingPassword, setConfirmingPassword] = useState(false);

    if (confirmingPassword) {

        const deleteAccountPopover = <PopOver
            title="Delete Account"
            text="Delete your user account and all of your personal data. This is an irreversible operation.
                  You'll need to provide your password for confirmation."
        />

        return (
            <PasswordConfirmation
                alertInfo={deleteAccountPopover}
                onDismiss={() => setConfirmingPassword(false)}
            />
        );
    }

    const getBrowserIcon = (): IconDefinition => {
        if (isFirefox) {
            return faFirefoxBrowser;
        }

        if (isSafari) {
            return faSafari;
        }

        if (isChrome) {
            return faChrome;
        }

        return faGlobe;
    }

    return (
        <div data-testid="user-settings-tab">
            <SettingsTabTitle
                title="User Settings"
                description="Configure settings related to your user profile."
            />

            <div className={styles.section}>
                <p className={styles.heading}>Profile Visibility</p>
                <p className={styles.text}>
                    Change the visibility of your profile to other users. By default your username will be visible
                    to others on the high-scores (should you submit them). You can keep your info private or show it
                    to friends only.
                </p>
                <SettingsDropdown
                    id="profile-visibility-selector"
                    preference={Preference.PROFILE_VISIBILITY}
                    options={[
                        { name: "Friends Only", icon: faUserFriends },
                        { name: "Private", icon: faUserSecret },
                        { name: "Public", icon: faGlobeAmericas }
                    ]}
                />
            </div>

            <div className={styles.section}>
                <p className={styles.heading}>Streak Card Preference</p>
                <p className={styles.text}>
                    Choose which statistic is displayed on the dashboards streak card. Defaults to the date you
                    created your account. You can change it to your current streak or choose a custom date.
                </p>
                <SettingsDropdown
                    id="streak-card-preference-selector"
                    preference={Preference.STREAK_CARD_VIEW}
                    options={[
                        { name: "Start Date", icon: faCalendarCheck },
                        { name: "Streak", icon: faFireAlt },
                        { name: "Custom Date", icon: faClock }
                    ]}
                />
            </div>

            <div className={styles.dangerZone}>
                <SettingsTabTitle
                    title="Danger Zone"
                    className={styles.danger}
                    description="Destructive settings that you might want to think twice about!"
                />

                <div className={styles.section}>
                    <p className={styles.heading}>Clear Local Storage</p>
                    <p className={styles.text}>
                        Deletes all locally stored data from your browser except for your user session.
                        Does not permanently delete any saved data, but may increase loading times temporarily.
                    </p>
                    <SettingsButton name="Clear Storage" icon={getBrowserIcon()} confirm="warn" />
                </div>

                <div className={styles.section}>
                    <p className={styles.heading}>Reset High-Scores</p>
                    <p className={styles.text}>
                        Resets all your saved scores across the app. Any ranks you currently hold on the high-scores will be lost.
                    </p>
                    <SettingsButton name="Reset Scores" icon={faMedal} confirm="warn" />
                </div>

                <div className={styles.section}>
                    <p className={styles.heading}>Reset Statistics</p>
                    <p className={styles.text}>
                        Resets all your tracked statistics such as games played or won. This does not include flash card data.
                    </p>
                    <SettingsButton name="Reset Stats" icon={faChartPie} confirm="warn" />
                </div>

                <div className={styles.section}>
                    <p className={styles.heading}>Reset Flash Cards</p>
                    <p className={styles.text}>
                        Resets all your flash card data. Does not affect stats.
                    </p>
                    <SettingsButton name="Reset Cards" icon={faBookOpen} confirm="warn" />
                </div>

                <div className={styles.section}>
                    <p className={styles.heading}>Delete Account</p>
                    <p className={styles.text}>
                        Delete your user account and all of your personal data. This is an irreversible operation.
                        You'll need to provide your password for confirmation.
                    </p>
                    <SettingsButton
                        name="Delete Account"
                        icon={faSkull} confirm="danger"
                        onClick={() => setConfirmingPassword(true)}
                    />
                </div>
            </div>
        </div>
    )
}

export default UserSettingsTab;
