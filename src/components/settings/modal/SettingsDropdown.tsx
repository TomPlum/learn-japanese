import styles from "../../../styles/sass/components/settings/modal/SettingsDropdown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faSpinner, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";

export interface SettingsDropdownOption {
    style?: {};
    name: string;
    icon?: IconDefinition;
}

export interface SettingsDropdownProps {
    id: string;
    loading?: boolean;
    buttonIcon?: IconDefinition;
    options: SettingsDropdownOption[];
    onChange: (value: string) => void;
}

const SettingsDropdown = (props: SettingsDropdownProps) => {
    const { id, loading, buttonIcon, options, onChange } = props;

    const target = useRef(null);
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(options[0]);

    const handleChange = (option: SettingsDropdownOption) => {
        onChange(option.name);
        setSelected(option);
        setShow(false);
    }

    const handleClick = () => {
        setShow(true);
    }

    const chevronClasses = [styles.chevron];
    if (show) chevronClasses.push(styles.inspect);

    const buttonClasses = [styles.button];
    if (show) buttonClasses.push(styles.active);

    return (
        <>
            <div ref={target} className={buttonClasses.join(" ")} onClick={handleClick} title="Click to see options">
                {loading && <FontAwesomeIcon icon={faSpinner} spin={true} />}
                {!loading && !!selected && (
                    <>
                        {buttonIcon && <FontAwesomeIcon icon={buttonIcon} className={styles.icon} />}
                        {!buttonIcon && selected.icon && <FontAwesomeIcon icon={selected.icon} className={styles.icon} />}
                        <span className={styles.name}>{selected.name}</span>
                        <span className={chevronClasses.join(" ")}>
                            <FontAwesomeIcon icon={show ? faChevronUp : faChevronDown} />
                        </span>
                    </>
                )}
            </div>

            <Overlay
                show={show}
                rootClose={true}
                placement="bottom"
                target={target.current}
                onHide={() => setShow(false)}
            >
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
