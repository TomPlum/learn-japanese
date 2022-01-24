import { GrammarInfoProps } from "../../learn/GrammarInfo";
import PageNumber from "../../../domain/learn/PageNumber";
import React from "react";
import GenkiTable from "../../ui/table/GenkiTable";
import styles from "../../../styles/sass/components/pages/GenkiGrammarPage.module.scss";

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
                        <tr>
                            <td>U-verbs with final</td>
                            <td rowSpan={3}>

                            </td>
                            <td>{"合う "}<span className={styles.arrow}>&#8594;</span>{" 合って"}</td>
                        </tr>
                        <tr>
                            <td>{"待つ "}<span className={styles.arrow}>&#8594;</span>{" 待って"}</td>

                        </tr>
                        <tr>
                            <td>{"とる "}<span className={styles.arrow}>&#8594;</span>{" とって"}</td>

                        </tr>
                    </tbody>
                </GenkiTable>
            </div>
        )
    }

    return { c6p1 };
}

export default GenkiChapter6;
