import { Table } from "react-bootstrap";
import styles from "../../../styles/sass/components/ui/display/GenkiExampleTable.module.scss";
import RomajiGenerator from "../../../utility/RomajiGenerator";

interface ExampleValue {
    value: string;
    underline?: string;
}

export interface GenkiExampleTableProps {
    values: { japanese: ExampleValue, english: ExampleValue }[];
    className?: string;
}

const GenkiExampleTable = (props: GenkiExampleTableProps) => {
    const romajiGenerator = new RomajiGenerator();

    const underlineValue = (example: ExampleValue) => {
        const underlineText = example.underline;
        if (underlineText) {
            const value = example.value;
            const underlineStartIndex = value.indexOf(underlineText);
            const start = value.substring(0, underlineStartIndex);
            const underlineEndIndex = underlineStartIndex + underlineText.length;
            const underlined = value.substring(underlineStartIndex, underlineEndIndex);
            const remaining = value.substring(underlineEndIndex)
            return <span>{start}<span className={styles.underline}>{underlined}</span>{remaining}</span>
        }

        return <span>{example.value}</span>
    }

    return (
        <Table className={[styles.table, props.className].join(" ")} borderless size="sm">
            {props.values.map(example => {
                const japanese = example.japanese;

                return (
                    <tr>
                        <td>
                            <p className={styles.jp}>{underlineValue(japanese)}</p>
                            <span>{romajiGenerator.generate(japanese.value)}</span>
                        </td>

                        <td className={styles.en}>
                            {underlineValue(example.english)}
                        </td>
                    </tr>
                )
            })}
        </Table>
    )
}

export default GenkiExampleTable;
