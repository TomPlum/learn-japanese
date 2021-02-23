import { Component } from "react";
import { TipSettings } from "../../types/GameSettings";
import { TipQuantity } from "../../types/TipQuantity";
import { Form } from "react-bootstrap";
import styles from "../../styles/sass/components/settings/GameSettingsMenu.module.scss";

interface TipSettingsFormProps {
    onChange: (settings: TipSettings) => void;
}

interface TipSettingsFormState {
    enabled: boolean;
    quantity: TipQuantity;
}

class TipSettingsForm extends Component<TipSettingsFormProps, TipSettingsFormState> {
    constructor(props: TipSettingsFormProps | Readonly<TipSettingsFormProps>) {
        super(props);
        this.state = {
            enabled: true,
            quantity: TipQuantity.THREE
        }
    }

    componentDidUpdate(prevProps: Readonly<TipSettingsFormProps>, prevState: Readonly<TipSettingsFormState>, snapshot?: any) {
        if (prevState !== this.state) {
            const { enabled, quantity } = this.state;
            this.props.onChange({ enabled, quantity });
        }
    }

    render() {
        const { quantity } = this.state;

        return (
            <Form.Row>
                <Form.Check
                    inline
                    label="1"
                    className={styles.check}
                    checked={quantity === TipQuantity.ONE}
                    onChange={() => this.setState({ quantity: TipQuantity.ONE })}
                />
                <Form.Check
                    inline
                    label="3"
                    className={styles.check}
                    checked={quantity === TipQuantity.THREE}
                    onChange={() => this.setState({ quantity: TipQuantity.THREE })}
                />
                <Form.Check
                    label="Unlimited"
                    className={styles.check}
                    checked={quantity === TipQuantity.UNLIMITED}
                    onChange={() => this.setState({ quantity: TipQuantity.UNLIMITED })}
                />
            </Form.Row>
        );
    }
}

export default TipSettingsForm;