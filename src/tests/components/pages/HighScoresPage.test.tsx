import HighScoresPage from "../../../components/pages/HighScoresPage";
import { findByTextWithElements } from "../../Queries";
import renderWithTranslation from "../../renderWithTranslation";
import { when } from "jest-when";
import userEvent from "@testing-library/user-event";
import { fireEvent, screen, waitForElementToBeRemoved, within } from "@testing-library/react";
import exp from "constants";

const mockGetHighScoreEntriesPage = jest.fn();
jest.mock("../../../service/HighScoresService", () => {
    return function() {
        return { getAllEntriesPage: mockGetHighScoreEntriesPage };
    };
});

const mockGetPublicUsers = jest.fn();
jest.mock("../../../service/UserService", () => {
    return function() {
        return { getPublicUsers: mockGetPublicUsers };
    };
});

test('Should load the high-scores and data and render the table on-load', async () => {
    mockGetHighScoreEntriesPage.mockResolvedValue({ entries: [], pages: { total: 120, quantity: 10 } });
    const component = renderWithTranslation(<HighScoresPage />);
    expect(await component.findByTestId('high-scores-table')).toBeInTheDocument();
});

test('Should render an error alert when the high-scores data response returns an error', async () => {
    mockGetHighScoreEntriesPage.mockResolvedValue({ entries: [], pages: { total: 0, quantity: 0 }, error: "It broke." });
    const component = renderWithTranslation(<HighScoresPage />);
    expect(await component.findByText('It broke.')).toBeInTheDocument();
});

test('Should render an error alert when the high-scores data is rejected and returns an error', async () => {
    mockGetHighScoreEntriesPage.mockRejectedValue({ error: "Something went really wrong." });
    const component = renderWithTranslation(<HighScoresPage />);
    expect(await component.findByText('Something went really wrong.')).toBeInTheDocument();
});

test('Selecting a user should render only their high-scores', async () => {
    // When no user is selected return the default entries
    when(mockGetHighScoreEntriesPage).calledWith(1, 0, 10, undefined).mockResolvedValue({
        entries: [{ presetId: 1, score: 235, time: "03:15", user: { id: 2, name: "Test User" } }],
        pages: { total: 120, quantity: 10 }
    });

    // When the user in context is searched for, return their record
    when(mockGetHighScoreEntriesPage).calledWith(1, 0, 10, "TomPlum").mockResolvedValue({
        entries: [{ presetId: 1, score: 563, time: "02:45", user: { id: 1, name: "TomPlum" } }],
        pages: { total: 120, quantity: 10 }
    });

    // Return just the one user from the public users search
    when(mockGetPublicUsers).calledWith("TomPlum").mockResolvedValue(["TomPlum"]);

    // Should initially load all the details
    const component = renderWithTranslation(<HighScoresPage />);
    await waitForElementToBeRemoved(within(component.getByTestId('empty-table-body')).getByText('Loading...'));
    expect(await within(screen.getByTestId('high-scores-table')).getAllByRole('row')[1]).toHaveTextContent('1Test User235');

    // Search for "TomPlum" in the user search field
    const userSearchField = component.getByTestId('user-search-field');
    fireEvent.focus(userSearchField);
    fireEvent.change(userSearchField, { target: { value: "TomPlum" } });

    // Select the user
    const results = await component.findByTestId('user-search-field-results');
    fireEvent.click(await within(results).findByText('TomPlum'));
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(within(screen.getByTestId('user-search-filter')).getByText('TomPlum')).toBeInTheDocument();

    // Should render details
    expect(mockGetHighScoreEntriesPage).toHaveBeenLastCalledWith(1, 0, 10, "TomPlum");
    expect(await within(screen.getByTestId('high-scores-table')).getAllByRole('row')[1]).toHaveTextContent('1TomPlum536');
});

test('Should render the page number', async () => {
    mockGetHighScoreEntriesPage.mockResolvedValue({ entries: [], pages: { total: 10, quantity: 100 } });
    renderWithTranslation(<HighScoresPage />);
    expect(await findByTextWithElements('Page 1 of 10')).toBeInTheDocument();
});
