import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/sass/components/layout/KanaTypeIndicator.module.scss";

const KanaTypeIndicator = ({ className }) => {
    return (
        <FontAwesomeIcon
            icon={faCircle}
            size="xs"
            className={className + " " + styles.icon}
        />
    );
}

export default KanaTypeIndicator;