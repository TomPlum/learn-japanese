import { useEffect, useState } from "react";
import HighScoresService, { HighScoreEntry } from "../../service/HighScoresService";
import HighScoresTable from "../ui/table/HighScoresTable";
import { Alert, Container, Fade } from "react-bootstrap";
import styles from "../../styles/sass/components/pages/HighScoresPage.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faTimes, faTrophy } from "@fortawesome/free-solid-svg-icons";
import ValueSelector from "../ui/select/ValueSelector";
import PresetService from "../../service/PresetService";
import PlayMode from "../../domain/session/PlayMode";
import { useTranslation } from "react-i18next";
import TablePagination from "../ui/paging/TablePagination";
import EmptyTableBody from "../ui/table/EmptyTableBody";
import UserSearchField from "../ui/fields/UserSearchField";
import { useQueryParams } from "../../hooks";
import SingleUserHighScoresTable from "../ui/table/SingleUserHighScoresTable";
import { useHistory, useLocation } from "react-router-dom";

const HighScoresPage = () => {

    const { t } = useTranslation();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [pageSize, setPageSize] = useState(10);
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

    const history = useHistory();
    const location = useLocation();
    const queryParams = useQueryParams();
    const userQueryParamName = "user";
    const hasUserQueryParam = queryParams.has(userQueryParamName);

    const getHighScoreEntries = () => {
        setError("");
        setLoading(true);

        highScoresService.getAllEntriesPage(selectedPreset, pageNumber, pageSize, username).then(response => {
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

    const getPresets = () => {
        presetService.getPlayPresets().then(response => {
            setPresets(response);
        });
    }

    const preload = () => {
        getHighScoreEntries();
        getPresets();
    }

    useEffect(preload, []);
    useEffect(getHighScoreEntries, [username, pageSize, pageNumber]);

    const getEmptyMessage = () => {
        let message = `No scores for ${selectedPresetName}`;
        if (username) {
            message += ` for user ${username}`
        }
        return `${message}.`;
    }

    const handleSelectUser = (username: string) => {
        setUsername(username);
    }

    const setUserQueryParameter = (username: string) => {
        history.replace({
            pathname: location.pathname,
            search: new URLSearchParams({[userQueryParamName]: username}).toString()
        });
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
                        <UserSearchField
                            disabled={loading}
                            className={styles.search}
                            onSelect={handleSelectUser}
                        />
                    </div>
                    {username && <div className={styles.userFilterToggle} data-testid="user-search-filter">
                        <FontAwesomeIcon icon={faFilter} className={styles.filter} />
                        <span className={styles.username}>{username}</span>
                        <FontAwesomeIcon
                            icon={faTimes}
                            className={styles.remove}
                            title="Remove Filter"
                            onClick={() => setUsername(undefined)}
                        />
                    </div>}
                </div>

                {error && <Alert variant="danger" className={styles.error}>{error}</Alert> }

                <Fade in={true} appear={true}>
                    <div>
                        {hasUserQueryParam && <SingleUserHighScoresTable />}

                        {!hasUserQueryParam && (
                            <HighScoresTable
                                entries={entries}
                                preset={selectedPreset}
                                onClickUser={setUserQueryParameter}
                            />
                        )}

                        <EmptyTableBody
                            error={error}
                            onRetry={preload}
                            empty={entries.length === 0}
                            emptyMessage={getEmptyMessage()}
                            loading={loading && entries.length === 0}
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
