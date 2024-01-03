import styles  from "./HomePage.module.scss"
import { Container } from "react-bootstrap"
import { useUserSelector } from "../../../hooks"
import UserDashboardLayout from "../../layout/UserDashboardLayout"
import AnonymousDashboardLayout from "../../layout/AnonymousDashboardLayout"

const HomePage = () => {
  const user = useUserSelector((state) => state.user.user)

  return (
    <Container className={styles.wrapper} data-testid="home-page">
      {user ? <UserDashboardLayout /> : <AnonymousDashboardLayout />}
    </Container>
  )
}

export default HomePage
