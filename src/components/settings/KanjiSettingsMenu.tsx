import { Component } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/KanjiSettingsMenu.module.scss";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KanjiModeButton from "../layout/KanjiModeButton";
import { Environment } from "../../utility/Environment";
import Arrays from "../../utility/Arrays";

interface KanjiSettingsMenuProps {
    onSelected: (grades: number[]) => void;
}

interface KanjiSettingsMenuState {
    grades: number[];
}

class KanjiSettingsMenu extends Component<KanjiSettingsMenuProps, KanjiSettingsMenuState> {
    constructor(props: KanjiSettingsMenuProps | Readonly<KanjiSettingsMenuProps>) {
        super(props);
        this.state = {
            grades: [1]
        }
    }

    render() {
        const { grades } = this.state;

        return (
            <Container fluid className={styles.wrapper}>
                <Row>
                    <Col className={styles.descWrapper}>
                        <p className={styles.desc}>{this.getSelectedModeDescription()}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <ListGroup>
                            <KanjiModeButton
                                grade={1}
                                quantity={80}
                                iconColour={"#fdb40e"}
                                isSelected={grades.includes(1)}
                                onClick={this.onSelect}
                            />
                            <KanjiModeButton
                                grade={2}
                                quantity={160}
                                iconColour={"#fdb40e"}
                                isSelected={grades.includes(2)}
                                onClick={this.onSelect}
                            />
                            <KanjiModeButton
                                grade={3}
                                quantity={200}
                                iconColour={"#fdb40e"}
                                isSelected={grades.includes(3)}
                                onClick={this.onSelect}
                            />
                            <KanjiModeButton
                                grade={4}
                                quantity={200}
                                iconColour={"#fdb40e"}
                                isSelected={grades.includes(4)}
                                onClick={this.onSelect}
                            />
                            <KanjiModeButton
                                grade={5}
                                quantity={185}
                                iconColour={"#fdb40e"}
                                isSelected={grades.includes(5)}
                                onClick={this.onSelect}
                            />
                            <KanjiModeButton
                                grade={6}
                                quantity={181}
                                iconColour={"#fdb40e"}
                                isSelected={grades.includes(6)}
                                onClick={this.onSelect}
                            />
                        </ListGroup>
                    </Col>
                    <Col xs={6}>
                        <ListGroup>

                        </ListGroup>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button variant="success" className={styles.playButton} onClick={this.onConfirmSelected}>
                            <FontAwesomeIcon size="sm" icon={faPlay}/> Start
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }

    onSelect = (grade: number) => {
        const { grades } = this.state;
        if (grades.includes(grade)) {
            this.setState({ grades: Arrays.remove(grades, grade) });
        } else {
            this.setState({ grades: grades.concat(grade) });
        }
    }

    onConfirmSelected = () => this.props.onSelected(this.state.grades);

    private getSelectedModeDescription = () => Environment.variable("KANJI_GRADE_DESC" + this.state.grades);
}

export default KanjiSettingsMenu;