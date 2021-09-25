import { Card, Col, Dropdown, Row } from "react-bootstrap";
import React, { useState } from "react";
import { useFontDispatch } from "../../../hooks";
import { Font, fonts } from "../../ui/buttons/FontSelectorButton";
import { setFont } from "../../../slices/FontSlice";
import styles from "../../../styles/sass/components/user/profile/Preferences.module.scss";
import { Theme } from "../../../domain/Theme";
import { Language } from "../../../domain/Language";
import { HighScorePreference } from "../../../domain/HighScorePreference";
import { faCheckCircle, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Preferences = () => {

    const fontDispatcher = useFontDispatch();

    const [font, setSelectedFont] = useState(fonts[0].displayName);
    const [theme, setTheme] = useState(Theme.DARK.toString());
    const [language, setLanguage] = useState(Language.ENGLISH.toString());
    const [highScorePreference, setHighScorePreference] = useState(HighScorePreference.ASK_EACH_TIME.toString());
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

    const onSaveChanges = () => {
        setChanges(false);
    }

    return (
        <Card className={styles.card}>
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
                <Row>
                    <Col xs={6}>
                        <p className={styles.label}>Default font</p>
                    </Col>
                    <Col xs={6}>
                        <Dropdown className={styles.dropdown} onSelect={onSelectDefaultFont}>
                            <Dropdown.Toggle variant="light">{font}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {fonts.map((font: Font) => {
                                    return <Dropdown.Item key={font.displayName}>{font.displayName}</Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6}>
                        <p className={styles.label}>Theme</p>
                    </Col>
                    <Col xs={6}>
                        <Dropdown className={styles.dropdown} onSelect={onSelectTheme}>
                            <Dropdown.Toggle variant="light">{theme}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {Object.values(Theme).map((theme: string) => {
                                    return <Dropdown.Item key={theme}>{theme}</Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6}>
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

                <Row>
                    <Col xs={6}>
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
            </Card.Body>
        </Card>
    );
}

export default Preferences;
