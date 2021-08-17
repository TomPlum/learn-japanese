import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import UserButton, { UserButtonProps } from "../../../components/user/UserButton";
import userReducer, { setUser, User } from "../../../slices/UserSlice";
import configureStore from 'redux-mock-store'
import { createStore } from 'redux';

let props: UserButtonProps;

const onClickHandler = jest.fn();
let initialState: { user?: User };
const mockStore = configureStore([]);
// @ts-ignore
const store = createStore(userReducer, initialState);

beforeEach(() => {
    props = {
        disabled: false,
        onClick: onClickHandler
    };
    //mockStore(initialState);
});

const setup = () => {
    // @ts-ignore
    store.dispatch(setUser(initialState))
    const component = render(<Provider store={store}><UserButton {...props} /></Provider>);
    return {
        ...component
    }
}

test('Should display the users nickname if they have one and they are logged in', () => {
    initialState = { user: { username: "TomPlum42", nickname: "Tom" }};
    setup();
    expect(screen.getByText('Tom')).toBeInTheDocument();
});

test('Should display the users username if they don\'t have a nickname are logged in', () => {
    initialState = { user: { username: "TomPlum42 ", nickname: undefined }};
    setup();
    expect(screen.getByText('TomPlum42')).toBeInTheDocument();
});

test('Should display \'Login\' when the user is not logged in', () => {
    initialState = { user: undefined };
    setup();
    expect(screen.getByText('Login')).toBeInTheDocument();
});

test('Clicking the button should show the dropdown menu if they are logged in', () => {
    initialState = { user: { username: "TomPlum42", nickname: "Tom" }};
    setup();

    fireEvent.click(screen.getByText('Tom'));

    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Stats')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
    expect(onClickHandler).not.toHaveBeenCalled();
});

test('CLicking the button should call the onClick event handler', () => {
    initialState = { user: undefined };
    setup();

    fireEvent.click(screen.getByText('Login'));

    expect(screen.queryByText('Profile')).not.toBeInTheDocument();
    expect(screen.queryByText('Stats')).not.toBeInTheDocument();
    expect(screen.queryByText('Logout')).not.toBeInTheDocument();
    expect(onClickHandler).toHaveBeenCalled();
});
