import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/sass/components/pages/LandingPage.module.scss";
import Inspectable from "../ui/Inspectable";
import KanaCarousel from "../ui/KanaCarousel";
import { faGraduationCap, faPlay, faQuestion, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Kana } from "../../types/kana/Kana";
import { KanaRepository } from "../../repository/KanaRepository";
import { Environment } from "../../utility/Environment";
import ParallaxBackground from "../layout/ParallaxBackground";
import { Link } from "react-router-dom"
import { KanaSettingsBuilder } from "../../types/session/DataSettings";

class LandingPage extends Component {

    private readonly kana: Kana[];

    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.kana = new KanaRepository().read(new KanaSettingsBuilder().withHiragana().withKatakana().build());
    }

    render() {
        return (
            <Container fluid className={styles.wrapper} data-testid="landing-page">
                <ParallaxBackground kana={this.kana} />

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

                    <KanaCarousel kana={this.kana} style={{ character: { className: styles.carouselDisplay } }} />

                    <Row noGutters={true} className={styles.buttonContainer}>
                        <Col xs={6} md={3} className={styles.buttonWrapper}>
                            <Link to="/menu/learn">
                                <Button className={styles.button} variant="outline-danger">
                                    <FontAwesomeIcon icon={faGraduationCap} className={styles.buttonIcon} />
                                    <span className={styles.buttonText}> Learn</span>
                                </Button>
                            </Link>
                        </Col>

                        <Col xs={6} md={3} className={styles.buttonWrapper}>
                            <Link to="/menu/play">
                                <Button className={styles.button} variant="outline-success">
                                    <FontAwesomeIcon icon={faPlay} className={styles.buttonIcon} />
                                    <span className={styles.buttonText}> Play</span>
                                </Button>
                            </Link>
                        </Col>

                        <Col xs={6} md={3} className={styles.buttonWrapper}>
                            <Link to="/search">
                                <Button className={styles.button} variant="outline-info">
                                    <FontAwesomeIcon icon={faSearch} className={styles.buttonIcon} />
                                    <span className={styles.buttonText}> Search</span>
                                </Button>
                            </Link>
                        </Col>

                        <Col xs={6} md={3} className={styles.buttonWrapper}>
                            <Link to="/help">
                                <Button variant="outline-warning" className={styles.button} title="Help">
                                    <FontAwesomeIcon icon={faQuestion} className={styles.buttonIcon} />
                                    <span className={styles.buttonText}> Help</span>
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

export default LandingPage;