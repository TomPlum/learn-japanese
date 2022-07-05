import { faCircleNotch, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/sass/components/settings/modal/SettingsBooleanButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserService from "../../../service/UserService";
import { useUserDispatch, useUserSelector } from "../../../hooks";
import { Preference } from "../../../domain/user/Preference";
import { setPreference } from "../../../slices/UserSlice";
import { useState } from "react";

export interface BooleanStateProps {
    name: string;
    className?: string;
    icon: IconDefinition;
}

export interface SettingsBooleanButtonProps {
    truthy: BooleanStateProps;
    falsy: BooleanStateProps;
    preference: Preference;
    enableHoverColours?: boolean;
    onError?: (error: string) => void;
}

const SettingsBooleanButton = (props: SettingsBooleanButtonProps) => {
    const { truthy, falsy, preference, enableHoverColours, onError } = props;
    const [updating, setUpdating] = useState(false);

    const service = new UserService();
    const userDispatch = useUserDispatch();
    const preferences = useUserSelector(state => state.user?.user?.preferences);

    const getUserPreferenceValue = (): boolean | undefined => {
        switch (preference) {
            case Preference.MISTAKES_REMINDERS: return preferences?.mistakesReminders;
            case Preference.STREAK_NOTIFICATIONS: return preferences?.streakNotifications;
        }
    }

    const selected = getUserPreferenceValue() ? truthy : falsy ?? { name: "Unknown" };

    const handleChange = () => {
        setUpdating(true);

        const newValue = selected === truthy ? falsy : truthy;
        service.updatePreferences([{ preference, value: newValue === truthy ? "true" : "false" }]).then(response => {
            if (response.success) {
                userDispatch(setPreference({ preference, value: newValue.name }));
            } else {
                handleUpdateError(response);
            }
        }).catch(response => {
            handleUpdateError(response);
        }).finally(() => {
            setUpdating(false);
        });
    }

    const handleUpdateError = (response: any) => {
        onError?.(response.error ?? "Failed to update preference.");
    }

    const className = selected === truthy ? truthy.className : falsy.className;
    const colourClass = selected === falsy ? styles.falsy : styles.truthy;
    const classes = [styles.button, className];
    if (enableHoverColours) classes.push(colourClass)

    return (
        <div className={classes.join(" ")} onClick={handleChange}>
            <FontAwesomeIcon icon={selected.icon} className={styles.icon} />
            <span className={styles.name}>{selected.name}</span>

            {updating && (
                <FontAwesomeIcon
                    spin
                    icon={faCircleNotch}
                    className={styles.updating}
                    data-testid="settings-boolean-button-spinner"
                />
            )}
        </div>
    );
}

export default SettingsBooleanButton;
