import { Component } from "react";
import { DisplaySettings } from "../../types/GameSettings";
import { DisplayType } from "../../types/DisplayType";
import DisplayTypeButton from "./DisplayTypeButton";
import { faFont, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import styles from "../../styles/sass/components/settings/DisplaySettingsForm.module.scss";
import { Environment } from "../../utility/Environment";

export interface DisplaySettingsFormProps {
    onChange: (settings: DisplaySettings) => void;
}

interface DisplaySettingsFormState {
    type: DisplayType;
    cards: number;
}

class DisplaySettingsForm extends Component<DisplaySettingsFormProps, DisplaySettingsFormState> {

    private readonly defaultState = { type: DisplayType.ROMAJI, cards: 1, };

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
                        icon={faFont}
                        type={DisplayType.ROMAJI}
                        selected={type}
                        onClick={(type) => this.setState({ type, cards: 1 })}
                    />
                </Col>
                <Col>
                    <DisplayTypeButton
                        icon={faThLarge}
                        type={DisplayType.KANA}
                        selected={type}
                        onClick={(type) => this.setState({ type, cards: 4 })}
                    />
                </Col>
                <Col xs={12}>
                    <span className={styles.description}>{this.getDescription()}</span>
                </Col>
            </Row>
        );
    }

    reset = () => this.setState(this.defaultState);

    private getDescription = () => Environment.variable(this.state.type + "_MODE_DESC");
}

export default DisplaySettingsForm;