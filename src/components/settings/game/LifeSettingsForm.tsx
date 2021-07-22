import React, { ChangeEvent, Component } from "react";
import { LifeQuantity } from "../../../types/game/LifeQuantity";
import { Col, Form, Row } from "react-bootstrap";
import LifeSettings, { LifeSettingsBuilder } from "../../../types/session/settings/game/LifeSettings";
import styles from "../../../styles/sass/components/settings/game/LifeSettingsForm.module.scss";
import RangeSlider from "react-bootstrap-range-slider";

interface LifeSettingsFormProps {
    onChange: (settings: LifeSettings) => void;
}

interface LifeSettingsFormState {
    enabled: boolean;
    quantity: LifeQuantity;
}

class LifeSettingsForm extends Component<LifeSettingsFormProps, LifeSettingsFormState> {

    private readonly defaultState = new LifeSettingsBuilder().isEnabled(false).withQuantity(LifeQuantity.ZERO).build();

    constructor(props: LifeSettingsFormProps | Readonly<LifeSettingsFormProps>) {
        super(props);
        this.state = {
            enabled: this.defaultState.enabled,
            quantity: this.defaultState.quantity,
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
        const { enabled, quantity } = this.state;

        return (
            <Row>
                <Col xs={12}>
                    <p className={styles.leadingDescription}>
                        Configure the number of lives you start with. For an added challenge you can give yourself only
                        a few, or unlimited if you're playing more casually.
                    </p>

                    <Form.Check
                        inline
                        type="switch"
                        id="lives"
                        label="Enabled"
                        className={styles.check}
                        checked={enabled}
                        onChange={() => this.setState({ enabled: !enabled })}
                        data-testid="enable-lives"
                    />
                </Col>

                <Col xs={12}>
                    <p className={styles.leadingDescription}>
                        Select the number of lives you want to start the game with. You can choose between 1 and 10.
                        Disabling will give you infinite.
                    </p>

                    <RangeSlider
                        min={1} max={10}
                        value={quantity.valueOf()}
                        variant="primary"
                        disabled={!enabled}
                        tooltip={enabled ? "auto": "off"}
                        tooltipPlacement="bottom"
                        inputProps={{}}
                        data-testid="life-quantity-slider"
                        onAfterChange={() => {}} //TODO: Remove this one the lib makes it non-mandatory
                        onChange={(e: ChangeEvent, value: number) => this.setState({ quantity: value })}
                    />
                </Col>
            </Row>
        );
    }

    reset = () => {
        this.setState({
            enabled: this.defaultState.enabled,
            quantity: this.defaultState.quantity,
        });
    }
}

export default LifeSettingsForm;