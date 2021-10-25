import Confidence from "../../domain/learn/spacedrepetition/Confidence";
import { useUserSelector } from "../../hooks";
import { ConfidenceMenuStyle } from "../../domain/learn/spacedrepetition/ConfidenceMenuStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/sass/components/learn/ConfidenceInfoItem.module.scss";

export interface ConfidenceInfoItemProps {
    confidence: Confidence;
    className?: string;
}

const ConfidenceInfoItem = (props: ConfidenceInfoItemProps) => {
    const preferences = useUserSelector(state => state.user.user?.preferences);

    const { confidence, className } = props;

    return (
        <li>
            {preferences?.confidenceMenuStyle === ConfidenceMenuStyle.NUMBERS ?
                <span className={className}>
                    {confidence.value + 1}
                </span> :
                <FontAwesomeIcon
                    icon={confidence.icon}
                    className={[className, styles.icon].join(" ")}
                />
            }
            <span>{confidence.description}</span>
        </li>
    );
}

export default ConfidenceInfoItem;
