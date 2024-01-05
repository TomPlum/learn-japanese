import { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import styles  from "./SpinnerController.module.scss"

export interface SpinnerControllerProps<T> {
  values: T[]
  disabledTitle?: string
  onChange: (value: T) => void
}

interface SpinnerControllerState {
  selected: number
}

class SpinnerController<T> extends Component<SpinnerControllerProps<T>, SpinnerControllerState> {
  constructor(props: Readonly<SpinnerControllerProps<T>> | SpinnerControllerProps<T>) {
    super(props)
    this.state = {
      selected: 0
    }
  }

  componentDidUpdate(_prevProps: Readonly<SpinnerControllerProps<T>>, prevState: Readonly<SpinnerControllerState>) {
    const { selected } = this.state
    const { values, onChange } = this.props

    if (prevState.selected !== selected) {
      onChange(values[selected])
    }
  }

  render() {
    const { values, disabledTitle } = this.props
    const { selected } = this.state
    const hasMultipleValues = values.length > 1

    return (
      <div className={styles.wrapper}>
        <div className={styles.arrowWrapper}>
          <FontAwesomeIcon
            className={hasMultipleValues ? styles.arrow : styles.disabled}
            icon={faChevronUp}
            title={hasMultipleValues ? "Last" : undefined}
            onClick={hasMultipleValues ? this.handleLast : undefined}
          />
        </div>

        <div className={styles.selectedWrapper}>
          {hasMultipleValues ? (
            <span className={styles.selected}>{selected + 1}</span>
          ) : (
            <span className={styles.selectedDisabled} title={disabledTitle ?? "There is only one available."}>
              1
            </span>
          )}
        </div>

        <div className={styles.arrowWrapper}>
          <FontAwesomeIcon
            className={hasMultipleValues ? styles.arrow : styles.disabled}
            icon={faChevronDown}
            title={hasMultipleValues ? "Next" : undefined}
            onClick={hasMultipleValues ? this.handleNext : undefined}
          />
        </div>
      </div>
    )
  }

  private handleNext = () => {
    const { values } = this.props
    const { selected } = this.state
    if (selected < values.length - 1) {
      this.setState({ selected: selected + 1 })
    } else {
      this.setState({ selected: 0 })
    }
  }

  private handleLast = () => {
    const { values } = this.props
    const { selected } = this.state
    if (selected && selected !== 0) {
      this.setState({ selected: selected - 1 })
    } else {
      this.setState({ selected: values.length - 1 })
    }
  }
}

export default SpinnerController
