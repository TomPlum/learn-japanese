import { Component } from "react"
import { OverlayTrigger } from "react-bootstrap"
import PopOver from "../../../ui/PopOver"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"
import styles  from "./KanjiMeaningDisplay.module.scss"

export interface KanjiMeaningDisplayProps {
  meanings: string[]
  className?: string
}

interface KanjiMeaningDisplayState {
  showing: boolean
}

class KanjiMeaningDisplay extends Component<KanjiMeaningDisplayProps, KanjiMeaningDisplayState> {
  constructor(props: Readonly<KanjiMeaningDisplayProps> | KanjiMeaningDisplayProps) {
    super(props)
    this.state = {
      showing: false
    }
  }

  render() {
    const [meanings, extra] = this.getMeanings()

    const popover = <PopOver title="Additional Meanings" text={extra.join(", ")} />

    return (
      <span className={this.props.className}>
        <span className={styles.meanings}>{meanings.join(", ")}</span>
        {extra.length > 0 && (
          <OverlayTrigger trigger={["click", "hover", "click"]} overlay={popover} placement="top" defaultShow={false}>
            <FontAwesomeIcon icon={faEllipsisH} className={styles.icon} title="Show more meanings" />
          </OverlayTrigger>
        )}
      </span>
    )
  }

  private getMeanings = (): [string[], string[]] => {
    const { meanings } = this.props

    const maxLength = 5

    if (meanings.length > maxLength) {
      return [meanings.slice(0, maxLength), meanings.slice(maxLength, meanings.length)]
    }

    return [meanings, []]
  }
}

export default KanjiMeaningDisplay
