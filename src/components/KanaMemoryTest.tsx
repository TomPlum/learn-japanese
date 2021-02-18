import {Component} from "react";
import {Kana} from "../types/Kana";
import {Container} from "react-bootstrap";
import KanaTile from "./KanaTile";

interface KanaMemoryTestProps {
    kana: Kana[];
}

interface KanaMemoryTestState {
    currentKana: Kana;
}

class KanaMemoryTest extends Component<KanaMemoryTestProps, KanaMemoryTestState> {
    constructor(props: KanaMemoryTestProps | Readonly<KanaMemoryTestProps>) {
        super(props);
        this.state = {
            currentKana: this.props.kana[0]
        }
    }

    render() {
        const { currentKana } = this.state;
        return (
            <Container>
                <KanaTile kana={currentKana}/>
            </Container>
        )
    }
}

export default KanaMemoryTest;