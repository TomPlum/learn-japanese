import { fireEvent, render, screen } from "@testing-library/react";
import KanjiFlashCardsCard from "../../../components/cards/KanjiFlashCardsCard";
import Definition from "../../../domain/sentence/Definition";
import SpaceRepetitionDetails from "../../../domain/learn/spacedrepetition/SpaceRepetitionDetails";
import { FlashCard } from "../../../domain/learn/FlashCard";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const mockGetKanjiFlashCards = jest.fn();
jest.mock("../../../service/SpacedRepetitionService", () => {
    return function() { return { getKanjiFlashCards: mockGetKanjiFlashCards } };
});

const history = createMemoryHistory();

const definition = new Definition(["interesting", "funny"], "面白い", "おもしろい", "い Adjective");
const spaceRepetitionDetails = new SpaceRepetitionDetails(2.5, 0, 0, "2021-12-12");
const flashCard = new FlashCard(1, definition, spaceRepetitionDetails);

const setup = async () => {
    const component = render(<Router history={history}><KanjiFlashCardsCard /></Router>);
    return {
        review: await component.findByText('Review'),
        ...component
    }
}

test('Should render the number of cards to review if the service call returns successfully', async () => {
    mockGetKanjiFlashCards.mockResolvedValue({ cards: [flashCard, flashCard, flashCard, flashCard, flashCard] });
    await setup();
    expect(await screen.findByText('Cards to Review')).toBeInTheDocument();
    expect(await screen.findByText(5)).toBeInTheDocument();
});

test('Should render the cards to review in singular form if there is only 1 card ready', async () => {
    mockGetKanjiFlashCards.mockResolvedValue({ cards: [flashCard] });
    await setup();
    expect(await screen.findByText('Card to Review')).toBeInTheDocument();
    expect(await screen.findByText(1)).toBeInTheDocument();
});

test('Should render the error message if one is returned from a failed API response', async () => {
    mockGetKanjiFlashCards.mockRejectedValue({ cards: undefined, error: "Something went wrong."});
    await setup();
    expect(await screen.findByText('Something went wrong.')).toBeInTheDocument();
});

test('Should render a default error message if there are undefined cards and no error message in the response', async () => {
    mockGetKanjiFlashCards.mockResolvedValue({ cards: undefined, error: undefined });
    await setup();
    expect(await screen.findByText('Error loading cards.')).toBeInTheDocument();
});

test('Should render a default error message if the service promise is rejected and there is no message', async () => {
    mockGetKanjiFlashCards.mockRejectedValue({ error: undefined });
    await setup();
    expect(await screen.findByText('Error loading cards.')).toBeInTheDocument();
});

test('Clicking the refresh button should call the service method', async () => {
    mockGetKanjiFlashCards.mockResolvedValue({ cards: [flashCard] });
    await setup();

    expect(await screen.findByText('Card to Review'));
    fireEvent.click(screen.getByTitle('Refresh'));

    expect(await screen.findByText('Card to Review'));
    expect(mockGetKanjiFlashCards).toHaveBeenCalledTimes(2);
});

test('Should disable the review button if there are no cards to review', async () => {
    mockGetKanjiFlashCards.mockResolvedValue({ cards: [] });
    const { review } = await setup();
    expect(review).toBeDisabled();
});

test('Should enable the review button if there are cards to review', async () => {
    mockGetKanjiFlashCards.mockResolvedValue({ cards: [flashCard, flashCard] });
    const { review } = await setup();
    expect(review).not.toBeDisabled();
});

test('Should redirect to the learn kanji page when clicking the review button', async () => {
    mockGetKanjiFlashCards.mockResolvedValue({ cards: [flashCard] });
    const { review } = await setup();
    fireEvent.click(review);
    expect(history.entries.map(it => it.pathname)).toContain("/learn/kanji");
});
