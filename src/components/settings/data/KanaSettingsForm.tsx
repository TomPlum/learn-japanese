import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import styles from "../../../styles/sass/components/settings/data/KanaSettingsForm.module.scss";
import KanaSettings, { KanaSettingsBuilder } from "../../../types/session/settings/data/KanaSettings";
import ToggleSwitch from "../../ui/ToggleSwitch";
import DataSettingsMenu, { DataSettingsMenuProps } from "./DataSettingsMenu";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";

interface KanaSettingsState {
    hiragana: boolean;
    katakana: boolean;
    diagraphs: boolean;
    quantity?: number;
}

class KanaSettingsForm extends Component<DataSettingsMenuProps<KanaSettings>, KanaSettingsState> {

    private readonly defaultState = new KanaSettingsBuilder().withHiragana().build();

    constructor(props: DataSettingsMenuProps<KanaSettings> | Readonly<DataSettingsMenuProps<KanaSettings>>) {
        super(props);
        this.state = {
            hiragana: this.defaultState.hiragana,
            katakana: this.defaultState.katakana,
            diagraphs: this.defaultState.diagraphs,
            quantity: this.defaultState.quantity
        }
    }

    render() {
        const { title, icon, onQuit } = this.props;
        const { hiragana, katakana, diagraphs, quantity } = this.state;

        return (
            <DataSettingsMenu title={title} icon={icon} onQuit={onQuit} onReset={this.reset} onConfirm={this.confirm} isValid={this.isValid}>
                <Row>
                    <Col>
                        <ToggleSwitch
                            label="Hiragana"
                            enabled={hiragana}
                            data-testid="hiragana"
                            className={styles.switch}
                            disabled={hiragana && !katakana}
                            onChange={() => this.setState({ hiragana: !hiragana })}
                        />

                        <p className={hiragana ? styles.description : styles.disabled}>
                            Hiragana is the main syllabary that defines all the sounds that make up the spoken Japanese
                            language. It is also used in the written language for Japanese words and furigana. These
                            characters are quite cursive in nature.
                        </p>

                        <ToggleSwitch
                            label="Katakana"
                            enabled={katakana}
                            className={styles.switch}
                            disabled={katakana && !hiragana}
                            data-testid="katakana"
                            onChange={() => this.setState({ katakana: !katakana })}
                        />

                        <p className={katakana ? styles.description : styles.disabled}>
                            Katakana is a mirror of the aforementioned Hiragana syllabary. There is a 1 to 1 mapping
                            of each kana that is pronounced in the same way. They are written differently and are
                            generally only used for loan words and onomatopoeia. These characters are much more angular
                            and linear than Hiragana.
                        </p>

                        <ToggleSwitch
                            label="Diagraphs"
                            enabled={diagraphs}
                            className={styles.switch}
                            data-testid="diagraphs"
                            onChange={() => this.setState({ diagraphs: !diagraphs })}
                        />

                        <p className={diagraphs ? styles.description : styles.disabled}>
                            Diagraphs are combinations of two kana. Both syllabaries have the same diagraphs in their
                            respective kana.
                        </p>

                        <InputGroup hasValidation>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faBalanceScale} fixedWidth />
                                </InputGroup.Text>
                            </InputGroup.Prepend>

                            <Form.Control
                                required
                                type="number"
                                placeholder="Quantity"
                                className={styles.quantity}
                                isInvalid={!quantity || quantity < 1 || quantity > 214}
                                onChange={(e) => this.setState({ quantity: Number(e.target.value) })}
                            />
                        </InputGroup>
                    </Col>

                </Row>
            </DataSettingsMenu>
        );
    }

    private reset = () => {
        this.setState({
            hiragana: this.defaultState.hiragana,
            katakana: this.defaultState.katakana,
            diagraphs: this.defaultState.diagraphs,
            quantity: this.defaultState.quantity
        });
        this.props.onReset();
    }

    private confirm = () => {
        const { hiragana, katakana, diagraphs, quantity } = this.state;

        const settings = new KanaSettingsBuilder()
            .withHiragana(hiragana)
            .withKatakana(katakana)
            .withDiagraphs(diagraphs)
            .withQuantity(quantity)
            .build();

        this.props.onConfirm(settings);
    }

    private isValid = (): boolean => {
        const { quantity } = this.state;
        return !!quantity && quantity > 0;
    }
}

export default KanaSettingsForm;
