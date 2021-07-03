import { Component } from "react";
import { TimeSettings } from "../../../types/session/GameSettings";
import { Col, Form, Row } from "react-bootstrap";
import styles from "../../../styles/sass/components/settings/kana/KanaGameSettingsMenu.module.scss";

export interface TimeSettingsFormProps {
    onChange: (settings: TimeSettings) => void;
}

interface TimeSettingsFormState {
    timed: boolean;
    countdown: boolean;
}

class TimeSettingsForm extends Component<TimeSettingsFormProps, TimeSettingsFormState> {

    private readonly defaultState = { timed: true, countdown: false };

    constructor(props: TimeSettingsFormProps | Readonly<TimeSettingsFormProps>) {
        super(props);
        this.state = this.defaultState;
    }

    componentDidMount() {
        this.props.onChange(this.defaultState);
    }

    componentDidUpdate(prevProps: Readonly<TimeSettingsFormProps>, prevState: Readonly<TimeSettingsFormState>) {
        if (prevState !== this.state) {
            const { timed, countdown } = this.state;
            this.props.onChange({ timed, countdown });
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