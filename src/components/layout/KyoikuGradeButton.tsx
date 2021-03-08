import { Component } from "react";
import styles from "../../styles/sass/components/layout/KyoikuGradeButton.module.scss";
import { faChevronRight, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KyoikuGrade } from "../../types/kanji/KyoikuGrade";

interface KyoikuGradeButtonProps {
    grade: KyoikuGrade;
    iconColour?: string;
    icon?: IconDefinition;
    onClick: (grade: KyoikuGrade) => void;
    isSelected: boolean;
}

class KyoikuGradeButton extends Component<KyoikuGradeButtonProps> {
    constructor(props: KyoikuGradeButtonProps | Readonly<KyoikuGradeButtonProps>) {
        super(props);
        this.state = {
            isSelected: false
        }
    }

    handleClick = () => this.props.onClick(this.props.grade);


    render() {
        const { grade, isSelected, icon } = this.props;

        const className = isSelected ? styles["kyoiku-grade-" + grade.value + "-selected"] : styles["kyoiku-grade-" + grade.value];

        return (
            <button
                className={className}
                onClick={this.handleClick} aria-selected={isSelected}
            >
                <FontAwesomeIcon icon={icon ? icon : faChevronRight} /> Grade {grade.value}
            </button>
        );
    }
}

export default KyoikuGradeButton;
