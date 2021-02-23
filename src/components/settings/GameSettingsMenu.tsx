import { Component } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { GameMode } from "../../types/GameMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/sass/components/settings/GameSettingsMenu.module.scss";
import { faCheck, faHeart, faLightbulb, faStopwatch, faUndo } from "@fortawesome/free-solid-svg-icons";
import { GameSettings, KanaSettings, LifeSettings, TipSettings } from "../../types/GameSettings";
import { TipQuantity } from "../../types/TipQuantity";
import { LifeQuantity } from "../../types/LifeQuantity";
import KanaSettingsForm from "./KanaSettingsForm";
import TipSettingsForm from "./TipSettingsForm";
import LifeSettingsForm from "./LifeSettingsForm";

interface GameSettingsMenuProps {
    mode: GameMode;
    onSubmit: (settings: GameSettings) => void;
}

interface GameSettingsMenuState {
    kanaSettings: KanaSettings;
    tipSettings: TipSettings;
    lifeSettings: LifeSettings;
    isTimed: boolean;
    isCountDown: boolean;
}

class GameSettingsMenu extends Component<GameSettingsMenuProps, GameSettingsMenuState> {
    constructor(props: GameSettingsMenuProps | Readonly<GameSettingsMenuProps>) {
        super(props);
        //TODO: Why are defaults here? They are in the form sub-components.
        this.state = {
            kanaSettings: {
                hiragana: true,
                katakana: false,
                diagraphs: false
            },
            tipSettings: {
                enabled: true,
                quantity: TipQuantity.THREE
            },
            lifeSettings: {
                enabled: true,
                quantity: LifeQuantity.FIVE
            },
            isTimed: true,
            isCountDown: false
        }
    }

    render() {
        const { isTimed, isCountDown } = this.state;

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

                        <KanaSettingsForm onSelect={(settings) => this.setState({ kanaSettings: settings })} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Row>
                            <Form.Label className={styles.label}>
                                <FontAwesomeIcon icon={faLightbulb} className={styles.tipsIcon}/> Tips
                            </Form.Label>
                        </Form.Row>

                        <TipSettingsForm onChange={(settings) => this.setState({ tipSettings: settings})} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Row>
                            <Form.Label className={styles.label}>
                                <FontAwesomeIcon icon={faHeart} className={styles.livesIcon}/> Lives
                            </Form.Label>
                        </Form.Row>

                        <LifeSettingsForm onChange={(settings) => this.setState({ lifeSettings: settings})} />
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
        const { kanaSettings, tipSettings, lifeSettings, isTimed } = this.state;
        this.props.onSubmit({
            kana: kanaSettings,
            tips: tipSettings,
            lives: lifeSettings,
            isTimed: isTimed
        });
    }

    onReset = () => {
        this.setState({
            kanaSettings: {
                hiragana: true,
                katakana: false,
                diagraphs: false
            },
            tipSettings: {
                enabled: true,
                quantity: TipQuantity.THREE
            },
            lifeSettings: {
                enabled: true,
                quantity: LifeQuantity.FIVE
            }
        });
    }
}

export default GameSettingsMenu;