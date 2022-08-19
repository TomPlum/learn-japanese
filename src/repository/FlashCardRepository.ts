import MessageQueue from "../rest/MessageQueue";
import { FlashCard } from "../domain/learn/FlashCard";
import RestClient from "../rest/RestClient";
import { KanjiResponseModel } from "./KanjiRepository";
import KanjiConverter from "../converter/KanjiConverter";
import SpaceRepetitionDetails from "../domain/learn/spacedrepetition/SpaceRepetitionDetails";

export interface FlashCardsResponse {
    id: number;
    kanji: KanjiResponseModel;
    easiness: number;
    repetition: number;
    interval: number;
    dueDate: string;
}

class FlashCardRepository {

    private readonly queue = MessageQueue.fromLocalStorage();
    private readonly kanjiConverter = new KanjiConverter();

    /**
     * Retrieves all the ready-for-review kanji flash cards for the current user.
     * @return cards A list of outstanding flash cards.
     */
    public getKanjiFlashCards(): Promise<FlashCard[]> {
        return RestClient.get<FlashCardsResponse[]>("/learn/flash-cards/kanji").then(response => {
            if (response.data) {
                const data = response.data;
                return data.map(el => {
                    const kanji = this.kanjiConverter.convert([el.kanji])[0];
                    const details = new SpaceRepetitionDetails(el.easiness, el.interval, el.repetition, el.dueDate);
                    return new FlashCard(el.id, kanji, details);
                });
            } else {
                return Promise.resolve([]);
            }
        }).catch(response => {
            return Promise.reject(response);
        });
    }

    public update(card: FlashCard) {
        RestClient.post("/flash-cards/kanji/update", {
            id: card.id,
            easiness: card.details.efactor,
            interval: card.details.interval,
            repetition: card.details.repetition,
            dueDate: card.details.dueDate
        }).catch(e => {
            console.log(e);
        });
    }
}

export default FlashCardRepository;
