import MessageQueue from "../rest/MessageQueue";
import { FlashCard } from "../domain/learn/FlashCard";

class SpaceRepetitionRepository {

    private readonly queue = MessageQueue.fromLocalStorage();

    public update(card: FlashCard) {
        this.queue.enqueue({
            method: "POST",
            endpoint: "/flash-cards/kanji/update",
            body: {
                id: card.id,
                easiness: card.details.efactor,
                interval: card.details.interval,
                repetition: card.details.repetition,
                dueDate: card.details.dueDate
            }
        });
    }
}

export default SpaceRepetitionRepository;
