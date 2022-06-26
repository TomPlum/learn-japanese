import styles from "../../../styles/sass/components/settings/modal/SettingsDropdown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faCircleNotch, faSpinner, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";
import UserService from "../../../service/UserService";
import { Preference } from "../../../domain/user/Preference";

export interface SettingsDropdownOption {
    style?: {};
    name: string;
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

    const target = useRef(null);
    const [show, setShow] = useState(false);
    const [updating, setUpdating] = useState(false);
    const [selected, setSelected] = useState(options[0]);

    const handleChange = (option: SettingsDropdownOption) => {
        setShow(false);
        setUpdating(true);
        setSelected(option);

        service.updatePreferences([{ preference, value: option.name }]).then(response => {
            if (response.success) {
                onChange?.(option.name);
            } else {
                onError?.(response.error ?? "Failed to update preference.");
            }
        }).finally(() => {
            setUpdating(false);
        });
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
            <div ref={target} className={buttonClasses.join(" ")} onClick={handleClick} title={title}>
                {loading && (
                    <FontAwesomeIcon icon={faSpinner} spin={true} />
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
                        <div key={option.name} className={styles.option} onClick={() => handleChange(option)} style={option.style}>
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
