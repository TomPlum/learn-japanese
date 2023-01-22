import { Component } from "react"
import styles from "../../styles/sass/components/learn/SearchTag.module.scss"

export interface SearchTagProps {
  value: string
  onSelect: (value: string) => void
}

interface SearchTagState {
  active: boolean
}

class SearchTag extends Component<SearchTagProps, SearchTagState> {
  constructor(props: Readonly<SearchTagProps> | SearchTagProps) {
    super(props)
    this.state = {
      active: false
    }
  }

  render() {
    const { value } = this.props
    const { active } = this.state

    return (
      <div className={active ? styles.active : styles.wrapper} onClick={this.handleSelect}>
        <span>{value}</span>
      </div>
    )
  }

  private handleSelect = () => {
    const { active } = this.state
    const { value, onSelect } = this.props
    this.setState({ active: !active })
    onSelect(value)
  }
}

export default SearchTag
