import { Component } from "react";
import { Kana } from "../../types/Kana";
import { Container } from "react-bootstrap";
import styles from "../../styles/sass/components/KanaDisplay.module.scss";

interface KanaTileProps {
    kana: Kana;
    blur?: boolean;
}

interface KanaTileState {
    isNotifyingIncorrect: boolean;
}

class KanaDisplay extends Component<KanaTileProps, KanaTileState> {
    constructor(props: KanaTileProps | Readonly<KanaTileProps>) {
        super(props);
        this.state = {
            isNotifyingIncorrect: false
        }
    }

    render() {
        const { isNotifyingIncorrect } = this.state;
        const { blur, kana } = this.props;

        const kanaClass = isNotifyingIncorrect ? styles.redKana : blur ? styles.blur : styles.kana;
        const leftDiagraphClass = isNotifyingIncorrect ? styles.redKana : '';
        const rightDiagraphClass = isNotifyingIncorrect ? styles.redKana : '';

        return (
            <Container className={styles.wrapper}>
                {kana.isDiagraph() ?
                <>
                    <p className={leftDiagraphClass + " " + styles.diagraphLeft}>{kana.code[0]}</p>
                    <p className={rightDiagraphClass + " " + styles.diagraphRight}>{kana.code[1]}</p>
                </> :
                <p className={kanaClass}>
                    {kana.code}
                </p>}
            </Container>
        );
    }

    componentDidUpdate(prevProps: Readonly<KanaTileProps>, prevState: Readonly<KanaTileState>, snapshot?: any) {
        if (prevState.isNotifyingIncorrect) {
            setTimeout(() => this.setState({ isNotifyingIncorrect: false }));
        }
    }

    notifyIncorrect = () => this.setState({ isNotifyingIncorrect: true });
}


export default KanaDisplay;