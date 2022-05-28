import { useUserSelector } from "../../hooks";
import { Redirect } from "react-router-dom";
import RegistrationForm from "../user/RegistrationForm";
import styles from "../../styles/sass/components/pages/RegisterPage.module.scss";

const RegisterPage = () => {
    const user = useUserSelector(state => state.user).user;

    if (user) {
        return <Redirect to="/home" />;
    }

    const handleRegistrationSuccess = (username: string) => {

    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <RegistrationForm onSuccess={handleRegistrationSuccess} />
            </div>
        </div>
    );
}

export default RegisterPage;
