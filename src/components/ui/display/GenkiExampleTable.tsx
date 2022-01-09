import { Table } from "react-bootstrap";
import RomajiGenerator from "../../../utility/RomajiGenerator";
import styles from "../../../styles/sass/components/ui/display/GenkiExampleTable.module.scss";

interface ExampleValue {
    value: string;
    underline?: string;
    hideRomaji?: boolean;
}

export interface GenkiExampleTableProps {
    values: { japanese: ExampleValue, english: ExampleValue }[];
    className?: string;
    book: number;
}

const GenkiExampleTable = (props: GenkiExampleTableProps) => {

    const { values, book, className } = props;

    const romajiGenerator = new RomajiGenerator();

    const underlineValue = (example: ExampleValue) => {
        const underlineText = example.underline;
        if (underlineText) {
            const value = example.value;
            const underlineStartIndex = value.indexOf(underlineText);
            const start = value.substring(0, underlineStartIndex);
            const underlineEndIndex = underlineStartIndex + underlineText.length;
            const underlined = value.substring(underlineStartIndex, underlineEndIndex);
            const remaining = value.substring(underlineEndIndex);

            const underlineClass = book == 1 ? styles.genkiOneUnderline : styles.genkiTwoUnderline;
            return <span>{start}<span className={underlineClass}>{underlined}</span>{remaining}</span>
        }

        return <span>{example.value}</span>
    }

    return (
        <Table className={[styles.table, className].join(" ")} borderless size="sm">
            {values.map(example => {
                const { english, japanese } = example;

                return (
                    <tbody key={`${english}-tbody`}>
                        <tr>
                            <td>
                                <p className={styles.jp}>{underlineValue(japanese)}</p>
                                {!japanese.hideRomaji && <span>{romajiGenerator.generate(japanese.value)}</span>}
                            </td>

                            <td className={styles.en}>
                                {underlineValue(english)}
                            </td>
                        </tr>
                    </tbody>
                )
            })}
        </Table>
    )
}

export default GenkiExampleTable;
