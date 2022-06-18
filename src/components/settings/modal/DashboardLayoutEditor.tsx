import styles from "../../../styles/sass/components/settings/modal/DashboardLayoutEditor.module.scss";
import React from "react";
import SettingsTabTitle from "./SettingsTabTitle";

export interface DashboardLayoutEditorProps {
    onClose: () => void;
}

const DashboardLayoutEditor = (props: DashboardLayoutEditorProps) => {

    const { onClose } = props;

    return (
        <div data-testid="dashboard-layout-editor">
            <SettingsTabTitle
                title="Dashboard Layout Editor"
                close={{ onClick: onClose, className: styles.close }}
                description="Customise the layout of your home-page dashboard."
            />
        </div>
    );
}

export default DashboardLayoutEditor;
