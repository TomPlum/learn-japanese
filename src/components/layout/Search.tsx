import React, { ChangeEvent, Component } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { KanaRepository } from "../../repository/KanaRepository";
import { Kana } from "../../types/Kana";
import LoadingSpinner from "../ui/LoadingSpinner";
import styles from "../../styles/sass/components/layout/Search.module.scss";
import KanaType from "../../types/KanaType";
import KanaGrid from "./KanaGrid";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        const kana = new KanaRepository().read({ hiragana: true, katakana: true, diagraphs: true });
        this.kana = kana;
        this.setState({ loading: false, kana });
    }

    componentDidUpdate(prevProps: Readonly<SearchProps>, prevState: Readonly<SearchState>) {
        const { search, showKatakana, showHiragana } = this.state;
        if (prevState.search !== search || prevState.showHiragana !== showHiragana || prevState.showKatakana !== showKatakana) {
            const filtered = this.filter(search);
            this.setState({ kana: filtered });
        }
    }

    render() {
        const { loading, search, kana, showHiragana, showKatakana, showDiagraphs } = this.state;

        return (
            <Container className={styles.wrapper}>
                <LoadingSpinner active={loading}/>
                <Container className={styles.searchWrapper}>
                    <Row>
                        <Col>
                            <InputGroup className={styles.search}>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                        <FontAwesomeIcon className={styles.search} icon={faSearch}/>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    value={search}
                                    onChange={this.onSearch}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text>{kana.length} Results</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>

                <Row>
                    <Col className={styles.switchWrapper}>
                        <Form.Check
                            type="switch"
                            id="hiragana"
                            className={styles.hiraganaSwitch}
                            checked={showHiragana}
                            onChange={() => this.setState({ showHiragana: !showHiragana })}
                        />
                        <Form.Label className={styles.label}>Hiragana</Form.Label>
                    </Col>

                    <Col>
                        <Form.Check
                            type="switch"
                            id="katakana"
                            className={styles.katakanaSwitch}
                            checked={showKatakana}
                            onChange={() => this.setState({ showKatakana: !showKatakana })}
                        />
                        <Form.Label className={styles.label}>Katakana</Form.Label>
                    </Col>

                    <Col>
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
                <KanaGrid kana={kana}/>
            </Container>
        )
    }

    private onSearch = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        this.setState({ search: e.target.value.toLowerCase() });
    }

    private filter = (search: string): Kana[] => {
        let searched = this.kana.filter(k => k.romanji.includes(search));
        const { showHiragana, showKatakana, showDiagraphs } = this.state;
        if (!showHiragana) {
            searched = searched.filter(k => k.type !== KanaType.HIRAGANA);
        }
        if (!showKatakana) {
            searched = searched.filter(k => k.type !== KanaType.KATAKANA);
        }
        if (!showDiagraphs) {
            searched = searched.filter(k => !k.isDiagraph());
        }
        return searched;
    }
}

export default Search;