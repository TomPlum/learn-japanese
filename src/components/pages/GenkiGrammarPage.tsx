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
                        { japanese: { value: "じゅうにじはんです。" }, english: { value: "(It) is half past twelve" } },
                        { japanese: { value: "がくせいです。" }, english: { value: "(I) am a student." } }
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
                        { japanese: { value: "たけしさんのでんわばんごう。" }, english: { value: "Takeshi’s phone number" } },
                        { japanese: { value: "だいがくのせんせい。" }, english: { value: "a college professor" } },
                        { japanese: { value: "にほんごのがくせい。" }, english: { value: "a student of the Japanese language" } },
                        { japanese: { value: "にほんのだいがく。" }, english: { value: "a college in Japan" } }
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
                        { japanese: { value: "あれはわたしのペンです。" }, english: { value: "(That is my pen over there.)" } },
                        { japanese: { value: "これはいくらですか？" }, english: { value: "(How much is this?)" } },
                        { japanese: { value: "それはさんぜんえんです。" }, english: { value: "(That is 3,000 yen.)" } }
                    ]}
                />

                <p>
                    Dore means can be used to express “which.” Question words like dore and nani cannot be
                    followed by the particle wa. Instead, they must be followed by the particle ga.
                </p>



                <GenkiExampleTable
                    className={styles.exampleTable}
                    values={
                        [{ japanese: { value: "どれがあなたのペンですか？" }, english: { value: "(Which one is your pen?)" } }]
                    }
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
                    values={[{ japanese: { value: "このとけいはいくらですか？" }, english: { value: "How much is this watch?" } }]}
                />

                <p>As opposed to:</p>

                <GenkiExampleTable
                    values={[{ japanese: { value: "これはいくらですか？" }, english: { value: "How much is this?" } }]}
                />
            </div>
        )
    }

    const c2p3: GrammarInfoProps = {
        chapter: 2,
        section: 3,
        page: PageNumber.from(62),
        title: "ここ, そこ, あそこ and どこ",
        body: (
            <div>
                <p>koko, soko, asoko, and doko are all words for places.</p>

                <GenkiExampleTable
                    values={[
                        { japanese: { value: "ここ" }, english: { value: "here, near me" } },
                        { japanese: { value: "そこ" }, english: { value: "there, near you" } },
                        { japanese: { value: "あそこ" }, english: { value: "over there" } },
                        { japanese: { value: "どこ" }, english: { value: "where" } }
                    ]}
                />

                <p>For example:</p>

                <GenkiExampleTable
                    values={[{
                        japanese: { value: "すみません、ゆうびんきょくはどこですか。" },
                        english: { value: "Excuse me, where is the post office?" }
                    }]}
                />
            </div>
        )
    }

    const c2p4: GrammarInfoProps = {
        chapter: 2,
        section: 4,
        page: PageNumber.from(62),
        title: "だれの Noun",
        body: (
            <div>
                <p>The question word for “who” is だれ, and for “whose” we simply add the particle の.</p>

                <GenkiExampleTable
                    values={[
                        {
                            japanese: { value: "これはだれのかばんですか。", underline: "だれの" },
                            english: { value: "Whose bag is this?", underline: "Whose" }
                        },
                        {
                            japanese: { value: "それはスーさんのかばんです。", underline: "スー" },
                            english: { value: "That is Sue’s bag.", underline: "Sue’s" }
                        }
                    ]}
                />
            </div>
        )
    }

    const c2p5: GrammarInfoProps = {
        chapter: 2,
        section: 5,
        page: PageNumber.of(62, 63),
        title: "Noun も",
        body: (
            <div>
                <p>Using this formation you can say “Item A is this, and item B is this, too.”</p>

                <GenkiExampleTable
                    values={[
                        {
                            japanese: { value: "たけしさんはにほんじんです。" },
                            english: { value: "Takeshi is a Japanese person."}
                        },
                        {
                            japanese: { value: "みちこさんもにほんじんです。"},
                            english: { value: "Michiko is Japanese, too.", underline: "too" }
                        }
                    ]}
                />

                <p>も must directly follow the object to which it is referring.</p>
                <p>も is the equivalent to the English word “too.”</p>
            </div>
        )
    }

    const c2p6: GrammarInfoProps = {
        chapter: 2,
        section: 6,
        page: PageNumber.of(63, 64),
        title: "Noun じゃないです",
        body: (
            <div>
                <p>To negate a statement of the form X wa Y desu, where Y is a noun, you replace desu with ja
                    arimasen.</p>

                <GenkiExampleTable
                    values={[
                        {
                            japanese: { value: "やまださんはがくせいじゃないです。" },
                            english: { value: "Mr. Yamada is not a student." }
                        }
                    ]}
                />

                <p>You find several stylistic variants in negative sentences. Ja nai desu is very colloquial. The
                    more formal replacement for nai desu is arimasen. Ja is a contraction of de wa, which is
                    more formal and more appropriate in the written language. Thus in addition to the above
                    sentence, you also find:</p>

                <GenkiExampleTable
                    values={[
                        {
                            japanese: { value: "やまださんはがくせいじゃありません。", underline: "じゃありません" },
                            english: { value: "(more conservative speech style)" }
                        },
                        {
                            japanese: { value: "やまださんはがくせいではありません。", underline: "ではありません" },
                            english: { value: "(more conservative speech style)" }
                        }
                    ]}
                />
            </div>
        )
    }

    const c2p7: GrammarInfoProps = {
        chapter: 2,
        section: 7,
        page: PageNumber.from(64),
        title: "~ね / ~よ Particles",
        body: (
            <div>
                <p>Statements often end with the tags ne or yo, depending on the way the speaker views the in-
                    teraction with the listener. If the speaker is seeking the listeners confirmation or agreement
                    to what has been said, then ne (“right?”) could be added.</p>

                <GenkiExampleTable
                    values={[
                        {
                            japanese: { value: "メアリーさんのせんもんはぶんがくですね。" },
                            english: { value: "Mary, your major is literature, right?"}
                        },
                        {
                            japanese: { value: "これはにくじゃありませんね。" },
                            english: { value: "This is not meat, is it?"}
                        }
                    ]}
                />

                <p>Another particle, yo (“I tell you”), is added to a statement if the speaker wants to assure the
                    listener of what has been said. With yo added, a statement becomes an authoritative decree.</p>

                <GenkiExampleTable
                    values={[
                        {
                            japanese: { value: "とんかつはさかなじゃありませんよ。" },
                            english: { value: "Let me assure you, “tonkatsu” is not fish."}
                        },
                        {
                            japanese: { value: "スミスさんはイギリスじんですよ。" },
                            english: { value: "(In case you were wondering,) Mr. Smith is British."}
                        }
                    ]}
                />
            </div>
        )
    }

    const grammar: GrammarInfoProps[] = [
        c1p1, c1p2, c1p3,
        c2p1, c2p2, c2p3, c2p4, c2p5, c2p6, c2p7
    ];

    return (
        <Container>
            {grammar.map(props => <GrammarInfo {...props} />)}
        </Container>
    );
}

export default GenkiGrammarPage;
