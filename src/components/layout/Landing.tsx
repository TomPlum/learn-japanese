import { Component } from "react";
import { Button, Container } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/Landing.module.scss";
import Inspectable from "../ui/Inspectable";
import KanaCarousel from "../ui/KanaCarousel";
import { faPaintBrush, faPlay, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Kana } from "../../types/Kana";
import { KanaRepository } from "../../repository/KanaRepository";
import Arrays from "../../utility/Arrays";

interface LandingState {
    kana: Kana[];
    height: number;
    width: number;
}

class Landing extends Component<{}, LandingState> {

    constructor(props: Readonly<{}> | {}) {
        super(props);
        this.state = {
            kana: [],
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    componentDidMount() {
        this.setState({ kana: new KanaRepository().read({ hiragana: true, katakana: true })})
    }

    render() {
        return (
            <Container fluid className={styles.wrapper}>
                <ul className={styles.background}>
                    {this.getBackgroundKana().map(kana => {
                        return <li key={kana.code}>{kana.code}</li>
                    })}
                </ul>

                <div className={styles.content}>
                    <h1 className={styles.heading}>
                        {'Learn '}
                        <Inspectable
                            title="Nihongo (日本語)"
                            text="The Kanji in this compound mean 'Sun' (日), 'Origin' (本) and 'Language' (語)."
                            className={styles.japanese}
                            placement="top"
                        >
                            <span>Japanese</span>
                        </Inspectable>
                        {' Kana'}
                    </h1>

                    <div className={styles.descriptionWrapper}>
                        <h4 className={styles.description}>
                            A simple memory training app for learning the Japanese Hiragana and Katakana syllabaries.
                        </h4>
                    </div>

                    <KanaCarousel kana={this.state.kana}/>

                    <Button className={styles.play} variant="outline-success" href="/play">
                        <FontAwesomeIcon icon={faPlay} /> Play
                    </Button>

                    <Button className={styles.play} variant="outline-warning" href="/kanji">
                        <FontAwesomeIcon icon={faPaintBrush} /> Kanji
                    </Button>

                    <Button className={styles.search} variant="outline-info" href="/search">
                        <FontAwesomeIcon icon={faSearch} /> Search
                    </Button>
                </div>
            </Container>
        );
    }

    private getBackgroundKana = () => {
        let kana: Kana[] = [];

        const html = document.querySelector('html');
        const pool = this.state.kana;

        if (pool.length > 0 && html) {
            //Calculate the width & height of the viewport in em.
            const fontSize = getComputedStyle(html).fontSize;
            const width = window.innerWidth / parseFloat(fontSize);
            const height = window.innerHeight / parseFloat(fontSize);

            //Calculate how many kana fit on a single row, the number of rows and the total required.
            const kanaPerRow = Math.ceil(width / 5);
            const rows = Math.ceil(height / 5) + 1;
            const totalKanaRequired = kanaPerRow * rows;

            if (totalKanaRequired > pool.length) {
                //There are 214 kana. If more is needed, find out how many more and push them.
                const pools = Math.floor(totalKanaRequired / pool.length);
                for (let i = 0; i < pools; i++) {
                    kana.push(...pool);
                }

                //If the number of pools is fractional, push one more row in.
                const remaining = totalKanaRequired % pool.length;
                if (remaining) {
                    kana.push(...pool.splice(0, kanaPerRow));
                }
            }
        }

        return Arrays.shuffle(kana);
    }
}

export default Landing;