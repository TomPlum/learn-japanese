import React, { ChangeEvent, Component } from "react";
import { Col, Form, Row } from "react-bootstrap";
import TimeSettings, { TimeSettingsBuilder } from "../../../types/session/settings/game/TimeSettings";
import styles from "../../../styles/sass/components/settings/game/TimeSettingsForm.module.scss";
import RangeSlider from "react-bootstrap-range-slider";
import ScrollableContainer from "../../ui/ScrollableContainer";

export interface TimeSettingsFormProps {
    onChange: (settings: TimeSettings) => void;
}

interface TimeSettingsFormState {
    timed: boolean;
    countdown: boolean;
    seconds: number;
}

class TimeSettingsForm extends Component<TimeSettingsFormProps, TimeSettingsFormState> {

    private readonly defaultState = new TimeSettingsBuilder()
        .isTimed()
        .isCountDown(false)
        .withSecondsPerQuestion(10)
        .build();

    constructor(props: TimeSettingsFormProps | Readonly<TimeSettingsFormProps>) {
        super(props);
        this.state = {
            timed: this.defaultState.timed,
            countdown: this.defaultState.countdown,
            seconds: this.defaultState.secondsPerQuestion
        };
    }

    componentDidMount() {
        this.props.onChange(this.defaultState);
    }

    componentDidUpdate(prevProps: Readonly<TimeSettingsFormProps>, prevState: Readonly<TimeSettingsFormState>) {
        if (prevState !== this.state) {
            const { timed, countdown, seconds } = this.state;

            const settings = new TimeSettingsBuilder()
                .isTimed(timed)
                .isCountDown(countdown)
                .withSecondsPerQuestion(seconds)
                .build();

            this.props.onChange(settings);
        }
    }

    render() {
        const { timed, countdown, seconds } = this.state;

        return (
            <ScrollableContainer className={styles.formWrapper}>
                <Row>
                    <Col>
                        <div className={styles.descriptionWrapper}>
                            <p className={styles.leadingDescription}>
                                Configure the style of timer you want for the game or disable it entirely.
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

                        <p className={[styles.description, timed ? styles.active : styles.inactive].join(" ")}>
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

                        <p className={[styles.description, countdown ? styles.active : styles.inactive].join(" ")}>
                            You'll have a set number of seconds to answer each question. Failing to answer correctly in
                            the given time will lose you a life. Answering correctly will reset the timer.
                            {countdown && <span> Select the number of seconds per question below:</span>}
                        </p>

                        {countdown && (
                            <RangeSlider
                                min={0} max={60}
                                value={seconds}
                                variant="primary"
                                disabled={timed}
                                tooltip="auto"
                                tooltipPlacement="bottom"
                                inputProps={{}}
                                data-testid="seconds-slider"
                                onAfterChange={() => {}} //TODO: Remove once lib is updated to not enforce this prop.
                                onChange={this.onChangeCountDownSeconds}
                             />
                        )}
                    </Col>
                </Row>
            </ScrollableContainer>
        );
    }

    reset = () => this.setState({
        timed: this.defaultState.timed,
        countdown: this.defaultState.countdown,
        seconds: this.defaultState.secondsPerQuestion
    });

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

    private onChangeCountDownSeconds = (e: ChangeEvent, value: number) => {
        this.setState({ seconds: value })
    }
}

export default TimeSettingsForm;