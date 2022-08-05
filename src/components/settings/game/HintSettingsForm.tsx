import React, { forwardRef, Ref, useEffect, useImperativeHandle, useState } from "react";
import { Col, Row } from "react-bootstrap";
import HintSettings, { HintSettingsBuilder } from "../../../domain/session/settings/game/HintSettings";
import RangeSlider from "react-bootstrap-range-slider";
import ScrollableContainer from "../../ui/ScrollableContainer";
import styles from "../../../styles/sass/components/settings/game/HintSettingsForm.module.scss";
import ToggleSwitch from "../../ui/ToggleSwitch";
import { SettingsFormHandle } from "./GameSettingsMenu";
import { useTranslation } from "react-i18next";

export interface HintSettingsFormProps {
    onChange: (settings: HintSettings) => void;
}

const HintSettingsForm = forwardRef((props: HintSettingsFormProps, ref: Ref<SettingsFormHandle>) => {

   const { onChange } = props;

   const defaultState = new HintSettingsBuilder().isEnabled().withQuantity(3).areUnlimited(false).build();

   const { t } = useTranslation("translation", { keyPrefix: "wizard.steps.hint" });
   const [enabled, setEnabled] = useState(defaultState.enabled);
   const [quantity, setQuantity] = useState(defaultState.quantity);
   const [unlimited, setUnlimited] = useState(defaultState.unlimited);

   useEffect(() => {
       onChange(defaultState);
   }, []);

   useEffect(() => {
       const settings = new HintSettingsBuilder()
           .isEnabled(enabled)
           .withQuantity(quantity)
           .areUnlimited(unlimited)
           .build();

       onChange(settings);
   }, [enabled, quantity, unlimited]);

   useImperativeHandle(ref, () => ({
       reset() {
           setEnabled(defaultState.enabled);
           setQuantity(defaultState.quantity);
           setUnlimited(defaultState.unlimited);
       }
   }))

    const onChangeHintQuantity = (e: React.ChangeEvent, value: number) => {
        setQuantity(value);
    }

    const handleHintToggle = () => {
       setEnabled(!enabled);
       setUnlimited(false);
    }

    return (
        <ScrollableContainer className={styles.formWrapper} id="hint-settings-form">
            <Row>
                <Col xs={12}>
                    <ToggleSwitch
                        enabled={enabled}
                        label={t("enable")}
                        className={styles.check}
                        data-testid="enable-hints"
                        onChange={handleHintToggle}
                    />

                    <p className={styles.leadingDescription}>
                        {t("enable-desc")}
                    </p>
                </Col>

                <Col xs={12}>
                    <RangeSlider
                        min={1} max={10}
                        value={quantity}
                        variant="primary"
                        disabled={!enabled || unlimited}
                        onChange={onChangeHintQuantity}
                        data-testid="hint-quantity-slider"
                        tooltip={enabled && !unlimited ? "auto" : "off"}
                    />

                    <p className={styles.leadingDescription}>
                        {t("quantity-desc")}
                    </p>
                </Col>

                <Col xs={12}>
                    <ToggleSwitch
                        enabled={unlimited}
                        disabled={!enabled}
                        label={t("infinite")}
                        className={styles.check}
                        data-testid="enable-infinite-hints"
                        onChange={() => setUnlimited(!unlimited)}
                    />

                    <p className={styles.leadingDescription}>
                        {t("infinite-desc")}
                    </p>
                </Col>
            </Row>
        </ScrollableContainer>
    );
});

export default HintSettingsForm;
