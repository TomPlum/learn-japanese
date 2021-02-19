import {Component} from "react";
import {Container} from "react-bootstrap";
import KanaMemoryTest from "../components/KanaMemoryTest";
import {Kana} from "../types/Kana";
import {KanaRepository} from "../repository/KanaRepository";
import LoadingSpinner from "./LoadingSpinner";
import styles from "../styles/sass/layout/Main.module.scss";
import TestModeMenu, {TestSettings} from "../components/TestModeMenu";

interface MainState {
    loading: boolean;
    kana?: Kana[];
    testSettings?: TestSettings;
}

class Main extends Component<{}, MainState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            loading: false,
            kana: undefined,
            testSettings: undefined,
        }
    }

    onTestStart = (settings: TestSettings) => this.setState({testSettings: settings}, () => this.loadKana());

    onTestClose = () => this.setState({testSettings: undefined});

    render() {
        const { loading, kana, testSettings } = this.state;

        return (
          <Container className={styles.wrapper}>
              <LoadingSpinner active={loading} />
              {!testSettings && <TestModeMenu onStart={this.onTestStart}/>}
              {testSettings && kana && <KanaMemoryTest kana={kana} onClose={this.onTestClose}/>}
          </Container>
        );
    }

    private loadKana() {
        this.setState({loading: true});

        const repository = new KanaRepository();

        let kana: Kana[];

        const { testSettings } = this.state;
        if (testSettings?.includeHiragana && testSettings.includeKatakana) {
            kana = repository.readAllKana();
        } else if (testSettings?.includeHiragana) {
            kana = repository.readHiragana().splice(0,3);
        } else if (testSettings?.includeKatakana) {
            kana = repository.readKatakana();
        } else {
            throw new ReferenceError("Invalid Test Settings: No Kana Selected");
        }
        this.setState({loading: false, kana});
    }
}

export default Main;