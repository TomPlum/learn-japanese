import styles from "./Main.module.scss"
import NavigationWrapper from "components/layout/NavigationWrapper"

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <NavigationWrapper />
    </div>
  )
}

export default Main
