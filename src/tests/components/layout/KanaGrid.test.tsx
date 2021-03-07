import { render, screen } from "@testing-library/react";
import KanaGrid from "../../../components/layout/KanaGrid";
import { Kana } from "../../../types/Kana";
import KanaType from "../../../types/KanaType";
import { KanaColumn } from "../../../types/KanaColumn";

const kana = [
    new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
    new Kana("い", ["i"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
    new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
    new Kana("お", ["o"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
];

test('Should render a tile for each of the kana', () => {
    render(<KanaGrid kana={kana}/>);
    expect(screen.getByText('あ')).toBeInTheDocument();
    expect(screen.getByText('い')).toBeInTheDocument();
    expect(screen.getByText('え')).toBeInTheDocument();
    expect(screen.getByText('お')).toBeInTheDocument();
});

test('Should not render the grid if there are no kana passed in', () => {
    render(<KanaGrid kana={[]}/>);
    expect(screen.getByText('No results.')).toBeInTheDocument();
});