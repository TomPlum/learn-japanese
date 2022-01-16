import { GrammarInfoProps } from "../../learn/GrammarInfo";
import PageNumber from "../../../domain/learn/PageNumber";
import GenkiExampleTable from "../../ui/display/GenkiExampleTable";
import React from "react";
import GenkiTable from "../../ui/table/GenkiTable";
import styles from "../../../styles/sass/components/pages/GenkiGrammarPage.module.scss";
import GenkiUnderlineDisplay from "../../ui/display/GenkiUnderlineDisplay";
import { FirstMatch } from "../../ui/Underline";

const GenkiChapter5 = () => {
    const c5p1: GrammarInfoProps = {
        chapter: 5,
        section: 1,
        page: PageNumber.of(132, 134),
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

    return { c5p1 };
}

export default GenkiChapter5;
