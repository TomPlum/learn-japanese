import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/sass/components/layout/KanaTypeIndicator.module.scss";

interface KanaTypeIndicatorProps {
    className?: string;
}

const KanaTypeIndicator = (props: KanaTypeIndicatorProps) => {
    return (
        <FontAwesomeIcon
            icon={faCircle}
            size="xs"
            className={props.className + " " + styles.icon}
        />
    );
}

export default KanaTypeIndicator;