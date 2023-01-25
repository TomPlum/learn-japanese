import { ReactNode, useState } from "react";
import NavigationBar from "./NavigationBar"
import UserForm from "../user/UserForm"
import styles from "../../styles/sass/components/layout/NavigationWrapper.module.scss"

const NavigationWrapper = (props: { children?: ReactNode }) => {
  const [inLoginModal, setInLoginModal] = useState(false)

  return (
    <div className={styles.wrapper}>
      <NavigationBar onLaunchLoginModal={() => setInLoginModal(true)} />

      {props.children}

      {inLoginModal && <UserForm show={inLoginModal} onClose={() => setInLoginModal(false)} />}
    </div>
  )
}

export default NavigationWrapper
