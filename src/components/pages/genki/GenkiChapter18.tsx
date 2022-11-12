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
                   <thead>
                        <th></th>
                        <th>Transitive</th>
                        <th>Intransitive</th>
                        <th></th>
                   </thead>
                    <tbody>
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
                    </tbody>
                </GenkiTable>
            </div>
        )
    }

    return { c18p1 };
}

export default GenkiChapter18