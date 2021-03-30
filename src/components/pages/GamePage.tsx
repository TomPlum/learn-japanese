import { Component } from "react";
import KanaMemoryGame from "../game/KanaMemoryGame";
import GameResult from "../../types/GameResult";
import ResultScreen from "../results/ResultScreen";
import { Kana } from "../../types/Kana";
import LoadingSpinner from "../ui/LoadingSpinner";
import { KanaRepository } from "../../repository/KanaRepository";
import ControlsMenu from "../layout/ControlsMenu";
import GameSettingsMenu, { GameTypeSettings, LearnSessionSettings } from "../layout/GameSettingsMenu";
import styles from "../../styles/sass/components/pages/GamePage.module.scss";
import { AppMode } from "../../types/AppMode";
import { KanaSettings } from "../../types/GameSettings";
import LearnKana from "../learn/kana/LearnKana";

interface GamePageState {
    loading: boolean;
    kana?: Kana[];
    gameSettings?: GameTypeSettings;
    learnSettings?: LearnSessionSettings;
    inResultsScreen: boolean;
    result?: GameResult;
    gameIdentifier: string;
    mode: AppMode;
}

class GamePage extends Component<{ }, GamePageState> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            loading: false,
            kana: undefined,
            gameSettings: undefined,
            learnSettings: undefined,
            inResultsScreen: false,
            result: undefined,
            gameIdentifier: Math.random().toString(),
            mode: AppMode.PLAY
        }
    }

    render() {
        const { loading, gameSettings, learnSettings, kana, inResultsScreen, result, mode } = this.state;
        const isInMenu = !gameSettings && !learnSettings && !inResultsScreen;
        return (
            <div className={styles.wrapper}>
                <LoadingSpinner active={loading}/>

                <ControlsMenu onChangeAppMode={this.handleChangeAppMode} active={isInMenu} />

                {isInMenu &&
                    <GameSettingsMenu onStartGame={this.startGame} onStartLearn={this.startLearning} mode={mode} />
                }

                {gameSettings && kana && !inResultsScreen &&
                    <KanaMemoryGame
                        kana={kana}
                        settings={gameSettings.settings}
                        onFinish={this.onGameFinish}
                    />
                }

                {learnSettings && kana && !inResultsScreen &&
                    <LearnKana kana={kana} />
                }

                {inResultsScreen && result &&
                    <ResultScreen result={result} onClose={this.onResultMenuClose}/>
                }
            </div>
        );
    }

    private startGame = (settings: GameTypeSettings) => {
        this.setState({ gameSettings: settings }, () => this.loadKana(settings?.settings?.kana));
    }

    private startLearning = (settings: LearnSessionSettings) => {
        this.setState({ learnSettings: settings }, () => this.loadKana(settings.settings));
    }

    private onResultMenuClose = () => this.setState({ inResultsScreen: false, result: undefined });

    private onGameFinish = (result: GameResult) => this.setState({
        inResultsScreen: true,
        result: result,
        gameSettings: undefined,
        gameIdentifier: Math.random().toString()
    });

    private handleChangeAppMode = (mode: AppMode) => this.setState({ mode: mode });

    private loadKana(settings: KanaSettings) {
        this.setState({ loading: true });
        const kana = new KanaRepository().read(settings);
        this.setState({ loading: false, kana });
    }
}

export default GamePage;