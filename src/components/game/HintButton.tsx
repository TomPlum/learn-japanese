import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb as solidBulb } from "@fortawesome/free-solid-svg-icons"
import { faLightbulb as regularBulb } from "@fortawesome/free-regular-svg-icons"
import { Button, OverlayTrigger } from "react-bootstrap"
import PopOver from "../ui/PopOver"
import Viewports, { Viewport } from "../../utility/Viewports"
import { Learnable } from "../../domain/learn/Learnable"
import styles from "../../styles/sass/components/game/HintButton.module.scss"
import RevealableText from "../ui/RevealableText"
import { useTranslation } from "react-i18next"

export interface HintButtonProps {
  data: Learnable
  quantity: number
  remaining: number
  infinite: boolean
  disabled?: boolean
  className?: string
  onUse?: () => void
}

const HintButton = (props: HintButtonProps) => {
  const { data, quantity, remaining, infinite, disabled, className, onUse } = props

  const [revealed, setRevealed] = useState(false)
  const [viewport, setViewport] = useState(Viewport.PHONE)
  const { t } = useTranslation("translation", { keyPrefix: "action" })

  useEffect(() => {
    updateViewport()
    window.addEventListener("resize", updateViewport)

    return () => {
      window.removeEventListener("resize", updateViewport)
    }
  }, [])

  const getTitle = () => {
    if (disabled) {
      return "Hints are disabled"
    }

    if (remaining === 1 && revealed) {
      return "This is your last hint!"
    }

    if (remaining > 0) {
      if (infinite) {
        return "Need a hint?"
      }

      return "Need a hint? (" + getRemaining() + "/" + quantity + " remaining)"
    }
    return "Sorry! You're out of hints."
  }

  const getContent = () => {
    if (disabled) {
      return "You'll have to choose a preset with hints enabled or customise the game settings."
    }

    if (remaining <= 0) {
      return "You've already used your " + quantity + " hints."
    }

    return data.getHint()
  }

  const getRemaining = () => {
    if (revealed) {
      return remaining - 1
    }

    return remaining
  }

  const updateViewport = () => {
    setViewport(Viewports.fromWidth(window.innerWidth))
  }

  const onHintUse = () => {
    if (!revealed) {
      onUse?.()
      setRevealed(true)
    }
  }

  const overlay = (
    <PopOver
      title={getTitle()}
      text={
        <RevealableText
          onReveal={onHintUse}
          value={getContent()}
          className={styles.hint}
          disabled={revealed || remaining <= 0}
        />
      }
    />
  )

  const defaultClassName = remaining > 0 ? styles.button : styles.disabled
  const buttonClasses = [defaultClassName, className].join(" ")
  const icon = remaining > 0 ? solidBulb : regularBulb

  return (
    <OverlayTrigger trigger="click" placement="top" rootClose={true} overlay={overlay}>
      <Button
        variant="warning"
        data-testid="hint-button"
        className={buttonClasses}
        title={!disabled ? "Get a Hint" : "Hints are disabled."}
        style={{ width: viewport === Viewport.PHONE ? "50px" : "auto" }}
      >
        <FontAwesomeIcon icon={icon} className={styles.icon} />
        {viewport !== Viewport.PHONE && <span className={styles.text}>{t("hint")}</span>}
      </Button>
    </OverlayTrigger>
  )
}

export default HintButton
