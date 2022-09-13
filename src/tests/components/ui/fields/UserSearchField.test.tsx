import { render } from "@testing-library/react";
import UserSearchField from "../../../../components/ui/fields/UserSearchField";
import userEvent from "@testing-library/user-event";

const mockGetPublicUsers = jest.fn();
jest.mock("../../../../service/UserService", () => {
    return function() {
        return { getPublicUsers: mockGetPublicUsers };
    };
});

const onSelectHandler = jest.fn();

test('Should start with an empty value in the field', () => {
    const component = render(<UserSearchField disabled={false} onSelect={onSelectHandler} />);
    const searchField = component.getByTestId('user-search-field');
    expect(searchField).toHaveValue('');
});

test('Should render the public users when returned', async () => {
    mockGetPublicUsers.mockResolvedValueOnce(["TomPlum", "WillPlum"]);
    const component = render(<UserSearchField disabled={false} onSelect={onSelectHandler} />);

    // TODO: Console here fix here because of uncontrolled vs controller component
    userEvent.type(component.getByTestId('user-search-field'), 'Plum');

    expect(await component.findByText('TomPlum')).toBeInTheDocument();
    expect(component.getByText('WillPlum')).toBeInTheDocument();
});

test.todo("Finish coverage for existing behaviour and fix username select");

// TODO: Add coverage for new UserService function and HighScoresPage
