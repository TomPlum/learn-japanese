import { useEffect, useState } from "react";
import HighScoresService, { HighScoreEntry } from "../../service/HighScoresService";
import LoadingSpinner from "../ui/loading/LoadingSpinner";
import HighScoresTable from "../ui/table/HighScoresTable";
import { Alert, Container, Fade } from "react-bootstrap";
import styles from "../../styles/sass/components/pages/HighScoresPage.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

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
                setTotalEntries(response.pages.quantity);
                setTotalPages(response.pages.total);
            }
        }).catch(response => {
            setError(response.error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <Container className={styles.wrapper}>
            {error && <Alert variant="error">{error}</Alert> }

            <div className={styles.header}>
                <FontAwesomeIcon icon={faTrophy} className={styles.icon} />
                <p className={styles.title}>Highscores</p>
            </div>

            <LoadingSpinner active={loading} />

            {!loading && (
                <Fade in={true} appear={true}>
                    <HighScoresTable preset={selectedPreset} entries={entries} />
                </Fade>
            )}

            <div className={styles.footer}>
                <p>Page {pageNumber + 1} of {totalPages}</p>
                <p>Page Size: {pageSize}</p>
                <p>Showing {totalEntries < pageSize ? totalEntries : pageSize} of {totalEntries} entries</p>
            </div>
        </Container>
    );
}

export default HighScoresPage;
