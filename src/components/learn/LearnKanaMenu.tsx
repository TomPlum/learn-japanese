import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import LearnTopicButton from "./LearnTopicButton";
import { LearnKanaMode } from "../../types/learn/mode/LearnKanaMode";
import { Environment } from "../../utility/Environment";
import MenuDescription from "../ui/MenuDescription";
import { faVial } from "@fortawesome/free-solid-svg-icons";
import StartButton from "../ui/StartButton";
import { LearnSettings } from "../../types/learn/LearnSettings";
import { LearnMode } from "../../types/learn/LearningTopic";
import styles from "../../styles/sass/components/learn/LearnKanaMenu.module.scss";

export interface LearnKanaMenuProps {
    onStart: (settings: LearnSettings) => void;
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
            <div className={styles.wrapper} data-testid="learn-kana-menu">
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

    private onSelect = (type: LearnMode) => {
        this.setState({ selected: type as LearnKanaMode });
    }

    private onStart = () => {
        const { selected } = this.state;
        const { onStart } = this.props;
        switch (selected) {
            case LearnKanaMode.HIRAGANA: {
                onStart({ kana: { hiragana: true } });
                break;
            }
            case LearnKanaMode.KATAKANA: {
                onStart({ kana: { katakana: true } });
                break;
            }
            case LearnKanaMode.DIACRITICALS: {
                onStart({ kana: { diacriticals: true } });
                break;
            }
            case LearnKanaMode.DIAGRAPHS: {
                onStart({ kana: { diagraphs: true } });
                break;
            }
            case LearnKanaMode.ALL: {
                onStart({ kana: { hiragana: true, katakana: true, diagraphs: true, diacriticals: true } });
                break;
            }
        }
    }

    private getDescription = () => Environment.variable("LEARN_KANA_" + this.state.selected + "_DESC");
}

export default LearnKanaMenu;