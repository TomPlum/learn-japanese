import { render, screen } from "@testing-library/react";
import AnswerMistake from "../../../components/results/AnswerMistake";
import { Kana } from "../../../types/kana/Kana";
import KanaType from "../../../types/kana/KanaType";
import { KanaColumn } from "../../../types/kana/KanaColumn";

test('Should render the passed kana\'s character', () => {
    const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
    render(<AnswerMistake value={kana} times={3} />);
    expect(screen.getByText('あ')).toBeInTheDocument();
});

test('Should render the passed kana\'s first rōmaji', () => {
    const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
    render(<AnswerMistake value={kana} times={3} />);
    expect(screen.getByText('a')).toBeInTheDocument();
});

test('Should render the passed kana\'s number of mistakes', () => {
    const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
    render(<AnswerMistake value={kana} times={3} />);
    expect(screen.getByText('x3')).toBeInTheDocument();
});