import { Component } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { KanaSettings } from "../../types/GameSettings";
import styles from "../../styles/sass/components/settings/KanaGameSettingsMenu.module.scss";

interface KanaSettingsProps {
    onSelect: (settings: KanaSettings) => void;
}

interface KanaSettingsState {
    hiragana: boolean;
    katakana: boolean;
    diagraphs: boolean;
    quantity: number;
}

class KanaSettingsForm extends Component<KanaSettingsProps, KanaSettingsState> {

    private readonly defaultState = { hiragana: true, katakana: false, diagraphs: false, quantity: 50 };

    constructor(props: KanaSettingsProps | Readonly<KanaSettingsProps>) {
        super(props);
        this.state = this.defaultState;
    }

    componentDidMount() {
        this.props.onSelect(this.defaultState);
    }

    componentDidUpdate(prevProps: Readonly<KanaSettingsProps>, prevState: Readonly<KanaSettingsState>) {
        if (prevState !== this.state) {
            const { hiragana, katakana, diagraphs, quantity } = this.state;
            this.props.onSelect({ hiragana, katakana, diagraphs, quantity });
        }
    }

    render() {
        const { hiragana, katakana, diagraphs, quantity } = this.state;

        return (
            <Row>
                <Col>
                    <Form.Check
                        inline
                        label="Hiragana"
                        className={styles.check}
                        checked={hiragana}
                        onChange={() => this.setState({ hiragana: !hiragana })}
                        disabled={hiragana && !katakana}
                        data-testid="Hiragana"
                    />
                    <Form.Check
                        inline
                        label="Katakana"
                        className={styles.check}
                        checked={katakana}
                        onChange={() => this.setState({ katakana: !katakana })}
                        disabled={katakana && !hiragana}
                        data-testid="Katakana"
                    />
                    <Form.Check
                        label="Diagraphs"
                        className={styles.check}
                        checked={diagraphs}
                        onChange={() => this.setState({ diagraphs: !diagraphs })}
                        data-testid="Diagraphs"
                    />

                    <InputGroup hasValidation>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Quantity</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            onChange={(e) => this.setState({ quantity: Number(e.target.value) })}
                            type="number"
                            required
                            value={quantity}
                            placeholder="Enter kana quantity"
                            isInvalid={quantity < 1 || quantity > 214}
                        />
                    </InputGroup>
                </Col>

            </Row>
        );
    }

    reset = () => this.setState(this.defaultState);
}

export default KanaSettingsForm;