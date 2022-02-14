import React from "react";
import Topic from "../../../../domain/Topic";
import DataSettings from "../../../../domain/session/settings/data/DataSettings";

export interface DataSettingsStepFormProps<T extends DataSettings> {
    isValid?: () => boolean;
    onChange: (settings: T) => void;
}

export interface DataSettingsStepProps {
    topic: Topic;
    onSelect: (settings: DataSettings) => void;
}

const DataSettingsStep = (props: DataSettingsStepProps) => {

    const { topic, onSelect } = props;

    const DataSettingsMenu = topic.wizardDataMenu as React.FunctionComponent<DataSettingsStepFormProps<any>>;

    return (
        <div>
            <DataSettingsMenu
                onChange={settings => onSelect(settings)}
            />
        </div>
    )
}

export default DataSettingsStep;
