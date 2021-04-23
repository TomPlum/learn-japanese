import { Col, Container, Row } from "react-bootstrap";
import FlashCardBack from "./FlashCardBack";
import JapaneseWord from "../../types/learn/JapaneseWord";
import styles from "../../styles/sass/components/learn/CommonFlashCardBack.module.scss"

const CommonFlashCardBack = (props: { answer: string, words: JapaneseWord[], title: string, borderColour?: string, onClick: () => void }) => {
    const { answer, words, title, onClick } = props;

    return (
        <FlashCardBack title={title} onReset={onClick} className={styles.wrapper}>
            <Container className={styles.innerWrapper}>
                <Row>
                    <Col sm={6} xs={12}>
                        <p className={styles.kanji}>{answer}</p>
                    </Col>
                    <Col sm={6} xs={12} className={styles.rightCol}>
                        <div className={styles.rightDataWrapper}>
                            <p className={styles.kana}>{words.map(it => it.kana).join(" or ")}</p>
                            <p className={styles.romaji}>({words.map(it => it.romaji).join(" or ")})</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </FlashCardBack>
    );
};

export default CommonFlashCardBack;