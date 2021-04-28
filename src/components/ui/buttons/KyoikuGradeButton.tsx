import { Component } from "react";
import { faChevronRight, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KyoikuGrade } from "../../../types/kanji/KyoikuGrade";
import styles from "../../../styles/sass/components/ui/buttons/KyoikuGradeButton.module.scss";

interface KyoikuGradeButtonProps {
    grade: KyoikuGrade;
    iconColour?: string;
    icon?: IconDefinition;
    isSelected: boolean;
    onClick: (grade: KyoikuGrade) => void;
}

class KyoikuGradeButton extends Component<KyoikuGradeButtonProps> {
    constructor(props: KyoikuGradeButtonProps | Readonly<KyoikuGradeButtonProps>) {
        super(props);
        this.state = {
            isSelected: false
        }
    }

    render() {
        const { grade, isSelected, icon } = this.props;

        const className = isSelected ? styles["kyoiku-grade-" + grade.value + "-selected"] : styles["kyoiku-grade-" + grade.value];

        return (
            <button className={className} onClick={this.handleClick} aria-selected={isSelected}>
                <FontAwesomeIcon icon={icon ? icon : faChevronRight} className={styles.icon} fixedWidth />
                <span className={styles.text}> Grade {grade.value}</span>
            </button>
        );
    }

    private handleClick = () => {
        const { grade, onClick } = this.props;
        onClick(grade);
    }
}

export default KyoikuGradeButton;
