import { useUserSelector } from "../../hooks";
import { Redirect } from "react-router-dom";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from "../user/profile/About";
import styles from "../../styles/sass/components/pages/ProfilePage.module.scss";
import Ranks from "../user/profile/Ranks";
import Preferences from "../user/profile/Preferences";
import Overview from "../user/profile/Overview";
import Stats from "../user/profile/Stats";
import DangerZone from "../user/profile/DangerZone";

const ProfilePage = () => {

    const user = useUserSelector(state => state.user).user;

    if (!user) {
        return <Redirect to={"/menu"}/>;
    }

    return (
        <Container fluid className={styles.wrapper}>
            <Row>
                <About user={user} />
                <Ranks />
                <Overview />
                <Stats />
                <Preferences user={user} />
                <DangerZone />
            </Row>
        </Container>
    )
}

export default ProfilePage;
