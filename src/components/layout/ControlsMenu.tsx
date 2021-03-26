import { Component } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { faHome, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FontSelector from "./FontSelector";
import HashLink from "./HashLink";
import ThemeButton from "../ui/ThemeButton";
import styles from "../../styles/sass/components/layout/ControlsMenu.module.scss";

class ControlsMenu extends Component {
    render() {
        return (
            <Navbar variant="dark" fixed="top" className={styles.navbar}>
                <Container className={styles.innerWrapper} fluid>
                    <Nav className={styles.nav}>
                        <Row className={styles.row} noGutters>
                            <Col>
                                <HashLink path="/" className={styles.navLink}>
                                    <div>
                                        <FontAwesomeIcon icon={faHome} className={styles.icon}/>
                                    </div>
                                    <span className={styles.linkText}>Home</span>
                                </HashLink>
                            </Col>

                            <Col>
                                <ThemeButton className={styles.navLink} />
                            </Col>

                            <Col>
                                <FontSelector className={styles.navLink} onSelect={() => {}}/>
                            </Col>

                            <Col>
                                <HashLink path="/help" className={styles.navLink}>
                                    <div>
                                        <FontAwesomeIcon icon={faQuestionCircle} className={styles.icon} />
                                    </div>
                                    <span className={styles.linkText}>Help</span>
                                </HashLink>
                            </Col>
                        </Row>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default ControlsMenu;