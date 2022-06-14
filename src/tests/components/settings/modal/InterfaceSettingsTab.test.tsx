import { fireEvent, render } from "@testing-library/react";
import InterfaceSettingsTab from "../../../../components/settings/modal/InterfaceSettingsTab";

test('Should render the main tab contents on initial render', () => {
    const component = render(<InterfaceSettingsTab />);
    expect(component.getByTestId('interface-settings-tab')).toBeInTheDocument();
});

test('Should render the dashboard layout editor after clicking the button', () => {
    // Should initially render the settings tab and not the editor
    const component = render(<InterfaceSettingsTab />);
    expect(component.getByTestId('interface-settings-tab')).toBeInTheDocument();
    expect(component.queryByTestId('dashboard-layout-editor')).not.toBeInTheDocument();

    // Opening the editor should stop rendering the tab contents
    fireEvent.click(component.getByText('Open Layout Editor'));
    expect(component.queryByTestId('interface-settings-tab')).not.toBeInTheDocument();
    expect(component.getByTestId('dashboard-layout-editor')).toBeInTheDocument();

    // Dismissing the editor should stop rendering it and re-render the interface settings
    fireEvent.click(component.getByTitle('Close'))
    expect(component.queryByTestId('dashboard-layout-editor')).not.toBeInTheDocument();
    expect(component.getByTestId('interface-settings-tab')).toBeInTheDocument();
});
