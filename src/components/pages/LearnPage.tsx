import LearningSessionResult from "../../domain/learn/LearningSessionResult";
import SessionID from "../../domain/session/SessionID";
import LoadingScreen from "../layout/LoadingScreen";
import Learn from "../learn/Learn";
import LearningResultScreen from "../results/LearningResultScreen";
import { useEffect, useState } from "react";
import { Learnable } from "../../domain/learn/Learnable";
import Arrays from "../../utility/Arrays";
import DataSettingsConverter from "../../converter/DataSettingsConverter";
import { useDataSettingsDispatch, useDataSettingsSelector } from "../../hooks";
import LearningDataService from "../../service/LearningDataService";
import styles from "../../styles/sass/components/pages/LearnPage.module.scss";
import { useHistory } from "react-router-dom";
import { clearDataSettings } from "../../slices/DataSettingsSlice";

const LearnPage = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Learnable[]>([]);
    const [showResults, setShowResults] = useState(false);
    const [sessionKey, setSessionKey] = useState(new SessionID());
    const [result, setResult] = useState<LearningSessionResult | undefined>(undefined);

    const history = useHistory();

    const dataSettingsDispatch = useDataSettingsDispatch();
    const dataSettingsData = useDataSettingsSelector(state => state.dataSettings.settings);
    const dataSettings = dataSettingsData ? new DataSettingsConverter().deserialise(dataSettingsData) : undefined;

    useEffect(() => {
        if (dataSettings) {
            setLoading(true);
            new LearningDataService().read(dataSettings).then(data => {
                setData(data);
            }).finally(() => {
                setLoading(false);
            });
        }
    }, []);

    const handleDismissResultsScreen = () => {
        dataSettingsDispatch(clearDataSettings());
        history.push("/home");
    }

    const handleSessionCompletion = (result: LearningSessionResult) => {
        const userViewedAnyCards = result.forgotten.length + result.remembered.length > 0;

        if (userViewedAnyCards) {
            setResult(result);
            setShowResults(true);
        } else {
            handleDismissResultsScreen();
        }

        setSessionKey(new SessionID());
    }

    const handlePractice = (mistakes: Learnable[]) => {
        setShowResults(false);
        setData(Arrays.copy(mistakes));
    }

    return (
        <div className={styles.wrapper}>
            <LoadingScreen key={`${loading}`} active={!!dataSettings && loading} />

            {!dataSettings && (
                <span>
                    <p className={styles.error}>Your session settings have gone walk-abouts!</p>
                    <p className={styles.message}>
                        <span>{"Click"}</span>
                        <a href="/home" className={styles.link}>{" here "}</a>
                        <span>{"to go back home."}</span>
                    </p>
                </span>
            )}

            {!showResults && data.length > 0 && dataSettings && (
                <Learn
                    data={data}
                    key={sessionKey.value}
                    card={dataSettings.topic.cards}
                    onFinish={handleSessionCompletion}
                />
            )}

            {result && showResults && (
                <LearningResultScreen
                    result={result}
                    onPractice={handlePractice}
                    onDismiss={handleDismissResultsScreen}
                />
            )}
        </div>
    );
}

export default LearnPage;
