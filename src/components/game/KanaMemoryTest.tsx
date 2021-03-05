import React, { Component } from "react";
import { Kana } from "../../types/Kana";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import styles from "../../styles/sass/components/game/KanaMemoryTest.module.scss";
import { RandomNumberGenerator } from "../../utility/RandomNumberGenerator";
import Timer from "./Timer";
import { GameSettings } from "../../types/GameSettings";
import LifeDisplay from "./LifeDisplay";
import { LifeQuantity } from "../../types/LifeQuantity";
import QuitButton from "../ui/QuitButton";
import GameResult from "../../types/GameResult";
import { FailureReason } from "../../types/FailureReason";
import CountDown from "./CountDown";
import RomanjiQuestion from "./RomanjiQuestion";
import { DisplayType } from "../../types/DisplayType";
import KanaChoiceQuestion from "./KanaChoiceQuestion";
import Arrays from "../../utility/Arrays";

export interface KanaMemoryTestProps {
    kana: Kana[];
    settings: GameSettings;
    onClose: () => void;
    onFinish: (result: GameResult) => void;
}

interface KanaMemoryTestState {
    currentKana: Kana;
    remainingKana: Kana[];
    correctAnswers: Set<Kana>;
    wrongAnswers: Kana[];
    hasExhaustedKana: boolean;
    paused: boolean;
    lives: number;
    failedToAnswer: number;
}

class KanaMemoryTest extends Component<KanaMemoryTestProps, KanaMemoryTestState> {
    private readonly timer: React.RefObject<Timer>;
    private readonly countdown: React.RefObject<CountDown>;

    constructor(props: KanaMemoryTestProps | Readonly<KanaMemoryTestProps>) {
        super(props);

        this.timer = React.createRef();
        this.countdown = React.createRef();

        const { settings, kana } = this.props;

        const [firstKana, remainingKana] = this.getRandomKana(kana);

        this.state = {
            currentKana: firstKana,
            remainingKana: remainingKana,
            correctAnswers: new Set<Kana>(),
            wrongAnswers: [],
            hasExhaustedKana: false,
            paused: false,
            lives: settings.lives.quantity?.valueOf() ?? LifeQuantity.ZERO,
            failedToAnswer: 0
        }
    }

    componentDidUpdate() {
        const { lives, correctAnswers, wrongAnswers} = this.state
        const { kana, settings, onFinish } = this.props;

        if (settings.lives.enabled && lives === 0) {
            onFinish({
                reason: FailureReason.NO_LIVES_REMAINING,
                success: false,
                livesRemaining: 0,
                totalKanaOffered: kana.length,
                correctAnswers: correctAnswers,
                wrongAnswers: wrongAnswers,
                duration: this.timer.current?.getCurrentTime() ?? undefined
            });
        }
    }

    render() {
        const { correctAnswers, failedToAnswer, hasExhaustedKana, lives, remainingKana } = this.state;
        const { kana, settings } = this.props;

        return (
            <Container className={styles.wrapper}>
                <Row noGutters>
                    <Col xs={12}>
                        <ProgressBar
                            animated={!hasExhaustedKana}
                            className={styles.progress}
                            now={((correctAnswers.size + failedToAnswer) / kana.length) * 100}
                            variant={hasExhaustedKana ? "success" : undefined}
                            title={(kana.length - remainingKana.length)  + "/" + kana.length}
                        />
                    </Col>

                    <Col>
                        <QuitButton onClick={this.close} />
                    </Col>

                    <Col className={styles.lifeDisplayContainer}>
                        {settings.lives.enabled && <LifeDisplay hearts={lives} />}
                    </Col>

                    <Col>
                        {settings.time.timed &&
                            <Timer className={styles.timer} ref={this.timer} pausable onPaused={this.onPaused}/>
                        }
                        {settings.time.countdown &&
                            <CountDown
                                className={styles.timer}
                                ref={this.countdown}
                                value={settings.time?.secondsPerQuestion ?? 10}
                                onFinish={this.countDownTimeElapsed}
                            />
                        }
                    </Col>
                </Row>

                {this.getQuestion()}
            </Container>
        );
    }

