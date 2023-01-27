import { GrammarInfoProps } from "../../learn/GrammarInfo"
import PageNumber from "../../../domain/learn/PageNumber"
import GenkiStructureDisplay from "../../ui/genki/GenkiStructureDisplay"
import GenkiExampleDisplay from "../../ui/genki/GenkiExampleDisplay"
import styles from "../../../styles/sass/components/pages/GenkiGrammarPage.module.scss"
import GenkiTable from "../../ui/table/GenkiTable"
import { Col, Container, Row } from "react-bootstrap"
import { FirstMatch, Occurrences } from "../../ui/Underline"
import QuoteDisplay from "../../ui/display/QuoteDisplay"

const UseGenkiChapter17 = () => {
  const c17p1: GrammarInfoProps = {
    chapter: 17,
    section: 1,
    page: PageNumber.of(118, 119),
    title: "～そうです (I Hear)",
    body: (
      <div>
        <p>To report hearsay use the following predicates with そうです。</p>
        <p>When we use そうです, the reported speech retains the tense and the polarity of the original utterance.</p>

        <GenkiTable chapter={17}>
          <thead>
            <tr>
              <th className={styles.genkiTwo}>～そうです</th>
              <th>{}</th>
              <th>{}</th>
              <th>I hear that...</th>
              <th>It looks like...</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Verbs</td>
              <td>話す</td>
              <td>&#8594;</td>
              <td>話すそうです</td>
              <td>-</td>
            </tr>
            <tr>
              <td>い Adjective</td>
              <td>さびしい</td>
              <td>&#8594;</td>
              <td>さびしいそうです</td>
              <td>さびしそうです</td>
            </tr>
            <tr>
              <td>な Adjectives</td>
              <td>好きだ</td>
              <td>&#8594;</td>
              <td>好きだそうです</td>
              <td>好きそうです</td>
            </tr>
            <tr>
              <td>Noun + です</td>
              <td>学生だ</td>
              <td>&#8594;</td>
              <td>学生だそうです</td>
              <td>-</td>
            </tr>
          </tbody>
        </GenkiTable>

        <p>You can add the そうです of a report to a sentence ending in the short form.</p>
        <GenkiStructureDisplay book={2} width={820}>
          <Container>
            <Row>
              <Col>
                <p className={styles.genkiTwo}>
                  <em>If you heard someone say:</em>
                </p>
              </Col>
              <Col xs={1}>{}</Col>
              <Col>
                <p className={styles.genkiTwo}>
                  <em>You can report it as:</em>
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <GenkiExampleDisplay
                  book={2}
                  noIndent
                  jp={{ text: "「日本語の授業は楽しいです。」" }}
                  en={{ text: '"Our Japanese class is fun."' }}
                />
              </Col>
              <Col xs={1}>&#8594;</Col>
              <Col>
                <GenkiExampleDisplay
                  book={2}
                  noIndent
                  jp={{
                    text: "「日本語の授業は楽しいそうです。」",
                    underline: new FirstMatch("そうです")
                  }}
                  en={{ text: '"I\'ve heard that their Japanese class is fun."' }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <GenkiExampleDisplay
                  book={2}
                  noIndent
                  jp={{ text: "「先生はとても親切です。」" }}
                  en={{ text: '"Our professor is very kind."' }}
                />
              </Col>
              <Col xs={1}>&#8594;</Col>
              <Col>
                <GenkiExampleDisplay
                  book={2}
                  noIndent
                  jp={{
                    text: "「先生はとても親切だそうです。」",
                    underline: new FirstMatch("そうです")
                  }}
                  en={{ text: '"Our professor is very kind."' }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <GenkiExampleDisplay
                  book={2}
                  noIndent
                  jp={{ text: "「今日は授業がありませんでした。」" }}
                  en={{ text: '"We did not have a class today."' }}
                />
              </Col>
              <Col xs={1}>&#8594;</Col>
              <Col>
                <GenkiExampleDisplay
                  book={2}
                  noIndent
                  jp={{
                    text: "「今日は授業がなったそうです。」",
                    underline: new FirstMatch("そうです")
                  }}
                  en={{ text: "\"I've heard that they didn't have a class that day.\"" }}
                />
              </Col>
            </Row>
          </Container>
        </GenkiStructureDisplay>
      </div>
    )
  }

  const c17p2: GrammarInfoProps = {
    chapter: 17,
    section: 2,
    page: PageNumber.from(119),
    title: "～って",
    body: (
      <div>
        <p>
          In informal speech, you can add って at the end of a sentence, instead of そうです、to quote what you heard.
        </p>

        <p>Thus, when your friend Mary says:</p>
        <GenkiExampleDisplay
          book={2}
          noIndent
          jp={{ text: "「今日は忙しいです。あした、試験があるんです」" }}
          en={{ text: '"I\'m busy today. I have an exam tomorrow."' }}
        />

        <p>You can report it as:</p>
        <GenkiExampleDisplay
          book={2}
          noIndent
          jp={{
            text: "メアリーさん、今日は忙しいって。あした、試験があるんだって",
            underline: new Occurrences("って", [1, 2])
          }}
          en={{ text: "Mary says she’s busy today. She says she has a exam tomorrow." }}
        />

        <hr className={styles.hr} />

        <p>You can also use って in place of the quotation particle と before verbs like いう:</p>
        <GenkiExampleDisplay
          book={2}
          noIndent
          jp={{ text: "あきらさんさんはなんていってた。" }}
          en={{ text: "What did Akira say?" }}
        />
      </div>
    )
  }

  const c17p3: GrammarInfoProps = {
    chapter: 17,
    section: 3,
    page: PageNumber.of(119, 121),
    title: "～たら",
    body: (
      <div>
        <p>
          たら is one of several words in Japanese that refer to conditional <em>(if)</em> dependence.
        </p>
        <p>
          When we say <QuoteDisplay chapter={17}>A　たら　B</QuoteDisplay> we must mean that B is valid, contingent on
          the fulfillment of A.
        </p>

        <p>For example:</p>
        <GenkiExampleDisplay
          book={2}
          noIndent
          jp={{ text: "日本に行ったら、着物を買います。" }}
          en={{ text: "I will buy a kimono if and when I got to Japan." }}
        />

        <p>The initial た in たら comes from the short form paste tense endings of predicates.</p>
        <GenkiTable chapter={17}>
          <thead>
            <tr>
              <th className={styles.genkiTwo}>~たら</th>
              <th>short form (aff.)</th>
              <th>{}</th>
              <th>~たら (if...)</th>
            </tr>
            <tr className={styles.rowSection}>
              <th>{}</th>
              <th>short form (neg.)</th>
              <th>{}</th>
              <th>{}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Verbs</td>
              <td>読む</td>
              <td>&#8594;</td>
              <td>読んだら</td>
            </tr>
            <tr className={styles.rowSection}>
              <td>{}</td>
              <td>読まない</td>
              <td>&#8594;</td>
              <td>読まなかったら</td>
            </tr>
            <tr>
              <td>い Adjectives</td>
              <td>やさしい</td>
              <td>&#8594;</td>
              <td>やさしかったら</td>
            </tr>
            <tr className={styles.rowSection}>
              <td>{}</td>
              <td>やさしくらい</td>
              <td>&#8594;</td>
              <td>やさしくなかったら</td>
            </tr>
            <tr>
              <td>な Adjectives</td>
              <td>静かだ</td>
              <td>&#8594;</td>
              <td>静かだったら</td>
            </tr>
            <tr className={styles.rowSection}>
              <td>{}</td>
              <td>静かじゃない</td>
              <td>&#8594;</td>
              <td>静かじゃなかったら</td>
            </tr>
            <tr>
              <td>Noun + です</td>
              <td>休みだ</td>
              <td>&#8594;</td>
              <td>休みだったら</td>
            </tr>
            <tr>
              <td>{}</td>
              <td>休みじゃない</td>
              <td>&#8594;</td>
              <td>休みじゃなかったら</td>
            </tr>
          </tbody>
        </GenkiTable>
      </div>
    )
  }

  const c17p4: GrammarInfoProps = {
    chapter: 17,
    section: 4,
    page: PageNumber.from(121),
    title: "～なくてもいいです",
    body: (
      <div>
        <p>
          To describe what you do not need to do, take a negative sentence in the short form, drop the final い of ない,
          and add くともいいです. なくてis the negative <em>te</em>-form.
        </p>

        <GenkiStructureDisplay book={2} width={400}>
          <span>{"~ない "}</span>
          <span className={styles.arrow}>&#8594;</span>
          <span>{" ～なくてもいいです "}</span>
          <span style={{ float: "right" }}>does not need to...</span>
        </GenkiStructureDisplay>

        <p>For example:</p>
        <GenkiExampleDisplay
          book={2}
          noIndent
          jp={{ text: "くつをぬがくてもいいです。" }}
          en={{ text: "You do not need to take off you shoes." }}
        />
        <GenkiExampleDisplay
          book={2}
          noIndent
          jp={{ text: "プレゼントはたかくなくてもいいです。" }}
          en={{ text: "The present does not need to be expensive." }}
        />
      </div>
    )
  }

  const c17p5: GrammarInfoProps = {
    chapter: 17,
    section: 5,
    page: PageNumber.from(122),
    title: "～みたいです",
    body: (
      <div>
        <p>
          みたいです follows a noun and expresses the idea that something or somebody resembles the thing or the person
          described by the noun. The resemblance noted is usually in terms of external characteristics, but not
          necessarily so.
        </p>

        <GenkiStructureDisplay book={2} width={300}>
          <span>{"noun/verb + "}</span>
          <span>{" みたいです "}</span>
          <span style={{ float: "right" }}>it looks like...</span>
        </GenkiStructureDisplay>

        <p>For example:</p>
        <GenkiExampleDisplay
          book={2}
          noIndent
          jp={{ text: "あめがふったみたいです。" }}
          en={{ text: "I looks like it has rained." }}
        />
        <GenkiExampleDisplay
          book={2}
          noIndent
          jp={{ text: "あのひとはおなかがすいているみたいです。" }}
          en={{ text: "It looks like that person is hungry." }}
        />
      </div>
    )
  }

  const c17p6: GrammarInfoProps = {
    chapter: 17,
    section: 6,
    page: PageNumber.of(122, 123),
    title: "～前に / ～てから",
    body: (
      <div>
        <p>
          You can use the present tense short form and 前に to describe the event <em>before</em> which something
          happens.
        </p>

        <GenkiStructureDisplay book={2} width={400}>
          <span>{"verb A (short present) + 前に "}</span>
          <span className={styles.arrow}>{" verb B "}</span>
          <em style={{ float: "right" }}>B before A</em>
        </GenkiStructureDisplay>

        <p>For example:</p>
        <GenkiExampleDisplay
          book={2}
          noIndent
          jp={{ text: "くににかえるまえに、もいちどとうきょうにいきます。" }}
          en={{ text: "I will go to Tokyo one more time before I go back." }}
        />
        <GenkiExampleDisplay
          book={2}
          noIndent
          jp={{ text: "にほんにくるまえに、いちがっきにほんごをべんきょうしました。" }}
          en={{ text: "I studied Japanese for one semester before I came to Japan." }}
        />

        <hr className={styles.hr} />

        <p>
          To describe an event after which another thing happens, you can use the <em>te</em>-form of a verb + から.
        </p>

        <GenkiStructureDisplay book={2} width={400}>
          <span>{"verb A + てから "}</span>
          <span className={styles.arrow}>{" verb B "}</span>
          <em style={{ float: "right" }}>A, and then B / B after A</em>
        </GenkiStructureDisplay>

        <p>For example:</p>
        <GenkiExampleDisplay
          book={2}
          noIndent
          jp={{ text: "べんきょうしてから、ともだちにてがみをかきました。" }}
          en={{ text: "I studied and then wrote letters to my friends." }}
        />
        <GenkiExampleDisplay
          book={2}
          noIndent
          jp={{ text: "けんさんがきてから、たべましょう。" }}
          en={{ text: "Why don’t we start eating after Ken has arrived." }}
        />
      </div>
    )
  }

  return { c17p1, c17p2, c17p3, c17p4, c17p5, c17p6 }
}

export default UseGenkiChapter17
