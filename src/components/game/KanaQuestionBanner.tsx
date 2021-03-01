import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import styles from "../../styles/sass/components/game/KanaChoiceQuestion.module.scss";
import { Kana } from "../../types/Kana";

interface KanaQuestionBannerProps {
    value: Kana;
}

class KanaQuestionBanner extends Component<KanaQuestionBannerProps> {
    render() {
        const { value } = this.props;
        return (
            <Alert className={styles.question} variant="secondary">
                Which {value.isDiagraph() ? "diagraph" : "kana"} is {this.getRomanji()} ?
            </Alert>
        );
    }

    private getRomanji = () => {
        const value = this.props.value;
        const romanji = value.romanji;
        if (romanji.length > 1) {
            return <><strong>'{romanji[0]}'</strong> or <strong>'{romanji[1]}'</strong></>;
        } else {
            return <strong>'{romanji[0]}'</strong>;
        }
    }
}

export default KanaQuestionBanner;