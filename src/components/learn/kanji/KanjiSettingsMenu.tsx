import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { faGraduationCap, faLeaf, faMountain, faPaintBrush, faPlay, faRandom, faSchool, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KyoikuGradeButton from "../../ui/buttons/KyoikuGradeButton";
import Arrays from "../../../utility/Arrays";
import { KyoikuGrade } from "../../../types/kanji/KyoikuGrade";
import styles from "../../../styles/sass/components/layout/KanjiSettingsMenu.module.scss";
import { CustomLearnMenuProps } from "../LearnMenu";

interface KanjiSettingsMenuState {
    grades: KyoikuGrade[];
    quantity?: number;
    joyo: boolean;
}

class KanjiSettingsMenu extends Component<CustomLearnMenuProps, KanjiSettingsMenuState> {
    constructor(props: CustomLearnMenuProps | Readonly<CustomLearnMenuProps>) {
        super(props);
        this.state = {
            grades: [],
            quantity: undefined,
            joyo: false
        }
    }

    render() {
        const { grades, quantity } = this.state;

        return (
            <Container fluid className={styles.wrapper}>
                <Row>
                    <Col className={styles.descWrapper}>
                        <h3 className={styles.heading}>Kyōiku Kanji</h3>
                        <p className={styles.desc}>
                            {this.getDescription()}
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
                            onClick={this.onSelectGrade}
                        />
                    </Col>
                    <Col>
                        <KyoikuGradeButton
                            grade={KyoikuGrade.TWO}
                            icon={faSchool}
                            iconColour={"#fdb40e"}
                            isSelected={grades.includes(KyoikuGrade.TWO)}
                            onClick={this.onSelectGrade}
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
                            onClick={this.onSelectGrade}
                        />
                    </Col>
                    <Col>
                        <KyoikuGradeButton
                            grade={KyoikuGrade.FOUR}
                            icon={faSun}
                            iconColour={"#fdb40e"}
                            isSelected={grades.includes(KyoikuGrade.FOUR)}
                            onClick={this.onSelectGrade}
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
                            onClick={this.onSelectGrade}
                        />
                    </Col>
                    <Col>
                        <KyoikuGradeButton
                            grade={KyoikuGrade.SIX}
                            icon={faGraduationCap}
                            iconColour={"#fdb40e"}
                            isSelected={grades.includes(KyoikuGrade.SIX)}
                            onClick={this.onSelectGrade}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button className={styles.randomise} block variant="primary" onClick={this.onSelectRandom}>
                            <FontAwesomeIcon icon={faRandom} /> Random 50
                        </Button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button
                            variant="success"
                            className={styles.playButton}
                            onClick={this.onConfirmSelected}
                            disabled={grades.length === 0 && !quantity}
                        >
                            <FontAwesomeIcon size="sm" icon={faPlay} /> Start
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }

    private onSelectGrade = (grade: KyoikuGrade) => {
        const { grades } = this.state;
        if (grades.includes(grade)) {
            this.setState({ grades: Arrays.remove(grades, grade) });
        } else {
            this.setState({ grades: grades.concat(grade) });
        }
        this.setState({ quantity: undefined });
    }

    onSelectRandom = () => this.setState({ quantity: 50, joyo: true, grades: [] })

    private onConfirmSelected = () => {
        const { grades, quantity, joyo } = this.state;
        this.props.onSelect({
            kanji: {
                grades: grades,
                quantity: quantity,
                joyo: joyo
            }
        });
    }

    private getDescription = () => {
        const { grades, quantity } = this.state;
        if (grades.length > 0){
            return <span>Selected {Arrays.sum(grades.map(it => it.quantity))} Kanji</span>;
        } else if (quantity && quantity > 0) {
            return "Selected " + quantity + " random kanji from all grades.";
        } else {
            return "Choose one or many grades below to begin.";
        }
    }
}

export default KanjiSettingsMenu;