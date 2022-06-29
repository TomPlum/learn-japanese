import SettingsDropdown, { SettingsDropdownProps } from "../../../../components/settings/modal/SettingsDropdown";
import { Preference } from "../../../../domain/user/Preference";
import { faGlobe, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { fireEvent, screen, waitForElementToBeRemoved, within } from "@testing-library/react";
import renderReduxConsumer from "../../../renderReduxConsumer";
import { store } from "../../../../store";
import { clearUser, setPreference, setUser } from "../../../../slices/UserSlice";
import { testUser } from "../../../../setupTests";

const mockUpdatePreferences = jest.fn();
jest.mock("../../../../service/UserService", () => {
    return function() {
        return { updatePreferences: mockUpdatePreferences };
    };
});

const onChangeHandler = jest.fn();
const onErrorHandler = jest.fn();

let props: SettingsDropdownProps;

beforeEach(() => {
    props = {
        loading: false,
        onError: onErrorHandler,
        onChange: onChangeHandler,
        id: "example-settings-dropdown",
        preference: Preference.PROFILE_VISIBILITY,
        options: [{ name: "Public", icon: faGlobe }, { name: "Friends Only", icon: faUserFriends }]
    }
    store.dispatch(setUser(testUser));
});

afterEach(() => {
    store.dispatch(clearUser());
})

it("Should render the default selected option as the one from the user in the redux store", () => {
    const component = renderReduxConsumer(<SettingsDropdown {...props} />);
    expect(within(component.getByTestId('settings-dropdown-selected')).getByText('Friends Only')).toBeInTheDocument();
});

it("Should add the inspect class to the chevron when the dropdown menu is expanded", () => {
    const component = renderReduxConsumer(<SettingsDropdown {...props} />);

    // Should start with the default class and no inspect class
    expect(component.getByTestId('settings-dropdown-chevron')).toHaveClass('chevron');
    expect(component.getByTestId('settings-dropdown-chevron')).not.toHaveClass('inspect');

    // Expand the dropdown menu
    fireEvent.click(component.getByText('Friends Only'));

    // Should keep the default class and also get inspect class
    expect(component.getByTestId('settings-dropdown-chevron')).toHaveClass('chevron');
    expect(component.getByTestId('settings-dropdown-chevron')).toHaveClass('inspect');
});

it("Should call the update service function with the correct preference at name", async () => {
    mockUpdatePreferences.mockResolvedValueOnce({ success: true });
    const component = renderReduxConsumer(<SettingsDropdown {...props} />);

    fireEvent.click(component.getByText('Friends Only'));
    fireEvent.click(await screen.findByText('Public'));

    await waitForElementToBeRemoved(screen.getByTestId('settings-dropdown-spinner'));

    expect(mockUpdatePreferences).toHaveBeenCalledWith([{
        preference: Preference.PROFILE_VISIBILITY,
        value: "Public"
    }]);
});

it("Should call the onChange event handled with the selected value name when the update call succeeds", async () => {
    mockUpdatePreferences.mockResolvedValueOnce({ success: true });
    const component = renderReduxConsumer(<SettingsDropdown {...props} />);

    fireEvent.click(component.getByText('Friends Only'));
    fireEvent.click(await screen.findByText('Public'));

    await waitForElementToBeRemoved(screen.getByTestId('settings-dropdown-spinner'));

    expect(onChangeHandler).toHaveBeenCalledWith('Public');
});

it("Should not call the onChange event handled with the selected value name when the update call fails", async () => {
    mockUpdatePreferences.mockResolvedValueOnce({ success: false });
    const component = renderReduxConsumer(<SettingsDropdown {...props} />);

    fireEvent.click(component.getByText('Friends Only'));
    fireEvent.click(await screen.findByText('Public'));

    await waitForElementToBeRemoved(screen.getByTestId('settings-dropdown-spinner'));

    expect(onChangeHandler).not.toHaveBeenCalled();
});

it("Should update the selected option name if the update call succeeds", async () => {
    mockUpdatePreferences.mockResolvedValueOnce({ success: true });
    const component = renderReduxConsumer(<SettingsDropdown {...props} />);

    fireEvent.click(component.getByText('Friends Only'));
    fireEvent.click(await screen.findByText('Public'));

    await waitForElementToBeRemoved(screen.getByTestId('settings-dropdown-spinner'));

    expect(within(component.getByTestId('settings-dropdown-selected')).getByText('Public')).toBeInTheDocument();
});

it("Should not update the selected option name if the update call fails", async () => {
    mockUpdatePreferences.mockResolvedValueOnce({ success: false });
    const component = renderReduxConsumer(<SettingsDropdown {...props} />);

    fireEvent.click(component.getByText('Friends Only'));
    fireEvent.click(await screen.findByText('Public'));

    await waitForElementToBeRemoved(screen.getByTestId('settings-dropdown-spinner'));

    expect(within(component.getByTestId('settings-dropdown-selected')).getByText('Friends Only')).toBeInTheDocument();
});

it("Should update the selected preference in the user redux store if the update call succeeds", async () => {
    store.dispatch(setUser(testUser));
    mockUpdatePreferences.mockResolvedValueOnce({ success: true });
    const component = renderReduxConsumer(<SettingsDropdown {...props} />);

    fireEvent.click(component.getByText('Friends Only'));
    fireEvent.click(await screen.findByText('Public'));

    await waitForElementToBeRemoved(screen.getByTestId('settings-dropdown-spinner'));

    expect(store.getState().user.user?.preferences.profileVisibility).toBe("Public");
});

it("Should call the onError event handler with the returned error message if the update call fails", async () => {
    mockUpdatePreferences.mockResolvedValueOnce({ success: false, error: "Something went wrong." });
    const component = renderReduxConsumer(<SettingsDropdown {...props} />);

    fireEvent.click(component.getByText('Friends Only'));
    fireEvent.click(await screen.findByText('Public'));

    await waitForElementToBeRemoved(screen.getByTestId('settings-dropdown-spinner'));

    expect(onErrorHandler).toHaveBeenCalledWith("Something went wrong.");
});

it("Should call the onError event handler with a default error message if the update call fails and doesn't return one", async () => {
    mockUpdatePreferences.mockResolvedValueOnce({ success: false, error: undefined });
    const component = renderReduxConsumer(<SettingsDropdown {...props} />);

    fireEvent.click(component.getByText('Friends Only'));
    fireEvent.click(await screen.findByText('Public'));

    await waitForElementToBeRemoved(screen.getByTestId('settings-dropdown-spinner'));

    expect(onErrorHandler).toHaveBeenCalledWith("Failed to update preference.");
});

it("Should call the onError event handler with the returned error message if the update call is rejected", async () => {
    mockUpdatePreferences.mockRejectedValueOnce({ error: "Something went wrong." });
    const component = renderReduxConsumer(<SettingsDropdown {...props} />);

    fireEvent.click(component.getByText('Friends Only'));
    fireEvent.click(await screen.findByText('Public'));

    await waitForElementToBeRemoved(screen.getByTestId('settings-dropdown-spinner'));

    expect(onErrorHandler).toHaveBeenCalledWith("Something went wrong.");
});

it("Should call the onError event handler with a default error message if the update call is rejected and doesn't return one", async () => {
    mockUpdatePreferences.mockRejectedValueOnce({ error: undefined });
    const component = renderReduxConsumer(<SettingsDropdown {...props} />);

    fireEvent.click(component.getByText('Friends Only'));
    fireEvent.click(await screen.findByText('Public'));

    await waitForElementToBeRemoved(screen.getByTestId('settings-dropdown-spinner'));

    expect(onErrorHandler).toHaveBeenCalledWith("Failed to update preference.");
});

it("Should render the button with the default 'Click to see options' title", () => {
    const component = renderReduxConsumer(<SettingsDropdown {...props} />);
    expect(component.getByTitle('Click to see options')).toBeInTheDocument();
});

it("Should render the button with a 'Saving your selection...' title when updating", async () => {
    mockUpdatePreferences.mockResolvedValueOnce({ success: true });
    const component = renderReduxConsumer(<SettingsDropdown {...props} />);

    // Expand the menu and select an option
    fireEvent.click(component.getByText('Friends Only'));
    fireEvent.click(await screen.findByText('Public'));

    // Should immediately update the title on next render
    expect(screen.getByTitle('Saving your selection...')).toBeInTheDocument();

    // Should return to the default title after updating
    await waitForElementToBeRemoved(screen.getByTestId('settings-dropdown-spinner'));
    expect(component.getByTitle('Click to see options')).toBeInTheDocument();
});


it("Clicking the button while a previous selection is updating should not call the service again", async () => {
    mockUpdatePreferences.mockResolvedValue({ success: true });
    const component = renderReduxConsumer(<SettingsDropdown {...props} />);

    // Expand the menu and select an option
    fireEvent.click(component.getByText('Friends Only'));
    fireEvent.click(await screen.findByText('Public'));

    const spinner = screen.getByTestId('settings-dropdown-spinner');
    expect(spinner).toBeInTheDocument();

    // Should prevent any intermittent clicks from showing the menu
    fireEvent.click(screen.getByText('Friends Only'));

    // Should now render the selection option
    await waitForElementToBeRemoved(spinner);
    expect(mockUpdatePreferences).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('Public')).toBeInTheDocument();
});


it("Should stop rendering the dropdown menu when blurring the button", async () => {
    const component = renderReduxConsumer(<SettingsDropdown {...props} />);

    // Expand the menu
    fireEvent.click(component.getByText('Friends Only'));
    const dropdownOption = await screen.findByText('Public');
    expect(dropdownOption).toBeInTheDocument();

    // Blurring the menu / button should stop rendering the menu
    fireEvent.click(document.body);
    await waitForElementToBeRemoved(dropdownOption)
});
