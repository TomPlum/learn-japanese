import { Component } from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/sass/components/learn/LearnTopicButton.module.scss";
import SessionMode from "../../types/session/SessionMode";

export interface LearnTopicButtonProps {
    icon: IconDefinition | string;
    iconColour?: string;
    type: SessionMode;
    selected: SessionMode;
    onClick: (mode: SessionMode) => void;
}

class LearnTopicButton extends Component<LearnTopicButtonProps> {

    render() {
        const { icon, type, selected, iconColour } = this.props;
        const isSelected = selected.displayName === type.displayName;
        const colour = isSelected ? iconColour : "#000"

        return (
            <Button
                onClick={this.handleOnClick}
                className={(isSelected ? styles.selected : styles.notSelected) + " " + styles.button}
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

                <p className={styles.name}>{type.displayName}</p>
            </Button>
        );
    }

    private handleOnClick = () => this.props.onClick(this.props.type);

    private isFontAwesomeIcon(icon: IconDefinition | string) {
        return !(typeof icon === 'string');
    }
}

export default LearnTopicButton;