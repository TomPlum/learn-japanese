import HighScoresPage from "../../../components/pages/HighScoresPage";
import { findByTextWithElements } from "../../Queries";
import renderWithTranslation from "../../renderWithTranslation";

const mockGetHighScoreEntriesPage = jest.fn();
jest.mock("../../../service/HighScoresService", () => {
    return function() {
        return { getAllEntriesPage: mockGetHighScoreEntriesPage };
    };
});

test('Should load the high-scores and data and render the table on-load', async () => {
    mockGetHighScoreEntriesPage.mockResolvedValueOnce({ entries: [], pages: { total: 120, quantity: 10 } });
    const component = renderWithTranslation(<HighScoresPage />);
    expect(await component.findByTestId('high-scores-table')).toBeInTheDocument();
});

test('Should render an error alert when the high-scores data response returns an error', async () => {
    mockGetHighScoreEntriesPage.mockResolvedValueOnce({ entries: [], pages: { total: 0, quantity: 0 }, error: "It broke." });
    const component = renderWithTranslation(<HighScoresPage />);
    expect(await component.findByText('It broke.')).toBeInTheDocument();
});

test('Should render an error alert when the high-scores data is rejected and returns an error', async () => {
    mockGetHighScoreEntriesPage.mockRejectedValueOnce({ error: "Something went really wrong." });
    const component = renderWithTranslation(<HighScoresPage />);
    expect(await component.findByText('Something went really wrong.')).toBeInTheDocument();
});

test('Should render the page number', async () => {
    mockGetHighScoreEntriesPage.mockResolvedValueOnce({ entries: [], pages: { total: 10, quantity: 100 } });
    renderWithTranslation(<HighScoresPage />);
    expect(await findByTextWithElements('Page 1 of 10')).toBeInTheDocument();
});
