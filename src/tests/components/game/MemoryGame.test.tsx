import MemoryGame, { MemoryGameProps } from "../../../components/game/MemoryGame";
import { cleanup, fireEvent, screen, waitForElementToBeRemoved } from "@testing-library/react";
import QuestionType from "../../../domain/game/QuestionType";
import { Kana } from "../../../domain/kana/Kana";
import KanaType from "../../../domain/kana/KanaType";
import { KanaColumn } from "../../../domain/kana/KanaColumn";
import Arrays from "../../../utility/Arrays";
import { GameFinishReason } from "../../../domain/game/GameFinishReason";
import { Environment } from "../../../utility/Environment";
import { v4 } from "uuid";
import { GameSettingsBuilder } from "../../../domain/session/settings/game/GameSettings";
import { LifeSettingsBuilder } from "../../../domain/session/settings/game/LifeSettings";
import { HintSettingsBuilder } from "../../../domain/session/settings/game/HintSettings";
import { TimeSettingsBuilder } from "../../../domain/session/settings/game/TimeSettings";
import { QuestionSettingsBuilder } from "../../../domain/session/settings/game/QuestionSettings";
import LearnableField from "../../../domain/learn/LearnableField";
import renderReduxConsumer from "../../renderReduxConsumer";
import renderTranslatedReduxConsumer from "../../renderTranslatedReduxConsumer";

//Mock Event Handlers
const onFinishHandler = jest.fn();

//Mock Imported Static Functions
const shuffle = jest.fn();
const getRandomObjects = jest.fn();
const getRandomElements = jest.fn();
const environment = jest.fn();

//Mock Audio (JSDom Doesn't Support)
const playAudio = jest.fn();
window.HTMLMediaElement.prototype.play = playAudio;

//Test Kana (Extracted here for reference equality purposes)
const a = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
const i = new Kana("い", ["i"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
const u = new Kana("う", ["u"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
const e = new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
const o = new Kana("お", ["o"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);

let props: MemoryGameProps;

beforeEach(() => {
    props = {
        data: [a, i, u, e, o],
        settings: new GameSettingsBuilder()
            .withQuestionSettings(new QuestionSettingsBuilder()
                .withType(QuestionType.TEXT)
                .withFields(LearnableField.KANA, LearnableField.ROMAJI)
                .withCardQuantity(1)
                .withScoreTracking(true)
                .build()
            )
            .withHintSettings(new HintSettingsBuilder().isEnabled().areUnlimited().build())
            .withLifeSettings(new LifeSettingsBuilder().isEnabled(false).build())
            .withTimeSettings(new TimeSettingsBuilder().isTimed(false).isCountDown(false).build())
            .build()
        ,
        onFinish: onFinishHandler,
        sessionKey: v4()
    };

    //Mocked Static Functions
    Arrays.getRandomObjects = getRandomObjects;
    Arrays.shuffle = shuffle;
    Arrays.getRandomElements = getRandomElements;
    Environment.variable = environment;

    //Always returns the first n elements in order, so it is deterministic
    getRandomObjects.mockImplementation((array: any[], quantity: number) => {
        const questions = Arrays.copy(array).splice(0, quantity);
        const remaining = Arrays.copy(array).splice(quantity, array.length);
        return [questions, remaining];
    });

    //Always returns the array in the same order, so it doesn't shuffle
    shuffle.mockImplementation((array: any[]) => {
        return array;
    });

    //Always returns the first n elements from the start so it is deterministic
    getRandomElements.mockImplementation((array: any[], quantity: number) => {
        return array.splice(0, quantity);
    });

    //Mock Audio - Promise returns undefined otherwise
    playAudio.mockResolvedValue(jest.fn());

    jest.useFakeTimers();
});

afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.restoreAllMocks();
    cleanup();
});

const setup = () => {
    const component = renderTranslatedReduxConsumer(<MemoryGame {...props} />);
    return {
        submit: component.getByText('Check'),
        skip: component.getByText('Skip'),
        hint: component.getByTitle('Get a Hint'),
        quit: component.getByTitle('Quit'),
        volume: component.getByTitle('Volume'),
        ...component
    }
}

function getRomajiInput(): HTMLElement {
    return screen.getByPlaceholderText('Rōmaji');
}

test('On mount the submit button should be disabled', () => {
    const { submit } = setup();
    expect(submit).toBeDisabled();
});

test('Answering correctly when there are kana remaining should show the next kana', () => {
    const { submit } = setup();

    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);

    expect(screen.queryByText("あ")).not.toBeInTheDocument();
    expect(screen.getByText("い")).toBeInTheDocument();
});

test('Answering correctly after having used a hint that question should reduce the hint quantity by 1', async () => {
    props.settings = new GameSettingsBuilder()
        .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(5).build())
        .build();

    const { submit, hint } = setup();

    //We should start with the full 5 hints remaining
    fireEvent.click(hint);
    expect(await screen.findByText('Need a hint? (5/5 remaining)')).toBeInTheDocument();

    //Use a hint for the current question
    fireEvent.click(screen.getByText('Click to Reveal'));
    expect(await screen.findByText('Need a hint? (4/5 remaining)'));
    expect(await screen.findByText('This kana is from the \'vowel\' column in the Hiragana syllabary.'));

    //Answer the question correctly and submit
    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);

    //We should now see the hint quantity reduced by 1
    fireEvent.click(screen.getByTestId('hint-button'));
    expect(await screen.findByText('Click to Reveal')).toBeInTheDocument();
    expect(await screen.findByText('Need a hint? (4/5 remaining)')).toBeInTheDocument();
});

