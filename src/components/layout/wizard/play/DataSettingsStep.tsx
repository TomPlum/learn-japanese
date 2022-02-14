import React from "react";
import Topic from "../../../../domain/Topic";
import DataSettings from "../../../../domain/session/settings/data/DataSettings";
import styles from "../../../../styles/sass/components/layout/wizard/play/DataSettingsStep.module.scss";

export interface DataSettingsStepFormProps<T extends DataSettings> {
    className?: string
    isValid?: (valid: boolean) => void;
    onChange: (settings: T) => void;
}

export interface DataSettingsStepProps {
    topic: Topic;
    isValid: (valid: boolean) => void;
    onSelect: (settings: DataSettings) => void;
}

const DataSettingsStep = (props: DataSettingsStepProps) => {

    const { topic, isValid, onSelect } = props;

    const DataSettingsMenu = topic.wizardDataMenu as React.FunctionComponent<DataSettingsStepFormProps<any>>;

    return (
        <div>
            <DataSettingsMenu
                isValid={isValid}
                className={styles.menu}
                onChange={settings => onSelect(settings)}
            />
        </div>
    )
}

export default DataSettingsStep;
