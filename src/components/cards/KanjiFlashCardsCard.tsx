import { Button, Card, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import SpacedRepetitionService, { FlashCardsResponse } from "../../service/SpacedRepetitionService";
import { FlashCard } from "../../domain/learn/FlashCard";
import LoadingSpinner from "../ui/LoadingSpinner";
import styles from "../../styles/sass/components/cards/KanjiFlashCardsCard.module.scss";
import ReloadButton from "../ui/buttons/ReloadButton";
import { faRedo, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

const KanjiFlashCardsCard = () => {

    const service = new SpacedRepetitionService();

    const history = useHistory();

    const [cards, setCards] = useState<FlashCard[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        loadKanjiFlashCards();
    }, []);

    const loadKanjiFlashCards = () => {
        setLoading(true);
        setError(undefined);

        service.getKanjiFlashCards().then((response: FlashCardsResponse) => {
            if (response.cards) {
                setCards(response.cards);
            } else {
                setError(response.error ?? "Error loading cards.");
            }
        }).catch(response => {
            setError(response.error ?? "Error loading cards.");
        }).finally(() => {
            setLoading(false);
        });
    }

    const onRefreshCards = async () => {
        loadKanjiFlashCards();
    }

    const onReview = () => {
        history.push("/learn/kanji");
    }

    return (
        <Card className={styles.card} border="info">
            <Card.Body>
                <h2 className={styles.heading}>
                    Kanji Flash Cards
                    {!error && <ReloadButton loading={loading} onClick={onRefreshCards} className={styles.icon} />}
                </h2>

                {error && <div className={styles.error}>
                    <p>{error}</p>
                    <Button variant="warning" onClick={onRefreshCards}>
                        <FontAwesomeIcon icon={loading ? faSpinner : faRedo} spin={loading} fixedWidth size="sm" />
                        <span> Try again</span>
                    </Button>
                </div>}

                <Row className={error ? styles.blur : undefined}>
                    <Col>
                        {!loading && <span className={styles.value}>{cards.length}</span>}
                        <LoadingSpinner active={loading} className={styles.loading} />
                        <p className={styles.label}>{(cards.length !== 1 ? "Cards" : "Card") + " to Review"}</p>
                    </Col>
                    <Col>
                        <Button disabled={!!error || cards.length === 0} onClick={onReview}>Review</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default KanjiFlashCardsCard;
