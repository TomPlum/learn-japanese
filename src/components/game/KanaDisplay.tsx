import React, { Component } from "react";
import { Kana } from "../../types/Kana";
import { Container } from "react-bootstrap";
import styles from "../../styles/sass/components/game/KanaDisplay.module.scss";
import DynamicCharacter, { CharacterStyleProps } from "./DynamicCharacter";

interface KanaDisplayProps {
    kana: Kana;
    blur?: boolean;
    onClick?: (kana: Kana) => void;
    style?: KanaDisplayStyle;
    size?: string;
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
            setTimeout(() => this.setState({ isNotifyingIncorrect: false }));
        }
    }

    notifyIncorrect = () => this.setState({ isNotifyingIncorrect: true });

    render() {
        const { isNotifyingIncorrect } = this.state;
        const { blur, kana, style } = this.props;

        const kanaClass = isNotifyingIncorrect ? styles.redKana : blur ? styles.blur : styles.kana;
        const leftDiagraphClass = isNotifyingIncorrect ? styles.redKana : '';
        const rightDiagraphClass = isNotifyingIncorrect ? styles.redKana : '';

        return (
            <Container className={style?.container ?? styles.wrapper} onClick={() => this.props.onClick?.(kana)}>
                {kana.isDiagraph() ?
                    <>
                        <DynamicCharacter
                            value={kana.code[0]}
                            style={style?.character}
                            classes={[leftDiagraphClass, styles.diagraphLeft]}
                        />
                        <DynamicCharacter
                            value={kana.code[1]}
                            style={style?.character}
                            classes={[rightDiagraphClass, styles.diagraphRight]}
                        />
                    </> :
                    <DynamicCharacter value={kana.code} style={style?.character} classes={kanaClass}/>
                }
            </Container>
        );
    }
}


export default KanaDisplay;