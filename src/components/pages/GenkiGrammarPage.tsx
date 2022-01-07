import { Container } from "react-bootstrap";
import GrammarInfo, { GrammarInfoProps } from "../learn/GrammarInfo";
import PageNumber from "../../domain/learn/PageNumber";
import GenkiExampleTable from "../ui/display/GenkiExampleTable";
import styles from "../../styles/sass/components/pages/GenkiGrammarPage.module.scss";

const GenkiGrammarPage = () => {

    const c1p1: GrammarInfoProps = {
        chapter: 1,
        section: 1,
        title: "X は Y です",
        page: PageNumber.of(41, 42),
        body: (
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
        )
    }

    const c1p2: GrammarInfoProps = {
        chapter: 1,
        section: 2,
        title: "Question Sentences",
        page: PageNumber.of(42, 43),
        body: (
            <div>
                <p>It is most common to use the end particle ka when making a question sentence.</p>
                <p>Simply add か to the end of a statement.</p>
            </div>
        )
    }

    const c1p3: GrammarInfoProps = {
        chapter: 1,
        section: 3,
        title: "Noun の Noun",
        page: PageNumber.from(43),
        body: (
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
        )
    }

    const c2p1: GrammarInfoProps = {
        chapter: 2,
        section: 1,
        title: "これ, それ, あれ and どれ",
        page: PageNumber.from(60),
        body: (
            <div>
                <p>When you want to talk about things you do not know the name of, you can use such expressions
                    as kore, sore, are, and dore.  Kore refers to something close to the speaker; sore refers
                    to something close to the person you’re talking to; are refers to an object that is neither
                    close to the speaker or the listener.
                </p>

                <GenkiExampleTable
                    className={styles.exampleTable}
                    values={[
                        { japanese: "あれはわたしのペンです。", english: "(That is my pen over there.)" },
                        { japanese: "これはいくらですか？", english: "(How much is this?)" },
                        { japanese: "それはさんぜんえんです。", english: "(That is 3,000 yen.)" },
                    ]}
                />

                <p>
                    Dore means can be used to express “which.” Question words like dore and nani cannot be
                    followed by the particle wa. Instead, they must be followed by the particle ga.
                </p>



                <GenkiExampleTable
                    className={styles.exampleTable}
                    values={[{ japanese: "どれがあなたのペンですか？", english: "(Which one is your pen?)" }]}
                />
            </div>
        )
    }

    const c2p2: GrammarInfoProps = {
        chapter: 2,
        section: 2,
        page: PageNumber.from(61),
        title: "この / その / あの / どの ＋ Noun",
        body: (
            <div>
                <p>Kore, sore, are, and dare can be modified by replacing the final re with no to specify an
                    object.  It is important to note that kono, sono, ano, and dono cannot stand alone:
                    they must be followed by a noun.  For example, if you know that the item in your hand is
                    a watch (tokee) you can say:
                </p>

                <GenkiExampleTable
                    values={[{ japanese: "このとけいはいくらですか？", english: "How much is this watch?" }]}
                />

                <p>As opposed to:</p>

                <GenkiExampleTable
                    values={[{ japanese: "これはいくらですか？", english: "How much is this?" }]}
                />
            </div>
        )
    }

    const grammar: GrammarInfoProps[] = [
        c1p1, c1p2, c1p3,
        c2p1, c2p2
    ];

    return (
        <Container>
            {grammar.map(props => <GrammarInfo {...props} />)}
        </Container>
    );
}

export default GenkiGrammarPage;
