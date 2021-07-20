import { Component } from "react";
import { HintQuantity } from "../../../types/game/HintQuantity";
import { Col, Form, Row } from "react-bootstrap";
import HintSettings, { HintSettingsBuilder } from "../../../types/session/settings/game/HintSettings";
import styles from "../../../styles/sass/components/settings/game/HintSettingsForm.module.scss";

export interface HintSettingsFormProps {
    onChange: (settings: HintSettings) => void;
}

interface HintSettingsFormState {
    enabled: boolean;
    quantity: HintQuantity;
}

class HintSettingsForm extends Component<HintSettingsFormProps, HintSettingsFormState> {

    private readonly defaultState = new HintSettingsBuilder().isEnabled().withQuantity(HintQuantity.THREE).build();

    constructor(props: HintSettingsFormProps | Readonly<HintSettingsFormProps>) {
        super(props);
        this.state = {
            enabled: this.defaultState.enabled,
            quantity: this.defaultState.quantity
        }
    }

    componentDidMount() {
        this.props.onChange(this.defaultState);
    }

    componentDidUpdate(prevProps: Readonly<HintSettingsFormProps>, prevState: Readonly<HintSettingsFormState>) {
        if (prevState !== this.state) {
            const { enabled, quantity } = this.state;
            const settings = new HintSettingsBuilder().isEnabled(enabled).withQuantity(quantity).build()
            this.props.onChange(settings);
        }
    }

    render() {
        const { quantity } = this.state;

        return (
            <Row>
                <Col>
                    <p className={styles.leadingDescription}>
                        Hints allow you to reveal a small piece of information about the current question if you're
                        struggling.
                    </p>

                    <Form.Check
                        inline
                        label="1"
                        className={styles.check}
                        checked={quantity === HintQuantity.ONE}
                        onChange={() => this.setState({ quantity: HintQuantity.ONE })}
                        data-testid="1"
                    />

                    <Form.Check
                        inline
                        label="3"
                        className={styles.check}
                        checked={quantity === HintQuantity.THREE}
                        onChange={() => this.setState({ quantity: HintQuantity.THREE })}
                        data-testid="3"
                    />

                    <Form.Check
                        inline
                        label="5"
                        className={styles.check}
                        checked={quantity === HintQuantity.FIVE}
                        onChange={() => this.setState({ quantity: HintQuantity.FIVE })}
                        data-testid="5"
                    />

                    <Form.Check
                        label="Unlimited"
                        className={styles.check}
                        checked={quantity === HintQuantity.UNLIMITED}
                        onChange={() => this.setState({ quantity: HintQuantity.UNLIMITED })}
                        data-testid="Unlimited"
                    />
                </Col>
            </Row>
        );
    }

    reset = () => this.setState({
        enabled: this.defaultState.enabled,
        quantity: this.defaultState.quantity
    });
}

export default HintSettingsForm;