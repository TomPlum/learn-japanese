import React, { useImperativeHandle, useState } from "react";
import TimeSettingsForm from "../../../settings/game/TimeSettingsForm";
import TimeSettings from "../../../../domain/session/settings/game/TimeSettings";

const TimeSettingsStep = React.forwardRef((props, ref) => {

    const [settings, setSettings] = useState<TimeSettings>();

    useImperativeHandle(ref, () => ({
        getValue: () => settings
    }));

    return (
        <div>
            <TimeSettingsForm onChange={(settings) => setSettings(settings)} />
        </div>
    );
});

export default TimeSettingsStep;
