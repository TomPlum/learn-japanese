import { Component } from "react";
import { KanaRepository } from "../../../repository/KanaRepository";
import { Kana } from "../../../types/Kana";
import { Container } from "react-bootstrap";
import KanaDisplay from "../../../components/game/KanaDisplay";
import { RandomNumberGenerator } from "../../../utility/RandomNumberGenerator";

interface KanaCarouselState {
    remaining: (Kana | undefined)[]
    shown: Kana[];
    interval: any;
    current?: Kana;
}

class KanaCarousel extends Component<any, KanaCarouselState> {

    private kana: Kana[] = [];

    constructor(props: Readonly<any> | any) {
        super(props);
        this.state = {
            remaining: [],
            shown: [],
            current: undefined,
            interval: undefined
        }
    }

    componentDidMount() {
        const kana = new KanaRepository().read({ hiragana: true, katakana: true, diagraphs: true });
        this.kana = kana;
        this.setState({ remaining: kana, interval: setInterval(() => this.randomise(), 4000) });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        const { current } = this.state;
        return (
            <Container>
                {current && <KanaDisplay kana={current} style={{ character: { color: "#FFF", size: "xl" } }}/>}
            </Container>
        );
    }

    private randomise = () => {
        let { current, remaining, shown } = this.state;
        if (remaining.length === 0) {
            this.reset();
        } else {
            const [next, nextRemaining] = RandomNumberGenerator.getRandomObject(remaining);
            if (current) this.setState({ shown: shown.concat(current) });
            this.setState({ remaining: nextRemaining, current: next });
        }
    }

    private reset = () => {
        this.setState({ current: undefined, remaining: this.kana, shown: [] });
    }
}

export default KanaCarousel