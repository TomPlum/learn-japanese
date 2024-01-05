import menuStyles from "components/layout/NavigationBar/NavigationBar.module.scss"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import NavigationButton from "../../NavigationButton"
import { useTranslation } from "react-i18next"

export interface HomeButtonProps {
  className?: string
  disabled?: boolean
}

const HomeButton = ({ disabled }: HomeButtonProps) => {
  const { t, ready } = useTranslation()

  return (
    <NavigationButton
      href="/home"
      icon={faHome}
      disableDropdown
      id="home-button"
      disabled={disabled}
      textLoading={!ready}
      textPlacement="right"
      iconClass={menuStyles.icon}
      textClass={menuStyles.linkText}
      text={t("navigation.button.home")}
    />
  )
}

export default HomeButton
