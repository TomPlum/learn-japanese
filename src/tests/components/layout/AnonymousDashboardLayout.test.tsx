import AnonymousDashboardLayout from "../../../components/layout/AnonymousDashboardLayout";
import renderReduxConsumer from "../../renderReduxConsumer";
import { fireEvent } from "@testing-library/react";
import renderTranslatedReduxConsumer from "../../renderTranslatedReduxConsumer";

const mockGetHideUserProfileHint = jest.fn();
const mockSetHideUserProfileHint = jest.fn();
jest.mock("../../../service/LocalStorageService", () => {
    return function () {
        return {
            getHideUserProfileHint: mockGetHideUserProfileHint,
            setHideUserProfileHint: mockSetHideUserProfileHint
        };
    };
});

test('It should render the profile card if the local storage does not contain a preference', () => {
    mockGetHideUserProfileHint.mockReturnValueOnce(false);
    const component = renderReduxConsumer(<AnonymousDashboardLayout />);
    expect(component.getByTestId('profile-card')).toBeInTheDocument();
});

test('It should not render the profile card if the local storage contains a preference to hide', () => {
    mockGetHideUserProfileHint.mockReturnValueOnce(true);
    const component = renderReduxConsumer(<AnonymousDashboardLayout />);
    expect(component.queryByTestId('profile-card')).not.toBeInTheDocument();
});

test('Clicking the dismiss button on the profile card should stop rendering the profile card', () => {
    mockGetHideUserProfileHint.mockReturnValueOnce(false);

    // Should start by rendering it
    const component = renderTranslatedReduxConsumer(<AnonymousDashboardLayout />);
    expect(component.getByTestId('profile-card')).toBeInTheDocument();

    // Should stop rendering it after dismissing
    fireEvent.click(component.getByTestId('dismiss-profile-card'));
    expect(component.queryByTestId('profile-card')).not.toBeInTheDocument();
    expect(mockSetHideUserProfileHint).toHaveBeenCalled();
});
