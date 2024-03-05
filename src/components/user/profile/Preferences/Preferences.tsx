import { Card, Col, Dropdown, Row } from "react-bootstrap"
import React, { useEffect, useState } from "react"
import { Font } from "../../../ui/buttons/FontSelectorButton"
import { Theme } from "types/Theme"
import { Language } from "types/Language"
import { HighScorePreference } from "types/HighScorePreference"
import { faCheckCircle, faCircleNotch, faRedo } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AppMode } from "types/AppMode"
import { CardsPerDay } from "types/learn/spacedrepetition/CardsPerDay"
import { ConfidenceMenuStyle } from "types/learn/spacedrepetition/ConfidenceMenuStyle"
import styles  from "./Preferences.module.scss"
import UserService from "../../../../service/UserService"
import { useTranslation } from "react-i18next"
import { UserPreferences, useUserContext } from "context/UserContext";
import useFonts from "hooks/useFonts";
import { PreferencesProps } from "components/user/profile/Preferences/types.ts";


const Preferences = (props: PreferencesProps) => {
  const { setPreferences } = useUserContext()
  const userService = new UserService()
  const { getFonts } = useFonts()
  const { t } = useTranslation("translation", { keyPrefix: "settings.modal.interface.kanji-font.options" })

  useEffect(() => {
    const preferences = props.user.preferences
    setSelectedFont(preferences.kanjiFont)
    setTheme(preferences.theme)
    setLanguage(preferences.language)
    setHighScorePreference(preferences.highScoresBehaviour)
    setAppMode(preferences.defaultMode)
    setCardsPerDay(preferences.flashCardsQuantity)
    setConfidenceMenuStyle(preferences.confidenceMenuStyle)

    setLoading(true)
    getFonts()
      .then((fonts) => {
        setFonts(fonts)
        setSelectedFont(fonts[0].name)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [getFonts])

  const [fonts, setFonts] = useState<Font[]>([])

  const [font, setSelectedFont] = useState("")
  const [theme, setTheme] = useState(Theme.DARK.toString())
  const [language, setLanguage] = useState(Language.ENGLISH.toString())
  const [highScorePreference, setHighScorePreference] = useState(HighScorePreference.ASK_EACH_TIME.toString())
  const [appMode, setAppMode] = useState(AppMode.PLAY.toString())
  const [cardsPerDay, setCardsPerDay] = useState(CardsPerDay.TEN.valueOf())
  const [confidenceMenuStyle, setConfidenceMenuStyle] = useState(ConfidenceMenuStyle.NUMBERS.toString())

  const [changes, setChanges] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const onSelectDefaultFont = (_eventKey: string | null, event: React.SyntheticEvent<unknown>) => {
    setSelectedFont((event.target as HTMLSelectElement).textContent!)
    setChanges(true)
  }

  const onSelectTheme = (_eventKey: string | null, event: React.SyntheticEvent<unknown>) => {
    setTheme((event.target as HTMLSelectElement).textContent!)
    setChanges(true)
  }

  const onSelectLanguage = (_eventKey: string | null, event: React.SyntheticEvent<unknown>) => {
    setLanguage((event.target as HTMLSelectElement).textContent!)
    setChanges(true)
  }

  const onSelectHighScorePreference = (_eventKey: string | null, event: React.SyntheticEvent<unknown>) => {
    setHighScorePreference((event.target as HTMLSelectElement).textContent!)
    setChanges(true)
  }

  const onSetAppMode = (_eventKey: string | null, event: React.SyntheticEvent<unknown>) => {
    setAppMode((event.target as HTMLSelectElement).textContent!)
    setChanges(true)
  }

  const onSetCardsPerDay = (_eventKey: string | null, event: React.SyntheticEvent<unknown>) => {
    setCardsPerDay(Number((event.target as HTMLSelectElement).textContent!))
    setChanges(true)
  }

  const onSetConfidenceMenuStyle = (_eventKey: string | null, event: React.SyntheticEvent<unknown>) => {
    setConfidenceMenuStyle((event.target as HTMLSelectElement).textContent!)
    setChanges(true)
  }

  const onSaveChanges = () => {
    setError(undefined)
    setChanges(false)
    setLoading(true)

    const updatedPreferences: UserPreferences = {
      defaultMode: appMode,
      flashCardsQuantity: cardsPerDay,
      highScoresBehaviour: highScorePreference,
      confidenceMenuStyle: confidenceMenuStyle,
      language: language,
      theme: theme,
      kanjiFont: font,
      activityFeedQuantity: 3,
      streakCardView: "Start Date",
      romajiVisibility: "Always Show",
      profileVisibility: "Friends Only",
      streakNotifications: false,
      mistakesReminders: false
    }

    // TODO: This whole component just needs removing
    userService
      .updatePreferences([])
      .then((response) => {
        if (response.success) {
          setPreferences(updatedPreferences)
        } else {
          setError(response.error)
        }
      })
      .catch((response) => {
        setError(response.error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Card className={styles.card} border="secondary">
      <Card.Body>
        <Row>
          <Col xs={5}>
            <h2 className={styles.heading}>Preferences</h2>
          </Col>

          <Col xs={5} className={styles.errorContainer}>
            <span className={styles.error}>{error}</span>
          </Col>

          <Col xs={2}>
            <h2 className={styles.heading}>
              {changes ? (
                <FontAwesomeIcon
                  size="sm"
                  title="Save"
                  icon={faCheckCircle}
                  onClick={onSaveChanges}
                  className={[styles.save, styles.icon].join(" ")}
                />
              ) : loading ? (
                <FontAwesomeIcon
                  spin
                  size="sm"
                  title="Saving..."
                  icon={faCircleNotch}
                  className={[styles.spinner, styles.icon].join(" ")}
                />
              ) : error ? (
                <FontAwesomeIcon
                  size="sm"
                  title="Retry"
                  icon={faRedo}
                  onClick={onSaveChanges}
                  className={[styles.retry, styles.icon].join(" ")}
                />
              ) : undefined}
            </h2>
          </Col>
        </Row>

        <Row className={styles.row}>
          <Col xs={6} className={styles.col}>
            <p className={styles.label}>Default Font</p>
          </Col>
          <Col xs={6}>
            <Dropdown className={styles.dropdown} onSelect={onSelectDefaultFont}>
              <Dropdown.Toggle variant="light" data-testid="font">
                {font}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {fonts.map((font: Font) => {
                  return <Dropdown.Item key={font.slug}>{t(font.slug)}</Dropdown.Item>
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <Row className={styles.row}>
          <Col xs={6} className={styles.col}>
            <p className={styles.label}>Theme</p>
          </Col>
          <Col xs={6}>
            <Dropdown className={styles.dropdown} onSelect={onSelectTheme}>
              <Dropdown.Toggle variant="light" data-testid="theme">
                {theme}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {Object.values(Theme).map((theme: string) => {
                  return <Dropdown.Item key={theme}>{theme}</Dropdown.Item>
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <Row className={styles.row}>
          <Col xs={6} className={styles.col}>
            <p className={styles.label}>Language</p>
          </Col>
          <Col xs={6}>
            <Dropdown className={styles.dropdown} onSelect={onSelectLanguage}>
              <Dropdown.Toggle variant="light">{language}</Dropdown.Toggle>
              <Dropdown.Menu>
                {Object.values(Language).map((language: string) => {
                  return <Dropdown.Item key={language}>{language}</Dropdown.Item>
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <Row className={styles.row}>
          <Col xs={6} className={styles.col}>
            <p className={styles.label}>Highscores</p>
          </Col>
          <Col xs={6}>
            <Dropdown className={styles.dropdown} onSelect={onSelectHighScorePreference}>
              <Dropdown.Toggle variant="light">{highScorePreference}</Dropdown.Toggle>
              <Dropdown.Menu>
                {Object.values(HighScorePreference).map((preference: string) => {
                  return <Dropdown.Item key={preference}>{preference}</Dropdown.Item>
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <Row className={styles.row}>
          <Col xs={6} className={styles.col}>
            <p className={styles.label}>Default App Mode</p>
          </Col>
          <Col xs={6}>
            <Dropdown className={styles.dropdown} onSelect={onSetAppMode}>
              <Dropdown.Toggle variant="light">{appMode}</Dropdown.Toggle>
              <Dropdown.Menu>
                {Object.values(AppMode).map((mode: string) => {
                  return <Dropdown.Item key={mode}>{mode}</Dropdown.Item>
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <Row className={styles.row}>
          <Col xs={6} className={styles.col}>
            <p className={styles.label}>Cards Per Day</p>
          </Col>
          <Col xs={6}>
            <Dropdown className={styles.dropdown} onSelect={onSetCardsPerDay}>
              <Dropdown.Toggle variant="light">{cardsPerDay}</Dropdown.Toggle>
              <Dropdown.Menu>
                {Object.values(CardsPerDay)
                  .filter((it) => !isNaN(+it))
                  .map((cards) => {
                    return <Dropdown.Item key={cards}>{cards}</Dropdown.Item>
                  })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <Row className={styles.row}>
          <Col xs={6} className={styles.col}>
            <p className={styles.label}>Confidence Menu Style</p>
          </Col>
          <Col xs={6}>
            <Dropdown className={styles.dropdown} onSelect={onSetConfidenceMenuStyle}>
              <Dropdown.Toggle variant="light">{confidenceMenuStyle}</Dropdown.Toggle>
              <Dropdown.Menu>
                {Object.values(ConfidenceMenuStyle).map((style) => {
                  return <Dropdown.Item key={style}>{style}</Dropdown.Item>
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default Preferences
