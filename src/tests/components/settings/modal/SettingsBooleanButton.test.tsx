import { SettingsBooleanButtonProps } from "../../../../components/settings/modal/SettingsBooleanButton";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { Preference } from "../../../../domain/user/Preference";

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
        truthy: {
            name: "Enable Thing",
            icon: faApple,
            className: "truthyClass"
        },
        falsy: {
            name: "Disable Thing",
            icon: faCrown,
            className: "falsyClass"
        },
        onError: onErrorHandler,
        preference: Preference.THEME,
        enableHoverColours: false
    }
});
