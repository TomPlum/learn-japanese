import { Component } from "react";
import { HintSettings } from "../../../types/session/settings/game/GameSettings";
import { HintQuantity } from "../../../types/game/HintQuantity";
import { Col, Form, Row } from "react-bootstrap";
import styles from "../../../styles/sass/components/settings/kana/KanaGameSettingsMenu.module.scss";

export interface HintSettingsFormProps {
    onChange: (settings: HintSettings) => void;
}

interface HintSettingsFormState {
    enabled: boolean;
    quantity: HintQuantity;
}

class HintSettingsForm extends Component<HintSettingsFormProps, HintSettingsFormState> {

    private readonly defaultState = { enabled: true, quantity: HintQuantity.THREE };

    constructor(props: HintSettingsFormProps | Readonly<HintSettingsFormProps>) {
        super(props);
        this.state = this.defaultState;
    }

    componentDidMount() {
        this.props.onChange(this.defaultState);
    }

    componentDidUpdate(prevProps: Readonly<HintSettingsFormProps>, prevState: Readonly<HintSettingsFormState>) {
        if (prevState !== this.state) {
            const { enabled, quantity } = this.state;
            this.props.onChange({ enabled, quantity });
        }
    }

    render() {
        const { quantity } = this.state;

        return (
            <Row>
                <Col>
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

    reset = () => this.setState(this.defaultState);
}

export default HintSettingsForm;