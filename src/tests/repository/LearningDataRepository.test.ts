import LearningDataRepository from "../../repository/LearningDataRepository";
import { LearnSessionSettings } from "../../components/layout/GameSettingsMenu";
import Topic from "../../types/Topic";
import { KanaRepository } from "../../repository/KanaRepository";
import CalendarRepository from "../../repository/CalendarRepository";
import { KanjiRepository } from "../../repository/KanjiRepository";
import { KyoikuGrade } from "../../types/kanji/KyoikuGrade";

jest.mock('../../repository/KanaRepository');
jest.mock('../../repository/KanjiRepository');
jest.mock('../../repository/CalendarRepository');

const mockKanaRepository = jest.fn();
const mockCalendarRepository = jest.fn();
const mockKanjiRepository = jest.fn();

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
})

describe("Learn Data Repository", () => {

    const repository = new LearningDataRepository();

    test('Should delegate to the KanaRepository when the topic is Kana', () => {
        const config: LearnSessionSettings = { topic: Topic.KANA, settings: { kana: { hiragana: true } } };
        repository.read(config);
        expect(mockKanaRepository).toHaveBeenCalledWith({ hiragana: true });
    });

    test('Should delegate to the CalendarRepository when the topic is Calendar', () => {
        const config: LearnSessionSettings = { topic: Topic.CALENDAR, settings: { calendar: { days: true } } };
        repository.read(config);
        expect(mockCalendarRepository).toHaveBeenCalledWith({ days: true });
    });

    test('Should delegate to the KanjiRepository when the topic is Kanji', () => {
        const config: LearnSessionSettings = { topic: Topic.KANJI, settings: { kanji: { grades: [KyoikuGrade.ONE] } } };
        repository.read(config);
        expect(mockKanjiRepository).toHaveBeenCalledWith({ grades: [KyoikuGrade.ONE] });
    });

    test('Passing in falsy settings should return an empty array', () => {
        const response = repository.read(undefined);
        expect(response).toHaveLength(0);
    });

    test('Passing in an unknown topic should return an empty array', () => {
        const config: LearnSessionSettings = { topic: Topic.NUMBERS, settings: { } };
        const response = repository.read(config);
        expect(response).toHaveLength(0);
    });
});