test('Answering correctly without using a hint that question should not reduce the hint quantity', async () => {
    props.settings = new GameSettingsBuilder()
        .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(5).build())
        .build();

    const { submit, hint } = setup();

    //We should start with the full 5 hints remaining
    fireEvent.click(hint);
    expect(await screen.findByText('Need a hint? (5/5 remaining)')).toBeInTheDocument();

    //Answer the current question correctly and submit to advance
    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);

    //We should still see the full 5 hints remaining having not used one.
    fireEvent.click(screen.getByTestId('hint-button'));
    expect(await screen.findByText('Need a hint? (5/5 remaining)')).toBeInTheDocument();
});

test('Passing data settings with an undefined question quantity should set 1 current question value', async () => {
    // Omit question settings quantity so it is defaulted to undefined
    props.settings = new GameSettingsBuilder().withQuestionSettings(new QuestionSettingsBuilder().build()).build();
    setup();

    // Should simply render the first question with no issues
    expect(screen.getByText('あ')).toBeInTheDocument();
});

test('Passing data settings with 0 question quantity should set 1 current question value', async () => {
    // Explicitly set the question settings quantity to 0
    props.settings = new GameSettingsBuilder().withQuestionSettings(new QuestionSettingsBuilder().withQuantity(0).build()).build();
    setup();

    // Should simply render the first question with no issues
    expect(screen.getByText('あ')).toBeInTheDocument();
});

test('Answering correctly should advance the progress bar', () => {
    const { submit } = setup();

    expect(screen.getByTitle('1/5')).toBeInTheDocument();

    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);

    expect(screen.getByTitle('2/5')).toBeInTheDocument();
});

test('Answering regular kana correctly should increase the score by 100 each', () => {
    const { submit } = setup();

    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);
    expect(screen.getByText('100')).toBeInTheDocument();

    fireEvent.change(getRomajiInput(), { target: { value: 'i' } });
    fireEvent.click(submit);
    expect(screen.getByText('200')).toBeInTheDocument();
});

test('Answering correctly should play the success sound effect', () => {
    const { submit } = setup();

    //Answer question successfully
    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);

    expect(playAudio).toHaveBeenCalled();
});

test('Skipping a question should decrease the score by the current questions base score', () => {
    const { submit, skip } = setup();

    //Answer first correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);
    expect(screen.getByText('100')).toBeInTheDocument();

    //Answer second correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'i' } });
    fireEvent.click(submit);
    expect(screen.getByText('200')).toBeInTheDocument();

    //Skip third
    fireEvent.click(skip);
    expect(screen.getByText('100')).toBeInTheDocument();
});

