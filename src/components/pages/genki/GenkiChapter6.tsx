import { GrammarInfoProps } from "../../learn/GrammarInfo";
import PageNumber from "../../../domain/learn/PageNumber";
import React from "react";
import GenkiTable from "../../ui/table/GenkiTable";
import styles from "../../../styles/sass/components/pages/GenkiGrammarPage.module.scss";
import GenkiComparisonDisplay from "../../ui/display/GenkiComparisonDisplay";
import GenkiUnderlineDisplay from "../../ui/display/GenkiUnderlineDisplay";
import { FirstMatch } from "../../ui/Underline";

const GenkiChapter6 = () => {
    const c6p1: GrammarInfoProps = {
        chapter: 6,
        section: 1,
        page: PageNumber.from(150),
        title: "Te-form",
        body: (
            <div>
                <p>The て form has many uses in Japanese. Among these uses are:</p>
                <ul>
                    <li>making requests (“…please.”)</li>
                    <li>giving and asking for permission (“you may…/May I…”)</li>
                    <li>stating that something is forbidden (“you must not…”)</li>
                    <li>forming a sentence that describes two events or activities (“I did this and did that.”)</li>
                </ul>

                <p>Conjugating for the て form is fairly complex. There are separate rules for る, irregular, and the various う verbs. A summary follows.</p>

                <GenkiTable chapter={6}>
                    <tbody>
                        <tr className={styles.rowSection}>
                            <td>Ru-verbs</td>
                            <td>{"る "}<span className={styles.arrow}>&#8594;</span>{" て"}</td>
                            <td>
                                <span>{"食べる "}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("て")}>
                                    <span>{" 食べて"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>

                        <tr className={styles.rowSection}>
                            <td rowSpan={13}>U-verbs with final</td>
                            <td rowSpan={4}>
                                <GenkiComparisonDisplay
                                    ignoreFirstBrace
                                    firstComparison={{ text: "う" }}
                                    secondComparison={{ text: "つ" }}
                                    thirdComparison={{ text: "る" }}
                                    post="って"
                                    book={1}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>{"合う "}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("って")}>
                                    <span>{" 合って"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>{"待つ "}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("って")}>
                                    <span>{" 待って"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr className={styles.rowSection}>
                            <td>
                                <span>{"とる "}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("って")}>
                                    <span>{" とって"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>

                        <tr>
                            <td rowSpan={4}>
                                <GenkiComparisonDisplay
                                    ignoreFirstBrace
                                    firstComparison={{ text: "む" }}
                                    secondComparison={{ text: "ぶ" }}
                                    thirdComparison={{ text: "ぬ" }}
                                    post="んで"
                                    book={1}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>{"読む　"}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("んで")}>
                                    <span>{" 読んで"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>{"遊ぶ　"}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("んで")}>
                                    <span>{" 遊んで"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr className={styles.rowSection}>
                            <td>
                                <span>{"死ぬ　"}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("んで")}>
                                    <span>{" 死んで"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>{"く "}<span className={styles.arrow}>&#8594;</span>{" いて"}</td>
                        </tr>
                        <tr>
                            <td>
                                <span>{"書く "}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("いて")}>
                                    <span>{" 書いて"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr className={styles.rowSection}>
                            <td>(Exception)</td>
                            <td>
                                <span>{"行く "}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("って")}>
                                    <span>{" 行って"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr className={styles.rowSection}>
                            <td>{"ぐ "}<span className={styles.arrow}>&#8594;</span>{" いで"}</td>
                            <td>
                                <span>{"泳ぐ "}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("いで")}>
                                    <span>{" 泳いで"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr>
                            <td>{"す "}<span className={styles.arrow}>&#8594;</span>{" して"}</td>
                            <td>
                                <span>{"話す "}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("して")}>
                                    <span>{" 話して"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr>
                            <td>Irregular Verbs</td>
                            <td>{"する"}</td>
                            <td>
                                <span>{"する "}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("して")}>
                                    <span>{" して"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr>
                            <td>{}</td>
                            <td>{"くる"}</td>
                            <td>
                                <span>{"くる "}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("きて")}>
                                    <span>{" きて"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                    </tbody>
                </GenkiTable>
            </div>
        )
    }

    return { c6p1 };
}

export default GenkiChapter6;
