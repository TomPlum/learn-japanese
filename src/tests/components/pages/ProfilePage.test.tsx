import renderReduxConsumer from "../../renderReduxConsumer";
import ProfilePage from "../../../components/pages/ProfilePage";
import { clearUser, setUser, User } from "../../../slices/UserSlice";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { store } from "../../../store";

const history = createMemoryHistory();

const setup = () => {
    const component = renderReduxConsumer(
        <Router history={history}>
            <ProfilePage />
        </Router>
    );

    return {
        edit: component.queryByTitle('Edit'),
        ...component
    }
}

afterEach(() => {
    store.dispatch(clearUser());
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
    roles: ["user"],
    token: "TOKEN",
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

test('Given an undefined user in context, it should redirect', () => {
    setup();
    expect(history.location.pathname).toEqual("/menu/learn");
});

test('Given a valid user in context, it should render the "About" card', () => {
    store.dispatch(setUser(user));
    const component = setup();
    expect(component.getByText('About')).toBeInTheDocument();
});

test('Given a valid user in context, it should render the "Overview" card', () => {
    store.dispatch(setUser(user));
    const component = setup();
    expect(component.getByText('Overview')).toBeInTheDocument();
});

test('Given a valid user in context, it should render the "Preferences" card', () => {
    store.dispatch(setUser(user));
    const component = setup();
    expect(component.getByText('Preferences')).toBeInTheDocument();
});

test('Given a valid user in context, it should render the "Ranks" card', () => {
    store.dispatch(setUser(user));
    const component = setup();
    expect(component.getByText('Ranks')).toBeInTheDocument();
});

test('Given a valid user in context, it should render the "Stats" card', () => {
    store.dispatch(setUser(user));
    const component = setup();
    expect(component.getByText('Stats')).toBeInTheDocument();
});

test('Given a valid user in context, it should render the "Danger Zone" card', () => {
    store.dispatch(setUser(user));
    const component = setup();
    expect(component.getByText('Danger Zone')).toBeInTheDocument();
});