    private getQuestion = () => {
        const { settings, kana } = this.props;
        const { currentKana, paused } = this.state;

        switch (settings.display.type) {
            case DisplayType.SINGLE_KANA: {
                return (
                    <RomanjiQuestion
                        kana={currentKana}
                        onSubmit={this.answerQuestion}
                        hidden={paused}
                        hintSettings={settings.hints}
                    />
                );
            }
            case DisplayType.MULTIPLE_CARDS: {
                const pool = kana.filter(k => k.isDiagraph() === currentKana.isDiagraph());
                const options = Arrays.remove(pool, currentKana);
                const wrong = Arrays.getRandomElements(options, settings.display.cards - 1);
                return (
                    <KanaChoiceQuestion
                        key={currentKana.code}
                        expected={currentKana}
                        wrong={wrong}
                        hidden={paused}
                        onSubmit={this.answerQuestion}
                    />
                );
            }
        }
    }

    answerQuestion = (correct: boolean) => {
        const { currentKana, correctAnswers, wrongAnswers, remainingKana, lives } = this.state;
        const { settings } = this.props;

        if (correct) {
            //Add the current kana to the correct answers set.
            this.setState({ correctAnswers: correctAnswers.add(currentKana)});

            if (remainingKana.length === 0) {
                //If we're out of kana, stop the timer and let the component know the pool has been exhausted.
                this.timer.current?.stop();
                this.setState({ hasExhaustedKana: true, paused: false });
            } else {
                //If we're being timed per kana, reset the timer.
                this.countdown.current?.reset();

                //Pick a random remaining kana and remove it from the pool.
                const [nextKana, nextRemainingKana] = this.getRandomKana(remainingKana);

                //Update the next kana to be displayed and the remaining kana with one less.
                this.setState({ currentKana: nextKana, remainingKana: nextRemainingKana });
            }
        } else {
            //If the question was answered incorrectly, update the lives and wrong answer pool.
            this.setState({
                lives: settings.lives.enabled && !settings.time.countdown ? lives - 1 : lives,
                wrongAnswers: wrongAnswers.concat(currentKana)
            });
        }
    }

    reset = () => {
        const [nextKana, remainingKana] = this.getRandomKana(this.props.kana);

        this.setState({
            currentKana: nextKana,
            remainingKana: remainingKana,
            correctAnswers: new Set<Kana>(),
            wrongAnswers: [],
            paused: false,
            hasExhaustedKana: false,
        });

        this.timer.current?.restart();
        this.countdown.current?.reset();
    }

    private countDownTimeElapsed = () => {
        const { lives, wrongAnswers, currentKana, remainingKana, failedToAnswer } = this.state;
        //this.kanaDisplay.current?.notifyIncorrect(); TODO: Can we notify the question components of incorrectness when timer runs out?
        this.countdown.current?.reset();

        //Pick a random remaining kana and remove it from the pool.
        const [nextKana, nextRemainingKana] = this.getRandomKana(remainingKana);

        this.setState({
            currentKana: nextKana,
            remainingKana: nextRemainingKana,
            lives: this.props.settings.lives.enabled ? lives - 1 : lives,
            wrongAnswers: wrongAnswers.concat(currentKana),
            failedToAnswer: failedToAnswer + 1
        });
    }

    private close = () => {
        this.reset();
        this.props.onClose();
    }

    private onPaused = () => this.setState({ paused: !this.state.paused })

    /**
     * Picks a random Kana from the given pool and removes it.
     * @param pool The array of Kana to choose from.
     * @returns A two-element tuple containing the randomly chosen kana and the trimmed pool.
     */
    private getRandomKana = (pool: Kana[]): [Kana, Kana[]] => {
        const kana = [...pool];
        const randomKanaIndex = RandomNumberGenerator.getRandomArrayIndex(kana);
        const firstKana = kana[randomKanaIndex];
        kana.splice(randomKanaIndex, 1);
        return [firstKana, kana];
    };
}

export default KanaMemoryTest;