import { useEffect, useState } from "react";
import HighScoresService, { HighScoreEntry } from "../../service/HighScoresService";
import LoadingSpinner from "../ui/loading/LoadingSpinner";
import HighScoresTable from "../ui/table/HighScoresTable";
import { Alert, Container, Fade } from "react-bootstrap";
import styles from "../../styles/sass/components/pages/HighScoresPage.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import ValueSelector from "../ui/select/ValueSelector";
import PresetService from "../../service/PresetService";
import PlayMode from "../../domain/session/PlayMode";
import { useTranslation } from "react-i18next";
import SearchField from "../ui/fields/SearchField";
import TablePagination from "../ui/paging/TablePagination";

const HighScoresPage = () => {

    const { t } = useTranslation();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [pageSize, setPageSize] = useState(30);
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [userSearch, setUserSearch] = useState("");
    const [totalEntries, setTotalEntries] = useState(0);
    const [presets, setPresets] = useState<PlayMode[]>([]);
    const [selectedPreset, setSelectedPreset] = useState(1);
    const [entries, setEntries] = useState<HighScoreEntry[]>([]);

    const highScoresService = new HighScoresService();
    const presetService = new PresetService();

    useEffect(() => {
        setError("");
        setLoading(true);

        highScoresService.getAllEntriesPage(pageNumber, pageSize).then(response => {
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

        presetService.getPlayPresets().then(response => {
            setPresets(response);
        });
    }, []);

    return (
        <Container className={styles.wrapper}>
            <div className={styles.content}>
                {error && <Alert variant="error">{error}</Alert> }

                <div className={styles.header}>
                    <FontAwesomeIcon icon={faTrophy} className={styles.icon} />
                    <p className={styles.title}>Highscores</p>
                </div>

                <div className={styles.controls}>
                    <div>
                        <ValueSelector
                            showBeforeScrolling={200}
                            selected={selectedPreset}
                            id="high-scores-preset-selector"
                            className={styles.presetSelector}
                            onChange={(id: number) => setSelectedPreset(id)}
                            values={presets.map(preset => ({ display: t(preset.displayName), value: preset.id }))}
                        />
                    </div>
                    <div>
                        <SearchField
                            value={userSearch}
                            disabled={loading}
                            className={styles.search}
                            placeholder="Search for a user..."
                            onChange={value => setUserSearch(value)}
                        />
                    </div>
                </div>

                <LoadingSpinner active={loading} />

                {!loading && (
                    <Fade in={true} appear={true}>
                        <HighScoresTable preset={selectedPreset} entries={entries} />
                    </Fade>
                )}

                <div className={styles.footer}>
                    <TablePagination
                        currentPage={pageNumber + 1}
                        totalPages={totalPages}
                        canPreviousPage={pageNumber > 0}
                        canNextPage={pageNumber < totalPages}
                        onPreviousPage={() => setPageNumber(page => page - 1)}
                        onNextPage={() => setPageNumber(page => page + 1)}
                        onFirstPage={() => setPageNumber(0)}
                        onLastPage={() => setPageNumber(totalPages - 1)}
                        onChangeQuantity={(size) => setPageSize(size)}
                        onToggleFirstBook={() => {}}
                        onToggleSecondBook={() => {}}
                    />
                </div>
            </div>
        </Container>
    );
}

export default HighScoresPage;
