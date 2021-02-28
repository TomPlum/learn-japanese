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
                Which {value.isDiagraph() ? "diagraph" : "kana"} is '{<strong>{value.romanji}</strong>}'?
            </Alert>
        );
    }
}

export default KanaQuestionBanner;