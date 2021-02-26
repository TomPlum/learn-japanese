import { Component } from "react";
import { Container } from "react-bootstrap";
import LoadingSpinner from "../ui/LoadingSpinner";
import styles from "../../styles/sass/components/layout/Main.module.scss";
import ResultScreen from "../results/ResultScreen";
import GameResult from "../../types/GameResult";
import { KanjiRepository } from "../../repository/KanjiRepository";
import { Kanji } from "../../types/kanji/Kanji";
import LearnKanji from "../learn/LearnKanji";

interface MainProps {
    onLaunchTest: () => void;
    onCloseTest: () => void;
}

interface MainState {
    loading: boolean;
    kanji?: Kanji[];
    grade?: number;
    inResultsScreen: boolean;
    result?: GameResult;
}

class Main extends Component<MainProps, MainState> {

    private readonly kanjiRepository = new KanjiRepository();

    constructor(props: MainProps | Readonly<MainProps>) {
        super(props);
        this.state = {
            loading: false,
            kanji: undefined,
            grade: undefined,
            inResultsScreen: false,
            result: undefined
        }
    }

    render() {
        const { loading, grade, kanji, inResultsScreen, result } = this.state;

        return (
            <Container className={grade ? styles.wrapperFullScreen : styles.wrapper}>
                <LoadingSpinner active={loading}/>
                {/*{!grade && !inResultsScreen &&
                    <KanjiSettingsMenu onSelected={this.startGame}/>
                }*/}

                <LearnKanji kanji={new KanjiRepository().read({ grades: [1] })} />

               {/* {grade && kanji && !inResultsScreen &&
                    <KanaMemoryTest
                        kana={kana}
                        settings={gameSettings}
                        onClose={this.onGameClose}
                        onFinish={this.onGameFinish}
                    />
                }*/}

                {inResultsScreen && result && <ResultScreen result={result} onClose={this.onResultMenuClose}/>}
            </Container>
        );
    }

    private startGame = (grade: number) => {
        this.props.onLaunchTest();
        this.setState({ grade }, () => this.loadKanji());
    }

    private onGameClose = () => {
        this.props.onCloseTest();
        this.setState({ grade: undefined });
    }

    private onResultMenuClose = () => this.setState({ inResultsScreen: false, result: undefined });

    private onGameFinish = (result: GameResult) => this.setState({ inResultsScreen: true, result });

    private loadKanji() {
        this.setState({ loading: true });
        const kanji = this.kanjiRepository.read({ grades: [this.state.grade ?? 1] });
        this.setState({ loading: false, kanji });
    }
}

export default Main;