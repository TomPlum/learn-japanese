import { Component } from "react";
import { Button, Container } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/Landing.module.scss";
import Inspectable from "../ui/Inspectable";
import KanaCarousel from "../ui/KanaCarousel";
import { faPlay, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Kana } from "../../types/Kana";
import { KanaRepository } from "../../repository/KanaRepository";
import { Environment } from "../../utility/Environment";
import ParallaxBackground from "./ParallaxBackground";


class Landing extends Component {

    private readonly kana: Kana[];

    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.kana = new KanaRepository().read({ hiragana: true, katakana: true });
    }

    render() {
        return (
            <Container fluid className={styles.wrapper} data-testid="landing-page">
                <ParallaxBackground kana={this.kana} />

                <div className={styles.content}>
                    <h1 className={styles.heading}>
                        {'Learn '}
                        <Inspectable
                            title="Nihongo (日本語)"
                            text={Environment.variable("JAPANESE_KANJI_DESC")}
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
                                title={"Hiragana (ひらがな)"}
                                text={Environment.variable("HIRAGANA_DESC")}
                                placement="bottom" color="white"
                            >
                                <span  data-testid="hiragana-inspectable">Hiragana</span>
                            </Inspectable>
                            {' and '}
                            <Inspectable
                                title={"Katakana (カタカナ)"}
                                text={Environment.variable("KATAKANA_DESC")}
                                placement="bottom"
                                color="white"
                            >
                                <span data-testid="katakana-inspectable">Katakana</span>
                            </Inspectable>
                            {' syllabaries.'}
                        </h4>
                    </div>

                    <KanaCarousel kana={this.kana}/>

                    <Button className={styles.play} variant="outline-success" href="/play">
                        <FontAwesomeIcon icon={faPlay} /> Play
                    </Button>

                    <Button className={styles.search} variant="outline-info" href="/search">
                        <FontAwesomeIcon icon={faSearch} /> Search
                    </Button>
                </div>
            </Container>
        );
    }
}

export default Landing;