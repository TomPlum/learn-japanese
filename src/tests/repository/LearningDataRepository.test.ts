import LearningDataRepository from "../../repository/LearningDataRepository";
import { KyoikuGrade } from "../../domain/kanji/KyoikuGrade";
import DataSettings from "../../domain/session/settings/data/DataSettings";
import { NumbersSettingsBuilder } from "../../domain/session/settings/data/NumbersSettings";
import { BasicsSettingsBuilder } from "../../domain/session/settings/data/BasicsSettings";
import { KanjiSettingsBuilder } from "../../domain/session/settings/data/KanjiSettings";
import { CalendarSettingsBuilder } from "../../domain/session/settings/data/CalendarSettings";
import { SentenceStructureSettingsBuilder } from "../../domain/session/settings/data/SentenceStructureSettings";
import { KanaSettingsBuilder } from "../../domain/session/settings/data/KanaSettings";

const mockKanaRepository = jest.fn();
jest.mock('../../repository/KanaRepository', () => function() {
    return { read: mockKanaRepository }
});

const mockCalendarRepository = jest.fn();
jest.mock('../../repository/CalendarRepository', () => function() {
    return { read: mockCalendarRepository }
});

const mockKanjiRepository = jest.fn();
jest.mock('../../repository/KanjiRepository', () => function() {
    return { read: mockKanjiRepository }
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

    const repository = new LearningDataRepository();

    test('Should delegate to the KanaRepository when the topic is Kana', () => {
        const config: DataSettings = new KanaSettingsBuilder().withHiragana().build();
        repository.read(config);
        expect(mockKanaRepository).toHaveBeenCalledWith(config);
    });

    test('Should delegate to the CalendarRepository when the topic is Calendar', () => {
        const config: DataSettings = new CalendarSettingsBuilder().withDays().build();
        repository.read(config);
        expect(mockCalendarRepository).toHaveBeenCalledWith(config);
    });

    test('Should delegate to the KanjiRepository when the topic is Kanji', () => {
        const config: DataSettings = new KanjiSettingsBuilder().withGrades([KyoikuGrade.ONE]).build();
        return repository.read(config).then(() => {
            expect(mockKanjiRepository).toHaveBeenCalledWith(config);
        });
    });

    test('Should delegate to the BasicsRepository when the topic is Basics', () => {
        const config: DataSettings = new BasicsSettingsBuilder().withColours().build();
        repository.read(config);
        expect(mockBasicsRepository).toHaveBeenCalledWith(config);
    });

    test('Should delegate to the NumbersRepository when the topic is Numbers & Counting', () => {
        const config: DataSettings = new NumbersSettingsBuilder().withNumbers().build();
        repository.read(config);
        expect(mockNumbersRepository).toHaveBeenCalledWith(config);
    });

    test('Should delegate to the SentenceStructureRepository when the topic is Sentence Structure', () => {
        const config: DataSettings = new SentenceStructureSettingsBuilder().withNouns().build();
        repository.read(config);
        expect(mockSentenceStructureRepository).toHaveBeenCalledWith(config);
    });

    test('Passing in falsy settings should return an empty array', () => {
       return repository.read(undefined).then(response => {
           expect(response).toHaveLength(0);
       });
    });
});
