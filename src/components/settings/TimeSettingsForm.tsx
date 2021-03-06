import { Component } from "react";
import { TimeSettings } from "../../types/GameSettings";
import { Form } from "react-bootstrap";
import styles from "../../styles/sass/components/settings/GameSettingsMenu.module.scss";

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
            <>
                <Form.Row>
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
                </Form.Row>
                <Form.Row>
                    <Form.Check
                        label="Count Down"
                        type="switch"
                        id="countdown"
                        className={styles.check}
                        checked={countdown}
                        onChange={this.onChangeCountDown}
                        data-testid="Countdown"
                    />
                </Form.Row>
            </>
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