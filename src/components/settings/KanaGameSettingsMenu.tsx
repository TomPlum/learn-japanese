import React, { Component } from "react";
import { Button, Card, Col, Form, Nav, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faGamepad, faHeart, faLightbulb, faStopwatch, faUndo } from "@fortawesome/free-solid-svg-icons";
import { DisplaySettings, GameSettingsBuilder, TimeSettings } from "../../types/session/settings/game/GameSettings";
import KanaSettingsForm from "./kana/KanaSettingsForm";
import HintSettingsForm from "./kana/HintSettingsForm";
import LifeSettingsForm from "./kana/LifeSettingsForm";
import TimeSettingsForm from "./kana/TimeSettingsForm";
import DisplaySettingsForm from "./kana/DisplaySettingsForm";
import styles from "../../styles/sass/components/settings/kana/KanaGameSettingsMenu.module.scss";
import { CustomLearnMenuProps } from "../learn/ModeSelectionMenu";
import { SessionSettings } from "../../types/session/settings/SessionSettings";
import KanaSettings, { KanaSettingsBuilder } from "../../types/session/settings/data/KanaSettings";
import LifeSettings from "../../types/session/settings/game/LifeSettings";
import HintSettings from "../../types/session/settings/game/HintSettings";

interface KanaGameSettingsMenuState {
    displaySettings: DisplaySettings;
    kanaSettings: KanaSettings;
    hintSettings: HintSettings;
    lifeSettings: LifeSettings;
    timeSettings: TimeSettings;
}

class KanaGameSettingsMenu extends Component<CustomLearnMenuProps, KanaGameSettingsMenuState> {

    private readonly display: React.RefObject<DisplaySettingsForm>;
    private readonly kana: React.RefObject<KanaSettingsForm>;
    private readonly hints: React.RefObject<HintSettingsForm>;
    private readonly lives: React.RefObject<LifeSettingsForm>;
    private readonly time: React.RefObject<TimeSettingsForm>;

    constructor(props: CustomLearnMenuProps | Readonly<CustomLearnMenuProps>) {
        super(props);

        this.display = React.createRef();
        this.kana = React.createRef();
        this.hints = React.createRef();
        this.lives = React.createRef();
        this.time = React.createRef();

        const defaults = new GameSettingsBuilder().build();

        this.state = {
            displaySettings: defaults.display,
            kanaSettings: new KanaSettingsBuilder().withHiragana().build(),
            hintSettings: defaults.hints,
            lifeSettings: defaults.lives,
            timeSettings: defaults.time,
        }
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <Card bg="dark" className="mb-2">
                    <Tab.Container defaultActiveKey="mode">
                        <Card.Header>
                            <Nav variant="pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="mode">
                                        <FontAwesomeIcon icon={faGamepad} className={styles.modeIcon}/>
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="kana">
                                        <span className={styles.kanaIcon}>あ</span>
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="hints">
                                        <FontAwesomeIcon icon={faLightbulb} className={styles.hintsIcon}/>
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="lives">
                                        <FontAwesomeIcon icon={faHeart} className={styles.livesIcon}/>
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="time">
                                        <FontAwesomeIcon icon={faStopwatch} className={styles.timeIcon}/>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>

                        <Card.Body>
                            <Tab.Content>
                                <Tab.Pane eventKey="mode" className={styles.pane}>
                                    <Card.Title className={styles.title}>Game Mode Settings</Card.Title>
                                    <DisplaySettingsForm
                                        ref={this.display}
                                        onChange={(settings) => this.setState({ displaySettings: settings })}
                                    />
                                </Tab.Pane>
                            </Tab.Content>

                            <Tab.Content>
                                <Tab.Pane eventKey="kana" className={styles.pane}>
                                    <Card.Title className={styles.title}>Kana Settings</Card.Title>
                                    <KanaSettingsForm
                                        ref={this.kana}
                                        onSelect={(settings) => this.setState({ kanaSettings: settings })}
                                    />
                                </Tab.Pane>
                            </Tab.Content>

                            <Tab.Content>
                                <Tab.Pane eventKey="hints" className={styles.pane}>
                                    <Card.Title className={styles.title}>Hint Settings</Card.Title>
                                    <HintSettingsForm
                                        ref={this.hints}
                                        onChange={(settings) => this.setState({ hintSettings: settings })}
                                    />
                                </Tab.Pane>
                            </Tab.Content>

                            <Tab.Content>
                                <Tab.Pane eventKey="lives" className={styles.pane}>
                                    <Card.Title className={styles.title}>Life Settings</Card.Title>
                                    <LifeSettingsForm
                                        ref={this.lives}
                                        onChange={(settings) => this.setState({ lifeSettings: settings })}
                                    />
                                </Tab.Pane>
                            </Tab.Content>

                            <Tab.Content>
                                <Tab.Pane eventKey="time" className={styles.pane}>
                                    <Card.Title className={styles.title}>Time Settings</Card.Title>
                                    <TimeSettingsForm
                                        ref={this.time}
                                        onChange={(settings) => this.setState({ timeSettings: settings })}
                                    />
                                </Tab.Pane>
                            </Tab.Content>
                        </Card.Body>

                        <Card.Footer>
                            <Form.Row>
                                <Col className={styles.noGuttersLeft}>
                                    <Button variant="danger" block onClick={this.onReset} className={styles.button}>
                                        <FontAwesomeIcon icon={faUndo}/>
                                        <span className={styles.buttonText}> Reset</span>
                                    </Button>
                                </Col>

                                <Col className={styles.noGuttersRight}>
                                    <Button variant="success" block onClick={this.onConfirmation} className={styles.button}>
                                        <FontAwesomeIcon icon={faCheck}/>
                                        <span className={styles.buttonText}> Confirm</span>
                                    </Button>
                                </Col>
                            </Form.Row>
                        </Card.Footer>

                    </Tab.Container>
                </Card>
            </div>
        );
    }

    onConfirmation = () => {
        const { displaySettings, kanaSettings, hintSettings, lifeSettings, timeSettings } = this.state;

        const gameSettings = new GameSettingsBuilder()
            .withDisplaySettings(displaySettings)
            .withHintSettings(hintSettings)
            .withLifeSettings(lifeSettings)
            .withTimeSettings(timeSettings)
            .build();

        const settings = SessionSettings.forGame(kanaSettings, gameSettings);

        this.props.onSelect(settings);
    }

    onReset = () => {
        this.display.current?.reset();
        this.kana.current?.reset();
        this.hints.current?.reset();
        this.lives.current?.reset();
        this.time.current?.reset();
    }
}

export default KanaGameSettingsMenu;