import { Component } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { faAdjust, faHome, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/sass/components/layout/ControlsMenu.module.scss";
import FontSelector from "./FontSelector";

class ControlsMenu extends Component<any, any> {
    render() {
        return (
            <div className={styles.wrapper}>
                <Navbar variant="dark" fixed="top" className={styles.navbar}>
                    <Container className={styles.innerWrapper} fluid>
                        <Nav className={styles.nav}>
                            <Row className={styles.row} noGutters>
                                <Col>
                                    <Nav.Link href="/" className={styles.navLink}>
                                        <div>
                                            <FontAwesomeIcon icon={faHome} className={styles.icon} title="Home" />
                                        </div>
                                        <span className={styles.linkText}>HOME</span>
                                    </Nav.Link>
                                </Col>

                                <Col>
                                    <Nav.Link className={styles.navLink}>
                                        <div>
                                            <FontAwesomeIcon icon={faAdjust} className={styles.icon} title="Dark Mode" />
                                        </div>
                                        <span className={styles.linkText}>LIGHT</span>
                                    </Nav.Link>
                                </Col>

                                <Col>
                                    <FontSelector className={styles.navLink} onSelect={() => {}}/>
                                </Col>

                                <Col>
                                    <Nav.Link href="/help" className={styles.navLink}>
                                        <div>
                                            <FontAwesomeIcon icon={faQuestionCircle} className={styles.icon} title="Help" />
                                        </div>
                                        <span className={styles.linkText}>HELP</span>
                                    </Nav.Link>
                                </Col>
                            </Row>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default ControlsMenu;