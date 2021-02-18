import {Component} from "react";
import {Container} from "react-bootstrap";
import KanaMemoryTest from "../components/KanaMemoryTest";
import {Kana} from "../types/Kana";
import {KanaRepository} from "../infra/KanaRepository";
import LoadingSpinner from "./LoadingSpinner";

interface MainState {
    loading: boolean;
    kana: Kana[];
}

class Main extends Component<{}, MainState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            loading: true,
            kana: []
        }
    }

    componentDidMount() {
        const kana = new KanaRepository().readHiragana();
        this.setState({kana: kana, loading: false});
    }

    render() {
        const { loading, kana } = this.state;

        return (
          <Container>
              <LoadingSpinner active={loading} />
              {kana.length > 0 && <KanaMemoryTest kana={kana} />}
          </Container>
        );
    }
}

export default Main;