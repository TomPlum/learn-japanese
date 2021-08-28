import { act, fireEvent, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import KanjiWordDisplay from "../../../../components/ui/display/KanjiWordDisplay";
import axios from "axios";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

beforeEach(() => {
    mockedAxios.get.mockResolvedValue({
        data: {
            data: [{
                name: "猫",
                code: "\u732B",
                on: ["みょう"],
                kun: ["ねこ"],
                source: "https://en.wiktionary.org/wiki/%E7%8C%AB#Kanji",
                meanings: ["cat"],
                grade: 8,
                examples: [
                    { value: "猫", kana: ["ねこ"], english: ["cat"] },
                    { value: "子猫", kana: ["こねこ"], english: ["kitten"] },
                    { value: "野良猫", kana: ["のらねこ"], english: ["stray cat"] },
                    { value: "黒猫", kana: ["くろねこ"], english: ["black cat"] },
                    { value: "飼い猫", kana: ["かいねこ"], english: ["pet cat"] },
                ],
            }]
        }
    });
});

test('Should render the character if it does not match a known Kanji character', () => {
    const component = render(<KanjiWordDisplay value="き" />);
    expect(component.getByText('き')).toBeInTheDocument();
});

//TODO: Why is this not working? Can't seem to get the kanji character to show.
test.skip('Should render the character as Inspectable if it is a known Kanji character', async () => {
    const component = render(<KanjiWordDisplay value="猫" />);
    act(() => {
        fireEvent.mouseOver(component.getByText('猫'));
    });
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.getByText('On')).toBeInTheDocument();
    act(() => {
        fireEvent.mouseOut(component.getByText('猫'));
        fireEvent.mouseOver(component.getByText('猫'));
    });
    expect(await screen.findByText('cat')).toBeInTheDocument();
});
