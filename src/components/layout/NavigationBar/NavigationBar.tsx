import { Nav, Navbar } from "react-bootstrap"
import FontSelectorButton from "../../ui/buttons/FontSelectorButton"
import ThemeButton from "../../ui/buttons/ThemeButton"
import UserButton from "../../user/UserButton"
import LearnButton from "../../ui/buttons/LearnButton"
import { useUserSelector } from "../../../hooks"
import NotificationsButton from "../../ui/buttons/NotificationsButton"
import HelpButton from "../../ui/buttons/HelpButton"
import HomeButton from "../../ui/buttons/HomeButton"
import styles  from "./NavigationBar.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export interface NavigationBarProps {
  onLaunchLoginModal: () => void
}

const NavigationBar = (props: NavigationBarProps) => {
  const { onLaunchLoginModal } = props

  const user = useUserSelector((state) => state.user.user)

  return (
    <Navbar variant="dark" fixed="top" expand="md" className={styles.navbar} data-testid="navigation-bar">
      <Nav className={styles.nav}>
        <Navbar.Toggle
          fixedWidth
          icon={faBars}
          as={FontAwesomeIcon}
          className={styles.toggle}
          aria-controls="navigation-bar"
        />

        <Navbar.Collapse id="navigation-bar">
          <div className={styles.leftButtonWrapper}>
            <HomeButton />
            <LearnButton />
            <HelpButton />
          </div>
        </Navbar.Collapse>

        <div className={styles.buttonWrapper}>
          <ThemeButton className={styles.button} />
          <FontSelectorButton className={styles.button} />
          {user && <NotificationsButton className={styles.button} />}
          <UserButton onClick={onLaunchLoginModal}  />
        </div>
      </Nav>
    </Navbar>
  )
}

export default NavigationBar
