import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { faHome, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FontSelectorButton from "../ui/buttons/FontSelectorButton";
import HashLink from "./HashLink";
import ThemeButton from "../ui/buttons/ThemeButton";
import styles from "../../styles/sass/components/layout/ControlsMenu.module.scss";
import AppModeButton from "../ui/buttons/AppModeButton";
import { AppMode } from "../../types/AppMode";
import UserButton from "../user/UserButton";

export interface ControlsMenuProps {
    onChangeAppMode: (mode: AppMode) => void;
    onLaunchLoginModal: () => void;
    startingMode: AppMode;
    active: boolean;
}

const ControlsMenu = (props: ControlsMenuProps) => {
    const { onChangeAppMode, onLaunchLoginModal, startingMode, active } = props;

    return (
        <Navbar variant="dark" fixed="top" className={styles.navbar}>
            <Container className={styles.innerWrapper} fluid>
                <Nav className={styles.nav}>
                    <Row className={styles.row} noGutters>
                        <Col>
                            <HashLink path="/" className={styles.navLink} disabled={!active}>
                                <div>
                                    <FontAwesomeIcon icon={faHome} className={styles.icon}/>
                                </div>
                                <span className={styles.linkText}>Home</span>
                            </HashLink>
                        </Col>

                        <Col>
                            <AppModeButton
                                key={startingMode}
                                className={styles.navLink}
                                mode={startingMode}
                                onClick={onChangeAppMode}
                                disabled={!active}
                            />
                        </Col>

                        <Col>
                            <ThemeButton className={styles.navLink}/>
                        </Col>

                        <Col>
                            <FontSelectorButton className={styles.navLink} />
                        </Col>

                        <Col>
                            <HashLink path="/help" className={styles.navLink}>
                                <div>
                                    <FontAwesomeIcon icon={faQuestionCircle} className={styles.icon} />
                                </div>
                                <span className={styles.linkText}>Help</span>
                            </HashLink>
                        </Col>

                        <Col>
                           <UserButton onClick={onLaunchLoginModal} disabled={!active} />
                        </Col>
                    </Row>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default ControlsMenu;
