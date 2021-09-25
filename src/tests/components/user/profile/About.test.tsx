import { User } from "../../../../slices/UserSlice";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import About from "../../../../components/user/profile/About";

const setup = () => {
    const user: User = {
        username: "TomPlum42",
        nickname: "Tom",
        email: "tom@hotmail.com",
        creationDate: "2021-08-09T00:00",
        enabled: true,
        credentialsExpired: false,
        locked: false,
        expired: false,
        roles: ["user"]
    }

    const component = render(<About user={user} />);

    return {
        edit: component.queryByTitle('Edit'),
        ...component
    }
}

beforeEach(() => {
    jest.useFakeTimers();
});

test('It should render the user account creation date', () => {
    const component = setup();
    expect(component.getByText('9th August 2021')).toBeInTheDocument();
});

test('It should render the user account username', () => {
    const component = setup();
    expect(component.getByText('TomPlum42')).toBeInTheDocument();
});

test('It should render the user account nickname', () => {
    const component = setup();
    expect(component.getByText('Tom')).toBeInTheDocument();
});

test('It should render the user account email', () => {
    const component = setup();
    expect(component.getByText('tom@hotmail.com')).toBeInTheDocument();
});

test('Clicking the edit button should render the save button', () => {
    const { edit } = setup();

    expect(edit).toBeInTheDocument();
    expect(screen.queryByTitle('Save')).not.toBeInTheDocument();

    fireEvent.click(edit!);

    expect(screen.queryByTitle('Edit')).not.toBeInTheDocument();
    expect(screen.queryByTitle('Save')).toBeInTheDocument();
});

test('Clicking the edit button should change the nickname text into a field with the value', () => {
    const { edit } = setup();
    expect(screen.queryByPlaceholderText('Nickname')).not.toBeInTheDocument();
    fireEvent.click(edit!);
    expect(screen.getByPlaceholderText('Nickname')).toBeInTheDocument();
});

test('Changing the users nickname and clicking save should update the nickname value', async () => {
    const { edit } = setup();

    fireEvent.click(edit!);
    fireEvent.change(screen.getByPlaceholderText('Nickname'), { target: { value: 'Will' }});
    fireEvent.click(screen.getByTitle('Save'));

    await waitFor(() => expect(screen.getByText('Will')).toBeInTheDocument());
});

test('Clicking the save button should change the icon to a loading icon', () => {
    const { edit } = setup();

    fireEvent.click(edit!);
    fireEvent.click(screen.getByTitle('Save'));

    expect(screen.getByTitle('Saving...')).toBeInTheDocument();
});

test('After updating user details, the loading icon should return back to the edit icon', () => {
    const { edit } = setup();

    fireEvent.click(edit!);
    fireEvent.click(screen.getByTitle('Save'));
    act(() => { jest.runAllTimers() });

    expect(screen.getByTitle('Edit')).toBeInTheDocument();
});
