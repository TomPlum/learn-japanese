import DashboardCard from "../layout/card/DashboardCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import KanjiService from "../../service/KanjiService";
import { useEffect, useState } from "react";
import { Kanji } from "../../domain/kanji/Kanji";
import styles from "../../styles/sass/components/cards/KanjiShowcaseCard.module.scss";
import { useFontSelector } from "../../hooks";
import Copyable from "../ui/Copyable";
import { faChalkboardTeacher, faList, faListAlt, faPaintBrush, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const KanjiShowcaseCard = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [kanji, setKanji] = useState<Kanji | undefined>(undefined);

    const service = new KanjiService();
    const font = useFontSelector(state => state.font.selected);

    useEffect(() => {
        setLoading(true);

        service.randomKanji().then(response => {
            if (response.error) {
                setError(response.error);
            } else {
                setKanji(response.value);
            }
        }).catch(response => {
            setError(response.error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <DashboardCard loading={loading} error={error}>
            <DashboardCard.Header>
                <DashboardCardHeader.Title>Kanji of the Day</DashboardCardHeader.Title>
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

                <p className={styles.meaning}>{kanji?.getMeanings().slice(0, 3).join(", ")}</p>

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
