import { GrammarInfoProps } from "../../learn/GrammarInfo"
import PageNumber from "../../../domain/learn/PageNumber"
import GenkiExampleTable from "../../ui/genki/GenkiExampleTable"
import GenkiTable from "../../ui/table/GenkiTable"
import styles from "../../../styles/sass/components/pages/GenkiGrammarPage.module.scss"
import GenkiUnderlineDisplay from "../../ui/genki/GenkiUnderlineDisplay"
import { FirstMatch, MultipleFirstMatch } from "../../ui/Underline"
import QuoteDisplay from "../../ui/display/QuoteDisplay"
import GenkiStructureDisplay from "../../ui/genki/GenkiStructureDisplay"
import { Col, Container, Row } from "react-bootstrap"
import GenkiComparisonDisplay from "../../ui/genki/GenkiComparisonDisplay"
import GenkiExampleDisplay from "../../ui/genki/GenkiExampleDisplay"

const UseGenkiChapter5 = () => {
  const c5p1: GrammarInfoProps = {
    chapter: 5,
    section: 1,
    page: PageNumber.of(132, 133),
    title: "Adjectives (Present Tense)",
    body: (
      <div>
        <p>
          There are two types of adjectives in Japanese: い-adjectives and な-adjectives. い and な are their last
          syllables when they modify nouns.
        </p>

        <GenkiTable chapter={5}>
          <thead>
            <tr>
              <th>Present Tense</th>
              <th>Affirmative</th>
              <th>Negative</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>い Adjectives</td>
            </tr>
            <tr>
              <td>
                <span className={[styles.genkiOne, styles.indent].join(" ")}>e.g.</span> おもしろい
              </td>
              <td>
                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("です")}>
                  <span>おもしろいです</span>
                </GenkiUnderlineDisplay>
              </td>
              <td>
                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("くないです")}>
                  <span>おもしろくないです</span>
                </GenkiUnderlineDisplay>
              </td>
            </tr>
            <tr>
              <td>{}</td>
              <td>{}</td>
              <td className={styles.indent}>
                <div className={styles.indent}>
                  <GenkiUnderlineDisplay book={1} underline={new FirstMatch("くありません")}>
                    <span>(or おもしろくありません)</span>
                  </GenkiUnderlineDisplay>
                </div>
              </td>
            </tr>
            <tr>
              <td>{}</td>
              <td>
                <em>It is interesting.</em>
              </td>
              <td>
                <em>It is not interesting.</em>
              </td>
            </tr>
            <tr>
              <td>な Adjectives</td>
            </tr>
            <tr>
              <td>
                <span className={[styles.genkiOne, styles.indent].join(" ")}>e.g.</span> 元気(な)
              </td>
              <td>
                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("です")}>
                  <span>元気です</span>
                </GenkiUnderlineDisplay>
              </td>
              <td>
                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("じゃないです")}>
                  <span>元気じゃないです</span>
                </GenkiUnderlineDisplay>
              </td>
            </tr>
            <tr>
              <td>{}</td>
              <td>{}</td>
              <td>
                <div className={styles.indent}>
                  <GenkiUnderlineDisplay book={1} underline={new FirstMatch("じゃありません")}>
                    <span>(or 元気じゃありません)</span>
                  </GenkiUnderlineDisplay>
                </div>
              </td>
            </tr>
            <tr>
              <td>{}</td>
              <td>
                <em>She is healthy.</em>
              </td>
              <td>
                <em>She is not healthy.</em>
              </td>
            </tr>
          </tbody>
        </GenkiTable>

        <p>For example:</p>
        <GenkiExampleTable
          book={1}
          values={[
            {
              japanese: { value: "A: その本はおもしろいですか。", hideRomaji: true },
              english: { value: "Is that book interesting?" }
            },
            {
              japanese: { value: "B: いいえ, あまりおもしろくないです。", hideRomaji: true },
              english: { value: "No, it is not very interesting." }
            }
          ]}
        />
        <GenkiExampleTable
          book={1}
          values={[
            {
              japanese: { value: "A: 今日, ひまですか。", hideRomaji: true },
              english: { value: "Are you free today?" }
            },
            {
              japanese: { value: "B: いいえ, ひまじゃないです。", hideRomaji: true },
              english: { value: "No, I'm not." }
            }
          ]}
        />

        <p>
          Unlike verb, adjectives conjugate fairly uniformly. The only irregularity worth noting is the adjective いい
          (good). The first syllable of いい is changed to よ in all forms except the dictionary form. Compound
          adjectives like かっこいい that are built with いい follow this syllable change and we say かっこよくないです.
        </p>

        <GenkiTable chapter={5}>
          <thead>
            <tr>
              <th>Present Tense (Irregular)</th>
              <th>Affirmative</th>
              <th>Negative</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>いい</td>
              <td>いいです</td>
              <td>
                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("よ")}>
                  <span>よくないです</span>
                </GenkiUnderlineDisplay>
              </td>
            </tr>
            <tr>
              <td>{}</td>
              <td>{}</td>
              <td className={styles.indent}>
                <div className={styles.indent}>
                  <GenkiUnderlineDisplay book={1} underline={new FirstMatch("よ")}>
                    <span>(or よくありません)</span>
                  </GenkiUnderlineDisplay>
                </div>
              </td>
            </tr>
          </tbody>
        </GenkiTable>
      </div>
    )
  }

  const c5p2: GrammarInfoProps = {
    chapter: 5,
    section: 2,
    page: PageNumber.of(133, 134),
    title: "Adjectives (Past Tense)",
    body: (
      <div>
        <p>
          With い-adjectives, you change the last い to かったです in the affirmative. In the negative, you only need to
          change the present tense to くない to くなかったです. な-adjectives are again just like nouns. Don&apos;t confuse
          the two patterns, it is wrong to say{" "}
          <QuoteDisplay chapter={5} incorrect>
            さむいでした
          </QuoteDisplay>
          .
        </p>

        <GenkiTable chapter={5}>
          <thead>
            <tr>
              <th>Past Tense</th>
              <th>Affirmative</th>
              <th>Negative</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>い Adjectives</td>
            </tr>
            <tr>
              <td>
                <span className={[styles.genkiOne, styles.indent].join(" ")}>e.g.</span> おもしろい
              </td>
              <td>
                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("かったです")}>
                  <span>おもしろかったです</span>
                </GenkiUnderlineDisplay>
              </td>
              <td>
                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("くなかったです")}>
                  <span>おもしろくなかったです</span>
                </GenkiUnderlineDisplay>
              </td>
            </tr>
            <tr>
              <td>{}</td>
              <td>{}</td>
              <td className={styles.indent}>
                <div className={styles.indent}>
                  <GenkiUnderlineDisplay book={1} underline={new FirstMatch("くありませんでした")}>
                    <span>(or おもしろくありませんでした)</span>
                  </GenkiUnderlineDisplay>
                </div>
              </td>
            </tr>
            <tr>
              <td>{}</td>
              <td>
                <em>It was interesting.</em>
              </td>
              <td>
                <em>It was not interesting.</em>
              </td>
            </tr>
            <tr>
              <td>な Adjectives</td>
            </tr>
            <tr>
              <td>
                <span className={[styles.genkiOne, styles.indent].join(" ")}>e.g.</span> 元気(な)
              </td>
              <td>
                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("でした")}>
                  <span>元気でした</span>
                </GenkiUnderlineDisplay>
              </td>
              <td>
                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("じゃなかったです")}>
                  <span>元気じゃなかったです</span>
                </GenkiUnderlineDisplay>
              </td>
            </tr>
            <tr>
              <td>{}</td>
              <td>{}</td>
              <td>
                <div className={styles.indent}>
                  <GenkiUnderlineDisplay book={1} underline={new FirstMatch("じゃありませんでした")}>
                    <span>(or 元気じゃありませんでした)</span>
                  </GenkiUnderlineDisplay>
                </div>
              </td>
            </tr>
            <tr>
              <td>{}</td>
              <td>
                <em>She was healthy.</em>
              </td>
              <td>
                <em>She was not healthy.</em>
              </td>
            </tr>
          </tbody>
        </GenkiTable>

        <p>For example:</p>
        <GenkiExampleTable
          book={1}
          values={[
            {
              japanese: { value: "A: テストは難しかったですか。。", hideRomaji: true },
              english: { value: "Was the exam difficult?" }
            },
            {
              japanese: { value: "B: いいえ, ぜんぜん難しくなかったです。", hideRomaji: true },
              english: { value: "No, it was not difficult at all." }
            }
          ]}
        />
        <GenkiExampleTable
          book={1}
          values={[
            {
              japanese: { value: "A: その町はにぎやかなでしたか。", hideRomaji: true },
              english: { value: "Was the town lively?" }
            },
            {
              japanese: { value: "B: いいえ, にぎやかじゃなかったです。", hideRomaji: true },
              english: { value: "No, it was not lively." }
            }
          ]}
        />

        <hr className={styles.hr} />

        <p>The い-adjective いい (good) is again irregular. Its first syllable is changed to よ.</p>

        <GenkiTable chapter={5}>
          <thead>
            <tr>
              <th>Past Tense (Irregular)</th>
              <th>Affirmative</th>
              <th>Negative</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>いい</td>
              <td>
                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("よ")}>
                  <span>よかったです</span>
                </GenkiUnderlineDisplay>
              </td>
              <td>
                <GenkiUnderlineDisplay book={1} underline={new FirstMatch("よ")}>
                  <span>よくなかったです</span>
                </GenkiUnderlineDisplay>
              </td>
            </tr>
            <tr>
              <td>{}</td>
              <td>{}</td>
              <td className={styles.indent}>
                <div className={styles.indent}>
                  <GenkiUnderlineDisplay book={1} underline={new FirstMatch("よ")}>
                    <span>(or よくありませんでした)</span>
                  </GenkiUnderlineDisplay>
                </div>
              </td>
            </tr>
          </tbody>
        </GenkiTable>
      </div>
    )
  }

  const c5p3: GrammarInfoProps = {
    chapter: 5,
    section: 3,
    page: PageNumber.from(134),
    title: "Adjectives (Noun Modification)",
    body: (
      <div>
        <p>
          You can use い-adjectives and な-adjectives to modify nouns. Place the dictionary form of an い-adjective
          before the noun you want to modify. With な-adjectives, you see な, which was missing before です, return.
        </p>

        <GenkiStructureDisplay book={1}>
          <Container>
            <Row>
              <Col>い-adjectives:</Col>
              <Col>おもしろい映画</Col>
              <Col>an interesting movie</Col>
            </Row>
            <Row>
              <Col>な-adjectives:</Col>
              <Col>きれいな写真</Col>
              <Col>a beautiful picture</Col>
            </Row>
          </Container>
        </GenkiStructureDisplay>

        <p>For example:</p>

        <GenkiExampleTable
          book={1}
          values={[
            {
              japanese: { value: "きのう, おもしろい映画を見ました。", hideRomaji: true },
              english: { value: "I saw an interesting move yesterday." }
            },
            {
              japanese: { value: "山下先生はこわい先生です。", hideRomaji: true },
              english: { value: "Professor Yamashita is a scary teacher." }
            },
            {
              japanese: { value: "京都できれいな写真を撮りました。", hideRomaji: true },
              english: { value: "I took a beautiful picture in Kyoto." }
            },
            {
              japanese: { value: "ここはとてもにぎやかな町です。", hideRomaji: true },
              english: { value: "This is a very vibrant city." }
            }
          ]}
        />
      </div>
    )
  }

  const c5p4: GrammarInfoProps = {
    chapter: 5,
    section: 4,
    page: PageNumber.from(135),
    title: "好き(な）/ きらい(な）",
    body: (
      <div>
        <p>The pattern for sentences with すき（な）and きらい（な）is as follows:</p>
        <GenkiStructureDisplay book={1} noPadding width={600}>
          <Container>
            <Row noGutters>
              <Col>
                <GenkiComparisonDisplay
                  book={1}
                  centerComparisons
                  pre="X は Y が"
                  firstComparison={{ text: "好き" }}
                  secondComparison={{ text: "きらい" }}
                  post="です。"
                />
              </Col>
              <Col>
                <GenkiComparisonDisplay
                  book={1}
                  centerComparisons
                  pre="X"
                  firstComparison={{ text: "likes" }}
                  secondComparison={{ text: "dislikes" }}
                  post="Y."
                />
              </Col>
            </Row>
          </Container>
        </GenkiStructureDisplay>

        <p>For example</p>
        <GenkiExampleDisplay
          book={1}
          jp={{ text: "ロバートさんは日本語のクラスが好きです。", underline: new FirstMatch("好きです") }}
          en={{ text: "Robert likes Japanese classes.", underline: new FirstMatch("likes") }}
        />
        <GenkiExampleDisplay
          book={1}
          jp={{ text: "山下先生は魚がきらいです。", underline: new FirstMatch("きらいです") }}
          en={{ text: "Professor Yamashita dislikes fish.", underline: new FirstMatch("dislikes") }}
        />

        <p>
          If you like or dislike something (or somebody) very much, you can use the intensified form of 好きです and
          きらいです, namely 大好きです (like very much) and 大きらいです (hate), which are more often used than the
          degree modifier とても in combination with 好きです and きらいです.
        </p>

        <p>For example</p>
        <GenkiExampleDisplay
          book={1}
          jp={{ text: "たけしさんはコーヒーが大好きです。", underline: new FirstMatch("大好きです") }}
          en={{ text: "Takeshi likes coffee a lot.", underline: new MultipleFirstMatch("likes", "a lot") }}
        />
        <GenkiExampleDisplay
          book={1}
          jp={{ text: "ソラさんはなっとうが大きらいです。", underline: new FirstMatch("大きらいです") }}
          en={{ text: "Sora hates natto (Japanese fermented soybeans).", underline: new FirstMatch("hates") }}
        />

        <p>If you wanted to be neutral and say that you neither like nor dislike something, you could say:</p>
        <GenkiExampleDisplay
          book={1}
          jp={{ text: "好きでもきらいでもありません。" }}
          en={{ text: "I neither like nor dislike (it)." }}
        />

        <p>You can use 好きな and きらいな may be used as noun modifiers. For example, you can say things like:</p>
        <GenkiExampleDisplay
          book={1}
          jp={{ text: "これはわたしのすきなテレビです。", underline: new FirstMatch("わたしのすきな") }}
          en={{ text: "This is my favorite TV program.", underline: new FirstMatch("my favorite") }}
        />
      </div>
    )
  }

  const c5p5: GrammarInfoProps = {
    chapter: 5,
    section: 5,
    page: PageNumber.from(136),
    title: "～ましょう / ～ましょうか",
    body: (
      <div>
        <p>
          The ending of the long form of a verb can be replaced with ～ましょう or ～ましょうか to suggest a plan of
          action.
        </p>

        <p>For example</p>
        <GenkiExampleDisplay
          book={1}
          jp={{ text: "一緒に図書館で勉強しましょう。", underline: new FirstMatch("ましょう") }}
          en={{ text: "Let’s study in the library together." }}
        />
        <GenkiExampleDisplay
          book={1}
          jp={{ text: "喫茶店でコーヒーを飲みましょうか。", underline: new FirstMatch("ましょうか") }}
          en={{ text: "Shall we drink coffee at a coffee shop together?" }}
        />
      </div>
    )
  }

  const c5p6: GrammarInfoProps = {
    chapter: 5,
    section: 6,
    page: PageNumber.from(136),
    title: "Counting",
    body: (
      <div>
        <p>
          Japanese used different number words for different kinds of items. For example, the words used for counting
          people are different from the words used for counting books. It is important to keep in mind that the number
          words come after the item they are counting.
        </p>

        <p>For example</p>
        <GenkiExampleDisplay
          book={1}
          jp={{
            text: "リーさんは Tシャツを三枚買いました。",
            underline: new MultipleFirstMatch("Tシャツ", "三枚")
          }}
          en={{ text: "Lee bought three stamps." }}
        />
      </div>
    )
  }

  return { c5p1, c5p2, c5p3, c5p4, c5p5, c5p6 }
}

export default UseGenkiChapter5
