import { GrammarInfoProps } from "../../learn/GrammarInfo"
import PageNumber from "../../../domain/learn/PageNumber"
import GenkiTable from "../../ui/table/GenkiTable"
import styles from "../../../styles/sass/components/pages/GenkiGrammarPage.module.scss"
import GenkiExampleTable from "../../ui/genki/GenkiExampleTable"
import GenkiHighlightDisplay from "../../ui/genki/GenkiHighlightDisplay"
import QuoteDisplay from "../../ui/display/QuoteDisplay"
import React from "react"

const UseGenkiChapter3 = () => {
  const c3p1: GrammarInfoProps = {
    chapter: 3,
    section: 1,
    page: PageNumber.of(86, 88),
    title: "Verb Conjugation",
    body: (
      <div>
        <p>There are three categories of verbs in Japanese: ru-verbs, u-verbs, and irregular verbs.</p>
        <p>Ru and u verbs follow regular conjugation:</p>

        <GenkiTable chapter={3} className={styles.verbConjugationTable}>
          <thead>
            <tr>
              <th>{}</th>
              <th>る Verbs</th>
              <th>う Verbs</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Verb Base</td>
              <td>tabe</td>
              <td>iku</td>
            </tr>
            <tr>
              <td>Dictionary Form</td>
              <td>たべる (to eat)</td>
              <td>いく(to go)</td>
            </tr>
            <tr>
              <td>Present, Affirmative</td>
              <td>たべます</td>
              <td>いきます</td>
            </tr>
            <tr>
              <td>Present, Negative</td>
              <td>たべません</td>
              <td>いきません</td>
            </tr>
            <tr>
              <td>Stem</td>
              <td>たべ</td>
              <td>いき</td>
            </tr>
          </tbody>
        </GenkiTable>

        <p>There are only two irregular verbs in Japanese: する and くる. They are conjugated as follows:</p>

        <GenkiTable chapter={3} className={styles.verbConjugationTable}>
          <tbody>
            <tr>
              <td>Dictionary Form</td>
              <td>する</td>
              <td>くる</td>
            </tr>
            <tr>
              <td>Present, Affirmative</td>
              <td>します</td>
              <td>きます</td>
            </tr>
            <tr>
              <td>Present, Negative</td>
              <td>しません</td>
              <td>きません</td>
            </tr>
            <tr>
              <td>Stem</td>
              <td>し</td>
              <td>き</td>
            </tr>
          </tbody>
        </GenkiTable>

        <p>
          Ru-verbs are so called because you add the suffix ru to the verb base to form the dictionary form. U-verbs can
          be broken down into the base and the suffix. The long form are formed with the base plus suffixes imasu and
          imas
        </p>
      </div>
    )
  }

  const c3p2: GrammarInfoProps = {
    chapter: 3,
    section: 2,
    page: PageNumber.from(88),
    title: "Verb Types & The 'Present Tense'",
    body: (
      <div>
        <p>The present tense in Japanese is used to describe one of two things:</p>
        <ol>
          <li>an activity a person habitually or regularly engages in, or;</li>
          <li>an activity that a person is planning on performing or doing in the future.</li>
        </ol>

        <p>Habitual actions:</p>
        <GenkiExampleTable
          book={1}
          values={[
            {
              japanese: { value: "わたしはよくテレビをみます。" },
              english: { value: "I often watch TV." }
            },
            {
              japanese: { value: "メアリーさんはときどきあさごはんをたべません。" },
              english: { value: "Mary sometimes doesn’t eat breakfast." }
            }
          ]}
        />

        <p>Future actions:</p>
        <GenkiExampleTable
          book={1}
          values={[
            {
              japanese: { value: "わたしはあしたきょうとにいきます" },
              english: { value: "I will go to Kyoto tomorrow." }
            },
            {
              japanese: { value: "スーさんはきょううちにかえりません。" },
              english: { value: "Sue will not return today." }
            }
          ]}
        />
      </div>
    )
  }

  const c3p3: GrammarInfoProps = {
    chapter: 3,
    section: 3,
    page: PageNumber.of(88, 89),
    title: "Particles",
    body: (
      <div>
        <p>
          Nouns used in sentences generally must be followed by particles, which indicate the relations that the nouns
          bear to the verbs. This section contains four particles: で, に, へ, and を.
        </p>
        <hr className={styles.hr} />

        <GenkiHighlightDisplay
          text="で"
          chapter={3}
          description="The particle で indicates where the even described by the verb takes place."
        />
        <GenkiExampleTable
          book={1}
          values={[
            {
              japanese: { value: "うちでテレビをみます。", underline: "で" },
              english: { value: "I will watch TV at home." }
            }
          ]}
        />
        <hr className={styles.hr} />

        <GenkiHighlightDisplay
          text="に"
          chapter={3}
          description="The particle に indicates two things; the goal toward which things move; and the time at which an event takes place."
        />
        <GenkiExampleTable
          book={1}
          values={[
            {
              japanese: { value: "わたしはうちにかえります。", underline: "に" },
              english: { value: "I will return." }
            },
            {
              japanese: { value: "じゅいちじにねます。", underline: "に" },
              english: { value: "I will go to bed at eleven." }
            }
          ]}
        />
        <hr className={styles.hr} />

        <GenkiHighlightDisplay
          text="へ"
          chapter={3}
          description="The particle へ also indicates the goal of a movement. It is pronounced “e.”"
        />
        <GenkiExampleTable
          book={1}
          values={[
            {
              japanese: { value: "わたしはうちへかえります。", underline: "へ" },
              english: { value: "I will return." }
            }
          ]}
        />
        <hr className={styles.hr} />

        <GenkiHighlightDisplay
          text="を"
          chapter={3}
          description="The particle を indicates direct objects. It is pronounced “o.”"
        />
        <GenkiExampleTable
          book={1}
          values={[
            {
              japanese: { value: "コーヒーをのみます。", underline: "を" },
              english: { value: "I drink coffee." }
            },
            {
              japanese: { value: "テープをききます。 ", underline: "を" },
              english: { value: "I listen to tapes." }
            }
          ]}
        />
      </div>
    )
  }

  const c3p4: GrammarInfoProps = {
    chapter: 3,
    section: 4,
    page: PageNumber.from(90),
    title: "Time References",
    body: (
      <div>
        <p>
          You need the particle に with the days of the week, numerical time expressions, and months. You do not need to
          use the time particle に with time expressions defined relative to the present moment, such as “today” and
          “tomorrow”, expressions describing regular intervals such as “every day”, or the word for “when.”
        </p>

        <GenkiExampleTable
          book={1}
          values={[
            {
              japanese: { value: "にちようびにいきます。", underline: "にちようびに" },
              english: { value: "I will go on Sunday." }
            },
            {
              japanese: { value: "くがつにかえります。", underline: "くがつに" },
              english: { value: "I will go back in September" }
            }
          ]}
        />
      </div>
    )
  }

  const c3p5: GrammarInfoProps = {
    chapter: 3,
    section: 5,
    page: PageNumber.from(90),
    title: "～ませんか",
    body: (
      <div>
        <p>
          ～ませんか can be used to extend an invitation. It should be noted that the affirmative counterpart of this
          (ますか) cannot be so used.
        </p>

        <GenkiExampleTable
          book={1}
          values={[
            {
              japanese: { value: "テニスをしませんか。" },
              english: { value: "Will you play tennis with me?" }
            },
            {
              japanese: { value: "ひるごはんをたべませんか。" },
              english: { value: "What do you say to having lunch with me?" }
            }
          ]}
        />
      </div>
    )
  }

  const c3p6: GrammarInfoProps = {
    chapter: 3,
    section: 6,
    page: PageNumber.from(91),
    title: "Frequency Adverbs",
    body: (
      <div>
        <p>Frequency adverbs are added to indicate how often something is done.</p>
        <p>Examples of frequency adverbs are まいにち (everyday), よく (often), and ときどき (sometimes).</p>

        <GenkiExampleTable
          book={1}
          values={[
            {
              japanese: { value: "わたしはときどききっさてんにいきます。" },
              english: { value: "I sometimes go to a coffee shop." }
            }
          ]}
        />

        <p>
          It is also important to remember that adverbs of infrequency must be followed by a negative at the end of the
          sentence.
        </p>

        <GenkiExampleTable
          book={1}
          values={[
            {
              japanese: { value: "わたしはぜんぜんテレビをみません。" },
              english: { value: "I do not watch TV at all." }
            }
          ]}
        />
      </div>
    )
  }

  const c3p7: GrammarInfoProps = {
    chapter: 3,
    section: 7,
    page: PageNumber.from(91),
    title: "Word Order",
    body: (
      <div>
        <p>Japanese sentences are structured as Subject-Object-Verb.</p>

        <p>
          The following example has the structure
          <QuoteDisplay chapter={3}>{"topic -> time -> place -> object -> verb"}</QuoteDisplay>
        </p>
        <GenkiExampleTable
          book={1}
          values={[
            {
              japanese: { value: "わたしはきょうとしょかんでにほんごをべんきょうします。" },
              english: { value: "I will study Japanese in the library today." }
            }
          ]}
        />

        <p>
          This example has the structure
          <QuoteDisplay chapter={3}>{"topic -> frequency -> time -> goal -> verb"}</QuoteDisplay>
        </p>
        <GenkiExampleTable
          book={1}
          values={[
            {
              japanese: { value: "わたしはよくしちじごろうちへかえります。" },
              english: { value: "I often go back at around seven." }
            }
          ]}
        />
      </div>
    )
  }

  const c3p8: GrammarInfoProps = {
    chapter: 3,
    section: 8,
    page: PageNumber.of(91, 92),
    title: "The Topic Particle は",
    body: (
      <div>
        <p>
          The particle は presents the topic of one’s utterance (“As for item X, it is such that…”). It puts forward the
          item that you want to talk about and comment on. A topic phrase, however, need not be the subject of a
          sentence.
        </p>

        <GenkiExampleTable
          book={1}
          values={[
            {
              japanese: { value: "アリーさん、しゅまつはたいていなにをしますか。" },
              english: { value: "(Mary, what do you usually do on the weekends?)" }
            }
          ]}
        />
      </div>
    )
  }

  return { c3p1, c3p2, c3p3, c3p4, c3p5, c3p6, c3p7, c3p8 }
}

export default UseGenkiChapter3
