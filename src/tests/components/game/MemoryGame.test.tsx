import MemoryGame, { MemoryGameProps } from "../../../components/game/MemoryGame";
import { cleanup, fireEvent, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { QuestionType } from "../../../types/game/QuestionType";
import { RandomNumberGenerator } from "../../../utility/RandomNumberGenerator";
import { Kana } from "../../../types/kana/Kana";
import KanaType from "../../../types/kana/KanaType";
import { KanaColumn } from "../../../types/kana/KanaColumn";
import Arrays from "../../../utility/Arrays";
import { FailureReason } from "../../../types/game/FailureReason";
import { Environment } from "../../../utility/Environment";
import { v4 } from "uuid";
import { GameSettingsBuilder } from "../../../types/session/settings/game/GameSettings";
import { LifeSettingsBuilder } from "../../../types/session/settings/game/LifeSettings";
import { LifeQuantity } from "../../../types/game/LifeQuantity";
import { HintSettingsBuilder } from "../../../types/session/settings/game/HintSettings";
import { HintQuantity } from "../../../types/game/HintQuantity";
import { TimeSettingsBuilder } from "../../../types/session/settings/game/TimeSettings";
import { QuestionSettingsBuilder } from "../../../types/session/settings/game/QuestionSettings";

//Mock Event Handlers
const onFinishHandler = jest.fn();

//Mock Imported Static Functions
const shuffle = jest.fn();
const getRandomObject = jest.fn();
const getRandomElements = jest.fn();
const environment = jest.fn();

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
            .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.ROMAJI).withCardQuantity(1).withScoreTracking(true).build())
            .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(HintQuantity.UNLIMITED).build())
            .withLifeSettings(new LifeSettingsBuilder().isEnabled(false).build())
            .withTimeSettings(new TimeSettingsBuilder().isTimed(false).isCountDown(false).build())
            .build()
        ,
        onFinish: onFinishHandler,
        sessionKey: v4()
    };

    //Mocked Static Functions
    RandomNumberGenerator.getRandomObject = getRandomObject;
    Arrays.shuffle = shuffle;
    Arrays.getRandomElements = getRandomElements;
    Environment.variable = environment;

    //Always returns the first element so it is deterministic
    getRandomObject.mockImplementation((array: any[]) => {
        const objects = [...array];
        const firstKana = objects[0];
        objects.splice(0, 1);
        return [firstKana, objects];
    });

    //Always returns the array in the same order so it doesn't shuffle
    shuffle.mockImplementation((array: any[]) => {
        return array;
    });

    //Always returns the first n elements from the start so it is deterministic
    getRandomElements.mockImplementation((array: any[], quantity: number) => {
        return array.splice(0, quantity);
    });

    jest.useFakeTimers();
});

afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.restoreAllMocks();
    cleanup();
});

const setup = () => {
    const component = render(<MemoryGame {...props} />);
    return {
        submit: component.getByText('Check'),
        skip: component.getByText('Skip'),
        hint: component.getByTitle('Get a Hint'),
        quit: component.getByTitle('Quit'),
        ...component
    }
}

function getRomajiInput(): HTMLElement {
    return screen.getByPlaceholderText('Enter the Rōmaji');
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

test('Answering correctly after having used a hint that question should reduce the hint quantity by 1', () => {
    props.settings = new GameSettingsBuilder()
        .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(HintQuantity.FIVE).build())
        .build();

    const { submit, hint } = setup();

    fireEvent.click(hint);
    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);

    expect(screen.getByText('(4)')).toBeInTheDocument();
});

test('Answering correctly without using a hint that question should not reduce the hint quantity', () => {
    props.settings = new GameSettingsBuilder()
        .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(HintQuantity.FIVE).build())
        .build();

    const { submit } = setup();

    fireEvent.change(getRomajiInput(), { target: { value: 'a' } });
    fireEvent.click(submit);

    expect(screen.getByText('(5)')).toBeInTheDocument();
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
        .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(LifeQuantity.FIVE).build())
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
        reason: undefined,
        success: true,
        livesRemaining: 5,
        totalQuestionsOffered: 5,
        correctAnswers: new Set([a, i, u, e, o]),
        wrongAnswers: [],
        duration: "00:30"
    });
});

test('Answering all questions correctly should call the onFinish even handler with undefined time if no timer', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withTimeSettings(new TimeSettingsBuilder().isTimed(false).isCountDown(false).build())
        .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(LifeQuantity.FIVE).build())
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
        reason: undefined,
        success: true,
        livesRemaining: 5,
        totalQuestionsOffered: 5,
        correctAnswers: new Set([a, i, u, e, o]),
        wrongAnswers: [],
        duration: undefined
    });
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
        .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(LifeQuantity.ONE).build())
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
        reason: FailureReason.NO_LIVES_REMAINING,
        success: false,
        livesRemaining: 0,
        totalQuestionsOffered: 5,
        correctAnswers: new Set([a, i]),
        wrongAnswers: [u],
        duration: "00:12"
    });
});

