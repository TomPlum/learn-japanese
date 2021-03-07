import { Component } from "react";
import { Kana } from "../../types/Kana";
import { Container } from "react-bootstrap";
import { RandomNumberGenerator } from "../../utility/RandomNumberGenerator";
import styles from "../../styles/sass/components/ui/KanaCarousel.module.scss";

export interface KanaCarouselProps {
    kana: Kana[];
}

interface KanaCarouselState {
    remaining: (Kana | undefined)[]
    shown: Kana[];
    interval: any;
    current?: Kana;
}

class KanaCarousel extends Component<KanaCarouselProps, KanaCarouselState> {

    constructor(props: Readonly<any> | any) {
        super(props);
        this.state = {
            remaining: this.props.kana,
            shown: [],
            current: undefined,
            interval: undefined,
        }
    }

    componentDidMount() {
        this.setState({ interval: setInterval(() => this.randomise(), 4000) }, this.randomise)
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    //TODO: Replace with KanaDisplay. Expose animation class and add it to the DynamicCharacter arrays
    render() {
        const { current } = this.state;
        return (
            <Container className={styles.wrapper}>
                <p className={styles.kana}>{current?.code}</p>
                <p className={styles.romanji}>{current?.getFullRomanjiString()}</p>
            </Container>
        );
    }

    private randomise = () => {
        let { current, remaining, shown } = this.state;
        if (remaining.length === 0) {
            this.setState({ current: undefined, remaining: this.props.kana, shown: [] }, this.randomise);
        } else {
            const [next, nextRemaining] = RandomNumberGenerator.getRandomObject(remaining);
            if (current) this.setState({ shown: shown.concat(current) });
            this.setState({ remaining: nextRemaining, current: next });
        }
    }
}

export default KanaCarousel