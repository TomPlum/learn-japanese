import React from "react"
import { faChartBar, faDoorOpen, faTrophy, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { useUserDispatch, useUserSelector } from "../../hooks"
import { clearUser } from "../../slices/UserSlice"
import menuStyles from "../../styles/sass/components/layout/NavigationBar.module.scss"
import styles from "../../styles/sass/components/user/UserButton.module.scss"
import NavigationButton from "../ui/NavigationButton"
import { useTranslation } from "react-i18next"

export interface UserButtonProps {
  onClick: () => void
  disabled: boolean
}

const UserButton = (props: UserButtonProps) => {
  const userDispatch = useUserDispatch()
  const user = useUserSelector((state) => state.user.user)
  const { t } = useTranslation("translation", { keyPrefix: "navigation.button.user" })

  const getButtonText = (): string => {
    if (user) {
      if (user.nickname) {
        return user.nickname
      } else {
        return user.username
      }
    } else {
      return t("login")
    }
  }

  const handleLogout = () => {
    userDispatch(clearUser())
  }

  return (
    <NavigationButton
      id="user-button"
      text={getButtonText()}
      textPlacement="left"
      onClick={props.onClick}
      disableDropdown={!user}
      disabled={props.disabled}
      className={styles.button}
      iconClass={menuStyles.icon}
      textClass={menuStyles.linkText}
      icon={user ? faUserCircle : faUser}
    >
      <NavigationButton.Item icon={faUserCircle} iconClass={styles.profile} href="/profile">
        {t("profile")}
      </NavigationButton.Item>

      <NavigationButton.Item icon={faChartBar} iconClass={styles.stats} href="/profile#stats">
        {t("stats")}
      </NavigationButton.Item>

      <NavigationButton.Item icon={faTrophy} iconClass={styles.highscores} href="/high-scores">
        {t("high-scores")}
      </NavigationButton.Item>

      <NavigationButton.Item icon={faDoorOpen} onClick={handleLogout} iconClass={styles.logout}>
        {t("logout")}
      </NavigationButton.Item>
    </NavigationButton>
  )
}

export default UserButton
