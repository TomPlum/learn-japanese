import { useState } from "react"
import { Theme } from "types/Theme"
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons"
import menuStyles from "components/layout/NavigationBar/NavigationBar.module.scss"
import styles  from "./ThemeButton.module.scss"
import NavigationButton from "../../NavigationButton"

export interface ThemeButtonProps {
  className?: string
}

const ThemeButton = (props: ThemeButtonProps) => {
  const [theme, setTheme] = useState(Theme.DARK)

  const handleOnClick = () => {
    switch (theme) {
      case Theme.DARK: {
        setTheme(Theme.LIGHT)
        break
      }
      case Theme.LIGHT: {
        setTheme(Theme.DARK)
        break
      }
    }
  }

  const iconClassName = styles[`theme-${theme.toLowerCase().replaceAll(" ", "-")}`]

  return (
    <NavigationButton
      disableDropdown
      id="theme-button"
      onClick={handleOnClick}
      textClass={menuStyles.linkText}
      containerClass={props.className}
      icon={theme === Theme.DARK ? faLightbulb : faMoon}
      iconClass={[menuStyles.icon, iconClassName].join(" ")}
    />
  )
}

export default ThemeButton
