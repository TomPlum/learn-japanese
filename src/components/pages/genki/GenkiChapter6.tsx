import { GrammarInfoProps } from "../../learn/GrammarInfo";
import PageNumber from "../../../domain/learn/PageNumber";
import React from "react";
import GenkiTable from "../../ui/table/GenkiTable";

const GenkiChapter6 = () => {
    const c6p1: GrammarInfoProps = {
        chapter: 6,
        section: 1,
        page: PageNumber.from(150),
        title: "Te-form",
        body: (
            <div>
                <p>The てform has many uses in Japanese. Among these uses are:</p>
                <ul>
                    <li>making requests (“…please.”)</li>
                    <li>giving and asking for permission (“you may…/May I…”)</li>
                    <li>stating that something is forbidden (“you must not…”)</li>
                    <li>forming a sentence that describes two events or activities (“I did this and did that.”)</li>
                </ul>

                <p>Conjugating for the て form is fairly complex. There are separate rules for る, irregular, and the various う verbs. A summary follows.</p>

                <GenkiTable chapter={6}>
                    <tbody>
                        <tr>
                            <td>Ru-verbs</td>
                            <td></td>
                        </tr>
                    </tbody>
                </GenkiTable>
            </div>
        )
    }

    return { c6p1 };
}

export default GenkiChapter6;
