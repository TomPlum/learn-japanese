import { Component } from "react";
import KanaMemoryGame from "../game/KanaMemoryGame";
import GameResult from "../../types/game/GameResult";
import GameResultScreen from "../results/GameResultScreen";
import { Kana } from "../../types/kana/Kana";
import LoadingSpinner from "../ui/LoadingSpinner";
import { KanaRepository } from "../../repository/KanaRepository";
import ControlsMenu from "../layout/ControlsMenu";
import GameSettingsMenu, { GameTypeSettings, LearnSessionSettings } from "../layout/GameSettingsMenu";
import { AppMode } from "../../types/AppMode";
import LearnKana from "../learn/kana/LearnKana";
import SessionID from "../../types/SessionID";
import LearningSessionResult from "../../types/learn/LearningSessionResult";
import LearningResultScreen from "../results/LearningResultScreen";
import Arrays from "../../utility/Arrays";
import MainErrorBoundary from "../error/MainErrorBoundary";
import styles from "../../styles/sass/components/pages/GamePage.module.scss";
import { Topic } from "../../types/Topic";
import Learnable from "../../types/learn/Learnable";

interface GamePageState {
    loading: boolean;
    gameSettings?: GameTypeSettings;
    learnSettings?: LearnSessionSettings;
    inResultsScreen: boolean;
    gameResult?: GameResult;
    learningResult?: LearningSessionResult;
    sessionKey: SessionID,
    mode: AppMode;
    learnData?: Learnable[];
}

class GamePage extends Component<{}, GamePageState> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            loading: false,
            gameSettings: undefined,
            learnSettings: undefined,
            inResultsScreen: false,
            gameResult: undefined,
            learningResult: undefined,
            sessionKey: new SessionID(),
            mode: AppMode.PLAY,
            learnData: undefined
        }
    }

    render() {
        const { loading, gameSettings, learnSettings, inResultsScreen, gameResult, learningResult, mode } = this.state;

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

                    {gameSettings && !inResultsScreen && this.getGame()}

                    {inResultsScreen && gameResult &&
                        <GameResultScreen result={gameResult} onClose={this.onGameResultMenuClose}/>
                    }

                    {learnSettings && !inResultsScreen && this.getLearning()}

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
        this.setState({ gameSettings: settings });
    }

    private startLearning = (settings: LearnSessionSettings) => {
        this.setState({ learnSettings: settings });
    }

    private onGameResultMenuClose = () => this.setState({ inResultsScreen: false, gameResult: undefined });

    private onLearningResultMenuClose = () => this.setState({
        learningResult: undefined,
        learnSettings: undefined,
        inResultsScreen: false,
        learnData: undefined
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
        this.setState({ learnData: Arrays.copy(kana) });
    }

    private handleChangeAppMode = (mode: AppMode) => this.setState({ mode: mode });

    private getLearning = () => {
        const { learnSettings, sessionKey, learnData } = this.state;
        switch (learnSettings?.topic) {
            case Topic.KANA: {
                const kana = (learnData ?? new KanaRepository().read(learnSettings.settings!.kana!)) as Kana[];
                return <LearnKana key={sessionKey.value} kana={kana} onFinish={this.onLearningFinish} />;
            }
        }
    }

    private getGame = () => {
        const { gameSettings, sessionKey } = this.state;
        switch (gameSettings?.topic) {
            case Topic.KANA: {
                const kana = new KanaRepository().read(gameSettings.settings.kana!.kana);
                return (
                    <KanaMemoryGame
                        key={sessionKey.value}
                        sessionKey={sessionKey.value}
                        kana={kana}
                        settings={gameSettings.settings.kana!}
                        onFinish={this.onGameFinish}
                    />
                );
            }
        }
    }
}

export default GamePage;