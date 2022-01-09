import { render } from "@testing-library/react";
import GenkiUnderlineDisplay from "../../../../components/ui/display/GenkiUnderlineDisplay";
import { getByTextWithElements } from "../../../Queries";

test("Should render the text content of the immediate child component", () => {
    render(
        <GenkiUnderlineDisplay underline="test" book={1}>
            <span>This is a test example.</span>
        </GenkiUnderlineDisplay>
    );
    const text = getByTextWithElements("This is a test example.");
    expect(text).toBeInTheDocument();
});

test("Should render the underlined text with the genkiOneUnderline class if the book is 1", () => {
    const component = render(
        <GenkiUnderlineDisplay underline="test" book={1}>
            <span>This is a test example.</span>
        </GenkiUnderlineDisplay>
    );
    const underlined = component.getByText('test');
    expect(underlined).toHaveClass('genkiOneUnderline');
});

test("Should render the underlined text with the genkiTwoUnderline class if the book is 2", () => {
    const component = render(
        <GenkiUnderlineDisplay underline="test" book={2}>
            <span>This is a test example.</span>
        </GenkiUnderlineDisplay>
    );
    const underlined = component.getByText('test');
    expect(underlined).toHaveClass('genkiTwoUnderline');
});
