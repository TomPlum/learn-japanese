import { render } from "@testing-library/react";
import GenkiExampleDisplay from "../../../../components/ui/genki/GenkiExampleDisplay";
import { FirstMatch } from "../../../../components/ui/Underline";

test("Should render the Japanese text", () => {
    const component = render(<GenkiExampleDisplay
        book={1}
        jp={{ text: "このりんごはおいしそうです。" }}
        en={{ text: "This apple looks delicious."}}
    />);
    const japanese = component.getByText('このりんごはおいしそうです。');
    expect(japanese).toBeInTheDocument();
});

test("Should render the English text", () => {
    const component = render(<GenkiExampleDisplay
        book={1}
        jp={{ text: "このりんごはおいしそうです。" }}
        en={{ text: "This apple looks delicious." }}
    />);
    const japanese = component.getByText('This apple looks delicious.');
    expect(japanese).toBeInTheDocument();
});

test("Should render the compare text if provided", () => {
    const component = render(<GenkiExampleDisplay
        book={1}
        jp={{ text: "このりんごはおいしそうです。" }}
        en={{ text: "This apple looks delicious." }}
        compare={{ text: "Some comparison citation." }}
    />);
    const compare = component.getByText('cf. Some comparison citation.');
    expect(compare).toBeInTheDocument();
});

test("Should render the underlined Japanese text with the genkiOne class if the book is 1", () => {
    const component = render(<GenkiExampleDisplay
        book={1}
        jp={{ text: "このりんごはおいしそうです。", underline: new FirstMatch("そうです") }}
        en={{ text: "This apple looks delicious." }}
    />);
    const underlined = component.getByText('そうです');
    expect(underlined).toHaveClass('genkiOneUnderline');
});

test("Should render the underlined English text with the genkiOne class if the book is 1", () => {
    const component = render(<GenkiExampleDisplay
        book={1}
        jp={{ text: "このりんごはおいしそうです。",}}
        en={{ text: "This apple looks delicious.", underline: new FirstMatch("looks") }}
    />);
    const underlined = component.getByText('looks');
    expect(underlined).toHaveClass('genkiOneUnderline');
});

test("Should render the underlined Japanese text with the genkiTwo class if the book is 2", () => {
    const component = render(<GenkiExampleDisplay
        book={2}
        jp={{ text: "このりんごはおいしそうです。", underline: new FirstMatch("そうです") }}
        en={{ text: "This apple looks delicious." }}
    />);
    const underlined = component.getByText('そうです');
    expect(underlined).toHaveClass('genkiTwoUnderline');
});

test("Should render the underlined English text with the genkiTwo class if the book is 2", () => {
    const component = render(<GenkiExampleDisplay
        book={2}
        jp={{ text: "このりんごはおいしそうです。",}}
        en={{ text: "This apple looks delicious.", underline: new FirstMatch("looks") }}
    />);
    const underlined = component.getByText('looks');
    expect(underlined).toHaveClass('genkiTwoUnderline');
});

test("Should render the underlined compare text with the genkiTwo class if the book is 2", () => {
    const component = render(<GenkiExampleDisplay
        book={2}
        jp={{ text: "このりんごはおいしそうです。", underline: new FirstMatch("そうです") }}
        en={{ text: "This apple looks delicious." }}
        compare={{ text: "comparison text.", underline: new FirstMatch("text") }}
    />);
    const underlined = component.getByText('text');
    expect(underlined).toHaveClass('genkiTwoUnderline');
});

test("Should render the underlined compare text with the genkiTwo class if the book is 2", () => {
    const component = render(<GenkiExampleDisplay
        book={2}
        jp={{ text: "このりんごはおいしそうです。" }}
        en={{ text: "This apple looks delicious.", underline: new FirstMatch("looks") }}
        compare={{ text: "comparison text.", underline: new FirstMatch("text") }}
    />);
    const underlined = component.getByText('text');
    expect(underlined).toHaveClass('genkiTwoUnderline');
});

test("Should render furigana display for the japanese text if passed the correct props", () => {
    const component = render(<GenkiExampleDisplay
        book={2}
        jp={{  chars: [
                { pre: 'ドマさんは', kanji: '窓', kana: 'まど' },
                { pre: 'を', kanji: '開', kana: 'あ', okurigana: 'け', post: 'ています。' }
            ],
            position: 'bottom'
        }}
        en={{ text: "This apple looks delicious.", underline: new FirstMatch("looks") }}
        compare={{ text: "comparison text.", underline: new FirstMatch("text") }}
    />);

    expect(component.getByTestId('furigana-display')).toBeInTheDocument();
});

test("Should render with marginLeft 0px if the noIndent prop is passed as true", () => {
    const component = render(<GenkiExampleDisplay
        book={2}
        noIndent
        jp={{ text: "このりんごはおいしそうです。" }}
        en={{ text: "This apple looks delicious.", underline: new FirstMatch("looks") }}
    />);

    expect(component.getByTestId('genki-example-display')).toHaveStyle({ 'marginLeft': 0 });
});

test("Should render the incorrect x-symbol when the incorrect property is passed as true", () => {
    const component = render(<GenkiExampleDisplay
        book={2}
        incorrect={true}
        jp={{ text: "このりんごはおいしそうです。" }}
        en={{ text: "This apple looks delicious.", underline: new FirstMatch("looks") }}
    />);

    expect(component.getByTestId('incorrect-example')).toBeInTheDocument();
});

test("Should NOT render the incorrect x-symbol when the incorrect property is passed as false", () => {
    const component = render(<GenkiExampleDisplay
        book={2}
        incorrect={false}
        jp={{ text: "このりんごはおいしそうです。" }}
        en={{ text: "This apple looks delicious.", underline: new FirstMatch("looks") }}
    />);

    expect(component.queryByTestId('incorrect-example')).not.toBeInTheDocument();
});

test("Should render the english text with marginLeft 20px if the incorrect prop is passed as true", () => {
    const component = render(<GenkiExampleDisplay
        book={2}
        incorrect={true}
        jp={{ text: "このりんごはおいしそうです。" }}
        en={{ text: "This apple looks delicious.", underline: new FirstMatch("looks") }}
    />);

    expect(component.getByTestId('genki-example-en')).toHaveStyle({ 'marginLeft': '20px' });
});

test("Should render the comparison text with marginLeft 20px if the incorrect prop is passed as true", () => {
    const component = render(<GenkiExampleDisplay
        book={2}
        incorrect={true}
        jp={{ text: "このりんごはおいしそうです。" }}
        en={{ text: "This apple looks delicious.", underline: new FirstMatch("looks") }}
        compare={{ text: "comparison text.", underline: new FirstMatch("text") }}
    />);

    expect(component.getByTestId('genki-example-compare')).toHaveStyle({ marginLeft: '20px' });
});