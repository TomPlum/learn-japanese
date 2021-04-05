import { Component } from "react";
import KanaMemoryGame from "../game/KanaMemoryGame";
import GameResult from "../../types/GameResult";
import GameResultScreen from "../results/GameResultScreen";
import { Kana } from "../../types/Kana";
import LoadingSpinner from "../ui/LoadingSpinner";
import { KanaRepository } from "../../repository/KanaRepository";
import ControlsMenu from "../layout/ControlsMenu";
import GameSettingsMenu, { GameTypeSettings, LearnSessionSettings } from "../layout/GameSettingsMenu";
import { AppMode } from "../../types/AppMode";
import { KanaSettings } from "../../types/GameSettings";
import LearnKana from "../learn/kana/LearnKana";
import SessionID from "../../types/SessionID";
import LearningSessionResult from "../../types/LearningSessionResult";
import LearningResultScreen from "../results/LearningResultScreen";
import Arrays from "../../utility/Arrays";
import MainErrorBoundary from "../MainErrorBoundary";
import styles from "../../styles/sass/components/pages/GamePage.module.scss";

interface GamePageState {
    loading: boolean;
    kana?: Kana[];
    gameSettings?: GameTypeSettings;
    learnSettings?: LearnSessionSettings;
    inResultsScreen: boolean;
    gameResult?: GameResult;
    learningResult?: LearningSessionResult;
    sessionKey: SessionID,
    mode: AppMode;
}

class GamePage extends Component<{}, GamePageState> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            loading: false,
            kana: undefined,
            gameSettings: undefined,
            learnSettings: undefined,
            inResultsScreen: false,
            gameResult: undefined,
            learningResult: undefined,
            sessionKey: new SessionID(),
            mode: AppMode.PLAY
        }
    }

    render() {
        const {
            loading, gameSettings, learnSettings, kana, inResultsScreen, gameResult, learningResult,
            mode, sessionKey
        } = this.state;

        const isInMenu = !gameSettings && !learnSettings && !inResultsScreen && !learningResult;

        return (
            <div className={styles.wrapper}>
                <MainErrorBoundary>
                    <LoadingSpinner active={loading}/>

                    <ControlsMenu onChangeAppMode={this.handleChangeAppMode} active={isInMenu}/>

                    {isInMenu &&
                        <GameSettingsMenu
                            onStartGame={this.startGame}
                            onStartLearn={this.startLearning}
                            mode={mode}
                        />
                    }

                    {gameSettings && kana && !inResultsScreen &&
                        <KanaMemoryGame
                            key={sessionKey.value}
                            sessionKey={sessionKey.value}
                            kana={kana}
                            settings={gameSettings.settings}
                            onFinish={this.onGameFinish}
                        />
                    }

                    {inResultsScreen && gameResult &&
                        <GameResultScreen result={gameResult} onClose={this.onGameResultMenuClose}/>
                    }

                    {learnSettings && kana && !inResultsScreen &&
                        <LearnKana key={sessionKey.value} kana={kana} onFinish={this.onLearningFinish}/>
                    }

                    {learningResult && inResultsScreen &&
                        <LearningResultScreen
                            result={learningResult}
                            onDismiss={this.onLearningResultMenuClose}
                            onPractice={this.onPracticeStart}
                        />
                    }
                </MainErrorBoundary>
            </div>
        );
    }

    private startGame = (settings: GameTypeSettings) => {
        this.setState({ gameSettings: settings }, () => this.loadKana(settings?.settings?.kana));
    }

    private startLearning = (settings: LearnSessionSettings) => {
        this.setState({ learnSettings: settings }, () => this.loadKana(settings.settings));
    }

    private onGameResultMenuClose = () => this.setState({ inResultsScreen: false, gameResult: undefined });

    private onLearningResultMenuClose = () => this.setState({
        learningResult: undefined,
        learnSettings: undefined,
        inResultsScreen: false
    });

    private onGameFinish = (result: GameResult) => this.setState({
        inResultsScreen: true,
        gameResult: result,
        gameSettings: undefined,
        sessionKey: new SessionID()
    });

    private onLearningFinish = (result: LearningSessionResult) => {
        if (result.forgotten.length + result.remembered.length > 0) {
            this.setState({ learningResult: result, inResultsScreen: true });
        } else {
            this.onLearningResultMenuClose();
        }
        this.setState({ sessionKey: new SessionID() });
    }

    private onPracticeStart = (kana: Kana[]) => {
        this.onGameResultMenuClose();
        this.setState({ kana: Arrays.copy(kana) });
    }

    private handleChangeAppMode = (mode: AppMode) => this.setState({ mode: mode });

    private loadKana(settings: KanaSettings) {
        this.setState({ loading: true });
        const kana = new KanaRepository().read(settings);
        this.setState({ loading: false, kana: kana });
    }
}

export default GamePage;