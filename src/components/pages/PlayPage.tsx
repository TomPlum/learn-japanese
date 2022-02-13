import LoadingScreen from "../layout/LoadingScreen";
import MemoryGame from "../game/MemoryGame";
import GameResultScreen from "../results/GameResultScreen";
import GameResult from "../../domain/game/GameResult";
import SessionID from "../../domain/session/SessionID";
import LearningDataRepository from "../../repository/LearningDataRepository";
import { useEffect, useState } from "react";
import { GameSettingsBuilder } from "../../domain/session/settings/game/GameSettings";
import { Learnable } from "../../domain/learn/Learnable";
import { useDataSettingsDispatch, useDataSettingsSelector, useGameSettingsDispatch, useGameSettingsSelector } from "../../hooks";
import { useHistory } from "react-router-dom";
import { clearGameSettings } from "../../slices/GameSettingsSlice";
import { clearDataSettings } from "../../slices/DataSettingsSlice";
import DataSettingsConverter from "../../converter/DataSettingsConverter";
import GameSettingsConverter from "../../converter/GameSettingsConverter";
import styles from "../../styles/sass/components/pages/PlayPage.module.scss";

const PlayPage = () => {

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [inResultsScreen, setInResultsScreen] = useState(false);
    const [gameResult, setGameResult] = useState<GameResult | undefined>(undefined);
    const [sessionKey, setSessionKey] = useState(new SessionID());
    const [data, setData] = useState<Learnable[]>([]);

    const history = useHistory();

    const gameSettingsDispatcher = useGameSettingsDispatch();
    const dataSettingsDispatcher = useDataSettingsDispatch();
    const gameSettingsData = useGameSettingsSelector(state => state.gameSettings.settings);
    const dataSettingsData = useDataSettingsSelector(state => state.dataSettings.settings);

    const gameSettings = gameSettingsData ? new GameSettingsConverter().deserialise(gameSettingsData) : new GameSettingsBuilder().build();
    const dataSettings = new DataSettingsConverter().deserialise(dataSettingsData);

    if (!gameSettingsData) {
        //setError("Game settings are undefined.");
    }

    if (!dataSettings) {
        //setError("Data settings are undefined.");
    }

    useEffect(() => {
        new LearningDataRepository().read(dataSettings).then(data => {
            setData(data);
        }).finally(() => {
            setLoading(false);
        });
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
        history.push("/menu/play");
    }

    return (
        <div className={styles.wrapper}>
            <LoadingScreen key={`${loading}`} active={loading} />

            {!inResultsScreen && data.length > 0 && (
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
                    onClose={onGameResultMenuClose}
                />
            )}
        </div>
    );
}

export default PlayPage;
