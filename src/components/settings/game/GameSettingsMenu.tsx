import React, { Component } from "react";
import QuestionSettingsForm from "./QuestionSettingsForm";
import HintSettingsForm from "./HintSettingsForm";
import LifeSettingsForm from "./LifeSettingsForm";
import TimeSettingsForm from "./TimeSettingsForm";
import GameSettings, { GameSettingsBuilder } from "../../../domain/session/settings/game/GameSettings";
import { Button, Card, Col, Form, Nav, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck, faHeartbeat, faLightbulb, faQuestionCircle, faStopwatch, faUndo } from "@fortawesome/free-solid-svg-icons";
import QuestionSettings from "../../../domain/session/settings/game/QuestionSettings";
import HintSettings from "../../../domain/session/settings/game/HintSettings";
import LifeSettings from "../../../domain/session/settings/game/LifeSettings";
import TimeSettings from "../../../domain/session/settings/game/TimeSettings";
import styles from "../../../styles/sass/components/settings/game/GameSettingsMenu.module.scss";

export interface GameSettingsMenuProps {
    onQuit: () => void;
    onReset: () => void;
    onSelect: (settings: GameSettings) => void;
}

interface GameSettingsMenuState {
    questionSettings: QuestionSettings;
    hintSettings: HintSettings;
    lifeSettings: LifeSettings;
    timeSettings: TimeSettings;
}

class GameSettingsMenu extends Component<GameSettingsMenuProps, GameSettingsMenuState> {
    private readonly display: React.RefObject<QuestionSettingsForm>;
    private readonly hints: React.RefObject<HintSettingsForm>;
    private readonly lives: React.RefObject<LifeSettingsForm>;
    private readonly time: React.RefObject<TimeSettingsForm>;

    constructor(props: GameSettingsMenuProps | Readonly<GameSettingsMenuProps>) {
        super(props);

        this.display = React.createRef();
        this.hints = React.createRef();
        this.lives = React.createRef();
        this.time = React.createRef();

        const defaults = new GameSettingsBuilder().build();

        this.state = {
            questionSettings: defaults.question,
            hintSettings: defaults.hints,
            lifeSettings: defaults.lives,
            timeSettings: defaults.time,
        }
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <Card bg="dark" className="mb-2">
                    <Tab.Container defaultActiveKey="question">
                        <Card.Header>
                            <Nav variant="pills" fill>
                                <Nav.Item>
                                    <Nav.Link eventKey="question">
                                        <FontAwesomeIcon
                                            fixedWidth
                                            icon={faQuestionCircle}
                                            title="Question Settings"
                                            className={[styles.questionIcon, styles.navIcon].join(" ")}
                                        />
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="hints">
                                        <FontAwesomeIcon
                                            fixedWidth
                                            icon={faLightbulb}
                                            title="Hint Settings"
                                            className={[styles.hintsIcon, styles.navIcon].join(" ")}
                                        />
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="lives">
                                        <FontAwesomeIcon
                                            fixedWidth
                                            icon={faHeartbeat}
                                            title="Life Settings"
                                            className={[styles.livesIcon, styles.navIcon].join(" ")}
                                        />
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="time">
                                        <FontAwesomeIcon
                                            fixedWidth
                                            icon={faStopwatch}
                                            title="Time Settings"
                                            className={[styles.timeIcon, styles.navIcon].join(" ")}
                                        />
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>

                        <Card.Body>
                            <Tab.Content>
                                <Tab.Pane eventKey="question" className={styles.pane}>
                                    <Card.Title className={styles.title}>
                                        <FontAwesomeIcon
                                            fixedWidth
                                            icon={faQuestionCircle}
                                            className={styles.questionIcon}
                                        />
                                        <span className={styles.titleText}>Question Settings</span>
                                    </Card.Title>

                                    <QuestionSettingsForm
                                        ref={this.display}
                                        onChange={(settings) => this.setState({ questionSettings: settings })}
                                    />
                                </Tab.Pane>
                            </Tab.Content>

                            <Tab.Content>
                                <Tab.Pane eventKey="hints" className={styles.pane}>
                                    <Card.Title className={styles.title}>
                                        <FontAwesomeIcon
                                            fixedWidth
                                            icon={faLightbulb}
                                            className={styles.hintsIcon}
                                        />
                                        <span className={styles.titleText}>Hint Settings</span>
                                    </Card.Title>

                                    <HintSettingsForm
                                        ref={this.hints}
                                        onChange={(settings) => this.setState({ hintSettings: settings })}
                                    />
                                </Tab.Pane>
                            </Tab.Content>

                            <Tab.Content>
                                <Tab.Pane eventKey="lives" className={styles.pane}>
                                    <Card.Title className={styles.title}>
                                        <FontAwesomeIcon
                                            fixedWidth
                                            icon={faHeartbeat}
                                            className={styles.livesIcon}
                                        />
                                        <span className={styles.titleText}>Life Settings</span>
                                    </Card.Title>

                                    <LifeSettingsForm
                                        ref={this.lives}
                                        onChange={(settings) => this.setState({ lifeSettings: settings })}
                                    />
                                </Tab.Pane>
                            </Tab.Content>

                            <Tab.Content>
                                <Tab.Pane eventKey="time" className={styles.pane}>
                                    <Card.Title className={styles.title}>
                                        <FontAwesomeIcon
                                            fixedWidth
                                            icon={faStopwatch}
                                            className={styles.timeIcon}
                                        />
                                        <span className={styles.titleText}>Time Settings</span>
                                    </Card.Title>

                                    <TimeSettingsForm
                                        ref={this.time}
                                        onChange={(settings) => this.setState({ timeSettings: settings })}
                                    />
                                </Tab.Pane>
                            </Tab.Content>
                        </Card.Body>

                        <Card.Footer className={styles.footer}>
                            <Form.Row>
                                <Col className={styles.noGuttersLeft}>
                                    <Button variant="danger" block onClick={() => this.props.onQuit()} className={styles.button}>
                                        <FontAwesomeIcon icon={faArrowLeft} />
                                        <span className={styles.buttonText}> Back</span>
                                    </Button>
                                </Col>

                                <Col className={[styles.noGuttersLeft, styles.noGuttersRight].join(" ")}>
                                    <Button variant="warning" block onClick={this.onReset} className={styles.button}>
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
        const { questionSettings, hintSettings, lifeSettings, timeSettings } = this.state;

        const settings = new GameSettingsBuilder()
            .withQuestionSettings(questionSettings)
            .withHintSettings(hintSettings)
            .withLifeSettings(lifeSettings)
            .withTimeSettings(timeSettings)
            .build();

        this.props.onSelect(settings);
    }

    onReset = () => {
        this.display.current?.reset();
        this.hints.current?.reset();
        this.lives.current?.reset();
        this.time.current?.reset();
        this.props.onReset();
    }
}

export default GameSettingsMenu;
