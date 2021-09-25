import { fireEvent, screen } from "@testing-library/react";
import UserButton, { UserButtonProps } from "../../../components/user/UserButton";
import renderReduxConsumer from "../../renderReduxConsumer";
import { store } from "../../../store";
import { clearUser, setUser } from "../../../slices/UserSlice";

let props: UserButtonProps;

const onClickHandler = jest.fn();

beforeEach(() => {
    props = {
        disabled: false,
        onClick: onClickHandler
    };
});

afterEach(() => {
    store.dispatch(clearUser());
});

const setup = () => {
    const component = renderReduxConsumer(<UserButton {...props} />);
    return {
        ...component
    }
}

test('Should display the users nickname if they have one and they are logged in', () => {
    store.dispatch(setUser({
        username: "TomPlum42",
        nickname: "Tom",
        email: "tom@hotmail.com",
        creationDate: "2021-08-09T00:00",
        expired: false,
        locked: false,
        credentialsExpired: false,
        enabled: true,
        roles: ["user"]
    }));

    setup();

    expect(screen.getByText('Tom')).toBeInTheDocument();
});

test('Should display the users username if they don\'t have a nickname are logged in', () => {
    store.dispatch(setUser({
        username: "TomPlum42",
        nickname: undefined,
        email: "tom@hotmail.com",
        creationDate: "2021-08-09T00:00",
        expired: false,
        locked: false,
        credentialsExpired: false,
        enabled: true,
        roles: ["user"]
    }));

    setup();

    expect(screen.getByText('TomPlum42')).toBeInTheDocument();
});

test('Should display \'Login\' when the user is not logged in', () => {
    setup();
    expect(screen.getByText('Login')).toBeInTheDocument();
});

test('Clicking the button should show the dropdown menu if they are logged in', async () => {
    store.dispatch(setUser({
        username: "TomPlum42",
        nickname: "Tom",
        email: "tom@hotmail.com",
        creationDate: "2021-08-09T00:00",
        expired: false,
        locked: false,
        credentialsExpired: false,
        enabled: true,
        roles: ["user"]
    }));

    setup();

    fireEvent.click(screen.getByText('Tom'));

    expect(await screen.findByText('Profile')).toBeInTheDocument();
    expect(await screen.findByText('Stats')).toBeInTheDocument();
    expect(await screen.findByText('Logout')).toBeInTheDocument();

    expect(onClickHandler).not.toHaveBeenCalled();
});

test('Clicking the button should call the onClick event handler', () => {
    setup();

    fireEvent.click(screen.getByText('Login'));

    expect(screen.queryByText('Profile')).not.toBeInTheDocument();
    expect(screen.queryByText('Stats')).not.toBeInTheDocument();
    expect(screen.queryByText('Logout')).not.toBeInTheDocument();
    expect(onClickHandler).toHaveBeenCalled();
});

test('Clicking the logout button should dispatch the clearUser event', async () => {
    store.dispatch(setUser({
        username: "TomPlum42",
        nickname: "Tom",
        email: "tom@hotmail.com",
        creationDate: "2021-08-09T00:00",
        expired: false,
        locked: false,
        credentialsExpired: false,
        enabled: true,
        roles: ["user"]
    }));

    setup();

    //Click the button to show the dropdown menu
    fireEvent.click(screen.getByText('Tom'));

    //Click logout
    fireEvent.click(await screen.findByText('Logout'));

    expect(store.getState().user).toStrictEqual({ token: undefined, user: undefined });
});
