import { Button, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import styles  from "./NotFoundPage.module.scss"

const NotFoundPage = () => {
  return (
    <Container fluid className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Nani!?</h1>
        <h3 className={styles.description}>
          There doesn&apos;t appear to be anything here.
        </h3>

        <Button className={styles.home} variant="outline-success" href="/home">
          <FontAwesomeIcon icon={faHome} fixedWidth className={styles.buttonIcon} />
          <span className={styles.buttonText}> Home</span>
        </Button>
      </div>
    </Container>
  )
}

export default NotFoundPage
