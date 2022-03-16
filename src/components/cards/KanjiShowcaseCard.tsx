import DashboardCard from "../layout/card/DashboardCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import KanjiService from "../../service/KanjiService";
import { useEffect, useState } from "react";
import { Kanji } from "../../domain/kanji/Kanji";
import styles from "../../styles/sass/components/cards/KanjiShowcaseCard.module.scss";
import { useFontSelector } from "../../hooks";
import Copyable from "../ui/Copyable";
import { faChalkboardTeacher, faListAlt, faPaintBrush, faPencilAlt, faRandom, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Inspectable from "../ui/Inspectable";
import ExampleDisplay from "../ui/display/ExampleDisplay";

const KanjiShowcaseCard = () => {

    const MAX_MEANINGS_LENGTH = 23;

    const [loading, setLoading] = useState(false);
    const [updating, setUpdating] = useState(false);
    const [error, setError] = useState("");
    const [kanji, setKanji] = useState<Kanji | undefined>(undefined);
    const [inExamples, setInExamples] = useState(false);

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

    const examples = kanji?.examples ?? [];
    const hasExamples = (kanji?.examples ?? []).length > 0;
    const handleViewExamples = () => {
        if (hasExamples) {
           setInExamples(true);
        }
    }

    const meanings = kanji?.getMeanings()?.join(", ") ?? "";
    const areTooLong = meanings.length <= MAX_MEANINGS_LENGTH;
    const fullMeanings = { title: "Meanings", text: meanings };

    const allOnReadings = kanji?.getOnyomiReadings().map(reading => reading.kana) ?? [];
    const onReadingPopOver = { title: "On'Yomi Readings", text: allOnReadings?.join(", ") };
    const hasSingularOnReading = allOnReadings.length === 1;

    const allKunReadings = kanji?.getKunyomiReadings().map(reading => reading.kana) ?? [];
    const kunReadingPopOver = { title: "Kun'Yomi Readings", text: allKunReadings?.join(", ") };
    const hasSingularKunReading = allKunReadings.length === 1;

    const examplesClasses = [styles.attribute];
    if (hasExamples) {
        examplesClasses.push(styles.clickable);
    }

    return (
        <DashboardCard loading={loading} updating={updating} error={error} height={300}>
            {inExamples && <ExampleDisplay examples={examples} onDismiss={() => setInExamples(false)} />}

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
                        <div className={examplesClasses.join(" ")} title="Examples" onClick={handleViewExamples}>
                            <FontAwesomeIcon icon={faListAlt} fixedWidth className={styles.icon} />
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
                    <Inspectable popover={onReadingPopOver} placement="bottom" disableUnderline disabled={hasSingularOnReading}>
                        <span className={styles.on}>
                            <span className={styles.label}>on</span>
                            {!hasSingularOnReading && <span className={styles.count}>x{allOnReadings.length}</span>}
                            <span>{kanji?.getOnyomiReadings()[0]?.kana ?? "N/A"}</span>
                        </span>
                    </Inspectable>

                    <Inspectable popover={kunReadingPopOver} placement="bottom" disableUnderline disabled={hasSingularKunReading}>
                        <span className={styles.kun}>
                            <span className={styles.label}>kun</span>
                            {!hasSingularKunReading && <span className={styles.count}>x{allKunReadings.length}</span>}
                            <span>{kanji?.getKunyomiReadings()[0]?.kana ?? "N/A"}</span>
                        </span>
                    </Inspectable>
                </div>

                <div className={styles.search}>
                    <FontAwesomeIcon icon={faSearch} fixedWidth />
                    <a href="/kanji">search all kanji</a>
                </div>
            </DashboardCard.Body>
        </DashboardCard>
    );
}

export default KanjiShowcaseCard;
