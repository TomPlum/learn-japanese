import { useUserSelector } from "../../hooks";
import { Redirect } from "react-router-dom";
import LoginForm from "../user/LoginForm";
import { useHistory } from "react-router-dom";
import styles from "../../styles/sass/components/pages/LoginPage.module.scss";

const LoginPage = () => {
    const user = useUserSelector(state => state.user).user;
    const history = useHistory();

    if (user) {
        return <Redirect to="/home" />;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <LoginForm onSuccess={() => history.push("/home")} />
            </div>
        </div>
    );
}

export default LoginPage;
