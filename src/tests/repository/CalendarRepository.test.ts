import CalendarRepository from "../../repository/CalendarRepository";
import { DayData } from "../../data/DataTypes";
import { days, months, nouns, phrases } from "../../data/Calendar";
import Definition from "../../domain/sentence/Definition";
import { CalendarSettingsBuilder } from "../../domain/session/settings/data/CalendarSettings";

jest.mock("../../data/Calendar");

const mockDays = days as jest.MockedFunction<() => DayData[]>;
const mockMonths = months as jest.MockedFunction<() => DayData[]>;
const mockNouns = nouns as jest.MockedFunction<() => DayData[]>;
const mockPhrases = phrases as jest.MockedFunction<() => DayData[]>;

beforeEach(() => {
    mockDays.mockReturnValue([
        { name: "Monday", kanji: "月曜日", romaji: "getsuyōbi", kana: "げつようび", meaning: "Moon day" }
    ]);
    mockMonths.mockReturnValue([
        { name: "January", kanji: "一月", romaji: "ichigatsu", kana: "いちがつ", meaning: "One Month" }
    ]);
    mockNouns.mockReturnValue([
        { name: "Tomorrow", kanji: "明日", romaji: "ashita", kana: "あした" }
    ]);
    mockPhrases.mockReturnValue([
        { name: "What day is it today?", kanji: "今日は何曜日ですか", romaji: "Kyou wa nan youbi desu ka", meaning: "What day is it today?" }
    ]);
});

describe("Calendar Repository", () => {
    const repository = new CalendarRepository();

    it("Should return the days when the days property is true", () => {
        const settings = new CalendarSettingsBuilder().withDays().build();
        return repository.read(settings).then(response => {
            expect(mockDays).toHaveBeenCalled();
            expect(response[0]).toStrictEqual(new Definition(["Monday"], "月曜日", "げつようび", "Day of the Week"));
        });
    });

    it("Should return the months when the months property is true", () => {
        const settings = new CalendarSettingsBuilder().withMonths().build();
        return repository.read(settings).then(response => {
            expect(mockMonths).toHaveBeenCalled();
            expect(response[0]).toStrictEqual(new Definition(["January"], "一月", "いちがつ", "Month of the Year"));
        });
    });

    it("Should return the temporal nouns when the nouns property is true", () => {
        const settings = new CalendarSettingsBuilder().withTemporalNouns().build();
        return repository.read(settings).then(response => {
            expect(response[0]).toStrictEqual(new Definition(["Tomorrow"], "明日", "あした", "Temporal Noun / Adverb"));
        });
    });

    it("Should return the common phrases when the phrases property is true", () => {
        const settings = new CalendarSettingsBuilder().withPhrases().build();
        return repository.read(settings).then(response => {
            expect(response[0]).toStrictEqual(new Definition(["What day is it today?"], "今日は何曜日ですか", "", "Common Phrase"));
        });
    });

    it("Should return an empty array when no properties are passed", () => {
        const settings = new CalendarSettingsBuilder().build();
        return repository.read(settings).then(response => {
            expect(response).toHaveLength(0);
        });
    });
});
