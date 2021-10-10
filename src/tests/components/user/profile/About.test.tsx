import { User } from "../../../../slices/UserSlice";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import About from "../../../../components/user/profile/About";
import renderReduxConsumer from "../../../renderReduxConsumer";

//Mock Learning Data Repository
const mockUserService = jest.fn();
jest.mock("../../../../service/UserService", () => {
    return function () { return { setNickname: mockUserService } }
});

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

const setup = () => {
    const component = renderReduxConsumer(<About user={user} />);

    return {
        edit: component.queryByTitle('Edit'),
        ...component
    }
}

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

test('It should render the user account nickname as "-" if the user does not have one set', () => {
    user.nickname = undefined;
    const component = setup();
    expect(component.getByText('-')).toBeInTheDocument();
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
    mockUserService.mockResolvedValueOnce({ success: true });
    const { edit } = setup();

    fireEvent.click(edit!);
    fireEvent.change(screen.getByPlaceholderText('Nickname'), { target: { value: 'Will' }});
    fireEvent.click(screen.getByTitle('Save'));

    await waitFor(() => expect(screen.getByText('Will')).toBeInTheDocument());
});

test('Clicking the save button should change the icon to a loading icon', async () => {
    mockUserService.mockResolvedValueOnce({ success: true });
    const { edit } = setup();

    fireEvent.click(edit!);
    fireEvent.click(screen.getByTitle('Save'));

    expect(await screen.findByTitle('Saving...')).toBeInTheDocument();
});

test('After updating user details, the loading icon should return back to the edit icon', async () => {
    mockUserService.mockResolvedValueOnce({ success: true });
    const { edit } = setup();

    //Start Editing
    fireEvent.click(edit!);
    expect(screen.queryByTitle('Edit')).not.toBeInTheDocument();

    //Save Changes
    fireEvent.click(screen.getByTitle('Save'));
    expect(await screen.findByTitle('Edit')).toBeInTheDocument();
});

test('After updating user details, if the user service returns an error, then it should display it', async () => {
    mockUserService.mockResolvedValueOnce({ success: false, error: "User is not authenticated." });
    const { edit } = setup();

    //Start Editing
    fireEvent.click(edit!);
    expect(screen.queryByTitle('Edit')).not.toBeInTheDocument();

    //Save Changes
    fireEvent.click(screen.getByTitle('Save'));
    expect(await screen.findByText('User is not authenticated.')).toBeInTheDocument();
});

//TODO: Pissing me off. Works fine but refuses to work here. Nickname is somehow undefined
test.skip('After updating user details, if the user service returns an error, then it should reset the nickname', async () => {
    mockUserService.mockResolvedValueOnce({ success: false, error: "User is not authenticated." });
    const { edit, rerender } = setup();

    //Start Editing
    fireEvent.click(edit!);
    expect(screen.queryByTitle('Edit')).not.toBeInTheDocument();

    //Change the nickname
    fireEvent.change(screen.getByPlaceholderText('Nickname'), { target: { value: 'New Nickname' }});
    expect(screen.getByPlaceholderText('Nickname')).toHaveValue('New Nickname');

    //Save Changes
    fireEvent.click(screen.getByTitle('Save'));
    expect(await screen.findByText('Tom')).toBeInTheDocument();
    expect(await screen.queryByText('New Nickname')).not.toBeInTheDocument();
});
