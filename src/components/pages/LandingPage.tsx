import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/sass/components/pages/LandingPage.module.scss";
import Inspectable from "../ui/Inspectable";
import KanaCarousel from "../ui/kana/KanaCarousel";
import { faGraduationCap, faPlay, faQuestion, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Environment } from "../../utility/Environment";
import ParallaxBackground from "../layout/ParallaxBackground";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import KanaRepository from "../../repository/KanaRepository";
import { KanaSettingsBuilder } from "../../domain/session/settings/data/KanaSettings";
import { Kana } from "../../domain/kana/Kana";
import LoadingSpinner from "../ui/loading/LoadingSpinner";

const LandingPage = () => {
    const [kana, setKana] = useState<Kana[]>([]);
    const [loading, setLoading] = useState(false);

    const kanaRepository = new KanaRepository();

    useEffect(() => {
        setLoading(true);
        const settings = new KanaSettingsBuilder().withHiragana().withKatakana().build();
        kanaRepository.read(settings).then(data => {
            setKana(data);
            setLoading(false);
        });
    }, []);

    return (
        <Container fluid className={styles.wrapper} data-testid="landing-page">
            {kana.length > 0 && <ParallaxBackground kana={kana}/>}

            <div className={styles.content}>
                <h1 className={styles.heading}>
                    {'Learn '}
                    <Inspectable
                        popover={{
                            title: "Nihongo (日本語)",
                            text: Environment.variable("JAPANESE_KANJI_DESC")
                        }}
                        className={styles.japanese}
                        placement="top"
                    >
                        <span data-testid="japanese-inspectable">Japanese</span>
                    </Inspectable>
                    {' Kana'}
                </h1>

                <div className={styles.descriptionWrapper}>
                    <h4 className={styles.description}>
                        {'A simple memory training app for learning the Japanese '}
                        <Inspectable
                            popover={{
                                title: "Hiragana (ひらがな)",
                                text: Environment.variable("HIRAGANA_DESC")
                            }}
                            placement="bottom" color="white"
                        >
                            <span data-testid="hiragana-inspectable">Hiragana</span>
                        </Inspectable>
                        {' and '}
                        <Inspectable
                            popover={{
                                title: "Katakana (カタカナ)",
                                text: Environment.variable("KATAKANA_DESC")
                            }}
                            placement="bottom"
                            color="white"
                        >
                            <span data-testid="katakana-inspectable">Katakana</span>
                        </Inspectable>
                        {' syllabaries.'}
                    </h4>
                </div>

                {kana.length > 0 && <KanaCarousel
                    kana={kana}
                    style={{ character: { className: styles.carouselDisplay } }}
                />}

                <LoadingSpinner active={loading} variant="primary" />

                <Row noGutters={true} className={styles.buttonContainer}>
                    <Col xs={6} md={3} className={styles.buttonWrapper}>
                        <Link to="/home">
                            <Button className={styles.button} variant="outline-danger">
                                <FontAwesomeIcon icon={faGraduationCap} className={styles.buttonIcon}/>
                                <span className={styles.buttonText}> Learn</span>
                            </Button>
                        </Link>
                    </Col>

                    <Col xs={6} md={3} className={styles.buttonWrapper}>
                        <Link to="/home">
                            <Button className={styles.button} variant="outline-success">
                                <FontAwesomeIcon icon={faPlay} className={styles.buttonIcon}/>
                                <span className={styles.buttonText}> Play</span>
                            </Button>
                        </Link>
                    </Col>

                    <Col xs={6} md={3} className={styles.buttonWrapper}>
                        <Link to="/search">
                            <Button className={styles.button} variant="outline-info">
                                <FontAwesomeIcon icon={faSearch} className={styles.buttonIcon}/>
                                <span className={styles.buttonText}> Search</span>
                            </Button>
                        </Link>
                    </Col>

                    <Col xs={6} md={3} className={styles.buttonWrapper}>
                        <Link to="/help">
                            <Button variant="outline-warning" className={styles.button} title="Help">
                                <FontAwesomeIcon icon={faQuestion} className={styles.buttonIcon}/>
                                <span className={styles.buttonText}> Help</span>
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default LandingPage;
