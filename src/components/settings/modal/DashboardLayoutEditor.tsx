import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/sass/components/settings/modal/DashboardLayoutEditor.module.scss";
import React from "react";

export interface DashboardLayoutEditorProps {
    onClose: () => void;
}

const DashboardLayoutEditor = (props: DashboardLayoutEditorProps) => {

    const { onClose } = props;

    return (
        <div>
            <p>Dashboard Layout Editor</p>
            <FontAwesomeIcon
                fixedWidth
                title="Close"
                icon={faTimes}
                onClick={onClose}
                className={styles.close}
            />
        </div>
    );
}

export default DashboardLayoutEditor;
