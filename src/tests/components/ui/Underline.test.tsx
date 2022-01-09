import { render } from "@testing-library/react";
import Underline from "../../../components/ui/Underline";
import { getByTextWithElements } from "../../Queries";

test("Should render the whole text content from the immediate child component", () => {
    render(
        <Underline underline="test">
            <span>This is test text.</span>
        </Underline>
    );
    const text = getByTextWithElements('This is test text.');
    expect(text).toBeInTheDocument();
});

test("Should apply the given class to the underlined text", () => {
    const component = render(
        <Underline underline="test" underlineClass="myClass">
            <span>This is test text.</span>
        </Underline>
    );
    const underlined = component.getByText('test');
    expect(underlined).toHaveClass('myClass');
});
