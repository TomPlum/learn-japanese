import styles from "../../../styles/sass/components/settings/modal/SettingsDropdown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { Overlay, Popover } from "react-bootstrap";

export interface SettingsDropdownOption {
    name: string;
    icon: IconDefinition;
}

export interface SettingsDropdownProps {
    id: string;
    options: SettingsDropdownOption[];
    onChange: (value: string) => void;
}

const SettingsDropdown = (props: SettingsDropdownProps) => {
    const { id, options, onChange } = props;

    const [selected, setSelected] = useState(options[0]);
    const ref = useRef(null);
    const targetRef = useRef(null);
    const [show, setShow] = useState(false);

    const handleChange = (option: SettingsDropdownOption) => {
        onChange(option.name);
        setSelected(option);
        setShow(false);
    }

    return (
        <div ref={ref} >
            <div className={styles.button} onClick={() => setShow(true)} ref={targetRef} title="Click to see options">
                <FontAwesomeIcon icon={selected.icon} className={styles.icon} />
                <span className={styles.name}>{selected.name}</span>
                <span className={styles.chevron}><FontAwesomeIcon icon={show ? faChevronUp : faChevronDown} /></span>
            </div>

            <Overlay
                show={show}
                rootClose={true}
                target={targetRef}
                placement="bottom"
                container={ref.current}
                onHide={() => setShow(false)}
            >
                <div className={styles.menu}>
                    {options.map((option: SettingsDropdownOption) => (
                        <div key={option.name} className={styles.option} onClick={() => handleChange(option)}>
                            <FontAwesomeIcon icon={option.icon} className={styles.icon} />
                            <span>{option.name}</span>
                        </div>
                    ))}
                </div>
            </Overlay>
        </div>
    );
}

export default SettingsDropdown;
