import { Component } from "react";
import KanaMemoryGame from "../game/KanaMemoryGame";
import GameResult from "../../types/game/GameResult";
import GameResultScreen from "../results/GameResultScreen";
import LoadingSpinner from "../ui/LoadingSpinner";
import { KanaRepository } from "../../repository/KanaRepository";
import ControlsMenu from "../layout/ControlsMenu";
import SettingsMenu, { GameTypeSettings, LearnSessionSettings } from "../layout/SettingsMenu";
import { AppMode } from "../../types/AppMode";
import SessionID from "../../types/SessionID";
import LearningSessionResult from "../../types/learn/LearningSessionResult";
import LearningResultScreen from "../results/LearningResultScreen";
import Arrays from "../../utility/Arrays";
import MainErrorBoundary from "../error/MainErrorBoundary";
import Learnable from "../../types/learn/Learnable";
import Learn from "../learn/Learn";
import LearningDataRepository from "../../repository/LearningDataRepository";
import { RouteComponentProps } from "react-router-dom";
import { StaticContext } from "react-router";
import styles from "../../styles/sass/components/pages/MainMenuPage.module.scss";

interface MainMenuPageState {
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

interface PageParameters {
    mode: string;
}

class MainMenuPage extends Component<RouteComponentProps<PageParameters>, MainMenuPageState> {

    constructor(props: RouteComponentProps<PageParameters, StaticContext, unknown> | Readonly<RouteComponentProps<PageParameters, StaticContext, unknown>>) {
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

    componentDidMount() {
        const navigationMode = this.props.match.params.mode;
        this.setState({ mode: navigationMode === "learn" ? AppMode.LEARN : AppMode.PLAY });
    }

    render() {
        const { loading, gameSettings, learnSettings, inResultsScreen, gameResult, learningResult, mode, sessionKey, learnData } = this.state;

        const isInMenu = !gameSettings && !learnSettings && !inResultsScreen && !learningResult;

        return (
            <div className={styles.wrapper}>
                <MainErrorBoundary>
                    <LoadingSpinner active={loading}/>

                    <ControlsMenu onChangeAppMode={this.handleChangeAppMode} active={isInMenu} startingMode={mode} />

                    {isInMenu &&
                        <SettingsMenu
                            onStartGame={this.startGame}
                            onStartLearn={this.startLearning}
                            mode={mode}
                        />
                    }

                    {gameSettings && !inResultsScreen && <KanaMemoryGame
                        key={sessionKey.value}
                        sessionKey={sessionKey.value}
                        kana={new KanaRepository().read(gameSettings.settings.kana!.kana)}
                        settings={gameSettings.settings.kana!}
                        onFinish={this.onGameFinish}
                    />}

                    {inResultsScreen && gameResult &&
                        <GameResultScreen result={gameResult} onClose={this.onGameResultMenuClose}/>
                    }

                    {learnSettings && !inResultsScreen && <Learn
                            key={sessionKey.value}
                            data={learnData ?? new LearningDataRepository().read(learnSettings)}
                            onFinish={this.onLearningFinish}
                            card={learnSettings?.topic.cards!}
                    />}

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

    private startGame = (settings: GameTypeSettings) => this.setState({ gameSettings: settings });

    private startLearning = (settings: LearnSessionSettings) => this.setState({ learnSettings: settings });

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

    private onPracticeStart = (data: Learnable[]) => {
        this.onGameResultMenuClose();
        this.setState({ learnData: Arrays.copy(data) });
    }

    private handleChangeAppMode = (mode: AppMode) => this.setState({ mode: mode });
}

export default MainMenuPage;