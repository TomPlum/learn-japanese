import {Component} from "react";
import {Container} from "react-bootstrap";
import KanaMemoryTest from "../components/KanaMemoryTest";
import {Kana} from "../types/Kana";
import {KanaRepository} from "../repository/KanaRepository";
import LoadingSpinner from "./LoadingSpinner";
import styles from "../styles/sass/layout/Main.module.scss";
import {TestSettings} from "../components/GameSettingsMenu";
import GameModeMenu from "../components/GameModeMenu";
import {GameMode} from "../types/GameMode";

interface MainState {
    loading: boolean;
    kana?: Kana[];
    testSettings?: TestSettings;
    selectedGameMode: GameMode;
}

class Main extends Component<{}, MainState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            loading: false,
            kana: undefined,
            testSettings: undefined,
            selectedGameMode: GameMode.ROMANJI
        }
    }

    onGameClose = () => this.setState({testSettings: undefined});

    onSelectedGameMode = (mode: GameMode, settings: TestSettings) => {
        this.setState({selectedGameMode: mode, testSettings: settings}, () => this.loadKana());
    }

    render() {
        const { loading, testSettings } = this.state;

        return (
          <Container className={styles.wrapper}>
              <LoadingSpinner active={loading} />
              {!testSettings && <GameModeMenu onSelectedMode={this.onSelectedGameMode}/>}
              {this.renderGame()}
          </Container>
        );
    }

    private renderGame() {
        const { kana, testSettings, selectedGameMode } = this.state;

        if (testSettings && kana) {
            switch (selectedGameMode) {
                case GameMode.ROMANJI: {
                    return <KanaMemoryTest kana={kana} onClose={this.onGameClose}/>
                }
                default: {
                    return <p>Bruh</p>
                }
            }
        }
        return false;
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

        if (!testSettings.includeDiagraphs) {
            kana = kana.filter(kana => !kana.isDiagraph());
        }

        this.setState({loading: false, kana});
    }
}

export default Main;