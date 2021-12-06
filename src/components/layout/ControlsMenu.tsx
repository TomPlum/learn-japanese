import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FontSelectorButton from "../ui/buttons/FontSelectorButton";
import HashLink from "./HashLink";
import ThemeButton from "../ui/buttons/ThemeButton";
import styles from "../../styles/sass/components/layout/ControlsMenu.module.scss";
import AppModeButton from "../ui/buttons/AppModeButton";
import UserButton from "../user/UserButton";
import LearnButton from "../ui/buttons/LearnButton";
import { useModeSelector } from "../../hooks";
import NotificationsButton from "../ui/buttons/NotificationsButton";
import HelpButton from "../ui/buttons/HelpButton";

export interface ControlsMenuProps {
    onLaunchLoginModal: () => void;
}

const ControlsMenu = (props: ControlsMenuProps) => {
    const { onLaunchLoginModal } = props;

    const active = useModeSelector(state => state.mode.active);

    return (
        <Navbar variant="dark" fixed="top" className={styles.navbar}>
            <Container className={styles.innerWrapper} fluid>
                <Nav className={styles.nav}>
                    <Row className={styles.row} noGutters>
                        <Col className={styles.leftCol}>
                            <div className={styles.buttonWrapper}>
                                <HashLink path="/menu/learn" className={styles.navLink} disabled={!active}>
                                    <div>
                                        <FontAwesomeIcon icon={faHome} className={styles.icon}/>
                                    </div>
                                    <span className={styles.linkText}>Home</span>
                                </HashLink>
                                <AppModeButton disabled={!active} className={styles.navLink} />
                                <LearnButton />
                                <HelpButton />
                            </div>
                        </Col>

                        <Col className={styles.rightCol}>
                            <div className={styles.buttonWrapper}>
                                <ThemeButton className={styles.navLink}/>
                                <FontSelectorButton className={styles.navLink} />
                                <NotificationsButton className={styles.navLink} />
                                <UserButton onClick={onLaunchLoginModal} disabled={!active} />
                            </div>
                        </Col>
                    </Row>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default ControlsMenu;
