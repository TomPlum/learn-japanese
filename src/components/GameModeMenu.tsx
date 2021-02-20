import {Component} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {GameMode} from "../types/GameMode";
import {faCircle, faCog, faFire, faGlobe, faPlay, faStopwatch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import GameModeButton from "./GameModeButton";
import {TestSettings} from "./TestModeMenu";
import styles from "../styles/sass/components/GameModeMenu.module.scss";

interface GameModeMenuProps {
    onSelectedMode: (mode: GameMode, settings: TestSettings) => void;
}

interface GameModeMenuState {
    selected: GameMode;
    settings: TestSettings;
}

class GameModeMenu extends Component<GameModeMenuProps, GameModeMenuState> {
    constructor(props: GameModeMenuProps | Readonly<GameModeMenuProps>) {
        super(props);
        this.state = {
            selected: GameMode.ROMANJI,
            settings: {
                includeHiragana: true,
                includeKatakana: false
            }
        }
    }

    render() {
        const {selected} = this.state;

        return (
            <Container fluid className={styles.wrapper}>
                <Row>
                    <Col className={styles.descWrapper}>
                        <p className={styles.desc}>{this.getSelectedModeDescription()}</p>
                    </Col>
                </Row>
                <Row>
                    <Col className={styles.leftColumn}>
                        <GameModeButton
                            mode={GameMode.ROMANJI}
                            isSelected={selected === GameMode.ROMANJI}
                            icon={faCircle}
                            onClick={this.onSelectMode}
                        />
                    </Col>
                    <Col className={styles.rightColumn}>
                        <GameModeButton
                            mode={GameMode.TIME_ATTACK}
                            icon={faStopwatch}
                            isSelected={selected === GameMode.TIME_ATTACK}
                            onClick={this.onSelectMode}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col className={styles.leftColumn}>
                        <GameModeButton
                            mode={GameMode.THREE}
                            icon={faGlobe}
                            isSelected={selected === GameMode.THREE}
                            onClick={this.onSelectMode}
                        />
                    </Col>
                    <Col className={styles.rightColumn}>
                        <GameModeButton
                            mode={GameMode.FOUR}
                            icon={faFire}
                            isSelected={selected === GameMode.FOUR}
                            onClick={this.onSelectMode}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button variant="secondary" className={styles.settingsButton}>
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
            </Container>
        );
    }

    confirmSelected = () => {
        const { selected, settings } = this.state;
        this.props.onSelectedMode(selected, settings);
    }

    onSelectMode = (mode: GameMode) => {
        this.setState({selected: mode});
    }

    private getSelectedModeDescription(): string {
        const {selected} = this.state;
        switch (selected) {
            case GameMode.ROMANJI: {
                return "You're shown kana(s) on screen and you must enter the correct romanji. " +
                    "You're timed, but there's no rush and mistakes aren't punishing.Sike nigga u though";
            }
            case GameMode.TIME_ATTACK: {
                return "You have limited time per kana to answer. A race against the clock!";
            }
            default: {
                return "Please selected a game mode to begin.";
            }
        }
    }
}

export default GameModeMenu;