test('Skipping a question reset the players streak', () => {
    props.data = [a, i, u, e, o, a]; //Add 6 kana so answering the 5th doesn't end the game
    const { submit, skip } = setup();

    //Answer first correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);

    //Answer second correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'i' } });
    fireEvent.click(submit);

    //Answer third correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'u' } });
    fireEvent.click(submit);

    //Answer fourth correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'e' } });
    fireEvent.click(submit);

    //Skip 5th (where we would have got a streak if correct
    fireEvent.click(skip);
    expect(screen.queryByText('5 streak!')).not.toBeInTheDocument();
});

test('Answering multiple correctly consecutively should start a streak', () => {
    props.data = [a, i, u, e, o, a]; //Add 6 kana so answering the 5th doesn't end the game
    const { submit } = setup();

    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);

    fireEvent.change(getRomajiInput(), { target: { value: 'i' } });
    fireEvent.click(submit);

    fireEvent.change(getRomajiInput(), { target: { value: 'u' } });
    fireEvent.click(submit);

    fireEvent.change(getRomajiInput(), { target: { value: 'e' } });
    fireEvent.click(submit);

    fireEvent.change(getRomajiInput(), { target: { value: 'o' } });
    fireEvent.click(submit);

    expect(screen.getByText('5 streak!')).toBeInTheDocument();
});

test('Answering a diagraph correctly should give 150 points', () => {
    const diagraph = new Kana("ぴょ", ["pyo"], KanaType.HIRAGANA, KanaColumn.H, true);
    props.data = [diagraph, a, e];
    const { submit } = setup();

    fireEvent.change(getRomajiInput(), { target: { value: 'pyo' } });
    fireEvent.click(submit);

    expect(screen.getByText('150')).toBeInTheDocument();
});

test('Answering correctly on a streak of 5 should grant a 1.5x multiplier', () => {
    props.data = Array.from({ length: 7 }).map(() => a);
    const { submit } = setup();

    //Answering 5 correctly
    Array.from({ length: 5 }).forEach(() => {
        fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
        fireEvent.click(submit);
    });
    expect(screen.getByText('500')).toBeInTheDocument();

    //Now we're on a 5 streak, answering the next one correct should grant a 1.5x multiplier
    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);
    expect(screen.getByText('650')).toBeInTheDocument();
});

test('Answering correctly on a streak of 10 should grant a 2x multiplier', () => {
    props.data = Array.from({ length: 12 }).map(() => a);
    const { submit } = setup();

    //Answering 10 correctly
    Array.from({ length: 10 }).forEach(() => {
        fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
        fireEvent.click(submit);
    });
    expect(screen.getByText('1250')).toBeInTheDocument();

    //Now we're on a 10 streak, answering the next one correct should grant a 2x multiplier
    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);
    expect(screen.getByText('1450')).toBeInTheDocument();
});

test('Answering correctly on a streak of 25 should grant a 3x multiplier', () => {
    props.data = Array.from({ length: 27 }).map(() => a);
    const { submit } = setup();

    //Answering 25 correctly
    Array.from({ length: 25 }).forEach(() => {
        fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
        fireEvent.click(submit);
    });
    expect(screen.getByText('4250')).toBeInTheDocument();

    //Now we're on a 25 streak, answering the next one correct should grant a 3x multiplier
    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);
    expect(screen.getByText('4550')).toBeInTheDocument();
});

test('Answering correctly on a streak of 50 should grant a 4x multiplier', () => {
    props.data = Array.from({ length: 52 }).map(() => a);
    const { submit } = setup();

    //Answering 50 correctly
    Array.from({ length: 50 }).forEach(() => {
        fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
        fireEvent.click(submit);
    });
    expect(screen.getByText('11750')).toBeInTheDocument();

    //Now we're on a 50 streak, answering the next one correct should grant a 4x multiplier
    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);
    expect(screen.getByText('12150')).toBeInTheDocument();
});

