import React, { Component } from "react";
import { Col, Form, Row } from "react-bootstrap";
import HintSettings, { HintSettingsBuilder } from "../../../types/session/settings/game/HintSettings";
import RangeSlider from "react-bootstrap-range-slider";
import ScrollableContainer from "../../ui/ScrollableContainer";
import styles from "../../../styles/sass/components/settings/game/HintSettingsForm.module.scss";

export interface HintSettingsFormProps {
    onChange: (settings: HintSettings) => void;
}

interface HintSettingsFormState {
    enabled: boolean;
    quantity: number;
    infinite: boolean;
}

class HintSettingsForm extends Component<HintSettingsFormProps, HintSettingsFormState> {

    private readonly defaultState = new HintSettingsBuilder().isEnabled().withQuantity(3).areUnlimited(false).build();

    constructor(props: HintSettingsFormProps | Readonly<HintSettingsFormProps>) {
        super(props);
        this.state = {
            enabled: this.defaultState.enabled,
            quantity: this.defaultState.quantity,
            infinite: this.defaultState.unlimited
        }
    }

    componentDidMount() {
        this.props.onChange(this.defaultState);
    }

    componentDidUpdate(prevProps: Readonly<HintSettingsFormProps>, prevState: Readonly<HintSettingsFormState>) {
        if (prevState !== this.state) {
            const { enabled, quantity, infinite } = this.state;

            const settings = new HintSettingsBuilder()
                .isEnabled(enabled)
                .withQuantity(quantity)
                .areUnlimited(infinite)
                .build();

            this.props.onChange(settings);
        }
    }

    render() {
        const { enabled, quantity, infinite } = this.state;

        return (
            <ScrollableContainer className={styles.formWrapper}>
                <Row>
                    <Col xs={12}>
                        <p className={styles.leadingDescription}>
                            Hints allow you to reveal a small piece of information about the current question if you're
                            struggling.
                        </p>

                        <Form.Check
                            inline
                            type="switch"
                            label="Enabled"
                            id="hint-quantity"
                            className={styles.check}
                            checked={enabled}
                            onChange={() => this.setState({ enabled: !enabled, infinite: false })}
                            data-testid="enable-hints"
                        />
                    </Col>

                    <Col xs={12}>
                        <p className={styles.leadingDescription}>
                            Select the number of hints you want for the entire game. You only get to use one per
                            question.
                        </p>

                        <RangeSlider
                            min={1} max={10}
                            value={quantity}
                            variant="primary"
                            disabled={!enabled || infinite}
                            tooltip={enabled && !infinite ? "auto" : "off"}
                            tooltipPlacement="bottom"
                            inputProps={{}}
                            data-testid="hint-quantity-slider"
                            onAfterChange={() => {
                            }} //TODO: Remove this one the lib makes it non-mandatory
                            onChange={this.onChangeHintQuantity}
                        />
                    </Col>

                    <Col xs={12}>
                        <p className={styles.leadingDescription}>
                            Remove the quantity cap and use as many hints as you'd like.
                        </p>

                        <Form.Check
                            inline
                            type="switch"
                            label="Infinite Hints"
                            id="infinite-hints"
                            className={styles.check}
                            checked={infinite}
                            disabled={!enabled}
                            onChange={() => this.setState({ infinite: !infinite })}
                            data-testid="enable-infinite-hints"
                        />
                    </Col>
                </Row>
            </ScrollableContainer>
        );
    }

    reset = () => this.setState({
        enabled: this.defaultState.enabled,
        quantity: this.defaultState.quantity,
        infinite: this.defaultState.unlimited
    });

    private onChangeHintQuantity = (e: React.ChangeEvent, value: number) => {
        this.setState({ quantity: value });
    }
}

export default HintSettingsForm;