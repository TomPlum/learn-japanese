import styles  from "./HomePage.module.scss"
import { Container } from "react-bootstrap"
import UserDashboardLayout from "../../layout/UserDashboardLayout"
import AnonymousDashboardLayout from "../../layout/AnonymousDashboardLayout"
import { useUserContext } from "context/UserContext";

const HomePage = () => {
  const { user } = useUserContext()

  return (
    <Container className={styles.wrapper} data-testid="home-page">
      {user ? <UserDashboardLayout /> : <AnonymousDashboardLayout />}
    </Container>
  )
}

export default HomePage
