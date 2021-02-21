import { Component } from "react";
import { Kana } from "../types/Kana";
import { Container } from "react-bootstrap";
import styles from "../styles/sass/components/KanaDisplay.module.scss";

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
        const { blur } = this.props;

        const colour = isNotifyingIncorrect ? styles.notifyIncorrect : blur ? styles.blur : styles.kana;

        return (
            <Container className={styles.wrapper}>
                <p className={colour}>
                    {this.props.kana.code}
                </p>
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