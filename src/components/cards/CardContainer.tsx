import KanjiFlashCardsCard from "./KanjiFlashCardsCard";
import { useUserSelector } from "../../hooks";

const CardContainer = () => {

    const user = useUserSelector(state => state.user).user;

    if (!user) {
        return (
            <p>You must be logged in to view cards.</p>
        );
    }

    return (
        <KanjiFlashCardsCard />
    );
}

export default CardContainer;
