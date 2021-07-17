import { Component } from "react";
import DynamicDisplay from "./DynamicDisplay";
import styles from "../../../styles/sass/components/ui/display/QuestionDisplay.module.scss";

export interface QuestionDisplayProps {
    question: string;
    blur?: boolean;
}

interface QuestionDisplayState {
    //TODO: Write a wrapper component that makes its child flash red and use across all 3 displays.
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
            <DynamicDisplay
                value={question}
                style={{ container: [styles.display] }}
                className={styles.question}
            />
        );
    }

    public notifyIncorrect = () => {

    }
}

export default QuestionDisplay;