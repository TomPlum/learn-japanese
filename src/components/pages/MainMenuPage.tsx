import styles from "../../styles/sass/components/pages/MainMenuPage.module.scss";
import CardContainer from "../cards/CardContainer";

const MainMenuPage = () => {
    return (
        <div className={styles.wrapper}>
            <CardContainer />
        </div>
    );
}

export default MainMenuPage;
