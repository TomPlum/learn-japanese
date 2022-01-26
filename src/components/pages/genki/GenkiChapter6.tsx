import { GrammarInfoProps } from "../../learn/GrammarInfo";
import PageNumber from "../../../domain/learn/PageNumber";
import React from "react";
import GenkiTable from "../../ui/table/GenkiTable";
import styles from "../../../styles/sass/components/pages/GenkiGrammarPage.module.scss";
import GenkiComparisonDisplay from "../../ui/display/GenkiComparisonDisplay";

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
                            <td>{"食べる "}<span className={styles.arrow}>&#8594;</span>{" 食べて"}</td>
                        </tr>
                        <tr className={styles.rowSection}>
                            <td rowSpan={15}>U-verbs with final</td>
                            <td rowSpan={4}>
                                <GenkiComparisonDisplay
                                    ignoreFirstBrace
                                    firstComparison={{ text: "うつる" }}
                                    secondComparison={{ text: " " }}
                                    post="って"
                                    book={1}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>{"合う "}<span className={styles.arrow}>&#8594;</span>{" 合って"}</td>
                        </tr>
                        <tr>
                            <td>{"待つ "}<span className={styles.arrow}>&#8594;</span>{" 待って"}</td>
                        </tr>
                        <tr className={styles.rowSection}>
                            <td>{"とる "}<span className={styles.arrow}>&#8594;</span>{" とって"}</td>
                        </tr>
                        <tr>
                            <td>{}</td>
                            <td rowSpan={4}>{"む"}</td>
                        </tr>
                        <tr>
                            <td>{"読む　"}<span className={styles.arrow}>&#8594;</span>{" 読んで"}</td>
                        </tr>
                        <tr>
                            <td>{"遊ぶ　"}<span className={styles.arrow}>&#8594;</span>{" 遊んで"}</td>
                        </tr>
                        <tr className={styles.rowSection}>
                            <td>{"死ぬ　"}<span className={styles.arrow}>&#8594;</span>{" 死んで"}</td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>{"く "}<span className={styles.arrow}>&#8594;</span>{" いて"}</td>
                        </tr>
                        <tr>
                            <td>{"書く "}<span className={styles.arrow}>&#8594;</span>{" 書いて"}</td>
                        </tr>
                        <tr className={styles.rowSection}>
                            <td>{"行く "}<span className={styles.arrow}>&#8594;</span>{" 行って"}</td>
                        </tr>
                        <tr>
                            <td>{"ぐ "}<span className={styles.arrow}>&#8594;</span>{" いで"}</td>
                        </tr>
                        <tr className={styles.rowSection}>
                            <td>{"泳ぐ "}<span className={styles.arrow}>&#8594;</span>{" 泳いで"}</td>
                        </tr>
                        <tr>
                            <td>{"す "}<span className={styles.arrow}>&#8594;</span>{" して"}</td>
                        </tr>
                        <tr>
                            <td>{"話す "}<span className={styles.arrow}>&#8594;</span>{" 話して"}</td>
                        </tr>
                        <tr>
                            <td>Irregular Verbs</td>
                            <td>{"する"}</td>
                            <td>{"する "}<span className={styles.arrow}>&#8594;</span>{" して"}</td>
                        </tr>
                        <tr>
                            <td>{}</td>
                            <td>{"くる"}</td>
                            <td>{"くる "}<span className={styles.arrow}>&#8594;</span>{" きて"}</td>
                        </tr>
                    </tbody>
                </GenkiTable>
            </div>
        )
    }

    return { c6p1 };
}

export default GenkiChapter6;
