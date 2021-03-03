import { render, screen } from "@testing-library/react";
import KanaQuestionBanner from "../../../components/game/KanaQuestionBanner";
import { Kana } from "../../../types/Kana";
import KanaType from "../../../types/KanaType";
import { KanaColumn } from "../../../types/KanaColumn";

test('Regular kana should use the word \'kana\' in the banner message', () => {
    const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
    render(<KanaQuestionBanner value={kana} />);
    expect(getByTextWithElements('Which kana is \'a\' ?')).toBeInTheDocument();
});

test('Diagraph kana should use the word \'diagraph\' in the banner message', () => {
    const kana = new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true);
    render(<KanaQuestionBanner value={kana} />);
    expect(getByTextWithElements('Which diagraph is \'bya\' ?')).toBeInTheDocument();
});

test('Kana with multiple pronunciations should display both separated by \'or\'', () => {
    const kana = new Kana("ふ", ["fu", "hu"], KanaType.HIRAGANA, KanaColumn.H, false);
    render(<KanaQuestionBanner value={kana} />);
    expect(getByTextWithElements('Which kana is \'fu\' or \'hu\' ?')).toBeInTheDocument();
});

//TODO: Fix TypeScript complaints about the parameter types and move to global file as helper function.
const getByTextWithElements = (text: string) => {
    // @ts-ignore
    return screen.getByText((content, element) => {
        return content !== '' && element && element.textContent === text;
    });
}