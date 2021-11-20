import { Alert, Button, Col, Container, Pagination, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import KanjiService from "../../service/KanjiService";
import { KyoikuGrade } from "../../domain/kanji/KyoikuGrade";
import { Kanji } from "../../domain/kanji/Kanji";
import LoadingSpinner from "../ui/LoadingSpinner";
import KanjiSearchResult from "../ui/KanjiSearchResult";
import StackGrid, { transitions } from "react-stack-grid";
import styles from "../../styles/sass/components/pages/KanjiBankPage.module.scss";
import { useFontSelector } from "../../hooks";
import KanjiMeaningDisplay from "../learn/kanji/KanjiMeaningDisplay";
import { ReadingType } from "../../domain/kanji/ReadingType";
import { faAngleDoubleLeft, faAngleDoubleRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const KanjiBankPage = () => {

    const service = new KanjiService();
    const font = useFontSelector(state => state.font.selected);

    const [kanji, setKanji] = useState<Kanji[]>([]);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(30);
    const [grades, setGrades] = useState(KyoikuGrade.ALL);
    const [selected, setSelected] = useState<Kanji | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setError("");
        setLoading(true);

        service.getKanjiPage(page, pageSize, grades).then(response => {
            const data = response.value;
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
    }, [page, pageSize, grades]);

    return (
        <Container className={styles.wrapper}>
            <Row>
                <Col lg={2} className={styles.info}>
                    {selected && (<>
                        <div className={styles.section}>
                            <a className={styles.selected} href={selected.getJishoLink()}>
                                {selected.getKanjiVariation()}
                            </a>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.label}>Meanings</p>
                            <div className={[styles.meanings, styles.value].join(" ")}>
                                <KanjiMeaningDisplay meanings={selected.getMeanings()} />
                            </div>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.label}>Grade</p>
                            <p className={styles.value}>{selected.grade.value}</p>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.label}>JLPT Level</p>
                            <p className={styles.value}>{selected.jlpt}</p>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.label}>On'yomi Readings</p>
                            <p className={styles.value}>{selected.getOnyomiReadings().map(it => it.kana).join(", ")}</p>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.label}>Kun'yomi Readings</p>
                            <p className={styles.value}>{selected.getKunyomiReadings().map(it => it.kana).join(", ")}</p>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.label}>Tags</p>
                            {selected.getTags() && <p className={styles.value}>{selected.getTags().join(", ")}</p>}
                            {selected.getTags().length === 0 && <p className={styles.value}>-</p>}
                        </div>
                    </>)}
                </Col>

                <Col lg={10}>
                    {error && <Alert variant="danger" className={styles.error}>{error}</Alert>}
                    <LoadingSpinner active={loading} />

                    <Row>
                        <Col>
                            {kanji && !loading && (
                                <StackGrid
                                    duration={0}
                                    appearDelay={0}
                                    component="div"
                                    columnWidth={90}
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
                                    {kanji.map(value => {
                                        const selectedClass = value.getUniqueID() === selected?.getUniqueID()
                                            ? styles.highlight : undefined;
                                        return (
                                            <KanjiSearchResult
                                                value={value}
                                                key={value.getUniqueID()}
                                                style={{ fontFamily: font }}
                                                onClick={() => setSelected(value)}
                                                className={[styles.kanji, selectedClass].join(" ")}
                                            />
                                        )
                                    })}
                                </StackGrid>
                            )}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className={styles.pagination}>
                                <Button onClick={() => setPage(0)} variant="dark">
                                    <FontAwesomeIcon icon={faAngleDoubleLeft} fixedWidth />
                                </Button>

                                <Button onClick={() => setPage(page - 1)} variant="dark">
                                    <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
                                </Button>

                                <span>{page + 1}</span>

                                <Button onClick={() => setPage(page + 1)} variant="dark">
                                    <FontAwesomeIcon icon={faChevronRight} fixedWidth />
                                </Button>

                                <Button onClick={() => setPage(999)} variant="dark">
                                    <FontAwesomeIcon icon={faAngleDoubleRight} fixedWidth />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default KanjiBankPage;
