import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import KanjiService, { KanjiResult } from "../../service/KanjiService";
import { KyoikuGrade } from "../../domain/kanji/KyoikuGrade";
import LoadingSpinner from "../ui/LoadingSpinner";
import KanjiSearchResult from "../ui/KanjiSearchResult";
import StackGrid, { transitions } from "react-stack-grid";
import { useDebouncedEffect, useFontSelector } from "../../hooks";
import KanjiMeaningDisplay from "../learn/kanji/KanjiMeaningDisplay";
import { faAngleDoubleLeft, faAngleDoubleRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ValueSelector from "../ui/select/ValueSelector";
import styles from "../../styles/sass/components/pages/KanjiBankPage.module.scss";
import KeywordSearchField, { KeywordMeta } from "../ui/fields/KeywordSearchField";

const KanjiBankPage = () => {

    const service = new KanjiService();
    const font = useFontSelector(state => state.font.selected);

    const [kanji, setKanji] = useState<KanjiResult[]>([]);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(30);
    const [search, setSearch] = useState("");
    const [grades, setGrades] = useState(KyoikuGrade.ALL);
    const [level, setLevel] = useState("");
    const [selected, setSelected] = useState<KanjiResult | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setError("");
        setLoading(true);

        service.getKanjiPage(page, pageSize, grades).then(response => {
            const data = response.kanji;
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
    }, [page, pageSize, grades, level]);

    useDebouncedEffect(() => {
        if (search) {
            setError("");
            setLoading(true);

            service.search(search).then(response => {
                const data = response.kanji;

                setKanji(data);

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
        } else {
            setPage(0);
        }
    }, 200, [search]);

    const onSearch = (parameters: KeywordMeta[], value?: string) => {
        parameters.forEach((meta: KeywordMeta) => {
            switch (meta.key) {
                case "grade": {
                    const grades = meta.value!.replaceAll(" ", "").split(",");
                    setGrades(grades.map(val => KyoikuGrade.fromInteger(Number(val))))
                    break;
                }
                case "level": {
                    const level = meta.value!.substring(1).trim();
                    setLevel(level);
                }
            }
        });

        if (value) {
            setSearch(value);
        }
    }

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
                                <KanjiMeaningDisplay meanings={selected.value.getMeanings()} />
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
                                {selected.value.getOnyomiReadings().map(it => it.kana).join(", ")}
                            </p>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.label}>Kun'yomi Readings</p>
                            <p className={styles.value}>
                                {selected.value.getKunyomiReadings().map(it => it.kana).join(", ")}
                            </p>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.label}>Tags</p>
                            {selected.value.getTags() && <p className={styles.value}>{selected.value.getTags().join(", ")}</p>}
                            {selected.value.getTags().length === 0 && <p className={styles.value}>-</p>}
                        </div>
                    </>)}
                </Col>

                <Col lg={10} className={styles.rightSideWrapper}>
                    {error && <Alert variant="danger" className={styles.error}>{error}</Alert>}
                    <LoadingSpinner
                        size="60px"
                        active={loading}
                        thickness="2em"
                        variant="warning"
                        className={styles.loading}
                    />

                    <Row className={styles.header}>
                        <Col>
                            <KeywordSearchField
                                value={search}
                                disabled={loading}
                                onSubmit={onSearch}
                                className={styles.search}
                                onChange={(value: string) => setSearch(value)}
                                keywords={[ { key: "grade", type: "number" }, { key: "level", type: "string" } ]}
                            />
                        </Col>
                    </Row>

                    <Row className={styles.kanjiWrapper}>
                        <Col>
                            {kanji.length === 0 && <span>No Results</span>}
                            {kanji && (
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
                        </Col>
                    </Row>

                    <Row className={styles.footer}>
                        <Col>
                            <div className={styles.pagination}>
                                <Button onClick={() => setPage(0)} variant="dark">
                                    <FontAwesomeIcon icon={faAngleDoubleLeft} fixedWidth />
                                </Button>

                                <Button onClick={() => setPage(page - 1)} variant="dark">
                                    <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
                                </Button>

                                <span className={styles.page}>{page + 1}</span>

                                <Button onClick={() => setPage(page + 1)} variant="dark">
                                    <FontAwesomeIcon icon={faChevronRight} fixedWidth />
                                </Button>

                                <Button onClick={() => setPage(999)} variant="dark">
                                    <FontAwesomeIcon icon={faAngleDoubleRight} fixedWidth />
                                </Button>
                            </div>
                        </Col>

                        <Col>
                            <ValueSelector
                                prefix="Show"
                                disabled={loading}
                                values={[20, 40, 60, 80]}
                                className={styles.pageSize}
                                onChange={(value: number) => setPageSize(value)}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default KanjiBankPage;
