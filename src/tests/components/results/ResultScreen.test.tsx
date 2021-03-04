import { fireEvent, render, screen } from "@testing-library/react";
import ResultScreen from "../../../components/results/ResultScreen";
import GameResult from "../../../types/GameResult";
import { Kana } from "../../../types/Kana";
import KanaType from "../../../types/KanaType";
import { KanaColumn } from "../../../types/KanaColumn";
import { FailureReason } from "../../../types/FailureReason";

let result: GameResult;

beforeEach(() => {
    result = {
        success: false,
        wrongAnswers: [new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)],
        correctAnswers: new Set<Kana>(),
        reason: FailureReason.NO_LIVES_REMAINING,
        duration: "00:25",
        totalKanaOffered: 1,
        livesRemaining: 0,
    };
});

const onCloseHandler = jest.fn();

const setup = () => {
    const component = render(<ResultScreen onClose={onCloseHandler} result={result} />);
    return {
        quit: component.getByTitle('Quit'),
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

test('Clicking the quit button should call the onClose event handler', () => {
    const { quit } = setup();
    fireEvent.click(quit);
    expect(onCloseHandler).toHaveBeenCalled();
});