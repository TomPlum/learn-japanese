import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { GameMode } from "../../types/GameMode";
import { faCircle, faFire, faFont, faGraduationCap, faPlay, faStopwatch, faVial } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GameModeButton from "./GameModeButton";
import GameSettingsMenu from "../settings/GameSettingsMenu";
import styles from "../../styles/sass/components/layout/GameModeMenu.module.scss";
import { HARDCORE, KANA, RELAXED, ROMANJI, TIME_ATTACK } from "../../data/GameModePresets";
import { GameSettings } from "../../types/GameSettings";
import { Environment } from "../../utility/Environment";

interface GameModeMenuProps {
    onSelectedMode: (mode: GameMode, settings: GameSettings) => void;
}

interface GameModeMenuState {
    selected: GameMode;
    settings: GameSettings;
    isCustomisingSettings: boolean;
}

class GameModeMenu extends Component<GameModeMenuProps, GameModeMenuState> {
    constructor(props: GameModeMenuProps | Readonly<GameModeMenuProps>) {
        super(props);
        this.state = {
            selected: GameMode.RELAXED,
            isCustomisingSettings: false,
            settings: RELAXED
        }
    }

    render() {
        const { isCustomisingSettings, selected } = this.state;

        return (
            <Container fluid className={styles.wrapper}>
                {!isCustomisingSettings && <>
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
                                mode={GameMode.TIME_ATTACK}
                                icon={faStopwatch}
                                iconColour={"#ff7730"}
                                isSelected={selected === GameMode.TIME_ATTACK}
                                onClick={this.onSelectMode}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col className={styles.leftColumn}>
                            <GameModeButton
                                mode={GameMode.ROMANJI}
                                isSelected={selected === GameMode.ROMANJI}
                                icon={faFont}
                                iconColour={"#1785e2"}
                                onClick={this.onSelectMode}
                            />
                        </Col>
                        <Col className={styles.rightColumn}>
                            <GameModeButton
                                mode={GameMode.KANA}
                                isSelected={selected === GameMode.KANA}
                                icon={faCircle}
                                iconColour={"#a01219"}
                                onClick={this.onSelectMode}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col className={styles.leftColumn}>
                            <GameModeButton
                                mode={GameMode.HARDCORE}
                                icon={faFire}
                                iconColour={"#fc3131"}
                                isSelected={selected === GameMode.HARDCORE}
                                onClick={this.onSelectMode}
                            />
                        </Col>
                        <Col className={styles.rightColumn}>
                            <GameModeButton
                                mode={GameMode.CUSTOM}
                                icon={faVial}
                                iconColour={"#41d085"}
                                isSelected={selected === GameMode.CUSTOM}
                                onClick={this.onLaunchCustomSettings}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button variant="success" className={styles.playButton} onClick={this.confirmSelected}>
                                <FontAwesomeIcon size="sm" icon={faPlay}/> Start
                            </Button>
                        </Col>
                    </Row>
                </>}

                {isCustomisingSettings && <GameSettingsMenu mode={selected} onSubmit={this.setCustomSettings}/>}
            </Container>
        );
    }

    setCustomSettings = (settings: GameSettings) => this.setState({ settings, isCustomisingSettings: false });

    confirmSelected = () => {
        const { selected, settings } = this.state;
        this.props.onSelectedMode(selected, settings);
    }

    onSelectMode = (mode: GameMode) => {
        let preset: GameSettings = ROMANJI;
        switch (mode) {
            case GameMode.RELAXED:
                preset = RELAXED;
                break;
            case GameMode.TIME_ATTACK:
                preset = TIME_ATTACK;
                break;
            case GameMode.ROMANJI:
                preset = ROMANJI;
                break;
            case GameMode.KANA:
                preset = KANA;
                break;
            case GameMode.HARDCORE:
                preset = HARDCORE;
                break;
        }

        this.setState({ selected: mode, settings: preset });
    }

    onLaunchCustomSettings = () => {
        this.onSelectMode(GameMode.CUSTOM);
        this.setState({ isCustomisingSettings: true });
    }

    private getSelectedModeDescription = () => Environment.variable("MODE_DESC_" + this.state.selected);
}

export default GameModeMenu;