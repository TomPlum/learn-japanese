import { Component } from "react";
import { Kana } from "../../types/kana/Kana";
import { Container } from "react-bootstrap";
import KanaDisplay, { KanaDisplayStyle } from "./display/KanaDisplay";
import Arrays from "../../utility/Arrays";
import styles from "../../styles/sass/components/ui/KanaCarousel.module.scss";

export interface KanaCarouselProps {
    kana: Kana[];
    style?: KanaDisplayStyle;
}

interface KanaCarouselState {
    remaining: Kana[];
    shown: Kana[];
    current: Kana;
}

class KanaCarousel extends Component<KanaCarouselProps, KanaCarouselState> {

    constructor(props: KanaCarouselProps | Readonly<KanaCarouselProps>) {
        super(props);

        const [next, remaining] = Arrays.getRandomObject(props.kana);

        this.state = {
            remaining: remaining,
            shown: [next],
            current: next,
        }
    }

    render() {
        const { current } = this.state;
        return (
            <Container className={styles.wrapper}>
                <div data-testid="animation" onAnimationIteration={this.handleAnimation} className={styles.animate}>
                    <KanaDisplay kana={current} style={this.props.style} />
                    <p className={styles.romaji}>{current.getFullRomajiString()}</p>
                </div>
            </Container>
        );
    }

    private handleAnimation = () => {
        const { current, remaining, shown } = this.state;
        const { kana } = this.props;

        const pool = remaining.length > 0 ? remaining : kana;
        const [next, nextRemaining] = Arrays.getRandomObject(pool);
        const shownPool = remaining.length > 0 ? shown.concat(current) : [next];
        this.setState({ current: next, remaining: nextRemaining, shown: shownPool });
    }
}

export default KanaCarousel