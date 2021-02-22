import { Component } from "react";
import { Button, Col, Container, Dropdown, Form } from "react-bootstrap";
import { GameMode } from "../types/GameMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/sass/components/GameSettingsMenu.module.scss";
import { faCheck, faHeart, faLightbulb, faStopwatch, faUndo } from "@fortawesome/free-solid-svg-icons";
import { GameSettings } from "../types/GameSettings";
import { TipQuantity } from "../types/TipQuantity";
import { LifeQuantity } from "../types/LifeQuantity";
import LivesSelector from "./LivesSelector";

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
    isTimed: boolean;
    isCountDown: boolean;
}

class GameSettingsMenu extends Component<GameSettingsMenuProps, GameSettingsMenuState> {
    constructor(props: GameSettingsMenuProps | Readonly<GameSettingsMenuProps>) {
        super(props);
        this.state = {
            selectedHiragana: true,
            selectedKatakana: false,
            includeDiagraphs: false,
            tipQuantity: TipQuantity.THREE,
            lifeQuantity: LifeQuantity.FIVE,
            isTimed: true,
            isCountDown: false
        }
    }

    render() {
        const { selectedHiragana, selectedKatakana, includeDiagraphs, tipQuantity, isTimed, isCountDown } = this.state;

        return (
            <Container fluid>
                <Form>
                    <Form.Group>
                        <Form.Row>
                            <Form.Label className={styles.heading}>{this.props.mode} Game Settings</Form.Label>
                        </Form.Row>

                        <Form.Row>
                            <Form.Label className={styles.label}>
                                <span className={styles.kanaIcon}>あ</span> Kana
                            </Form.Label>
                        </Form.Row>

                        <Form.Row>
                            <Form.Check
                                inline
                                label="Hiragana"
                                className={styles.check}
                                checked={selectedHiragana}
                                onChange={() => this.setState({ selectedHiragana: !selectedHiragana })}
                                disabled={selectedHiragana && !selectedKatakana}
                            />
                            <Form.Check
                                inline
                                label="Katakana"
                                className={styles.check}
                                checked={selectedKatakana}
                                onChange={() => this.setState({ selectedKatakana: !selectedKatakana })}
                                disabled={selectedKatakana && !selectedHiragana}
                            />
                            <Form.Check
                                label="Include Diagraphs"
                                className={styles.check}
                                checked={includeDiagraphs}
                                onChange={() => this.setState({ includeDiagraphs: !includeDiagraphs })}
                            />
                        </Form.Row>
                    </Form.Group>

                    <Form.Group>
                        <Form.Row>
                            <Form.Label className={styles.label}>
                                <FontAwesomeIcon icon={faLightbulb} className={styles.tipsIcon}/> Tips
                            </Form.Label>
                        </Form.Row>

                        <Form.Row>
                            <Form.Check
                                inline
                                label="1"
                                className={styles.check}
                                checked={tipQuantity === TipQuantity.ONE}
                                onChange={() => this.setState({ tipQuantity: TipQuantity.ONE })}
                            />
                            <Form.Check
                                inline
                                label="3"
                                className={styles.check}
                                checked={tipQuantity === TipQuantity.THREE}
                                onChange={() => this.setState({ tipQuantity: TipQuantity.THREE })}
                            />
                            <Form.Check
                                label="Unlimited"
                                className={styles.check}
                                checked={tipQuantity === TipQuantity.UNLIMITED}
                                onChange={() => this.setState({ tipQuantity: TipQuantity.UNLIMITED })}
                            />
                        </Form.Row>
                    </Form.Group>

                    <Form.Group>
                        <Form.Row>
                            <Form.Label className={styles.label}>
                                <FontAwesomeIcon icon={faHeart} className={styles.livesIcon}/> Lives
                            </Form.Label>
                        </Form.Row>

                        <Form.Row>
                            <LivesSelector onSelect={(quantity) => this.setState({lifeQuantity: quantity})} />
                        </Form.Row>
                    </Form.Group>

                    <Form.Group>
                        <Form.Row>
                            <Form.Label className={styles.label}>
                                <FontAwesomeIcon icon={faStopwatch} className={styles.timeIcon}/> Time
                            </Form.Label>
                        </Form.Row>

                        <Form.Row>
                            <Form.Check
                                inline
                                label="Timed"
                                className={styles.check}
                                checked={isTimed}
                                onChange={() => this.setState({ isTimed: !isTimed, isCountDown: !isCountDown })}
                            />
                            <Form.Check
                                label="Limited Time per Question"
                                className={styles.check}
                                checked={isCountDown}
                                onChange={() => this.setState({ isTimed: !isTimed, isCountDown: !isCountDown })}
                            />
                        </Form.Row>
                    </Form.Group>

                    <Form.Row>
                        <Col className={styles.noGuttersLeft}>
                            <Button variant="danger" block onClick={this.onReset} className={styles.reset}>
                                <FontAwesomeIcon icon={faUndo}/> Reset
                            </Button>
                        </Col>
                        <Col className={styles.noGuttersRight}>
                            <Button variant="success" block onClick={this.onConfirmation} className={styles.confirm}>
                                <FontAwesomeIcon icon={faCheck}/> Confirm
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Container>
        );
    }

    onConfirmation = () => {
        const { selectedHiragana, selectedKatakana, includeDiagraphs, tipQuantity, lifeQuantity, isTimed } = this.state;
        this.props.onSubmit({
            kana: {
                includeHiragana: selectedHiragana,
                includeKatakana: selectedKatakana,
                includeDiagraphs: includeDiagraphs,
            },
            tips: tipQuantity,
            lives: lifeQuantity,
            isTimed: isTimed
        });
    }

    onReset = () => {
        this.setState({
            selectedHiragana: true,
            selectedKatakana: false,
            includeDiagraphs: false,
            tipQuantity: TipQuantity.THREE,
            lifeQuantity: LifeQuantity.FIVE
        });
    }
}

export default GameSettingsMenu;