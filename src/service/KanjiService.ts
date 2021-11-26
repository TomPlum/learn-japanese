import { Kanji } from "../domain/kanji/Kanji";
import KanjiRepository from "../repository/KanjiRepository";
import { KanjiSettingsBuilder } from "../domain/session/settings/data/KanjiSettings";
import { KyoikuGrade } from "../domain/kanji/KyoikuGrade";

export interface KanjiResult {
    value: Kanji;
    field?: string;
}

export interface KanjiSearch {
    kanji: KanjiResult[];
    pages: number;
    quantity: number;
    error?: string;
}

class KanjiService {

    private readonly _repository = new KanjiRepository();

    /**
     * Retrieves a single page of kanji characters with the given size.
     * Kyoiku grades can optionally be provided to narrow the search scope.
     * @param page The page to retrieve. Starts from 0.
     * @param size The size of the page.
     * @param grades The grades to include. Omitting includes all.
     */
    public async getKanjiPage(page: number, size: number, grades?: KyoikuGrade[]): Promise<KanjiSearch> {
        const settings = new KanjiSettingsBuilder().withGrades(grades ?? KyoikuGrade.ALL).build();

        return this._repository.read(settings, { page, size }).then(response => {
            const kanji: KanjiResult[] = response.results.map(value => {
                return { value: value, field: undefined, pages: 0, quantity: 0 };
            });
            return { kanji: kanji, pages: response.pages, quantity: response.quantity };
        }).catch(response => {
            return {
                kanji: [],
                error: response.error ?? "An unknown error has occurred.",
                pages: 0,
                quantity: 0
            };
        });
    }

    /**
     * Retrieves a collection of kanji that match the given search parameter.
     * @param page The page to retrieve. Starts from 0.
     * @param size The size of the page.
     * @param term The term to search by.
     * @return response An array of match kanji paired with the field they matched on.
     */
    public async search(page: number, size: number, term: string): Promise<KanjiSearch> {
        return this._repository.getBySearchTerm(page, size, term).then(response => {
            if (response.results.length > 0) {
                return { kanji: response.results, pages: response.pages, quantity: response.quantity };
            } else {
                return { kanji: [], error: response.error, pages: 0, quantity: 0 };
            }
        }).catch(response => {
            return { kanji: [], error: response.error, pages: 0, quantity: 0 };
        });
    }
}

export default KanjiService;
