import { Component } from "react";
import MemoryGame from "../game/MemoryGame";
import GameResult from "../../domain/game/GameResult";
import GameResultScreen from "../results/GameResultScreen";
import LoadingSpinner from "../ui/LoadingSpinner";
import ControlsMenu from "../layout/ControlsMenu";
import SettingsMenu from "../layout/SettingsMenu";
import { AppMode, fromString } from "../../domain/AppMode";
import SessionID from "../../domain/session/SessionID";
import LearningSessionResult from "../../domain/learn/LearningSessionResult";
import LearningResultScreen from "../results/LearningResultScreen";
import Arrays from "../../utility/Arrays";
import MainErrorBoundary from "../error/MainErrorBoundary";
import { Learnable } from "../../domain/learn/Learnable";
import Learn from "../learn/Learn";
import LearningDataRepository from "../../repository/LearningDataRepository";
import { RouteComponentProps } from "react-router-dom";
import { StaticContext } from "react-router";
import styles from "../../styles/sass/components/pages/MainMenuPage.module.scss";
import { SessionSettings } from "../../domain/session/settings/SessionSettings";
import GameSettings from "../../domain/session/settings/game/GameSettings";
import DataSettings from "../../domain/session/settings/data/DataSettings";
import LearnSettings from "../../domain/session/settings/LearnSettings";
import UserForm from "../user/UserForm";
import { store } from "../../store";
import { Provider } from "react-redux";
import ErrorContainer from "../error/ErrorContainer";

interface MainMenuPageState {
    loading: boolean;
    gameConfig?: GameSettings;
    learnConfig?: LearnSettings;
    dataConfig?: DataSettings;
    inResultsScreen: boolean;
    gameResult?: GameResult;
    learningResult?: LearningSessionResult;
    sessionKey: SessionID,
    mode: AppMode;
    data: Learnable[];
    inLoginModal: boolean;
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
            dataConfig: undefined,
            inResultsScreen: false,
            gameResult: undefined,
            learningResult: undefined,
            sessionKey: new SessionID(),
            mode: AppMode.PLAY,
            data: [],
            inLoginModal: false,
        }
    }

    componentDidMount() {
        const navigationMode = this.props.match.params.mode;
        this.setState({ mode: fromString(navigationMode) });
    }

    render() {
        const {
            loading, gameConfig, learnConfig, dataConfig, inResultsScreen, gameResult, learningResult, mode,
            sessionKey, data, inLoginModal
        } = this.state;

        const isInMenu = !gameConfig && !learnConfig && !inResultsScreen && !learningResult && !loading;

        return (
            <div className={styles.wrapper}>
                <Provider store={store}>
                    <ErrorContainer />
                    <MainErrorBoundary>
                        <LoadingSpinner active={loading} />

                        <ControlsMenu
                            active={isInMenu}
                            startingMode={mode}
                            onChangeAppMode={this.handleChangeAppMode}
                            onLaunchLoginModal={() => this.setState({ inLoginModal: true })}
                        />

                        {isInMenu &&
                            <SettingsMenu
                                mode={mode}
                                onStart={this.onStartModeSelection}
                            />
                        }

                        {gameConfig && !inResultsScreen && data.length > 0 &&
                            <MemoryGame
                                data={data}
                                settings={gameConfig}
                                key={sessionKey.value}
                                onFinish={this.onGameFinish}
                                sessionKey={sessionKey.value}
                            />
                        }

                        {inResultsScreen && gameResult &&
                            <GameResultScreen
                                result={gameResult}
                                onClose={this.onGameResultMenuClose}
                            />
                        }

                        {learnConfig && !inResultsScreen && data.length > 0 &&
                            <Learn
                                data={data}
                                key={sessionKey.value}
                                card={dataConfig?.topic.cards!}
                                onFinish={this.onLearningFinish}
                            />
                        }

                        {learningResult && inResultsScreen &&
                            <LearningResultScreen
                                result={learningResult}
                                onPractice={this.onPracticeStart}
                                onDismiss={this.onLearningResultMenuClose}
                            />
                        }

                        {inLoginModal && (
                            <UserForm
                                location={""}
                                show={inLoginModal}
                                onClose={() => this.setState({ inLoginModal: false })}
                            />
                        )}
                    </MainErrorBoundary>
                </Provider>
            </div>
        );
    }

    private onStartModeSelection = (settings: SessionSettings) => {
        this.setState({
            gameConfig: settings.gameSettings,
            learnConfig: settings.learnSettings,
            dataConfig: settings.dataSettings,
            loading: true
        }, () => {
            new LearningDataRepository()
                .read(settings.dataSettings)
                .then(data => this.setState({ data: data, loading: false }));
        });
    }

    private onGameResultMenuClose = () => this.setState({ inResultsScreen: false, gameResult: undefined });

    private onLearningResultMenuClose = () => this.setState({
        learningResult: undefined,
        learnConfig: undefined,
        inResultsScreen: false,
        data: []
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
        this.setState({ data: Arrays.copy(data) });
    }

    private handleChangeAppMode = (mode: AppMode) => this.setState({ mode: mode });
}

export default MainMenuPage;
