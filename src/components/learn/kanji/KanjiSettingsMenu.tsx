import { Component } from "react";
import { Button, Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { faBalanceScale, faGraduationCap, faLeaf, faMountain, faPaintBrush, faPlay, faSchool, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KyoikuGradeButton from "../../ui/buttons/KyoikuGradeButton";
import Arrays from "../../../utility/Arrays";
import { KyoikuGrade } from "../../../types/kanji/KyoikuGrade";
import styles from "../../../styles/sass/components/layout/KanjiSettingsMenu.module.scss";
import { CustomLearnMenuProps } from "../LearnMenu";
import TemplateString from "../../../types/TemplateString";

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
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text><FontAwesomeIcon icon={faBalanceScale} fixedWidth /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id="quantity"
                                placeholder="Quantity"
                                className={styles.quantity}
                                type="number"
                                onChange={(e) => this.setState({ quantity: Number(e.target.value) })}
                            />
                        </InputGroup>
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
    }

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
}

export default KanjiSettingsMenu;