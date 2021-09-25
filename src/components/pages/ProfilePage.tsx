import { useUserSelector } from "../../hooks";
import { Redirect } from "react-router-dom";
import { Button, Card, CardColumns, Col, Container, FormControl, Row, Table } from "react-bootstrap";
import styles from "../../styles/sass/components/pages/ProfilePage.module.scss";
import { faCheckCircle, faCircleNotch, faPencilAlt, faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useState } from "react";
import dayjs from 'dayjs';
import { Numbers } from "../../utility/Numbers";

const ProfilePage = () => {

    const user = useUserSelector(state => state.user).user;

    const [editing, setEditing] = useState(false);
    const [saving, setSaving] = useState(false);
    const [nickname, setNickname] = useState(user?.nickname);

    if (!user) {
        return <Redirect to={"/menu"}/>;
    }

    const onClickEdit = () => {
        setEditing(true);
    }

    const onFinishEditing = () => {
        setEditing(false);
        setSaving(true);
        setTimeout(() => {
            setSaving(false);
        }, 2000);
    }

    const onNicknameChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setNickname(e.target.value);
    }

    const parseDate = () => {
        const date = dayjs(user.creationDate);
        const day = date.date();
        const suffix = Numbers.getOrdinalSuffix(day);
        return `${day}${suffix} ${date.format('MMMM')} ${date.year()}`
    }

    const onRefreshHighscores = () => {

    }

    return (
        <Container fluid className={styles.wrapper}>
            <CardColumns>
                <Card className={styles.card} border="primary">
                    <Card.Body>
                        <h2 className={styles.heading}>
                            About
                            {editing ? <FontAwesomeIcon
                                size="sm"
                                title="Save"
                                icon={faCheckCircle}
                                className={styles.save}
                                onClick={onFinishEditing}
                            /> : saving ?
                                <FontAwesomeIcon
                                    size="sm"
                                    spin={true}
                                    title="Saving..."
                                    icon={faCircleNotch}
                                    className={styles.spinner}
                                /> :
                                <FontAwesomeIcon
                                    size="sm"
                                    title="Edit"
                                    icon={faPencilAlt}
                                    onClick={onClickEdit}
                                    className={styles.edit}
                                />}
                        </h2>

                        <p className={styles.label}>Joined</p>
                        <p className={styles.value}>{parseDate()}</p>

                        <p className={styles.label}>Username</p>
                        <p className={styles.value}>{user.username}</p>

                        <p className={styles.label}>Nickname</p>
                        {editing ?
                            <FormControl value={nickname} onChange={onNicknameChange} placeholder="Nickname"/> :
                            <p className={styles.value}>{nickname}</p>
                        }

                        <p className={styles.label}>Email</p>
                        <p className={styles.value}>{user.email}</p>
                    </Card.Body>
                </Card>

                <Card className={styles.card}>
                    <Card.Body>
                        <h2 className={styles.heading}>Overview</h2>
                    </Card.Body>
                </Card>

                <Card className={styles.card} border="warning">
                    <Card.Body>
                        <h2 className={styles.heading}>
                            Ranks
                            <FontAwesomeIcon
                                size="sm"
                                title="Refresh"
                                icon={faRedo}
                                className={styles.refresh}
                                onClick={onRefreshHighscores}
                            />
                        </h2>
                        <Table responsive hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Leaderboard</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2</td>
                                    <td>Romaji Time Attack</td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>Kanji Hardcore</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

                <Card className={styles.card}>
                    <Card.Body>
                        <h2 className={styles.heading}>Stats</h2>
                    </Card.Body>
                </Card>

                <Card className={styles.card}>
                    <Card.Body>
                        <h2 className={styles.heading}>Preferences</h2>
                        <Row>
                            <Col xs={6}>
                                <p className={styles.label}>Default font</p>
                            </Col>
                            <Col xs={6}>
                                <p className={styles.value}>Default font</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6}>
                                <p className={styles.label}>Theme</p>
                            </Col>
                            <Col xs={6}>
                                <p className={styles.value}>Dark Mode</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6}>
                                <p className={styles.label}>Language</p>
                            </Col>
                            <Col xs={6}>
                                <p className={styles.value}>English</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6}>
                                <p className={styles.label}>Highscores</p>
                            </Col>
                            <Col xs={6}>
                                <p className={styles.value}>Auto-Submit</p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                <Card className={styles.card} border="danger">
                    <Card.Body>
                        <h2 className={styles.heading}>Danger Zone</h2>

                        <Row>
                            <Col xs={6}>
                                <p className={styles.label}>Clear Local Storage</p>
                            </Col>
                            <Col xs={6}>
                                <Button variant="danger">Clear</Button>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6}>
                                <p className={styles.label}>Reset Highscores</p>
                            </Col>
                            <Col xs={6}>
                                <Button variant="danger">Reset</Button>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6}>
                                <p className={styles.label}>Delete Account</p>
                            </Col>
                            <Col xs={6}>
                                <Button variant="danger">Delete</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </CardColumns>
        </Container>
    )
}

export default ProfilePage;
