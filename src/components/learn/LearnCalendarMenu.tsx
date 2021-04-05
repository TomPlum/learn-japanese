import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import LearnTopicButton from "./LearnTopicButton";
import { Environment } from "../../utility/Environment";
import MenuDescription from "../ui/MenuDescription";
import { faAlignLeft, faCalendarAlt, faCalendarDay, faClock, faSnowflake, faVial } from "@fortawesome/free-solid-svg-icons";
import StartButton from "../ui/StartButton";
import { LearnCalendarMode } from "../../types/learn/mode/LearnCalendarMode";
import { LearnMode } from "../../types/learn/LearningTopic";
import { LearnSettings } from "../../types/learn/LearnSettings";
import styles from "../../styles/sass/components/learn/LearnCalendarMenu.module.scss";

export interface LearnCalendarMenuProps {
    onStart: (settings: LearnSettings) => void;
}

interface LearnCalendarMenuState {
    selected: LearnCalendarMode;
}

class LearnCalendarMenu extends Component<LearnCalendarMenuProps, LearnCalendarMenuState> {

    constructor(props: Readonly<LearnCalendarMenuProps> | LearnCalendarMenuProps) {
        super(props);
        this.state = {
            selected: LearnCalendarMode.DAYS
        }
    }

    render() {
        const { selected } = this.state;

        return (
            <div className={styles.wrapper} data-testid="learn-calendar-menu">
                <Row>
                    <Col>
                        <MenuDescription text={this.getDescription()} />
                    </Col>
                </Row>

                <Row>
                    <Col className={styles.leftColumn}>
                        <LearnTopicButton
                            icon={faCalendarDay}
                            iconColour={"#fdb40e"}
                            type={LearnCalendarMode.DAYS}
                            selected={selected}
                            onClick={this.onSelect}
                        />
                    </Col>
                    <Col className={styles.rightColumn}>
                        <LearnTopicButton
                            icon={faCalendarAlt}
                            iconColour={"#ff7730"}
                            type={LearnCalendarMode.MONTHS}
                            selected={selected}
                            onClick={this.onSelect}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col className={styles.leftColumn}>
                        <LearnTopicButton
                            icon={faClock}
                            iconColour={"#ec2352"}
                            type={LearnCalendarMode.TEMPORAL_NOUNS}
                            selected={selected}
                            onClick={this.onSelect}
                        />
                    </Col>
                    <Col className={styles.rightColumn}>
                        <LearnTopicButton
                            icon={faSnowflake}
                            iconColour={"#2cade0"}
                            type={LearnCalendarMode.SEASONAL}
                            selected={selected}
                            onClick={this.onSelect}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col className={styles.leftColumn}>
                        <LearnTopicButton
                            icon={faAlignLeft}
                            iconColour={"#ff6038"}
                            type={LearnCalendarMode.COMMON_PHRASES}
                            selected={selected}
                            onClick={this.onSelect}
                        />
                    </Col>
                    <Col className={styles.rightColumn}>
                        <LearnTopicButton
                            icon={faVial}
                            iconColour={"#41d085"}
                            type={LearnCalendarMode.ALL}
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
        this.setState({ selected: type as LearnCalendarMode });
    }

    private onStart = () => {
        const { selected } = this.state;
        const { onStart } = this.props;
        switch (selected) {
            case LearnCalendarMode.DAYS: {
                onStart({ calendar: { days: true } });
                break;
            }
            case LearnCalendarMode.MONTHS: {
                onStart({ calendar: { months: true } });
                break;
            }
            case LearnCalendarMode.SEASONAL: {
                onStart({ calendar: { season: true } });
                break;
            }
            case LearnCalendarMode.TEMPORAL_NOUNS: {
                onStart({ calendar: { nouns: true } });
                break;
            }
            case LearnCalendarMode.COMMON_PHRASES: {
                onStart({ calendar: { phrases: true } });
                break;
            }
            case LearnCalendarMode.ALL: {
                onStart({ calendar: { days: true, months: true, season: true, nouns: true, phrases: true } });
                break;
            }
        }
    }

    private getDescription = () => Environment.variable("LEARN_CALENDAR_" + this.state.selected + "_DESC");
}

export default LearnCalendarMenu;