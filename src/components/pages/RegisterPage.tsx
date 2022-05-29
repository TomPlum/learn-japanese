import { useUserSelector } from "../../hooks";
import { Redirect, useHistory } from "react-router-dom";
import RegistrationForm from "../user/RegistrationForm";
import styles from "../../styles/sass/components/pages/RegisterPage.module.scss";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const RegisterPage = () => {
    const user = useUserSelector(state => state.user).user;
    const history = useHistory();

    if (user) {
        return <Redirect to="/home"/>;
    }

    const handleRegistrationSuccess = (username: string) => {
        history.push(`/login?=${username}`)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <Alert variant="info" className={styles.info}>
                    <FontAwesomeIcon icon={faInfoCircle} className={styles.icon} />
                    <span>
                        Creating an account allows you to create and save custom presets,
                        compete in the high-scores, and track your progress and statistics.
                    </span>
                </Alert>
                <RegistrationForm onSuccess={handleRegistrationSuccess}/>
            </div>
        </div>
    );
}

export default RegisterPage;
