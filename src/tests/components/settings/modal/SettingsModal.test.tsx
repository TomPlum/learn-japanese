import { fireEvent, render, screen } from "@testing-library/react";
import SettingsModal, { SettingsModalProps, SettingsType } from "../../../../components/settings/modal/SettingsModal";

const onCloseHandler = jest.fn();

let props: SettingsModalProps;

beforeEach(() => {
    props = {
        type: SettingsType.GENERAL,
        onClose: onCloseHandler
    }
})

const setup = () => {
    const component = render(<SettingsModal {...props} />);
    return {
        general: component.getByTitle('General'),
        learn: component.getByTitle('Learn'),
        play: component.getByTitle('Play'),
        ui: component.getByTitle('Interface'),
        notification: component.getByTitle('Notification'),
        user: component.getByTitle('User'),
        close: component.getByTitle('Close'),
        ...component
    }
}

test('It should render the interface settings tab when clicking the tab', () => {
    props.type = SettingsType.PLAY; // Load with a different default tab
    const { ui } = setup();
    fireEvent.click(ui);
    expect(screen.getByTestId('interface-settings-tab')).toBeInTheDocument();
});

test('It should render the general settings tab when clicking the tab', () => {
    props.type = SettingsType.PLAY; // Load with a different default tab
    const { general } = setup();
    fireEvent.click(general);
    expect(screen.getByTestId('general-settings-tab')).toBeInTheDocument();
});
