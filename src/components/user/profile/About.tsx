import { Card, Col, FormControl, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCircleNotch, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useState } from "react";
import { updateNickname, User } from "../../../slices/UserSlice";
import dayjs from "dayjs";
import { Numbers } from "../../../utility/Numbers";
import UserService from "../../../service/UserService";
import UpdateResponse from "../../../rest/UpdateResponse";
import styles from "../../../styles/sass/components/user/profile/About.module.scss";
import { useUserDispatch } from "../../../hooks";

export interface AboutProps {
    user: User;
}

const About = (props: AboutProps) => {

    const [editing, setEditing] = useState(false);
    const [saving, setSaving] = useState(false);
    const [nickname, setNickname] = useState<string>(props.user?.nickname ?? "-");
    const [error, setErrorMessage] = useState<string | undefined>(undefined);

    const userDispatch = useUserDispatch();
    const userService = new UserService();

    const onClickEdit = () => {
        setEditing(true);
    }

    const onFinishEditing = () => {
        setEditing(false);
        setSaving(true);
        setErrorMessage(undefined);

        userService.setNickname(nickname).then((response: UpdateResponse) => {
            if (response.success) {
                userDispatch(updateNickname(nickname));
            } else {
                setErrorMessage(response.error);
                setNickname(props.user.nickname ?? "-");
            }
            setSaving(false);
        });
    }

    const onNicknameChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setNickname(e.target.value);
    }

    const parseDate = () => {
        const date = dayjs(props.user.creationDate);
        const day = date.date();
        const suffix = Numbers.getOrdinalSuffix(day);
        return `${day}${suffix} ${date.format('MMMM')} ${date.year()}`
    }

    return (
        <Card className={styles.card} border="info">
            <Card.Body>
                <Row>
                    <Col xs={4}>
                        <h2 className={styles.heading}>About</h2>
                    </Col>
                    <Col xs={6} className={styles.errorContainer}>
                        <span className={styles.error}>{error}</span>
                    </Col>
                    <Col xs={2}>
                        <h2 className={styles.heading}>{editing ?
                            <FontAwesomeIcon
                                size="sm"
                                title="Save"
                                icon={faCheckCircle}
                                onClick={onFinishEditing}
                                className={[styles.save, styles.icon].join(" ")}
                            /> : saving ?
                            <FontAwesomeIcon
                                size="sm"
                                spin={true}
                                title="Saving..."
                                icon={faCircleNotch}
                                className={[styles.spinner, styles.icon].join(" ")}
                            /> :
                            <FontAwesomeIcon
                                size="sm"
                                title="Edit"
                                icon={faPencilAlt}
                                onClick={onClickEdit}
                                className={[styles.edit, styles.icon].join(" ")}
                            />
                        }</h2>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p className={styles.label}>Joined</p>
                        <p className={styles.value}>{parseDate()}</p>

                        <p className={styles.label}>Username</p>
                        <p className={styles.value}>{props.user.username}</p>

                        <p className={styles.label}>Nickname</p>
                        {editing ?
                            <FormControl value={nickname} onChange={onNicknameChange} placeholder="Nickname"/>
                            : <p className={styles.value}>{nickname}</p>
                        }

                        <p className={styles.label}>Email
                            <FontAwesomeIcon
                                size="sm"
                                fixedWidth
                                title="Verified"
                                icon={faCheckCircle}
                                className={styles.save}
                            />
                        </p>
                        <p className={styles.value}>{props.user.email}</p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default About;
