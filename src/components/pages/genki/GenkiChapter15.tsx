import { GrammarInfoProps } from "../../learn/GrammarInfo";
import PageNumber from "../../../domain/learn/PageNumber";
import GenkiStructureDisplay from "../../ui/genki/GenkiStructureDisplay";
import styles from "../../../styles/sass/components/pages/GenkiGrammarPage.module.scss";
import GenkiExampleDisplay from "../../ui/genki/GenkiExampleDisplay";
import { FirstMatch } from "../../ui/Underline";

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

    const c15p3: GrammarInfoProps = {
        chapter: 15,
        section: 3,
        page: PageNumber.from(76),
        title: "~ておく",
        body: (
            <div>
                <p>The te-form of a verb plus the helping verb おく describes an action performed in preparation for something.</p>

                <GenkiStructureDisplay book={2} width={300}>
                    <span>~ておく</span>
                    <span style={{ float: "right" }}>do something in preparation</span>
                </GenkiStructureDisplay>

                <p>For example:</p>
                <GenkiExampleDisplay
                    book={2}
                    jp={{ text: "あしたしけんがあるので、こんばんべんきょうしておきます。" }}
                    en={{ text: "Since there will be an exam tomorrow, I will study for it tonight." }}
                />

                <hr className={styles.hr} />

                <p>ておく is often shortened to とく in speech.</p>

                <p>For example:</p>
                <GenkiExampleDisplay
                    book={2}
                    jp={{ text: "ホテルを予約をしとくね" }}
                    en={{ text: "I will make a hotel reservation in advance." }}
                />
            </div>
        )
    }

    const c15p4: GrammarInfoProps = {
        chapter: 15,
        section: 4,
        page: PageNumber.of(76, 77),
        title: "Using Sentences to Qualify Nouns",
        body: (
            <div>
                <p>You can also use sentences to qualify nouns.</p>

                <p>For example:</p>
                <GenkiExampleDisplay
                    book={2}
                    jp={{ text: "きのう買った本。" }}
                    en={{ text: "The book that I bought yesterday.", underline: new FirstMatch("that I bought yesterday") }}
                />
                <GenkiExampleDisplay
                    book={2}
                    jp={{ text: "彼がくれた本。" }}
                    en={{ text: "The book my boyfriend gave me.", underline: new FirstMatch("my boyfriend gave me") }}
                />


                <p>Qualifier sentences in these examples tell us what kind of book we are talking about, just like adjectives.</p>
                <p>When the subject of the verb appears inside a qualifier sentence, it is accompanied by the particle が, and not は.</p>
                <p>The verbs used in such qualifier sentences are in their short forms, either in the present, and either in the affirmative or negative.</p>
            </div>
        )
    }

    return { c15p1, c15p2, c15p3, c15p4 };
}

export default GenkiChapter15;
