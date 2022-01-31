import KanjiFlashCardsCard from "./KanjiFlashCardsCard";
import { useUserSelector } from "../../hooks";
import PlayCard from "./PlayCard";
import styles from "../../styles/sass/components/cards/CardContainer.module.scss";

const CardContainer = () => {

    const user = useUserSelector(state => state.user).user;

    if (!user) {
        return (
            <p>You must be logged in to view cards.</p>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <KanjiFlashCardsCard />
                <PlayCard />
            </div>
        </div>
    );
}

export default CardContainer;
