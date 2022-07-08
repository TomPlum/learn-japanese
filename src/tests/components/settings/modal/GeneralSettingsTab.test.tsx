import renderReduxConsumer from "../../../renderReduxConsumer";
import GeneralSettingsTab from "../../../../components/settings/modal/GeneralSettingsTab";
import { fireEvent, screen } from "@testing-library/react";

test('Should render the activity activity feed quantity settings dropdown', async () => {
    const component = renderReduxConsumer(<GeneralSettingsTab />);

    fireEvent.click(component.getByTestId('general-settings-activity-selector'));

    // Should render the correct options
    expect(await screen.findByText('3')).toBeInTheDocument();
    expect(await screen.findByText('5')).toBeInTheDocument();
    expect(await screen.findByText('8')).toBeInTheDocument();
});
