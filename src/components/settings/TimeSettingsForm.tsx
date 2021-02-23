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
            <Form.Row>
                <Form.Check
                    inline
                    label="Timed"
                    className={styles.check}
                    checked={timed}
                    onChange={this.onChangeTimed}
                />
                <Form.Check
                    label="Limited Time per Question"
                    className={styles.check}
                    checked={countdown}
                    onChange={this.onChangeCountDown}
                />
            </Form.Row>
        );
    }

    private onChangeTimed = () => {
        const { timed, countdown } = this.state;
        if (!timed && !countdown) {
            this.setState({ timed: true });
        }
        if (timed) {
            this.setState({ timed: false });
        }
    }

    private onChangeCountDown = () => {
        const { timed, countdown } = this.state;
        if (!countdown && !timed) {
            this.setState({ countdown: true });
        }
        if (countdown) {
            this.setState({ countdown: false });
        }
    }
}

export default TimeSettingsForm;