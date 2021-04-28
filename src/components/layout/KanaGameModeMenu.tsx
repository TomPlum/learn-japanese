import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { KanaGameMode } from "../../types/game/mode/KanaGameMode";
import { faFire, faFont, faGraduationCap, faStopwatch, faVial } from "@fortawesome/free-solid-svg-icons";
import GameModeButton from "./GameModeButton";
import KanaGameSettingsMenu from "../settings/KanaGameSettingsMenu";
import { HARDCORE, KANA, RELAXED, ROMAJI, TIME_ATTACK } from "../../data/GameModePresets";
import { GameSettings } from "../../types/game/GameSettings";
import { Environment } from "../../utility/Environment";
import { faKickstarterK } from "@fortawesome/free-brands-svg-icons";
import MenuDescription from "../ui/MenuDescription";
import StartButton from "../ui/buttons/StartButton";
import styles from "../../styles/sass/components/layout/KanaGameModeMenu.module.scss";

export interface KanaGameModeMenuProps {
    onSelectedMode: (mode: KanaGameMode, settings: GameSettings) => void;
    className?: string;
}

interface KanaGameModeMenuState {
    selected: KanaGameMode;
    settings: GameSettings;
    isCustomisingSettings: boolean;
}

class KanaGameModeMenu extends Component<KanaGameModeMenuProps, KanaGameModeMenuState> {
    constructor(props: KanaGameModeMenuProps | Readonly<KanaGameModeMenuProps>) {
        super(props);
        this.state = {
            selected: KanaGameMode.RELAXED,
            isCustomisingSettings: false,
            settings: RELAXED
        }
    }

    render() {
        const { isCustomisingSettings, selected } = this.state;

        return (
            <div className={styles.wrapper + " " + this.props.className}>
                {!isCustomisingSettings && <>
                    <Row>
                        <Col>
                            <MenuDescription text={this.getSelectedModeDescription()} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className={styles.leftColumn}>
                            <GameModeButton
                                mode={KanaGameMode.RELAXED}
                                icon={faGraduationCap}
                                iconColour={"#fdb40e"}
                                isSelected={selected === KanaGameMode.RELAXED}
                                onClick={this.onSelectMode}
                            />
                        </Col>
                        <Col className={styles.rightColumn}>
                            <GameModeButton
                                mode={KanaGameMode.TIME_ATTACK}
                                icon={faStopwatch}
                                iconColour={"#ff7730"}
                                isSelected={selected === KanaGameMode.TIME_ATTACK}
                                onClick={this.onSelectMode}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col className={styles.leftColumn}>
                            <GameModeButton
                                mode={KanaGameMode.ROMAJI}
                                isSelected={selected === KanaGameMode.ROMAJI}
                                icon={faFont}
                                iconColour={"#1785e2"}
                                onClick={this.onSelectMode}
                            />
                        </Col>
                        <Col className={styles.rightColumn}>
                            <GameModeButton
                                mode={KanaGameMode.KANA}
                                isSelected={selected === KanaGameMode.KANA}
                                icon={faKickstarterK}
                                iconColour={"#a01219"}
                                onClick={this.onSelectMode}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col className={styles.leftColumn}>
                            <GameModeButton
                                mode={KanaGameMode.HARDCORE}
                                icon={faFire}
                                iconColour={"#fc3131"}
                                isSelected={selected === KanaGameMode.HARDCORE}
                                onClick={this.onSelectMode}
                            />
                        </Col>
                        <Col className={styles.rightColumn}>
                            <GameModeButton
                                mode={KanaGameMode.CUSTOM}
                                icon={faVial}
                                iconColour={"#41d085"}
                                isSelected={selected === KanaGameMode.CUSTOM}
                                onClick={this.onLaunchCustomSettings}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <StartButton onClick={this.confirmSelected} />
                        </Col>
                    </Row>
                </>}

                {isCustomisingSettings && <KanaGameSettingsMenu onSubmit={this.setCustomSettings}/>}
            </div>
        );
    }

    setCustomSettings = (settings: GameSettings) => this.setState({ settings, isCustomisingSettings: false });

    confirmSelected = () => {
        const { selected, settings } = this.state;
        this.props.onSelectedMode(selected, settings);
    }

    onSelectMode = (mode: KanaGameMode) => {
        let preset: GameSettings = ROMAJI;
        switch (mode) {
            case KanaGameMode.RELAXED:
                preset = RELAXED;
                break;
            case KanaGameMode.TIME_ATTACK:
                preset = TIME_ATTACK;
                break;
            case KanaGameMode.ROMAJI:
                preset = ROMAJI;
                break;
            case KanaGameMode.KANA:
                preset = KANA;
                break;
            case KanaGameMode.HARDCORE:
                preset = HARDCORE;
                break;
        }

        this.setState({ selected: mode, settings: preset });
    }

    onLaunchCustomSettings = () => {
        this.onSelectMode(KanaGameMode.CUSTOM);
        this.setState({ isCustomisingSettings: true });
    }

    private getSelectedModeDescription = () => Environment.variable("MODE_DESC_" + this.state.selected);
}

export default KanaGameModeMenu;