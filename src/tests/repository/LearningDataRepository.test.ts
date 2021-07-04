import LearningDataRepository from "../../repository/LearningDataRepository";
import { KanaRepository } from "../../repository/KanaRepository";
import CalendarRepository from "../../repository/CalendarRepository";
import { KanjiRepository } from "../../repository/KanjiRepository";
import { KyoikuGrade } from "../../types/kanji/KyoikuGrade";
import BasicsRepository from "../../repository/BasicsRepository";
import NumbersRepository from "../../repository/NumbersRepository";
import SentenceStructureRepository from "../../repository/SentenceStructureRepository";
import DataSettings, { BasicsSettingsBuilder, CalendarSettingsBuilder, KanaSettingsBuilder, KanjiSettingsBuilder, NumbersSettingsBuilder, SentenceStructureSettingsBuilder } from "../../types/session/DataSettings";

jest.mock('../../repository/KanaRepository');
jest.mock('../../repository/KanjiRepository');
jest.mock('../../repository/CalendarRepository');
jest.mock('../../repository/BasicsRepository');
jest.mock('../../repository/NumbersRepository');
jest.mock('../../repository/SentenceStructureRepository');

const mockKanaRepository = jest.fn();
const mockCalendarRepository = jest.fn();
const mockKanjiRepository = jest.fn();
const mockBasicsRepository = jest.fn();
const mockNumbersRepository = jest.fn();
const mockSentenceStructureRepository = jest.fn();

beforeEach(() => {
    (KanaRepository as jest.MockedFunction<any>).mockImplementation(() => {
        return  { read: mockKanaRepository }
    });

    (CalendarRepository as jest.MockedFunction<any>).mockImplementation(() => {
        return  { read: mockCalendarRepository }
    });

    (KanjiRepository as jest.MockedFunction<any>).mockImplementation(() => {
        return  { read: mockKanjiRepository }
    });

    (BasicsRepository as jest.MockedFunction<any>).mockImplementation(() => {
        return  { read: mockBasicsRepository }
    });

    (NumbersRepository as jest.MockedFunction<any>).mockImplementation(() => {
        return  { read: mockNumbersRepository }
    });

    (SentenceStructureRepository as jest.MockedFunction<any>).mockImplementation(() => {
        return  { read: mockSentenceStructureRepository }
    });
})

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
        repository.read(config);
        expect(mockKanjiRepository).toHaveBeenCalledWith(config);
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
        const response = repository.read(undefined);
        expect(response).toHaveLength(0);
    });
});