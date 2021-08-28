import React, { Component } from "react";
import { Kana } from "../../types/kana/Kana";
import KanaTile from "./KanaTile";
import StackGrid, { transitions } from "react-stack-grid";
import styles from "../../styles/sass/components/layout/KanaGrid.module.scss";

export interface KanaGridProps {
    kana: Kana[];
}

class KanaGrid extends Component<KanaGridProps> {
    render() {
        return (
            <>
                {this.props.kana.length > 0 ?
                    <StackGrid
                        columnWidth={90}
                        component="div"
                        gutterWidth={10}
                        gutterHeight={10}
                        monitorImagesLoaded={false}
                        duration={0}
                        appear={transitions.fade.appear}
                        appeared={transitions.fade.appeared}
                        enter={transitions.fade.enter}
                        entered={transitions.fade.entered}
                        leaved={transitions.fade.leaved}
                        appearDelay={0}
                        easing="quartOut"
                        className={styles.grid}
                    >
                        {this.props.kana.map(kana => (
                            <KanaTile key={kana.code} kana={kana}/>
                        ))}
                    </StackGrid> :
                    <p className={styles.noResults}>No results.</p>
                }
            </>
        );
    }
}

export default KanaGrid;
