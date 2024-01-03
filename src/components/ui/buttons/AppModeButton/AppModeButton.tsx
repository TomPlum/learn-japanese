import { Nav } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGamepad, faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { AppMode } from "../../../../domain/AppMode"
import menuStyles from "components/layout/NavigationBar/NavigationBar.module.scss"
import { useModeDispatch, useModeSelector } from "../../../../hooks"
import { switchApplicationMode } from "../../../../slices/ModeSlice"

export interface AppModeButtonProps {
  disabled: boolean
  className?: string
}

const AppModeButton = (props: AppModeButtonProps) => {
  const mode = useModeSelector((state) => state.mode.mode)
  const modeDispatcher = useModeDispatch()

  const handleClick = () => {
    modeDispatcher(switchApplicationMode())
  }

  return (
    <Nav.Link className={props.className} disabled={props.disabled} onClick={handleClick}>
      <div>
        <FontAwesomeIcon icon={mode === AppMode.PLAY ? faGraduationCap : faGamepad} className={menuStyles.icon} />
      </div>
      <span className={menuStyles.linkText}>{mode === AppMode.PLAY ? AppMode.LEARN : AppMode.PLAY}</span>
    </Nav.Link>
  )
}

export default AppModeButton
