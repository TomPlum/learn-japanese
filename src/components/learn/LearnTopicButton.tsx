import { Component } from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LearnKanaMode } from "../../types/learn/mode/LearnKanaMode";
import { LearnCalendarMode } from "../../types/learn/mode/LearnCalendarMode";
import styles from "../../styles/sass/components/learn/LearnTopicButton.module.scss";
import { LearnMode } from "../../types/learn/LearningTopic";

export interface LearnTopicButtonProps {
    icon: IconDefinition | string;
    iconColour?: string;
    type: LearnMode;
    selected: LearnMode;
    onClick: (mode: LearnMode) => void;
}

class LearnTopicButton extends Component<LearnTopicButtonProps> {

    render() {
        const { icon, type, selected, iconColour } = this.props;
        const colour = selected === type ? iconColour : "#000"

        return (
            <Button
                onClick={this.handleOnClick}
                className={(selected === type ? styles.selected : styles.notSelected) + " " + styles.button}
            >
                {this.isFontAwesomeIcon(icon) &&
                    <FontAwesomeIcon
                        icon={icon as IconDefinition}
                        fixedWidth
                        className={styles.icon}
                        style={{ color: colour }}
                    />
                }
                {!this.isFontAwesomeIcon(icon) &&
                    <span className={styles.textIcon} style={{ color: colour }}>
                        {icon}
                    </span>
                }

                <p className={styles.name}>{type}</p>
            </Button>
        );
    }

    private handleOnClick = () => this.props.onClick(this.props.type);

    private isFontAwesomeIcon(icon: IconDefinition | string) {
        return !(typeof icon === 'string');
    }
}

export default LearnTopicButton;