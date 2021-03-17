import { Component } from "react";
import GameModeMenu from "../layout/GameModeMenu";
import KanaMemoryTest from "../game/KanaMemoryTest";
import { GameMode } from "../../types/GameMode";
import { GameSettings } from "../../types/GameSettings";
import GameResult from "../../types/GameResult";
import ResultScreen from "../results/ResultScreen";
import { Kana } from "../../types/Kana";
import LoadingSpinner from "../ui/LoadingSpinner";
import { KanaRepository } from "../../repository/KanaRepository";
import styles from "../../styles/sass/components/pages/GamePage.module.scss";

interface GamePageState {
    loading: boolean;
    kana?: Kana[];
    gameSettings?: GameSettings;
    inResultsScreen: boolean;
    result?: GameResult;
    gameIdentifier: string;
}

class GamePage extends Component<{ }, GamePageState> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            loading: false,
            kana: undefined,
            gameSettings: undefined,
            inResultsScreen: false,
            result: undefined,
            gameIdentifier: Math.random().toString()
        }
    }

    render() {
        const { loading, gameSettings, kana, inResultsScreen, result } = this.state;
        return (
            <div className={styles.wrapper}>
                <LoadingSpinner active={loading}/>

                {!gameSettings && !inResultsScreen &&
                    <GameModeMenu onSelectedMode={this.startGame}/>
                }

                {gameSettings && kana && !inResultsScreen &&
                    <KanaMemoryTest
                        kana={kana}
                        settings={gameSettings}
                        onClose={this.onGameClose}
                        onFinish={this.onGameFinish}
                    />
                }

                {inResultsScreen && result &&
                    <ResultScreen result={result} onClose={this.onResultMenuClose}/>
                }
            </div>
        );
    }

    private startGame = (mode: GameMode, settings: GameSettings) => {
        this.setState({ gameSettings: settings }, this.loadKana);
    }

    private onGameClose = () => {
        this.setState({ gameSettings: undefined });
    }

    private onResultMenuClose = () => this.setState({ inResultsScreen: false, result: undefined });

    private onGameFinish = (result: GameResult) => this.setState({
        inResultsScreen: true,
        result,
        gameSettings: undefined,
        gameIdentifier: Math.random().toString()
    });

    private loadKana() {
        this.setState({ loading: true });
        const kana = new KanaRepository().read(this.state.gameSettings?.kana);
        this.setState({ loading: false, kana });
    }
}

export default GamePage;