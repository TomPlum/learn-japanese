import {Component} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {GameMode} from "../types/GameMode";
import {faCog, faFire, faFont, faGraduationCap, faPlay, faStopwatch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import GameModeButton from "./GameModeButton";
import GameSettingsMenu, {TestSettings} from "./GameSettingsMenu";
import styles from "../styles/sass/components/GameModeMenu.module.scss";

interface GameModeMenuProps {
    onSelectedMode: (mode: GameMode, settings: TestSettings) => void;
}

interface GameModeMenuState {
    selected: GameMode;
    settings: TestSettings;
    isConfiguringGameMode: boolean;
}

class GameModeMenu extends Component<GameModeMenuProps, GameModeMenuState> {
    constructor(props: GameModeMenuProps | Readonly<GameModeMenuProps>) {
        super(props);
        this.state = {
            selected: GameMode.ROMANJI,
            isConfiguringGameMode: false,
            settings: {
                includeHiragana: true,
                includeKatakana: false
            }
        }
    }

    render() {
        const {isConfiguringGameMode, selected} = this.state;

        return (
            <>
                {!isConfiguringGameMode && <Container fluid className={styles.wrapper}>
                    <Row>
                        <Col className={styles.descWrapper}>
                            <p className={styles.desc}>{this.getSelectedModeDescription()}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={styles.leftColumn}>
                            <GameModeButton
                                mode={GameMode.RELAXED}
                                icon={faGraduationCap}
                                iconColour={"#fdb40e"}
                                isSelected={selected === GameMode.RELAXED}
                                onClick={this.onSelectMode}
                            />
                        </Col>
                        <Col className={styles.rightColumn}>
                            <GameModeButton
                                mode={GameMode.ROMANJI}
                                isSelected={selected === GameMode.ROMANJI}
                                icon={faFont}
                                iconColour={"#1785e2"}
                                onClick={this.onSelectMode}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col className={styles.leftColumn}>
                            <GameModeButton
                                mode={GameMode.TIME_ATTACK}
                                icon={faStopwatch}
                                iconColour={"#ff7730"}
                                isSelected={selected === GameMode.TIME_ATTACK}
                                onClick={this.onSelectMode}
                            />
                        </Col>
                        <Col className={styles.rightColumn}>
                            <GameModeButton
                                mode={GameMode.HARDCORE}
                                icon={faFire}
                                iconColour={"#fc3131"}
                                isSelected={selected === GameMode.HARDCORE}
                                onClick={this.onSelectMode}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button variant="secondary" className={styles.settingsButton}
                                    onClick={this.onLaunchSettings}>
                                <FontAwesomeIcon size="sm" icon={faCog}/> Settings
                            </Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button variant="success" className={styles.playButton} onClick={this.confirmSelected}>
                                <FontAwesomeIcon size="sm" icon={faPlay}/> Start
                            </Button>
                        </Col>
                    </Row>
                </Container>}

                {isConfiguringGameMode && <GameSettingsMenu mode={selected} onSubmit={this.setCustomSettings}/>}
            </>
        );
    }

    setCustomSettings = (settings: TestSettings) => this.setState({settings, isConfiguringGameMode: false});

    confirmSelected = () => {
        const {selected, settings} = this.state;
        this.props.onSelectedMode(selected, settings);
    }

    onSelectMode = (mode: GameMode) => this.setState({selected: mode});

    onLaunchSettings = () => this.setState({isConfiguringGameMode: true});

    private getSelectedModeDescription(): string {
        switch (this.state.selected) {
            case GameMode.ROMANJI: {
                return "You're shown kana(s) on screen and you must enter the correct romanji. " +
                    "You're timed, but there's no rush and mistakes aren't punishing.";
            }
            case GameMode.TIME_ATTACK: {
                return "You have 5s seconds to answer, 3 tips and 5 lives. A race against the clock!";
            }
            case GameMode.RELAXED: {
                return "No timers. No lives. No rush. You're learning and want to take your time."
            }
            case GameMode.HARDCORE: {
                return "Less time. More options. No hints. 1 life. This test includes all Hiragana, Katakana and " +
                    "Diagraphs. Can you beat it?"
            }
            default: return "Please selected a game mode to begin.";
        }
    }
}

export default GameModeMenu;