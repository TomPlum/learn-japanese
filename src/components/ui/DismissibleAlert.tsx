import { Alert } from "react-bootstrap";
import { AlertProps } from "react-bootstrap/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/ui/DismissibleAlert.module.scss";
import { PropsWithChildren } from "react";

export interface DismissibleAlertProps extends AlertProps {
}

const DismissibleAlert = (props: PropsWithChildren<DismissibleAlertProps>) => {

    const { children, ...rest } = props;

    return (
        <div className={styles.container}>
            <Alert {...rest}>
                {children}
            </Alert>

            <FontAwesomeIcon
                fixedWidth
                icon={faTimes}
                onClick={() => {}}
                className={styles.dismiss}
            />
        </div>
    )
}

export default DismissibleAlert;
