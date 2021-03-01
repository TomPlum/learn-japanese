import { Component } from "react";
import { DisplaySettings } from "../../types/GameSettings";
import { DisplayType } from "../../types/DisplayType";
import { Form } from "react-bootstrap";
import styles from "../../styles/sass/components/settings/GameSettingsMenu.module.scss";

interface DisplaySettingsFormProps {
    onChange: (settings: DisplaySettings) => void;
}

interface DisplaySettingsFormState {
    type: DisplayType;
    cards: number;
}

class DisplaySettingsForm extends Component<DisplaySettingsFormProps, DisplaySettingsFormState> {

    private readonly defaultState = { type: DisplayType.SINGLE_KANA, cards: 2, };

    constructor(props: Readonly<DisplaySettingsFormProps> | DisplaySettingsFormProps) {
        super(props);
        this.state = this.defaultState;
    }

    componentDidMount() {
        this.props.onChange(this.defaultState);
    }

    componentDidUpdate(prevProps: Readonly<DisplaySettingsFormProps>, prevState: Readonly<DisplaySettingsFormState>) {
        if (prevState !== this.state) {
            const { type, cards } = this.state;
            this.props.onChange({ type, cards });
        }
    }

    render() {
        const { type } = this.state;

        return (
            <>
                <Form.Row>
                    <Form.Check
                        inline
                        label="Romanji"
                        type="switch"
                        id="romanji"
                        className={styles.check}
                        checked={type === DisplayType.SINGLE_KANA}
                        onChange={() => this.setState({ type: DisplayType.SINGLE_KANA })}
                    />
                </Form.Row>
                <Form.Row>
                    <Form.Check
                        inline
                        label="Kana"
                        type="switch"
                        id="kana"
                        className={styles.check}
                        checked={type === DisplayType.MULTIPLE_CARDS}
                        onChange={() => this.setState({ type: DisplayType.MULTIPLE_CARDS })}
                    />
                </Form.Row>
            </>
        );
    }

    reset = () => this.setState(this.defaultState);
}

export default DisplaySettingsForm;