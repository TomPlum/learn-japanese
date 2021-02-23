import { Component } from "react";
import { TimeSettings } from "../../types/GameSettings";
import { Form } from "react-bootstrap";
import styles from "../../styles/sass/components/settings/GameSettingsMenu.module.scss";

interface TimeSettingsFormProps {
    onChange: (settings: TimeSettings) => void;
}

interface TimeSettingsFormState {
    timed: boolean;
    countdown: boolean;
}

class TimeSettingsForm extends Component<TimeSettingsFormProps, TimeSettingsFormState> {
    constructor(props: TimeSettingsFormProps | Readonly<TimeSettingsFormProps>) {
        super(props);
        this.state = {
            timed: true,
            countdown: false
        }
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
                    />
                </Form.Row>
            </>
        );
    }

    reset = () => this.setState({ timed: true, countdown: false });

    private onChangeTimed = () => {
        const { timed, countdown } = this.state;
        if (timed) {
            this.setState({ timed: false });
            if (countdown) {
                this.setState({ countdown: false })
            }
        } else {
            this.setState({ timed: true, countdown: false });
        }
      /*  if (!timed && !countdown) {
            this.setState({ timed: true });
        }
        if (!timed && countdown) {
            this.setState({ timed: true, countdown: false });
        }
        if (timed) {
            this.setState({ timed: false, countdown: true });
        }*/
    }

    private onChangeCountDown = () => {
        const { timed, countdown } = this.state;
        if (countdown) {
            this.setState({ countdown: false });
            if (timed) {
                this.setState({ timed: false })
            }
        } else {
            this.setState({ countdown: true, timed: false });
        }
       /* if (!countdown && !timed) {
            this.setState({ countdown: true });
        }
        if (!countdown && timed) {
            this.setState({ countdown: true, timed: false });
        }
        if (countdown) {
            this.setState({ countdown: false, timed: true });
        }*/
    }
}

export default TimeSettingsForm;