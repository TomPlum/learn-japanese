import { GrammarInfoProps } from "../../learn/GrammarInfo";
import PageNumber from "../../../domain/learn/PageNumber";
import React from "react";
import GenkiTable from "../../ui/table/GenkiTable";
import styles from "../../../styles/sass/components/pages/GenkiGrammarPage.module.scss";
import GenkiComparisonDisplay from "../../ui/display/GenkiComparisonDisplay";
import GenkiUnderlineDisplay from "../../ui/display/GenkiUnderlineDisplay";
import { FirstMatch } from "../../ui/Underline";
import QuoteDisplay from "../../ui/display/QuoteDisplay";
import GenkiExampleDisplay from "../../ui/display/GenkiExampleDisplay";

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

                        <tr>
                            <td rowSpan={12}>U-verbs with final</td>
                            <td rowSpan={4} className={styles.full}>
                                <GenkiComparisonDisplay
                                    noPadding
                                    ignoreFirstBrace
                                    firstComparison={{ text: "う" }}
                                    secondComparison={{ text: "つ" }}
                                    thirdComparison={{ text: "る" }}
                                    post="って"
                                    book={1}
                                />
                            </td>
                        </tr>
                        <tr className={styles.full}>
                            <td>
                                <span>{"合う "}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("って")}>
                                    <span>{" 合って"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr className={styles.full}>
                            <td>
                                <span>{"待つ "}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("って")}>
                                    <span>{" 待って"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr className={[styles.rowSection, styles.full].join(" ")}>
                            <td>
                                <span>{"とる "}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("って")}>
                                    <span>{" とって"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>

                        <tr className={styles.full}>
                            <td rowSpan={4}>
                                <GenkiComparisonDisplay
                                    noPadding
                                    ignoreFirstBrace
                                    firstComparison={{ text: "む" }}
                                    secondComparison={{ text: "ぶ" }}
                                    thirdComparison={{ text: "ぬ" }}
                                    post="んで"
                                    book={1}
                                />
                            </td>
                        </tr>
                        <tr className={styles.full}>
                            <td>
                                <span>{"読む "}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("んで")}>
                                    <span>{" 読んで"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr className={styles.full}>
                            <td>
                                <span>{"遊ぶ "}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("んで")}>
                                    <span>{" 遊んで"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr className={[styles.rowSection, styles.full].join(" ")}>
                            <td>
                                <span>{"死ぬ "}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("んで")}>
                                    <span>{" 死んで"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr className={styles.full}>
                            <td>{"く "}<span className={styles.arrow}>&#8594;</span>{" いて"}</td>
                            <td>
                                <span>{"書く "}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("いて")}>
                                    <span>{" 書いて"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr className={[styles.rowSection, styles.full].join(" ")}>
                            <td>(Exception)</td>
                            <td>
                                <span>{"行く "}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("って")}>
                                    <span>{" 行って"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr className={[styles.rowSection, styles.full].join(" ")}>
                            <td>{"ぐ "}<span className={styles.arrow}>&#8594;</span>{" いで"}</td>
                            <td>
                                <span>{"泳ぐ "}</span>
                                <span className={styles.arrow}>&#8594;</span>
                                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("いで")}>
                                    <span>{" 泳いで"}</span>
                                </GenkiUnderlineDisplay>
                            </td>
                        </tr>
                        <tr className={[styles.rowSection, styles.full].join(" ")}>
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

    const c6p2: GrammarInfoProps = {
        chapter: 6,
        section: 2,
        page: PageNumber.from(151),
        title: "～てください",
        body: (
            <div>
                <p>
                    Use a verbal te-form together with ください to make a polite request to another person
                    <QuoteDisplay chapter={6}>please do … for me.</QuoteDisplay>.
                </p>

                <p>For example:</p>
                <GenkiExampleDisplay
                    book={1}
                    jp={{ text: "教科書のテープを聞いてください。"}}
                    en={{ text: "Please listen to the tape that goes with the textbook." }}
                />

                <GenkiExampleDisplay
                    book={1}
                    jp={{ text: "すみません。ちょっと教えてください。"}}
                    en={{ text: "Excuse me. Please teach me a little. (= Tell me, I need your advice.)" }}
                />
            </div>
        )
    }

    return { c6p1, c6p2 };
}

export default GenkiChapter6;
