import { fireEvent, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import GameResultScreen from "../../../components/results/GameResultScreen";
import GameResult from "../../../types/game/GameResult";
import { Kana } from "../../../types/kana/Kana";
import KanaType from "../../../types/kana/KanaType";
import { KanaColumn } from "../../../types/kana/KanaColumn";
import { FailureReason } from "../../../types/game/FailureReason";
import { GameSettingsBuilder } from "../../../types/session/settings/game/GameSettings";
import { LifeSettingsBuilder } from "../../../types/session/settings/game/LifeSettings";
import { HintSettingsBuilder } from "../../../types/session/settings/game/HintSettings";
import { TimeSettingsBuilder } from "../../../types/session/settings/game/TimeSettings";

let result: GameResult;

beforeEach(() => {
    result = {
        settings: new GameSettingsBuilder().build(),
        success: false,
        wrongAnswers: [new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)],
        correctAnswers: new Set<Kana>(),
        reason: FailureReason.NO_LIVES_REMAINING,
        duration: "00:25",
        livesRemaining: 0,
        hintsRemaining: 0
    };
});

const onCloseHandler = jest.fn();

const setup = () => {
    const component = render(<GameResultScreen onClose={onCloseHandler} result={result} />);
    return {
        quit: component.getByText('Finish'),
        mistakes: component.getByText('View Mistakes'),
        ...component
    }
}

test('Should render the congratulatory title when the user was successful', () => {
    result.success = true;
    setup();
    expect(screen.getByText('Congratulations, you won!')).toBeInTheDocument();
});

test('Should render the correct title when the failure reason is No Lives Remaining', () => {
    setup();
    expect(screen.getByText('Oh no! You ran out of lives!')).toBeInTheDocument();
});

test('Should render the correct title when the failure reason is Ran Out Of Time', () => {
    result.reason = FailureReason.NO_TIME_REMAINING;
    setup();
    expect(screen.getByText('Oh no! You ran out of time!')).toBeInTheDocument();
});

test('Clicking the finish button should call the onClose event handler', () => {
    const { quit } = setup();
    fireEvent.click(quit);
    expect(onCloseHandler).toHaveBeenCalled();
});

test('Should render the lives remaining if lives were enabled', () => {
    result.settings = new GameSettingsBuilder().withLifeSettings(new LifeSettingsBuilder().isEnabled().build()).build();
    result.livesRemaining = 3;
    setup();
    expect(screen.getByText('3 Lives Remaining')).toBeInTheDocument();
});

test('Should not render the lives remaining if lives were disabled', () => {
    result.settings = new GameSettingsBuilder().withLifeSettings(new LifeSettingsBuilder().isEnabled(false).build()).build();
    setup();
    expect(screen.queryByText('Lives Remaining')).not.toBeInTheDocument();
});

test('Should render the hints remaining if hints were enabled', () => {
    result.settings = new GameSettingsBuilder().withHintSettings(new HintSettingsBuilder().isEnabled().build()).build();
    result.hintsRemaining = 2;
    setup();
    expect(screen.getByText('2 Hints Remaining')).toBeInTheDocument();
});

test('Should not render the hints remaining if hints were disabled', () => {
    result.settings = new GameSettingsBuilder().withHintSettings(new HintSettingsBuilder().isEnabled(false).build()).build();
    setup();
    expect(screen.queryByText('Hints Remaining')).not.toBeInTheDocument();
});

test('Should render the completion time if the timer was enabled', () => {
    result.settings = new GameSettingsBuilder().withTimeSettings(new TimeSettingsBuilder().isTimed().build()).build();
    result.duration = "05:23";
    setup();
    expect(screen.getByText('05:23 Completion Time')).toBeInTheDocument();
});

test('Should not render the hints remaining if hints were disabled', () => {
    result.settings = new GameSettingsBuilder().withTimeSettings(new TimeSettingsBuilder().isTimed(false).build()).build();
    setup();
    expect(screen.queryByText('Completion Time')).not.toBeInTheDocument();
});

test('Clicking the mistakes button should render the modal', () => {
    const { mistakes } = setup();
    fireEvent.click(mistakes);
    expect(screen.getByText('Mistakes')).toBeInTheDocument();
});

test('Clicking the close button in the mistakes modal should hide it', async () => {
    const { mistakes } = setup();

    fireEvent.click(mistakes);
    const modal = screen.getByText('Mistakes');
    expect(modal).toBeInTheDocument();

    fireEvent.click(screen.getByText('Close'));
    await waitForElementToBeRemoved(modal);
});
