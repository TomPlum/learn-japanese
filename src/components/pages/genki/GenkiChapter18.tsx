import {GrammarInfoProps} from "../../learn/GrammarInfo";
import PageNumber from "../../../domain/learn/PageNumber";
import styles from "../../../styles/sass/components/pages/GenkiGrammarPage.module.scss";
import GenkiTable from "../../ui/table/GenkiTable";

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
                  {/* <thead>
                        <th colSpan={2}>1</th>
                        <th className={styles.genkiTwo}>Transitive</th>
                        <th colSpan={2} className={styles.genkiTwo}>Intransitive</th>
                        <th>2</th>
                   </thead>*/}
                    <tbody>
                       <tr>
                           <td colSpan={2} className={styles.genkiTwo}>Transitive</td>
                           <td colSpan={2} className={styles.genkiTwo}>Intransitive</td>
                       </tr>
                       <tr>
                           <td>開ける</td>
                           <td>open something</td>
                           <td>開く</td>
                           <td>something opens</td>
                       </tr>
                        <tr>
                            <td>閉める</td>
                            <td>close something</td>
                            <td>閉まる</td>
                            <td>something closes</td>
                        </tr>
                        <tr>
                            <td>入れる</td>
                            <td>put something in</td>
                            <td>入る</td>
                            <td>something goes inside</td>
                        </tr>
                        <tr>
                            <td>出す</td>
                            <td>take something out</td>
                            <td>出る</td>
                            <td>something goes out</td>
                        </tr>
                        <tr>
                            <td>つける</td>
                            <td>turn something on</td>
                            <td>つく</td>
                            <td>something goes on</td>
                        </tr>
                        <tr>
                            <td>消す</td>
                            <td>turn something off;</td>
                            <td>消える</td>
                            <td>something goes off</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td colSpan={3}>extinguish something</td>
                        </tr>
                        <tr>
                            <td>壊す</td>
                            <td>breaking something</td>
                            <td>壊れる</td>
                            <td>something breaks</td>
                        </tr>
                        <tr>
                            <td>汚す</td>
                            <td>make something dirty</td>
                            <td>汚れる</td>
                            <td>something becomes dirty</td>
                        </tr>
                        <tr>
                            <td>落とす</td>
                            <td>drop something</td>
                            <td>落ちる</td>
                            <td>something drops</td>
                        </tr>
                        <tr>
                            <td>沸かす</td>
                            <td>boil water</td>
                            <td>沸く</td>
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