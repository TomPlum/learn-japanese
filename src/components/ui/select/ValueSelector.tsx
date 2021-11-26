import React, { useRef, useState } from "react";
import { Overlay, Popover } from "react-bootstrap";
import styles from "../../../styles/sass/components/ui/select/ValueSelector.module.scss";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Placement } from "react-bootstrap/Overlay";

export interface ValueSelectorProps {
    id: string;
    prefix?: string;
    values: number[];
    selected: number;
    disabled?: boolean;
    className?: string;
    placement?: Placement;
    onChange: (value: number) => void;
}

const ValueSelector = (props: ValueSelectorProps) => {

    const { id, prefix, values, selected, disabled, placement, className, onChange } = props;

    const ref = useRef(null);
    const targetRef = useRef(null);
    const [show, setShow] = useState(false);

    const handleChange = (value: number) => {
        onChange(value);
        setShow(false);
    }

    const handleInitialOpen = () => {
        if (!disabled) {
            setShow(!show);
        }
    }

    return (
       <div ref={ref} className={className}>
           <span className={disabled ? styles.disabled : styles.selected}>
                <span ref={targetRef} onClick={handleInitialOpen}>{prefix}{' '}{selected}</span>
                <FontAwesomeIcon icon={show ? faChevronUp : faChevronDown} fixedWidth />
           </span>

           <Overlay
               show={show}
               rootClose={true}
               target={targetRef}
               container={ref.current}
               onHide={() => setShow(false)}
               placement={placement ?? "bottom"}
           >
               <Popover id={id} className={styles.popover}>
                   <Popover.Content className={styles.content}>
                       {values.map(value => {
                           return (
                               <div className={styles.valueWrapper} key={`${value}-wrapper`} onClick={() => handleChange(value)}>
                                    <span className={styles.value}>
                                        {prefix}{' '}{value}
                                    </span>
                               </div>
                           )
                       })}
                   </Popover.Content>
               </Popover>
           </Overlay>
       </div>
    );
}

export default ValueSelector;
