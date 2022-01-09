import { render } from "@testing-library/react";
import GenkiStructureDisplay from "../../../../components/ui/display/GenkiStructureDisplay";

test("Should render the given children", () => {
    const component = render(
        <GenkiStructureDisplay book={1}>
            <p>This is an example.</p>
        </GenkiStructureDisplay>
    );
    const text = component.getByText('This is an example.');
    expect(text).toBeInTheDocument();
});

test("Should render the wrapper with the genkiOne class if the book is 1", () => {
    const { container } = render(
        <GenkiStructureDisplay book={1}>
            <p>This is an example.</p>
        </GenkiStructureDisplay>
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('genkiOne');
});

test("Should render the wrapper with the genkiTwo class if the book is 2", () => {
    const { container } = render(
        <GenkiStructureDisplay book={2}>
            <p>This is an example.</p>
        </GenkiStructureDisplay>
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('genkiTwo');
});

test("Should render the wrapper with inline-block display attribute if the width is auto", () => {
    const { container } = render(
        <GenkiStructureDisplay book={2} width="auto">
            <p>This is an example.</p>
        </GenkiStructureDisplay>
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveProperty('style._values.display', 'inline-block');
});

test("Should render the wrapper with the given width if the width is an integer", () => {
    const { container } = render(
        <GenkiStructureDisplay book={2} width={450}>
            <p>This is an example.</p>
        </GenkiStructureDisplay>
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveProperty('style._values.width', "450px");
});
