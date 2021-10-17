import { Component } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/sass/components/ui/fields/QuantityField.module.scss";

export interface QuantityFieldProps {
    value?: number;
    className?: string;
    isValid?: () => boolean;
    onChange?: (value: number) => void;
}

class QuantityField extends Component<QuantityFieldProps> {
    render() {
        const { value, className, onChange } = this.props;

        return (
            <InputGroup hasValidation>
                <InputGroup.Text>
                    <FontAwesomeIcon icon={faBalanceScale} className={styles.icon} fixedWidth />
                    <span className={styles.description}>Quantity</span>
                </InputGroup.Text>

                <Form.Control
                    required
                    type="number"
                    value={value}
                    placeholder="Quantity"
                    isValid={this.isValid()}
                    isInvalid={!this.isValid()}
                    className={[className, styles.input].join(" ")}
                    onChange={(e) => onChange?.(Number(e.target.value))}
                />
            </InputGroup>
        );
    }

    private isValid = (): boolean => {
        const { value, isValid } = this.props;
        const isCustomValid = isValid?.() ?? true;
        const isValidNumber = !!value && /^[0-9]+$/.test(value.toString());
        return isCustomValid && isValidNumber;
    }
}

export default QuantityField;
