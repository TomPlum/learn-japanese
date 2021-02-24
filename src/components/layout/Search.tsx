import React, { ChangeEvent, Component } from "react";
import { Card, Container, Form, InputGroup, Row } from "react-bootstrap";
import { KanaRepository } from "../../repository/KanaRepository";
import { Kana } from "../../types/Kana";
import LoadingSpinner from "../ui/LoadingSpinner";
import styles from "../../styles/sass/components/layout/Search.module.scss";
import KanaTile from "./KanaTile";
import { CSSGrid, easings, layout, makeResponsive } from 'react-stonecutter';
import KanaType from "../../types/KanaType";

interface SearchProps {
    onClose: () => void;
}

interface SearchState {
    loading: boolean;
    kana: Kana[];
    search: string;
    showHiragana: boolean;
    showKatakana: boolean;
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
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.kana = new KanaRepository().read({ hiragana: true, katakana: true, diagraphs: true });
        this.setState({ loading: false });
    }

    componentDidUpdate(prevProps: Readonly<SearchProps>, prevState: Readonly<SearchState>) {
        const { search, kana } = this.state;
        if (prevState.search !== search) {
            if (search.length > prevState.search.length) {
                const filtered = this.filter(kana, search);
                this.setState({ kana: filtered })
            } else {
                const filtered = this.filter(this.kana, search);
                this.setState({ kana: filtered });
            }
        }
    }

    render() {
        const { loading, kana, showHiragana, showKatakana } = this.state;

        const Grid = makeResponsive(CSSGrid, { maxWidth: 1920, minPadding: 10 });

        return (
            <Container className={styles.wrapper}>
                <LoadingSpinner active={loading}/>
                <Card bg="dark" className="mb-2">
                    <Card.Body>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Search</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                onChange={this.onSearch}
                            />
                        </InputGroup>
                        <Row>
                            <Form.Check
                                inline
                                label="Hiragana"
                                type="switch"
                                id="hiragana"
                                className={styles.check}
                                checked={showHiragana}
                                onChange={() => this.setState({ showHiragana: !showHiragana })}
                            />
                            <Form.Check
                                inline
                                label="Katakana"
                                type="switch"
                                id="katakana"
                                className={styles.check}
                                checked={showKatakana}
                                onChange={() => this.setState({ showKatakana: !showKatakana })}
                            />
                        </Row>
                    </Card.Body>
                </Card>

                <div className={styles.grid}>
                    <Grid
                        gutterWidth={6}
                        gutterHeight={6}
                        layout={layout.simple}
                        columnWidth={90}
                        duration={250}
                        itemHeight={90}
                        easing={easings.cubicOut}
                    >
                        {kana.map(k => (
                            <div key={k.code}>
                                <KanaTile kana={k}/>
                            </div>
                        ))}
                    </Grid>
                </div>
            </Container>
        )
    }

    private onSearch = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        this.setState({ search: e.target.value });
    }

    private filter = (kana: Kana[], search: string): Kana[] => {
        let searched = kana.filter(k => k.romanji.includes(search));
        const { showHiragana, showKatakana } = this.state;
        if (!showHiragana) {
            searched = searched.filter(k => !k.type === KanaType.HIRAGANA)
        }
        if (!showKatakana) {
            searched = searched.filter(k => !k.type === KanaType.KATAKANA)
        }
        return searched;
    }
}

export default Search;