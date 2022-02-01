import React, { useImperativeHandle, useState } from "react";
import LifeSettingsForm from "../../../settings/game/LifeSettingsForm";
import LifeSettings from "../../../../domain/session/settings/game/LifeSettings";

const LifeSettingsStep = React.forwardRef((props, ref) => {

    const [settings, setSettings] = useState<LifeSettings>();

    useImperativeHandle(ref, () => ({
        getValue: () => settings
    }));

    return (
        <div>
            <LifeSettingsForm onChange={(settings) => setSettings(settings)} />
        </div>
    );
});

export default LifeSettingsStep;
