import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Environment } from "../../utility/Environment";
import MenuDescription from "../ui/MenuDescription";
import LearnTopicButton from "./LearnTopicButton";
import StartButton from "../ui/buttons/StartButton";
import Arrays from "../../utility/Arrays";
import { faCircleNotch, faCog, faCogs, faDatabase, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "./Search";
import { Learnable } from "../../types/learn/Learnable";
import LearningDataRepository from "../../repository/LearningDataRepository";
import Topic from "../../types/Topic";
import GameSettings from "../../types/session/settings/game/GameSettings";
import SessionMode from "../../types/session/SessionMode";
import { AppMode } from "../../types/AppMode";
import { MenuModes } from "../../types/MenuModes";
import { SessionSettings } from "../../types/session/settings/SessionSettings";
import LearnSettings from "../../types/session/settings/LearnSettings";
import GameSettingsMenu from "../settings/game/GameSettingsMenu";
import styles from "../../styles/sass/components/learn/ModeSelectionMenu.module.scss";
import DataSettings from "../../types/session/settings/data/DataSettings";
import { DataSettingsMenuProps } from "../settings/data/DataSettingsMenu";

export interface ModeSelectionMenuProps {
    topic: Topic;
    appMode: AppMode;
    onStart: (settings: SessionSettings) => void;
}

interface ModeSelectionMenuState {
    selected: SessionMode;
    customGameSettings?: GameSettings;
    customDataSettings?: DataSettings;
    isConfiguringGame: boolean;
    isConfiguringData: boolean;
    searching: boolean;
    searchData: Learnable[];
    loading: boolean;
}

class ModeSelectionMenu extends Component<ModeSelectionMenuProps, ModeSelectionMenuState> {

    constructor(props: Readonly<ModeSelectionMenuProps> | ModeSelectionMenuProps) {
        super(props);
        this.state = {
            selected: this.getMenuModes().getModes()[0],
            searching: false,
            isConfiguringGame: false,
            isConfiguringData: false,
            customGameSettings: undefined,
            customDataSettings: undefined,
            loading: false,
            searchData: []
        }
    }

    componentDidUpdate(prevProps: Readonly<ModeSelectionMenuProps>, prevState: Readonly<ModeSelectionMenuState>) {
        if (prevProps.appMode !== this.props.appMode) {
            this.setState({ selected: this.getMenuModes().getModes()[0] });
        }
    }

    render() {
        const { selected, searching, isConfiguringGame, isConfiguringData,
            customGameSettings, customDataSettings, searchData, loading
        } = this.state;
        const { appMode, topic } = this.props;

        const DataSettingsMenu = topic.menu as React.FunctionComponent<DataSettingsMenuProps<any>>;
        const renderMenu = !searching && !isConfiguringGame && !isConfiguringData;
        const modes = this.getMenuModes();

        return (
            <div className={styles.wrapper} data-testid={"learn-" + modes.getTopic().toLowerCase() + "-menu"}>
                {renderMenu && (
                    <Row>
                        <Col>
                            <MenuDescription text={this.getDescription()} />
                        </Col>
                    </Row>
                )}

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

                {renderMenu && (
                    <Row>
                        <Col className="pr-1">
                            <StartButton onClick={this.onStart} />
                        </Col>

                        <Col xs={2} className="pl-2 pr-2">
                            <Button
                                disabled={!topic.menu}
                                className={styles.settings}
                                variant={!!customDataSettings ? "primary" : "info"}
                                onClick={() => this.setState({ isConfiguringData: true})}
                                title={!topic.menu ? "This topic does not have data settings" : "Data Settings"}
                            >
                                <FontAwesomeIcon
                                    fixedWidth
                                    icon={faDatabase}
                                    className={styles.spin}
                                    spin={!!customDataSettings}
                                />
                            </Button>
                        </Col>

                        {appMode === AppMode.LEARN && (
                            <Col xs={2} className="pl-1">
                                <Button className={styles.search} title="Search" onClick={this.startSearch}>
                                    <FontAwesomeIcon icon={loading ? faCircleNotch : faSearch} spin={loading} fixedWidth/>
                                </Button>
                            </Col>
                        )}

                        {appMode === AppMode.PLAY && (
                            <Col xs={2} className="pl-1">
                                <Button
                                    title="Game Settings"
                                    className={styles.settings}
                                    variant={!!customGameSettings ? "primary" : "secondary"}
                                    onClick={() => this.setState({ isConfiguringGame: true})}
                                >
                                    <FontAwesomeIcon
                                        fixedWidth
                                        className={styles.spin}
                                        spin={!!customGameSettings}
                                        icon={!!customGameSettings ? faCog : faCogs}
                                    />
                                </Button>
                            </Col>
                        )}
                    </Row>
                )}

                {searching && (
                    <Search
                        data={searchData}
                        tags={Arrays.distinct(searchData.flatMap(it => it.getTags()))}
                    />
                )}

                {isConfiguringGame && (
                    <GameSettingsMenu
                        onQuit={() => this.setState({ isConfiguringGame: false })}
                        onReset={() => this.setState({ customGameSettings: undefined })}
                        onSelect={settings => this.setState({ customGameSettings: settings, isConfiguringGame: false })}
                    />
                )}

                {isConfiguringData &&
                    <DataSettingsMenu
                        title={topic.name}
                        icon={topic.icon}
                        onQuit={() => this.setState({ isConfiguringData: false })}
                        onReset={() => this.setState({ customDataSettings: undefined })}
                        onConfirm={settings => this.setState({ customDataSettings: settings, isConfiguringData: false })}
                    />
                }
            </div>
        );
    }

    private onStart = () => {
        const { selected, customGameSettings, customDataSettings } = this.state;
        const { onStart, appMode } = this.props;

        const dataSettings = customDataSettings ?? selected.dataSettings;

        switch (appMode) {
            case AppMode.PLAY: {
                const gameSettings = customGameSettings ?? selected.modeSettings as GameSettings;
                onStart(SessionSettings.forGame(dataSettings, gameSettings));
                break;
            }
            case AppMode.LEARN: {
                onStart(SessionSettings.forLearning(dataSettings, selected.modeSettings as LearnSettings));
                break;
            }
        }
    }

    private onSelect = (mode: SessionMode) => {
        this.setState({ selected: mode });
    }

    private startSearch = () => {
        this.setState({ loading: true }, () => {
            new LearningDataRepository().read(this.state.selected.dataSettings).then(data => {
                this.setState({ loading: false, searchData: data, searching: true });
            }).catch(e => this.setState({ loading: false }));
        });
    }

    private getDescription = () => {
        const { appMode } = this.props;
        const { selected } = this.state;
        const prefix = appMode === AppMode.LEARN ? "LEARN_" : "PLAY_";
        return Environment.variable(prefix + this.getMenuModes().getTopic() + "_" + selected.displayName + "_DESC");
    }

    private getMenuModes = (): MenuModes<any> => {
        const { topic, appMode } = this.props;
        return appMode === AppMode.LEARN ? topic.modes : topic.playModes;
    }
}

export default ModeSelectionMenu;
