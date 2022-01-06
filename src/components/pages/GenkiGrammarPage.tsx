import { Container, Table } from "react-bootstrap";
import GrammarInfo from "../learn/GrammarInfo";
import PageNumber from "../../domain/learn/PageNumber";
import GenkiExampleTable from "../ui/display/GenkiExampleTable";
import styles from "../../styles/sass/components/pages/GenkiGrammarPage.module.scss";

const GenkiGrammarPage = () => {
    return (
        <Container>
            <GrammarInfo
                chapter={1}
                title="X は Y です"
                page={PageNumber.of(41, 42)}
                body={(
                    <div>
                        <p>“It is 12:30.” “I am a student.” These are sentences that can be translated into Japanese
                            using an appropriate noun and the word <em>desu</em>.
                        </p>
                        <GenkiExampleTable
                            className={styles.exampleTable}
                            values={[
                                { japanese: "じゅうにじはんです。", english: "(It) is half past twelve" },
                                { japanese: "がくせいです。", english: "(I) am a student." }
                            ]}
                        />
                    </div>
                )}
            />

            <GrammarInfo
                chapter={1}
                title="Question Sentences"
                page={PageNumber.of(42, 43)}
                body={(
                    <div>
                        <p>It is most common to use the end particle ka when making a question sentence.</p>
                        <p>Simply add か to the end of a statement.</p>
                    </div>
                )}
            />

            <GrammarInfo
                chapter={1}
                title="Noun の Noun"
                page={PageNumber.from(43)}
                body={(
                    <div>
                        <p>No (の) is a particle that connects two nouns.</p>
                        <GenkiExampleTable
                            className={styles.exampleTable}
                            values={[
                                { japanese: "たけしさんのでんわばんごう。", english: "Takeshi’s phone number" },
                                { japanese: "だいがくのせんせい。", english: "a college professor" },
                                { japanese: "にほんごのがくせい。", english: "a student of the Japanese language" },
                                { japanese: "にほんのだいがく。", english: "a college in Japan" }
                            ]}
                        />
                    </div>
                )}
            />
        </Container>
    );
}

export default GenkiGrammarPage;
