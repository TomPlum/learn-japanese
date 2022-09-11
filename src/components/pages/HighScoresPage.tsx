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
import EmptyTableBody from "../ui/table/EmptyTableBody";
import { useDebouncedEffect } from "../../hooks";

const HighScoresPage = () => {

    const { t } = useTranslation();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [pageSize, setPageSize] = useState(30);
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalEntries, setTotalEntries] = useState(0);
    const [presets, setPresets] = useState<PlayMode[]>([]);
    const [selectedPreset, setSelectedPreset] = useState(1);
    const [entries, setEntries] = useState<HighScoreEntry[]>([]);
    const [username, setUsername] = useState<string | undefined>(undefined);

    const highScoresService = new HighScoresService();
    const presetService = new PresetService();
    const selectedPresetName = t(presets.find(preset => preset.id === selectedPreset)?.displayName ?? "");

    const getHighScoreEntries = () => {
        setError("");
        setLoading(true);

        highScoresService.getAllEntriesPage(pageNumber, pageSize, username).then(response => {
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
    }

    useEffect(() => {
        getHighScoreEntries();

        presetService.getPlayPresets().then(response => {
            setPresets(response);
        });
    }, []);

    useDebouncedEffect(() => {
        if (username !== "") {
            getHighScoreEntries();
        }
    }, 300, [username]);

    const getEmptyMessage = () => {
        let message = `No scores for ${selectedPresetName}`;
        if (username) {
            message += ` for user ${username}`
        }
        return `${message}.`;
    }

    return (
        <Container className={styles.wrapper}>
            <div className={styles.content}>
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
                            value={username}
                            disabled={loading}
                            className={styles.search}
                            placeholder="Search for a user..."
                            onChange={value => setUsername(value)}
                        />
                    </div>
                </div>

                {error && <Alert variant="danger" className={styles.error}>{error}</Alert> }

                <Fade in={true} appear={true}>
                    <div>
                        <HighScoresTable preset={selectedPreset} entries={entries} />
                        <EmptyTableBody
                            error={error}
                            loading={loading}
                            empty={entries.length === 0}
                            emptyMessage={getEmptyMessage()}
                            onRetry={() => getHighScoreEntries()}
                        />
                    </div>
                </Fade>

                <div className={styles.footer}>
                    <TablePagination
                        totalPages={totalPages}
                        onToggleFirstBook={() => {}}
                        currentPage={pageNumber + 1}
                        onToggleSecondBook={() => {}}
                        canPreviousPage={pageNumber > 0}
                        onFirstPage={() => setPageNumber(0)}
                        canNextPage={pageNumber + 1 < totalPages}
                        onChangeQuantity={(size) => setPageSize(size)}
                        onLastPage={() => setPageNumber(totalPages - 1)}
                        onNextPage={() => setPageNumber(page => page + 1)}
                        onPreviousPage={() => setPageNumber(page => page - 1)}
                    />
                </div>
            </div>
        </Container>
    );
}

export default HighScoresPage;
