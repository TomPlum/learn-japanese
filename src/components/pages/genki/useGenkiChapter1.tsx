import { GrammarInfoProps } from "../../learn/GrammarInfo"
import PageNumber from "../../../domain/learn/PageNumber"
import QuoteDisplay from "../../ui/display/QuoteDisplay"
import GenkiExampleTable from "../../ui/genki/GenkiExampleTable"
import styles from "../../../styles/sass/components/pages/GenkiGrammarPage.module.scss"
import React from "react"

const useGenkiChapter1 = () => {
  const c1p1: GrammarInfoProps = {
    chapter: 1,
    section: 1,
    title: "X は Y です",
    page: PageNumber.of(41, 42),
    body: (
      <div>
        <p>
          <QuoteDisplay chapter={1}>It is 12:30.</QuoteDisplay>
          <span> and </span>
          <QuoteDisplay chapter={1}>I am a student.</QuoteDisplay>
          <span>
            are sentences that can be translated into Japanese using an appropriate noun and the word <em>desu</em>.
          </span>
        </p>
        <GenkiExampleTable
          book={1}
          className={styles.exampleTable}
          values={[
            { japanese: { value: "じゅうにじはんです。" }, english: { value: "(It) is half past twelve" } },
            { japanese: { value: "がくせいです。" }, english: { value: "(I) am a student." } }
          ]}
        />
      </div>
    )
  }

  const c1p2: GrammarInfoProps = {
    chapter: 1,
    section: 2,
    title: "Question Sentences",
    page: PageNumber.of(42, 43),
    body: (
      <div>
        <p>It is most common to use the end particle ka when making a question sentence.</p>
        <p>Simply add か to the end of a statement.</p>
      </div>
    )
  }

  const c1p3: GrammarInfoProps = {
    chapter: 1,
    section: 3,
    title: "Noun の Noun",
    page: PageNumber.from(43),
    body: (
      <div>
        <p>No (の) is a particle that connects two nouns.</p>
        <GenkiExampleTable
          book={1}
          className={styles.exampleTable}
          values={[
            {
              japanese: { value: "たけしさんのでんわばんごう。" },
              english: { value: "Takeshi’s phone number" }
            },
            { japanese: { value: "だいがくのせんせい。" }, english: { value: "a college professor" } },
            {
              japanese: { value: "にほんごのがくせい。" },
              english: { value: "a student of the Japanese language" }
            },
            { japanese: { value: "にほんのだいがく。" }, english: { value: "a college in Japan" } }
          ]}
        />
      </div>
    )
  }

  return { c1p1, c1p2, c1p3 }
}

export default useGenkiChapter1
