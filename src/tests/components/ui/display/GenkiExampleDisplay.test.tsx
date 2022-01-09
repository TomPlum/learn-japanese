import { render } from "@testing-library/react";
import GenkiExampleDisplay from "../../../../components/ui/display/GenkiExampleDisplay";
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
