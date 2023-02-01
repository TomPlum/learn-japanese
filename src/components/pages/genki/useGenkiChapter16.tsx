import { GrammarInfoProps } from "../../learn/GrammarInfo"
import PageNumber from "../../../domain/learn/PageNumber"
import { Col, Container, Row } from "react-bootstrap"
import GenkiRelativePsychologyCircle from "../../ui/genki/GenkiRelativePsychologyCircle"
import GenkiExampleDisplay from "../../ui/genki/GenkiExampleDisplay"
import { FirstMatch, MultipleFirstMatch } from "../../ui/Underline"
import styles from "../../../styles/sass/components/pages/GenkiGrammarPage.module.scss"
import GenkiStructureDisplay from "../../ui/genki/GenkiStructureDisplay"
import GenkiComparisonDisplay from "../../ui/genki/GenkiComparisonDisplay"
import GenkiUnderlineDisplay from "../../ui/genki/GenkiUnderlineDisplay"

const UseGenkiChapter16 = () => {
  const c16p1: GrammarInfoProps = {
    chapter: 16,
    section: 1,
    page: PageNumber.of(96, 97),
    title: "てくれ / てあげる/ てまらう",
    body: (
      <div>
        <p>
          The verbs くれる、あげる、and もらう describe transactions of things. When these verbs follow the te-form fo a
          verb, they describe the giving and receiving of services.
        </p>

        <Container style={{ padding: 0 }}>
          <Row noGutters>
            <Col md={4} xs={12}>
              <GenkiRelativePsychologyCircle
                verb="te-form + あげる"
                relationship="for somebody other than me"
                situations={["I do something for you.", "You do something for others.", "I do something for others."]}
              />
            </Col>

            <Col md={4} xs={12}>
              <GenkiRelativePsychologyCircle
                verb="te-form + くれる"
                relationship="for me or somebody close to me"
                situations={[
                  "Somebody does something for me.",
                  "You do something for me",
                  "Somebody does something for you."
                ]}
              />
            </Col>

            <Col md={4} xs={12}>
              <GenkiRelativePsychologyCircle
                verb="te-form + あげる"
                relationship="for somebody other than me"
                situations={["Somebody does something for somebody else."]}
              />
            </Col>
          </Row>
        </Container>

        <p>
          We use the te-form + あげる when we do something for the sake of others, or somebody does something for
          somebody else. The addition of the helping verb あげる does not change the basic meaning of the sentences, but
          puts focus on the fact that the actions were performed “on demand” or “as a favor”
        </p>
        <p>For example:</p>
        <GenkiExampleDisplay
          book={2}
          jp={{ text: "私は妹にお金を貸してあげました。", underline: new FirstMatch("あげました") }}
          en={{ text: "I (generously) lent my sister money (to help her out of her destitute conditions)." }}
          compare={{ text: "私は妹にお金を貸しました。 [an objective statement]" }}
        />

        <hr className={styles.hr} />

        <p>We use くれる when somebody does something for us.</p>
        <p>For example:</p>
        <GenkiExampleDisplay
          book={2}
          jp={{ text: "友だちが宿題を手伝ってくれます。", underline: new FirstMatch("くれます") }}
          en={{ text: "A friend helps me with my homework (for which I am grateful)." }}
        />

        <hr className={styles.hr} />

        <p>
          We use the te-form + もらう to say that we get, persuade or arrange for somebody to do something for us. In
          other words, we &quot;receive&quot; somebody&apos;s favour. The person performing the action for us accompanied by the
          particle に.*/-
        </p>
        <p>For example:</p>
        <GenkiExampleDisplay
          book={2}
          jp={{
            text: "私は友だちに宿題を手伝ってもらいました。",
            underline: new MultipleFirstMatch("に", "もらいました")
          }}
          en={{ text: "I got a friend of mine to help me with my homework." }}
        />
      </div>
    )
  }

  const c16p2: GrammarInfoProps = {
    chapter: 16,
    section: 2,
    page: PageNumber.from(98),
    title: "~ていただけませんか",
    body: (
      <div>
        <p>
          There are three versions of this te-form helper verb that can be used to make a request. They differ in the
          degrees of politeness shown to the person you are asking.
        </p>

        <GenkiStructureDisplay book={2} width={300} noPadding>
          <GenkiComparisonDisplay
            pre="~て"
            firstComparison={{ text: "いただけませんか (polite)" }}
            secondComparison={{ text: "くれませんか" }}
            thirdComparison={{ text: "くれない (casual)" }}
            ignoreSecondBrace
            book={2}
          />
        </GenkiStructureDisplay>

        <hr className={styles.hr} />

        <p>
          We use the <em>te</em>-form of a verb + いただけませんか to make a polite request. This is more appropriate
          that ください when you request a favour from a non-peer such as your professor or your boss or from a
          stranger.
        </p>

        <p>For example:</p>
        <GenkiExampleDisplay
          book={2}
          jp={{ text: "手伝っていただけませんか。" }}
          en={{ text: "Would you lend me a hand?" }}
        />

        <hr className={styles.hr} />

        <p>
          The <em>te</em>-form + くれませんか is a request which is roughly equal in the degree of politeness to
          ください. くれませんか of course comes from the verb くれる. This is probably the form most appropriate in the
          host-family context.
        </p>

        <p>For example:</p>
        <GenkiExampleDisplay
          book={2}
          jp={{ text: "ちょっと待ってくれませんか。" }}
          en={{ text: "Would you wait for a second?" }}
        />

        <hr className={styles.hr} />

        <p>
          The <em>te</em>-form + くれない, or the <em>te</em>-form by itself, to ask for a favour in a very casual way.
          This is good for speaking with members of your peer group.
        </p>

        <p>For example:</p>
        <GenkiExampleDisplay
          book={2}
          jp={{ text: "それ取ってくれない? or それ取って。" }}
          en={{ text: "Pick that thing up (and pass it to me), will you?" }}
        />
      </div>
    )
  }

  const c16p3: GrammarInfoProps = {
    chapter: 16,
    section: 3,
    page: PageNumber.from(99),
    title: "~といい",
    body: (
      <div>
        <p>You can use the present tense short form + といいですね to say that you hope something nice happens.</p>

        <GenkiStructureDisplay book={2} width={600} noPadding>
          <GenkiComparisonDisplay
            pre="(short, present) と"
            firstComparison={{ text: "いいですね / いいね", description: "I hope... (for you / them)" }}
            secondComparison={{
              text: "いいんですが / いいんだけど",
              description: "I hope... (for myself)"
            }}
            ignoreSecondBrace
            book={2}
          />
        </GenkiStructureDisplay>

        <p>For example:</p>
        <GenkiExampleDisplay
          book={2}
          jp={{ text: "いいアルバイトがあるといいですね。" }}
          en={{ text: "I hope that you find a good part time job." }}
        />

        <p>
          To say what you hope for your own good, you can use といいんですが. This shows the speaker’s attitude is more
          tentative and makes the sentence sound more modest.
        </p>

        <p>For example:</p>
        <GenkiExampleDisplay
          book={2}
          jp={{ text: "しけんがやさしいといいんですが。" }}
          en={{ text: "I’m hoping that the exam is easy." }}
        />
      </div>
    )
  }

  const c16p4: GrammarInfoProps = {
    chapter: 16,
    section: 4,
    page: PageNumber.of(99, 102),
    title: "~時",
    body: (
      <div>
        <p>We use the word 時 (とき) to describe when something happens or happened.</p>

        <GenkiStructureDisplay book={2} width={300}>
          <div>
            <GenkiUnderlineDisplay underline={new FirstMatch("sentence A 時")} book={2}>
              <span>sentence A 時, </span>
            </GenkiUnderlineDisplay>
            <GenkiUnderlineDisplay underline={new FirstMatch("sentence B")} book={2}>
              <span>sentence B。</span>
            </GenkiUnderlineDisplay>
            <span style={{ float: "right" }}>When A, B.</span>
          </div>
        </GenkiStructureDisplay>

        <p>Sentence A always ends in short form, either in the past or present tense.</p>

        <p>
          If (at the time the main event B takes place) A is current or is still in “in the future”, use the present
          tense in A.
        </p>

        <p>If (at the time of main event B) A is already “in the past” use the past tense in A.</p>
      </div>
    )
  }

  const c16p5: GrammarInfoProps = {
    chapter: 16,
    section: 5,
    page: PageNumber.from(102),
    title: "~てすみませんでした",
    body: (
      <div>
        <p>
          You use the <em>te</em>-form of a verb to describe the things you have done that you want to apologize for.
        </p>

        <GenkiStructureDisplay book={2} width="auto" noPadding>
          <GenkiComparisonDisplay
            book={2}
            pre="~て"
            meaning="Sorry for doing..."
            firstComparison={{ text: "すみませんでした", description: "(polite)" }}
            secondComparison={{ text: "ごめん", description: "(casual)" }}
          />
        </GenkiStructureDisplay>

        <p>For example:</p>
        <GenkiExampleDisplay
          book={2}
          jp={{ text: "デートのやくそくをわすれて、ごめん。" }}
          en={{ text: "Sorry that I stood you up." }}
        />

        <hr className={styles.hr} />

        <p>Use …なくてto apologize for something that you failed to do.</p>

        <p>For example:</p>
        <GenkiExampleDisplay
          book={2}
          jp={{ text: "しゅくだいをもっていなくて、すみませんでした。" }}
          en={{ text: "I am sorry for not bringing in the work." }}
        />
      </div>
    )
  }

  return { c16p1, c16p2, c16p3, c16p4, c16p5 }
}

export default UseGenkiChapter16
