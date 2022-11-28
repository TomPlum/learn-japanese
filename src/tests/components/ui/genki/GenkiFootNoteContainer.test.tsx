import {render} from "@testing-library/react";
import GenkiFootNoteContainer from "../../../../components/ui/genki/GenkiFootNoteContainer";
import GenkiFootNoteDisplay from "../../../../components/ui/genki/GenkiFootNoteDisplay";

test("It should render all the given footnote children", () => {
    const component = render(
        <GenkiFootNoteContainer>
            <GenkiFootNoteDisplay reference={1} book={2}>
                <span>Foot note number 1</span>
            </GenkiFootNoteDisplay>

            <GenkiFootNoteDisplay reference={2} book={2}>
                <span>Foot note number 2</span>
            </GenkiFootNoteDisplay>
        </GenkiFootNoteContainer>
    );

    expect(component.getAllByTestId('genki-foot-note').length).toBe(2);
});

test("It should clone and inject the note class to each of the footnote children", () => {
    const component = render(
        <GenkiFootNoteContainer>
            <GenkiFootNoteDisplay reference={1} book={2}>
                <span>Foot note number</span>
            </GenkiFootNoteDisplay>
        </GenkiFootNoteContainer>
    );

    expect(component.getByTestId('genki-foot-note')).toHaveClass('note');
});