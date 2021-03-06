import { Component } from "react";
import MemoryGame from "../game/MemoryGame";
import GameResult from "../../types/game/GameResult";
import GameResultScreen from "../results/GameResultScreen";
import LoadingSpinner from "../ui/LoadingSpinner";
import ControlsMenu from "../layout/ControlsMenu";
import SettingsMenu  from "../layout/SettingsMenu";
import { AppMode, fromString } from "../../types/AppMode";
import SessionID from "../../types/session/SessionID";
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
import { SessionSettings } from "../../types/session/settings/SessionSettings";
import GameSettings from "../../types/session/settings/game/GameSettings";
import DataSettings  from "../../types/session/settings/data/DataSettings";
import LearnSettings from "../../types/session/settings/LearnSettings";

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
    data?: Learnable[];
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
            data: undefined
        }
    }

    componentDidMount() {
        const navigationMode = this.props.match.params.mode;
        this.setState({ mode: fromString(navigationMode) });
    }

    render() {
        const {
            loading, gameConfig, learnConfig, dataConfig, inResultsScreen, gameResult, learningResult, mode,
            sessionKey, data
        } = this.state;

        const isInMenu = !gameConfig && !learnConfig && !inResultsScreen && !learningResult;

        return (
            <div className={styles.wrapper}>
                <MainErrorBoundary>
                    <LoadingSpinner active={loading}/>

                    <ControlsMenu onChangeAppMode={this.handleChangeAppMode} active={isInMenu} startingMode={mode} />

                    {isInMenu &&
                        <SettingsMenu
                            onStart={this.onStartModeSelection}
                            mode={mode}
                        />
                    }

                    {gameConfig && !inResultsScreen &&
                        <MemoryGame
                            key={sessionKey.value}
                            sessionKey={sessionKey.value}
                            data={this.getLearnableData()}
                            settings={gameConfig}
                            onFinish={this.onGameFinish}
                        />
                    }

                    {inResultsScreen && gameResult &&
                        <GameResultScreen result={gameResult} onClose={this.onGameResultMenuClose}/>
                    }

                    {learnConfig && !inResultsScreen &&
                        <Learn
                            key={sessionKey.value}
                            data={data ?? this.getLearnableData()}
                            onFinish={this.onLearningFinish}
                            card={dataConfig?.topic.cards!}
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

    private getLearnableData = (): Learnable[] => {
        return new LearningDataRepository().read(this.state.dataConfig);
    }

    private onStartModeSelection = (settings: SessionSettings) => {
        this.setState({
            gameConfig: settings.gameSettings,
            learnConfig: settings.learnSettings,
            dataConfig: settings.dataSettings
        });
    }

    private onGameResultMenuClose = () => this.setState({ inResultsScreen: false, gameResult: undefined });

    private onLearningResultMenuClose = () => this.setState({
        learningResult: undefined,
        learnConfig: undefined,
        inResultsScreen: false,
        data: undefined
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