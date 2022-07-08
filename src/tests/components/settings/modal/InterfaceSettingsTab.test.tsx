import { fireEvent, screen, waitForElementToBeRemoved } from "@testing-library/react";
import InterfaceSettingsTab from "../../../../components/settings/modal/InterfaceSettingsTab";
import renderReduxConsumer from "../../../renderReduxConsumer";
import { store } from "../../../../store";
import { clearUser, setUser } from "../../../../slices/UserSlice";
import { testUser } from "../../../../setupTests";
import { setFont } from "../../../../slices/FontSlice";

const onEditDashboardLayoutHandler = jest.fn();

const mockFontService = jest.fn();
jest.mock("../../../../service/FontService", () => {
    return function() {
        return { getFonts: mockFontService };
    }
});

const mockUpdatePreferences = jest.fn();
jest.mock("../../../../service/UserService", () => {
    return function() {
        return { updatePreferences: mockUpdatePreferences };
    }
});

beforeEach(() => {
    store.dispatch(setUser(testUser));
});

afterEach(() => {
    store.dispatch(clearUser());
});

test('Should render the main tab contents on initial render', async () => {
    mockFontService.mockResolvedValueOnce([{ name: "Test Font", displayName: "Test Font" }]);
    const component = renderReduxConsumer(<InterfaceSettingsTab onEditDashboardLayout={onEditDashboardLayoutHandler} />);
    expect(await component.findByTestId('interface-settings-tab')).toBeInTheDocument();
});

test('Should call the onEditDashboard event handler after clicking the button', async () => {
    mockFontService.mockResolvedValueOnce([{ name: "Test Font", displayName: "Test Font" }]);
    const component = renderReduxConsumer(<InterfaceSettingsTab onEditDashboardLayout={onEditDashboardLayoutHandler} />);
    fireEvent.click(await component.findByText('Open Layout Editor'));
    expect(onEditDashboardLayoutHandler).toHaveBeenCalled();
});

test('Should render the theme selector dropdown', async () => {
    mockFontService.mockResolvedValueOnce([]);
    const component = renderReduxConsumer(<InterfaceSettingsTab onEditDashboardLayout={onEditDashboardLayoutHandler} />);

    fireEvent.click(component.getByTestId('interface-settings-theme-selector'));

    // Should render the correct options
    expect(await screen.findByText('Dark Mode')).toBeInTheDocument();
    expect(await screen.findByText('Light Mode')).toBeInTheDocument();
});

test('Should render the font selector dropdown', async () => {
    store.dispatch(setFont("Test Font"));
    mockFontService.mockResolvedValueOnce([{ name: "Test Font", displayName: "Test Font" }, { name: "Test Font2", displayName: "Test Font2" }]);
    const component = renderReduxConsumer(<InterfaceSettingsTab onEditDashboardLayout={onEditDashboardLayoutHandler} />);

    await waitForElementToBeRemoved(component.getByTestId('settings-dropdown-loading'));
    fireEvent.click(component.getByTestId('interface-settings-font-selector'));

    // Should render the correct options
    expect(await screen.findByText('Test Font')).toBeInTheDocument();
    expect(await screen.findByText('Test Font2')).toBeInTheDocument();

    // Selecting a font should store it in the Redux store
    mockUpdatePreferences.mockResolvedValueOnce({ success: true });
    fireEvent.click(await screen.findByText('Test Font2'));
    await waitForElementToBeRemoved(component.getByTestId('settings-dropdown-spinner'));
    expect(await store.getState().font.selected).toBe('Test Font2');
});

test('Should render the language selector dropdown', async () => {
    mockFontService.mockResolvedValueOnce([]);
    const component = renderReduxConsumer(<InterfaceSettingsTab onEditDashboardLayout={onEditDashboardLayoutHandler} />);

    fireEvent.click(component.getByTestId('interface-settings-language-selector'));

    // Should render the correct options
    expect(await screen.findByText('日本語')).toBeInTheDocument();
    expect(await screen.findByText('English')).toBeInTheDocument();
});

test('Should render the confidence menu style selector dropdown', async () => {
    mockFontService.mockResolvedValueOnce([]);
    const component = renderReduxConsumer(<InterfaceSettingsTab onEditDashboardLayout={onEditDashboardLayoutHandler} />);

    fireEvent.click(component.getByTestId('interface-settings-confidence-menu-selector'));

    // Should render the correct options
    expect(await screen.findByText('Numbers 1 - 6')).toBeInTheDocument();
    expect(await screen.findByText('Emoji Style')).toBeInTheDocument();
});
