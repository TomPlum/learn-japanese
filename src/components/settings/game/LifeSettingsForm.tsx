import React, { ChangeEvent, forwardRef, Ref, useEffect, useImperativeHandle, useState } from "react"
import { Col, Row } from "react-bootstrap"
import LifeSettings, { LifeSettingsBuilder } from "../../../domain/session/settings/game/LifeSettings"
import RangeSlider from "react-bootstrap-range-slider"
import ScrollableContainer from "../../ui/ScrollableContainer"
import styles from "../../../styles/sass/components/settings/game/LifeSettingsForm.module.scss"
import ToggleSwitch from "../../ui/ToggleSwitch"
import { SettingsFormHandle } from "./GameSettingsMenu"
import { useTranslation } from "react-i18next"

interface LifeSettingsFormProps {
    onChange: (settings: LifeSettings) => void
}

const LifeSettingsForm = forwardRef((props: LifeSettingsFormProps, ref: Ref<SettingsFormHandle>) => {
    const { onChange } = props

    const defaultState = new LifeSettingsBuilder().isEnabled(false).withQuantity(0).build()

    const { t } = useTranslation("translation", { keyPrefix: "wizard.steps.life" })
    const [enabled, setEnabled] = useState(defaultState.enabled)
    const [quantity, setQuantity] = useState(defaultState.quantity)

    useEffect(() => {
        onChange(defaultState)
    }, [])

    useEffect(() => {
        const settings = new LifeSettingsBuilder().isEnabled(enabled).withQuantity(quantity).build()
        onChange(settings)
    }, [enabled, quantity])

    useImperativeHandle(ref, () => ({
        reset() {
            setEnabled(defaultState.enabled)
            setQuantity(defaultState.quantity)
        }
    }))

    return (
        <ScrollableContainer className={styles.formWrapper} id="life-settings-form">
            <Row>
                <Col xs={12}>
                    <p className={styles.leadingDescription}>{t("desc")}</p>

                    <ToggleSwitch
                        enabled={enabled}
                        label={t("enable")}
                        className={styles.check}
                        data-testid="enable-lives"
                        onChange={() => setEnabled(!enabled)}
                    />
                </Col>

                <Col xs={12}>
                    <p className={styles.leadingDescription}>{t("lives-desc")}</p>

                    <RangeSlider
                        min={1}
                        max={10}
                        variant="primary"
                        disabled={!enabled}
                        value={quantity.valueOf()}
                        tooltip={enabled ? "auto" : "off"}
                        data-testid="life-quantity-slider"
                        onChange={(_: ChangeEvent, value: number) => setQuantity(value)}
                    />
                </Col>
            </Row>
        </ScrollableContainer>
    )
})

export default LifeSettingsForm