test('Answering all questions correctly should stop the timer', () => {
    props.settings = new GameSettingsBuilder()
        .withTimeSettings(new TimeSettingsBuilder().isTimed().isCountDown(false).build()).build();

    const { submit } = setup();

    //Answer 1st correctly
    jest.advanceTimersByTime(5000);
    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);

    //Answer 2nd correctly
    jest.advanceTimersByTime(3000);
    fireEvent.change(getRomajiInput(), { target: { value: 'i' } });
    fireEvent.click(submit);

    //Answer 3rd correctly
    jest.advanceTimersByTime(2000);
    fireEvent.change(getRomajiInput(), { target: { value: 'u' } });
    fireEvent.click(submit);

    //Answer 4th correctly
    jest.advanceTimersByTime(2000);
    fireEvent.change(getRomajiInput(), { target: { value: 'e' } });
    fireEvent.click(submit);

    //Answer 5th correctly
    jest.advanceTimersByTime(15000);
    fireEvent.change(getRomajiInput(), { target: { value: 'o' } });
    fireEvent.click(submit);

    //Advancing the timer to prove the timer has stopped
    jest.advanceTimersByTime(10000);
    expect(screen.getByText('00:27')).toBeInTheDocument();
});

test('Answering all questions correctly should stop call the onFinish even handler with the game result', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withTimeSettings(new TimeSettingsBuilder().isTimed().build())
        .withHintSettings(new HintSettingsBuilder().withQuantity(5).build())
        .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(5).build())
        .build();

    const { submit } = setup();

    //Answer 1st correctly
    jest.advanceTimersByTime(5000);
    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);

    //Answer 2nd correctly
    jest.advanceTimersByTime(3000);
    fireEvent.change(getRomajiInput(), { target: { value: 'i' } });
    fireEvent.click(submit);

    //Answer 3rd correctly
    jest.advanceTimersByTime(2000);
    fireEvent.change(getRomajiInput(), { target: { value: 'u' } });
    fireEvent.click(submit);

    //Answer 4th correctly
    jest.advanceTimersByTime(5000);
    fireEvent.change(getRomajiInput(), { target: { value: 'e' } });
    fireEvent.click(submit);

    //Answer 5th correctly
    jest.advanceTimersByTime(15000);
    fireEvent.change(getRomajiInput(), { target: { value: 'o' } });
    fireEvent.click(submit);

    expect(onFinishHandler).toHaveBeenCalledWith({
        settings: props.settings,
        reason: GameFinishReason.EXHAUSTED_QUESTIONS,
        success: true,
        score: 400,
        livesRemaining: 5,
        hintsRemaining: 5,
        correctAnswers: new Set([a, i, u, e, o]),
        wrongAnswers: [],
        duration: "00:30"
    });
});

test('Answering all questions correctly should call the onFinish even handler with undefined time if no timer', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withTimeSettings(new TimeSettingsBuilder().isTimed(false).isCountDown(false).build())
        .withHintSettings(new HintSettingsBuilder().withQuantity(3).build())
        .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(5).build())
        .build();

    const { submit } = setup();

    //Answer 1st correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);

    //Answer 2nd correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'i' } });
    fireEvent.click(submit);

    //Answer 3rd correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'u' } });
    fireEvent.click(submit);

    //Answer 4th correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'e' } });
    fireEvent.click(submit);

    //Answer 5th correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'o' } });
    fireEvent.click(submit);

    expect(onFinishHandler).toHaveBeenCalledWith({
        settings: props.settings,
        reason: GameFinishReason.EXHAUSTED_QUESTIONS,
        success: true,
        score: 400,
        livesRemaining: 5,
        hintsRemaining: 3,
        correctAnswers: new Set([a, i, u, e, o]),
        wrongAnswers: [],
        duration: undefined
    });
});

