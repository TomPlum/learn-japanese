import { Component } from "react";
import DynamicDisplay from "./DynamicDisplay";
import styles from "../../../styles/sass/components/ui/display/QuestionDisplay.module.scss";

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
            <DynamicDisplay value={question} className={styles.question} />
        );
    }

    public notifyIncorrect = () => {

    }
}

export default QuestionDisplay;