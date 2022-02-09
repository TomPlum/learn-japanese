import KanjiFlashCardsCard from "./KanjiFlashCardsCard";
import { useUserSelector } from "../../hooks";
import PlayCard from "./PlayCard";
import styles from "../../styles/sass/components/cards/CardContainer.module.scss";
import { SessionSettings } from "../../domain/session/settings/SessionSettings";

export interface CardContainerProps {
    onStartGame: (settings: SessionSettings) => void;
}

const CardContainer = (props: CardContainerProps) => {

    const { onStartGame } = props;

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
                <PlayCard onStartGame={onStartGame} />
            </div>
        </div>
    );
}

export default CardContainer;
