import { Component } from "react";
import { Container } from "react-bootstrap";
import KanaMemoryTest from "../components/KanaMemoryTest";
import { Kana } from "../types/Kana";
import { KanaConfig, KanaRepository } from "../repository/KanaRepository";
import LoadingSpinner from "./LoadingSpinner";
import styles from "../styles/sass/layout/Main.module.scss";
import GameModeMenu from "../components/GameModeMenu";
import { GameMode } from "../types/GameMode";
import { GameSettings } from "../types/GameSettings";

interface MainState {
    loading: boolean;
    kana?: Kana[];
    gameSettings?: GameSettings;
}

class Main extends Component<{}, MainState> {

    private readonly kanaRepository = new KanaRepository();

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            loading: false,
            kana: undefined,
            gameSettings: undefined,
        }
    }

    render() {
        const { loading, gameSettings, kana } = this.state;

        return (
            <Container className={styles.wrapper}>
                <LoadingSpinner active={loading}/>
                {!gameSettings &&
                    <GameModeMenu onSelectedMode={this.onSelectedGameMode}/>
                }

                {gameSettings && kana &&
                    <KanaMemoryTest kana={kana} settings={gameSettings} onClose={this.onGameClose}/>
                }
            </Container>
        );
    }

    private onSelectedGameMode = (mode: GameMode, settings: GameSettings) => {
        this.setState({ gameSettings: settings }, () => this.loadKana());
    }

    private onGameClose = () => this.setState({ gameSettings: undefined });

    private loadKana() {
        this.setState({ loading: true });

        const { gameSettings } = this.state;
        const config: KanaConfig = {
            includeHiragana: gameSettings ? gameSettings.kana.includeHiragana : false,
            includeKatakana: gameSettings ? gameSettings.kana.includeKatakana : false,
            includeDiagraphs: gameSettings ? gameSettings.kana.includeDiagraphs : false
        }

        const kana = this.kanaRepository.read(config);

        this.setState({ loading: false, kana });
    }
}

export default Main;