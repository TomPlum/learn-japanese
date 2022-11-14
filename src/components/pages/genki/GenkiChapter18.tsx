import {GrammarInfoProps} from "../../learn/GrammarInfo";
import PageNumber from "../../../domain/learn/PageNumber";
import styles from "../../../styles/sass/components/pages/GenkiGrammarPage.module.scss";
import GenkiTable from "../../ui/table/GenkiTable";
import FuriganaDisplay from "../../ui/display/FuriganaDisplay";
import GenkiExampleDisplay from "../../ui/display/GenkiExampleDisplay";
import {FirstMatch, MultipleFirstMatch} from "../../ui/Underline";

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

    return { c18p1 };
}

export default GenkiChapter18