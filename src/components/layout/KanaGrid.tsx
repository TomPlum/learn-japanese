import React, { Component } from "react";
import { Kana } from "../../types/Kana";
import { CSSGrid, easings, layout, makeResponsive } from "react-stonecutter";
import styles from "../../styles/sass/components/layout/KanaGrid.module.scss";
import KanaTile from "./KanaTile";

interface KanaGridProps {
    kana: Kana[];
}

class KanaGrid extends Component<KanaGridProps> {
    render() {
        const { kana } = this.props;
        const Grid = makeResponsive(CSSGrid, { maxWidth: 1920 });
        // @ts-ignore
        return (
            <div className={styles.grid}>
                {kana.length > 0 ? <Grid
                    gutterWidth={10}
                    gutterHeight={10}
                    layout={layout.simple}
                    columnWidth={90}
                    duration={100}
                    itemHeight={90}
                    easing={easings.cubicOut}
                >
                    {kana.map(k => (
                        <div key={k.code}>
                            <KanaTile kana={k}/>
                        </div>
                    ))}
                </Grid> : <p>No results.</p>}
            </div>
        );
    }
}

export default KanaGrid;