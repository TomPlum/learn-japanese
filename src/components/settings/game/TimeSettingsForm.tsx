import React, { ChangeEvent, forwardRef, Ref, useEffect, useImperativeHandle, useState } from "react"
import { Col, Fade, Row } from "react-bootstrap"
import TimeSettings, { TimeSettingsBuilder } from "../../../domain/session/settings/game/TimeSettings"
import styles from "../../../styles/sass/components/settings/game/TimeSettingsForm.module.scss"
import RangeSlider from "react-bootstrap-range-slider"
import ScrollableContainer from "../../ui/ScrollableContainer"
import ToggleSwitch from "../../ui/ToggleSwitch"
import { SettingsFormHandle } from "./GameSettingsMenu"
import { useTranslation } from "react-i18next"

export interface TimeSettingsFormProps {
    onChange: (settings: TimeSettings) => void
}

const TimeSettingsForm = forwardRef((props: TimeSettingsFormProps, ref: Ref<SettingsFormHandle>) => {
    const { onChange } = props

    const defaultState = new TimeSettingsBuilder().isTimed().isCountDown(false).withSecondsPerQuestion(10).build()

    const [timed, setTimed] = useState(defaultState.timed)
    const [countdown, setCountdown] = useState(defaultState.countdown)
    const { t } = useTranslation("translation", { keyPrefix: "wizard.steps.time" })
    const [secondsPerQuestion, setSecondsPerQuestion] = useState(defaultState.secondsPerQuestion)

    useEffect(() => {
        onChange(defaultState)
    }, [])

    useEffect(() => {
        const settings = new TimeSettingsBuilder()
            .isTimed(timed)
            .isCountDown(countdown)
            .withSecondsPerQuestion(secondsPerQuestion)
            .build()

        onChange(settings)
    }, [timed, countdown, secondsPerQuestion])

    useImperativeHandle(ref, () => ({
        reset() {
            setTimed(defaultState.timed)
            setCountdown(defaultState.countdown)
            setSecondsPerQuestion(defaultState.secondsPerQuestion)
        }
    }))

    const onChangeTimed = () => {
        if (timed) {
            setTimed(false)
        } else {
            setTimed(true)
            setCountdown(false)
        }
    }

    const onChangeCountDown = () => {
        if (countdown) {
            setCountdown(false)
        } else {
            setCountdown(true)
            setTimed(false)
        }
    }

    const onChangeCountDownSeconds = (e: ChangeEvent, value: number) => {
        setSecondsPerQuestion(value)
    }

    return (
        <ScrollableContainer className={styles.formWrapper} id="time-settings-form">
            <Row>
                <Col>
                    <div className={styles.descriptionWrapper}>
                        <p className={styles.leadingDescription}>{t("desc")}</p>
                    </div>

                    <h5 className={styles.heading}>
                        <ToggleSwitch
                            label={t("timed")}
                            enabled={timed}
                            data-testid="Timed"
                            className={styles.check}
                            onChange={onChangeTimed}
                        />
                    </h5>

                    <p className={[styles.description, timed ? styles.active : styles.inactive].join(" ")}>
                        {t("timed-desc")}
                    </p>

                    <h5 className={styles.heading}>
                        <ToggleSwitch
                            enabled={countdown}
                            label={t("countdown")}
                            data-testid="Countdown"
                            className={styles.check}
                            onChange={onChangeCountDown}
                        />
                    </h5>

                    <p className={[styles.description, countdown ? styles.active : styles.inactive].join(" ")}>
                        {t("countdown-desc")}
                        {countdown && (
                            <Fade in={countdown} appear={countdown}>
                                <span> {t("seconds-quantity")}:</span>
                            </Fade>
                        )}
                    </p>

                    {countdown && (
                        <Fade in={countdown} appear={countdown}>
                            <RangeSlider
                                min={0}
                                max={60}
                                variant="primary"
                                disabled={timed}
                                value={secondsPerQuestion}
                                data-testid="seconds-slider"
                                onChange={onChangeCountDownSeconds}
                            />
                        </Fade>
                    )}
                </Col>
            </Row>
        </ScrollableContainer>
    )
})

export default TimeSettingsForm
