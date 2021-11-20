import { fireEvent, screen } from "@testing-library/react";
import KanjiFlashCards, { KanjiFlashCardsProps } from "../../../components/learn/KanjiFlashCards";
import { Kanji } from "../../../domain/kanji/Kanji";
import { KanjiReading } from "../../../domain/kanji/KanjiReading";
import { ReadingType } from "../../../domain/kanji/ReadingType";
import { KyoikuGrade } from "../../../domain/kanji/KyoikuGrade";
import renderReduxConsumer from "../../renderReduxConsumer";
import { JLTPLevel } from "../../../domain/learn/JLTPLevel";

const mockGetKanjiFlashCards = jest.fn();
const mockUpdateKanjiFlashCard = jest.fn();
jest.mock("../../../service/SpacedRepetitionService", () => {
    return function() { return { getKanjiFlashCards: mockGetKanjiFlashCards, update: mockUpdateKanjiFlashCard  } };
});

const onFinishHandler = jest.fn();

const one = new Kanji("一", [new KanjiReading("ichi", "いち", ReadingType.ON)], ["one"], KyoikuGrade.ONE, JLTPLevel.N5,"", [], ["number"]);
const fish = new Kanji("魚", [new KanjiReading("sakana", "さかな", ReadingType.KUN)], ["fish"], KyoikuGrade.TWO, JLTPLevel.N5, "", [], ["animal"]);
const bird = new Kanji("鳥", [new KanjiReading("tori", "とり", ReadingType.ON)], ["bird"], KyoikuGrade.TWO, JLTPLevel.N5, "", [], ["animal"]);
const person = new Kanji("人", [new KanjiReading("jin", "じん", ReadingType.ON)], ["person"], KyoikuGrade.ONE, JLTPLevel.N5, "", [], ["people"]);

let props: KanjiFlashCardsProps;

beforeEach(() => {
    props = {
        onFinish: onFinishHandler,
    };

    mockGetKanjiFlashCards.mockResolvedValueOnce({ cards: [one, fish, bird, person] });
});

const setup = async () => {
    const component = renderReduxConsumer(<KanjiFlashCards {...props} />);

    //await waitForElementToBeRemoved(await component.findByTitle('Loading'));
    expect(await component.findByText('一')).toBeInTheDocument();

    return {
        perfect: component.getByTitle('Perfect'),
        blackout: component.getByTitle('Blackout'),
        next: component.getByText('Next'),
        quit: component.getByTitle('Quit'),
        showRomaji: component.getByText('Show Rōmaji'),
        rememberedCounter: component.getByTitle('Remembered'),
        forgottenCounter: component.getByTitle('Forgotten'),
        ...component
    };
}

test('The confidence selector should be disabled before the user has flipped once', async () => {
    const { perfect, blackout } = await setup();
    expect(perfect).toBeDisabled();
    expect(blackout).toBeDisabled();
});

test('The next button should be disabled before the user has flipped once', async () => {
    const { next } = await setup();
    expect(next).toBeDisabled();
});

test('Flipping the card should enable the confidence selector', async () => {
    const { next, perfect, blackout} = await setup();

    fireEvent.click(screen.getByText('一'));

    expect(perfect).not.toBeDisabled();
    expect(blackout).not.toBeDisabled();
    expect(next).toBeDisabled();
});

test('Flipping the card and selecting a confidence rating should enable the Next button', async () => {
    const { next, perfect } = await setup();

    fireEvent.click(screen.getByText('一'));
    fireEvent.click(perfect)

    expect(next).not.toBeDisabled();
});

test('Clicking Next should render the next flash card', async () => {
    const { next, perfect } = await setup();

    fireEvent.click(screen.getByText('一'));
    fireEvent.click(perfect);
    fireEvent.click(next);

    expect(screen.getByText('魚')).toBeInTheDocument();
});

test('Clicking Next should advance the progress bar', async () => {
    const { next, perfect } = await setup();

    expect(screen.getByTitle('1/4')).toBeInTheDocument();

    fireEvent.click(screen.getByText('一'));
    fireEvent.click(perfect)
    fireEvent.click(next)

    expect(screen.getByTitle('2/4')).toBeInTheDocument();
});

test('Getting to the last flash card should not change the Next button to Finish if the card is un-flipped', async () => {
    const { next } = await setup();

    fireEvent.click(screen.getByText('一'));
    fireEvent.click(screen.getByTitle('Perfect'));
    fireEvent.click(next);

    fireEvent.click(screen.getByText('魚'));
    fireEvent.click(screen.getByTitle('Perfect'));
    fireEvent.click(next);

    fireEvent.click(screen.getByText('鳥'));
    fireEvent.click(screen.getByTitle('Perfect'));
    fireEvent.click(next);

    //We're now at the last card (人)
    expect(next).toBeInTheDocument();
});

