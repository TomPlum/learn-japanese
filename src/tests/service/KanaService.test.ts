import KanaService from "../../service/KanaService";
import { KanaSettingsBuilder } from "../../domain/session/settings/data/KanaSettings";
import { Kana } from "../../domain/kana/Kana";
import KanaType from "../../domain/kana/KanaType";
import { KanaColumn } from "../../domain/kana/KanaColumn";

const mockGetKana = jest.fn();
jest.mock("../../repository/KanaRepository", () => {
    return function() { return { read: mockGetKana } };
});

const hiragana = [
    new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
    new Kana("い", ["i"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
];

describe("Kana Service", () => {

    const service = new KanaService();

    it("Should call the repository with the given settings", () => {
        mockGetKana.mockResolvedValueOnce([]);
        const settings = new KanaSettingsBuilder().withEverything().build();
        return service.getKana(settings).then(() => {
            expect(mockGetKana).toHaveBeenCalledWith(settings);
        });
    });

    it("Should return the kana array if the repository call succeeds", () => {
        mockGetKana.mockResolvedValueOnce(hiragana);
        const settings = new KanaSettingsBuilder().withEverything().build();
        return service.getKana(settings).then(response => {
            expect(response).toStrictEqual(hiragana);
        })
    });

    it("Should return an empty array if the repository call fails", () => {
        mockGetKana.mockRejectedValueOnce({ error: "Boom" });
        const settings = new KanaSettingsBuilder().withEverything().build();
        return service.getKana(settings).then(response => {
            expect(response).toStrictEqual([]);
        })
    });
});
