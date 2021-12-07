import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import FontSelectorButton from "../ui/buttons/FontSelectorButton";
import ThemeButton from "../ui/buttons/ThemeButton";
import styles from "../../styles/sass/components/layout/ControlsMenu.module.scss";
import UserButton from "../user/UserButton";
import LearnButton from "../ui/buttons/LearnButton";
import { useModeSelector } from "../../hooks";
import NotificationsButton from "../ui/buttons/NotificationsButton";
import HelpButton from "../ui/buttons/HelpButton";
import HomeButton from "../ui/buttons/HomeButton";

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
                    <Row className={styles.row}>
                        <Col className={styles.leftCol}>
                            <div className={styles.leftButtonWrapper}>
                                <HomeButton className={styles.navLink} disabled={!active} />
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
