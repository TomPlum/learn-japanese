import {Component} from "react";
import {Kana} from "../types/Kana";
import {Container} from "react-bootstrap";
import styles from "../styles/sass/components/KanaTile.module.scss";

interface KanaTileProps {
    kana: Kana;
}

interface KanaTileState {
    isNotifyingIncorrect: boolean;
}

class KanaTile extends Component<KanaTileProps, KanaTileState> {
    constructor(props: KanaTileProps | Readonly<KanaTileProps>) {
        super(props);
        this.state = {
            isNotifyingIncorrect: false
        }
    }

    render() {
        const { isNotifyingIncorrect } = this.state;

        return(
          <Container className={styles.wrapper}>
            <p className={isNotifyingIncorrect ? styles.notifyIncorrect : styles.kana}>{this.props.kana.code}</p>
          </Container>
        );
    }

    componentDidUpdate(prevProps: Readonly<KanaTileProps>, prevState: Readonly<KanaTileState>, snapshot?: any) {
        if (prevState.isNotifyingIncorrect) {
            setTimeout(() => this.setState({isNotifyingIncorrect: false}));
        }
    }

    notifyIncorrect = () => this.setState({isNotifyingIncorrect: true});

}

export default KanaTile;