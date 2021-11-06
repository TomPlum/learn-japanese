import { Button, Card, Col, Row } from "react-bootstrap";
import { User } from "../../slices/UserSlice";
import { useEffect, useState } from "react";
import SpacedRepetitionService, { FlashCardsResponse } from "../../service/SpacedRepetitionService";
import { FlashCard } from "../../domain/learn/FlashCard";
import LoadingSpinner from "../ui/LoadingSpinner";
import styles from "../../styles/sass/components/cards/KanjiFlashCardsCard.module.scss";
import ReloadButton from "../ui/buttons/ReloadButton";
import { faRedo, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface KanjiFlashCardsCardProps {
    user: User;
}

const KanjiFlashCardsCard = (props: KanjiFlashCardsCardProps) => {

    const service = new SpacedRepetitionService();

    const [cards, setCards] = useState<FlashCard[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        loadKanjiFlashCards();
    }, []);

    const loadKanjiFlashCards = () => {
        setLoading(true);

        service.getKanjiFlashCards().then((response: FlashCardsResponse) => {
            if (response.cards.length > 0) {
                setCards(response.cards);
                setError(undefined);
            } else {
                setError(response.error ?? "Error loading cards.");
            }
        }).catch(response => {
            setError(response.error);
        }).finally(() => {
            setLoading(false);
        });
    }

    const onRefreshCards = async () => {
        loadKanjiFlashCards();
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
                        <p className={styles.label}>{(cards.length > 1 ? "Cards" : "Card") + " to Review"}</p>
                    </Col>
                    <Col>
                        <Button>Review</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default KanjiFlashCardsCard;
