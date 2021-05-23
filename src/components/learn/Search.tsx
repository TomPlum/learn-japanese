import { Component } from "react";
import { Learnable } from "../../types/learn/Learnable";
import SearchField from "../ui/SearchField";
import { Container, Row } from "react-bootstrap";
import LearnableInfo from "./LearnableInfo";
import styles from "../../styles/sass/components/learn/Search.module.scss";

export interface SearchProps {
    data: Learnable[];
}

interface SearchState {
    search: string;
}

class Search extends Component<SearchProps, SearchState> {

    constructor(props: Readonly<SearchProps> | SearchProps) {
        super(props);
        this.state = {
            search: "",
        }
    }

    render() {

        const { search } = this.state;
        const results = this.getResults();

        return (
            <Container fluid className={styles.wrapper}>
                <Row>
                    <SearchField
                        value={search}
                        className={styles.search}
                        placeholder="Search via english, kana, kanji..."
                        append={results.length + " Results"}
                        onChange={(value: string) => this.setState({ search: value })}
                    />
                </Row>

                <Row className={styles.results}>
                    {results.map((result: Learnable) => {
                        return <LearnableInfo value={result} />;
                    })}
                </Row>
            </Container>
        );
    }

    private getResults = (): Learnable[] => {
        const { search } = this.state;
        return this.props.data.filter((result: Learnable) => {
            const matchesMeaning = result.getMeanings().some((meaning: string) => meaning.includes(search));
            const matchesKana = result.getKana().some((kana: string) => kana.includes(search));
            const matchesKanji = result.getKanjiVariation()?.includes(search);
            return matchesMeaning || matchesKana || matchesKanji;
        });
    }
}

export default Search;