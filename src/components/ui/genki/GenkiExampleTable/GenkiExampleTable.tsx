import { Table } from "react-bootstrap"
import RomajiGenerator from "../../../../utility/RomajiGenerator"
import styles  from "./GenkiExampleTable.module.scss"
import GenkiUnderlineDisplay from "./../GenkiUnderlineDisplay"
import { FirstMatch } from "../../Underline"

interface ExampleValue {
  value: string
  underline?: string
  hideRomaji?: boolean
}

export interface GenkiExampleTableProps {
  values: { japanese: ExampleValue; english: ExampleValue }[]
  className?: string
  book: number
}

const GenkiExampleTable = (props: GenkiExampleTableProps) => {
  const { values, book, className } = props

  const romajiGenerator = new RomajiGenerator()

  return (
    <Table className={[styles.table, className].join(" ")} borderless size="sm" variant='dark'>
      {values.map((example) => {
        const { english, japanese } = example

        return (
          <tbody key={`${english.value}-tbody`}>
            <tr>
              <td>
                <p className={styles.jp}>
                  <GenkiUnderlineDisplay underline={new FirstMatch(japanese.underline ?? "")} book={book}>
                    <span>{japanese.value}</span>
                  </GenkiUnderlineDisplay>
                </p>
                {!japanese.hideRomaji && (
                  <span className={styles.romaji}>{romajiGenerator.generate(japanese.value)}</span>
                )}
              </td>

              <td className={styles.en}>
                <GenkiUnderlineDisplay underline={new FirstMatch(english.underline ?? "")} book={book}>
                  <span>{english.value}</span>
                </GenkiUnderlineDisplay>
              </td>
            </tr>
          </tbody>
        )
      })}
    </Table>
  )
}

export default GenkiExampleTable
