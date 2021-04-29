import { Component } from "react";
import { Reading } from "../../../types/kanji/Reading";
import Inspectable from "../../ui/Inspectable";
import { Environment } from "../../../utility/Environment";
import { ReadingType } from "../../../types/kanji/ReadingType";
import commonStyles from "../../../styles/sass/components/learn/kanji/KanjiFlashCardBack.module.scss";
import styles from "../../../styles/sass/components/learn/kanji/KanjiReadingDisplay.module.scss";
import SpinnerController from "../../ui/SpinnerController";

export interface KanjiReadingDisplayProps {
    type: ReadingType;
    readings: Reading[];
    showRomaji: boolean;
}

interface KanjiReadingDisplayState {
    selected: Reading;
}

class KanjiReadingDisplay extends Component<KanjiReadingDisplayProps, KanjiReadingDisplayState> {

    constructor(props: Readonly<KanjiReadingDisplayProps> | KanjiReadingDisplayProps) {
        super(props);
        this.state = {
            selected: props.readings[0]
        }
    }

    render() {
        const { selected } = this.state;
        const { type, readings } = this.props;

        return (
            <div className={styles.wrapper}>
                <SpinnerController
                    values={readings}
                    disabledTitle={"This kanji has only one Jōyō " + type.toLowerCase() + " reading"}
                    onChange={(value: Reading) => this.setState({ selected: value })}
                />

                <span className={[commonStyles.text, styles.reading].join(" ")}>
                    <Inspectable title={this.getTitle()} text={this.getText()}>
                        <span className={commonStyles.label}>{type}</span>
                    </Inspectable>
                    {readings.length > 0
                        ? <span title={selected.romaji}>{this.getReadingFormatted()}</span>
                        : <span title={"This kanji has no " + type.toLowerCase() + " reading"}>: N/A</span>
                    }
                </span>
            </div>
        );
    }

    private getReadingFormatted = (): string => {
        const { showRomaji } = this.props;
        const { selected } = this.state;

        let formatted = ": " + selected.kana;

        if (showRomaji) {
            formatted += " (" + selected.romaji + ")"
        }

        return formatted;
    }

    private getTitle = () => {
        switch (this.props.type) {
            case ReadingType.ON: return "On-yomi Reading";
            case ReadingType.KUN: return "Kun-yomi Reading"
        }
    }

    private getText = () => {
        switch (this.props.type) {
            case ReadingType.ON: return Environment.variable("ONYOMI_DESC");
            case ReadingType.KUN: return Environment.variable("KUNYOMI_DESC");
        }
    }
}

export default KanjiReadingDisplay;