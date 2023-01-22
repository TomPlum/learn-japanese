import React, { PropsWithChildren, ReactElement, useState } from "react"
import GridDisplayOptions from "./GridDisplayOptions"
import { GridOptions } from "../../../../domain/grid/GridOptions"
import GridDisplayType from "../../../../domain/grid/GridDisplayType"
import styles from "../../../../styles/sass/components/layout/wizard/grid/GridDisplay.module.scss"
import ScrollableContainer from "../../../ui/ScrollableContainer"
import LoadingSpinner from "../../../ui/loading/LoadingSpinner"

export interface GridDisplayProps {
  loading?: boolean
  controls?: boolean
  className?: string
  defaultDisplayType?: GridDisplayType
  customOptions?: React.ReactElement
}

const GridDisplay = (props: PropsWithChildren<GridDisplayProps>) => {
  const { loading, children, controls, className, customOptions, defaultDisplayType } = props

  const [options, setOptions] = useState<GridOptions>({ type: GridDisplayType.GRID, size: 80 })

  return (
    <div className={[className, styles.wrapper].join(" ")}>
      <div className={styles.header}>
        <div>{customOptions}</div>

        {controls && (
          <GridDisplayOptions
            className={styles.options}
            defaultType={defaultDisplayType}
            onSelect={(options) => setOptions(options)}
          />
        )}
      </div>

      <ScrollableContainer maxHeight={500}>
        <LoadingSpinner variant="warning" active={loading ?? false} />

        {!loading && (
          <>
            {options.type == GridDisplayType.LIST &&
              React.Children.map(children, (child) => {
                return React.cloneElement(child as ReactElement, {
                  style: { width: "100%", height: 40 },
                  small: options.type.showShort,
                  className: styles.list
                })
              })}

            {options.type == GridDisplayType.GRID &&
              React.Children.map(children, (child) => {
                return React.cloneElement(child as ReactElement, {
                  style: { width: options.size, height: options.size },
                  small: options.type.showShort,
                  className: styles.item
                })
              })}
          </>
        )}
      </ScrollableContainer>
    </div>
  )
}

export default GridDisplay
