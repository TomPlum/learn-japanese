import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/KanjiSettingsMenu.module.scss";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KanjiModeButton from "../layout/KanjiModeButton";
import { Environment } from "../../utility/Environment";

interface KanjiSettingsMenuProps {
    onSelected: (grade: number) => void;
}

interface KanjiSettingsMenuState {
    grade: number;
}

class KanjiSettingsMenu extends Component<KanjiSettingsMenuProps, KanjiSettingsMenuState> {
    constructor(props: KanjiSettingsMenuProps | Readonly<KanjiSettingsMenuProps>) {
        super(props);
        this.state = {
            grade: 1
        }
    }

    render() {
        const { grade } = this.state;

        return (
            <Container fluid className={styles.wrapper}>
                <Row>
                    <Col className={styles.descWrapper}>
                        <p className={styles.desc}>{this.getSelectedModeDescription()}</p>
                    </Col>
                </Row>
                <Row>
                    <Col className={styles.leftColumn}>
                        <KanjiModeButton
                            grade={1}
                            quantity={80}
                            iconColour={"#fdb40e"}
                            isSelected={grade === 1}
                            onClick={this.onSelect}
                        />
                    </Col>
                    <Col className={styles.rightColumn}>
                        <KanjiModeButton
                            grade={2}
                            quantity={160}
                            iconColour={"#ff7730"}
                            isSelected={grade === 2}
                            onClick={this.onSelect}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col className={styles.leftColumn}>
                        <KanjiModeButton
                            grade={3}
                            isSelected={grade === 3}
                            quantity={200}
                            iconColour={"#1785e2"}
                            onClick={this.onSelect}
                        />
                    </Col>
                    <Col className={styles.rightColumn}>
                        <KanjiModeButton
                            grade={4}
                            isSelected={grade === 4}
                            quantity={200}
                            iconColour={"#a01219"}
                            onClick={this.onSelect}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col className={styles.leftColumn}>
                        <KanjiModeButton
                            grade={5}
                            quantity={185}
                            iconColour={"#fc3131"}
                            isSelected={grade === 5}
                            onClick={this.onSelect}
                        />
                    </Col>
                    <Col className={styles.rightColumn}>
                        <KanjiModeButton
                            grade={6}
                            quantity={181}
                            iconColour={"#41d085"}
                            isSelected={grade === 6}
                            onClick={this.onSelect}
                        />
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

    onSelect = (grade: number) => this.setState({ grade });

    onConfirmSelected = () => this.props.onSelected(this.state.grade);

    private getSelectedModeDescription = () => Environment.variable("KANJI_GRADE_DESC" + this.state.grade);
}

export default KanjiSettingsMenu;