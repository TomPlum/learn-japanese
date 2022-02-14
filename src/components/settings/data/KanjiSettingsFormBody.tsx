import styles from "../../../styles/sass/components/layout/KanjiSettingsMenu.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import KyoikuGradeButton from "../../ui/buttons/KyoikuGradeButton";
import { KyoikuGrade } from "../../../domain/kanji/KyoikuGrade";
import { faGraduationCap, faLeaf, faMountain, faPaintBrush, faSchool, faSun } from "@fortawesome/free-solid-svg-icons";
import QuantityField from "../../ui/fields/QuantityField";
import Arrays from "../../../utility/Arrays";
import TemplateString from "../../../domain/TemplateString";
import React, { useEffect, useState } from "react";
import KanjiSettings, { KanjiSettingsBuilder } from "../../../domain/session/settings/data/KanjiSettings";

export interface KanjiSettingsFormBodyProps {
    onChange: (settings: KanjiSettings) => void;
}

const KanjiSettingsFormBody = (props: KanjiSettingsFormBodyProps) => {

    const { onChange } = props;

    const [grades, setGrades] = useState<KyoikuGrade[]>([]);
    const [quantity, setQuantity] = useState<number | undefined>(undefined);

    useEffect(() => {
        const dataSettings = new KanjiSettingsBuilder().withGrades(grades).withQuantity(quantity).build();
        onChange(dataSettings);
    }, [grades, quantity]);

    const onSelectGrade = (grade: KyoikuGrade) => {
        if (grades.includes(grade)) {
            setGrades(grades.filter(it => it.value !== grade.value));
        } else {
            setGrades(grades.concat(grade));
        }
    }

    const onChangeQuantity = (quantity: number) => {
        setQuantity(quantity);
    }

    const getDescription = () => {
        const template = new TemplateString("Selected {0} random kanji from {1}.");

        if (grades.length > 0) {
            if (quantity) {
                if (grades.length > 1) {
                    if (grades.length === 6) {
                        return template.format(quantity, "all grades");
                    }
                    const gradeNumbers = Arrays.copy(grades).splice(0, grades.length - 1).map(it => it.value).join(", ");
                    return template.format(quantity, "grades " + gradeNumbers + " & " + grades[grades.length - 1].value);
                }
                return template.format(quantity, "grade " + grades[0].value);
            }
            return "Selected " + Arrays.sum(grades.map(it => it.quantity)) + " Kanji";
        } else if (quantity && quantity > 0) {
            return template.format(quantity, "all grades");
        } else {
            return "Choose one or many grades below to begin.";
        }
    }

    return (
        <Container fluid className={styles.wrapper}>
            <Row>
                <Col>
                    <p className={styles.desc}>
                        {getDescription()}
                    </p>
                </Col>
            </Row>

            <Row>
                <Col xs={6}>
                    <KyoikuGradeButton
                        icon={faPaintBrush}
                        grade={KyoikuGrade.ONE}
                        onClick={onSelectGrade}
                        isSelected={grades.includes(KyoikuGrade.ONE)}
                    />
                </Col>
                <Col>
                    <KyoikuGradeButton
                        icon={faSchool}
                        grade={KyoikuGrade.TWO}
                        onClick={onSelectGrade}
                        isSelected={grades.includes(KyoikuGrade.TWO)}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <KyoikuGradeButton
                        icon={faLeaf}
                        onClick={onSelectGrade}
                        grade={KyoikuGrade.THREE}
                        isSelected={grades.includes(KyoikuGrade.THREE)}
                    />
                </Col>
                <Col>
                    <KyoikuGradeButton
                        icon={faSun}
                        onClick={onSelectGrade}
                        grade={KyoikuGrade.FOUR}
                        isSelected={grades.includes(KyoikuGrade.FOUR)}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <KyoikuGradeButton
                        icon={faMountain}
                        onClick={onSelectGrade}
                        grade={KyoikuGrade.FIVE}
                        isSelected={grades.includes(KyoikuGrade.FIVE)}
                    />
                </Col>
                <Col>
                    <KyoikuGradeButton
                        icon={faGraduationCap}
                        grade={KyoikuGrade.SIX}
                        onClick={onSelectGrade}
                        isSelected={grades.includes(KyoikuGrade.SIX)}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <QuantityField
                        value={quantity}
                        className={styles.quantity}
                        onChange={(value: number) => onChangeQuantity(value)}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default KanjiSettingsFormBody;
