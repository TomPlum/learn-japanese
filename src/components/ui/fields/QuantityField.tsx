import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/sass/components/ui/fields/QuantityField.module.scss";
import { useTranslation } from "react-i18next";

export interface QuantityFieldProps {
    value?: number;
    className?: string;
    isValid?: () => boolean;
    onChange?: (value: number) => void;
}

const QuantityField = (props: QuantityFieldProps) => {
    const { value, isValid, className, onChange } = props;

    const { t } = useTranslation("translation", { keyPrefix: "wizard.steps.data.fields.quantity" });

    const isValidNumber = (): boolean => {
        const isCustomValid = isValid?.() ?? true;
        const isValidNumber = !!value && /^[0-9]+$/.test(value.toString());
        return isCustomValid && isValidNumber;
    }

    return (
        <InputGroup hasValidation>
            <InputGroup.Text>
                <FontAwesomeIcon icon={faBalanceScale} className={styles.icon} fixedWidth />
                <span className={styles.description}>{t("label")}</span>
            </InputGroup.Text>

            <Form.Control
                required
                type="number"
                value={value}
                isValid={isValidNumber()}
                isInvalid={!isValidNumber()}
                placeholder={t("placeholder")}
                className={[className, styles.input].join(" ")}
                onChange={(e) => onChange?.(Number(e.target.value))}
            />
        </InputGroup>
    );
}

export default QuantityField;
