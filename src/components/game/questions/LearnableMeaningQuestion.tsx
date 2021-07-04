import { Learnable } from "../../../types/learn/Learnable";
import GameQuestion from "../GameQuestion";
import { Form } from "react-bootstrap";
import React from "react";
import { GameQuestionProps } from "../MemoryGame";

export interface LearnableMeaningQuestionProps extends GameQuestionProps {
    data: Learnable;
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
            <div>
                <span>{data.getKanjiVariation() ?? data.getKana()[0]}</span>
                
                <Form.Control
                    plaintext
                    disabled={hidden}
                    value={answer}
                    placeholder={"Enter the meaning"}
                    onChange={(e) => this.setState({ answer: e.target.value })}
                />
            </div>
        );
    }

    isCorrect = () => {
        const { data } = this.props;
        const { answer } = this.state;
        return data.getMeanings().some((meaning: string) => meaning === answer);
    }
}

export default LearnableMeaningQuestion;