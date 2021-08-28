import React, { Component } from "react";
import { Dropdown, ListGroup } from "react-bootstrap";
import Topic from "../../domain/Topic";
import TopicListOption from "./TopicListOption";
import { faGamepad, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopicDropdownOption from "./TopicDropdownOption";
import { AppMode } from "../../domain/AppMode";
import styles from "../../styles/sass/components/layout/TopicSelectionMenu.module.scss";

interface TopicSelectionMenuProps {
    appMode: AppMode;
    onSelect: (type: Topic) => void;
    className?: string;
}

interface TopicSelectionMenuState {
    selected: Topic;
}

class TopicSelectionMenu extends Component<TopicSelectionMenuProps, TopicSelectionMenuState> {

    constructor(props: Readonly<TopicSelectionMenuProps> | TopicSelectionMenuProps) {
        super(props);
        this.state = {
            selected: Topic.KANA
        }
    }

    render() {
        const { selected } = this.state;
        const { appMode, className } = this.props;

        return (
            <div className={className}>
                <Dropdown className={"d-lg-none " + styles.dropdown} data-testid="dropdown">
                    <Dropdown.Toggle variant="primary" className={styles.dropdownToggle} id="select-game-type">
                        <FontAwesomeIcon fixedWidth icon={selected.icon} /> {selected.name}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className={styles.dropdownMenu}>
                        {Topic.ALL.map((topic: Topic) =>
                            <TopicDropdownOption type={topic} onClick={this.handleChange} selected={selected} key={topic.name}>
                                <FontAwesomeIcon fixedWidth icon={topic.icon} />
                            </TopicDropdownOption>
                        )}
                    </Dropdown.Menu>
                </Dropdown>

                <ListGroup className={"d-lg-block d-none " + styles.menu} data-testid="list-group-header">
                    <TopicListOption text={this.getMenuHeading()} onClick={this.handleChange} isHeading>
                        <FontAwesomeIcon
                            fixedWidth
                            icon={appMode === AppMode.PLAY ? faGamepad : faGraduationCap}
                            className={appMode === AppMode.LEARN ? styles.learn : styles.play}
                        />
                    </TopicListOption>
                </ListGroup>

                <ListGroup className={"d-lg-block d-none " + styles.menu} data-testid="list-group">
                    {Topic.ALL.map((topic: Topic) =>
                        <TopicListOption type={topic} onClick={this.handleChange} selected={selected} key={topic.name}>
                            <FontAwesomeIcon fixedWidth icon={topic.icon} className={styles.icon} />
                        </TopicListOption>
                    )}
                </ListGroup>
            </div>
        );
    }

    private getMenuHeading = () => {
        const { appMode } = this.props;
        switch (appMode) {
            case AppMode.PLAY: return "Select Game Mode";
            case AppMode.LEARN: return "Select Topic"
        }
    }

    private handleChange = (type?: Topic) => {
        if (type) {
            this.setState({ selected: type });
            this.props.onSelect(type);
        }
    }
}

export default TopicSelectionMenu;
