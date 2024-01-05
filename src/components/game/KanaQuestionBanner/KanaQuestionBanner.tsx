import { Component } from "react"
import { Alert } from "react-bootstrap"
import { Kana } from "../../../domain/kana/Kana"
import styles  from "./KanaQuestionBanner.module.scss"

export interface KanaQuestionBannerProps {
  value: Kana
}

class KanaQuestionBanner extends Component<KanaQuestionBannerProps> {
  render() {
    const { value } = this.props
    return (
      <Alert className={styles.text} variant="secondary" aria-labelledby="Kana Question">
        Which {value.isDiagraph() ? "diagraph" : "kana"} is {this.getRomaji()} ?
      </Alert>
    )
  }

  private getRomaji = () => {
    const value = this.props.value
    const romaji = value.getRomaji()
    if (romaji.length > 1) {
      return (
        <>
          <strong>&apos;{romaji[0]}&apos;</strong> or <strong>&apos;{romaji[1]}&apos;</strong>
        </>
      )
    } else {
      return <strong>&apos;{romaji[0]}&apos;</strong>
    }
  }
}

export default KanaQuestionBanner
