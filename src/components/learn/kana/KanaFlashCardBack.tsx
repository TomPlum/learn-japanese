import { Component } from "react";
import { Kana } from "../../../types/Kana";
import { Button, Container, Row } from "react-bootstrap";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../styles/sass/components/learn/kana/KanaFlashCardBack.module.scss"

export interface KanaFlashCardBackProps {
    kana: Kana;
    onClick: () => void;
}

class KanaFlashCardBack extends Component<KanaFlashCardBackProps> {
    render() {
        const { kana, onClick } = this.props;

        return (
            <Container className={styles.wrapper}>
                <Row className={styles.header}>
                    <p className={styles.type}>{kana.type}</p>
                    <Button className={styles.back} variant="outline-danger" onClick={onClick} title="Reset">
                        <FontAwesomeIcon icon={faReply} />
                    </Button>
                </Row>

                <Row className={styles.body}>
                    <span className={styles.romaji}>{kana.getFullRomajiString()}</span>
                </Row>
            </Container>
        );
    }
}

export default KanaFlashCardBack;