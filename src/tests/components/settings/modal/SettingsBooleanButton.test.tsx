import SettingsBooleanButton, { SettingsBooleanButtonProps } from "../../../../components/settings/modal/SettingsBooleanButton";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { Preference } from "../../../../domain/user/Preference";
import { store } from "../../../../store";
import { clearUser, setPreference, setUser } from "../../../../slices/UserSlice";
import renderReduxConsumer from "../../../renderReduxConsumer";
import { testUser } from "../../../../setupTests";
import { fireEvent } from "@testing-library/react";

const mockUpdatePreferences = jest.fn();
jest.mock("../../../../service/UserService", () => {
    return function() {
        return { updatePreferences: mockUpdatePreferences };
    };
});

const onErrorHandler = jest.fn();

let props: SettingsBooleanButtonProps;

beforeEach(() => {
    props = {
        id: "test-toggle",
        truthy: {
            name: "Enabled",
            hover: "Disable Thing",
            icon: faApple,
            className: "truthyClass"
        },
        falsy: {
            name: "Disabled",
            hover: "Enable Thing",
            icon: faCrown,
            className: "falsyClass"
        },
        onError: onErrorHandler,
        preference: Preference.MISTAKES_REMINDERS,
        enableHoverColours: false
    };

    store.dispatch(setUser(testUser));
});

afterEach(() => {
    store.dispatch(clearUser());
});

test('Should render the truthy text if the value from the Redux store is true', () => {
    store.dispatch(setPreference({ preference: Preference.MISTAKES_REMINDERS, value: "true" }));
    const component = renderReduxConsumer(<SettingsBooleanButton {...props} />);
    expect(component.getByText('Enabled')).toBeInTheDocument();
});

test('Should render the falsy text if the value from the Redux store is false', () => {
    store.dispatch(setPreference({ preference: Preference.MISTAKES_REMINDERS, value: "false" }));
    const component = renderReduxConsumer(<SettingsBooleanButton {...props} />);
    expect(component.getByText('Disabled')).toBeInTheDocument();
});

test('Should render the truthy hover text if the value from the Redux store is true and the mouse is over', () => {
    store.dispatch(setPreference({ preference: Preference.MISTAKES_REMINDERS, value: "true" }));
    const component = renderReduxConsumer(<SettingsBooleanButton {...props} />);
    fireEvent.mouseOver(component.getByTestId('test-toggle'));
    expect(component.getByText('Disable Thing')).toBeInTheDocument();
});

test('Should render the falsy hover text if the value from the Redux store is false and the mouse is over', () => {
    store.dispatch(setPreference({ preference: Preference.MISTAKES_REMINDERS, value: "false" }));
    const component = renderReduxConsumer(<SettingsBooleanButton {...props} />);
    fireEvent.mouseOver(component.getByTestId('test-toggle'));
    expect(component.getByText('Enable Thing')).toBeInTheDocument();
});
