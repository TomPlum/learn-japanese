import React, { Component } from "react";
import { LifeQuantity } from "../../../types/game/LifeQuantity";
import LivesSelector from "../../ui/LivesSelector";
import { Col, Form, Row } from "react-bootstrap";
import styles from "../../../styles/sass/components/settings/game/GameSettingsMenu.module.scss";
import LifeSettings, { LifeSettingsBuilder } from "../../../types/session/settings/game/LifeSettings";

interface LifeSettingsFormProps {
    onChange: (settings: LifeSettings) => void;
}

interface LifeSettingsFormState {
    enabled: boolean;
    quantity: LifeQuantity;
}

class LifeSettingsForm extends Component<LifeSettingsFormProps, LifeSettingsFormState> {

    private readonly selector: React.RefObject<LivesSelector>;
    private readonly defaultState = new LifeSettingsBuilder().isEnabled(false).withQuantity(LifeQuantity.ZERO).build();

    constructor(props: LifeSettingsFormProps | Readonly<LifeSettingsFormProps>) {
        super(props);
        this.selector = React.createRef();
        this.state = {
            enabled: this.defaultState.enabled,
            quantity: this.defaultState.quantity
        }
    }

    componentDidMount() {
        this.props.onChange(this.defaultState);
    }

    componentDidUpdate(prevProps: Readonly<LifeSettingsFormProps>, prevState: Readonly<LifeSettingsFormState>) {
        if (prevState !== this.state) {
            const { enabled, quantity } = this.state;
            const settings = new LifeSettingsBuilder().isEnabled(enabled).withQuantity(quantity).build();
            this.props.onChange(settings);
        }
    }

    render() {
        const { enabled } = this.state;

        return (
            <Row>
                <Col>
                    <Form.Check
                        inline
                        label="Enable"
                        type="switch"
                        id="lives"
                        className={styles.check}
                        checked={enabled}
                        onChange={() => this.setState({ enabled: !enabled })}
                        data-testid="Enable"
                    />
                    <LivesSelector
                        ref={this.selector}
                        disabled={!enabled}
                        onSelect={(quantity) => this.setState({ quantity })}
                    />
                </Col>
            </Row>
        );
    }

    reset = () => {
        this.selector.current?.reset();
        this.setState({
            enabled: this.defaultState.enabled,
            quantity: this.defaultState.quantity
        });
    }
}

export default LifeSettingsForm;