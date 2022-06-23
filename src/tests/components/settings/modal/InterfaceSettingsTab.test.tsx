import { fireEvent, render } from "@testing-library/react";
import InterfaceSettingsTab from "../../../../components/settings/modal/InterfaceSettingsTab";

const onEditDashboardLayoutHandler = jest.fn();

test('Should render the main tab contents on initial render', () => {
    const component = render(<InterfaceSettingsTab onEditDashboardLayout={onEditDashboardLayoutHandler} />);
    expect(component.getByTestId('interface-settings-tab')).toBeInTheDocument();
});

test('Should call the onEditDashboard event handler after clicking the button', () => {
    const component = render(<InterfaceSettingsTab onEditDashboardLayout={onEditDashboardLayoutHandler} />);
    fireEvent.click(component.getByText('Open Layout Editor'));
    expect(onEditDashboardLayoutHandler).toHaveBeenCalled();
});
