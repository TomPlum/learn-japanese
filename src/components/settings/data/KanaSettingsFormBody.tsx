import { DataSettingsStepFormProps } from "../../layout/wizard/play/DataSettingsStep";
import KanaSettings, { KanaSettingsBuilder } from "../../../domain/session/settings/data/KanaSettings";
import { Col, Row } from "react-bootstrap";
import ToggleSwitch from "../../ui/ToggleSwitch";
import styles from "../../../styles/sass/components/settings/data/KanaSettingsForm.module.scss";
import QuantityField from "../../ui/fields/QuantityField";
import { useEffect, useState } from "react";

const KanaSettingsFormBody = (props: DataSettingsStepFormProps<KanaSettings>) => {

    const { className, isValid, onChange } = props;

    const defaultState = new KanaSettingsBuilder().withHiragana().build();

    const [hiragana, setHiragana] = useState(defaultState.hiragana);
    const [katakana, setKatakana] = useState(defaultState.katakana);
    const [diagraphs, setDiagraphs] = useState(defaultState.diagraphs);
    const [quantity, setQuantity] = useState<number | undefined>(defaultState.quantity);

    useEffect(() => {
        const settings = new KanaSettingsBuilder()
            .withHiragana(hiragana)
            .withKatakana(katakana)
            .withDiagraphs(diagraphs)
            .withQuantity(quantity)
            .build();

        onChange(settings);
        isValid?.(validate());
    }, [hiragana, katakana, diagraphs, quantity]);

    const validate = () => {
        return !!quantity && quantity > 0 && quantity <= 214;
    }

    return (
        <div className={className}>
            <Row>
                <Col>
                    <ToggleSwitch
                        label="Hiragana"
                        enabled={hiragana}
                        data-testid="hiragana"
                        className={styles.switch}
                        disabled={hiragana && !katakana}
                        onChange={() => setHiragana(!hiragana)}
                    />

                    <p className={hiragana ? styles.description : styles.disabled}>
                        Hiragana is the main syllabary that defines all the sounds that make up the spoken Japanese
                        language. It is also used in the written language for Japanese words and furigana. These
                        characters are quite cursive in nature.
                    </p>

                    <ToggleSwitch
                        label="Katakana"
                        enabled={katakana}
                        className={styles.switch}
                        disabled={katakana && !hiragana}
                        data-testid="katakana"
                        onChange={() => setKatakana(!katakana)}
                    />

                    <p className={katakana ? styles.description : styles.disabled}>
                        Katakana is a mirror of the aforementioned Hiragana syllabary. There is a 1 to 1 mapping
                        of each kana that is pronounced in the same way. They are written differently and are
                        generally only used for loan words and onomatopoeia. These characters are much more angular
                        and linear than Hiragana.
                    </p>

                    <ToggleSwitch
                        label="Diagraphs"
                        enabled={diagraphs}
                        className={styles.switch}
                        data-testid="diagraphs"
                        onChange={() => setDiagraphs(!diagraphs)}
                    />

                    <p className={diagraphs ? styles.description : styles.disabled}>
                        Diagraphs are combinations of two kana. Both syllabaries have the same diagraphs in their
                        respective kana.
                    </p>

                    <QuantityField
                        value={quantity}
                        isValid={validate}
                        className={styles.quantity}
                        onChange={(value: number) => setQuantity(value)}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default KanaSettingsFormBody;
