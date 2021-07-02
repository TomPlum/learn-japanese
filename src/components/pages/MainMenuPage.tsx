import { Component } from "react";
import KanaMemoryGame from "../game/KanaMemoryGame";
import GameResult from "../../types/game/GameResult";
import GameResultScreen from "../results/GameResultScreen";
import LoadingSpinner from "../ui/LoadingSpinner";
import { KanaRepository } from "../../repository/KanaRepository";
import ControlsMenu from "../layout/ControlsMenu";
import SettingsMenu, { GameTypeSettings, LearnSessionSettings } from "../layout/SettingsMenu";
import { AppMode, fromString } from "../../types/AppMode";
import SessionID from "../../types/SessionID";
import LearningSessionResult from "../../types/learn/LearningSessionResult";
import LearningResultScreen from "../results/LearningResultScreen";
import Arrays from "../../utility/Arrays";
import MainErrorBoundary from "../error/MainErrorBoundary";
import { Learnable } from "../../types/learn/Learnable";
import Learn from "../learn/Learn";
import LearningDataRepository from "../../repository/LearningDataRepository";
import { RouteComponentProps } from "react-router-dom";
import { StaticContext } from "react-router";
import styles from "../../styles/sass/components/pages/MainMenuPage.module.scss";

interface MainMenuPageState {
    loading: boolean;
    gameConfig?: GameTypeSettings;
    learnConfig?: LearnSessionSettings;
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
            gameConfig: undefined,
            learnConfig: undefined,
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
        this.setState({ mode: fromString(navigationMode) });
    }

    render() {
        const { loading, gameConfig, learnConfig, inResultsScreen, gameResult, learningResult, mode, sessionKey, learnData } = this.state;

        const isInMenu = !gameConfig && !learnConfig && !inResultsScreen && !learningResult;

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

                    {gameConfig && !inResultsScreen &&
                        <KanaMemoryGame
                            key={sessionKey.value}
                            sessionKey={sessionKey.value}
                            kana={new KanaRepository().read(gameConfig.settings.kana!)}
                            settings={gameConfig.settings!}
                            onFinish={this.onGameFinish}
                        />
                    }

                    {inResultsScreen && gameResult &&
                        <GameResultScreen result={gameResult} onClose={this.onGameResultMenuClose}/>
                    }

                    {learnConfig && !inResultsScreen &&
                        <Learn
                            key={sessionKey.value}
                            data={learnData ?? new LearningDataRepository().read(learnConfig)}
                            onFinish={this.onLearningFinish}
                            card={learnConfig?.topic.cards!}
                        />
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

    private startGame = (settings: GameTypeSettings) => this.setState({ gameConfig: settings });

    private startLearning = (settings: LearnSessionSettings) => this.setState({ learnConfig: settings });

    private onGameResultMenuClose = () => this.setState({ inResultsScreen: false, gameResult: undefined });

    private onLearningResultMenuClose = () => this.setState({
        learningResult: undefined,
        learnConfig: undefined,
        inResultsScreen: false,
        learnData: undefined
    });

    private onGameFinish = (result: GameResult) => this.setState({
        inResultsScreen: true,
        gameResult: result,
        gameConfig: undefined,
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