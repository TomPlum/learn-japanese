import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import LearningMode from "../../types/learn/LearningMode";
import LearnMenuModes from "../../types/learn/mode/LearnMenuModes";
import { Environment } from "../../utility/Environment";
import styles from "../../styles/sass/components/learn/LearnKanaMenu.module.scss";
import MenuDescription from "../ui/MenuDescription";
import LearnTopicButton from "./LearnTopicButton";
import StartButton from "../ui/StartButton";
import Arrays from "../../utility/Arrays";
import { LearnSettings } from "../../types/learn/LearnSettings";

export interface LearnMenuProps {
    modes: LearnMenuModes;
    onStart: (settings: LearnSettings) => void;
}

interface LearnMenuState {
    selected: LearningMode;
}

class LearnMenu extends Component<LearnMenuProps, LearnMenuState> {

    constructor(props: Readonly<LearnMenuProps> | LearnMenuProps) {
        super(props);
        this.state = {
            selected: props.modes.getLearningTopics()[0]
        }
    }

    render() {
        const { selected } = this.state;
        const { modes } = this.props;

        return (
            <div className={styles.wrapper} data-testid={"learn-" + modes.getTopic().toLowerCase() + "-menu"}>
                <Row>
                    <Col>
                        <MenuDescription text={this.getDescription()}/>
                    </Col>
                </Row>

                {
                    Arrays.chunked(modes.getLearningTopics(), 2).map((pair: LearningMode[], j: number) => {
                        return <Row key={"row-" + j}>{
                            pair.map((mode: LearningMode, i: number) => {
                                const isLeft = i % 2 === 0 || i === 0;
                                const columnClass = isLeft ? styles.leftColumn : styles.rightColumn;
                                return (<Col className={columnClass} key={"col-" + i}>
                                    <LearnTopicButton
                                        icon={mode.icon}
                                        iconColour={mode.colour}
                                        type={mode}
                                        selected={selected}
                                        key={mode.displayName + "-button"}
                                        onClick={this.onSelect}
                                    />
                                </Col>);
                            })
                        }</Row>
                    })
                }

                <Row>
                    <Col>
                        <StartButton onClick={this.onStart}/>
                    </Col>
                </Row>
            </div>
        );
    }

    private onStart = () => this.props.onStart(this.state.selected.settings);

    private onSelect = (mode: LearningMode) => this.setState({ selected: mode });

    private getDescription = () => {
        return Environment.variable("LEARN_" + this.props.modes.getTopic() + "_" + this.state.selected.displayName + "_DESC");
    }
}

export default LearnMenu;