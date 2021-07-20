import React, { Component } from "react";
import QuestionSettingsForm from "./QuestionSettingsForm";
import HintSettingsForm from "./HintSettingsForm";
import LifeSettingsForm from "./LifeSettingsForm";
import TimeSettingsForm from "./TimeSettingsForm";
import GameSettings, { GameSettingsBuilder } from "../../../types/session/settings/game/GameSettings";
import { Button, Card, Col, Form, Nav, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck, faGamepad, faHeart, faLightbulb, faStopwatch, faUndo } from "@fortawesome/free-solid-svg-icons";
import QuestionSettings from "../../../types/session/settings/game/QuestionSettings";
import HintSettings from "../../../types/session/settings/game/HintSettings";
import LifeSettings from "../../../types/session/settings/game/LifeSettings";
import TimeSettings from "../../../types/session/settings/game/TimeSettings";
import styles from "../../../styles/sass/components/settings/game/GameSettingsMenu.module.scss";

export interface GameSettingsMenuProps {
    onSelect: (settings: GameSettings) => void;
    onQuit: () => void;
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
                    <Tab.Container defaultActiveKey="mode">
                        <Card.Header>
                            <Nav variant="pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="mode">
                                        <FontAwesomeIcon icon={faGamepad} className={styles.modeIcon}/>
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
                                    <QuestionSettingsForm
                                        ref={this.display}
                                        onChange={(settings) => this.setState({ questionSettings: settings })}
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
    }
}

export default GameSettingsMenu;