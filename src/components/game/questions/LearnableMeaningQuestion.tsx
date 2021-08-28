import { Learnable } from "../../../domain/learn/Learnable";
import React from "react";
import { GameQuestionProps } from "../MemoryGame";
import EnglishInput from "../../ui/fields/EnglishInput";
import GameQuestion from "../../../domain/game/GameQuestion";
import styles from "../../../styles/sass/components/game/questions/LearnableMeaningQuestion.module.scss"

export interface LearnableMeaningQuestionProps extends GameQuestionProps {
    data?: Learnable;
}

interface LearnableMeaningQuestionState {
    answer: string;
}

class LearnableMeaningQuestion extends GameQuestion<LearnableMeaningQuestionProps, LearnableMeaningQuestionState> {

    constructor(props: Readonly<LearnableMeaningQuestionProps> | LearnableMeaningQuestionProps) {
        super(props);
        this.state = {
            answer: ""
        }
    }

    render() {
        const { data, hidden } = this.props;
        const { answer } = this.state;

        return (
            <div className={styles.wrapper}>
                <span className={styles.kana}>
                    {this.getQuestion()}
                </span>

                <EnglishInput
                    value={answer}
                    disabled={!data || hidden}
                    className={styles.input}
                    placeholder={"English Meaning"}
                    onChange={this.handleInputChange}
                />
            </div>
        );
    }

    isCorrect = () => {
        return this.props.data?.getMeanings().some((meaning: string) => {
            return meaning.trim().toLowerCase() === this.state.answer.trim().toLowerCase()
        }) ?? false;
    }

    private getQuestion = (): string => {
        const { data } = this.props;
        if (data) {
            return data.getKanjiVariation() ?? data.getKana()[0]
        }
        return "N/A";
    }

    private handleInputChange = (value: string) => {
        this.props.isValid(!!value);
        this.setState({ answer: value });
    }
}

export default LearnableMeaningQuestion;
