import { Component } from "react";
import KanaMemoryGame from "../game/KanaMemoryGame";
import GameResult from "../../types/GameResult";
import ResultScreen from "../results/ResultScreen";
import { Kana } from "../../types/Kana";
import LoadingSpinner from "../ui/LoadingSpinner";
import { KanaRepository } from "../../repository/KanaRepository";
import ControlsMenu from "../layout/ControlsMenu";
import GameSettingsMenu, { GameTypeSettings } from "../layout/GameSettingsMenu";
import styles from "../../styles/sass/components/pages/GamePage.module.scss";

interface GamePageState {
    loading: boolean;
    kana?: Kana[];
    settings?: GameTypeSettings;
    inResultsScreen: boolean;
    result?: GameResult;
    gameIdentifier: string;
}

class GamePage extends Component<{ }, GamePageState> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            loading: false,
            kana: undefined,
            settings: undefined,
            inResultsScreen: false,
            result: undefined,
            gameIdentifier: Math.random().toString()
        }
    }

    render() {
        const { loading, settings, kana, inResultsScreen, result } = this.state;
        return (
            <div className={styles.wrapper}>
                <LoadingSpinner active={loading}/>

                <ControlsMenu />

                {!settings && !inResultsScreen &&
                    <GameSettingsMenu onStart={this.start}/>
                }

                {settings && kana && !inResultsScreen &&
                    <KanaMemoryGame
                        kana={kana}
                        settings={settings.settings}
                        onFinish={this.onGameFinish}
                    />
                }

                {inResultsScreen && result &&
                    <ResultScreen result={result} onClose={this.onResultMenuClose}/>
                }
            </div>
        );
    }

    private start = (settings: GameTypeSettings) => this.setState({ settings }, this.loadKana);

    private onResultMenuClose = () => this.setState({ inResultsScreen: false, result: undefined });

    private onGameFinish = (result: GameResult) => this.setState({
        inResultsScreen: true,
        result: result,
        settings: undefined,
        gameIdentifier: Math.random().toString()
    });

    private loadKana() {
        this.setState({ loading: true });
        const kana = new KanaRepository().read(this.state.settings?.settings?.kana);
        this.setState({ loading: false, kana });
    }
}

export default GamePage;