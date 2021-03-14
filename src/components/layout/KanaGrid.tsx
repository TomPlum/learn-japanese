import React, { Component } from "react";
import { Kana } from "../../types/Kana";
import styles from "../../styles/sass/components/layout/KanaGrid.module.scss";
import KanaTile from "./KanaTile";
import StackGrid, { transitions } from "react-stack-grid";

export interface KanaGridProps {
    kana: Kana[];
}

class KanaGrid extends Component<KanaGridProps> {
    render() {
        const { kana } = this.props;
        return (
            <>
                {kana.length > 0 ? <StackGrid
                    columnWidth={90}
                    gutterWidth={10}
                    gutterHeight={10}
                    monitorImagesLoaded={false}
                    duration={100}
                    appear={transitions.scaleDown.appear}
                    appeared={transitions.scaleDown.appeared}
                    enter={transitions.scaleDown.enter}
                    entered={transitions.scaleDown.entered}
                    leaved={transitions.scaleDown.leaved}
                    appearDelay={0}
                    easing="ease-in"
                    className={styles.grid}
                >
                    {kana.map(k => (
                        <div key={k.code}>
                            <KanaTile kana={k}/>
                        </div>
                    ))}
                </StackGrid> : <p>No results.</p>}
            </>
        );
    }
}

export default KanaGrid;