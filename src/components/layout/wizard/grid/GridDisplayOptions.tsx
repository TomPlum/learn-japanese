import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThLarge, faThList } from "@fortawesome/free-solid-svg-icons"
import React, { useEffect, useState } from "react"
import GridDisplayType from "../../../../domain/grid/GridDisplayType"
import { GridOptions } from "../../../../domain/grid/GridOptions"
import RangeSlider from "react-bootstrap-range-slider"
import styles from "../../../../styles/sass/components/layout/wizard/grid/GridDisplayOptions.module.scss"

export interface GridDisplayOptionsProps {
  onSelect: (options: GridOptions) => void
  defaultType?: GridDisplayType
  className?: string
}

const GridDisplayOptions = (props: GridDisplayOptionsProps) => {
  const { className, defaultType, onSelect } = props

  const [type, setType] = useState(defaultType ?? GridDisplayType.GRID)
  const [size, setSize] = useState(80)

  useEffect(() => {
    onSelect({ type: type, size: size })
  }, [type, size])

  const onGridItemSizeChange = (_e: React.ChangeEvent, value: number) => {
    setSize(value)
  }

  const gridButtonClass = type === GridDisplayType.GRID ? styles.selected : styles.button
  const listButtonClass = type === GridDisplayType.LIST ? styles.selected : styles.button

  return (
    <div className={[className, styles.wrapper].join(" ")} data-testid="grid-display-options">
      {type === GridDisplayType.GRID && (
        <div className={styles.sliderWrapper}>
          <RangeSlider
            min={70}
            max={150}
            step={10}
            size="sm"
            value={size}
            title="Item Size"
            className={styles.size}
            onChange={onGridItemSizeChange}
          />
        </div>
      )}

      <FontAwesomeIcon
        fixedWidth
        icon={faThLarge}
        title="Grid Layout"
        className={gridButtonClass}
        onClick={() => setType(GridDisplayType.GRID)}
      />

      <FontAwesomeIcon
        fixedWidth
        icon={faThList}
        title="List Layout"
        className={listButtonClass}
        onClick={() => setType(GridDisplayType.LIST)}
      />
    </div>
  )
}

export default GridDisplayOptions
