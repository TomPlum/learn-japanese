import { GrammarInfoProps } from "../../learn/GrammarInfo";
import PageNumber from "../../../domain/learn/PageNumber";
import { Col, Container, Row } from "react-bootstrap";
import GenkiRelativePsychologyCircle from "../../ui/display/GenkiRelativePsychologyCircle";
import GenkiExampleDisplay from "../../ui/display/GenkiExampleDisplay";
import { FirstMatch, MultipleFirstMatch } from "../../ui/Underline";
import styles from "../../../styles/sass/components/pages/GenkiGrammarPage.module.scss";

const GenkiChapter16 = () => {
    const c16p1: GrammarInfoProps = {
        chapter: 16,
        section: 1,
        page: PageNumber.of(96, 97),
        title: "てくれ / てあげる/ てまらう",
        body: (
            <div>
                <p>The verbs くれる、あげる、and もらう describe transactions of things.
                    When these verbs follow the te-form fo a verb, they describe the giving and receiving of services.
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
                                situations={["Somebody does something for me.", "You do something for me", "Somebody does something for you."]}
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

                <p>We use the te-form + あげる when we do something for the sake of others, or somebody does something for somebody else.
                    The addition of the helping verb あげる does not change the basic meaning of the sentences,
                    but puts focus on the fact that the actions were performed “on demand” or “as a favor”
                </p>
                <p>For example:</p>
                <GenkiExampleDisplay
                    book={2}
                    jp={{ text: "私は妹にお金を貸してあげました。", underline: new FirstMatch("あげました") }}
                    en={{ text: "I (generously) lent my sister money (to help her out of her destitute conditions).", underline: new FirstMatch("generously") }}
                    compare={{ text: "私は妹にお金を貸しました。 [an object statement]" }}
                />

                <hr className={styles.hr} />

                <p>We use くれる when somebody does something for us.</p>
                <p>For example:</p>
                <GenkiExampleDisplay
                    book={2}
                    jp={{ text: "友だちが宿題を手伝ってくれます。", underline: new FirstMatch("くれます") }}
                    en={{ text: "A friend helps me with my homework (for which I am grateful).", underline: new FirstMatch("for which I am grateful") }}
                />

                <hr className={styles.hr} />

                <p>We use the te-form + もらう to say that we get, persuade or arrange for somebody to do something for us.
                In other words, we "receive" somebody's favour. The person performing the action for us accompanied by the particle に.
                </p>
                <p>For example:</p>
                <GenkiExampleDisplay
                    book={2}
                    jp={{ text: "私は友だちに宿題を手伝ってもらいました。", underline: new MultipleFirstMatch(["に", "もらいました"]) }}
                    en={{ text: "I got a friend of mine to help me with my homework." }}
                />
            </div>
        )
    }

    return { c16p1 };
}

export default GenkiChapter16;
