import { Component } from "react";
import { DisplaySettings } from "../../types/GameSettings";
import { DisplayType } from "../../types/DisplayType";
import DisplayTypeButton from "./DisplayTypeButton";
import { faStop, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";

interface DisplaySettingsFormProps {
    onChange: (settings: DisplaySettings) => void;
}

interface DisplaySettingsFormState {
    type: DisplayType;
    cards: number;
}

class DisplaySettingsForm extends Component<DisplaySettingsFormProps, DisplaySettingsFormState> {

    private readonly defaultState = { type: DisplayType.SINGLE_KANA, cards: 1, };

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
            <Row>
                <Col>
                    <DisplayTypeButton
                        text="Romanji"
                        icon={faStop}
                        selected={type === DisplayType.SINGLE_KANA}
                        onClick={() => this.setState({ type: DisplayType.SINGLE_KANA, cards: 1 })}
                    />
                </Col>
                <Col>
                    <DisplayTypeButton
                        text="Kana"
                        icon={faThLarge}
                        selected={type === DisplayType.MULTIPLE_CARDS}
                        onClick={() => this.setState({ type: DisplayType.MULTIPLE_CARDS, cards: 4 })}
                    />
                </Col>
            </Row>
        );
    }

    reset = () => this.setState(this.defaultState);
}

export default DisplaySettingsForm;