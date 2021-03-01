import { Component } from "react";
import GameModeMenu from "../layout/GameModeMenu";
import KanaMemoryTest from "./KanaMemoryTest";
import { GameMode } from "../../types/GameMode";
import { GameSettings } from "../../types/GameSettings";
import GameResult from "../../types/GameResult";
import ResultScreen from "../results/ResultScreen";
import { Kana } from "../../types/Kana";
import LoadingSpinner from "../ui/LoadingSpinner";
import { KanaRepository } from "../../repository/KanaRepository";

interface GameProps {
    onLaunch: () => void;
    onClose: () => void;
}

interface GameState {
    loading: boolean;
    kana?: Kana[];
    gameSettings?: GameSettings;
    inResultsScreen: boolean;
    result?: GameResult;
}

class Game extends Component<GameProps, GameState> {

    constructor(props: GameProps | Readonly<GameProps>) {
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
            <>
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

                {inResultsScreen && result && <ResultScreen result={result} onClose={this.onResultMenuClose}/>}
            </>
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
        gameSettings: undefined
    });

    private loadKana() {
        this.setState({ loading: true });
        const kana = new KanaRepository().read(this.state.gameSettings?.kana);
        this.setState({ loading: false, kana });
    }
}

export default Game;