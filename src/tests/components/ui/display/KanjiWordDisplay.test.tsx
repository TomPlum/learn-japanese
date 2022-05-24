import { act, fireEvent, render, screen } from "@testing-library/react";
import KanjiWordDisplay from "../../../../components/ui/display/KanjiWordDisplay";
import { FlashCard } from "../../../../domain/learn/FlashCard";
import { Kanji } from "../../../../domain/kanji/Kanji";
import { KanjiReading } from "../../../../domain/kanji/KanjiReading";
import { ReadingType } from "../../../../domain/kanji/ReadingType";
import { KyoikuGrade } from "../../../../domain/kanji/KyoikuGrade";
import JLTPLevel from "../../../../domain/learn/JLTPLevel";
import SpaceRepetitionDetails from "../../../../domain/learn/spacedrepetition/SpaceRepetitionDetails";

const mockKanjiRepository = jest.fn();
jest.mock("../../../../repository/KanjiRepository", () => {
    return function() {
        return { getByValue: mockKanjiRepository }
    }
});

beforeEach(() => {
    const kanji = new FlashCard(3, new Kanji("鳥", [new KanjiReading("tori", "とり", ReadingType.ON)], ["bird"],
        KyoikuGrade.TWO, JLTPLevel.N5, "", [], 10, ["animal"]), new SpaceRepetitionDetails(2.5, 0, 0, "2021-11-26"));
    mockKanjiRepository.mockResolvedValueOnce(kanji);
});

test('Should render the character if it does not match a known Kanji character', () => {
    const component = render(<KanjiWordDisplay value="き" />);
    expect(component.getByText('き')).toBeInTheDocument();
});

test('Should render the character as Inspectable if it is a known Kanji character', async () => {
    const component = render(<KanjiWordDisplay value="鳥" />);
    fireEvent.mouseOver(component.getByText('鳥'));
    expect(await screen.findByText('Loading...')).toBeInTheDocument();
    expect(await screen.findByText('bird')).toBeInTheDocument();
});
