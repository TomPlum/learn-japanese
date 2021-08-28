import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { faGraduationCap, faLeaf, faMountain, faPaintBrush, faSchool, faSun } from "@fortawesome/free-solid-svg-icons";
import KyoikuGradeButton from "../../ui/buttons/KyoikuGradeButton";
import Arrays from "../../../utility/Arrays";
import { KyoikuGrade } from "../../../domain/kanji/KyoikuGrade";
import TemplateString from "../../../domain/TemplateString";
import KanjiSettings, { KanjiSettingsBuilder } from "../../../domain/session/settings/data/KanjiSettings";
import DataSettingsMenu, { DataSettingsMenuProps } from "./DataSettingsMenu";
import QuantityField from "../../ui/fields/QuantityField";
import styles from "../../../styles/sass/components/layout/KanjiSettingsMenu.module.scss";

interface KanjiSettingsMenuState {
    grades: KyoikuGrade[];
    quantity?: number;
    joyo: boolean;
}

class KanjiSettingsForm extends Component<DataSettingsMenuProps<KanjiSettings>, KanjiSettingsMenuState> {
    constructor(props: DataSettingsMenuProps<KanjiSettings> | Readonly<DataSettingsMenuProps<KanjiSettings>>) {
        super(props);
        this.state = {
            grades: [],
            quantity: undefined,
            joyo: false
        }
    }

    render() {
        const { title, icon, onQuit } = this.props;
        const { grades, quantity } = this.state;

        return (
            <DataSettingsMenu title={title} icon={icon} onQuit={onQuit} onReset={this.onReset} onConfirm={this.confirm} isValid={this.validate}>
                <Container fluid className={styles.wrapper}>
                    <Row>
                        <Col>
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
                            <QuantityField
                                value={quantity}
                                className={styles.quantity}
                                onChange={(value: number) => this.setState(({ quantity: value }))}
                            />
                        </Col>
                    </Row>
                </Container>
            </DataSettingsMenu>
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

    private confirm = () => {
        const { grades, quantity, joyo } = this.state;
        const dataSettings = new KanjiSettingsBuilder().withGrades(grades).withJoyoKanji(joyo).withQuantity(quantity).build();
        this.props.onConfirm(dataSettings);
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

    private onReset = () => {
        this.setState({
            grades: [],
            quantity: undefined,
            joyo: false
        });
        this.props.onReset();
    }

    private validate = () => {
        const { grades, quantity } = this.state;
        return grades.length > 0 || !!quantity
    }
}

export default KanjiSettingsForm;
