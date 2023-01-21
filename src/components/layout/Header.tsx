import { Component } from "react"
import { Nav, Navbar } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faHome, faPlay, faSearch } from "@fortawesome/free-solid-svg-icons"
import styles from "../../styles/sass/components/layout/Header.module.scss"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
        <Navbar.Brand className={styles.brand}>
          <a href="/">
            <img src="logo.png" className={styles.logo} alt="logo" />
          </a>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className={styles.nav}>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faHome} className={styles.link} /> Home
            </Nav.Link>

            <Nav.Link href="/play">
              <FontAwesomeIcon icon={faPlay} className={styles.link} /> Play
            </Nav.Link>

            <Nav.Link href="/kanji">
              <FontAwesomeIcon icon={faCircle} className={styles.link} /> Kanji
            </Nav.Link>

            <Nav.Link href="/search">
              <FontAwesomeIcon icon={faSearch} className={styles.link} /> Search
            </Nav.Link>

            <Nav.Link target="_blank" href="https://www.github.com/TomPlum" className={styles.link}>
              <FontAwesomeIcon icon={faGithub} size="lg" fixedWidth />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header
