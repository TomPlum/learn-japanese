import { Component } from "react";
import { Container } from "react-bootstrap";
import KanaMemoryTest from "../game/KanaMemoryTest";
import { Kana } from "../../types/Kana";
import { KanaConfig, KanaRepository } from "../../repository/KanaRepository";
import LoadingSpinner from "../ui/LoadingSpinner";
import styles from "../../styles/sass/layout/Main.module.scss";
import GameModeMenu from "./GameModeMenu";
import { GameMode } from "../../types/GameMode";
import { GameSettings } from "../../types/GameSettings";
import ResultScreen from "../results/ResultScreen";
import GameResult from "../../types/GameResult";

interface MainProps {
    onLaunchTest: () => void;
    onCloseTest: () => void;
}

interface MainState {
    loading: boolean;
    kana?: Kana[];
    gameSettings?: GameSettings;
    inResultsScreen: boolean;
    result?: GameResult;
}

class Main extends Component<MainProps, MainState> {

    private readonly kanaRepository = new KanaRepository();

    constructor(props: MainProps | Readonly<MainProps>) {
        super(props);
        this.state = {
            loading: false,
            kana: undefined,
            gameSettings: undefined,
            inResultsScreen: false,
            result: undefined
        }
    }

    render() {
        const { loading, gameSettings, kana, inResultsScreen, result } = this.state;

        return (
            <Container className={styles.wrapper}>
                <LoadingSpinner active={loading}/>
                {!gameSettings && !inResultsScreen &&
                    <GameModeMenu onSelectedMode={this.onSelectedGameMode}/>
                }

                {gameSettings && kana && !inResultsScreen &&
                    <KanaMemoryTest
                        kana={kana}
                        settings={gameSettings}
                        onClose={this.onGameClose}
                        onFinish={this.onGameFinish}
                    />
                }

                {inResultsScreen && result && <ResultScreen result={result} onClose={this.onResultMenuClose}/>}
            </Container>
        );
    }

    private onSelectedGameMode = (mode: GameMode, settings: GameSettings) => {
        this.props.onLaunchTest();
        this.setState({ gameSettings: settings }, () => this.loadKana());
    }

    private onGameClose = () => {
        this.props.onCloseTest();
        this.setState({ gameSettings: undefined });
    }

    private onResultMenuClose = () => this.setState({ inResultsScreen: false, result: undefined });

    private onGameFinish = (result: GameResult) => this.setState({ inResultsScreen: true, result, gameSettings: undefined });

    private loadKana() {
        this.setState({ loading: true });

        const { gameSettings } = this.state;
        console.log(gameSettings)
        const config: KanaConfig = {
            includeHiragana: gameSettings ? gameSettings.kana.includeHiragana : false,
            includeKatakana: gameSettings ? gameSettings.kana.includeKatakana : false,
            includeDiagraphs: gameSettings ? gameSettings.kana.includeDiagraphs : false
        }


        const kana = this.kanaRepository.read(config);
        console.log(kana)

        this.setState({ loading: false, kana });
    }
}

export default Main;