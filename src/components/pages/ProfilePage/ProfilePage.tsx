import { useUserSelector } from "../../../hooks"
import { Container, Row } from "react-bootstrap"
import About from "../../user/profile/About"
import styles  from "./ProfilePage.module.scss"
import Ranks from "../../user/profile/Ranks"
import Preferences from "../../user/profile/Preferences"
import Overview from "../../user/profile/Overview"
import Stats from "../../user/profile/Stats"
import DangerZone from "../../user/profile/DangerZone"

const ProfilePage = () => {
  const user = useUserSelector((state) => state.user).user!

  return (
    <Container fluid className={styles.wrapper}>
      <Row>
        <About user={user} />
        <Ranks />
        <Overview />
        <Stats />
        <Preferences user={user} />
        <DangerZone />
      </Row>
    </Container>
  )
}

export default ProfilePage
