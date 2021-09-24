import { useUserSelector } from "../../hooks";
import { Redirect } from "react-router-dom";
import { Col, Container, FormControl, Row, Tab, Tabs } from "react-bootstrap";
import styles from "../../styles/sass/components/pages/ProfilePage.module.scss";
import { faCheckCircle, faCircleNotch, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
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
        return <Redirect to={"/menu"} />;
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

    return (
        <Container fluid className={styles.wrapper}>
            <Row>
                <Col className={styles.sidebar} xs={12} md={4}>
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
                        <FormControl value={nickname} onChange={onNicknameChange} placeholder="Nickname" /> :
                        <p className={styles.value}>{nickname}</p>
                    }

                    <p className={styles.label}>Email</p>
                    <p className={styles.value}>{user.email}</p>
                </Col>

                <Col xs={12} md={7} className={styles.main}>
                    <Tabs defaultActiveKey="overview" id="profile-tabs" className="mb-3" variant="pills">
                        <Tab title="Overview" eventKey="overview">

                        </Tab>

                        <Tab title="Stats" eventKey="stats">

                        </Tab>

                        <Tab title="Kanji" eventKey="kanji">

                        </Tab>

                        <Tab title="Ranks" eventKey="ranks">
                            <p>You are not current ranked on any high scores.</p>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    )
}

export default ProfilePage;

