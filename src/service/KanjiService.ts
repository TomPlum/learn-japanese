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
            const kanji: KanjiResult[] = response.map(value => {
                return { value: value, field: undefined };
            });
            return { kanji: kanji };
        }).catch(response => {
            return {
                kanji: [],
                error: response.error ?? "An unknown error has occurred."
            };
        });
    }

    /**
     * Retrieves a collection of kanji that match the given search parameter.
     * @param term The term to search by.
     * @return response An array of match kanji paired with the field they matched on.
     */
    public async search(term: string): Promise<KanjiSearch> {
        return this._repository.getBySearchTerm(term).then(response => {
            if (response.results.length > 0) {
                return { kanji: response.results };
            } else {
                return { kanji: [], error: response.error };
            }
        }).catch(response => {
            return { kanji: [], error: response.error };
        });
    }
}

export default KanjiService;
