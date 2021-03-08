import { Component } from "react";
import { Button, Container } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/Landing.module.scss";
import Inspectable from "../ui/Inspectable";
import KanaCarousel from "../ui/KanaCarousel";
import { faPlay, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Kana } from "../../types/Kana";
import { KanaRepository } from "../../repository/KanaRepository";
import Arrays from "../../utility/Arrays";
import { Environment } from "../../utility/Environment";

interface LandingState {
    height: number;
    width: number;
    backgroundKana: Kana[];
}

class Landing extends Component<{}, LandingState> {

    private readonly kana: Kana[];

    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.kana = new KanaRepository().read({ hiragana: true, katakana: true });

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundKana: []
        }
    }

    componentDidMount() {
        this.getBackgroundKana();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    render() {
        const { backgroundKana } = this.state;

        return (
            <Container fluid className={styles.wrapper}>
                <ul className={styles.background}>
                    {backgroundKana.map(kana => {
                        return (
                            <li key={Math.random().toString()} data-testid="background-kana">
                                {kana.code}
                            </li>
                        )
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
                            {Environment.variable("LANDING_DESC")}
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

    private updateWindowDimensions = () => {
        this.getBackgroundKana();
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    private getBackgroundKana = () => {
        let kana: Kana[] = [];

        const html = document.querySelector('html');
        const pool = [...this.kana];

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
                if (remaining !== 0) {
                    kana.push(...pool.splice(0, kanaPerRow));
                }
            } else {
                kana.push(...pool.splice(0, totalKanaRequired));
            }
        }

        this.setState({ backgroundKana: Arrays.shuffle(kana) });
    }
}

export default Landing;