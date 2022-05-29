import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../styles/sass/components/ui/kana/KanaTypeIndicator.module.scss";

export interface KanaTypeIndicatorProps {
    title: string;
    className?: string;
}

const KanaTypeIndicator = (props: KanaTypeIndicatorProps) => {
    return (
        <FontAwesomeIcon
            icon={faCircle}
            size="xs"
            className={props.className + " " + styles.icon}
            title={props.title}
        />
    );
}

export default KanaTypeIndicator;
