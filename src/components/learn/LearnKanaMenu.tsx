import { Component } from "react";
import { KanaSettings } from "../../types/GameSettings";
import { Col, Row } from "react-bootstrap";
import LearnTopicButton from "./LearnTopicButton";
import { LearnKanaMode } from "../../types/LearnKanaMode";
import { Environment } from "../../utility/Environment";
import MenuDescription from "../ui/MenuDescription";
import styles from "../../styles/sass/components/learn/LearnKanaMenu.module.scss";
import { faVial } from "@fortawesome/free-solid-svg-icons";
import StartButton from "../ui/StartButton";

export interface LearnKanaMenuProps {
    onStart: (settings: KanaSettings) => void;
}

interface LearnKanaMenuState {
    selected: LearnKanaMode;
}

class LearnKanaMenu extends Component<LearnKanaMenuProps, LearnKanaMenuState> {

    constructor(props: Readonly<LearnKanaMenuProps> | LearnKanaMenuProps) {
        super(props);
        this.state = {
            selected: LearnKanaMode.HIRAGANA
        }
    }

    render() {
        const { selected } = this.state;

        return (
            <div className={styles.wrapper}>
                <Row>
                    <Col>
                        <MenuDescription text={this.getDescription()} />
                    </Col>
                </Row>

                <Row>
                    <Col className={styles.leftColumn}>
                        <LearnTopicButton
                            icon="あ"
                            iconColour={"#fdb40e"}
                            type={LearnKanaMode.HIRAGANA}
                            selected={selected}
                            onClick={this.onSelect}
                        />
                    </Col>
                    <Col className={styles.rightColumn}>
                        <LearnTopicButton
                            icon="ア"
                            iconColour={"#ff7730"}
                            type={LearnKanaMode.KATAKANA}
                            selected={selected}
                            onClick={this.onSelect}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col className={styles.leftColumn}>
                        <LearnTopicButton
                            icon="ざ"
                            iconColour={"#1785e2"}
                            type={LearnKanaMode.DIACRITICALS}
                            selected={selected}
                            onClick={this.onSelect}
                        />
                    </Col>
                    <Col className={styles.rightColumn}>
                        <LearnTopicButton
                            icon="きゃ"
                            iconColour={"#a01219"}
                            type={LearnKanaMode.DIAGRAPHS}
                            selected={selected}
                            onClick={this.onSelect}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col className={styles.leftColumn}>
                        <LearnTopicButton
                            icon="あア"
                            iconColour={"#fc3131"}
                            type={LearnKanaMode.ALL}
                            selected={selected}
                            onClick={this.onSelect}
                        />
                    </Col>
                    <Col className={styles.rightColumn}>
                        <LearnTopicButton
                            icon={faVial}
                            iconColour={"#41d085"}
                            type={LearnKanaMode.CUSTOM}
                            selected={selected}
                            onClick={this.onSelect}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <StartButton onClick={this.onStart} />
                    </Col>
                </Row>
            </div>
        );
    }

    private onSelect = (type: LearnKanaMode) => {
        this.setState({ selected: type });
    }

    private onStart = () => {
        const { selected } = this.state;
        const { onStart } = this.props;
        switch (selected) {
            case LearnKanaMode.HIRAGANA: {
                onStart({ hiragana: true });
                break;
            }
            case LearnKanaMode.KATAKANA: {
                onStart({ katakana: true });
                break;
            }
            case LearnKanaMode.DIACRITICALS: {
                onStart({ diacriticals: true });
                break;
            }
            case LearnKanaMode.DIAGRAPHS: {
                onStart({ diagraphs: true });
                break;
            }
            case LearnKanaMode.ALL: {
                onStart({ hiragana: true, katakana: true, diagraphs: true, diacriticals: true });
                break;
            }
        }
    }

    private getDescription = () => Environment.variable("LEARN_KANA_" + this.state.selected + "_DESC");
}

export default LearnKanaMenu;