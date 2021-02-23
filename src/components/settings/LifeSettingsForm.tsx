import { Component } from "react";
import { LifeSettings } from "../../types/GameSettings";
import { LifeQuantity } from "../../types/LifeQuantity";
import LivesSelector from "./LivesSelector";
import { Form } from "react-bootstrap";

interface LifeSettingsFormProps {
    onChange: (settings: LifeSettings) => void;
}

interface LifeSettingsFormState {
    enabled: boolean;
    quantity: LifeQuantity;
}

class LifeSettingsForm extends Component<LifeSettingsFormProps, LifeSettingsFormState> {
    constructor(props: LifeSettingsFormProps | Readonly<LifeSettingsFormProps>) {
        super(props);
        this.state = {
            enabled: true,
            quantity: LifeQuantity.ZERO
        }
    }

    componentDidUpdate(prevProps: Readonly<LifeSettingsFormProps>, prevState: Readonly<LifeSettingsFormState>) {
        if (prevState !== this.state) {
            const { enabled, quantity } = this.state;
            this.props.onChange({ enabled, quantity });
        }
    }

    render() {
        return (
            <Form.Row>
                <LivesSelector
                    onSelect={(quantity) => this.setState({ quantity })}
                />
            </Form.Row>
        );
    }

    reset = () => this.setState({ enabled: false });
}

export default LifeSettingsForm;