test('Answering all questions correctly should play the finish sound effect after the last question', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withTimeSettings(new TimeSettingsBuilder().isTimed(false).isCountDown(false).build())
        .build();

    const { submit } = setup();

    //Answer 1st correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);

    //Answer 2nd correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'i' } });
    fireEvent.click(submit);

    //Answer 3rd correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'u' } });
    fireEvent.click(submit);

    //Answer 4th correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'e' } });
    fireEvent.click(submit);

    //Answer 5th correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'o' } });
    fireEvent.click(submit);

    expect(playAudio).toHaveBeenCalledTimes(6);
});

test('Answering incorrectly should not show the next kana', () => {
    const { submit } = setup();

    fireEvent.change(getRomajiInput(), { target: { value: 'e' } });
    fireEvent.click(submit);

    expect(screen.getByText("あ")).toBeInTheDocument();
});

test('Answering incorrectly when on a streak should reset it', () => {
    props.data = Array.from({ length: 9 }).map(() => a);
    const { submit } = setup();

    //Answering 5 correctly
    Array.from({ length: 5 }).forEach(() => {
        fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
        fireEvent.click(submit);
    });
    expect(screen.getByText('500')).toBeInTheDocument();

    //Now we're on a 5 streak, answering the next one correct should grant a 1.5x multiplier
    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);
    expect(screen.getByText('650')).toBeInTheDocument();

    //No we're on a 6 streak, answering the next one incorrectly should reset the streak and not grant any points
    fireEvent.change(getRomajiInput(), { target: { value: 'i' } });
    fireEvent.click(submit);
    expect(screen.getByText('650')).toBeInTheDocument();

    //No we're back to a 0 streak, answering the next one correctly should reset the multiplier to 1x
    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);
    expect(screen.getByText('750')).toBeInTheDocument();
});

test('Answering incorrectly with 1 life remaining should call the onFinish event handler', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withTimeSettings(new TimeSettingsBuilder().isTimed().build())
        .withHintSettings(new HintSettingsBuilder().withQuantity(3).build())
        .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(1).build())
        .build();

    const { submit } = setup();

    //Advance the time, lets assume it took 12 seconds
    jest.advanceTimersByTime(12000);

    //Answer 1st correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);

    //Answer 2nd correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'i' } });
    fireEvent.click(submit);

    //Answer 3rd incorrectly (Causing us to lose as only 1 life)
    fireEvent.change(getRomajiInput(), { target: { value: 'bya' } });
    fireEvent.click(submit);

    expect(onFinishHandler).toHaveBeenCalledWith({
        settings: props.settings,
        reason: GameFinishReason.NO_LIVES_REMAINING,
        success: false,
        livesRemaining: 0,
        score: 200,
        hintsRemaining: 3,
        correctAnswers: new Set([a, i]),
        wrongAnswers: [u],
        duration: "00:12"
    });
});

test('Answering incorrectly with 1 life remaining should call the onFinish event handler with undefined duration if no timer', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withTimeSettings(new TimeSettingsBuilder().isTimed(false).isCountDown(false).build())
        .withHintSettings(new HintSettingsBuilder().withQuantity(3).build())
        .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(1).build())
        .build();

    const { submit } = setup();

    //Answer 1st correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);

    //Answer 2nd correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'i' } });
    fireEvent.click(submit);

    //Answer 3rd incorrectly (Causing us to lose as only 1 life)
    fireEvent.change(getRomajiInput(), { target: { value: 'bya' } });
    fireEvent.click(submit);

    expect(onFinishHandler).toHaveBeenCalledWith({
        settings: props.settings,
        reason: GameFinishReason.NO_LIVES_REMAINING,
        success: false,
        livesRemaining: 0,
        score: 200,
        hintsRemaining: 3,
        correctAnswers: new Set([a, i]),
        wrongAnswers: [u],
        duration: undefined
    });
});

test('Answering incorrectly when lives are enabled should reduce the lives by 1', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(5).build())
        .build();

    const { submit } = setup();

    expect(screen.getByText('5')).toBeInTheDocument();
    fireEvent.change(getRomajiInput(), { target: { value: 'e' } });
    fireEvent.click(submit);

    expect(screen.getByText('4')).toBeInTheDocument();
});

