import LearningDataService from "../../service/LearningDataService";
import { KyoikuGrade } from "../../domain/kanji/KyoikuGrade";
import DataSettings from "../../domain/session/settings/data/DataSettings";
import { NumbersSettingsBuilder } from "../../domain/session/settings/data/NumbersSettings";
import { BasicsSettingsBuilder } from "../../domain/session/settings/data/BasicsSettings";
import { KanjiSettingsBuilder } from "../../domain/session/settings/data/KanjiSettings";
import { CalendarSettingsBuilder } from "../../domain/session/settings/data/CalendarSettings";
import { SentenceStructureSettingsBuilder } from "../../domain/session/settings/data/SentenceStructureSettings";
import { KanaSettingsBuilder } from "../../domain/session/settings/data/KanaSettings";
import { Kanji } from "../../domain/kanji/Kanji";
import { KanjiReading } from "../../domain/kanji/KanjiReading";
import { ReadingType } from "../../domain/kanji/ReadingType";
import JLTPLevel from "../../domain/learn/JLTPLevel";
import { Example } from "../../domain/kanji/Example";

const mockKanaService = jest.fn();
jest.mock('../../service/KanaService', () => function() {
    return { getKana: mockKanaService }
});

const mockCalendarRepository = jest.fn();
jest.mock('../../repository/CalendarRepository', () => function() {
    return { read: mockCalendarRepository }
});

const mockGetKanji = jest.fn();
jest.mock('../../service/KanjiService', () => function() {
    return { getKanjiPage: mockGetKanji }
});

const mockBasicsRepository = jest.fn();
jest.mock('../../repository/BasicsRepository', () => function() {
    return { read: mockBasicsRepository }
});

const mockNumbersRepository = jest.fn();
jest.mock('../../repository/NumbersRepository', () => function() {
    return { read: mockNumbersRepository }
});

const mockSentenceStructureRepository = jest.fn();
jest.mock('../../repository/SentenceStructureRepository', () => function() {
    return { read: mockSentenceStructureRepository }
});

describe("Learn Data Repository", () => {

    const service = new LearningDataService();

    test('Should delegate to the KanaRepository when the topic is Kana', () => {
        const config: DataSettings = new KanaSettingsBuilder().withHiragana().build();
        service.read(config);
        expect(mockKanaService).toHaveBeenCalledWith(config);
    });

    test('Should delegate to the CalendarRepository when the topic is Calendar', () => {
        const config: DataSettings = new CalendarSettingsBuilder().withDays().build();
        service.read(config);
        expect(mockCalendarRepository).toHaveBeenCalledWith(config);
    });

    test('Should delegate to the kanji service when the topic is Kanji', () => {
        const kanji = new Kanji(
            "魚",
            [new KanjiReading("sakana", "さかな", ReadingType.KUN), new KanjiReading("go", "ご", ReadingType.ON)],
            ["fish"],
            KyoikuGrade.TWO,
            JLTPLevel.N5, "https://jisho.org/魚",
            [new Example("金魚", ["きんぎょ"], ["goldfish"])],
            10,
            ["animal"]
        );
        mockGetKanji.mockResolvedValueOnce({ kanji: [kanji] });

        const config: DataSettings = new KanjiSettingsBuilder().withGrades([KyoikuGrade.ONE]).build();
        return service.read(config).then(() => {
            expect(mockGetKanji).toHaveBeenCalledWith(0, 9999, [KyoikuGrade.ONE]);
        });
    });

    test('Should delegate to the BasicsRepository when the topic is Basics', () => {
        const config: DataSettings = new BasicsSettingsBuilder().withColours().build();
        service.read(config);
        expect(mockBasicsRepository).toHaveBeenCalledWith(config);
    });

    test('Should delegate to the NumbersRepository when the topic is Numbers & Counting', () => {
        const config: DataSettings = new NumbersSettingsBuilder().withNumbers().build();
        service.read(config);
        expect(mockNumbersRepository).toHaveBeenCalledWith(config);
    });

    test('Should delegate to the SentenceStructureRepository when the topic is Sentence Structure', () => {
        const config: DataSettings = new SentenceStructureSettingsBuilder().withNouns().build();
        service.read(config);
        expect(mockSentenceStructureRepository).toHaveBeenCalledWith(config);
    });

    test('Passing in falsy settings should return an empty array', () => {
       return service.read(undefined).then(response => {
           expect(response).toHaveLength(0);
       });
    });
});
