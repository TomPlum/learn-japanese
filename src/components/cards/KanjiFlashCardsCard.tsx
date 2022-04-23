import { Button, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import SpacedRepetitionService, { FlashCardsResponse } from "../../service/SpacedRepetitionService";
import { FlashCard } from "../../domain/learn/FlashCard";
import styles from "../../styles/sass/components/cards/KanjiFlashCardsCard.module.scss";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import DashboardCard, { DashboardCardProps } from "../layout/card/DashboardCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import DashboardCardLink from "../layout/card/DashboardCardLink";

const KanjiFlashCardsCard = () => {

    const service = new SpacedRepetitionService();

    const history = useHistory();

    const [cards, setCards] = useState<FlashCard[]>([]);
    const [loading, setLoading] = useState(false);
    const [updating, setUpdating] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        setLoading(true);
        setError(undefined);
        loadKanjiFlashCards().finally(() => setLoading(false));
    }, []);

    const loadKanjiFlashCards = () => {
        return service.getKanjiFlashCards().then((response: FlashCardsResponse) => {
            if (response.cards) {
                setCards(response.cards);
            } else {
                setError(response.error ?? "Error loading cards.");
            }
        }).catch(response => {
            setError(response.error ?? "Error loading cards.");
        });
    }

    const onRefreshCards = async () => {
        setUpdating(true);
        loadKanjiFlashCards().finally(() => setUpdating(false));
    }

    const onReview = () => {
        history.push("/learn/kanji");
    }

    const props: DashboardCardProps = {
        id: "flash-cards-card",
        className: styles.card
    }

    return (
        <DashboardCard {...props} error={error} updating={updating} loading={loading}>
            <DashboardCard.Header>
                <DashboardCardHeader.Title>Flash Cards</DashboardCardHeader.Title>
                <DashboardCardHeader.SettingsMenu>
                    <DashboardCardLink text="Sync" icon={faSyncAlt} onClick={onRefreshCards} />
                </DashboardCardHeader.SettingsMenu>
            </DashboardCard.Header>

            <DashboardCard.Body>
                <Row className={error ? styles.blur : undefined}>
                    <Col>
                        <span className={styles.value}>{cards.length}</span>
                        <p className={styles.label}>{(cards.length !== 1 ? "Cards" : "Card") + " to Review"}</p>
                    </Col>
                    <Col>
                        <Button disabled={cards.length === 0} onClick={onReview}>Review</Button>
                    </Col>
                </Row>
            </DashboardCard.Body>
        </DashboardCard>
    );
}

export default KanjiFlashCardsCard;
