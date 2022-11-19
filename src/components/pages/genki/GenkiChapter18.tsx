import {GrammarInfoProps} from "../../learn/GrammarInfo";
import PageNumber from "../../../domain/learn/PageNumber";
import styles from "../../../styles/sass/components/pages/GenkiGrammarPage.module.scss";
import GenkiTable from "../../ui/table/GenkiTable";
import FuriganaDisplay from "../../ui/display/FuriganaDisplay";
import GenkiExampleDisplay from "../../ui/display/GenkiExampleDisplay";
import {FirstMatch, MultipleFirstMatch} from "../../ui/Underline";
import GenkiFootNoteDisplay from "../../ui/display/GenkiFootNoteDisplay";
import GenkiFootnoteRef from "../../ui/display/GenkiFootnoteRef";
import GenkiFootNoteContainer from "../../ui/display/GenkiFootNoteContainer";
import GenkiStructureDisplay from "../../ui/display/GenkiStructureDisplay";
import {Col, Container, Row} from "react-bootstrap";

const GenkiChapter18 = () => {

    const c18p1: GrammarInfoProps = {
        chapter: 18,
        section: 1,
        page: PageNumber.from(140),
        title: "Transitivity Pairs",
        body: (
            <div>
                <p>Some verbs describe situations in which humans act on something (transitive verbs), other verbs
                    describe changes that happen to things or people (intransitive verbs).
                </p>
                <GenkiTable chapter={18}>
                    <tbody>
                       <tr>
                           <td>&nbsp;</td>
                           <td colSpan={2} className={styles.genkiTwo}>Transitive</td>
                           <td colSpan={2} className={styles.genkiTwo}>Intransitive</td>
                       </tr>
                       <tr>
                           <td>&nbsp;</td>
                           <td><FuriganaDisplay chars={[{ kanji: '開', kana: 'あ', okurigana: 'ける' }]} position='bottom'/></td>
                           <td><i className={styles.muted}>open something</i></td>
                           <td><FuriganaDisplay chars={[{ kanji: '開', kana: 'あ', okurigana: 'く' }]} position='bottom'/></td>
                           <td><i className={styles.muted}>something opens</i></td>
                       </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><FuriganaDisplay chars={[{ kanji: '閉', kana: 'し', okurigana: 'める' }]} position='bottom'/></td>
                            <td><i className={styles.muted}>close something</i></td>
                            <td><FuriganaDisplay chars={[{ kanji: '閉', kana: 'し', okurigana: 'まる' }]} position='bottom'/></td>
                            <td><i className={styles.muted}>something closes</i></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><FuriganaDisplay chars={[{ kanji: '入', kana: 'い', okurigana: 'れる' }]} position='bottom'/></td>
                            <td><i className={styles.muted}>put something in</i></td>
                            <td><FuriganaDisplay chars={[{ kanji: '入', kana: 'はい', okurigana: 'る' }]} position='bottom'/></td>
                            <td><i className={styles.muted}>something goes inside</i></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><FuriganaDisplay chars={[{ kanji: '出', kana: 'だ', okurigana: 'す' }]} position='bottom'/></td>
                            <td><i className={styles.muted}>take something out</i></td>
                            <td><FuriganaDisplay chars={[{ kanji: '出', kana: 'で', okurigana: 'る' }]} position='bottom'/></td>
                            <td><i className={styles.muted}>something goes out</i></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>つける</td>
                            <td><i className={styles.muted}>turn something on</i></td>
                            <td>つく</td>
                            <td><i className={styles.muted}>something goes on</i></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><FuriganaDisplay chars={[{ kanji: '消', kana: 'け', okurigana: 'す' }]} position='bottom'/></td>
                            <td><i className={styles.muted}>turn something off;</i></td>
                            <td><FuriganaDisplay chars={[{ kanji: '消', kana: 'き', okurigana: 'える' }]} position='bottom'/></td>
                            <td><i className={styles.muted}>something goes off</i></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td colSpan={3}><i className={styles.muted}>extinguish something</i></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><FuriganaDisplay chars={[{ kanji: '壊', kana: 'こわ', okurigana: 'す' }]} position='bottom'/></td>
                            <td><i className={styles.muted}>breaking something</i></td>
                            <td><FuriganaDisplay chars={[{ kanji: '壊', kana: 'こわ', okurigana: 'れる' }]} position='bottom'/></td>
                            <td><i className={styles.muted}>something breaks</i></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><FuriganaDisplay chars={[{ kanji: '汚', kana: 'よご', okurigana: 'す' }]} position='bottom'/></td>
                            <td><i className={styles.muted}>make something dirty</i></td>
                            <td><FuriganaDisplay chars={[{ kanji: '汚', kana: 'よご', okurigana: 'れる' }]} position='bottom'/></td>
                            <td><i className={styles.muted}>something becomes dirty</i></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><FuriganaDisplay chars={[{ kanji: '落', kana: 'お', okurigana: 'とす' }]} position='bottom'/></td>
                            <td><i className={styles.muted}>drop something</i></td>
                            <td><FuriganaDisplay chars={[{ kanji: '落', kana: 'お', okurigana: 'ちる' }]} position='bottom'/></td>
                            <td><i className={styles.muted}>something drops</i></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><FuriganaDisplay chars={[{ kanji: '沸', kana: 'わ', okurigana: 'かす' }]} position='bottom'/></td>
                            <td><i className={styles.muted}>boil water</i></td>
                            <td><FuriganaDisplay chars={[{ kanji: '沸', kana: 'わ', okurigana: 'く' }]} position='bottom'/></td>
                            <td><i className={styles.muted}>water boils</i></td>
                        </tr>
                    </tbody>
                </GenkiTable>
                <p>Transitive verbs call for both the subject and the object.</p>
                <GenkiExampleDisplay
                    jp={{ text: "たけしさんが電気をつけました。", underline: new MultipleFirstMatch("が", "を") }}
                    en={{ text: "Takeshi turned the lights on." }}
                    book={2}
                />
                <p>Intransitive verbs call for only the subject.</p>
                <GenkiExampleDisplay
                    jp={{ text: "電気がつきました。", underline: new FirstMatch("が") }}
                    en={{ text: "The light came on." }}
                    book={2}
                />
            </div>
        )
    }

    const c18p2: GrammarInfoProps = {
        chapter: 18,
        section: 2,
        page: PageNumber.from(141),
        title: "Paired Intransitive Verbs + ている",
        body: (
            <div>
                <p>Transitive and intransitive verbs behave differently when followed by the ている helper verb.</p>
                <p>Transitive verbs + ている denote an action that is currently in-progress, just like normal.</p>
                <GenkiExampleDisplay
                    book={2}
                    jp={{
                        chars: [
                            { pre: 'トマさんは', kanji: '窓', kana: 'まど' },
                            { pre: 'を', kanji: '開', kana: 'あ', okurigana: 'け', post: 'ています。' }
                        ],
                        position: 'bottom'
                    }}
                    en={{ text: 'Tom is opening the windows.' }}
                />

                <p>
                    However, intransitive verbs + ている refer to states that hold true after the change takes place.
                    That is to say, the result of the change.
                </p>
                <GenkiExampleDisplay
                    book={2}
                    jp={{
                        chars: [
                            { kanji: '窓', kana: 'まど' },
                            { pre: 'が', kanji: '開', kana: 'あ', okurigana: 'い', post: 'ています。' }
                        ],
                        position: 'bottom'
                    }}
                    en={{ text: 'The windows are open.' }}
                />
            </div>
        )
    }

    const c18p3: GrammarInfoProps = {
        chapter: 18,
        section: 3,
        page: PageNumber.of(141, 142),
        title: "~てしまう / ちゃう",
        body: (
            <div>
                <p>The <i>te</i>-form of a verb + しまう has two meanings.</p>
                <p>
                    Firstly, it indicates that one "carries out with determination" a plan described by the verb.
                    This typically involves finishing something.
                </p>
                <GenkiExampleDisplay
                    book={2}
                    jp={{ text: '映画を見ってしまいました。', underline: new FirstMatch("てしまいました") }}
                    en={{ text: 'I watched the film completely / I finished watching the film.', underline: new MultipleFirstMatch("completely", "finished") }}
                />

                <p>
                    Secondly, it can also indicate a "lack of premeditation or control over how things turn out". This
                    is generally something that one regrets or you do something you do not intend.
                    <GenkiFootnoteRef value={1} book={2} />
                </p>
                <GenkiExampleDisplay
                    book={2}
                    jp={{ text: '車の中に傘を忘れてしまいました。', underline: new FirstMatch("てしまいました") }}
                    en={{ text: 'I inadvertently left my umbrella in the car', underline: new FirstMatch("inadvertently") }}
                />
                <GenkiExampleDisplay
                    book={2}
                    jp={{ text: '宿題を忘れたので, 先生は怒ってしまいました。', underline: new FirstMatch("てしまいました") }}
                    en={{ text: 'To my horror, my professor got angry because I had forgotten my homework.', underline: new FirstMatch("To my horror") }}
                />

                <GenkiStructureDisplay book={2} width={300} style={{ height: '75px', marginTop: '30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <span>~てしまう</span>
                        <span>=</span>
                        <div style={{ float: 'right' }}>
                            <div>1. <i>finish doing</i></div>
                            <div>2. <i>regrettably</i></div>
                        </div>
                    </div>
                </GenkiStructureDisplay>

                <p>
                    Both nuanced meanings focus on the discrepancy between our intentions and the state of the world
                    when left on its own. The particular nuance used in a given sentence may be ambiguous. How the
                    sentence is interpreted depends on the assumptions the speaker has. For example, the first
                    sentence above about "finishing a film" could be interpreted as "I regrettably finished the film".
                </p>

                <hr className={styles.hr} />

                <p>In speech, ~てしまう and ~でしまう are often contracted to ~ちゃう and ~じゃう, respectively.</p>

                <GenkiExampleDisplay
                    book={2}
                    jp={{ text: '眼鏡をなくしちゃった。'}}
                    en={{ text: 'I lost my glasses!' }}
                />

                <GenkiStructureDisplay book={2} width={500}>
                    <Container>
                        <Row>
                            <Col><p className={styles.genkiTwo}><em>Written language:</em></p></Col>
                            <Col xs={1}>{}</Col>
                            <Col><p className={styles.genkiTwo}><em>Spoken variant:</em></p></Col>
                        </Row>
                        <Row>
                            <Col>
                                <GenkiExampleDisplay
                                    book={2}
                                    noIndent
                                    jp={{ text: "食べてしまいました。", underline: new FirstMatch("てしま") }}
                                    en={{ text: "I finished eating." }}
                                />
                            </Col>
                            <Col xs={1}>&#8594;</Col>
                            <Col>
                                <GenkiExampleDisplay
                                    book={2}
                                    noIndent
                                    jp={{ text: "食べちゃいました。", underline: new FirstMatch("ちゃ") }}
                                    en={{ text: "I finished eating." }}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <GenkiExampleDisplay
                                    book={2}
                                    noIndent
                                    jp={{ text: "食べてしまった。", underline: new FirstMatch("てしま") }}
                                    en={{ text: "I finished eating." }}
                                />
                            </Col>
                            <Col xs={1}>&#8594;</Col>
                            <Col>
                                <GenkiExampleDisplay
                                    book={2}
                                    noIndent
                                    jp={{ text: "食べちゃった。", underline: new FirstMatch("ちゃ") }}
                                    en={{ text: "I finished eating." }}
                                />
                            </Col>
                        </Row>

                        <hr className={styles.hr} style={{ marginTop: '-1px' }} />

                        <Row>
                            <Col>
                                <GenkiExampleDisplay
                                    book={2}
                                    noIndent
                                    jp={{ text: "飲んでしまいました。", underline: new FirstMatch("でしま") }}
                                    en={{ text: "I finished drinking." }}
                                />
                            </Col>
                            <Col xs={1}>&#8594;</Col>
                            <Col>
                                <GenkiExampleDisplay
                                    book={2}
                                    noIndent
                                    jp={{ text: "飲んじゃいました。", underline: new FirstMatch("じゃ") }}
                                    en={{ text: "I finished drinking." }}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <GenkiExampleDisplay
                                    book={2}
                                    noIndent
                                    jp={{ text: "飲んでしまった。", underline: new FirstMatch("でしま") }}
                                    en={{ text: "I finished drinking." }}
                                />
                            </Col>
                            <Col xs={1}>&#8594;</Col>
                            <Col>
                                <GenkiExampleDisplay
                                    book={2}
                                    noIndent
                                    jp={{ text: "飲んじゃった。", underline: new FirstMatch("じゃ") }}
                                    en={{ text: "I finished drinking." }}
                                />
                            </Col>
                        </Row>
                    </Container>
                </GenkiStructureDisplay>

                <GenkiFootNoteContainer>
                    <GenkiFootNoteDisplay reference={1} book={2}>
                        Since しまう is chained after the te-form, which is implicitly affirmative, it can only produce
                        sentences meaning that something regrettable did happen. Therefore, negative sentences cannot
                        be formed with it.
                    </GenkiFootNoteDisplay>
                </GenkiFootNoteContainer>
            </div>
        )
    }

    const c18p4: GrammarInfoProps = {
        chapter: 18,
        section: 4,
        page: PageNumber.of(142, 143),
        title: "~と",
        body: (
            <div>

            </div>
        )
    }

    return { c18p1, c18p2, c18p3, c18p4 };
}

export default GenkiChapter18