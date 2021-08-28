import { fireEvent, render, screen } from "@testing-library/react";
import InformationalKanji from "../../../../components/ui/display/InformationalKanji";
import { KanjiRepository } from "../../../../repository/KanjiRepository";
import { Kanji } from "../../../../domain/kanji/Kanji";
import { KyoikuGrade } from "../../../../domain/kanji/KyoikuGrade";

/*const { getByValue } = mock(import("../../../../repository/KanjiRepository"), () => {
    getByValue: jest.fn()
});*/
jest.mock("../../../../repository/KanjiRepository");

const mockFunction = jest.fn();
const mockGetAny = jest.fn();
/*jest.mock("../../../../repository/KanjiRepository", () => {
    return {
        KanjiRepository: jest.fn()
    }
});*/
//const mockRepository = mocked(KanjiRepository, true);

/*mockRepository.mockImplementation(() => {
    return {
        async read(settings: KanjiSettings): Promise<Kanji[]> {
            return new Promise((resolve) => {
                return resolve([
                    new Kanji("", [], [], KyoikuGrade.EIGHT, "", [], [])
                ]);
            });
        },
        async getByValue(value: string): Promise<Kanji | undefined> {
            const kanji: Kanji | undefined = new Kanji("", [], [], KyoikuGrade.EIGHT, "", [], []);
            return new Promise((resolve) => resolve(kanji));
        },
        convert(data: KanjiData[]): Kanji[]  {
            return [];
        }
    }
})*/


beforeEach(() => {
    //mockRepository.mockClear();
    const repository = new KanjiRepository();
    repository.getByValue = jest.fn().mockReturnValue(() => {
        return [new Kanji("猫", [], [], KyoikuGrade.EIGHT, "", [], [])];
    });
});

const setup = () => {
    const component = render(<InformationalKanji value="猫" />);
    return {
        kanji: component.getByText('猫'),
        ...component
    }
}

//TODO: Find a way to fix TypeScript mocks
test.skip('Hovering over the character should render the popover', async () => {
    const { kanji } = setup();
    fireEvent.mouseOver(kanji);
    expect(await screen.findByText('cat')).toBeInTheDocument();
});
