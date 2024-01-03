import React, { PropsWithChildren, ReactElement, useRef, useState } from "react"
import styles  from "./HoverMessage.module.scss"
import ConditionalWrapper from "./../ConditionalWrapper"

export interface HoverMessageProps {
  id?: string
  show?: boolean
  message: string
}

const HoverMessage = (props: PropsWithChildren<HoverMessageProps>) => {
  const { id, show, message, children } = props

  const element = useRef<HTMLSpanElement>(null)
  // const external = useMousePosition();
  const [internal, setInternal] = useState({ x: element.current?.offsetLeft, y: element.current?.offsetTop })
  const [inside, setInside] = useState(false)

  const handleEnter = () => {
    setInside(true)
  }

  const handleExit = () => {
    setInside(false)
  }

  const handleMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    setInternal({
      x: e.clientX, // - (e.target as HTMLSpanElement).offsetLeft,
      y: e.clientY // - (e.target as HTMLSpanElement).offsetTop
    })
  }

  const surfaceProperties = {
    className: styles.surface,
    onMouseEnter: handleEnter,
    onMouseOut: handleExit,
    onMouseMove: handleMove,
    "data-testid": "hover-message"
  }

  return (
    <div className={styles.wrapper} id={id} data-testid={id}>
      {show && inside && (
        <div className={styles.message} style={{ top: internal.y, left: internal.x }}>
          {message}
        </div>
      )}

      <ConditionalWrapper
        condition={show ?? false}
        wrapper={(child) => (
          <span {...surfaceProperties} ref={element}>
            {child}
          </span>
        )}
      >
        {React.cloneElement(children as ReactElement, {
          className: [(children as ReactElement).props.className, show ? styles.child : ""].join(" ")
        })}
      </ConditionalWrapper>
    </div>
  )
}

export default HoverMessage