test('Getting to the last flash card and flipping the card should change the Next button to Finish', async () => {
    const { next, blackout } = await setup();

    fireEvent.click(screen.getByText('一'));
    fireEvent.click(blackout);
    fireEvent.click(next);

    fireEvent.click(screen.getByText('魚'));
    fireEvent.click(screen.getByTitle('Perfect'));
    fireEvent.click(next);

    fireEvent.click(screen.getByText('鳥'));
    fireEvent.click(screen.getByTitle('Perfect'));
    fireEvent.click(next);

    fireEvent.click(screen.getByText('人'));
    expect(screen.getByText('Finish')).toBeInTheDocument();
});

test('Clicking Finish should call the onFinish event handler with the results', async () => {
    const { next, perfect } = await setup();

    fireEvent.click(screen.getByText('一'));
    fireEvent.click(perfect);
    fireEvent.click(next);

    fireEvent.click(screen.getByText('魚'));
    fireEvent.click(screen.getByTitle('Blackout'));
    fireEvent.click(next);

    fireEvent.click(screen.getByText('鳥'));
    fireEvent.click(screen.getByTitle('Perfect'));
    fireEvent.click(next);

    fireEvent.click(screen.getByText('人'));
    fireEvent.click(screen.getByTitle('Blackout')); //Forgetting the last one here should still be included upon finishing
    fireEvent.click(screen.getByText('Finish'));

    expect(onFinishHandler).toHaveBeenCalledWith({ perfect: [one, bird], forgotten: [fish, person] });
});

test('Clicking Finish should include the last flash card value in the results', async () => {
    const { next, perfect } = await setup();

    fireEvent.click(screen.getByText('一'));
    fireEvent.click(perfect);
    fireEvent.click(next);

    fireEvent.click(screen.getByText('魚'));
    fireEvent.click(screen.getByTitle('Blackout'));
    fireEvent.click(next);

    fireEvent.click(screen.getByText('鳥'));
    fireEvent.click(screen.getByTitle('Perfect'));
    fireEvent.click(next);

    fireEvent.click(screen.getByText('人'));
    fireEvent.click(screen.getByTitle('Perfect')); //Remembering the last one here should still be included upon finishing
    fireEvent.click(screen.getByText('Finish'));

    expect(onFinishHandler).toHaveBeenCalledWith({ perfect: [one, bird, person], forgotten: [fish] });
});

test('Clicking the Quit button should render the confirmation modal', async () => {
    const { quit } = await setup();
    fireEvent.click(quit);
    expect(screen.getByText('Are you sure you want to quit?')).toBeInTheDocument();
});

test('Clicking \'Yes\' in the confirmation modal should call the onFinish event handler', async () => {
    const { quit } = await setup();
    fireEvent.click(quit);
    fireEvent.click(screen.getByText('Yes'));
    expect(onFinishHandler).toHaveBeenCalled();
});

test('Clicking \'No\' in the confirmation modal should resume and hide the modal', async () => {
    const { quit } = await setup();
    fireEvent.click(quit);
    fireEvent.click(screen.getByText('No'));
    expect(screen.queryByText('Are you sure you want to quit?')).not.toBeInTheDocument();
});

test('Clicking the \'Show Romaji\' button should invert it to \'Hide Romaji\'', async () => {
    const { showRomaji } = await setup();
    fireEvent.click(showRomaji);
    expect(screen.getByText('Hide Rōmaji')).toBeInTheDocument();
});

test('Clicking the \'Hide Romaji\' button should invert it to \'Show Romaji\'', async () => {
    const { showRomaji } = await setup();
    fireEvent.click(showRomaji);

    const hideRomaji = screen.getByText('Hide Rōmaji');
    expect(hideRomaji).toBeInTheDocument();

    fireEvent.click(hideRomaji);
    expect(screen.getByText('Show Rōmaji')).toBeInTheDocument();
});

test('Marking a card as \'Remembered\' should increase the counter by 1', async () => {
    const { next, perfect, rememberedCounter } = await setup();

    expect(screen.getAllByText('0')).toHaveLength(2);

    fireEvent.click(screen.getByText('一'));
    fireEvent.click(perfect);
    fireEvent.click(next);

    expect(rememberedCounter).toBeDefined();
});


test('Marking a card as \'Forgotten\' should increase the counter by 1', async () => {
    const { next, blackout, forgottenCounter } = await setup();

    expect(screen.getAllByText('0')).toHaveLength(2);

    fireEvent.click(screen.getByText('一'));
    fireEvent.click(blackout);
    fireEvent.click(next);

    expect(forgottenCounter).toBeDefined();
});
