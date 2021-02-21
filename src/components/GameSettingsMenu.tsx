import {Component} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {GameMode} from "../types/GameMode";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "../styles/sass/components/GameSettingsMenu.module.scss";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {GameSettings} from "../types/GameSettings";
import {TipQuantity} from "../types/TipQuantity";
import {LifeQuantity} from "../types/LifeQuantity";

interface GameSettingsMenuProps {
    mode: GameMode;
    onSubmit: (settings: GameSettings) => void;
}

interface GameSettingsMenuState {
    selectedHiragana: boolean;
    selectedKatakana: boolean;
    includeDiagraphs: boolean;
    tipQuantity: TipQuantity;
    lifeQuantity: LifeQuantity;
}

class GameSettingsMenu extends Component<GameSettingsMenuProps, GameSettingsMenuState> {
    constructor(props: GameSettingsMenuProps | Readonly<GameSettingsMenuProps>) {
        super(props);
        this.state = {
            selectedHiragana: true,
            selectedKatakana: false,
            includeDiagraphs: false,
            tipQuantity: TipQuantity.THREE,
            lifeQuantity: LifeQuantity.FIVE
        }
    }

    render() {
        const {selectedHiragana, selectedKatakana, includeDiagraphs, tipQuantity} = this.state;

        return (
            <Container fluid>
                <Form>
                    <Form.Group>
                        <Form.Row>
                            <Form.Label className={styles.heading}>{this.props.mode} Game Settings</Form.Label>
                        </Form.Row>

                        <Form.Row>
                            <Form.Label className={styles.label}>Kana</Form.Label>
                        </Form.Row>

                        <Form.Row>
                            <Form.Check
                                inline
                                label="Hiragana"
                                className={styles.check}
                                checked={selectedHiragana}
                                onChange={() => this.setState({selectedHiragana: !selectedHiragana})}
                                disabled={selectedHiragana && !selectedKatakana}
                            />
                            <Form.Check
                                inline
                                label="Katakana"
                                className={styles.check}
                                checked={selectedKatakana}
                                onChange={() => this.setState({selectedKatakana: !selectedKatakana})}
                                disabled={selectedKatakana && !selectedHiragana}
                            />
                            <Form.Check
                                label="Include Diagraphs"
                                className={styles.check}
                                checked={includeDiagraphs}
                                onChange={() => this.setState({includeDiagraphs: !includeDiagraphs})}
                            />
                        </Form.Row>
                    </Form.Group>

                    <Form.Group>
                        <Form.Row>
                            <Form.Label className={styles.label}>Tips</Form.Label>
                        </Form.Row>

                        <Form.Row>
                            <Form.Check
                                inline
                                label="1"
                                className={styles.check}
                                checked={tipQuantity === TipQuantity.ONE}
                                onChange={() => this.setState({tipQuantity: TipQuantity.ONE})}
                            />
                            <Form.Check
                                inline
                                label="3"
                                className={styles.check}
                                checked={tipQuantity === TipQuantity.THREE}
                                onChange={() => this.setState({tipQuantity: TipQuantity.THREE})}
                            />
                            <Form.Check
                                label="Unlimited"
                                className={styles.check}
                                checked={tipQuantity === TipQuantity.UNLIMITED}
                                onChange={() => this.setState({tipQuantity: TipQuantity.UNLIMITED})}
                            />
                        </Form.Row>
                    </Form.Group>

                    <Form.Group>
                        <Form.Row>
                            <Form.Label className={styles.label}>Lives</Form.Label>
                        </Form.Row>

                        <Form.Row>
                            <Form.Control as="select">
                                {
                                    Object.keys(LifeQuantity)
                                        .map(k => Number(LifeQuantity[k as any]))
                                        .filter(k => !isNaN(k)).map(quantity => {
                                        return <option>{quantity}</option>
                                    })
                                }
                            </Form.Control>
                        </Form.Row>
                    </Form.Group>

                    <Form.Row>
                        <Button variant="success" block onClick={this.onConfirmation} className={styles.confirm}>
                            <FontAwesomeIcon icon={faCheck}/> Confirm
                        </Button>
                    </Form.Row>
                </Form>
            </Container>
        );
    }

    onConfirmation = () => {
        const {selectedHiragana, selectedKatakana, includeDiagraphs, tipQuantity, lifeQuantity} = this.state;
        this.props.onSubmit({
            kana: {
                includeHiragana: selectedHiragana,
                includeKatakana: selectedKatakana,
                includeDiagraphs: includeDiagraphs,
            },
            tipQuantity: tipQuantity,
            lifeQuantity: lifeQuantity
        });
    }
}

export default GameSettingsMenu;