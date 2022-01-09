import { GrammarInfoProps } from "../../learn/GrammarInfo";
import PageNumber from "../../../domain/learn/PageNumber";
import GenkiTable from "../../ui/table/GenkiTable";
import styles from "../../../styles/sass/components/pages/GenkiGrammarPage.module.scss";
import React from "react";
import GenkiExampleDisplay from "../../ui/display/GenkiExampleDisplay";

const GenkiChapter13 = () => {
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
                <GenkiExampleDisplay
                    book={2}
                    jp={{ text: "家族はら手紙が来たし、かれと電話で話したし、きのうはとてもいい日でした。", underline: "し" }}
                    en={{ text: "Yesterday was a great day – a letter came from my family, and I talked with my boyfriend on the phone." }}
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
        title: "~そうです (It looks like...)",
        body: (
            <div>
                <p>When we say …そうです, we are guessing what something is like on the basis of our impressions.</p>
                <p>For example:</p>

                <GenkiExampleDisplay
                    book={2}
                    jp={{ text: "このりんごはおいしそうです。", underline: "そうです" }}
                    en={{ text: "This apple looks delicious.", underline: "looks" }}
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

    const c13p4: GrammarInfoProps = {
        chapter: 13,
        section: 4,
        page: PageNumber.from(31),
        title: "てみる",
        body: (
            <div>
                <p>You can use the te-form of a verb plus the helping verb みる to express the idea of
                    “doing something tentatively” or “trying something”.
                </p>

                <GenkiExampleDisplay
                    book={2}
                    jp={{ text: "友だちがあのみせのケーキはおいしと言っていましたから、今度たべてみます。" }}
                    en={{ text: "My friends say that the cake at the shop is good. I will have a piece one of these days." }}
                />
            </div>
        )
    }

    return { c13p1, c13p2, c13p3, c13p4 };
}

export default GenkiChapter13;
