import { Component } from "react";
import { Col, Form, Row } from "react-bootstrap";
import styles from "../../../styles/sass/components/settings/game/GameSettingsMenu.module.scss";
import TimeSettings, { TimeSettingsBuilder } from "../../../types/session/settings/game/TimeSettings";

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
                    <Form.Check
                        inline
                        label="Timed"
                        type="switch"
                        id="time"
                        className={styles.check}
                        checked={timed}
                        onChange={this.onChangeTimed}
                        data-testid="Timed"
                    />
                    <Form.Check
                        label="Count Down"
                        type="switch"
                        id="countdown"
                        className={styles.check}
                        checked={countdown}
                        onChange={this.onChangeCountDown}
                        data-testid="Countdown"
                    />
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