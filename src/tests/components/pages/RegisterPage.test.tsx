import { fireEvent, screen, waitFor } from "@testing-library/react";
import RegisterPage from "../../../components/pages/RegisterPage";
import { clearUser, setUser, User } from "../../../slices/UserSlice";
import { store } from "../../../store";
import renderReduxConsumer from "../../renderReduxConsumer";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import auth from "../../../service/AuthenticationService";

const user: User = {
    username: "TomPlum42",
    nickname: "Tom",
    email: "tom@hotmail.com",
    creationDate: "2021-08-09T00:00",
    enabled: true,
    credentialsExpired: false,
    locked: false,
    expired: false,
    roles: ["user"],
    token: "TOKEN",
    refreshToken: "REFRSEH_TOKEN",
    preferences: {
        defaultFont: "Gothic",
        theme: "Dark Mode",
        language: "English",
        highScores: "Ask Each Time",
        defaultMode: "Play",
        cardsPerDay: 10,
        confidenceMenuStyle: "Numbers 1 - 6"
    }
}

const mockUsernameEligible = jest.fn();
const mockEmailEligible = jest.fn();
const mockRegister = jest.fn();
const history = createMemoryHistory();

jest.mock("../../../service/UserService", () => {
    return function() {
        return {
            usernameExists: mockUsernameEligible,
            emailAlreadyRegistered: mockEmailEligible
        }
    };
});

beforeEach(() => {
    auth.register = mockRegister;
    store.dispatch(clearUser());
});

test('Should render the registration form if there is no user logged in', () => {
    store.dispatch(clearUser());
    const component = renderReduxConsumer(<Router history={history}><RegisterPage /></Router>);
    expect(component.getByTestId('registration-form')).toBeInTheDocument();
});

test('Should redirect to the home page if the user is already logged in', () => {
    store.dispatch(setUser(user));
    renderReduxConsumer(<Router history={history}><RegisterPage /></Router>);
    expect(history.location.pathname).toBe("/home");
});

test('Should redirect to the sign-in page if the registration is successful', async () => {
    store.dispatch(clearUser());
    const component = renderReduxConsumer(<Router history={history}><RegisterPage /></Router>);

    // Fill in the form
    mockRegister.mockResolvedValueOnce({ success: true, data: { } });
    mockUsernameEligible.mockResolvedValueOnce({ exists: false });
    mockEmailEligible.mockResolvedValueOnce({ exists: false });

    fireEvent.change(component.getByPlaceholderText('Enter email'), { target: { value: 'thomas.plumpton@domain.com' }});
    expect(await screen.findByText('Email address is available.'));
    fireEvent.change(component.getByPlaceholderText('Username'), { target: { value: 'TomPlum42' }});
    expect(await screen.findByText('Username is available.'));
    fireEvent.change(component.getByPlaceholderText('Nickname'), { target: { value: 'Tom' }});
    fireEvent.change(component.getByPlaceholderText('Password'), { target: { value: 'P4ssw0rd-' }});
    fireEvent.change(component.getByPlaceholderText('Confirm Password'), { target: { value: 'P4ssw0rd-' }});

    // Should redirect to the sign-in page after successfully registering
    fireEvent.click(component.getByText('Register'));
    await waitFor(() => expect(history.location.pathname).toBe('/login'));
});
