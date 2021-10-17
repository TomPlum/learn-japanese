import { Button } from "react-bootstrap";
import { Confidence } from "../../domain/learn/spacedrepetition/Confidence";
import styles from "../../styles/sass/components/learn/ConfidenceButton.module.scss";

export interface ConfidenceButtonProps {
    className: string;
    value: Confidence;
    selected: Confidence | undefined;
    onClick: (value: Confidence) => void;
}

const ConfidenceButton = (props: ConfidenceButtonProps) => {
    const handleClick = () => {
        props.onClick(props.value);
    }

    const selectedClass = props.selected === props.value ? styles.selected : undefined;

    return (
        <Button onClick={handleClick} className={[props.className, styles.button, selectedClass].join(" ")}>
            {props.value.valueOf()}
        </Button>
    );
}

export default ConfidenceButton;
