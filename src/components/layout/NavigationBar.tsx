import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import FontSelectorButton from "../ui/buttons/FontSelectorButton";
import ThemeButton from "../ui/buttons/ThemeButton";
import UserButton from "../user/UserButton";
import LearnButton from "../ui/buttons/LearnButton";
import { useModeSelector, useUserSelector } from "../../hooks";
import NotificationsButton from "../ui/buttons/NotificationsButton";
import HelpButton from "../ui/buttons/HelpButton";
import HomeButton from "../ui/buttons/HomeButton";
import styles from "../../styles/sass/components/layout/NavigationBar.module.scss";

export interface NavigationBarProps {
    onLaunchLoginModal: () => void;
}

const NavigationBar = (props: NavigationBarProps) => {
    const { onLaunchLoginModal } = props;

    const active = useModeSelector(state => state.mode.active);
    const user = useUserSelector(state => state.user.user);

    return (
        <Navbar variant="dark" fixed="top" className={styles.navbar}>
            <Container className={styles.innerWrapper} fluid>
{/*                <Navbar.Brand>
                    <img src={`icons/carp.ico`} width={45} height={45} alt="Logo" />
                </Navbar.Brand>*/}
                <Nav className={styles.nav}>
                    <Row className={styles.row}>
                        <Col className={styles.leftCol}>
                            <div className={styles.leftButtonWrapper}>
                                <HomeButton disabled={!active} />
                                <LearnButton />
                                <HelpButton />
                            </div>
                        </Col>

                        <Col className={styles.rightCol}>
                            <div className={styles.buttonWrapper}>
                                <ThemeButton className={styles.button}/>
                                <FontSelectorButton className={styles.button} />
                                {user && <NotificationsButton className={styles.button} />}
                                <UserButton onClick={onLaunchLoginModal} disabled={!active} />
                            </div>
                        </Col>
                    </Row>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
