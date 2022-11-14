import {GrammarInfoProps} from "../../learn/GrammarInfo";
import PageNumber from "../../../domain/learn/PageNumber";
import styles from "../../../styles/sass/components/pages/GenkiGrammarPage.module.scss";
import GenkiTable from "../../ui/table/GenkiTable";
import FuriganaDisplay from "../../ui/display/FuriganaDisplay";

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
                           <td>open something</td>
                           <td><FuriganaDisplay chars={[{ kanji: '開', kana: 'あ', okurigana: 'く' }]} position='bottom'/></td>
                           <td>something opens</td>
                       </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><FuriganaDisplay chars={[{ kanji: '閉', kana: 'し', okurigana: 'める' }]} position='bottom'/></td>
                            <td>close something</td>
                            <td><FuriganaDisplay chars={[{ kanji: '閉', kana: 'し', okurigana: 'まる' }]} position='bottom'/></td>
                            <td>something closes</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><FuriganaDisplay chars={[{ kanji: '入', kana: 'い', okurigana: 'れる' }]} position='bottom'/></td>
                            <td>put something in</td>
                            <td><FuriganaDisplay chars={[{ kanji: '入', kana: 'はい', okurigana: 'る' }]} position='bottom'/></td>
                            <td>something goes inside</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><FuriganaDisplay chars={[{ kanji: '出', kana: 'だ', okurigana: 'す' }]} position='bottom'/></td>
                            <td>take something out</td>
                            <td><FuriganaDisplay chars={[{ kanji: '出', kana: 'で', okurigana: 'る' }]} position='bottom'/></td>
                            <td>something goes out</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>つける</td>
                            <td>turn something on</td>
                            <td>つく</td>
                            <td>something goes on</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><FuriganaDisplay chars={[{ kanji: '消', kana: 'け', okurigana: 'す' }]} position='bottom'/></td>
                            <td>turn something off;</td>
                            <td><FuriganaDisplay chars={[{ kanji: '消', kana: 'き', okurigana: 'える' }]} position='bottom'/></td>
                            <td>something goes off</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td colSpan={3}>extinguish something</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><FuriganaDisplay chars={[{ kanji: '壊', kana: 'こわ', okurigana: 'す' }]} position='bottom'/></td>
                            <td>breaking something</td>
                            <td><FuriganaDisplay chars={[{ kanji: '壊', kana: 'こわ', okurigana: 'れる' }]} position='bottom'/></td>
                            <td>something breaks</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><FuriganaDisplay chars={[{ kanji: '汚', kana: 'よご', okurigana: 'す' }]} position='bottom'/></td>
                            <td>make something dirty</td>
                            <td><FuriganaDisplay chars={[{ kanji: '汚', kana: 'よご', okurigana: 'れる' }]} position='bottom'/></td>
                            <td>something becomes dirty</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><FuriganaDisplay chars={[{ kanji: '落', kana: 'お', okurigana: 'とす' }]} position='bottom'/></td>
                            <td>drop something</td>
                            <td><FuriganaDisplay chars={[{ kanji: '落', kana: 'お', okurigana: 'ちる' }]} position='bottom'/></td>
                            <td>something drops</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><FuriganaDisplay chars={[{ kanji: '沸', kana: 'わ', okurigana: 'かす' }]} position='bottom'/></td>
                            <td>boil water</td>
                            <td><FuriganaDisplay chars={[{ kanji: '沸', kana: 'わ', okurigana: 'く' }]} position='bottom'/></td>
                            <td>water boils</td>
                        </tr>
                    </tbody>
                </GenkiTable>
            </div>
        )
    }

    return { c18p1 };
}

export default GenkiChapter18