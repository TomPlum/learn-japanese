import { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlay, faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/layout/Header.module.scss";

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
                <Navbar.Brand className={styles.brand}>
                    <a href="/">
                        <img src="logo.png" className={styles.logo} alt="logo"/>
                    </a>
                </Navbar.Brand>

                <Navbar.Toggle/>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">
                            <FontAwesomeIcon icon={faHome} /> Home
                        </Nav.Link>

                        <Nav.Link href="/play">
                            <FontAwesomeIcon icon={faPlay} /> Play
                        </Nav.Link>

                        <Nav.Link href="/search">
                            <FontAwesomeIcon icon={faSearch} /> Search
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;