test('Answering incorrectly with 1 life remaining should call the onFinish event handler with undefined duration if no timer', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withTimeSettings(new TimeSettingsBuilder().isTimed(false).isCountDown(false).build())
        .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(LifeQuantity.ONE).build())
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
        reason: FailureReason.NO_LIVES_REMAINING,
        success: false,
        livesRemaining: 0,
        totalQuestionsOffered: 5,
        correctAnswers: new Set([a, i]),
        wrongAnswers: [u],
        duration: undefined
    });
});

test('Answering incorrectly when lives are enabled should reduce the lives by 1', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(LifeQuantity.FIVE).build())
        .build();

    const { submit } = setup();

    expect(screen.getByText('5')).toBeInTheDocument();
    fireEvent.change(getRomajiInput(), { target: { value: 'e' } });
    fireEvent.click(submit);

    expect(screen.getByText('4')).toBeInTheDocument();
});

test('Enabling lives should render the LifeDisplay', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(LifeQuantity.TEN).build())
        .build();
    setup();
    expect(screen.getByTitle('Lives')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
});

test('Disabling lives should not render the LifeDisplay', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withLifeSettings(new LifeSettingsBuilder().isEnabled(false).build())
        .build();
    setup();
    expect(screen.queryByTitle('Lives')).not.toBeInTheDocument();
});

test('Enabling hints should render the HintButton in an enabled state', () => {
    props.settings = new GameSettingsBuilder().fromExisting(props.settings)
        .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(HintQuantity.THREE).build())
        .build();
    const { hint } = setup();
    expect(hint).not.toBeDisabled();
});

test('Disabling hints should render the HintButton in a disabled state', () => {
    props.settings = new GameSettingsBuilder().withHintSettings(new HintSettingsBuilder().isEnabled(false).build()).build();
    const { hint } = setup();
    expect(hint).toBeDisabled();
});

test('Using the hint button twice in the same kana shouldn\'t use another hint', async () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(HintQuantity.THREE).build())
        .build();

    const { hint } = setup();

    fireEvent.click(hint);
    expect(screen.getByTitle('Need a hint? (2/3 remaining)')).toBeInTheDocument();

    fireEvent.click(hint);
    await waitForElementToBeRemoved(() => screen.getByTitle('Need a hint? (2/3 remaining)'));

    fireEvent.click(hint);
    expect(screen.getByTitle('Need a hint? (2/3 remaining)')).toBeInTheDocument();
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
        .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(LifeQuantity.TEN).build())
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

test('Failing to correctly answer the question before the countdown finishes should reduce the hints if one was used', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withTimeSettings(new TimeSettingsBuilder().isCountDown().withSecondsPerQuestion(5).build())
        .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(HintQuantity.FIVE).build())
        .build();

    const { hint } = setup();

    expect(screen.getByText('(5)')).toBeInTheDocument();
    fireEvent.click(hint);
    jest.advanceTimersByTime(6000);
    expect(screen.getByText('(4)')).toBeInTheDocument();
});

test('Failing to correctly answer the question before the countdown finishes should not reduce the hints if they weren\'t used', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withTimeSettings(new TimeSettingsBuilder().isCountDown().withSecondsPerQuestion(5).build())
        .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(HintQuantity.FIVE).build())
        .build();

    setup();

    expect(screen.getByText('(5)')).toBeInTheDocument();
    jest.advanceTimersByTime(6000);
    expect(screen.getByText('(5)')).toBeInTheDocument();
});

test('Setting the question type as \'Romaji\' should render a RomajiQuestion', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.ROMAJI).build())
        .build();
    setup();
    expect(screen.getByText('あ')).toBeInTheDocument();
});

test('Setting the question type as \'Kana\' should render a KanaChoiceQuestion', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.KANA).withCardQuantity(2).build())
        .build();

    setup();

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('あ')).toBeInTheDocument();

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('い')).toBeInTheDocument();

    expect(screen.queryByText('3')).not.toBeInTheDocument();
});

test('Setting the game settings score property to true should render the score', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.KANA).withCardQuantity(2).withScoreTracking(true).build())
        .build();
    setup();
    expect(screen.getByText('0')).toBeInTheDocument();
});

test('Setting the game settings score property to false should not render the score', () => {
    props.settings = new GameSettingsBuilder()
        .fromExisting(props.settings)
        .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.KANA).withCardQuantity(2).withScoreTracking(false).build())
        .build();
    setup();
    expect(screen.queryByText('0')).not.toBeInTheDocument();
});

test('Clicking the quit button should render the confirmation modal', () => {
    environment.mockReturnValueOnce("Are you sure you want to quit?");
    environment.mockReturnValueOnce("This is the modal body.");
    const { quit } = setup();
    fireEvent.click(quit);
    expect(screen.getByText('Are you sure you want to quit?')).toBeInTheDocument();
    expect(screen.getByText('This is the modal body.')).toBeInTheDocument();
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
        reason: FailureReason.QUIT,
        success: false,
        livesRemaining: 0,
        totalQuestionsOffered: 5,
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
        .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(LifeQuantity.FIVE).build())
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