import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FontSelectorButton from "../ui/buttons/FontSelectorButton";
import HashLink from "./HashLink";
import ThemeButton from "../ui/buttons/ThemeButton";
import styles from "../../styles/sass/components/layout/ControlsMenu.module.scss";
import AppModeButton from "../ui/buttons/AppModeButton";
import UserButton from "../user/UserButton";
import HelpButton from "../ui/buttons/HelpButton";
import { useModeSelector } from "../../hooks";

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
                        <Col>
                            <HashLink path="/" className={styles.navLink} disabled={!active}>
                                <div>
                                    <FontAwesomeIcon icon={faHome} className={styles.icon}/>
                                </div>
                                <span className={styles.linkText}>Home</span>
                            </HashLink>
                        </Col>

                        <Col>
                            <AppModeButton className={styles.navLink} disabled={!active} />
                        </Col>

                        <Col>
                            <ThemeButton className={styles.navLink}/>
                        </Col>

                        <Col>
                            <FontSelectorButton className={styles.navLink} />
                        </Col>

                        <Col>
                            <HelpButton />
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
