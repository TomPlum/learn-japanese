import { Component } from "react";
import { Kana } from "../../types/Kana";
import { Container } from "react-bootstrap";
import styles from "../../styles/sass/components/game/KanaDisplay.module.scss";

interface KanaDisplayProps {
    kana: Kana;
    blur?: boolean;
    onClick?: (kana: Kana) => void;
    style?: KanaDisplayStyle;
    size?: string;
}

interface KanaDisplayStyle {
    container?: string;
    value?: string;
    size?: "sm" | "md" | "lg" | "xl";
    color?: string;
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
                    <p className={leftDiagraphClass + " " + styles.diagraphLeft} style={{ fontSize: this.getSize(), color: style?.color }}>
                        {kana.code[0]}
                    </p>
                    <p className={rightDiagraphClass + " " + styles.diagraphRight} style={{ fontSize: this.getSize(), color: style?.color }}>
                        {kana.code[1]}
                    </p>
                </> :
                <p className={kanaClass} style={{ fontSize: this.getSize(), color: style?.color }}>
                    {kana.code}
                </p>}
            </Container>
        );
    }

    notifyIncorrect = () => this.setState({ isNotifyingIncorrect: true });

    private getSize() {
        switch(this.props.style?.size) {
            case "sm": return "3em";
            case "md": return "5em";
            case "lg": return "8em";
            case "xl": return "10em";
            default: return "1em";
        }
    }
}


export default KanaDisplay;