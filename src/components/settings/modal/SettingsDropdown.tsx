import styles from "../../../styles/sass/components/settings/modal/SettingsDropdown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faCircleNotch, faSpinner, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";
import UserService from "../../../service/UserService";
import { Preference } from "../../../domain/user/Preference";
import { useUserDispatch, useUserSelector } from "../../../hooks";
import { setPreference } from "../../../slices/UserSlice";

export interface SettingsDropdownOption {
    style?: {};
    name: string;
    value?: string;
    className?: string;
    icon?: IconDefinition;
}

export interface SettingsDropdownProps {
    id: string;
    loading?: boolean;
    preference: Preference
    buttonIcon?: IconDefinition;
    options: SettingsDropdownOption[];
    onChange?: (value: string) => void;
    onError?: (error: string) => void;
}

const SettingsDropdown = (props: SettingsDropdownProps) => {
    const { id, preference, loading, buttonIcon, options, onChange, onError } = props;

    const service = new UserService();
    const userDispatch = useUserDispatch();
    const preferences = useUserSelector(state => state.user?.user?.preferences);

    const getUserPreferenceValue = () => {
        switch (preference) {
            case Preference.DEFAULT_KANJI_FONT: return preferences?.kanjiFont;
            case Preference.CONFIDENCE_MENU_STYLE: return preferences?.confidenceMenuStyle;
            case Preference.PROFILE_VISIBILITY: return preferences?.profileVisibility;
            case Preference.LANGUAGE: return preferences?.language;
            case Preference.ROMAJI_VISIBILITY: return preferences?.romajiVisibility;
            case Preference.HIGH_SCORES_BEHAVIOUR: return preferences?.highScoresBehaviour;
            case Preference.FLASH_CARDS_QUANTITY: return preferences?.flashCardsQuantity;
            case Preference.STREAK_CARD_VIEW: return preferences?.streakCardView;
            case Preference.ACTIVITY_FEED_QUANTITY: return preferences?.activityFeedQuantity;
            case Preference.THEME: return preferences?.theme;
        }
    }

    const getSelectedPreferenceValue = () => options.find(it => it.value ?? it.name === getUserPreferenceValue()?.toString()) ?? { name: "Unknown" };

    const selected = getSelectedPreferenceValue();

    const target = useRef(null);
    const [show, setShow] = useState(false);
    const [updating, setUpdating] = useState(false);

    const handleChange = (option: SettingsDropdownOption) => {
        setShow(false);
        setUpdating(true);

        const value = option.value ?? option.name;

        service.updatePreferences([{ preference, value: value }]).then(response => {
            if (response.success) {
                onChange?.(value);
                userDispatch(setPreference({ preference, value: value }));
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

    const handleClick = () => {
        if (!updating) {
            setShow(true);
        }
    }

    const handleHide = () => {
        setShow(false);
    }

    const chevronClasses = [styles.chevron];
    if (show) chevronClasses.push(styles.inspect);

    const buttonClasses = [styles.button];
    if (show) buttonClasses.push(styles.active);
    if (updating) buttonClasses.push(styles.disabled);

    const title = updating ? "Saving your selection..." : "Click to see options";

    return (
        <>
            <div ref={target} className={buttonClasses.join(" ")} onClick={handleClick} title={title} data-testid={id}>
                {loading && (
                    <FontAwesomeIcon icon={faSpinner} spin={true} data-testid="settings-dropdown-loading" />
                )}

                {!loading && !!selected && (
                    <>
                        {buttonIcon && (
                            <FontAwesomeIcon icon={buttonIcon} className={styles.icon} />
                        )}

                        {!buttonIcon && selected.icon && (
                            <FontAwesomeIcon icon={selected.icon} className={styles.icon} />
                        )}

                        <span className={styles.name} data-testid="settings-dropdown-selected">
                            {selected.name}
                        </span>

                        {!updating && (
                            <span className={chevronClasses.join(" ")} data-testid="settings-dropdown-chevron">
                                <FontAwesomeIcon icon={show ? faChevronUp : faChevronDown} />
                            </span>
                        )}

                        {updating && (
                            <FontAwesomeIcon
                                spin
                                icon={faCircleNotch}
                                className={styles.updating}
                                data-testid="settings-dropdown-spinner"
                            />
                        )}
                    </>
                )}
            </div>

            <Overlay show={show} rootClose={true} placement="bottom" target={target.current} onHide={handleHide}>
                {!loading && selected ? <div className={styles.menu}>
                    {options.filter(it => it.name != selected.name).map((option: SettingsDropdownOption) => (
                        <div
                            key={option.name}
                            style={option.style}
                            onClick={() => handleChange(option)}
                            className={[styles.option, option.className].join(" ")}
                        >
                            {option.icon && <FontAwesomeIcon icon={option.icon} className={styles.icon} />}
                            <span>{option.name}</span>
                        </div>
                    ))}
                </div>
                : <FontAwesomeIcon icon={faSpinner} spin={true} />}
            </Overlay>
        </>
    );
}

export default SettingsDropdown;
