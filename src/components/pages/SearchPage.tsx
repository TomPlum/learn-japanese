import React, { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { KanaRepository } from "../../repository/KanaRepository";
import { Kana } from "../../types/kana/Kana";
import LoadingSpinner from "../ui/LoadingSpinner";
import styles from "../../styles/sass/components/pages/SearchPage.module.scss";
import KanaType from "../../types/kana/KanaType";
import KanaGrid from "../layout/KanaGrid";
import SearchField from "../ui/SearchField";
import FilterChain from "../../filters/FilterChain";
import KanaTypeFilter from "../../filters/kana/KanaTypeFilter";
import DiagraphFilter from "../../filters/kana/DiagraphFilter";
import DiacriticalFilter from "../../filters/kana/DiacriticalFilter";
import RomajiFilter from "../../filters/kana/RomajiFilter";

interface SearchPageState {
    loading: boolean;
    kana: Kana[];
    search: string;
    showHiragana: boolean;
    showKatakana: boolean;
    showDiagraphs: boolean;
    showDiacriticals: boolean;
}

class SearchPage extends Component<{ }, SearchPageState> {

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

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<SearchPageState>) {
        const { search, kana } = this.state;
        if (prevState.kana.length === kana.length) {
            this.setState({ kana: this.filter(search) });
        }
    }

    render() {
        const { loading, search, kana, showHiragana, showKatakana, showDiagraphs, showDiacriticals } = this.state;

        return (
            <div className={styles.wrapper} data-testid="search-page">
                <LoadingSpinner active={loading}/>

                <Container className={styles.controlsWrapper}>
                    <Container className={styles.searchWrapper}>
                        <SearchField
                            onChange={this.onSearch}
                            value={search}
                            append={kana.length + " Results"}
                            placeholder="Enter the rōmaji"
                        />
                    </Container>

                    <Container>
                        <Row>
                            <Col className={styles.switchWrapper} md={3} sm={4} xs={6}>
                                <Form.Check
                                    type="switch"
                                    id="hiragana"
                                    className={styles.hiraganaSwitch}
                                    checked={showHiragana}
                                    onChange={() => this.setState({ showHiragana: !showHiragana })}
                                    data-testid="hiragana-switch"
                                />
                                <Form.Label className={styles.label}>Hiragana</Form.Label>
                            </Col>

                            <Col className={styles.switchWrapper} md={3} sm={4} xs={6}>
                                <Form.Check
                                    type="switch"
                                    id="katakana"
                                    className={styles.katakanaSwitch}
                                    checked={showKatakana}
                                    onChange={() => this.setState({ showKatakana: !showKatakana })}
                                    data-testid="katakana-switch"
                                />
                                <Form.Label className={styles.label}>Katakana</Form.Label>
                            </Col>

                            <Col className={styles.switchWrapper} md={3} sm={4} xs={6}>
                                <Form.Check
                                    type="switch"
                                    id="diagraphs"
                                    className={styles.diagraphSwitch}
                                    checked={showDiagraphs}
                                    onChange={() => this.setState({ showDiagraphs: !showDiagraphs })}
                                    data-testid="diagraphs-switch"
                                />
                                <Form.Label className={styles.label}>Diagraphs</Form.Label>
                            </Col>

                            <Col className={styles.switchWrapper} md={3} sm={12} xs={6}>
                                <Form.Check
                                    type="switch"
                                    id="diacriticals"
                                    className={styles.diacriticalSwitch}
                                    checked={showDiacriticals}
                                    onChange={() => this.setState({ showDiacriticals: !showDiacriticals })}
                                    data-testid="diacriticals-switch"
                                />
                                <Form.Label className={styles.label}>Diacriticals</Form.Label>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                <KanaGrid kana={kana}/>
            </div>
        )
    }

    private onSearch = (newSearch: string) => {
        this.setState({ search: newSearch.toLowerCase() });
    }

    private filter = (search: string): Kana[] => {
        const chain = new FilterChain<Kana>();
        const { showHiragana, showKatakana, showDiagraphs, showDiacriticals } = this.state;

        chain.addFilter(new RomajiFilter(search))
        if (!showHiragana) chain.addFilter(new KanaTypeFilter(KanaType.HIRAGANA));
        if (!showKatakana) chain.addFilter(new KanaTypeFilter(KanaType.KATAKANA));
        if (!showDiagraphs) chain.addFilter(new DiagraphFilter());
        if (!showDiacriticals) chain.addFilter(new DiacriticalFilter());

        return chain.execute(this.kana);
    }
}

export default SearchPage;