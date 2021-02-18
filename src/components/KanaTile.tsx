import {Component} from "react";
import {Kana} from "../types/Kana";
import {Container} from "react-bootstrap";
import styles from "../styles/sass/components/KanaTile.module.scss";

interface KanaTileProps {
    kana: Kana;
}

class KanaTile extends Component<KanaTileProps> {
    render() {
        return(
          <Container className={styles.wrapper}>
            <p className={styles.kana}>{this.props.kana.code}</p>
          </Container>
        );
    }
}

export default KanaTile;