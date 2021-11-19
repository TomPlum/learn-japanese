import { Kanji } from "../domain/kanji/Kanji";
import KanjiRepository from "../repository/KanjiRepository";
import { KanjiSettingsBuilder } from "../domain/session/settings/data/KanjiSettings";
import { KyoikuGrade } from "../domain/kanji/KyoikuGrade";

export interface KanjiPage {
    value: Kanji[];
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
    public async getKanjiPage(page: number, size: number, grades?: KyoikuGrade[]): Promise<KanjiPage> {
        const settings = new KanjiSettingsBuilder().withGrades(grades ?? KyoikuGrade.ALL).build();
        return this._repository.read(settings, { page, size }).then(response => {
            return { value: response };
        }).catch(response => {
            return {
                value: [],
                error: response.error ?? "An unknown error has occurred."
            };
        });
    }
}

export default KanjiService;
