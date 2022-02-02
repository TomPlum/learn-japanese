import React from "react";
import { DataSettingsMenuProps } from "../../../settings/data/DataSettingsMenu";
import Topic from "../../../../domain/Topic";

export interface DataSettingsStepProps {
    topic: Topic;
}

const DataSettingsStep = (props: DataSettingsStepProps) => {

    const { topic } = props;

    const DataSettingsMenu = topic.menu as React.FunctionComponent<DataSettingsMenuProps<any>>;

    return (
        <div>
            <DataSettingsMenu
                title={topic.name}
                icon={topic.icon}
                onQuit={() => {}}
                onReset={() => {}}
                onConfirm={() => {}}
            />
        </div>
    )
}

export default DataSettingsStep;
