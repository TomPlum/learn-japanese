import { useEffect, useState } from "react";
import MemoryGame from "../game/MemoryGame";
import GameResult from "../../domain/game/GameResult";
import GameResultScreen from "../results/GameResultScreen";
import LoadingSpinner from "../ui/LoadingSpinner";
import ControlsMenu from "../layout/ControlsMenu";
import SettingsMenu from "../layout/SettingsMenu";
import { fromString } from "../../domain/AppMode";
import SessionID from "../../domain/session/SessionID";
import LearningSessionResult from "../../domain/learn/LearningSessionResult";
import LearningResultScreen from "../results/LearningResultScreen";
import Arrays from "../../utility/Arrays";
import MainErrorBoundary from "../error/MainErrorBoundary";
import { Learnable } from "../../domain/learn/Learnable";
import Learn from "../learn/Learn";
import LearningDataRepository from "../../repository/LearningDataRepository";
import { RouteComponentProps } from "react-router-dom";
import styles from "../../styles/sass/components/pages/MainMenuPage.module.scss";
import { SessionSettings } from "../../domain/session/settings/SessionSettings";
import GameSettings from "../../domain/session/settings/game/GameSettings";
import DataSettings from "../../domain/session/settings/data/DataSettings";
import LearnSettings from "../../domain/session/settings/LearnSettings";
import UserForm from "../user/UserForm";
import ErrorContainer from "../error/ErrorContainer";
import CardContainer from "../cards/CardContainer";
import { useModeDispatch } from "../../hooks";
import { setActive, setApplicationMode } from "../../slices/ModeSlice";

interface PageParameters {
    mode: string;
}

const MainMenuPage = (props: RouteComponentProps<PageParameters>) => {

    const [loading, setLoading ] = useState(false);
    const [gameConfig, setGameConfig] = useState<GameSettings | undefined>(undefined);
    const [learnConfig, setLearnConfig] = useState<LearnSettings | undefined>(undefined);
    const [dataConfig, setDataConfig] = useState<DataSettings | undefined>(undefined);
    const [inResultsScreen, setInResultsScreen] = useState(false);
    const [gameResult, setGameResult] = useState<GameResult | undefined>(undefined);
    const [learningResult, setLearningResult] = useState<LearningSessionResult | undefined>(undefined);
    const [sessionKey, setSessionKey] = useState(new SessionID());
    const [data, setData] = useState<Learnable[]>([]);
    const [inLoginModal, setInLoginModal] = useState(false);

    const modeDispatcher = useModeDispatch();

    useEffect(() => {
        const navigationMode = props.match.params.mode;
        modeDispatcher(setApplicationMode(fromString(navigationMode)));
    }, []);

    const onStartModeSelection = (settings: SessionSettings) => {
        setGameConfig(settings.gameSettings);
        setLearnConfig(settings.learnSettings);
        setDataConfig(settings.dataSettings);
        setLoading(true);

        new LearningDataRepository().read(settings.dataSettings)
            .then(data => {
                setData(data);
            }).finally(() => {
                setLoading(false);
                modeDispatcher(setActive(false));
            });
    }

    const onGameResultMenuClose = () => {
        setInResultsScreen(false);
        setGameResult(undefined);
    }

    const onLearningResultMenuClose = () => {
        setData([]);
        setLearnConfig(undefined);
        setInResultsScreen(false);
        setLearningResult(undefined);
    }

    const onGameFinish = (result: GameResult) => {
        setGameResult(result);
        setGameConfig(undefined);
        setInResultsScreen(true);
        setSessionKey(new SessionID());
        modeDispatcher(setActive(true));
    }

    const onLearningFinish = (result: LearningSessionResult) => {
        if (result.forgotten.length + result.remembered.length > 0) {
            setLearningResult(result);
            setInResultsScreen(true);
        } else {
            onLearningResultMenuClose();
        }
        setSessionKey(new SessionID());
        modeDispatcher(setActive(true));
    }

    const onPracticeStart = (data: Learnable[]) => {
        onGameResultMenuClose();
        setData(Arrays.copy(data));
    }

    const isInMenu = !gameConfig && !learnConfig && !inResultsScreen && !learningResult && !loading;

    return (
        <div className={styles.wrapper}>
            <ErrorContainer />
            <MainErrorBoundary>
                <LoadingSpinner active={loading} />

                <ControlsMenu onLaunchLoginModal={() => setInLoginModal(true)} />

                <CardContainer />

                {isInMenu &&
                    <SettingsMenu onStart={onStartModeSelection} />
                }

                {gameConfig && !inResultsScreen && data.length > 0 &&
                    <MemoryGame
                        data={data}
                        settings={gameConfig}
                        key={sessionKey.value}
                        onFinish={onGameFinish}
                        sessionKey={sessionKey.value}
                    />
                }

                {inResultsScreen && gameResult &&
                    <GameResultScreen
                        result={gameResult}
                        onClose={onGameResultMenuClose}
                    />
                }

                {learnConfig && !inResultsScreen && data.length > 0 &&
                    <Learn
                        data={data}
                        key={sessionKey.value}
                        card={dataConfig?.topic.cards!}
                        onFinish={onLearningFinish}
                    />
                }

                {learningResult && inResultsScreen &&
                    <LearningResultScreen
                        result={learningResult}
                        onPractice={onPracticeStart}
                        onDismiss={onLearningResultMenuClose}
                    />
                }

                {inLoginModal && (
                    <UserForm
                        location={""}
                        show={inLoginModal}
                        onClose={() => setInLoginModal(false)}
                    />
                )}
            </MainErrorBoundary>
        </div>
    );
}

export default MainMenuPage;
