import { render, screen } from "@testing-library/react";
import AnswerMistake from "../../../components/results/AnswerMistake";
import { Kana } from "../../../types/Kana";
import KanaType from "../../../types/KanaType";
import { KanaColumn } from "../../../types/KanaColumn";

test('Should render the passed kana\'s character', () => {
    const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
    render(<AnswerMistake kana={kana} times={3} />);
    expect(screen.getByText('あ')).toBeInTheDocument();
});

test('Should render the passed kana\'s first romanji', () => {
    const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
    render(<AnswerMistake kana={kana} times={3} />);
    expect(screen.getByText('a')).toBeInTheDocument();
});

test('Should render the passed kana\'s number of mistakes', () => {
    const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
    render(<AnswerMistake kana={kana} times={3} />);
    expect(screen.getByText('x3')).toBeInTheDocument();
});