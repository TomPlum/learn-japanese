import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import LearningMode from "../../types/learn/LearningMode";
import { Environment } from "../../utility/Environment";
import MenuDescription from "../ui/MenuDescription";
import LearnTopicButton from "./LearnTopicButton";
import StartButton from "../ui/buttons/StartButton";
import Arrays from "../../utility/Arrays";
import { LearningSessionSettings } from "../../types/learn/LearningSessionSettings";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "./Search";
import { Learnable } from "../../types/learn/Learnable";
import LearningDataRepository from "../../repository/LearningDataRepository";
import Topic from "../../types/Topic";
import styles from "../../styles/sass/components/learn/LearnMenu.module.scss";

export interface CustomLearnMenuProps {
    onSelect: (settings: LearningSessionSettings) => void;
}

export interface LearnMenuProps {
    topic: Topic;
    onStart: (settings: LearningSessionSettings) => void;
}

interface LearnMenuState {
    selected: LearningMode;
    searching: boolean;
}

class LearnMenu extends Component<LearnMenuProps, LearnMenuState> {

    constructor(props: Readonly<LearnMenuProps> | LearnMenuProps) {
        super(props);
        this.state = {
            selected: props.topic.modes.getLearningTopics()[0],
            searching: false
        }
    }

    render() {
        const { selected, searching } = this.state;
        const { topic } = this.props;

        const CustomSettingsMenu = selected.menu as React.FunctionComponent<CustomLearnMenuProps>;
        const renderMenu = !selected.isCustom && !searching;
        const data = this.getSelectedTopicData();

        return (
            <div className={styles.wrapper} data-testid={"learn-" + topic.modes.getTopic().toLowerCase() + "-menu"}>
                {renderMenu && <Row>
                    <Col>
                        <MenuDescription text={this.getDescription()}/>
                    </Col>
                </Row>}

                {renderMenu && Arrays.chunked(topic.modes.getLearningTopics(), 2).map((pair: LearningMode[], j: number) => {
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
                })}

                {selected.isCustom && !searching && <CustomSettingsMenu onSelect={this.onSelectCustomSettings}/>}

                {renderMenu && <Row>
                    <Col className="pr-1">
                        <StartButton onClick={this.onStart}/>
                    </Col>

                    <Col xs={2} className="pl-2">
                        <Button className={styles.search} onClick={() => this.setState({ searching: true })} title="Search">
                            <FontAwesomeIcon icon={faSearch} fixedWidth/>
                        </Button>
                    </Col>
                </Row>}

                {searching && <Search data={data} tags={Arrays.distinct(data.flatMap(it => it.getTags()))} />}
            </div>
        );
    }

    private onStart = () => this.props.onStart(this.state.selected.settings);

    private onSelect = (mode: LearningMode) => {
        this.setState({ selected: mode });
    }

    private onSelectCustomSettings = <T, >(settings: T) => {
        this.props.onStart(settings);
    }

    private getSelectedTopicData = (): Learnable[] => {
        const { selected } = this.state;
        const { topic } = this.props;
        return new LearningDataRepository().read({ topic: topic, settings: selected.settings });
    }

    private getDescription = () => {
        return Environment.variable("LEARN_" + this.props.topic.modes.getTopic() + "_" + this.state.selected.displayName + "_DESC");
    }
}

export default LearnMenu;