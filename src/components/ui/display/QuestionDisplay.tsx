import { Component } from "react";

export interface QuestionDisplayProps {
    question: string;
    blur?: boolean;
}

interface QuestionDisplayState {

}

class QuestionDisplay extends Component<QuestionDisplayProps, QuestionDisplayState> {

    constructor(props: Readonly<QuestionDisplayProps> | QuestionDisplayProps) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { question } = this.props;

        return (
            <div>
                <span style={{ color: "#FFF", fontSize: "3em" }}>{question}</span>
            </div>
        );
    }

    public notifyIncorrect = () => {

    }
}

export default QuestionDisplay;