import React, { Component } from "react";
import { Col, Form, Row } from "react-bootstrap";
import TimeSettings, { TimeSettingsBuilder } from "../../../types/session/settings/game/TimeSettings";
import styles from "../../../styles/sass/components/settings/game/TimeSettingsForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export interface TimeSettingsFormProps {
    onChange: (settings: TimeSettings) => void;
}

interface TimeSettingsFormState {
    timed: boolean;
    countdown: boolean;
}

class TimeSettingsForm extends Component<TimeSettingsFormProps, TimeSettingsFormState> {

    private readonly defaultState = new TimeSettingsBuilder().isTimed().isCountDown(false).build();

    constructor(props: TimeSettingsFormProps | Readonly<TimeSettingsFormProps>) {
        super(props);
        this.state = {
            timed: this.defaultState.timed,
            countdown: this.defaultState.countdown
        };
    }

    componentDidMount() {
        this.props.onChange(this.defaultState);
    }

    componentDidUpdate(prevProps: Readonly<TimeSettingsFormProps>, prevState: Readonly<TimeSettingsFormState>) {
        if (prevState !== this.state) {
            const { timed, countdown } = this.state;
            const settings = new TimeSettingsBuilder().isTimed(timed).isCountDown(countdown).build();
            this.props.onChange(settings);
        }
    }

    render() {
        const { timed, countdown } = this.state;

        return (
            <Row>
                <Col>
                    <div className={styles.descriptionWrapper}>
                        <p className={styles.leadingDescription}>
                            Configure the style of timer you want for the game or disable them entirely.
                        </p>
                    </div>

                    <h5 className={styles.heading}>
                        <Form.Check
                            inline
                            type="switch"
                            label="Timed"
                            id="time"
                            className={styles.check}
                            checked={timed}
                            onChange={this.onChangeTimed}
                            data-testid="Timed"
                        />
                    </h5>

                    <p className={[styles.description, countdown ? styles.inactive : styles.active].join(" ")}>
                        You'll simply be timed starting from 00:00 and the timer will stop when you finish the game
                        or lose. Useful for speed-running certain topics to test your mastery.
                    </p>

                    <h5 className={styles.heading}>
                        <Form.Check
                            type="switch"
                            label="Count Down"
                            id="countdown"
                            className={styles.check}
                            checked={countdown}
                            onChange={this.onChangeCountDown}
                            data-testid="Countdown"
                        />
                    </h5>

                    <p className={[styles.description, timed ? styles.inactive : styles.active].join(" ")}>
                        You'll have a set number of seconds to answer each question. Failing to answer correctly in
                        the given time will lose you a life. Answering correctly will reset the timer.
                    </p>
                </Col>
            </Row>
        );
    }

    reset = () => this.setState(this.defaultState);

    private onChangeTimed = () => {
        const { timed } = this.state;
        if (timed) {
            this.setState({ timed: false });
        } else {
            this.setState({ timed: true, countdown: false });
        }
    }

    private onChangeCountDown = () => {
        const { countdown } = this.state;
        if (countdown) {
            this.setState({ countdown: false });
        } else {
            this.setState({ countdown: true, timed: false });
        }
    }
}

export default TimeSettingsForm;