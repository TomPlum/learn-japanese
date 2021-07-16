import { Alert, OverlayTrigger } from "react-bootstrap";
import React, { Component } from "react";
import LearnableField from "../../types/learn/LearnableField";
import { Learnable } from "../../types/learn/Learnable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/sass/components/game/QuestionBanner.module.scss";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import PopOver from "../ui/PopOver";

export interface QuestionBannerProps {
    question: Learnable;
    questionField: LearnableField;
    answerField: LearnableField;
    className?: string;
}

class QuestionBanner extends Component<QuestionBannerProps> {
    render() {
        const { answerField, className } = this.props;

        const questionValues = this.getQuestionValues();
        const displayValues = questionValues[0];
        const extraValues = questionValues[1];

        return (
            <Alert variant="info" className={[className, styles.wrapper].join(" ")}>
                {'What is the '}<strong>{answerField.name.toLowerCase()}</strong>{' for '}

                {displayValues.map((questionValue: string, i: number) => {
                    return <>
                        {'"'}<strong key={i}>{questionValue}</strong>{'"'}
                        <span key={`or${i}`}>
                            {i < displayValues.length - 1 ? " or " : ""}
                        </span>
                    </>;
                })}
                {' ?'}

                {extraValues.length > 0 && (
                    <OverlayTrigger
                        trigger={["click", "hover"]}
                        placement="bottom"
                        rootClose={true}
                        overlay={this.getOverlay(extraValues)}
                    >
                        <FontAwesomeIcon
                            fixedWidth
                            data-testid="help"
                            icon={faInfoCircle}
                            className={styles.aka}
                        />
                    </OverlayTrigger>
                )}
            </Alert>
        );
    }

    private getQuestionValues = (): [string[], string[]] => {
        const { question, questionField } = this.props;
        const questionValues = question.getFieldValues(questionField).flatMap(it => it ? [it] : []);
        if (questionValues.length > 2) {
            return [questionValues.slice(0, 2), questionValues.slice(2)];
        } else if (questionValues.length > 0) {
            return [questionValues.slice(0, 2), []];
        } else {
            return [["N/A"], []];
        }
    }

    private getOverlay = (values: string[]) => {
        const text = values.map(it => it.toLowerCase()).join(", ");
        return <PopOver title="Also Known As" text={text} />
    }
}

export default QuestionBanner;