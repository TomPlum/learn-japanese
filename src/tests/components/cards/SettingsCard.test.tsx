import { render } from "@testing-library/react";
import SettingsCard from "../../../components/cards/SettingsCard";

const setup = () => {
    const component = render(<SettingsCard />);
    return {
        general: component.getByText('General Settings'),
        learn: component.getByText('Learn Settings'),
        play: component.getByText('Play Settings'),
        ui: component.getByText('Interface Settings'),
        notification: component.getByText('Notification Settings'),
        user: component.getByText('User Settings'),
        ...component
    }
}

test('Should render the settings sub-menus', () => {
    const { general, learn, play, ui, notification, user } = setup();
    expect(general).toBeInTheDocument();
    expect(learn).toBeInTheDocument();
    expect(play).toBeInTheDocument();
    expect(ui).toBeInTheDocument();
    expect(notification).toBeInTheDocument();
    expect(user).toBeInTheDocument();
});