test('Answering incorrectly should play the wrong sound effect', () => {
    const { submit } = setup();

    //Answer question incorrectly
    fireEvent.change(getRomajiInput(), { target: { value: 'hi' } });
    fireEvent.click(submit);

    expect(playAudio).toHaveBeenCalled();
});

test('Enabling lives should render the LifeDisplay', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(10).build())
        .build();
    setup();
    expect(screen.getByTitle('Lives')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
});

test('Enabling hints should render the HintButton in an enabled state', () => {
    props.settings = new GameSettingsBuilder().fromExisting(props.settings)
        .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(3).build())
        .build();
    const { hint } = setup();
    expect(hint).not.toBeDisabled();
});

test('Disabling hints should render the HintButton in a disabled state', async () => {
    props.settings = new GameSettingsBuilder().withHintSettings(new HintSettingsBuilder().isEnabled(false).build()).build();
    renderReduxConsumer(<MemoryGame {...props} />);
    fireEvent.click(screen.getByTitle('Hints are disabled.'));
    expect(await screen.findByText('Hints are disabled')).toBeInTheDocument();
});

test('Using the hint button twice in the same kana shouldn\'t use another hint', async () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(3).build())
        .build();

    const { hint } = setup();

    //Reveal the hint
    fireEvent.click(hint);
    fireEvent.click(screen.getByText('Click to Reveal'));
    expect(await screen.findByText('Need a hint? (2/3 remaining)')).toBeInTheDocument();

    //Click the button again to blur the popover and close it.
    fireEvent.click(hint);
    await waitForElementToBeRemoved(() => screen.getByText('Need a hint? (2/3 remaining)'));

    //Click the hint button again, it should still show the same hint and not reduce the quantity
    fireEvent.click(hint);
    expect(screen.queryByText('Click to Reveal')).not.toBeInTheDocument();
    expect(await screen.findByText('Need a hint? (2/3 remaining)')).toBeInTheDocument();
});


test('Enabling the timer should render the timer', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withTimeSettings(new TimeSettingsBuilder().isTimed().build())
        .build();
    setup();
    expect(screen.getByTitle('Pause')).toBeInTheDocument();
    expect(screen.queryByText('00:00')).toBeInTheDocument();
});

test('Pausing the timer when it is enabled should disable the rōmaji input', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withTimeSettings(new TimeSettingsBuilder().isTimed().build())
        .build();

    setup();
    fireEvent.click(screen.getByTitle('Pause'));
    expect(screen.getByPlaceholderText('Paused')).toBeDisabled()
});

test('Disabling the timer should not render the timer', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withTimeSettings(new TimeSettingsBuilder().isTimed(false).isCountDown(false).build())
        .build();

    setup();

    expect(screen.queryByTitle('Pause')).not.toBeInTheDocument();
    expect(screen.queryByText('00:00')).not.toBeInTheDocument();
});

test('Enabling the countdown should render the countdown', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withTimeSettings(new TimeSettingsBuilder().isCountDown().build())
        .build();

    setup();

    expect(screen.getByTitle('Time Remaining')).toBeInTheDocument();
});

test('Enabling the countdown with 10 seconds should render the countdown starting at 10', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withTimeSettings(new TimeSettingsBuilder().isCountDown().withSecondsPerQuestion(10).build())
        .build();

    setup();

    expect(screen.getByTitle('Time Remaining')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
});

test('Disabling the countdown should not render the countdown', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withTimeSettings(new TimeSettingsBuilder().isTimed(false).isCountDown(false).build())
        .build();
    setup();
    expect(screen.queryByTitle('Time Remaining')).not.toBeInTheDocument();
});

test('Failing to correctly answer the question before the countdown finishes should present the next kana', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withTimeSettings(new TimeSettingsBuilder().isCountDown().withSecondsPerQuestion(5).build())
        .build();

    setup();

    expect(screen.getByText('あ')).toBeInTheDocument();
    jest.advanceTimersByTime(6000);
    expect(screen.getByText('い')).toBeInTheDocument();
});

