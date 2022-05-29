import { useQueryParams, useUserSelector } from "../../hooks";
import { Redirect, useHistory } from "react-router-dom";
import LoginForm from "../user/LoginForm";
import styles from "../../styles/sass/components/pages/LoginPage.module.scss";

const LoginPage = () => {
    const user = useUserSelector(state => state.user).user;
    const history = useHistory();
    const params = useQueryParams();

    if (user) {
        return <Redirect to="/home" />;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <LoginForm
                    username={params.get("username") ?? ""}
                    onSuccess={() => history.push("/home")}
                />
            </div>
        </div>
    );
}

export default LoginPage;
