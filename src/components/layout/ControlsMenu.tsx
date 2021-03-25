import { Component } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { faAdjust, faHome, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/sass/components/layout/ControlsMenu.module.scss";
import FontSelector from "./FontSelector";
import HashLink from "./HashLink";

class ControlsMenu extends Component<any, any> {
    render() {
        return (
            <Navbar variant="dark" fixed="top" className={styles.navbar}>
                <Container className={styles.innerWrapper} fluid>
                    <Nav className={styles.nav}>
                        <Row className={styles.row} noGutters>
                            <Col>
                                <HashLink path="/" className={styles.navLink}>
                                    <div>
                                        <FontAwesomeIcon icon={faHome} className={styles.icon} title="Home"/>
                                    </div>
                                    <span className={styles.linkText}>HOME</span>
                                </HashLink>
                            </Col>

                            <Col>
                                <Nav.Link className={styles.navLink}>
                                    <div>
                                        <FontAwesomeIcon icon={faAdjust} className={styles.icon} title="Dark Mode"/>
                                    </div>
                                    <span className={styles.linkText}>LIGHT</span>
                                </Nav.Link>
                            </Col>

                            <Col>
                                <FontSelector className={styles.navLink} onSelect={() => {
                                }}/>
                            </Col>

                            <Col>
                                <HashLink path="/help" className={styles.navLink}>
                                    <div>
                                        <FontAwesomeIcon icon={faQuestionCircle} className={styles.icon} title="Help"/>
                                    </div>
                                    <span className={styles.linkText}>HELP</span>
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