import { Button } from "react-bootstrap";
import { Confidence } from "../../domain/learn/spacedrepetition/Confidence";
import styles from "../../styles/sass/components/learn/ConfidenceButton.module.scss";

export interface ConfidenceButtonProps {
    value: Confidence;
    title: string;
    className: string;
    disabled: boolean;
    selected: Confidence | undefined;
    onClick: (value: Confidence) => void;
}

const ConfidenceButton = (props: ConfidenceButtonProps) => {

    const { value, title, className, disabled, selected, onClick } = props;

    const handleClick = () => {
        onClick(props.value);
    }

    const buttonClass = disabled ? styles.disabled : styles.button;
    const selectedClass = selected === value ? styles.selected : undefined;

    return (
        <Button
            block
            title={title}
            disabled={disabled}
            onClick={handleClick}
            className={[className, buttonClass, selectedClass].join(" ")}
        >
            {value.valueOf() + 1}
        </Button>
    );
}

export default ConfidenceButton;
