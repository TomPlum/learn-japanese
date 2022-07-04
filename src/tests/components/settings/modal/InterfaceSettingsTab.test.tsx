import { fireEvent } from "@testing-library/react";
import InterfaceSettingsTab from "../../../../components/settings/modal/InterfaceSettingsTab";
import renderReduxConsumer from "../../../renderReduxConsumer";
import { store } from "../../../../store";
import { clearUser, setUser } from "../../../../slices/UserSlice";
import { testUser } from "../../../../setupTests";

const onEditDashboardLayoutHandler = jest.fn();

const mockFontService = jest.fn();
jest.mock("../../../../service/FontService", () => {
    return function() {
        return { getFonts: mockFontService };
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
