import { Alert, Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import KanjiService, { KanjiResult } from "../../service/KanjiService";
import { KyoikuGrade } from "../../domain/kanji/KyoikuGrade";
import LoadingSpinner from "../ui/LoadingSpinner";
import KanjiSearchResult from "../ui/KanjiSearchResult";
import StackGrid, { transitions } from "react-stack-grid";
import { useFontSelector } from "../../hooks";
import { faSearchMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ValueSelector from "../ui/select/ValueSelector";
import KeywordSearchField, { KeywordMeta } from "../ui/fields/KeywordSearchField";
import styles from "../../styles/sass/components/pages/KanjiBankPage.module.scss";
import { KanjiReading } from "../../domain/kanji/KanjiReading";
import ExampleDisplay from "../ui/display/ExampleDisplay";
import SimplePagination from "../ui/paging/SimplePagination";
import { JLTPLevel } from "../../domain/learn/JLTPLevel";

const KanjiBankPage = () => {

    const service = new KanjiService();
    const font = useFontSelector(state => state.font.selected);

    const [kanji, setKanji] = useState<KanjiResult[]>([]);
    const [selected, setSelected] = useState<KanjiResult | undefined>(undefined);

    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(40);
    const [lastPage, setLastPage] = useState(999);
    const [results, setResults] = useState<number | undefined>(undefined);

    const [search, setSearch] = useState("");

    const [grades, setGrades] = useState(KyoikuGrade.ALL);
    const [level, setLevel] = useState<JLTPLevel[]>([JLTPLevel.N1, JLTPLevel.N2, JLTPLevel.N3, JLTPLevel.N4, JLTPLevel.N5]);

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [inExampleModal, setInExamplesModal] = useState(false);

    useEffect(() => {
        if (search === "") {
            getPagedKanji();
        }
    }, [page, pageSize, grades, level, search]);

    useEffect(() => {
        if (search !== "") {
            setError("");
            setLoading(true);

            service.search(page, pageSize, search).then(response => {
                const data = response.kanji;

                setKanji(data);
                setLastPage(response.pages);
                setResults(response.quantity);

                if (data.length > 0) {
                    setSelected(data[0]);
                }

                if (response.error) {
                    setError(response.error);
                }
            }).catch(response => {
                setError(response.error);
            }).finally(() => {
                setLoading(false);
            });
        }
    }, [search, page, pageSize]);

    const getPagedKanji = () => {
        setError("");
        setLoading(true);

        service.getKanjiPage(page, pageSize, grades).then(response => {
            const data = response.kanji;

            setLastPage(response.pages);
            setResults(response.quantity);

            if (data && data.length > 0) {
                setKanji(data);
                setSelected(data[0]);
            } else {
                setError(response.error ?? "Failed to load kanji.");
            }
        }).catch(response => {
            setError(response.error);
        }).finally(() => {
            setLoading(false);
        });
    }

    const onSearch = (parameters: KeywordMeta[], value?: string) => {
        parameters.forEach((meta: KeywordMeta) => {
            switch (meta.key) {
                case "grade": {
                    const grades = meta.value!.replaceAll(" ", "").split(",");
                    setGrades(grades.map(val => KyoikuGrade.fromInteger(Number(val))))
                    break;
                }
                case "level": {
                    const levelStrings = meta.value!.substring(1).trim().split(",");
                    const levels: JLTPLevel[] = levelStrings.map(value => JLTPLevel[value as keyof typeof JLTPLevel]);
                    setLevel(levels);
                    break;
                }
            }
        });

        if (value) {
            setSearch(value);
        }
    }

    const onRemoveSearchParam = (meta: KeywordMeta) => {
        switch (meta.key) {
            case "grade": {
                setGrades(KyoikuGrade.ALL);
                break;
            }
            case "level": {
                setLevel([JLTPLevel.N1, JLTPLevel.N2, JLTPLevel.N3, JLTPLevel.N4, JLTPLevel.N5]);
                break;
            }
        }
    }

    const highlightSearch = (field:string, value: string) => {
        if (selected?.field === field) {
            const startIndex = value.toLowerCase().indexOf(search.toLowerCase());
            const endIndex = startIndex + search.length;

            return (
                <span>
                    <span>{value.substring(0, startIndex)}</span>
                    <strong className={styles.matching}>{value.substring(startIndex, endIndex)}</strong>
                    <span>{value.substring(endIndex)}</span>
                </span>
            );
        } else {
            return value;
        }
    }

    const getReadingKana = (readings: KanjiReading[]) => {
        const kana = readings.map(reading => reading.kana);
        return kana.length > 0 ? kana.join(", ") : "-";
    }

    const examples = selected?.value.examples;
    const exampleQuantity = examples?.length ?? 0;
    const hasExamples = exampleQuantity > 0;

    return (
        <Container className={styles.wrapper}>
            <Row>
                <Col lg={2} className={styles.info}>
                    {selected && (<>
                        <div className={styles.section}>
                            <p className={styles.label}>Character</p>
                            <a className={styles.selected} href={selected.value.getJishoLink()} target="_blank">
                                {selected.value.getKanjiVariation()}
                            </a>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.label}>Meanings</p>
                            <div className={[styles.meanings, styles.value].join(" ")}>
                                {highlightSearch("meaning", selected.value.getMeanings().join(", "))}
                            </div>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.label}>Grade</p>
                            <p className={styles.value}>{selected.value.grade.value}</p>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.label}>JLPT Level</p>
                            <p className={styles.value}>{selected.value.jlpt}</p>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.label}>On'yomi Readings</p>
                            <p className={styles.value}>
                                {highlightSearch("reading", getReadingKana(selected.value.getOnyomiReadings()))}
                            </p>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.label}>Kun'yomi Readings</p>
                            <p className={styles.value}>
                                {highlightSearch("reading", getReadingKana(selected.value.getKunyomiReadings()))}
                            </p>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.label}>Examples {hasExamples ? `(x${exampleQuantity})` : ""}</p>
                            <p className={styles.value}>
                                {hasExamples ?
                                    <span onClick={() => setInExamplesModal(true)} className={styles.example}>
                                        {examples?.[0].kanji}
                                    </span> :
                                    <span>-</span>
                                }
                            </p>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.label}>Tags</p>
                            {selected.value.getTags().length > 0 && (
                                <p className={styles.value}>
                                    {highlightSearch("tag", selected.value.getTags().join(", "))}
                                </p>
                            )}
                            {selected.value.getTags().length === 0 && <p className={styles.value}>-</p>}
                        </div>
                    </>)}
                </Col>

                <Col lg={10} className={styles.rightSideWrapper}>
                    {error && (
                        <Alert variant="danger" className={styles.error}>{error}</Alert>
                    )}

                    <LoadingSpinner
                        size="60px"
                        active={loading}
                        thickness="2em"
                        variant="warning"
                        className={styles.loading}
                    />

                    <div className={styles.header}>
                        <KeywordSearchField
                            results={results}
                            disabled={loading}
                            onSubmit={onSearch}
                            className={styles.search}
                            onRemoveFilter={onRemoveSearchParam}
                            onChange={(value: string) => setSearch(value)}
                            keywords={[
                                { key: "grade", type: "number" },
                                { key: "level", type: "string" },
                                { key: "strokes", type: "number" }
                            ]}
                        />
                    </div>

                    {inExampleModal && selected && (
                        <ExampleDisplay
                            examples={selected.value.examples}
                            onDismiss={() => setInExamplesModal(false)}
                        />
                    )}

                    <div className={styles.kanjiWrapper}>
                        {!error && !loading && search && kanji.length === 0 && (
                            <div className={styles.emptyWrapper}>
                                <FontAwesomeIcon fixedWidth size="sm" className={styles.icon} icon={faSearchMinus}/>
                                {<span>{`No results for '${search}'...`}</span>}
                            </div>
                        )}

                        {kanji.length > 0 && (
                            <StackGrid
                                duration={0}
                                appearDelay={0}
                                component="div"
                                columnWidth={100}
                                gutterWidth={10}
                                easing="quartOut"
                                gutterHeight={10}
                                className={styles.grid}
                                monitorImagesLoaded={false}
                                enter={transitions.fade.enter}
                                leaved={transitions.fade.leaved}
                                appear={transitions.fade.appear}
                                entered={transitions.fade.entered}
                                appeared={transitions.fade.appeared}
                            >
                                {kanji.map(result => {
                                    const value = result.value;
                                    const selectedClass = value.getUniqueID() === selected?.value.getUniqueID()
                                        ? styles.highlight : styles.kanji;
                                    const blurClass = loading ? styles.frosted : undefined;
                                    return (
                                        <KanjiSearchResult
                                            result={result}
                                            search={search}
                                            key={value.getUniqueID()}
                                            style={{ fontFamily: font }}
                                            onClick={() => setSelected(result)}
                                            className={[selectedClass, blurClass].join(" ")}
                                        />
                                    )
                                })}
                            </StackGrid>
                        )}
                    </div>

                    <div className={styles.footer}>
                        <SimplePagination
                            page={page}
                            disabled={loading}
                            lastPage={lastPage}
                            className={styles.pagination}
                            onPageChange={(page: number) => setPage(page)}
                        />

                        <ValueSelector
                            prefix="Show"
                            placement="top"
                            disabled={loading}
                            selected={pageSize}
                            id="page-size-selector"
                            values={[20, 40, 60, 80]}
                            className={styles.pageSize}
                            onChange={(value: number) => setPageSize(value)}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default KanjiBankPage;
