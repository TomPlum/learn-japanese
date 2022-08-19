import { faCircleNotch, faQuestionCircle, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/sass/components/settings/modal/SettingsBooleanButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserService from "../../../service/UserService";
import { useUserDispatch, useUserSelector } from "../../../hooks";
import { Preference } from "../../../domain/user/Preference";
import { setPreference } from "../../../slices/UserSlice";
import { useState } from "react";

export interface BooleanStateProps {
    name: string;
    hover?: string;
    className?: string;
    icon: IconDefinition;
}

export interface SettingsBooleanButtonProps {
    id: string;
    truthy: BooleanStateProps;
    falsy: BooleanStateProps;
    preference: Preference;
    enableHoverColours?: boolean;
    onError?: (error: string) => void;
}

const SettingsBooleanButton = (props: SettingsBooleanButtonProps) => {
    const { id, truthy, falsy, preference, enableHoverColours, onError } = props;

    const service = new UserService();
    const userDispatch = useUserDispatch();
    const preferences = useUserSelector(state => state.user?.user?.preferences);

    const getUserPreferenceValue = (): boolean | undefined => {
        switch (preference) {
            case Preference.MISTAKES_REMINDERS: return preferences?.mistakesReminders;
            case Preference.STREAK_NOTIFICATIONS: return preferences?.streakNotifications;
            default: return undefined;
        }
    }

    const userPreferenceValue = getUserPreferenceValue();
    const selected = userPreferenceValue === undefined ? { name: "Unknown", icon: faQuestionCircle } : userPreferenceValue ? truthy : falsy;

    const [text, setText] = useState(selected.name);
    const [icon, setIcon] = useState(selected.icon);
    const [updating, setUpdating] = useState(false);

    const handleChange = () => {
        setUpdating(true);

        const request = {
            preference: preference,
            value: selected !== truthy
        };

        service.updatePreferences([{ preference, value: selected === truthy ? "false" : "true" }]).then(response => {
            if (response.success) {
                setText((selected === truthy ? falsy : truthy).name);
                userDispatch(setPreference(request));
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

    const handleMouseOver = () => {
        if (selected.hover) {
            setText(selected.hover);
            setIcon(selected === truthy ? falsy.icon : truthy.icon);
        }
    }

    const handleMouseOut = () => {
        setText(selected.name);
        setIcon(selected.icon);
    }

    const className = selected === truthy ? truthy.className : falsy.className;
    const colourClass = selected === falsy ? styles.truthy : styles.falsy;
    const classes = [styles.button, className];
    if (enableHoverColours) classes.push(colourClass);

    const buttonProps = {
        "data-testid": id,
        onClick: handleChange,
        onMouseOut: handleMouseOut,
        onMouseOver: handleMouseOver,
        className: classes.join(" ")
    }

    return (
        <div {...buttonProps}>
            <FontAwesomeIcon icon={icon} className={styles.icon} />

            <span className={styles.name}>{text}</span>

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
