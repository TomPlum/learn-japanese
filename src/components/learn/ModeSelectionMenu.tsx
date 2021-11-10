import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Environment } from "../../utility/Environment";
import MenuDescription from "../ui/MenuDescription";
import LearnTopicButton from "./LearnTopicButton";
import StartButton from "../ui/buttons/StartButton";
import Arrays from "../../utility/Arrays";
import { faCircleNotch, faCog, faCogs, faDatabase, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "./Search";
import { Learnable } from "../../domain/learn/Learnable";
import LearningDataRepository from "../../repository/LearningDataRepository";
import Topic from "../../domain/Topic";
import GameSettings from "../../domain/session/settings/game/GameSettings";
import SessionMode from "../../domain/session/SessionMode";
import { AppMode } from "../../domain/AppMode";
import { SessionSettings } from "../../domain/session/settings/SessionSettings";
import LearnSettings from "../../domain/session/settings/LearnSettings";
import GameSettingsMenu from "../settings/game/GameSettingsMenu";
import styles from "../../styles/sass/components/learn/ModeSelectionMenu.module.scss";
import DataSettings from "../../domain/session/settings/data/DataSettings";
import { DataSettingsMenuProps } from "../settings/data/DataSettingsMenu";
import { useModeSelector } from "../../hooks";

export interface ModeSelectionMenuProps {
    topic: Topic;
    onStart: (settings: SessionSettings) => void;
}

const ModeSelectionMenu = (props: ModeSelectionMenuProps) => {

    const { topic } = props;
    const appMode = useModeSelector(state => state.mode.mode);
    const modes = appMode === AppMode.LEARN ? topic.modes : topic.playModes;

    const [selected, setSelected] = useState(modes.getModes()[0]);
    const [searching, setSearching] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isConfiguringGame, setIsConfiguringGame] = useState(false);
    const [isConfiguringData, setIsConfiguringData] = useState(false);
    const [customGameSettings, setCustomGameSettings] = useState<GameSettings | undefined>(undefined);
    const [customDataSettings, setCustomDataSettings] = useState<DataSettings | undefined>(undefined);
    const [searchData, setSearchData] = useState<Learnable[]>([]);


    useEffect(() => {
        setSelected(modes.getModes()[0]);
    }, [appMode]);

    const DataSettingsMenu = topic.menu as React.FunctionComponent<DataSettingsMenuProps<any>>;
    const renderMenu = !searching && !isConfiguringGame && !isConfiguringData;

    const onStart = () => {
        const dataSettings = customDataSettings ?? selected.dataSettings;

        switch (appMode) {
            case AppMode.PLAY: {
                const gameSettings = customGameSettings ?? selected.modeSettings as GameSettings;
                props.onStart(SessionSettings.forGame(dataSettings, gameSettings));
                break;
            }
            case AppMode.LEARN: {
                props.onStart(SessionSettings.forLearning(dataSettings, selected.modeSettings as LearnSettings));
                break;
            }
        }
    }

    const onSelect = (mode: SessionMode) => {
        setSelected(mode);
    }

    const startSearch = () => {
        setLoading(true);
        new LearningDataRepository().read(selected.dataSettings).then(data => {
            setSearchData(data);
        }).finally(() => {
            setLoading(false);
            setSearching(true);
        });
    }

    const getDescription = () => {
        const prefix = appMode === AppMode.LEARN ? "LEARN_" : "PLAY_";
        return Environment.variable(prefix + modes.getTopic() + "_" + selected.displayName + "_DESC");
    }

    return (
        <div className={styles.wrapper} data-testid={"learn-" + modes.getTopic().toLowerCase() + "-menu"}>
            {renderMenu && (
                <Row>
                    <Col>
                        <MenuDescription text={getDescription()} />
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
                                type={mode}
                                selected={selected}
                                icon={mode.icon}
                                onClick={onSelect}
                                iconColour={mode.colour}
                                key={mode.displayName + "-button"}
                            />
                        </Col>);
                    })
                }</Row>
            })}

            {renderMenu && (
                <Row>
                    <Col className="pr-1">
                        <StartButton onClick={onStart} />
                    </Col>

                    <Col xs={2} className="pl-2 pr-2">
                        <Button
                            disabled={!topic.menu}
                            className={styles.settings}
                            variant={!!customDataSettings ? "primary" : "info"}
                            onClick={() => setIsConfiguringData(true)}
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
                            <Button className={styles.search} title="Search" onClick={startSearch}>
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
                                onClick={() => setIsConfiguringGame(true)}
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
                    onQuit={() => setIsConfiguringGame(false)}
                    onReset={() => setCustomGameSettings(undefined)}
                    onSelect={settings => {
                        setCustomGameSettings(settings);
                        setIsConfiguringGame(false);
                    }}
                />
            )}

            {isConfiguringData &&
                <DataSettingsMenu
                    title={topic.name}
                    icon={topic.icon}
                    onQuit={() => setIsConfiguringData(false)}
                    onReset={() => setCustomDataSettings(undefined)}
                    onConfirm={settings => {
                        setCustomDataSettings(settings);
                        setIsConfiguringData(false);
                    }}
                />
            }
        </div>
    );
}

export default ModeSelectionMenu;
