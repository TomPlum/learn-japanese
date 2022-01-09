import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import GrammarInfo, { GrammarInfoProps } from "../learn/GrammarInfo";
import PageNumber from "../../domain/learn/PageNumber";
import GenkiExampleTable from "../ui/display/GenkiExampleTable";
import styles from "../../styles/sass/components/pages/GenkiGrammarPage.module.scss";
import GenkiTable from "../ui/table/GenkiTable";
import React, { ChangeEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ComponentTree from "../../utility/ComponentTree";
import ValueSelector from "../ui/select/ValueSelector";
import Arrays from "../../utility/Arrays";
import QuoteDisplay from "../ui/display/QuoteDisplay";
import { useDebouncedEffect } from "../../hooks";
import GenkiHighlightDisplay from "../ui/display/GenkiHighlightDisplay";
import GenkiComparisonDisplay from "../ui/display/GenkiComparisonDisplay";

const GenkiGrammarPage = () => {

    const c1p1: GrammarInfoProps = {
        chapter: 1,
        section: 1,
        title: "X は Y です",
        page: PageNumber.of(41, 42),
        body: (
            <div>
                <p>
                    <QuoteDisplay chapter={1}>It is 12:30.</QuoteDisplay>
                    <span> and </span>
                    <QuoteDisplay chapter={1}>I am a student.</QuoteDisplay>
                    <span>are sentences that can be translated into Japanese
                    using an appropriate noun and the word <em>desu</em>.</span>
                </p>
                <GenkiExampleTable
                    book={1}
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
                    book={1}
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
                    book={1}
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
                    book={1}
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
                    book={1}
                    values={[{ japanese: { value: "このとけいはいくらですか？" }, english: { value: "How much is this watch?" } }]}
                />

                <p>As opposed to:</p>

                <GenkiExampleTable
                    book={1}
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
                    book={1}
                    values={[
                        { japanese: { value: "ここ" }, english: { value: "here, near me" } },
                        { japanese: { value: "そこ" }, english: { value: "there, near you" } },
                        { japanese: { value: "あそこ" }, english: { value: "over there" } },
                        { japanese: { value: "どこ" }, english: { value: "where" } }
                    ]}
                />

                <p>For example:</p>

                <GenkiExampleTable
                    book={1}
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
                    book={1}
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
                    book={1}
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
                    book={1}
                    values={[
                        {
                            japanese: { value: "やまださんはがくせいじゃないです。", underline: "じゃないです" },
                            english: { value: "Mr. Yamada is not a student." }
                        }
                    ]}
                />

                <p>You find several stylistic variants in negative sentences. Ja nai desu is very colloquial. The
                    more formal replacement for nai desu is arimasen. Ja is a contraction of de wa, which is
                    more formal and more appropriate in the written language. Thus in addition to the above
                    sentence, you also find:</p>

                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "やまださんはがくせいじゃありません。", underline: "じゃありません" },
                            english: { value: "(more conservative speech style)" }
                        },
                        {
                            japanese: { value: "やまださんはがくせいではありません。", underline: "ではありません" },
                            english: { value: "(formal, appropriate for writing)" }
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
                <p>Statements often end with the tags ne or yo, depending on the way the speaker views the interaction
                    with the listener. If the speaker is seeking the listeners confirmation or agreement to what has
                    been said, then ne (“right?”) could be added.</p>

                <GenkiExampleTable
                    book={1}
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
                    book={1}
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

    const c3p1: GrammarInfoProps = {
        chapter: 3,
        section: 1,
        page: PageNumber.of(86, 88),
        title: "Verb Conjugation",
        body: (
            <div>
                <p>There are three categories of verbs in Japanese:  ru-verbs, u-verbs, and irregular verbs.</p>
                <p>Ru and u verbs follow regular conjugation:</p>

                <GenkiTable chapter={3} className={styles.verbConjugationTable}>
                    <thead>
                        <tr>
                            <th>{}</th>
                            <th>る Verbs</th>
                            <th>う Verbs</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Verb Base</td>
                            <td>tabe</td>
                            <td>iku</td>
                        </tr>
                        <tr>
                            <td>Dictionary Form</td>
                            <td>たべる (to eat)</td>
                            <td>いく(to go)</td>
                        </tr>
                        <tr>
                            <td>Present, Affirmative</td>
                            <td>たべます</td>
                            <td>いきます</td>
                        </tr>
                        <tr>
                            <td>Present, Negative</td>
                            <td>たべません</td>
                            <td>いきません</td>
                        </tr>
                        <tr>
                            <td>Stem</td>
                            <td>たべ</td>
                            <td>いき</td>
                        </tr>
                    </tbody>
                </GenkiTable>

                <p>There are only two irregular verbs in Japanese: する and くる. They are conjugated as follows:</p>

                <GenkiTable chapter={3} className={styles.verbConjugationTable}>
                    <tbody>
                        <tr>
                            <td>Dictionary Form</td>
                            <td>する</td>
                            <td>くる</td>
                        </tr>
                        <tr>
                            <td>Present, Affirmative</td>
                            <td>します</td>
                            <td>きます</td>
                        </tr>
                        <tr>
                            <td>Present, Negative</td>
                            <td>しません</td>
                            <td>きません</td>
                        </tr>
                        <tr>
                            <td>Stem</td>
                            <td>し</td>
                            <td>き</td>
                        </tr>
                    </tbody>
                </GenkiTable>

                <p>Ru-verbs are so called because you add the suffix ru to the verb base to form the dictionary form.
                    U-verbs can be broken down into the base and the suffix. The long form are formed with the base plus suffixes imasu and imas</p>
            </div>
        )
    }

    const c3p2: GrammarInfoProps = {
        chapter: 3,
        section: 2,
        page: PageNumber.from(88),
        title: "Verb Types & The 'Present Tense'",
        body: (
            <div>
                <p>The present tense in Japanese is used to describe one of two things:</p>
                <ol>
                    <li>an activity a person habitually or regularly engages in, or;</li>
                    <li>an activity that a person is planning on performing or doing in the future.</li>
                </ol>

                <p>Habitual actions:</p>
                <GenkiExampleTable
                    book={1}
                    values={[
                        { japanese: { value: "わたしはよくテレビをみます。" }, english: { value: "I often watch TV." } },
                        { japanese: { value: "メアリーさんはときどきあさごはんをたべません。" }, english: { value: "Mary sometimes doesn’t eat breakfast." } }
                    ]}
                />

                <p>Future actions:</p>
                <GenkiExampleTable
                    book={1}
                    values={[
                        { japanese: { value: "わたしはあしたきょうとにいきます" }, english: { value: "I will go to Kyoto tomorrow." } },
                        { japanese: { value: "スーさんはきょううちにかえりません。" }, english: { value: "Sue will not return today." } }
                    ]}
                />
            </div>
        )
    }

    const c3p3: GrammarInfoProps = {
        chapter: 3,
        section: 3,
        page: PageNumber.of(88, 89),
        title: "Particles",
        body: (
            <div>
                <p>Nouns used in sentences generally must be followed by particles, which indicate the relations that
                    the nouns bear to the verbs. This section contains four particles: で, に, へ, and を.
                </p>

                <GenkiHighlightDisplay
                    text="で"
                    chapter={3}
                    description="The particle で indicates where the even described by the verb takes place."
                />
                <GenkiExampleTable
                    book={1}
                    values={[{
                        japanese: { value: "うちでテレビをみます。", underline: "で" },
                        english: { value: "I will watch TV at home." }
                    }]}
                />

                <GenkiHighlightDisplay
                    text="に"
                    chapter={3}
                    description="The particle に indicates two things; the goal toward which things move; and the time at which an event takes place."
                />
                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "わたしはうちにかえります。", underline: "に" },
                            english: { value: "I will return." }
                        },
                        {
                            japanese: { value: "じゅいちじにねます。", underline: "に" },
                            english: { value: "I will go to bed at eleven." }
                        }
                    ]}
                />

                <GenkiHighlightDisplay
                    text="へ"
                    chapter={3}
                    description="The particle へ also indicates the goal of a movement. It is pronounced “e.”"
                />
                <GenkiExampleTable
                    book={1}
                    values={[{
                        japanese: { value: "わたしはうちへかえります。", underline: "へ" },
                        english: { value: "I will return." }
                    }]}
                />

                <GenkiHighlightDisplay
                    text="を"
                    chapter={3}
                    description="The particle を indicates direct objects. It is pronounced “o.”"
                />
                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "コーヒーをのみます。", underline: "を" },
                            english: { value: "I drink coffee." }
                        },
                        {
                            japanese: { value: "テープをききます。 ", underline: "を" },
                            english: { value: "I listen to tapes." }
                        }
                    ]}
                />
            </div>
        )
    }

    const c3p4: GrammarInfoProps = {
        chapter: 3,
        section: 4,
        page: PageNumber.from(90),
        title: "Time References",
        body: (
            <div>
                <p>You need the particle に with the days of the week, numerical time expressions, and months.
                    You do not need to use the time particle に with time expressions defined relative to the present
                    moment, such as “today” and “tomorrow”, expressions describing regular intervals such as “every day”,
                    or the word for “when.”
                </p>

                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "にちようびにいきます。", underline: "にちようびに"　},
                            english: { value: "I will go on Sunday." }
                        },
                        {
                            japanese: { value: "くがつにかえります。", underline: "くがつに" },
                            english: { value: "I will go back in September" }
                        }
                    ]}
                />
            </div>
        )
    }

    const c3p5: GrammarInfoProps = {
        chapter: 3,
        section: 5,
        page: PageNumber.from(90),
        title: "～ませんか",
        body: (
            <div>
                <p>～ませんか can be used to extend an invitation. It should be noted that the affirmative counterpart
                    of this (ますか) cannot be so used.
                </p>

                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "テニスをしませんか。"　},
                            english: { value: "Will you play tennis with me?" }
                        },
                        {
                            japanese: { value: "ひるごはんをたべませんか。" },
                            english: { value: "What do you say to having lunch with me?" }
                        }
                    ]}
                />
            </div>
        )
    }

    const c3p6: GrammarInfoProps = {
        chapter: 3,
        section: 6,
        page: PageNumber.from(91),
        title: "Frequency Adverbs",
        body: (
            <div>
                <p>Frequency adverbs are added to indicate how often something is done.</p>
                <p>Examples of frequency adverbs are まいにち (everyday), よく (often), and ときどき (sometimes).</p>

                <GenkiExampleTable
                    book={1}
                    values={[{
                        japanese: { value: "わたしはときどききっさてんにいきます。"　},
                        english: { value: "I sometimes go to a coffee shop." }
                    }]}
                />

                <p>It is also important to remember that adverbs of infrequency must be followed by a negative at the end of the sentence.</p>

                <GenkiExampleTable
                    book={1}
                    values={[{
                        japanese: { value: "わたしはぜんぜんテレビをみません。"　},
                        english: { value: "I do not watch TV at all." }
                    }]}
                />
            </div>
        )
    }

    const c3p7: GrammarInfoProps = {
        chapter: 3,
        section: 7,
        page: PageNumber.from(91),
        title: "Word Order",
        body: (
            <div>
                <p>Japanese sentences are structured as Subject-Object-Verb.</p>

                <p>The following example has the structure
                    <QuoteDisplay chapter={3}>{"topic -> time -> place -> object -> verb"}</QuoteDisplay>
                </p>
                <GenkiExampleTable
                    book={1}
                    values={[{
                        japanese: { value: "わたしはきょうとしょかんでにほんごをべんきょうします。" },
                        english: { value: "I will study Japanese in the library today." }
                    }]}
                />

                <p>This example has the structure
                    <QuoteDisplay chapter={3}>{"topic -> frequency -> time -> goal -> verb"}</QuoteDisplay>
                </p>
                <GenkiExampleTable
                    book={1}
                    values={[{
                        japanese: { value: "わたしはよくしちじごろうちへかえります。" },
                        english: { value: "I often go back at around seven." }
                    }]}
                />
            </div>
        )
    }

    const c3p8: GrammarInfoProps = {
        chapter: 3,
        section: 8,
        page: PageNumber.of(91, 92),
        title: "The Topic Particle は",
        body: (
            <div>
                <p>The particle は presents the topic of one’s utterance (“As for item X, it is such that…”).
                    It puts forward the item that you want to talk about and comment on.
                    A topic phrase, however, need not be the subject of a sentence.
                </p>

               <GenkiExampleTable
                   book={1}
                   values={[{
                       japanese: { value: "アリーさん、しゅまつはたいていなにをしますか。" },
                       english: { value: "(Mary, what do you usually do on the weekends?)" }
                   }]}
               />
            </div>
        )
    }

    const c4p1: GrammarInfoProps = {
        chapter: 4,
        section: 1,
        page: PageNumber.of(107, 108),
        title: "Xがあります / います",
        body: (
            <div>
                <p>Xがあります means “there is/there are X (non-living things).”</p>
                <p>The particle が introduces item X. You can also use あります to say that you have or own something or
                    that and event will take place.
                </p>

                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "あそこにマクドナルドがあります。" },
                            english: { value: "There’s a McDonald’s over there." }
                        },
                        {
                            japanese: { value: "テレビがありますか。" },
                            english: { value: "Do you have a TV?" }
                        },
                        {
                            japanese: { value: "あしたはにほんごのくらすがありません。" },
                            english: { value: "There will be no Japanese class tomorrow." }
                        }
                    ]}
                />

                <p>When you want to present or some sentient being, rather than a thing, you need to use the verb います.</p>

                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "あそこにりゅうがくせいがいます" },
                            english: { value: "There is an international student over there." }
                        }
                    ]}
                />
            </div>
        )
    }

    const c4p2: GrammarInfoProps = {
        chapter: 4,
        section: 2,
        page: PageNumber.of(108, 109),
        title: "Describing Where Things Are",
        body: (
            <div>
                <p>You can describe where things are by using some of the location words below:</p>
                <p>The particle が introduces item X. You can also use あります to say that you have or own something or
                    that and event will take place.
                </p>

                <Row>
                    <Col>
                        <GenkiExampleTable
                            book={1}
                            values={[
                                {
                                    japanese: { value: "みぎ" },
                                    english: { value: "to the right of" }
                                },
                                {
                                    japanese: { value: "ひだり" },
                                    english: { value: "to the left of" }
                                },
                                {
                                    japanese: { value: "まえ" },
                                    english: { value: "in front of" }
                                },
                                {
                                    japanese: { value: "うしろ" },
                                    english: { value: "behind" }
                                },
                                {
                                    japanese: { value: "なか" },
                                    english: { value: "inside" }
                                }
                            ]}
                        />
                    </Col>
                    <Col>
                        <GenkiExampleTable
                            book={1}
                            values={[
                                {
                                    japanese: { value: "うえ" },
                                    english: { value: "on/above" }
                                },
                                {
                                    japanese: { value: "した" },
                                    english: { value: "under/beneath" }
                                },
                                {
                                    japanese: { value: "そば" },
                                    english: { value: "near" }
                                },
                                {
                                    japanese: { value: "となり" },
                                    english: { value: "next to" }
                                }
                            ]}
                        />
                    </Col>
                </Row>

                <p>The format is as follows:</p>

                <GenkiTable chapter={4} maxWidth={232}>
                    <tr>
                        <td>X は Y の location word です。</td>
                    </tr>
                </GenkiTable>

                <p>The particle で is used with these words.</p>

                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "ぎんこうはとしょかんのとなりです。" },
                            english: { value: "The bank is next to the library." }
                        },
                        {
                            japanese: { value: "わたしはハーゲンダッツのまえでメアリーさんをまちました。" },
                            english: { value: "I waited for Mary in front of the Haagen-Dazs place." }
                        },
                    ]}
                />
            </div>
        )
    }

    const c4p3: GrammarInfoProps = {
        chapter: 4,
        section: 3,
        page: PageNumber.from(110),
        title: "Past Tense of です",
        body: (
            <div>
                <p>The past tense versions of “X は Y です” sentences look like the following:</p>
                <GenkiTable chapter={4}>
                    <thead>
                    <th>です</th>
                    <th>Affirmative</th>
                    <th>Negative</th>
                    </thead>
                    <tr>
                        <td>Present Tense</td>
                        <td>～です</td>
                        <td>～じゃありません</td>
                    </tr>
                    <tr>
                        <td>Past Tense</td>
                        <td>～でした</td>
                        <td>～じゃありませんでした</td>
                    </tr>
                </GenkiTable>

                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "やましたせんせいはとうざいだいがくのがくせいでした。" },
                            english: { value: "Mr. Yamashita was a student at Tozai University." }
                        },
                        {
                            japanese: { value: "あれはにほんのえいがじゃありませんでした。" },
                            english: { value: "That was not a Japanese film." }
                        },
                    ]}
                />
            </div>
        )
    }

    const c4p4: GrammarInfoProps = {
        chapter: 4,
        section: 4,
        page: PageNumber.from(110),
        title: "Past Tense of Verbs",
        body: (
            <div>
                <p>The past tense of verbs looks like the following, where ～ stands for the stem of a verb.</p>
                <GenkiTable chapter={4}>
                    <thead>
                        <th>Verbs</th>
                        <th>Affirmative</th>
                        <th>Negative</th>
                    </thead>
                    <tr>
                        <td>Present Tense</td>
                        <td>～ます</td>
                        <td>～ません</td>
                    </tr>
                    <tr>
                        <td>Past Tense</td>
                        <td>～ました</td>
                        <td>～ませんでした</td>
                    </tr>
                </GenkiTable>

                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "メアリさんはくじごろうちにかえりました。" },
                            english: { value: "Mary returned at about nine." }
                        },
                        {
                            japanese: { value: "わたしはきのうにほんごをべんきょしませんでした。" },
                            english: { value: "I did not study Japanese yesterday." }
                        },
                    ]}
                />
            </div>
        )
    }

    const c4p5: GrammarInfoProps = {
        chapter: 4,
        section: 5,
        page: PageNumber.from(111),
        title: "も Particle",
        body: (
            <div>
                <p>も is not only used to refer to the second item which shares a common attribute with the first,
                    but it can also be used when two or more people perform the same activity. Or when someone buys,
                    sees, or eats two or more things or when you go to two places, do something on two different
                    occasions, and so forth. It is important to note that も replaces the particles は、が、or を.
                </p>

                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "わたしはきのうきょうとにいきました。" },
                            english: { value: "I went to Kyoto yesterday." }
                        },
                        {
                            japanese: { value: "やましたせんせいもきのうきょうとにいきました。" },
                            english: { value: "Prof. Yamashita went to Kyoto yesterday too." }
                        },
                        {
                            japanese: { value: "メアリーさんはくつをかいました。" },
                            english: { value: "Mary bought shoes." }
                        },
                        {
                            japanese: { value: "メアリーさんはかばんもかいました。" },
                            english: { value: "Mary also bought a bag." }
                        },
                        {
                            japanese: { value: "ロバートさんはどようびにパーティーにいきました。" },
                            english: { value: "Robert went to a party on Saturday." }
                        },
                        {
                            japanese: { value: "にちようびにもパーティーにいきました。" },
                            english: { value: "He went to a party on Sunday too." }
                        }
                    ]}
                />
            </div>
        )
    }

    const c4p6: GrammarInfoProps = {
        chapter: 4,
        section: 6,
        page: PageNumber.from(112),
        title: "Duration (一時間)",
        body: (
            <div>
                <p>The duration of an activity is expressed with a bare noun, like いちじかん.
                    Such nouns are not followed by particles and usually appear immediately before the verb.
                    Approximate measurements can be expressed using ぐらい after ～じかん.
                </p>

                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "メアリーさんはそこでたけしさんをいちじかんまちました。", underline: "いちじかん" },
                            english: { value: "Mary waited for Takeshi there for an hour." }
                        },
                        {
                            japanese: { value: "わたしはきのうにほんごをさんじかんぐらいべんきょうしました。", underline: "さんじかんぐらい" },
                            english: { value: "I studied Japanese for about three hours yesterday." }
                        }
                    ]}
                />
            </div>
        )
    }

    const c4p7: GrammarInfoProps = {
        chapter: 4,
        section: 7,
        page: PageNumber.from(112),
        title: "たくさん",
        body: (
            <div>
                <p>
                    If you want to use an expression of quantity in Japanese, the quantity word (like たくさん) can either
                    go before the noun or after the particle を.
                </p>

                <GenkiComparisonDisplay
                    book={1}
                    pre="わたしはきょうとで"
                    firstComparison={{ text: "しゃしんをたくさん", underline: "たくさん" }}
                    secondComparison={{ text: "たくさんしゃしんを", underline: "たくさん" }}
                    post="とりました。"
                    meaning="I took many pictures in Kyoto."
                />

                <GenkiComparisonDisplay
                    book={1}
                    firstComparison={{ text: "やさいをたくさん", underline: "たくさん" }}
                    secondComparison={{ text: "たくさんやさいを", underline: "たくさん" }}
                    post="たべました。"
                    meaning="I ate lots of vegetables."
                />
            </div>
        )
    }

    const c4p8: GrammarInfoProps = {
        chapter: 4,
        section: 8,
        page: PageNumber.from(113),
        title: "と Particle",
        body: (
            <div>
                <p>The particle と has two functions:</p>
                <ol>
                    <li>to connect two nouns A and B, and</li>
                    <li>to describe with whom you do something, or “together with.”</li>
                </ol>

                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "にほんごとえいごをはなします。", underline: "と" },
                            english: { value: "I speak Japanese and English." }
                        },
                        {
                            japanese: { value: "メアリーさんはスーさんとかんこくにいきます。", underline: "と" },
                            english: { value: "Mary will go to Korea with Sue." }
                        }
                    ]}
                />
            </div>
        )
    }

    const c13p1: GrammarInfoProps = {
        chapter: 13,
        section: 1,
        page: PageNumber.of(26, 28),
        title: "Potential Verbs",
        body: (
            <div>
                <p>Potential verbs are used to say that someone “can” or “has the ability to” do something, or that something is possible.</p>

                <p>る Verbs: Drop the final –ru and add –rareru</p>
                <GenkiTable chapter={13} maxWidth={165}>
                    <td>{}</td>
                    <td>見る &#8594; 見られる</td>
                </GenkiTable>

                <p>う Verbs: Drop the final –u and add –eru</p>
                <GenkiTable chapter={13} maxWidth={165}>
                    <td>{}</td>
                    <td>行く &#8594; 行ける</td>
                </GenkiTable>

                <p>Irregular Verbs</p>
                <GenkiTable chapter={13} maxWidth={300}>
                    <tr>
                        <td>{}</td>
                        <td>くる &#8594; こられる</td>
                        <td>する &#8594; できる</td>
                    </tr>
                </GenkiTable>

                <GenkiTable chapter={13}>
                    <tr>
                        <th rowSpan={2} className={styles.genkiTwo}>Verb Conjugation</th>
                        <th colSpan={2} scope="colgroup">Short Form</th>
                        <th colSpan={2} scope="colgroup">Long Form</th>
                    </tr>
                    <tr>
                        <th scope="col">Affirmative</th>
                        <th scope="col">Negative</th>
                        <th scope="col">Affirmative</th>
                        <th scope="col">Negative</th>
                    </tr>
                    <tr>
                        <th scope="row">Present Tense</th>
                        <td>見られる</td>
                        <td>見られない</td>
                        <td>見られます</td>
                        <td>見られません</td>
                    </tr>
                    <tr>
                        <th scope="row">Past Tense</th>
                        <td>見られた</td>
                        <td>見られなかった</td>
                        <td>見られました</td>
                        <td>見られませんでした</td>
                    </tr>
                    <tr>
                        <th scope="row">て Form</th>
                        <td>見られて</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </GenkiTable>
            </div>
        )
    }

    const c13p2: GrammarInfoProps = {
        chapter: 13,
        section: 2,
        page: PageNumber.of(28, 29),
        title: "~し",
        body: (
            <div>
                <p>When you want to mention not just one, but two or more reasons, you can use し in place of から.
                    し usually follows a predicate in the short form.
                </p>

                <GenkiTable chapter={13} maxWidth={320}>
                    <td><span className={styles.genkiTwo}>(reason<sub>1</sub>) </span> し、
                        <span className={styles.genkiTwo}>(reason<sub>2</sub>) </span>し、
                        <span className={styles.genkiTwo}>(situation)</span> 。
                    </td>
                </GenkiTable>

                <p>For example:</p>

                <GenkiExampleTable
                    book={2}
                    values={[{
                        japanese: { value: "家族はら手紙が来たし、かれと電話で話したし、きのうはとてもいい日でした。", underline: "し", hideRomaji: true },
                        english: { value: "Yesterday was a great day–a letter came from my family, and I talked with my boyfriend on the phone." }
                    }]}
                />

                <p>Note that し follows the short forms. In present tense sentences, this means that だ appears with
                    な-adjectives and nouns, but not with い-adjectives.
                </p>
            </div>
        )
    }

    const c13p3: GrammarInfoProps = {
        chapter: 13,
        section: 3,
        page: PageNumber.of(29, 30),
        title: "そうです",
        body: (
            <div>
                <p>When we say …そうです, we are guessing what something is like on the basis of our impressions.</p>

                <GenkiExampleTable
                    book={2}
                    values={[{
                        japanese: { value: "このりんごはおいしそうです。", underline: "そうです" },
                        english: { value: "This apple looks delicious.", underline: "looks" }
                    }]}
                />

                <p>To form …そうです sentences with い-adjectives, drop the final い (exception - いい, change to よさ before そう);
                    with な-adjectives, you just drop な.
                </p>

                <GenkiTable chapter={13} maxWidth={400}>
                    <tr>
                        <td>い Adjectives</td>
                        <td>おいしい &#8594; おいしそうです</td>
                    </tr>
                    <tr>
                        <td>(exception)</td>
                        <td>いい &#8594; よさそうです</td>
                    </tr>
                    <tr>
                        <td>な Adjectives</td>
                        <td>元気(な) &#8594; 元気そうです</td>
                    </tr>
                </GenkiTable>
            </div>
        )
    }

    const allGrammar: GrammarInfoProps[] = [
        c1p1, c1p2, c1p3,
        c2p1, c2p2, c2p3, c2p4, c2p5, c2p6, c2p7,
        c3p1, c3p2, c3p3, c3p4, c3p5, c3p6, c3p7, c3p8,
        c4p1, c4p2, c4p3, c4p4, c4p5, c4p6, c4p7, c4p8,
        c13p1, c13p2, c13p3
    ];

    const [grammar, setGrammar] = useState(allGrammar);
    const [search, setSearch] = useState("");
    const [chapter, setChapter] = useState(1);
    const [cleared, setCleared] = useState(true);

    useDebouncedEffect(() => {
        if (search != "") {
            const matchingGrammar = grammar.filter(section => {
                const hasBodyMatch = new ComponentTree(section.body).getStringChildren().some(value => {
                    return value.toLowerCase().includes(search.toLowerCase());
                });

                const hasTitleMatch = section.title.toLowerCase().includes(search.toLowerCase());

                return hasBodyMatch || hasTitleMatch;
            }).map(section => {
                section.preExpand = true;
                return section;
            });

            setGrammar(matchingGrammar);
        } else {
            setGrammar(allGrammar);
        }
    }, 200, [search]);

    useEffect(() => {
        if (!cleared) {
            const matchingChapters = grammar.filter(section => section.chapter === chapter);
            setGrammar(matchingChapters);
        } else {
            setGrammar(allGrammar);
        }
    }, [chapter]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const search = e.target.value;
        setSearch(search);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <InputGroup className={styles.search}>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={faSearch}/>
                            </InputGroup.Text>
                        </InputGroup.Prepend>

                        <Form.Control
                            type="text"
                            value={search}
                            placeholder="search"
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </InputGroup>
                    <ValueSelector
                        prefix="Chapter"
                        selected={chapter}
                        showBeforeScrolling={150}
                        id="genki-chapter-selector"
                        values={Arrays.range(1, 25)}
                        className={styles.chapterSelector}
                        itemClassName={styles.chapterSelectorItem}
                        onChange={(value: number) => setChapter(value)}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    {grammar.map(props => <GrammarInfo {...props} />)}
                </Col>
            </Row>
        </Container>
    );
}

export default GenkiGrammarPage;
