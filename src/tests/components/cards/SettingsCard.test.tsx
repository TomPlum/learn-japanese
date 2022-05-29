import { render } from "@testing-library/react";
import SettingsCard from "../../../components/cards/SettingsCard";
import renderReduxConsumer from "../../renderReduxConsumer";
import { store } from "../../../store";
import { clearUser, setUser } from "../../../slices/UserSlice";
import { testUser } from "../../../setupTests";

const setup = () => {
    const component = renderReduxConsumer(<SettingsCard />);
    return {
        general: component.getByText('General Settings'),
        learn: component.getByText('Learn Settings'),
        play: component.getByText('Play Settings'),
        ui: component.getByText('Interface Settings'),
        notification: component.queryByText('Notification Settings'),
        user: component.queryByText('User Settings'),
        ...component
    }
}

beforeEach(() => {
    store.dispatch(clearUser());
});

test('Should render the correct settings sub-menu links when a user is logged in', () => {
    store.dispatch(setUser(testUser));
    const { general, learn, play, ui, notification, user } = setup();

    expect(general).toBeInTheDocument();
    expect(learn).toBeInTheDocument();
    expect(play).toBeInTheDocument();
    expect(ui).toBeInTheDocument();
    expect(notification).toBeInTheDocument();
    expect(user).toBeInTheDocument();
});

test('Should render the correct settings sub-menu links when a user is not logged in', () => {
    store.dispatch(clearUser());
    const { general, learn, play, ui, notification, user } = setup();

    expect(general).toBeInTheDocument();
    expect(learn).toBeInTheDocument();
    expect(play).toBeInTheDocument();
    expect(ui).toBeInTheDocument();
    expect(notification).not.toBeInTheDocument();
    expect(user).not.toBeInTheDocument();
});
