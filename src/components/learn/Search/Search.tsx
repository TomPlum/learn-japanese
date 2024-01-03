import { Component } from "react"
import { Learnable } from "../../../domain/learn/Learnable"
import SearchField from "../../ui/fields/SearchField"
import { Container, Row } from "react-bootstrap"
import LearnableInfo from "./../LearnableInfo"
import SearchTag from "./../SearchTag"
import Arrays from "../../../utility/Arrays"
import styles  from "./Search.module.scss"

export interface SearchProps {
  data: Learnable[]
  tags: string[]
}

interface SearchState {
  search: string
  selectedTags: string[]
}

class Search extends Component<SearchProps, SearchState> {
  constructor(props: Readonly<SearchProps> | SearchProps) {
    super(props)
    this.state = {
      search: "",
      selectedTags: []
    }
  }

  render() {
    const { search } = this.state
    const results = this.getResults()

    return (
      <Container fluid className={styles.wrapper}>
        <Row>
          <SearchField
            value={search}
            className={styles.search}
            placeholder="Search via english, kana, kanji..."
            append={results.length + " Results"}
            onChange={(value: string) => this.setState({ search: value })}
          />
        </Row>

        <Row>
          {this.props.tags.map((tag: string) => {
            return <SearchTag value={tag} onSelect={this.onSelectTag} key={tag} />
          })}
        </Row>

        <Row className={styles.results}>
          {results.map((result: Learnable) => {
            return <LearnableInfo value={result} key={result.getUniqueID()} />
          })}
        </Row>
      </Container>
    )
  }

  private getResults = (): Learnable[] => {
    const { search, selectedTags } = this.state
    let { data } = this.props

    if (selectedTags.length > 0) {
      data = data.filter((result: Learnable) => {
        return result.getTags().some((tag: string) => selectedTags.includes(tag))
      })
    }

    return data.filter((result: Learnable) => {
      const matchesMeaning = result.getMeanings().some((meaning: string) => meaning.includes(search))
      const matchesKana = result.getKana().some((kana: string) => kana.includes(search))
      const matchesKanji = result.getKanjiVariation()?.includes(search)
      return matchesMeaning || matchesKana || matchesKanji
    })
  }

  private onSelectTag = (tag: string) => {
    const { selectedTags } = this.state
    if (selectedTags.includes(tag)) {
      this.setState({ selectedTags: Arrays.remove(selectedTags, tag) })
    } else {
      this.setState({ selectedTags: selectedTags.concat(tag) })
    }
  }
}

export default Search
