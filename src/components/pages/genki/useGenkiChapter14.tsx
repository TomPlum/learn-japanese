import { GrammarInfoProps } from "../../learn/GrammarInfo"
import PageNumber from "../../../domain/learn/PageNumber"
import QuoteDisplay from "../../ui/display/QuoteDisplay"
import GenkiExampleDisplay from "../../ui/genki/GenkiExampleDisplay"
import GenkiStructureDisplay from "../../ui/genki/GenkiStructureDisplay"
import GenkiTable from "../../ui/table/GenkiTable"
import { Col, Container, Row } from "react-bootstrap"
import styles from "components/pages/GenkiGrammarPage/GenkiGrammarPage.module.scss"
import GenkiRelativePsychologyCircle from "../../ui/genki/GenkiRelativePsychologyCircle"
import GenkiComparisonDisplay from "../../ui/genki/GenkiComparisonDisplay"
import GenkiExampleTable from "../../ui/genki/GenkiExampleTable"

const UseGenkiChapter14 = () => {
  const c14p1: GrammarInfoProps = {
    chapter: 14,
    section: 1,
    page: PageNumber.of(50, 51),
    title: "Want (ほしい)",
    body: (
      <div>
        <p>
          ほしい means <QuoteDisplay chapter={14}>(I) want (something)</QuoteDisplay>. It is an adjective and conjugates
          as such. The object of desire is usually followed by the particle が. In negative sentences, the particle は
          is also used.
        </p>

        <GenkiExampleDisplay
          book={2}
          jp={{ text: "いい漢字のじしょがほしいです。" }}
          en={{ text: "I want a good kanji dictionary." }}
        />

        <p>
          ほしい is similar to たい, in that its use is primarily limited to the first person, the speaker. These words
          are called “private predicates”, and they refer to the inner sensations which are known only to the person
          feeling them. Therefore, one must use extra devices for sentences with private predicates as applied to the
          second or third person.
        </p>

        <GenkiExampleDisplay
          book={2}
          jp={{ text: "ロバートさんはコンピュゥターがほしいと言っていました。" }}
          en={{ text: "Robert says he wants a computer." }}
        />
      </div>
    )
  }

  const c14p2: GrammarInfoProps = {
    chapter: 14,
    section: 2,
    page: PageNumber.of(51, 52),
    title: "Possibility (かもしれません)",
    body: (
      <div>
        <p>
          With the expression でしょう, we can say a given state of affairs is probable or likely. The new
          sentence-final expression かもしれません, and its short form counterpart かもしれない, are much like でしょう,
          and mean that something is a “possibility”.
        </p>

        <p>The structure is as follows:</p>

        <GenkiStructureDisplay book={2} width={350}>
          <span>Short Form + </span>
          <span>かもしれません</span>
          <em style={{ float: "right", paddingRight: "5px" }}>Maybe...</em>
        </GenkiStructureDisplay>

        <p>For example:</p>

        <GenkiExampleDisplay
          book={2}
          jp={{ text: "あしたは雨がふるかもしれません。" }}
          en={{ text: "It may rain tomorrow." }}
        />

        <GenkiExampleDisplay
          book={2}
          jp={{ text: "田中さんより、すずきさんのほうがせが高いかもしれません。" }}
          en={{ text: "Suzuki is perhaps taller than Tanaka." }}
        />

        <GenkiTable chapter={14} maxWidth={400}>
          <thead>
            <tr>
              <th className={styles.genkiTwo}>Conjugation Examples</th>
              <th>Present Tense, Affirmative</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Verb</td>
              <td>行くかもしれません</td>
            </tr>
            <tr>
              <td>い Adjective</td>
              <td>さむいかもしれません</td>
            </tr>
            <tr>
              <td>な Adjective</td>
              <td>元気(な)かもしれません</td>
            </tr>
            <tr>
              <td>Noun + です</td>
              <td>先生かもしれあせん</td>
            </tr>
          </tbody>
        </GenkiTable>
      </div>
    )
  }

  const c14p3: GrammarInfoProps = {
    chapter: 14,
    section: 3,
    page: PageNumber.of(52, 53),
    title: "あげる / くれる / もらう",
    body: (
      <div>
        <p>
          Japanese has two verbs for giving. The choice between the pair depends on the direction of the transaction.
        </p>

        <p>
          Imagine a set of concentric spheres of relative psychological distances, with me at the center, you next to
          me, and all the others on the edge. When a thing moves away from the center, the transaction is described in
          terms of the verb あげる. When a thing moves toward the center, the verb we use is くれる.
        </p>

        <Container style={{ padding: 0 }}>
          <Row noGutters>
            <Col md={4} xs={12}>
              <GenkiRelativePsychologyCircle
                verb="あげる"
                relationship="moving away"
                situations={["I give to you", "You give to others", "I give to others"]}
              />
            </Col>

            <Col md={4} xs={12}>
              <GenkiRelativePsychologyCircle
                verb="くれる"
                relationship="moving closer"
                situations={["Somebody gives me", "You give me", "Somebody gives you"]}
              />
            </Col>

            <Col md={4} xs={12}>
              <GenkiRelativePsychologyCircle
                verb="あげる"
                relationship="staying away"
                situations={["Somebody gives to somebody else"]}
              />
            </Col>
          </Row>
        </Container>

        <p>
          With both あげる and くれる, the giver is the subject of the sentence, and is accompanied by the particle は
          or が. The recipient is accompanied by the particle に.
        </p>

        <GenkiStructureDisplay book={2} width={570} noPadding>
          <GenkiComparisonDisplay
            book={2}
            pre={
              <span>
                <span className={styles.genkiTwo}>(giver)</span>
                {" は/が "}
                <span className={styles.genkiTwo}>(recipient)</span>
                {" に"}
              </span>
            }
            meaning={
              <span>
                <span className={styles.genkiTwo}>(giver)</span>
                {" gives to "}
                <span className={styles.genkiTwo}>(recipient)</span>
              </span>
            }
            firstComparison={{ text: "あげる" }}
            secondComparison={{ text: "くれる" }}
          />
        </GenkiStructureDisplay>

        <p>Compare with the もらう sentence structure below which describes the same event.</p>

        <GenkiStructureDisplay book={2} width={550}>
          <span>
            <span className={styles.genkiTwo}>(recipient)</span>
            <span>{" は/が "}</span>
            <span className={styles.genkiTwo}>(giver)</span>
            <span>{" に / から もらう – "}</span>

            <span className={styles.genkiTwo}>(recipient)</span>
            <span>{" receives from "}</span>
            <span className={styles.genkiTwo}>(giver)</span>
          </span>
        </GenkiStructureDisplay>
      </div>
    )
  }

  const c14p4: GrammarInfoProps = {
    chapter: 14,
    section: 4,
    page: PageNumber.from(54),
    title: "たらどうですか",
    body: (
      <div>
        <p>
          たらどうですか after a verb conveys advice or recommendation. The initial た stands for the same ending as in
          the past tense short form of a verb in the affirmative. In casual speech, たらどうですか may be shortened to
          たらどう.
        </p>

        <GenkiStructureDisplay book={2} width={450}>
          <span>verb (short, past)</span>
          <span>{" + らどうですか "}</span>
          <span style={{ float: "right" }}>why dont you...</span>
        </GenkiStructureDisplay>

        <p>For example:</p>
        <GenkiExampleTable
          book={2}
          values={[
            {
              japanese: { value: "もっとべんきょうしたらどうですか。" },
              english: { value: "Why don’t you study harder?" }
            },
            {
              japanese: { value: "くすりをのんだらどうですか。" },
              english: { value: "How about taking some medicine?" }
            }
          ]}
        />

        <p>This pattern should not be used for extending visitations. Rather, use …ませんか</p>
      </div>
    )
  }

  const c14p5: GrammarInfoProps = {
    chapter: 14,
    section: 5,
    page: PageNumber.of(54, 55),
    title: "Number + も / Number + しか + Negative",
    body: (
      <div>
        <p>You can add も to the number word, when you want to say “as many as”.</p>

        <GenkiStructureDisplay book={2} width={350}>
          <p>
            <span>number + も</span>
            <span style={{ float: "right" }}>(as many as)</span>
          </p>
          <p style={{ margin: 0 }}>
            <span>number + しか ない</span>
            <span style={{ float: "right" }}>(as few as)</span>
          </p>
        </GenkiStructureDisplay>

        <p>For example:</p>
        <GenkiExampleDisplay
          jp={{ text: "きのうのパーテイーには学生が二十人も来ました。" }}
          en={{ text: "As many as twenty students showed up at the party yesterday." }}
          book={2}
        />

        <p>
          You can add しか to the number word and turn the predicate into a negative when you want to say “as few as” or
          “only”.
        </p>

        <p>For example:</p>
        <GenkiExampleDisplay
          jp={{ text: "私は日本語のじしょをいっさつしかもっていません。" }}
          en={{ text: "I have only one Japanese dictionary." }}
          book={2}
        />
      </div>
    )
  }

  return { c14p1, c14p2, c14p3, c14p4, c14p5 }
}

export default UseGenkiChapter14
