import GeneralSettingsTab from "../../../../components/settings/modal/GeneralSettingsTab";
import { fireEvent, screen } from "@testing-library/react";
import renderTranslatedReduxConsumer from "../../../renderTranslatedReduxConsumer";

test('Should render the activity feed quantity settings dropdown', async () => {
    const component = renderTranslatedReduxConsumer(<GeneralSettingsTab />);

    fireEvent.click(component.getByTestId('general-settings-activity-selector'));

    // Should render the correct options
    expect(await screen.findByText('3')).toBeInTheDocument();
    expect(await screen.findByText('5')).toBeInTheDocument();
    expect(await screen.findByText('8')).toBeInTheDocument();
});
