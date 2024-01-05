import { useState } from "react";
import NavigationBar from "./../NavigationBar"
import UserForm from "../../user/UserForm"
import styles  from "./NavigationWrapper.module.scss"
import { Outlet, useLocation } from "react-router-dom";

const NavigationWrapper = () => {
  const location = useLocation()
  const [inLoginModal, setInLoginModal] = useState(false)

  const isLandingPage = location.pathname === '/'

  return (
    <div className={styles.wrapper}>
      {!isLandingPage && (
        <NavigationBar onLaunchLoginModal={() => setInLoginModal(true)} />
      )}

      <Outlet />

      {inLoginModal && (
        <UserForm
          show={inLoginModal}
          onClose={() => setInLoginModal(false)}
        />
      )}
    </div>
  )
}

export default NavigationWrapper
