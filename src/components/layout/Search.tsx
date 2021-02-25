import React, { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { KanaRepository } from "../../repository/KanaRepository";
import { Kana } from "../../types/Kana";
import LoadingSpinner from "../ui/LoadingSpinner";
import styles from "../../styles/sass/components/layout/Search.module.scss";
import KanaType from "../../types/KanaType";
import KanaGrid from "./KanaGrid";
import SearchField from "./SearchField";

interface SearchProps {
    onClose: () => void;
}

interface SearchState {
    loading: boolean;
    kana: Kana[];
    search: string;
    showHiragana: boolean;
    showKatakana: boolean;
    showDiagraphs: boolean;
    showDiacriticals: boolean;
}

class Search extends Component<SearchProps, SearchState> {

    private kana: Kana[] = [];

    constructor(props: any) {
        super(props);
        this.state = {
            loading: false,
            kana: [],
            search: "",
            showHiragana: true,
            showKatakana: true,
            showDiagraphs: true,
            showDiacriticals: true
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        const kana = new KanaRepository().read({ hiragana: true, katakana: true, diagraphs: true });
        this.kana = kana;
        this.setState({ loading: false, kana });
    }

    componentDidUpdate(prevProps: Readonly<SearchProps>, prevState: Readonly<SearchState>) {
        const { search, kana } = this.state;
        if (prevState.kana.length === kana.length) {
            const filtered = this.filter(search);
            this.setState({ kana: filtered });
        }
    }

    render() {
        const { loading, search, kana, showHiragana, showKatakana, showDiagraphs, showDiacriticals } = this.state;

        return (
            <Container className={styles.wrapper}>
                <LoadingSpinner active={loading}/>
                <Container className={styles.searchWrapper}>
                    <Row>
                        <Col>
                            <SearchField onChange={this.onSearch} value={search} append={kana.length + " Results"} />
                        </Col>
                    </Row>
                </Container>

                <Row>
                    <Col className={styles.switchWrapper} xs={4}>
                        <Form.Check
                            type="switch"
                            id="hiragana"
                            className={styles.hiraganaSwitch}
                            checked={showHiragana}
                            onChange={() => this.setState({ showHiragana: !showHiragana })}
                        />
                        <Form.Label className={styles.label}>Hiragana</Form.Label>
                    </Col>

                    <Col className={styles.switchWrapper} xs={4}>
                        <Form.Check
                            type="switch"
                            id="katakana"
                            className={styles.katakanaSwitch}
                            checked={showKatakana}
                            onChange={() => this.setState({ showKatakana: !showKatakana })}
                        />
                        <Form.Label className={styles.label}>Katakana</Form.Label>
                    </Col>

                    <Col className={styles.switchWrapper} xs={4}>
                        <Form.Check
                            type="switch"
                            id="diagraphs"
                            className={styles.diagraphSwitch}
                            checked={showDiagraphs}
                            onChange={() => this.setState({ showDiagraphs: !showDiagraphs })}
                        />
                        <Form.Label className={styles.label}>Diagraphs</Form.Label>
                    </Col>
                </Row>
                <Row>
                    <Col className={styles.switchWrapper} xs={12}>
                        <Form.Check
                            type="switch"
                            id="diacriticals"
                            className={styles.diacriticalSwitch}
                            checked={showDiacriticals}
                            onChange={() => this.setState({ showDiacriticals: !showDiacriticals })}
                        />
                        <Form.Label className={styles.label}>Diacriticals</Form.Label>
                    </Col>
                </Row>
                <KanaGrid kana={kana}/>
            </Container>
        )
    }

    private onSearch = (newSearch: string) => {
        this.setState({ search: newSearch.toLowerCase() });
    }

    private filter = (search: string): Kana[] => {
        let searched = this.kana.filter(k => k.romanji.includes(search));
        const { showHiragana, showKatakana, showDiagraphs, showDiacriticals } = this.state;
        if (!showHiragana) {
            searched = searched.filter(k => k.type !== KanaType.HIRAGANA);
        }
        if (!showKatakana) {
            searched = searched.filter(k => k.type !== KanaType.KATAKANA);
        }
        if (!showDiagraphs) {
            searched = searched.filter(k => !k.isDiagraph());
        }
        if (!showDiacriticals) {
            searched = searched.filter(k => !k.isDiacritical);
        }
        return searched;
    }
}

export default Search;