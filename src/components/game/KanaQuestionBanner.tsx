import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import styles from "../../styles/sass/components/game/KanaChoiceQuestion.module.scss";
import { Kana } from "../../types/Kana";

export interface KanaQuestionBannerProps {
    value: Kana;
}

class KanaQuestionBanner extends Component<KanaQuestionBannerProps> {
    render() {
        const { value } = this.props;
        return (
            <Alert className={styles.question} variant="secondary" aria-labelledby="Kana Question">
                Which {value.isDiagraph() ? "diagraph" : "kana"} is {this.getRomaji()} ?
            </Alert>
        );
    }

    private getRomaji = () => {
        const value = this.props.value;
        const romaji = value.romaji;
        if (romaji.length > 1) {
            return <><strong>'{romaji[0]}'</strong> or <strong>'{romaji[1]}'</strong></>;
        } else {
            return <strong>'{romaji[0]}'</strong>;
        }
    }
}

export default KanaQuestionBanner;