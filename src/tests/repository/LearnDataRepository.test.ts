import LearningDataRepository from "../../repository/LearningDataRepository";
import { LearnSessionSettings } from "../../components/layout/GameSettingsMenu";
import { Topic } from "../../types/Topic";
import { KanaRepository } from "../../repository/KanaRepository";
import CalendarRepository from "../../repository/CalendarRepository";

jest.mock('../../repository/KanaRepository');
jest.mock('../../repository/CalendarRepository');

const mockKanaRepository = jest.fn();
const mockCalendarRepository = jest.fn();

beforeEach(() => {
    (KanaRepository as jest.MockedFunction<any>).mockImplementation(() => {
        return  { read: mockKanaRepository }
    });

    (CalendarRepository as jest.MockedFunction<any>).mockImplementation(() => {
        return  { read: mockCalendarRepository }
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

    test('Passing in falsy settings should return an empty array', () => {
        const response = repository.read(undefined);
        expect(response).toHaveLength(0);
    });

    test('Passing in an unknown topic should return an empty array', () => {
        const config: LearnSessionSettings = { topic: Topic.WEATHER, settings: { } };
        const response = repository.read(config);
        expect(response).toHaveLength(0);
    });
});