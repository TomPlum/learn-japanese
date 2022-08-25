import { useEffect, useState } from "react";
import HighScoresService, { HighScoreEntry } from "../../service/HighScoresService";
import LoadingSpinner from "../ui/loading/LoadingSpinner";
import HighScoresTable from "../ui/table/HighScoresTable";
import { Alert, Fade } from "react-bootstrap";
import styles from "../../styles/sass/components/pages/HighScoresPage.module.scss"

const HighScoresPage = () => {

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [pageSize, setPageSize] = useState(30);
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalEntries, setTotalEntries] = useState(0);
    const [selectedPreset, setSelectedPreset] = useState(1);
    const [entries, setEntries] = useState<HighScoreEntry[]>([]);

    const service = new HighScoresService();

    useEffect(() => {
        setError("");
        setLoading(true);

        service.getAllEntriesPage(pageNumber, pageSize).then(response => {
            if (response.error) {
                setError(response.error);
            } else {
                setEntries(response.entries);
                setTotalEntries(response.pages.total);
                setTotalPages(response.pages.quantity);
            }
        }).catch(response => {
            setError(response.error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <div className={styles.wrapper}>
            {error && <Alert variant="error">{error}</Alert> }

            <div className={styles.header}>
                <p className={styles.title}>Highscores</p>
            </div>

            <LoadingSpinner active={loading} />

            {!loading && (
                <Fade in={true} appear={true}>
                    <HighScoresTable preset={selectedPreset} entries={entries} />
                </Fade>
            )}
        </div>
    );
}

export default HighScoresPage;
