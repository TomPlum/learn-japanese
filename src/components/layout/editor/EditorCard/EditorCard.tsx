import styles  from "./EditorCard.module.scss"
import { CardLayoutDetails, CardSize } from "./../EditorColumn"
import React from "react"

export interface EditorCardProps {
  name: string
  size: CardSize
  className?: string
  onDragStart?: (details: CardLayoutDetails) => void
}

const EditorCard = (props: EditorCardProps) => {
  const { name, size, className, onDragStart } = props

  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return styles.small
      case "md":
        return styles.medium
      case "lg":
        return styles.large
    }
  }

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    const details: CardLayoutDetails = { name: name, size: size }
    event.dataTransfer.setData("card", JSON.stringify(details))
    onDragStart?.(details)
  }

  const classNames = [styles.card, className, getSizeClass()]

  return (
    <div draggable className={classNames.join(" ")} onDragStart={handleDragStart} data-testid={`editor-card-${name}`}>
      {name}
    </div>
  )
}

export default EditorCard
