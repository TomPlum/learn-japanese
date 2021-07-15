import React, { Component } from "react";
import { Kana } from "../../../types/kana/Kana";
import { Container } from "react-bootstrap";
import DynamicCharacter, { CharacterStyleProps } from "../../game/DynamicCharacter";
import styles from "../../../styles/sass/components/ui/display/KanaDisplay.module.scss";

export interface KanaDisplayProps {
    kana: Kana;
    blur?: boolean;
    index?: number;
    style?: KanaDisplayStyle;
    onClick?: (kana: Kana) => void;
}

export interface KanaDisplayStyle {
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

    notifyIncorrect = () => {
        this.setState({ isNotifyingIncorrect: true });
    }

    render() {
        const { isNotifyingIncorrect } = this.state;
        const { blur, kana, style, index, onClick } = this.props;

        const containerClass = style?.container ? style.container : styles.wrapper;
        const kanaClass = isNotifyingIncorrect ? styles.redKana : blur ? styles.blur : styles.kana;
        const leftDiagraphClass = isNotifyingIncorrect ? styles.redKana : blur ? styles.diagraphBlur : styles.diagraphLeft;
        const rightDiagraphClass = isNotifyingIncorrect ? styles.redKana : blur ? styles.diagraphBlur : styles.diagraphRight;
        const clickable = onClick ? styles.clickable : "";
        const extraCharacterClass = style?.character?.className ?? "";

        const indexVisibility = index && !blur ? 'visible' : 'hidden';
        const indexColour = style?.character?.color;

        return (
            <Container className={containerClass} onClick={this.handleContainerClick}>
                <span className={styles.index} style={{ color: indexColour, visibility: indexVisibility }}>
                    {index}
                </span>

                {kana.isDiagraph() ?
                    <>
                        <DynamicCharacter
                            value={kana.code[0]}
                            style={style?.character}
                            classes={[leftDiagraphClass, styles.diagraphLeft, clickable, extraCharacterClass]}
                            isDiagraphLeft={true}
                        />
                        <DynamicCharacter
                            value={kana.code[1]}
                            style={style?.character}
                            classes={[rightDiagraphClass, styles.diagraphRight, clickable, extraCharacterClass]}
                            isDiagraphRight={true}
                        />
                    </> :
                    <DynamicCharacter
                        value={kana.code}
                        style={style?.character}
                        classes={[kanaClass, clickable, extraCharacterClass]}
                    />
                }
            </Container>
        );
    }

    private handleContainerClick = () => {
        this.props.onClick?.(this.props.kana);
    }
}


export default KanaDisplay;