import React, {ReactElement, ReactNode} from "react";

import styles from "../../../styles/sass/components/ui/display/GenkiFootNoteContainer.module.scss";

export interface GenkiFootNoteContainerProps {
    children: ReactNode;
}

const GenkiFootNoteContainer = (props: GenkiFootNoteContainerProps) => {
    return (
        <div data-testid="genki-foot-note-container">
            <hr className={styles.hr} />
            {React.Children.map(props.children, (note: ReactNode) => (
                React.cloneElement(note as ReactElement, { className: styles.note })
            ))}
        </div>
    );
}

export default GenkiFootNoteContainer;