import { Card, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCircleNotch, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useState } from "react";
import { User } from "../../../slices/UserSlice";
import dayjs from "dayjs";
import { Numbers } from "../../../utility/Numbers";
import styles from "../../../styles/sass/components/user/profile/About.module.scss";

export interface AboutProps {
    user: User;
}

const About = (props: AboutProps) => {

    const [editing, setEditing] = useState(false);
    const [saving, setSaving] = useState(false);
    const [nickname, setNickname] = useState(props.user?.nickname);

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
        const date = dayjs(props.user.creationDate);
        const day = date.date();
        const suffix = Numbers.getOrdinalSuffix(day);
        return `${day}${suffix} ${date.format('MMMM')} ${date.year()}`
    }

    return (
        <Card className={styles.card} border="primary">
            <Card.Body>
                <h2 className={styles.heading}>
                    About
                    {editing ? <FontAwesomeIcon
                        size="sm"
                        title="Save"
                        icon={faCheckCircle}
                        className={[styles.save, styles.icon].join(" ")}
                        onClick={onFinishEditing}
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
                        />}
                </h2>

                <p className={styles.label}>Joined</p>
                <p className={styles.value}>{parseDate()}</p>

                <p className={styles.label}>Username</p>
                <p className={styles.value}>{props.user.username}</p>

                <p className={styles.label}>Nickname</p>
                {editing ?
                    <FormControl value={nickname} onChange={onNicknameChange} placeholder="Nickname"/> :
                    <p className={styles.value}>{nickname}</p>
                }

                <p className={styles.label}>Email</p>
                <p className={styles.value}>{props.user.email}</p>
            </Card.Body>
        </Card>
    );
}

export default About;