test('Failing to correctly answer the question before the countdown finishes should subtract a life if enabled', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withTimeSettings(new TimeSettingsBuilder().isCountDown().withSecondsPerQuestion(5).build())
        .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(10).build())
        .build();

    setup();

    expect(screen.getByText('10')).toBeInTheDocument();
    jest.advanceTimersByTime(6000);
    expect(screen.getByText('9')).toBeInTheDocument();
});

test('Failing to correctly answer the question before the countdown finishes should reset the countdown', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withTimeSettings(new TimeSettingsBuilder().isCountDown().withSecondsPerQuestion(5).build())
        .build();

    setup();

    expect(screen.getByText('5')).toBeInTheDocument();
    jest.advanceTimersByTime(3000);
    expect(screen.getByText('2')).toBeInTheDocument();
    jest.advanceTimersByTime(3000);
    expect(screen.getByText('5')).toBeInTheDocument();
});

test('Failing to correctly answer the question before the countdown finishes should reduce the hints if one was used', async () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withTimeSettings(new TimeSettingsBuilder().isCountDown().withSecondsPerQuestion(5).build())
        .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(5).build())
        .build();

    const { hint } = setup();

    //We should start with the full 5 hints remaining
    fireEvent.click(hint);
    expect(await screen.findByText('Need a hint? (5/5 remaining)')).toBeInTheDocument();

    //Use a hint
    fireEvent.click(screen.getByText('Click to Reveal'));

    //Deplete countdown time
    jest.advanceTimersByTime(6000);

    //The hint quantity should be reduced by 1
    fireEvent.click(screen.getByTestId('hint-button'));
    expect(await screen.findByText('Need a hint? (4/5 remaining)')).toBeInTheDocument();
});

test('Failing to correctly answer the question before the countdown finishes should not reduce the hints if they weren\'t used', async () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withTimeSettings(new TimeSettingsBuilder().isCountDown().withSecondsPerQuestion(5).build())
        .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(5).build())
        .build();

    const { hint } = setup();

    //We should start with all 5
    fireEvent.click(hint);
    expect(await screen.findByText('Need a hint? (5/5 remaining)')).toBeInTheDocument();

    //Deplete the countdown timer
    jest.advanceTimersByTime(6000);

    //We should have 5 on the next question
    fireEvent.click(screen.getByTestId('hint-button'));
    expect(await screen.findByText('Need a hint? (5/5 remaining)')).toBeInTheDocument();
});

test('Setting the question type as \'Text\' should render a TextQuestion', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.TEXT).build())
        .build();
    setup();
    expect(screen.getByText('あ')).toBeInTheDocument();
});

test('Setting the question type as \'Choice\' should render a ChoiceQuestion', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withQuestionSettings(new QuestionSettingsBuilder()
            .withFields(LearnableField.ROMAJI, LearnableField.KANA)
            .withType(QuestionType.CHOICE)
            .withCardQuantity(2)
            .build()
        )
        .build();

    setup();

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('あ')).toBeInTheDocument();

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('い')).toBeInTheDocument();

    expect(screen.queryByText('3')).not.toBeInTheDocument();
});

test('Setting the question type as \'Match\' should render a MatchQuestion', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withQuestionSettings(new QuestionSettingsBuilder()
            .withFields(LearnableField.ROMAJI, LearnableField.KANA)
            .withType(QuestionType.MATCH)
            .withQuantity(3)
            .build()
        ).build();

    setup();

    //Questions
    expect(screen.getByText('a')).toBeInTheDocument();
    expect(screen.getByText('i')).toBeInTheDocument();
    expect(screen.getByText('u')).toBeInTheDocument();

    //Answers
    expect(screen.getByText('あ')).toBeInTheDocument();
    expect(screen.getByText('い')).toBeInTheDocument();
    expect(screen.getByText('う')).toBeInTheDocument();
});

test('Setting the game settings score property to true should render the score', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.CHOICE).withCardQuantity(2).withScoreTracking(true).build())
        .build();
    setup();
    expect(screen.getByText('0')).toBeInTheDocument();
});

