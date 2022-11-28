import {render} from "@testing-library/react";
import GenkiFootNoteDisplay from "../../../../components/ui/genki/GenkiFootNoteDisplay";

test("Should render the children", () => {
    const component = render(
        <GenkiFootNoteDisplay reference={1} book={2}>
            <span>Some Footnote</span>
        </GenkiFootNoteDisplay>
    );
    expect(component.getByText('Some Footnote')).toBeInTheDocument();
});

test("Should render the reference number", () => {
    const component = render(<GenkiFootNoteDisplay reference={1} book={2} />);
    expect(component.getByText('1')).toBeInTheDocument();
});

test("Should render the reference number with the bookOne class when the book is 1", () => {
    const component = render(<GenkiFootNoteDisplay reference={1} book={1} />);
    expect(component.getByTestId('genki-foot-note-ref')).toHaveClass('refBookOne');
});

test("Should render the reference number with the bookTwo class when the book is 2", () => {
    const component = render(<GenkiFootNoteDisplay reference={1} book={2} />);
    expect(component.getByTestId('genki-foot-note-ref')).toHaveClass('refBookTwo');
});