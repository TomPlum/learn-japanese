import { render, screen } from "@testing-library/react";
import KanaTile, { KanaTileProps } from "../../../../components/ui/kana/KanaTile";
import { Kana } from "../../../../domain/kana/Kana";
import KanaType from "../../../../domain/kana/KanaType";
import { KanaColumn } from "../../../../domain/kana/KanaColumn";

const props: KanaTileProps = { kana: new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false) };

const setup = () => {
    const component = render(<KanaTile {...props} />);
    return {
        hiragana: screen.queryByTitle('Hiragana'),
        katakana: screen.queryByTitle('Katakana'),
        diagraph: screen.queryByTitle('Diagraph'),
        diacritical: screen.queryByTitle('Diacritical'),
        ...component
    }
}

test('Kana from the Hiragana syllabary should show the Hiragana type indicator', () => {
    props.kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
    const { hiragana, diagraph, diacritical } = setup();
    expect(hiragana).toBeInTheDocument();
    expect(diagraph).not.toBeInTheDocument();
    expect(diacritical).not.toBeInTheDocument();
});

test('Kana from the Katakana syllabary should show the Katakana type indicator', () => {
    render(<KanaTile kana={new Kana("ア", ["a"], KanaType.KATAKANA, KanaColumn.VOWEL, false)}/>);
    expect(screen.getByTitle('Katakana')).toBeInTheDocument();
});

test('Diagraph kana should show the Diagraph type indicator', () => {
    props.kana = new Kana("にゅ", ["nyu"], KanaType.HIRAGANA, KanaColumn.N, false);
    const { hiragana, diagraph, diacritical } = setup();
    expect(hiragana).toBeInTheDocument();
    expect(diagraph).toBeInTheDocument();
    expect(diacritical).not.toBeInTheDocument();
});

test('Diacritical diagraph kana should show the Diagraph type indicator', () => {
    props.kana = new Kana("ぴょ", ["pyo"], KanaType.HIRAGANA, KanaColumn.H, true);
    const { hiragana, diagraph, diacritical } = setup();
    expect(hiragana).toBeInTheDocument();
    expect(diagraph).toBeInTheDocument();
    expect(diacritical).toBeInTheDocument();
});
