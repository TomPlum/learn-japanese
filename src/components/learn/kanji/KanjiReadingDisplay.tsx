import { Component } from "react";
import { Reading } from "../../../types/kanji/Reading";
import Inspectable from "../../ui/Inspectable";
import { Environment } from "../../../utility/Environment";
import { ReadingType } from "../../../types/kanji/ReadingType";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import commonStyles from "../../../styles/sass/components/learn/kanji/KanjiFlashCardBack.module.scss";
import styles from "../../../styles/sass/components/learn/kanji/KanjiReadingDisplay.module.scss";

export interface KanjiReadingDisplayProps {
    type: ReadingType;
    readings: Reading[];
}

interface KanjiReadingDisplayState {
    selected: number;
}

class KanjiReadingDisplay extends Component<KanjiReadingDisplayProps, KanjiReadingDisplayState> {

    constructor(props: Readonly<KanjiReadingDisplayProps> | KanjiReadingDisplayProps) {
        super(props);
        this.state = {
            selected: 0
        }
    }

    render() {
        const { selected } = this.state;
        const { type, readings } = this.props;

        const hasMultipleReadings = readings.length > 1

        return (
            <div className={styles.wrapper}>
                <div className={styles.controlsWrapper}>
                    <div className={styles.arrowWrapper}>
                        <FontAwesomeIcon
                            className={hasMultipleReadings ? styles.arrow : styles.disabled}
                            icon={faChevronUp}
                            title={hasMultipleReadings ? "Last" : undefined}
                            onClick={hasMultipleReadings ? this.handleLast : undefined}
                        />
                    </div>

                    <div className={styles.selectedWrapper}>
                        {hasMultipleReadings
                            ? <span className={styles.selected}>{selected + 1}</span>
                            : <span className={styles.selectedDisabled} title={"This kanji has only one Jōyō reading"}>1</span>
                        }
                    </div>

                    <div className={styles.arrowWrapper}>
                        <FontAwesomeIcon
                            className={hasMultipleReadings ? styles.arrow : styles.disabled}
                            icon={faChevronDown}
                            title={hasMultipleReadings ? "Next" : undefined}
                            onClick={hasMultipleReadings ? this.handleNext : undefined}
                        />
                    </div>
                </div>

                <span className={[commonStyles.text, styles.reading].join(" ")}>
                    <Inspectable title={this.getTitle()} text={this.getText()}>
                        <span className={commonStyles.label}>{type}</span>
                    </Inspectable>
                    {readings.length > 0
                        ? <span title={readings[selected].romaji}>{": " + readings[selected].kana}</span>
                        : <span title={"This kanji has no " + type.toLowerCase() + " reading"}>: N/A</span>
                    }
                </span>
            </div>
        );
    }

    private handleNext = () => {
        const { readings } = this.props;
        const { selected } = this.state;
        if (selected < readings.length - 1) {
            this.setState({ selected: selected + 1 });
        } else {
            this.setState({ selected: 0 });
        }
    }

    private handleLast = () => {
        const { readings } = this.props;
        const { selected } = this.state;
        if (selected && selected != 0) {
            this.setState({ selected: selected - 1 });
        } else {
            this.setState({ selected: readings.length - 1 });
        }
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