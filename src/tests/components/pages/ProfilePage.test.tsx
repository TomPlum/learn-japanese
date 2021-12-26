import renderReduxConsumer from "../../renderReduxConsumer";
import ProfilePage from "../../../components/pages/ProfilePage";
import { clearUser, setUser, User } from "../../../slices/UserSlice";
import { store } from "../../../store";

const setup = () => {
    const component = renderReduxConsumer(<ProfilePage />);

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

test('Given a valid user in context, it should render the "About" card', async () => {
    store.dispatch(setUser(user));
    const component = setup();
    expect(await component.findByText('About')).toBeInTheDocument();
});

test('Given a valid user in context, it should render the "Overview" card', async () => {
    store.dispatch(setUser(user));
    const component = setup();
    expect(await component.findByText('Overview')).toBeInTheDocument();
});

test('Given a valid user in context, it should render the "Preferences" card', async () => {
    store.dispatch(setUser(user));
    const component = setup();
    expect(await component.findByText('Preferences')).toBeInTheDocument();
});

test('Given a valid user in context, it should render the "Ranks" card', async () => {
    store.dispatch(setUser(user));
    const component = setup();
    expect(await component.findByText('Ranks')).toBeInTheDocument();
});

test('Given a valid user in context, it should render the "Stats" card', async () => {
    store.dispatch(setUser(user));
    const component = setup();
    expect(await component.findByText('Stats')).toBeInTheDocument();
});

test('Given a valid user in context, it should render the "Danger Zone" card', async () => {
    store.dispatch(setUser(user));
    const component = setup();
    expect(await component.findByText('Danger Zone')).toBeInTheDocument();
});
