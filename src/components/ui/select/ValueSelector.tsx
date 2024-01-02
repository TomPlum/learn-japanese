import { useRef, useState } from "react"
import { Overlay, Popover } from "react-bootstrap"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Placement } from "react-bootstrap/Overlay"
import ConditionalWrapper from "../ConditionalWrapper"
import ScrollableContainer from "../ScrollableContainer"
import styles from "../../../styles/sass/components/ui/select/ValueSelector.module.scss"

export type ValueSelectorValue = any

export interface ValueSelectorOption {
  value: ValueSelectorValue
  display: ValueSelectorValue
}

export interface ValueSelectorProps {
  id: string
  prefix?: string
  values: ValueSelectorOption[]
  selected: ValueSelectorValue
  disabled?: boolean
  className?: string
  itemClassName?: string
  placement?: Placement
  showBeforeScrolling?: number
  onChange: (value: ValueSelectorValue) => void
}

const ValueSelector = (props: ValueSelectorProps) => {
  const { id, prefix, values, selected, disabled, placement, className, itemClassName, showBeforeScrolling, onChange } =
    props

  const ref = useRef(null)
  const targetRef = useRef(null)
  const [show, setShow] = useState(false)

  const handleChange = (option: ValueSelectorOption) => {
    setShow(false)
    onChange(option.value)
  }

  const handleInitialOpen = () => {
    if (!disabled) {
      setShow(!show)
    }
  }

  return (
    <div ref={ref} className={className} id={id}>
      <span className={disabled ? styles.disabled : styles.selected}>
        <span ref={targetRef} onClick={handleInitialOpen} data-testid={id}>
          {prefix} {values.find((it) => it.value === selected)?.display ?? "?"}
        </span>
        <FontAwesomeIcon icon={show ? faChevronUp : faChevronDown} fixedWidth />
      </span>

      <Overlay
        show={show}
        rootClose={true}
        target={targetRef}
        container={ref.current}
        onHide={() => setShow(false)}
        placement={placement ?? "bottom"}
      >
        <Popover id={id} className={styles.popover}>
          <Popover.Content className={styles.content}>
            <ConditionalWrapper
              condition={!!showBeforeScrolling}
              wrapper={(children) => <ScrollableContainer height={showBeforeScrolling}>{children}</ScrollableContainer>}
            >
              <>
                {values.map((option) => (
                  <div
                    className={styles.valueWrapper}
                    key={`${option.display}-wrapper`}
                    onClick={() => handleChange(option)}
                  >
                    <span className={[styles.value, itemClassName].join(" ")}>
                      {prefix} {option.display}
                    </span>
                  </div>
                ))}
              </>
            </ConditionalWrapper>
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  )
}

export default ValueSelector
