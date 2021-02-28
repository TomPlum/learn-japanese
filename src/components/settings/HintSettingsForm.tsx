import { Component } from "react";
import { HintSettings } from "../../types/GameSettings";
import { HintQuantity } from "../../types/HintQuantity";
import { Form } from "react-bootstrap";
import styles from "../../styles/sass/components/settings/GameSettingsMenu.module.scss";

interface TipSettingsFormProps {
    onChange: (settings: HintSettings) => void;
}

interface TipSettingsFormState {
    enabled: boolean;
    quantity: HintQuantity;
}

class HintSettingsForm extends Component<TipSettingsFormProps, TipSettingsFormState> {

    private readonly defaultState = { enabled: true, quantity: HintQuantity.THREE };

    constructor(props: TipSettingsFormProps | Readonly<TipSettingsFormProps>) {
        super(props);
        this.state = this.defaultState;
    }

    componentDidMount() {
        this.props.onChange(this.defaultState);
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
                    checked={quantity === HintQuantity.ONE}
                    onChange={() => this.setState({ quantity: HintQuantity.ONE })}
                />
                <Form.Check
                    inline
                    label="3"
                    className={styles.check}
                    checked={quantity === HintQuantity.THREE}
                    onChange={() => this.setState({ quantity: HintQuantity.THREE })}
                />
                <Form.Check
                    inline
                    label="5"
                    className={styles.check}
                    checked={quantity === HintQuantity.FIVE}
                    onChange={() => this.setState({ quantity: HintQuantity.FIVE })}
                />
                <Form.Check
                    label="Unlimited"
                    className={styles.check}
                    checked={quantity === HintQuantity.UNLIMITED}
                    onChange={() => this.setState({ quantity: HintQuantity.UNLIMITED })}
                />
            </Form.Row>
        );
    }

    reset = () => this.setState(this.defaultState);
}

export default HintSettingsForm;