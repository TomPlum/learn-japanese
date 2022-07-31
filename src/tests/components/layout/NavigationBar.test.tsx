import { fireEvent, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import NavigationBar, { NavigationBarProps } from "../../../components/layout/NavigationBar";
import { createMemoryHistory } from "history";
import { AppMode } from "../../../domain/AppMode";
import { store } from "../../../store";
import { setActive, setApplicationMode } from "../../../slices/ModeSlice";
import renderReduxConsumer from "../../renderReduxConsumer";
import { clearUser, setUser } from "../../../slices/UserSlice";
import { testUser } from "../../../setupTests";
import { when } from "jest-when";

const history = createMemoryHistory();
const onLaunchLoginModalHandler = jest.fn();

const mockTranslation = jest.fn();
jest.mock('react-i18next', () => ({
    useTranslation: () => { return { t: mockTranslation, } }
}));

let props: NavigationBarProps;

const setup = () => {
    const component = renderReduxConsumer(
        <Router history={history}>
            <NavigationBar {...props} />
        </Router>
    );

    return {
        home: component.getByTestId('home-button-nav-link'),
        theme: component.getByTestId('theme-button'),
        font: component.getByTestId('font-selector'),
        login: component.getByTestId('user-button-nav-link'),
        ...component
    }
}

beforeEach(() => {
    props = {
        onLaunchLoginModal: onLaunchLoginModalHandler
    };
    store.dispatch(setActive(true));
    store.dispatch(setApplicationMode(AppMode.LEARN));

    // Translations
    when(mockTranslation).calledWith("navigation.button.home").mockReturnValue("Home");
    when(mockTranslation).calledWith("navigation.button.learn").mockReturnValue("Learn");
    when(mockTranslation).calledWith("navigation.button.kanji-dict").mockReturnValue("Kanji Dictionary");
    when(mockTranslation).calledWith("navigation.button.kana-dict").mockReturnValue("Kana Dictionary");
    when(mockTranslation).calledWith("navigation.button.genki-dict").mockReturnValue("Genki Knowledge Bank");
});

test('Clicking the \'Home\' button should route the user to the menu', async () => {
    const { home } = setup();
    expect(await screen.findByText('Home')).toBeInTheDocument();
    fireEvent.click(home);
    expect(history.location.pathname).toBe('/');
});

test('Passing active as false should disable the Login Button', async () => {
    store.dispatch(setActive(false));
    const { login } = setup();
    expect(await screen.findByText('Home')).toBeInTheDocument();
    expect(login).toHaveAttribute('aria-disabled', 'true');
});

test('Passing active as false should disable the Home Button', async () => {
    store.dispatch(setActive(false));
    const { home } = setup();
    expect(await screen.findByText('Home')).toBeInTheDocument();
    expect(home).toHaveAttribute('aria-disabled', 'true');
});

test('Clicking the login button while not logged in should call the onLaunchLogin event handler', async () => {
    const { login } = setup();
    expect(await screen.findByText('Home')).toBeInTheDocument();
    fireEvent.click(login);
    expect(onLaunchLoginModalHandler).toHaveBeenCalled();
});

test('Should render the notifications button if the user is logged in', async () => {
    store.dispatch(setUser(testUser));
    setup();
    expect(await screen.findByTestId('notifications-button')).toBeInTheDocument();
});

test('Should not render the notifications button if the user is not logged in', async () => {
    store.dispatch(clearUser());
    setup();
    expect(await screen.findByText('Home')).toBeInTheDocument();
    expect(screen.queryByTestId('notifications-button')).not.toBeInTheDocument();
});
