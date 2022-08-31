import LoadingScreen from "../layout/LoadingScreen";
import MemoryGame from "../game/MemoryGame";
import GameResultScreen from "../results/GameResultScreen";
import GameResult from "../../domain/game/GameResult";
import SessionID from "../../domain/session/SessionID";
import LearningDataService from "../../service/LearningDataService";
import { useEffect, useState } from "react";
import { Learnable } from "../../domain/learn/Learnable";
import { useDataSettingsDispatch, useDataSettingsSelector, useGameSettingsDispatch, useGameSettingsSelector } from "../../hooks";
import { useHistory } from "react-router-dom";
import { clearGameSettings } from "../../slices/GameSettingsSlice";
import { clearDataSettings } from "../../slices/DataSettingsSlice";
import DataSettingsConverter from "../../converter/DataSettingsConverter";
import GameSettingsConverter from "../../converter/GameSettingsConverter";
import styles from "../../styles/sass/components/pages/PlayPage.module.scss";

const PlayPage = () => {

    const [loading, setLoading] = useState(false);
    const [inResultsScreen, setInResultsScreen] = useState(false);
    const [gameResult, setGameResult] = useState<GameResult | undefined>(undefined);
    const [sessionKey, setSessionKey] = useState(new SessionID());
    const [data, setData] = useState<Learnable[]>([]);

    const history = useHistory();

    const gameSettingsDispatcher = useGameSettingsDispatch();
    const dataSettingsDispatcher = useDataSettingsDispatch();

    const gameSettingsData = useGameSettingsSelector(state => state.gameSettings?.settings);
    const dataSettingsData = useDataSettingsSelector(state => state.dataSettings?.settings);
    const selectedPresetId = useGameSettingsSelector(state => state.gameSettings.presetId);

    const gameSettings = gameSettingsData ? new GameSettingsConverter().deserialise(gameSettingsData) : undefined;
    const dataSettings = dataSettingsData ? new DataSettingsConverter().deserialise(dataSettingsData) : undefined;

    useEffect(() => {
        if (!!dataSettings && !!gameSettings) {
            setLoading(true);
            new LearningDataService().read(dataSettings).then(data => {
                setData(data);
            }).finally(() => {
                setLoading(false);
            });
        }
    }, []);

    const onGameFinish = (result: GameResult) => {
        setGameResult(result);
        setInResultsScreen(true);
        setSessionKey(new SessionID());
    }

    const onGameResultMenuClose = () => {
        setInResultsScreen(false);
        setGameResult(undefined);
        gameSettingsDispatcher(clearGameSettings());
        dataSettingsDispatcher(clearDataSettings());
        history.push("/home");
    }

    return (
        <div className={styles.wrapper}>
            <LoadingScreen key={`${loading}`} active={loading} />

            {(!gameSettings || !dataSettings) && (
                <span>
                    <p className={styles.error}>It looks like your game settings are missing!</p>
                    <p className={styles.message}>
                        <span>{"Click"}</span>
                        <a href="/home" className={styles.link}>{" here "}</a>
                        <span>{"to go back home."}</span>
                    </p>
                </span>
            )}

            {!inResultsScreen && data.length > 0 && gameSettings && (
                <MemoryGame
                    data={data}
                    key={sessionKey.value}
                    onFinish={onGameFinish}
                    settings={gameSettings}
                    sessionKey={sessionKey.value}
                />
            )}

            {inResultsScreen && gameResult && (
                <GameResultScreen
                    result={gameResult}
                    presetId={selectedPresetId}
                    onClose={onGameResultMenuClose}
                />
            )}
        </div>
    );
}

export default PlayPage;
