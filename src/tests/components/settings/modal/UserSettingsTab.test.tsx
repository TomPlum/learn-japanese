import renderReduxConsumer from "../../../renderReduxConsumer";
import { fireEvent, screen } from "@testing-library/react";
import UserSettingsTab from "../../../../components/settings/modal/UserSettingsTab";

const mockClearLocalStorage = jest.fn();
jest.mock("../../../../service/LocalStorageService", () => {
    return function() {
        return { clear: mockClearLocalStorage };
    }
});

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

test('Should clear the local storage when clicking the clear local storage button', () => {
    const component = renderReduxConsumer(<UserSettingsTab />);
    fireEvent.click(component.getByTestId('clear-local-storage-button'));
    fireEvent.click(component.getByTestId('clear-local-storage-button'));
    expect(mockClearLocalStorage).toHaveBeenCalled();
});
