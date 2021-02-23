import React, { Component } from "react";
import { Button, Card, Col, Container, Form } from "react-bootstrap";
import { GameMode } from "../../types/GameMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/sass/components/settings/GameSettingsMenu.module.scss";
import { faCheck, faHeart, faLightbulb, faStopwatch, faUndo } from "@fortawesome/free-solid-svg-icons";
import { GameSettings, KanaSettings, LifeSettings, TimeSettings, TipSettings } from "../../types/GameSettings";
import { TipQuantity } from "../../types/TipQuantity";
import { LifeQuantity } from "../../types/LifeQuantity";
import KanaSettingsForm from "./KanaSettingsForm";
import TipSettingsForm from "./TipSettingsForm";
import LifeSettingsForm from "./LifeSettingsForm";
import TimeSettingsForm from "./TimeSettingsForm";

interface GameSettingsMenuProps {
    mode: GameMode;
    onSubmit: (settings: GameSettings) => void;
}

interface GameSettingsMenuState {
    kanaSettings: KanaSettings;
    tipSettings: TipSettings;
    lifeSettings: LifeSettings;
    timeSettings: TimeSettings;
}

class GameSettingsMenu extends Component<GameSettingsMenuProps, GameSettingsMenuState> {

    private readonly kana: React.RefObject<KanaSettingsForm>;
    private readonly tips: React.RefObject<TipSettingsForm>;
    private readonly lives: React.RefObject<LifeSettingsForm>;
    private readonly time: React.RefObject<TimeSettingsForm>;

    constructor(props: GameSettingsMenuProps | Readonly<GameSettingsMenuProps>) {
        super(props);

        this.kana = React.createRef();
        this.tips = React.createRef();
        this.lives = React.createRef();
        this.time = React.createRef();

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
            timeSettings: {
                timed: true,
                countdown: false
            },
        }
    }

    render() {
        return (
            <Container fluid className={styles.wrapper}>
                <Card bg="dark" className="mb-2">
                    <Card.Header className={styles.header}>
                        <span className={styles.kanaIcon}>あ</span> Kana
                    </Card.Header>

                    <Card.Body>
                        <KanaSettingsForm ref={this.kana} onSelect={(settings) => this.setState({ kanaSettings: settings })}/>
                    </Card.Body>
                </Card>

                <Card bg="dark" className="mb-2">
                    <Card.Header className={styles.header}>
                        <FontAwesomeIcon icon={faLightbulb} className={styles.tipsIcon}/> Tips
                    </Card.Header>

                    <Card.Body>
                        <TipSettingsForm ref={this.tips} onChange={(settings) => this.setState({ tipSettings: settings })}/>
                    </Card.Body>
                </Card>

                <Card bg="dark" className="mb-2">
                    <Card.Header className={styles.header}>
                        <FontAwesomeIcon icon={faHeart} className={styles.livesIcon}/> Lives
                    </Card.Header>

                    <Card.Body>
                        <LifeSettingsForm ref={this.lives} onChange={(settings) => this.setState({ lifeSettings: settings })}/>
                    </Card.Body>
                </Card>

                <Card bg="dark" className="mb-2">
                    <Card.Header className={styles.header}>
                        <FontAwesomeIcon icon={faStopwatch} className={styles.timeIcon}/> Time
                    </Card.Header>

                    <Card.Body>
                        <TimeSettingsForm ref={this.time} onChange={(settings) => this.setState({ timeSettings: settings })}/>
                    </Card.Body>
                </Card>

                <Card bg="dark" className="mb-2">
                    <Card.Body>
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
                    </Card.Body>
                </Card>
            </Container>
        );
    }

    onConfirmation = () => {
        const { kanaSettings, tipSettings, lifeSettings, timeSettings } = this.state;
        this.props.onSubmit({
            kana: kanaSettings,
            tips: tipSettings,
            lives: lifeSettings,
            time: timeSettings
        });
    }

    onReset = () => {
        this.kana.current?.reset();
        this.tips.current?.reset();
        this.lives.current?.reset();
        this.time.current?.reset();
    }
}

export default GameSettingsMenu;