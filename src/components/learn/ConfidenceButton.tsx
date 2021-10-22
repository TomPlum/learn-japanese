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

    return (
        <Button
            block
            onClick={handleClick}
            className={[props.className, styles.button, props.selected === props.value ? styles.selected : undefined].join(" ")}
        >
            {props.value.valueOf() + 1}
        </Button>
    );
}

export default ConfidenceButton;
