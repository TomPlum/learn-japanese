import HintSettingsForm from "../../../settings/game/HintSettingsForm";
import React, { useImperativeHandle, useState } from "react";
import HintSettings from "../../../../domain/session/settings/game/HintSettings";

const HintSettingsStep = React.forwardRef((props, ref) => {

    const [settings, setSettings] = useState<HintSettings>();

    useImperativeHandle(ref, () => ({
        getValue: () => settings
    }));

    return (
        <div>
            <HintSettingsForm onChange={(settings) => setSettings(settings)} />
        </div>
    );
});

export default HintSettingsStep;
