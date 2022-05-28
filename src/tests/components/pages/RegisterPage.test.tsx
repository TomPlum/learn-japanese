import { render } from "@testing-library/react";
import RegisterPage from "../../../components/pages/RegisterPage";
import { clearUser, setUser, User } from "../../../slices/UserSlice";
import { store } from "../../../store";
import renderReduxConsumer from "../../renderReduxConsumer";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

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

const history = createMemoryHistory();

beforeEach(() => {
    store.dispatch(clearUser());
});

test('Should render the registration form if there is no user logged in', () => {
    store.dispatch(clearUser());
    const component = renderReduxConsumer(<Router history={history}><RegisterPage /></Router>);
    expect(component.getByTestId('registration-form')).toBeInTheDocument();
});

test('Should redirect to the home page if the user is already logged in', () => {
    store.dispatch(setUser(user));
    const component = renderReduxConsumer(<Router history={history}><RegisterPage /></Router>);
    expect(history.location.pathname).toBe("/home");
});
