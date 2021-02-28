import React, { Component } from "react";
import { Button, Card, Col, Container, Form } from "react-bootstrap";
import { GameMode } from "../../types/GameMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/sass/components/settings/GameSettingsMenu.module.scss";
import { faCheck, faHeart, faLightbulb, faStopwatch, faUndo } from "@fortawesome/free-solid-svg-icons";
import { GameSettings, HintSettings, KanaSettings, LifeSettings, TimeSettings } from "../../types/GameSettings";
import { HintQuantity } from "../../types/HintQuantity";
import { LifeQuantity } from "../../types/LifeQuantity";
import KanaSettingsForm from "./KanaSettingsForm";
import HintSettingsForm from "./HintSettingsForm";
import LifeSettingsForm from "./LifeSettingsForm";
import TimeSettingsForm from "./TimeSettingsForm";
import { DisplayType } from "../../types/DisplayType";
import { defaultHintSettings, defaultKanaSettings, defaultLifeSettings, defaultTimeSettings } from "../../data/GameModePresets";

interface GameSettingsMenuProps {
    mode: GameMode;
    onSubmit: (settings: GameSettings) => void;
}

interface GameSettingsMenuState {
    kanaSettings: KanaSettings;
    hintSettings: HintSettings;
    lifeSettings: LifeSettings;
    timeSettings: TimeSettings;
}

class GameSettingsMenu extends Component<GameSettingsMenuProps, GameSettingsMenuState> {

    private readonly kana: React.RefObject<KanaSettingsForm>;
    private readonly hints: React.RefObject<HintSettingsForm>;
    private readonly lives: React.RefObject<LifeSettingsForm>;
    private readonly time: React.RefObject<TimeSettingsForm>;

    constructor(props: GameSettingsMenuProps | Readonly<GameSettingsMenuProps>) {
        super(props);

        this.kana = React.createRef();
        this.hints = React.createRef();
        this.lives = React.createRef();
        this.time = React.createRef();

        this.state = {
            kanaSettings: defaultKanaSettings,
            hintSettings: defaultHintSettings,
            lifeSettings: defaultLifeSettings,
            timeSettings: defaultTimeSettings,
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
                        <FontAwesomeIcon icon={faLightbulb} className={styles.tipsIcon}/> Hints
                    </Card.Header>

                    <Card.Body>
                        <HintSettingsForm ref={this.hints} onChange={(settings) => this.setState({ hintSettings: settings })}/>
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
        const { kanaSettings, hintSettings, lifeSettings, timeSettings } = this.state;
        this.props.onSubmit({
            display: { type: DisplayType.SINGLE_KANA, cards: 1 },
            kana: kanaSettings,
            hints: hintSettings,
            lives: lifeSettings,
            time: timeSettings
        });
    }

    onReset = () => {
        this.kana.current?.reset();
        this.hints.current?.reset();
        this.lives.current?.reset();
        this.time.current?.reset();
    }
}

export default GameSettingsMenu;