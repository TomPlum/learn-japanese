import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/KanjiSettingsMenu.module.scss";
import { faGraduationCap, faLeaf, faMountain, faPaintBrush, faPlay, faSchool, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KyoikuGradeButton from "../layout/KyoikuGradeButton";
import Arrays from "../../utility/Arrays";
import { KyoikuGrade } from "../../types/kanji/KyoikuGrade";

interface KanjiSettingsMenuProps {
    onSelected: (grades: KyoikuGrade[]) => void;
}

interface KanjiSettingsMenuState {
    grades: KyoikuGrade[];
}

class KanjiSettingsMenu extends Component<KanjiSettingsMenuProps, KanjiSettingsMenuState> {
    constructor(props: KanjiSettingsMenuProps | Readonly<KanjiSettingsMenuProps>) {
        super(props);
        this.state = {
            grades: []
        }
    }

    render() {
        const { grades } = this.state;

        return (
            <Container fluid className={styles.wrapper}>
                <Row>
                    <Col className={styles.descWrapper}>
                        <h3 className={styles.heading}>Kyōiku Kanji</h3>
                        <p className={styles.desc}>
                            {grades.length > 0 ?
                                <p>Selected {Arrays.sum(grades.map(it => it.quantity))} Kanji</p>
                                : <p>Choose one or many grades below to begin.</p>
                            }
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6}>
                        <KyoikuGradeButton
                            grade={KyoikuGrade.ONE}
                            icon={faPaintBrush}
                            iconColour={"#fdb40e"}
                            isSelected={grades.includes(KyoikuGrade.ONE)}
                            onClick={this.onSelect}
                        />
                    </Col>
                    <Col>
                        <KyoikuGradeButton
                            grade={KyoikuGrade.TWO}
                            icon={faSchool}
                            iconColour={"#fdb40e"}
                            isSelected={grades.includes(KyoikuGrade.TWO)}
                            onClick={this.onSelect}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <KyoikuGradeButton
                            grade={KyoikuGrade.THREE}
                            icon={faLeaf}
                            iconColour={"#fdb40e"}
                            isSelected={grades.includes(KyoikuGrade.THREE)}
                            onClick={this.onSelect}
                        />
                    </Col>
                    <Col>
                        <KyoikuGradeButton
                            grade={KyoikuGrade.FOUR}
                            icon={faSun}
                            iconColour={"#fdb40e"}
                            isSelected={grades.includes(KyoikuGrade.FOUR)}
                            onClick={this.onSelect}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <KyoikuGradeButton
                            grade={KyoikuGrade.FIVE}
                            icon={faMountain}
                            iconColour={"#fdb40e"}
                            isSelected={grades.includes(KyoikuGrade.FIVE)}
                            onClick={this.onSelect}
                        />
                    </Col>
                    <Col>
                        <KyoikuGradeButton
                            grade={KyoikuGrade.SIX}
                            icon={faGraduationCap}
                            iconColour={"#fdb40e"}
                            isSelected={grades.includes(KyoikuGrade.SIX)}
                            onClick={this.onSelect}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button variant="success" className={styles.playButton} onClick={this.onConfirmSelected}
                                disabled={grades.length === 0}>
                            <FontAwesomeIcon size="sm" icon={faPlay}/> Start
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }

    onSelect = (grade: KyoikuGrade) => {
        const { grades } = this.state;
        if (grades.includes(grade)) {
            this.setState({ grades: Arrays.remove(grades, grade) });
        } else {
            this.setState({ grades: grades.concat(grade) });
        }
    }

    onConfirmSelected = () => this.props.onSelected(this.state.grades);
}

export default KanjiSettingsMenu;