test('Setting the game settings score property to false should not render the score', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.CHOICE).withCardQuantity(2).withScoreTracking(false).build())
        .build();
    setup();
    expect(screen.queryByText('0')).not.toBeInTheDocument();
});

test('Clicking the quit button should render the confirmation modal', () => {
    const { quit } = setup();
    fireEvent.click(quit);
    expect(screen.getByText('Are you sure you want to quit?')).toBeInTheDocument();
    expect(screen.getByText('You\'ll lose your current progress, but you\'ll see the results of your game thus far.')).toBeInTheDocument();
});


test('Clicking the quit button should pause the game while the confirmation modal is open', () => {
    const { quit, skip } = setup();
    fireEvent.click(quit);
    expect(skip).toBeDisabled(); //Strange JSDom behaviour here. The timer isn't showing so we can't check that.
});

test('Clicking the \'Yes\' button from the quit confirmation modal should call the onFinish event handler', () => {
    const { quit } = setup();

    fireEvent.click(quit);
    fireEvent.click(screen.getByText('Yes'));

    expect(onFinishHandler).toHaveBeenCalledWith({
        settings: props.settings,
        reason: GameFinishReason.QUIT,
        success: false,
        score: 0,
        livesRemaining: 0,
        hintsRemaining: 0,
        duration: undefined,
        correctAnswers: new Set(),
        wrongAnswers: [a],
    });
});

test('Clicking the \'No\' button from the quit confirmation modal should resume the game', () => {
    const { quit, skip } = setup();

    fireEvent.click(quit);
    expect(skip).toBeDisabled();

    fireEvent.click(screen.getByText('No'));
    expect(onFinishHandler).not.toHaveBeenCalled();
    expect(skip).not.toBeDisabled();
});

test('Clicking the skip button should advance to the next question', () => {
    const { skip } = setup();
    expect(screen.getByText('あ')).toBeInTheDocument();

    fireEvent.click(skip);
    expect(screen.getByText('い')).toBeInTheDocument();
});

test('Clicking the skip button should remove a life if they are enabled', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(5).build())
        .build();
    const { skip } = setup();
    expect(screen.getByText('5')).toBeInTheDocument();

    fireEvent.click(skip);
    expect(screen.getByText('4')).toBeInTheDocument();
});

test('Pausing should disable the skip button', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withTimeSettings(new TimeSettingsBuilder().isTimed().build())
        .build();
    const { skip } = setup();
    expect(skip).not.toBeDisabled();

    fireEvent.click(screen.getByTitle('Pause'));
    expect(skip).toBeDisabled();
});

test('Audio exceptions should be swallowed and logged', () => {
    playAudio.mockRejectedValue(new Error("Broken"));
    const { submit } = setup();

    //Answer 1st correctly to hit the success sound effect.
    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);

    //Answer 2nd in-correctly to hit the wrong sound effect.
    fireEvent.change(getRomajiInput(), { target: { value: 'wo' } });
    fireEvent.click(submit);

    //Now answer 2nd correctly to continue
    fireEvent.change(getRomajiInput(), { target: { value: 'i' } });
    fireEvent.click(submit);

    //Answer 3rd correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'u' } });
    fireEvent.click(submit);

    //Answer 4th correctly
    fireEvent.change(getRomajiInput(), { target: { value: 'e' } });
    fireEvent.click(submit);

    //Answer 5th correctly to trigger the game-end sound effect
    fireEvent.change(getRomajiInput(), { target: { value: 'o' } });
    fireEvent.click(submit);

    //TODO: Can we test console.log has been fired?
});

test('Interacting with the volume mixer should change the game volume', async () => {
    const { volume } = setup();

    //Bring up the slider overlay
    fireEvent.mouseEnter(volume);
    const slider = await screen.findByTestId('volume-slider');
    expect(slider).toBeInTheDocument();

    //Change the value
    fireEvent.change(slider, { target: { value: 20 }});

    //TODO: Can we expect some mock audio context object to have changed?
});
