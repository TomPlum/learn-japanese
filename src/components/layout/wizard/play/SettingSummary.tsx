import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../../styles/sass/components/layout/wizard/play/SettingSummary.module.scss";

export interface SettingSummaryProps {
    icon: IconDefinition;
    name: string;
    quantity: string | number | IconDefinition;
    iconClass?: string;
}

const SettingSummary = (props: SettingSummaryProps) => {

    const { icon, quantity, name, iconClass } = props;

    const getQuantity = () => {
        if (typeof quantity === 'string') {
            return <span className={styles.stringQuantity}>{quantity}</span>
        } else if (typeof quantity === 'number') {
            return <span className={styles.numberQuantity}>{quantity}</span>
        } else {
            return <FontAwesomeIcon icon={quantity} className={styles.iconQuantity}/>
        }
    }

    return (
        <div className={styles.wrapper}>
            {/*<span className="fa-layers fa-fw">
            <FontAwesomeIcon
                icon={icon}
                fixedWidth
                className={[styles.icon, iconClass].join(" ")}
            />
            <span className="fa-layers-text fa-inverse">{getQuantity()}</span>
        </span>*/}
            <FontAwesomeIcon
                icon={icon}
                fixedWidth
                title={name}
                className={[styles.icon, iconClass].join(" ")}
            />
            {getQuantity()}
        </div>
    );
}

export default SettingSummary;
