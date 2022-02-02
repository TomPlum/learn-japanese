import React from "react";
import { DataSettingsMenuProps } from "../../../settings/data/DataSettingsMenu";
import Topic from "../../../../domain/Topic";
import DataSettings from "../../../../domain/session/settings/data/DataSettings";

export interface DataSettingsStepProps {
    topic: Topic;
    onSelect: (settings: DataSettings) => void;
}

const DataSettingsStep = (props: DataSettingsStepProps) => {

    const { topic, onSelect } = props;

    const DataSettingsMenu = topic.menu as React.FunctionComponent<DataSettingsMenuProps<any>>;

    return (
        <div>
            <DataSettingsMenu
                title={topic.name}
                icon={topic.icon}
                onQuit={() => {}}
                onReset={() => {}}
                onConfirm={onSelect}
            />
        </div>
    )
}

export default DataSettingsStep;
