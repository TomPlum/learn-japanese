import React, { Component } from "react";
import { Kana } from "../../types/Kana";
import { Container } from "react-bootstrap";
import styles from "../../styles/sass/components/game/KanaDisplay.module.scss";
import DynamicCharacter, { CharacterStyleProps } from "./DynamicCharacter";

export interface KanaDisplayProps {
    kana: Kana;
    blur?: boolean;
    index?: number;
    onClick?: (kana: Kana) => void;
    style?: KanaDisplayStyle;
}

interface KanaDisplayStyle {
    container?: string;
    character?: CharacterStyleProps;
}

interface KanaDisplayState {
    isNotifyingIncorrect: boolean;
}

class KanaDisplay extends Component<KanaDisplayProps, KanaDisplayState> {
    constructor(props: KanaDisplayProps | Readonly<KanaDisplayProps>) {
        super(props);
        this.state = {
            isNotifyingIncorrect: false
        }
    }

    componentDidUpdate(prevProps: Readonly<KanaDisplayProps>, prevState: Readonly<KanaDisplayState>) {
        if (prevState.isNotifyingIncorrect) {
            this.setState({ isNotifyingIncorrect: false });
        }
    }

    notifyIncorrect = () => this.setState({ isNotifyingIncorrect: true });

    render() {
        const { isNotifyingIncorrect } = this.state;
        const { blur, kana, style, index, onClick } = this.props;

        const kanaClass = isNotifyingIncorrect ? styles.redKana : blur ? styles.blur : styles.kana;
        const leftDiagraphClass = isNotifyingIncorrect ? styles.redKana : blur ? styles.diagraphBlur : styles.diagraphLeft;
        const rightDiagraphClass = isNotifyingIncorrect ? styles.redKana : blur ? styles.diagraphBlur : styles.diagraphRight;
        const clickable = onClick ? styles.clickable : "";

        return (
            <Container className={style?.container ? style.container : styles.wrapper} onClick={() => this.props.onClick?.(kana)}>
                {index && !blur &&
                    <span className={styles.index} style={{ color: style?.character?.color }}>
                        {index}
                    </span>
                }

                {kana.isDiagraph() ?
                    <>
                        <DynamicCharacter
                            value={kana.code[0]}
                            style={style?.character}
                            classes={[leftDiagraphClass, styles.diagraphLeft, clickable]}
                            isDiagraphLeft={true}
                        />
                        <DynamicCharacter
                            value={kana.code[1]}
                            style={style?.character}
                            classes={[rightDiagraphClass, styles.diagraphRight, clickable]}
                            isDiagraphRight={true}
                        />
                    </> :
                    <DynamicCharacter value={kana.code} style={style?.character} classes={[kanaClass, clickable]}/>
                }
            </Container>
        );
    }
}


export default KanaDisplay;