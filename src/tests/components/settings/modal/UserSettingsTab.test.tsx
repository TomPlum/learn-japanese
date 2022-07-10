import renderReduxConsumer from "../../../renderReduxConsumer";
import LearnSettingsTab from "../../../../components/settings/modal/LearnSettingsTab";
import { fireEvent, screen } from "@testing-library/react";
import UserSettingsTab from "../../../../components/settings/modal/UserSettingsTab";

test('Should render the profile visibility selector', async () => {
    const component = renderReduxConsumer(<UserSettingsTab />);

    fireEvent.click(component.getByTestId('profile-visibility-selector'));

    // Should render the correct options
    expect(await screen.findByText('Public'));
    expect(await screen.findByText('Friends Only'));
    expect(await screen.findByText('Private'));
});


test('Should render the streak card preference selector', async () => {
    const component = renderReduxConsumer(<UserSettingsTab />);

    fireEvent.click(component.getByTestId('streak-card-preference-selector'));

    // Should render the correct options
    expect(await screen.findByText('Start Date'));
    expect(await screen.findByText('Streak'));
    expect(await screen.findByText('Custom Date'));
});
