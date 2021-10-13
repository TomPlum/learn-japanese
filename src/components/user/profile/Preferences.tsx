import { Card, Col, Dropdown, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useFontDispatch } from "../../../hooks";
import { Font, fonts } from "../../ui/buttons/FontSelectorButton";
import { setFont } from "../../../slices/FontSlice";
import { Theme } from "../../../domain/Theme";
import { Language } from "../../../domain/Language";
import { HighScorePreference } from "../../../domain/HighScorePreference";
import { faCheckCircle, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppMode } from "../../../domain/AppMode";
import { User } from "../../../slices/UserSlice";
import { CardsPerDay } from "../../../domain/learn/spacedrepetition/CardsPerDay";
import { ConfidenceMenuStyle } from "../../../domain/learn/spacedrepetition/ConfidenceMenuStyle";
import styles from "../../../styles/sass/components/user/profile/Preferences.module.scss";
import UserService from "../../../service/UserService";

export interface PreferencesProps {
    user?: User;
}

const Preferences = (props: PreferencesProps) => {

    const fontDispatcher = useFontDispatch();
    const userService = new UserService();

    useEffect(() => {
        if (props.user && props.user.preferences) {
            const preferences = props.user.preferences;
            setSelectedFont(preferences.defaultFont);
            setTheme(preferences.theme);
            setLanguage(preferences.language);
            setHighScorePreference(preferences.highScores);
            setAppMode(preferences.defaultMode);
            setCardsPerDay(preferences.cardsPerDay);
            setConfidenceMenuStyle(preferences.confidenceMenuStyle);
        }
    }, []);

    const [font, setSelectedFont] = useState(fonts[0].displayName);
    const [theme, setTheme] = useState(Theme.DARK.toString());
    const [language, setLanguage] = useState(Language.ENGLISH.toString());
    const [highScorePreference, setHighScorePreference] = useState(HighScorePreference.ASK_EACH_TIME.toString());
    const [appMode, setAppMode] = useState(AppMode.PLAY.toString());
    const [cardsPerDay, setCardsPerDay] = useState(CardsPerDay.TEN.valueOf());
    const [confidenceMenuStyle, setConfidenceMenuStyle] = useState(ConfidenceMenuStyle.NUMBERS.toString());

    const [changes, setChanges] = useState(false);
    const [saving, setSaving] = useState(false);

    const onSelectDefaultFont = (eventKey: string | null, event: React.SyntheticEvent<unknown>) => {
        setSelectedFont((event.target as HTMLSelectElement).textContent!);
        fontDispatcher(setFont(font));
        setChanges(true);
    }

    const onSelectTheme = (eventKey: string | null, event: React.SyntheticEvent<unknown>) => {
        setTheme((event.target as HTMLSelectElement).textContent!);
        setChanges(true);
    }

    const onSelectLanguage = (eventKey: string | null, event: React.SyntheticEvent<unknown>) => {
        setLanguage((event.target as HTMLSelectElement).textContent!);
        setChanges(true);
    }

    const onSelectHighScorePreference = (eventKey: string | null, event: React.SyntheticEvent<unknown>) => {
        setHighScorePreference((event.target as HTMLSelectElement).textContent!);
        setChanges(true);
    }

    const onSetAppMode = (eventKey: string | null, event: React.SyntheticEvent<unknown>) => {
        setAppMode((event.target as HTMLSelectElement).textContent!);
        setChanges(true);
    }

    const onSetCardsPerDay = (eventKey: string | null, event: React.SyntheticEvent<unknown>) => {
        setCardsPerDay(Number((event.target as HTMLSelectElement).textContent!));
        setChanges(true);
    }

    const onSetConfidenceMenuStyle = (eventKey: string | null, event: React.SyntheticEvent<unknown>) => {
        setConfidenceMenuStyle((event.target as HTMLSelectElement).textContent!);
        setChanges(true);
    }

    const onSaveChanges = () => {
        setChanges(false);
    }

    return (
        <Card className={styles.card} border="secondary">
            <Card.Body>
                <h2 className={styles.heading}>
                    Preferences
                    {changes ? <FontAwesomeIcon
                        size="sm"
                        title="Save"
                        icon={faCheckCircle}
                        onClick={onSaveChanges}
                        className={[styles.save, styles.icon].join(" ")}
                    /> : saving ? <FontAwesomeIcon
                        size="sm"
                        title="Saving..."
                        icon={faCircleNotch}
                        className={[styles.spinner, styles.icon].join(" ")}
                    /> : undefined}
                </h2>

                <Row className={styles.row}>
                    <Col xs={6} className={styles.col}>
                        <p className={styles.label}>Default Font</p>
                    </Col>
                    <Col xs={6}>
                        <Dropdown className={styles.dropdown} onSelect={onSelectDefaultFont}>
                            <Dropdown.Toggle variant="light" data-testid="font">{font}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {fonts.map((font: Font) => {
                                    return <Dropdown.Item key={font.displayName}>{font.displayName}</Dropdown.Item>
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
                            <Dropdown.Toggle variant="light" data-testid="theme">{theme}</Dropdown.Toggle>
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
                                {Object.values(CardsPerDay).filter(it => !isNaN(+it)).map(cards => {
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
                                {Object.values(ConfidenceMenuStyle).map(style => {
                                    return <Dropdown.Item key={style}>{style}</Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Preferences;
