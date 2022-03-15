import DashboardCard from "../layout/card/DashboardCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import KanjiService from "../../service/KanjiService";
import { useEffect, useState } from "react";
import { Kanji } from "../../domain/kanji/Kanji";
import styles from "../../styles/sass/components/cards/KanjiShowcaseCard.module.scss";
import { useFontSelector } from "../../hooks";
import Copyable from "../ui/Copyable";
import { faChalkboardTeacher, faListAlt, faPaintBrush, faPencilAlt, faRandom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Inspectable from "../ui/Inspectable";

const KanjiShowcaseCard = () => {

    const MAX_MEANINGS_LENGTH = 23;

    const [loading, setLoading] = useState(false);
    const [updating, setUpdating] = useState(false);
    const [error, setError] = useState("");
    const [kanji, setKanji] = useState<Kanji | undefined>(undefined);

    const service = new KanjiService();
    const font = useFontSelector(state => state.font.selected);

    const shuffleKanji = () => {
        return service.randomKanji().then(response => {
            if (response.error) {
                setError(response.error);
            } else {
                setKanji(response.value);
            }
        }).catch(response => {
            setError(response.error);
        });
    }

    useEffect(() => {
        setLoading(true);
        shuffleKanji().finally(() => setLoading(false));
    }, []);

    const handleShuffle = () => {
        setUpdating(true);
        shuffleKanji().finally(() => setUpdating(false));
    }

    const getTrimmedMeanings = () => {
        const meanings = kanji?.getMeanings().join(", ");
        if (!meanings) {
            return "N/A";
        }

        if (meanings.length > MAX_MEANINGS_LENGTH) {
            return `${meanings.substring(0, MAX_MEANINGS_LENGTH)}...`;
        }

        return meanings;
    }

    const meanings = kanji?.getMeanings()?.join(", ") ?? "";
    const areTooLong = meanings.length <= MAX_MEANINGS_LENGTH;
    const fullMeanings = { title: "Meanings", text: meanings };

    return (
        <DashboardCard loading={loading} updating={updating} error={error} height={267}>
            <DashboardCard.Header>
                <DashboardCardHeader.Title>Kanji Showcase</DashboardCardHeader.Title>
                <DashboardCardHeader.Icon icon={faRandom} onClick={handleShuffle} disabled={updating} title="Shuffle" />
            </DashboardCard.Header>

            <DashboardCard.Body className={styles.body}>
                <div className={styles.main}>
                    <div className={styles.attributes}>
                        <div className={styles.attribute} title="Kyōiku Grade">
                            <FontAwesomeIcon icon={faChalkboardTeacher} fixedWidth />
                            <span>{kanji?.grade.value ?? "N/A"}</span>
                        </div>
                        <div className={styles.attribute} title="JLPT Level">
                            <FontAwesomeIcon icon={faPencilAlt} fixedWidth />
                            <span>{kanji?.jlpt.value ?? "?"}</span>
                        </div>
                    </div>

                    <div className={styles.kanji}>
                        <Copyable>
                            <span style={{ fontFamily: font }}>
                                {kanji?.getKanjiVariation()}
                            </span>
                        </Copyable>
                    </div>

                    <div className={styles.attributes}>
                        <div className={styles.attribute} title="Brush Strokes">
                            <FontAwesomeIcon icon={faPaintBrush} fixedWidth />
                            <span>{kanji?.strokes ?? "N/A"}</span>
                        </div>
                        <div className={styles.attribute} title="Examples">
                            <FontAwesomeIcon icon={faListAlt} fixedWidth />
                            <span>{kanji?.examples.length}</span>
                        </div>
                    </div>
                </div>

                <p className={styles.meaning}>
                    <Inspectable popover={fullMeanings} placement="bottom" disableUnderline disabled={areTooLong}>
                        <span>{getTrimmedMeanings()}</span>
                    </Inspectable>
                </p>

                <div className={styles.readings}>
                    <span className={styles.on}>
                        <span className={styles.label}>on</span>
                        <span>{kanji?.getOnyomiReadings()[0]?.kana ?? "N/A"}</span>
                    </span>
                    <span className={styles.kun}>
                        <span className={styles.label}>kun</span>
                        <span>{kanji?.getKunyomiReadings()[0]?.kana ?? "N/A"}</span>
                    </span>
                </div>
            </DashboardCard.Body>
        </DashboardCard>
    );
}

export default KanjiShowcaseCard;
