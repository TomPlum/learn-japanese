import { render } from "@testing-library/react";
import HighScoresPage from "../../../components/pages/HighScoresPage";

const mockGetHighScoreEntriesPage = jest.fn();
jest.mock("../../../service/HighScoresService", () => {
    return function() {
        return { getAllEntriesPage: mockGetHighScoreEntriesPage };
    };
});

test('Should load the high-scores and data and render the table on-load', async () => {
    mockGetHighScoreEntriesPage.mockResolvedValueOnce({ entries: [], total: 120, quantity: 10 });
    const component = render(<HighScoresPage />);
    expect(await component.findByTestId('high-scores-table')).toBeInTheDocument();
});
