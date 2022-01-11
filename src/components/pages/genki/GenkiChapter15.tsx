import { GrammarInfoProps } from "../../learn/GrammarInfo";
import PageNumber from "../../../domain/learn/PageNumber";
import GenkiStructureDisplay from "../../ui/display/GenkiStructureDisplay";
import styles from "../../../styles/sass/components/pages/GenkiGrammarPage.module.scss";
import GenkiExampleDisplay from "../../ui/display/GenkiExampleDisplay";
import Underline, { FirstMatch, Whole } from "../../ui/Underline";
import GenkiUnderlineDisplay from "../../ui/display/GenkiUnderlineDisplay";

const GenkiChapter15 = () => {
    const c15p1: GrammarInfoProps = {
        chapter: 15,
        section: 1,
        page: PageNumber.of(74, 75),
        title: "Volitional Form",
        body: (
            <div>
                <p>The volitional form of a verb is a less formal, more casual equivalent of ましょう.</p>
                <p>You can make the volitional form using the rules listed below:</p>

                <GenkiStructureDisplay book={2} width={330}>
                    <p>る Verbs: Drop the final –ru and add –yoo</p>
                    <p style={{ marginLeft: "10px" }} className={styles.muted}>
                        {"食べる(tabe - ru) "}<span className={styles.arrow}>&#8594;</span>{" 食べよう(tabe - yoo)"}
                    </p>

                    <p>う Verbs: Drop the final –u and add –oo</p>
                    <p style={{ marginLeft: "10px" }} className={styles.muted}>
                        {"行く(ik - u) "}<span className={styles.arrow}>&#8594;</span>{" 行こう(ik - oo)"}
                    </p>

                    <p>Irregular Verbs: Drop the final –u and add –oo</p>
                    <span style={{ marginLeft: "10px" }} className={styles.muted}>
                        {"くる "}<span className={styles.arrow}>&#8594;</span>{" こよう"}
                    </span>
                    <span style={{ margin: "0 10px 0 10px", float: "right" }} className={styles.muted}>
                        {"する "}<span className={styles.arrow}>&#8594;</span>{" しよう"}
                    </span>
                </GenkiStructureDisplay>

                <p>For example:</p>
                <GenkiExampleDisplay
                    book={2}
                    jp={{ text: "あしたはじゅごうがないから、こんや、どこかに食べに行こう。" }}
                    en={{ text: "We don’t have any classes tomorrow. Let’s go some place for dinner tonight." }}
                />

                <hr className={styles.hr}/>

                <p>You can use the volitional plus the question particle か to ask for an opinion in your offer or suggestion.</p>
                <p>For example:</p>
                <GenkiExampleDisplay
                    book={2}
                    jp={{ text: "友だちがおもしろいと言っていたから、このえいがを見ようか。" }}
                    en={{ text: "Shall we see this film? My friends say it is good." }}
                />
            </div>
        )
    }

    const c15p2: GrammarInfoProps = {
        chapter: 15,
        section: 2,
        page: PageNumber.from(75),
        title: "Volitional Form + と思っています",
        body: (
            <div>
                <p>We also use the Volitional Form + と思っています to talk about our determinations.</p>
                <p>For example:</p>
                <GenkiExampleDisplay
                    book={2}
                    jp={{ text: "まいにち三時かん日本語をべんきょうしようと思っています。" }}
                    en={{ text: "I’ve decided to study Japanese for three hours every day." }}
                />

                <p>
                    You can also use the Volitional Form + と思っています, which suggests that the decision to perform
                    the activity is being made on the <em>spot</em> at the time of speaking.
                </p>
                <p>と思っています, in contrast, tends to suggest that you have <em>already decided</em> to do something.</p>

                <p>Situation 1</p>
                <GenkiExampleDisplay
                    book={2}
                    jp={{ text: "Q: 万円あげましょう。何に使いますか" }}
                    en={{ text: "I will give you 100,000 yen. What will you use it for?" }}
                />
                <GenkiExampleDisplay
                    book={2}
                    jp={{ text: "A: 旅行に行こうと思います。", underline: new FirstMatch("と思います") }}
                    en={{ text: "I will go on a trip. (decided on the spot)" }}
                />

                <p>Situation 2</p>
                <GenkiExampleDisplay
                    book={2}
                    jp={{ text: "Q: 両親から10万円もらったんですか？ 何に使うんですか？" }}
                    en={{ text: "You got 100,000 yen from your parents? What are you going to use it for?" }}
                />
                <GenkiExampleDisplay
                    book={2}
                    jp={{ text: "A: 旅行に行こうと思っています。", underline: new FirstMatch("と思っています") }}
                    en={{ text: "I am going to go on a trip. (decision already made)" }}
                />
            </div>
        )
    }

    return { c15p1, c15p2 };
}

export default GenkiChapter15;
