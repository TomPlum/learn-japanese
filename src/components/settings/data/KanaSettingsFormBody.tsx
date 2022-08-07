import { DataSettingsStepFormProps } from "../../layout/wizard/steps/DataSettingsStep";
import KanaSettings, { KanaSettingsBuilder } from "../../../domain/session/settings/data/KanaSettings";
import { Col, Row } from "react-bootstrap";
import ToggleSwitch from "../../ui/ToggleSwitch";
import styles from "../../../styles/sass/components/settings/data/KanaSettingsForm.module.scss";
import QuantityField from "../../ui/fields/QuantityField";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const KanaSettingsFormBody = (props: DataSettingsStepFormProps<KanaSettings>) => {

    const { className, isValid, onChange } = props;

    const defaultState = new KanaSettingsBuilder().withHiragana().build();

    const [hiragana, setHiragana] = useState(defaultState.hiragana);
    const [katakana, setKatakana] = useState(defaultState.katakana);
    const [diagraphs, setDiagraphs] = useState(defaultState.diagraphs);
    const [quantity, setQuantity] = useState<number | undefined>(defaultState.quantity);
    const { t } = useTranslation("translation", { keyPrefix: "wizard.steps.data.kana" });

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
        <div className={className} data-testid="kana-settings-form-body">
            <Row>
                <Col>
                    <ToggleSwitch
                        enabled={hiragana}
                        data-testid="hiragana"
                        className={styles.switch}
                        label={t("hiragana-label")}
                        disabled={hiragana && !katakana}
                        onChange={() => setHiragana(!hiragana)}
                    />

                    <p className={hiragana ? styles.description : styles.disabled}>
                        {t("hiragana-desc")}
                    </p>

                    <ToggleSwitch
                        enabled={katakana}
                        data-testid="katakana"
                        className={styles.switch}
                        label={t("katakana-label")}
                        disabled={katakana && !hiragana}
                        onChange={() => setKatakana(!katakana)}
                    />

                    <p className={katakana ? styles.description : styles.disabled}>
                        {t("katakana-desc")}
                    </p>

                    <ToggleSwitch
                        enabled={diagraphs}
                        className={styles.switch}
                        data-testid="diagraphs"
                        label={t("diagraphs-label")}
                        onChange={() => setDiagraphs(!diagraphs)}
                    />

                    <p className={diagraphs ? styles.description : styles.disabled}>
                        {t("diagraphs-desc")}
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
