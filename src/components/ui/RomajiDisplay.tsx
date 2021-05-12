import { Component } from "react";
import Inspectable from "./Inspectable";
import RomajiGenerator from "../../utility/RomajiGenerator";
import { Environment } from "../../utility/Environment";
import Copyable from "./Copyable";
import styles from "../../styles/sass/components/ui/RomajiDisplay.module.scss";

export interface RomajiDisplayProps {
    kana: string;
    className?: string;
}

class RomajiDisplay extends Component<RomajiDisplayProps> {
    render() {
        const { kana, className } = this.props;
        return (
            <Copyable className={className} placement="bottom" inline>
                <span>
                    <span className={styles.parenthesis}>( </span>

                    <Inspectable popover={{ title: "Why is the rōmaji incorrect?", text: Environment.variable("ROMAJI_GENERATION_DESC") }}>
                        <span>{new RomajiGenerator().generate(kana)}</span>
                    </Inspectable>

                    <span className={styles.parenthesis}> )</span>
                </span>
            </Copyable>
        );
    }
}

export default RomajiDisplay;