import { GrammarInfoProps } from "../../learn/GrammarInfo"
import PageNumber from "../../../domain/learn/PageNumber"
import React from "react"
import GenkiTable from "../../ui/table/GenkiTable"
import styles from "../../../styles/sass/components/pages/GenkiGrammarPage.module.scss"
import GenkiComparisonDisplay from "../../ui/genki/GenkiComparisonDisplay"
import GenkiUnderlineDisplay from "../../ui/genki/GenkiUnderlineDisplay"
import { FirstMatch } from "../../ui/Underline"
import QuoteDisplay from "../../ui/display/QuoteDisplay"
import GenkiExampleDisplay from "../../ui/genki/GenkiExampleDisplay"
import GenkiStructureDisplay from "../../ui/genki/GenkiStructureDisplay"

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

        <p>
          Conjugating for the て form is fairly complex. There are separate rules for る, irregular, and the various う
          verbs. A summary follows.
        </p>

        <GenkiTable chapter={6}>
          <tbody>
            <tr className={styles.rowSection}>
              <td>Ru-verbs</td>
              <td>
                {"る "}
                <span className={styles.arrow}>&#8594;</span>
                {" て"}
              </td>
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
              <td>
                {"く "}
                <span className={styles.arrow}>&#8594;</span>
                {" いて"}
              </td>
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
              <td>
                {"ぐ "}
                <span className={styles.arrow}>&#8594;</span>
                {" いで"}
              </td>
              <td>
                <span>{"泳ぐ "}</span>
                <span className={styles.arrow}>&#8594;</span>
                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("いで")}>
                  <span>{" 泳いで"}</span>
                </GenkiUnderlineDisplay>
              </td>
            </tr>
            <tr className={[styles.rowSection, styles.full].join(" ")}>
              <td>
                {"す "}
                <span className={styles.arrow}>&#8594;</span>
                {" して"}
              </td>
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
          jp={{ text: "教科書のテープを聞いてください。" }}
          en={{ text: "Please listen to the tape that goes with the textbook." }}
        />

        <GenkiExampleDisplay
          book={1}
          jp={{ text: "すみません。ちょっと教えてください。" }}
          en={{ text: "Excuse me. Please teach me a little. (= Tell me, I need your advice.)" }}
        />
      </div>
    )
  }

  const c6p3: GrammarInfoProps = {
    chapter: 6,
    section: 3,
    page: PageNumber.of(151, 152),
    title: "Describing Two Activities",
    body: (
      <div>
        <p>
          You can use a te-form if you want to combine two or more verbs, as in describing a sequence of events or
          actions <QuoteDisplay chapter={6}>I did this then that</QuoteDisplay>. In other words, the te-form does the
          work of “and” with verbs. (Note と can only connect nouns not verbs.)
        </p>

        <p>For example:</p>
        <GenkiExampleDisplay
          book={1}
          jp={{ text: "図書館に行って, 本を借ります。" }}
          en={{ text: "I will go to the library and check out some books." }}
        />
        <GenkiExampleDisplay
          book={1}
          jp={{ text: "今日は、六時に起きて、勉強しました。" }}
          en={{ text: "Today I got up at six and studied." }}
        />

        <hr className={styles.hr} />

        <p>The te-form of a verb can also be used to connect a verb more “loosely” with the rest of a sentence.</p>

        <p>For example:</p>
        <GenkiExampleDisplay
          book={1}
          jp={{ text: "バスに乗って、会社に行きます。" }}
          en={{ text: "I go to work by bus." }}
        />
      </div>
    )
  }

  const c6p4: GrammarInfoProps = {
    chapter: 6,
    section: 4,
    page: PageNumber.from(152),
    title: "～てもいいです",
    body: (
      <div>
        <p>
          A verbal te-form plus もいいです means <QuoteDisplay chapter={6}>you may do...,</QuoteDisplay> which describes
          an activity that is permitted. To ask for permission, you can turn it into a question sentence,
          ～てもいいですか。
        </p>

        <p>For example:</p>
        <GenkiExampleDisplay
          book={1}
          jp={{ text: "A: 教科書を見てもいいですか。", underline: new FirstMatch("てもいいですか") }}
          en={{ text: "May I see the text book?", underline: new FirstMatch("May I") }}
        />
        <GenkiExampleDisplay
          book={1}
          jp={{ text: "B: はい, 見てもいいですよ。", underline: new FirstMatch("てもいいです") }}
          en={{ text: "Yes, you may.", underline: new FirstMatch("you may") }}
        />
      </div>
    )
  }

  const c6p5: GrammarInfoProps = {
    chapter: 6,
    section: 5,
    page: PageNumber.from(152),
    title: "～てはいけません",
    body: (
      <div>
        <p>
          To deny somebody permission to do something, you can use the te-form plus はいけません。This means
          <QuoteDisplay chapter={6}>you must not do...,</QuoteDisplay> a strong prohibition statement, as in rules and
          regulations.
        </p>

        <p>For example:</p>
        <GenkiExampleDisplay
          book={1}
          jp={{ text: "ここで写真を撮ってはいけません。", underline: new FirstMatch("てはいけません") }}
          en={{ text: "You must not take pictures here.", underline: new FirstMatch("You must not") }}
        />
      </div>
    )
  }

  const c6p6: GrammarInfoProps = {
    chapter: 6,
    section: 6,
    page: PageNumber.from(153),
    title: "～から",
    body: (
      <div>
        <p>
          A sentence that ends with から(because) explains the reason the reason or the cause of a situation, a
          proposal, and so forth.
        </p>

        <GenkiStructureDisplay book={1} width={255}>
          <span>(situation)。(explanation) から。</span>
        </GenkiStructureDisplay>

        <p>For example:</p>
        <GenkiExampleDisplay
          book={1}
          jp={{ text: "私は今晩勉強します。あしたテストがありますから。", underline: new FirstMatch("から") }}
          en={{
            text: "I will study this evening. Because we will have an exam tomorrow.",
            underline: new FirstMatch("Because")
          }}
        />
        <GenkiExampleDisplay
          book={1}
          jp={{ text: "バスに乗りましょう。タクシーは高いですから。", underline: new FirstMatch("から") }}
          en={{
            text: "Let’s take the bus. Because taxis are expensive.",
            underline: new FirstMatch("Because")
          }}
        />
      </div>
    )
  }

  const c6p7: GrammarInfoProps = {
    chapter: 6,
    section: 7,
    page: PageNumber.from(153),
    title: "～てましょうか",
    body: (
      <div>
        <p>
          ましょうか can mean <QuoteDisplay chapter={6}>lets...</QuoteDisplay>, but ましょうか can also be used in
          offering assistance like <QuoteDisplay chapter={6}>let me do...,</QuoteDisplay>.
        </p>

        <p>For example, you can offer help by saying:</p>
        <GenkiExampleDisplay
          book={1}
          jp={{ text: "(私が) やりましょうか。", underline: new FirstMatch("ましょうか") }}
          en={{ text: "I’ll do it." }}
        />

        <p>Or to a person who is carrying a heavy bag:</p>
        <GenkiExampleDisplay
          book={1}
          jp={{ text: "荷物を持ちましょうか。", underline: new FirstMatch("ましょうか") }}
          en={{ text: "Shall I carry your bag?" }}
        />
      </div>
    )
  }

  return { c6p1, c6p2, c6p3, c6p4, c6p5, c6p6, c6p7 }
}

export default GenkiChapter6
