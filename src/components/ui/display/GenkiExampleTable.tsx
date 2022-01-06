import { Table } from "react-bootstrap";
import styles from "../../../styles/sass/components/ui/display/GenkiExampleTable.module.scss";
import RomajiGenerator from "../../../utility/RomajiGenerator";

export interface GenkiExampleTableProps {
    values: { japanese: string, english: string }[];
    className?: string;
}

const GenkiExampleTable = (props: GenkiExampleTableProps) => {
    const romajiGenerator = new RomajiGenerator();

    return (
        <Table className={[styles.table, props.className].join(" ")} borderless>
            {props.values.map(value => {
                return (
                    <tr>
                        <td>
                            <p className={styles.jp}>{value.japanese}</p>
                            <span>{romajiGenerator.generate(value.japanese)}</span>
                        </td>

                        <td className={styles.en}>
                            {value.english}
                        </td>
                    </tr>
                )
            })}
        </Table>
    )
}

export default GenkiExampleTable;
