import styles from "../../../styles/sass/components/settings/modal/SettingsDropdown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";

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

    const target = useRef(null);
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(options[0]);

    const handleChange = (option: SettingsDropdownOption) => {
        onChange(option.name);
        setSelected(option);
        setShow(false);
    }

    const chevronClasses = [styles.chevron];
    if (show) chevronClasses.push(styles.inspect);

    return (
        <>
            <div ref={target} className={styles.button} onClick={() => setShow(true)} title="Click to see options">
                <FontAwesomeIcon icon={selected.icon} className={styles.icon} />
                <span className={styles.name}>{selected.name}</span>
                <span className={chevronClasses.join(" ")}>
                    <FontAwesomeIcon icon={show ? faChevronUp : faChevronDown} />
                </span>
            </div>

            <Overlay
                show={show}
                rootClose={true}
                placement="bottom"
                target={target.current}
                onHide={() => setShow(false)}
            >
                <div className={styles.menu}>
                    {options.filter(it => it.name != selected.name).map((option: SettingsDropdownOption) => (
                        <div key={option.name} className={styles.option} onClick={() => handleChange(option)}>
                            <FontAwesomeIcon icon={option.icon} className={styles.icon} />
                            <span>{option.name}</span>
                        </div>
                    ))}
                </div>
            </Overlay>
        </>
    );
}

export default SettingsDropdown;
