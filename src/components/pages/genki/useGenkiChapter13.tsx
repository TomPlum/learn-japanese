import { GrammarInfoProps } from "../../learn/GrammarInfo"
import PageNumber from "../../../domain/learn/PageNumber"
import GenkiTable from "../../ui/table/GenkiTable"
import styles from "../../../styles/sass/components/pages/GenkiGrammarPage.module.scss"
import GenkiExampleDisplay from "../../ui/genki/GenkiExampleDisplay"
import { FirstMatch, Occurrences } from "../../ui/Underline"
import GenkiStructureDisplay from "../../ui/genki/GenkiStructureDisplay"
import { Col, Container, Row } from "react-bootstrap"

const UseGenkiChapter13 = () => {
  const c13p1: GrammarInfoProps = {
    chapter: 13,
    section: 1,
    page: PageNumber.of(26, 28),
    title: "Potential Verbs",
    body: (
      <div>
        <p>
          Potential verbs are used to say that someone “can” or “has the ability to” do something, or that something is
          possible.
        </p>

        <p>る Verbs: Drop the final –ru and add –rareru</p>
        <GenkiTable chapter={13} maxWidth={165}>
          <tbody>
            <tr>
              <td>{}</td>
              <td>見る &#8594; 見られる</td>
            </tr>
          </tbody>
        </GenkiTable>

        <p>う Verbs: Drop the final –u and add –eru</p>
        <GenkiTable chapter={13} maxWidth={165}>
          <tbody>
            <tr>
              <td>{}</td>
              <td>行く &#8594; 行ける</td>
            </tr>
          </tbody>
        </GenkiTable>

        <p>Irregular Verbs</p>
        <GenkiTable chapter={13} maxWidth={300}>
          <tbody>
            <tr>
              <td>{}</td>
              <td>くる &#8594; こられる</td>
              <td>する &#8594; できる</td>
            </tr>
          </tbody>
        </GenkiTable>

        <GenkiTable chapter={13}>
          <tbody>
            <tr>
              <th rowSpan={2} className={styles.genkiTwo}>
                Verb Conjugation
              </th>
              <th colSpan={2} scope="colgroup">
                Short Form
              </th>
              <th colSpan={2} scope="colgroup">
                Long Form
              </th>
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
          </tbody>
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
        <p>
          When you want to mention not just one, but two or more reasons, you can use し in place of から. し usually
          follows a predicate in the short form.
        </p>

        <GenkiStructureDisplay book={2} width="auto">
          <span className={styles.genkiTwo}>
            (reason<sub>1</sub>){" "}
          </span>{" "}
          し、
          <span className={styles.genkiTwo}>
            (reason<sub>2</sub>){" "}
          </span>
          し、
          <span className={styles.genkiTwo}>(situation)</span> 。
        </GenkiStructureDisplay>

        <p>For example:</p>
        <GenkiExampleDisplay
          book={2}
          jp={{
            text: "家族はら手紙が来たし、かれと電話で話したし、きのうはとてもいい日でした。",
            underline: new Occurrences("し", [1, 3])
          }}
          en={{
            text: "Yesterday was a great day – a letter came from my family, and I talked with my boyfriend on the phone."
          }}
        />

        <p>
          Note that し follows the short forms. In present tense sentences, this means that だ appears with
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
          jp={{ text: "このりんごはおいしそうです。", underline: new FirstMatch("そうです") }}
          en={{ text: "This apple looks delicious.", underline: new FirstMatch("looks") }}
        />

        <p>
          To form …そうです sentences with い-adjectives, drop the final い (exception - いい, change to よさ before
          そう); with な-adjectives, you just drop な.
        </p>

        <GenkiTable chapter={13} maxWidth={400}>
          <tbody>
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
          </tbody>
        </GenkiTable>
      </div>
    )
  }

  const c13p4: GrammarInfoProps = {
    chapter: 13,
    section: 4,
    page: PageNumber.from(30),
    title: "てみる",
    body: (
      <div>
        <p>
          You can use the te-form of a verb plus the helping verb みる to express the idea of “doing something
          tentatively” or “trying something”.
        </p>

        <GenkiExampleDisplay
          book={2}
          jp={{ text: "友だちがあのみせのケーキはおいしと言っていましたから、今度たべてみます。" }}
          en={{
            text: "My friends say that the cake at the shop is good. I will have a piece one of these days."
          }}
        />
      </div>
    )
  }

  const c13p5: GrammarInfoProps = {
    chapter: 13,
    section: 5,
    page: PageNumber.from(31),
    title: "なら",
    body: (
      <div>
        <p>
          A statement of the form “noun A なら predicate X” says that the predicate X applies only to A and is not more
          generally valid. The main ideas of a なら sentence, in other words, are “limitation” and “contrast”.
        </p>
        <p>An example question and answer:</p>

        <GenkiExampleDisplay
          book={2}
          jp={{ text: "Q: ブラジルに行ったことがありますか。" }}
          en={{ text: "Have you ever been to Brazil?" }}
        />

        <GenkiExampleDisplay
          book={2}
          jp={{ text: "A: メキシコなら行ったことがありますが、ブラジルは行ったことがありません。" }}
          en={{ text: "I’ve been to Mexico, but never been to Brazil." }}
        />
      </div>
    )
  }

  const c13p6: GrammarInfoProps = {
    chapter: 13,
    section: 6,
    page: PageNumber.of(31, 32),
    title: "Frequency (一週間に三回)",
    body: (
      <div>
        <p>You can describe the frequency of events over a period of time by using the following framework:</p>

        <GenkiStructureDisplay book={2} width={400}>
          <Container>
            <Row>
              <Col>
                <span className={styles.genkiTwo}>(period)</span>
                <span>{" に "}</span>
                <span className={styles.genkiTwo}>(frequency)</span>
              </Col>
              <Col>
                <span className={styles.genkiTwo}>(frequency)</span>
                <span>{" per "}</span>
                <span className={styles.genkiTwo}>(period)</span>
              </Col>
            </Row>
          </Container>
        </GenkiStructureDisplay>

        <GenkiExampleDisplay
          book={2}
          jp={{ text: "私は一週間に三回かみを洗います。" }}
          en={{ text: "I shampoo three times a week." }}
        />
      </div>
    )
  }

  return { c13p1, c13p2, c13p3, c13p4, c13p5, c13p6 }
}

export default UseGenkiChapter13
