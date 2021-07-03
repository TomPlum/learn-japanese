import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
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
import { SessionSettings } from "../../types/session/GameSettings";
import SessionMode from "../../types/session/SessionMode";
import { AppMode } from "../../types/AppMode";
import { MenuModes } from "../../types/MenuModes";
import styles from "../../styles/sass/components/learn/ModeSelectionMenu.module.scss";

export interface CustomLearnMenuProps {
    onSelect: (settings: LearningSessionSettings) => void;
}

export interface ModeSelectionMenuProps {
    topic: Topic;
    appMode: AppMode;
    onStart: (settings: SessionSettings) => void;
}

interface ModeSelectionMenuState {
    selected: SessionMode;
    searching: boolean;
}

class ModeSelectionMenu extends Component<ModeSelectionMenuProps, ModeSelectionMenuState> {

    constructor(props: Readonly<ModeSelectionMenuProps> | ModeSelectionMenuProps) {
        super(props);
        this.state = {
            selected: this.getMenuModes().getModes()[0],
            searching: false
        }
    }

    componentDidUpdate(prevProps: Readonly<ModeSelectionMenuProps>, prevState: Readonly<ModeSelectionMenuState>) {
        if (prevProps.appMode != this.props.appMode) {
            this.setState({ selected: this.getMenuModes().getModes()[0] });
        }
    }

    render() {
        const { selected, searching } = this.state;
        const { appMode } = this.props;

        const CustomSettingsMenu = selected.menu as React.FunctionComponent<CustomLearnMenuProps>;
        const renderMenu = !selected.custom && !searching;
        const modes = this.getMenuModes();

        return (
            <div className={styles.wrapper} data-testid={"learn-" + modes.getTopic().toLowerCase() + "-menu"}>
                {renderMenu && <Row>
                    <Col>
                        <MenuDescription text={this.getDescription()}/>
                    </Col>
                </Row>}

                {renderMenu && Arrays.chunked(modes.getModes(), 2).map((pair: SessionMode[], j: number) => {
                    return <Row key={"row-" + j}>{
                        pair.map((mode: SessionMode, i: number) => {
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

                {selected.custom && !searching && <CustomSettingsMenu onSelect={this.onSelectCustomSettings}/>}

                {renderMenu && <Row>
                    <Col className={appMode == AppMode.LEARN ? "pr-1" : undefined}>
                        <StartButton onClick={this.onStart}/>
                    </Col>

                    {appMode === AppMode.LEARN && <Col xs={2} className="pl-2">
                        <Button className={styles.search} onClick={() => this.setState({ searching: true })}
                                title="Search">
                            <FontAwesomeIcon icon={faSearch} fixedWidth/>
                        </Button>
                    </Col>}
                </Row>}

                {searching && <Search
                    data={this.getSelectedTopicData()}
                    tags={Arrays.distinct(this.getSelectedTopicData().flatMap(it => it.getTags()))}
                />}
            </div>
        );
    }

    private onStart = () => this.props.onStart(this.state.selected.settings);

    private onSelect = (mode: SessionMode) => {
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
        const { appMode } = this.props;
        const { selected } = this.state;
        const prefix = appMode === AppMode.LEARN ? "LEARN_" : "PLAY_";
        return Environment.variable(prefix + this.getMenuModes().getTopic() + "_" + selected.displayName + "_DESC");
    }

    private getMenuModes = (): MenuModes => {
        const { topic, appMode } = this.props;
        return appMode === AppMode.LEARN ? topic.modes : topic.playModes;
    }
}

export default ModeSelectionMenu;