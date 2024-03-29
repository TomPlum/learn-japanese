import styles  from "./DashboardCardHeader.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons"
import DashboardCardTitle from "./../DashboardCardTitle"
import React, { PropsWithChildren, ReactElement } from "react";
import DashboardCardIcon from "./../DashboardCardIcon"
import DashboardCardSettingsMenu from "./../DashboardCardSettingsMenu"

export interface DashboardCardHeaderProps {
  error?: string
  className?: string
  onReload?: () => void
}

const DashboardCardHeader = (props: PropsWithChildren<DashboardCardHeaderProps>) => {
  const { children, className, error, onReload } = props

  return (
    <div className={[styles.header, className].join(" ")}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childElement = child as ReactElement
          switch (childElement.type) {
            case DashboardCardTitle: {
              return React.cloneElement(child)
            }
            case DashboardCardIcon: {
              return React.cloneElement(child)
            }
            case DashboardCardSettingsMenu: {
              return !error ? React.cloneElement(childElement, { className: styles.settings }) : null
            }
            default: {
              return child
            }
          }
        }
      })}

      {error && error != "" && (
        <FontAwesomeIcon title="Retry" icon={faSyncAlt} onClick={onReload} className={styles.reload} />
      )}
    </div>
  )
}

export default Object.assign(DashboardCardHeader, {
  Title: DashboardCardTitle,
  Icon: DashboardCardIcon,
  SettingsMenu: DashboardCardSettingsMenu
})
