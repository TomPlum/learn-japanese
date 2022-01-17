import { GrammarInfoProps } from "../../learn/GrammarInfo";
import PageNumber from "../../../domain/learn/PageNumber";
import GenkiExampleTable from "../../ui/display/GenkiExampleTable";
import React from "react";
import GenkiTable from "../../ui/table/GenkiTable";
import styles from "../../../styles/sass/components/pages/GenkiGrammarPage.module.scss";
import GenkiUnderlineDisplay from "../../ui/display/GenkiUnderlineDisplay";
import { FirstMatch } from "../../ui/Underline";
import QuoteDisplay from "../../ui/display/QuoteDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import GenkiStructureDisplay from "../../ui/display/GenkiStructureDisplay";
import { Col, Container, Row } from "react-bootstrap";

const GenkiChapter5 = () => {
    const c5p1: GrammarInfoProps = {
        chapter: 5,
        section: 1,
        page: PageNumber.of(132, 133),
        title: "Adjectives (Present Tense)",
        body: (
            <div>
                <p>There are two types of adjectives in Japanese: い-adjectives and な-adjectives. い and な are their last syllables when they modify nouns.</p>

                <GenkiTable chapter={5}>
                    <thead>
                        <tr>
                            <th>Present Tense</th>
                            <th>Affirmative</th>
                            <th>Negative</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>い Adjectives</td>
                        </tr>
                        <tr>
                            <td><span className={[styles.genkiOne, styles.indent].join(" ")}>e.g.</span> おもしろい</td>
                            <td>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("です")}>
                                    <span>おもしろいです</span>
                                </GenkiUnderlineDisplay>
                            </td>
                            <td>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("くないです")}>
                                    <span>おもしろくないです</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr>
                            <td>{}</td>
                            <td>{}</td>
                            <td className={styles.indent}>
                                <div className={styles.indent}>
                                    <GenkiUnderlineDisplay book={1} underline={new FirstMatch("くありません")} >
                                        <span>(or おもしろくありません)</span>
                                    </GenkiUnderlineDisplay>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>{}</td>
                            <td><em>It is interesting.</em></td>
                            <td><em>It is not interesting.</em></td>
                        </tr>
                        <tr>
                            <td>な Adjectives</td>
                        </tr>
                        <tr>
                            <td><span className={[styles.genkiOne, styles.indent].join(" ")}>e.g.</span> 元気(な)</td>
                            <td>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("です")}>
                                    <span>元気です</span>
                                </GenkiUnderlineDisplay>
                            </td>
                            <td>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("じゃないです")}>
                                    <span>元気じゃないです</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr>
                            <td>{}</td>
                            <td>{}</td>
                            <td>
                                <div className={styles.indent}>
                                    <GenkiUnderlineDisplay book={1} underline={new FirstMatch("じゃありません")}>
                                        <span>(or 元気じゃありません)</span>
                                    </GenkiUnderlineDisplay>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>{}</td>
                            <td><em>She is healthy.</em></td>
                            <td><em>She is not healthy.</em></td>
                        </tr>
                    </tbody>
                </GenkiTable>

                <p>For example:</p>
                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "A: その本はおもしろいですか。", hideRomaji: true },
                            english: { value: "Is that book interesting?" }
                        },
                        {
                            japanese: { value: "B: いいえ, あまりおもしろくないです。", hideRomaji: true },
                            english: { value: "No, it is not very interesting." }
                        }
                    ]}
                />
                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "A: 今日, ひまですか。", hideRomaji: true },
                            english: { value: "Are you free today?" }
                        },
                        {
                            japanese: { value: "B: いいえ, ひまじゃないです。", hideRomaji: true },
                            english: { value: "No, I'm not." }
                        }
                    ]}
                />

                <p>
                    Unlike verb, adjectives conjugate fairly uniformly. The only irregularity worth noting is the
                    adjective いい (good). The first syllable of いい is changed to よ in all forms except the dictionary
                    form. Compound adjectives like かっこいい that are built with いい follow this syllable change and we
                    say かっこよくないです.
                </p>

                <GenkiTable chapter={5}>
                    <thead>
                        <tr>
                            <th>Present Tense (Irregular)</th>
                            <th>Affirmative</th>
                            <th>Negative</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>いい</td>
                            <td>いいです</td>
                            <td>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("よ")} >
                                    <span>よくないです</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr>
                            <td>{}</td>
                            <td>{}</td>
                            <td className={styles.indent}>
                                <div className={styles.indent}>
                                    <GenkiUnderlineDisplay book={1} underline={new FirstMatch("よ")} >
                                        <span>(or よくありません)</span>
                                    </GenkiUnderlineDisplay>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </GenkiTable>
            </div>
        )
    }

    const c5p2: GrammarInfoProps = {
        chapter: 5,
        section: 2,
        page: PageNumber.of(133, 134),
        title: "Adjectives (Past Tense)",
        body: (
            <div>
                <p>
                    With い-adjectives, you change the last い to かったです in the affirmative. In the negative, you
                    only need to change the present tense to くない to くなかったです. な-adjectives are again just like
                    nouns. Don't confuse the two patterns, it is wrong to say <QuoteDisplay chapter={5} incorrect>さむいでした</QuoteDisplay>.
                </p>

                <GenkiTable chapter={5}>
                    <thead>
                        <tr>
                            <th>Past Tense</th>
                            <th>Affirmative</th>
                            <th>Negative</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>い Adjectives</td>
                        </tr>
                        <tr>
                            <td><span className={[styles.genkiOne, styles.indent].join(" ")}>e.g.</span> おもしろい</td>
                            <td>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("かったです")}>
                                    <span>おもしろかったです</span>
                                </GenkiUnderlineDisplay>
                            </td>
                            <td>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("くなかったです")}>
                                    <span>おもしろくなかったです</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr>
                            <td>{}</td>
                            <td>{}</td>
                            <td className={styles.indent}>
                                <div className={styles.indent}>
                                    <GenkiUnderlineDisplay book={1} underline={new FirstMatch("くありませんでした")} >
                                        <span>(or おもしろくありませんでした)</span>
                                    </GenkiUnderlineDisplay>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>{}</td>
                            <td><em>It was interesting.</em></td>
                            <td><em>It was not interesting.</em></td>
                        </tr>
                        <tr>
                            <td>な Adjectives</td>
                        </tr>
                        <tr>
                            <td><span className={[styles.genkiOne, styles.indent].join(" ")}>e.g.</span> 元気(な)</td>
                            <td>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("でした")}>
                                    <span>元気でした</span>
                                </GenkiUnderlineDisplay>
                            </td>
                            <td>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("じゃなかったです")}>
                                    <span>元気じゃなかったです</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr>
                            <td>{}</td>
                            <td>{}</td>
                            <td>
                                <div className={styles.indent}>
                                    <GenkiUnderlineDisplay book={1} underline={new FirstMatch("じゃありませんでした")}>
                                        <span>(or 元気じゃありませんでした)</span>
                                    </GenkiUnderlineDisplay>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>{}</td>
                            <td><em>She was healthy.</em></td>
                            <td><em>She was not healthy.</em></td>
                        </tr>
                    </tbody>
                </GenkiTable>

                <p>For example:</p>
                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "A: テストは難しかったですか。。", hideRomaji: true },
                            english: { value: "Was the exam difficult?" }
                        },
                        {
                            japanese: { value: "B: いいえ, ぜんぜん難しくなかったです。", hideRomaji: true },
                            english: { value: "No, it was not difficult at all." }
                        }
                    ]}
                />
                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "A: その町はにぎやかなでしたか。", hideRomaji: true },
                            english: { value: "Was the town lively?" }
                        },
                        {
                            japanese: { value: "B: いいえ, にぎやかじゃなかったです。", hideRomaji: true },
                            english: { value: "No, it was not lively." }
                        }
                    ]}
                />

                <hr className={styles.hr} />

                <p>The い-adjective いい (good) is again irregular. Its first syllable is changed to よ.</p>

                <GenkiTable chapter={5}>
                    <thead>
                    <tr>
                        <th>Past Tense (Irregular)</th>
                        <th>Affirmative</th>
                        <th>Negative</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>いい</td>
                        <td>
                            <GenkiUnderlineDisplay book={1} underline={new FirstMatch("よ")} >
                                <span>よかったです</span>
                            </GenkiUnderlineDisplay>
                        </td>
                        <td>
                            <GenkiUnderlineDisplay book={1} underline={new FirstMatch("よ")} >
                                <span>よくなかったです</span>
                            </GenkiUnderlineDisplay>
                        </td>
                    </tr>
                    <tr>
                        <td>{}</td>
                        <td>{}</td>
                        <td className={styles.indent}>
                            <div className={styles.indent}>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("よ")} >
                                    <span>(or よくありませんでした)</span>
                                </GenkiUnderlineDisplay>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </GenkiTable>
            </div>

        )
    }

    const c5p3: GrammarInfoProps = {
        chapter: 5,
        section: 3,
        page: PageNumber.from(134),
        title: "Adjectives (Noun Modification)",
        body: (
            <div>
                <p>
                    You can use い-adjectives and な-adjectives to modify nouns. Place the dictionary form of an
                    い-adjective before the noun you want to modify. With な-adjectives, you see な, which was missing
                    before です, return.
                </p>

                <GenkiStructureDisplay book={1}>
                    <Container>
                        <Row>
                            <Col>い-adjectives:</Col>
                            <Col>おもしろい映画</Col>
                            <Col>an interesting movie</Col>
                        </Row>
                        <Row>
                            <Col>な-adjectives:</Col>
                            <Col>きれいな写真</Col>
                            <Col>a beautiful picture</Col>
                        </Row>
                    </Container>
                </GenkiStructureDisplay>

                <p>For example:</p>

                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "きのう, おもしろい映画を見ました。", hideRomaji: true },
                            english: { value: "I saw an interesting move yesterday." }
                        },
                        {
                            japanese: { value: "山下先生はこわい先生です。", hideRomaji: true },
                            english: { value: "Professor Yamashita is a scary teacher." }
                        },
                        {
                            japanese: { value: "京都できれいな写真を撮りました。", hideRomaji: true },
                            english: { value: "I took a beautiful picture in Kyoto." }
                        },
                        {
                            japanese: { value: "ここはとてもにぎやかな町です。", hideRomaji: true },
                            english: { value: "This is a very vibrant city." }
                        }
                    ]}
                />
            </div>
        )
    }

    return { c5p1, c5p2, c5p3 };
}

export default GenkiChapter5;
