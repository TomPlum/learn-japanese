import { render } from "@testing-library/react";
import Underline, { FirstMatch, Occurrences } from "../../../components/ui/Underline";
import { getByTextWithElements, getByTextWithMarkup } from "../../Queries";

describe("First Match Strategy", () => {
    test("Should render the whole text content from the immediate child component", () => {
        render(
            <Underline strategy={new FirstMatch("test")}>
                <span>This is test text.</span>
            </Underline>
        );
        const text = getByTextWithElements('This is test text.');
        expect(text).toBeInTheDocument();
    });

    test("Should apply the given class to the underlined text", () => {
        const component = render(
            <Underline strategy={new FirstMatch("test")} underlineClass="myClass">
                <span>This is test text.</span>
            </Underline>
        );
        const underlined = component.getByText('test');
        expect(underlined).toHaveClass('myClass');
    });
});

describe("Occurrences Strategy", () => {
    it("Should render the whole text", () => {
        render(
            <Underline strategy={new Occurrences("し", [1, 3])} underlineClass="myClass">
                <span>家族はら手紙が来たし、かれと電話で話したし、きのうはとてもいい日でした。</span>
            </Underline>
        );
        const text = getByTextWithMarkup('家族はら手紙が来たし、かれと電話で話したし、きのうはとてもいい日でした。');
        expect(text).toBeInTheDocument();
    });

    it("Should highlight only the specified occurrences", () => {
        const component = render(
            <Underline strategy={new Occurrences("し", [1, 3])} underlineClass="myClass">
                <span>家族はら手紙が来たし、かれと電話で話したし、きのうはとてもいい日でした。</span>
            </Underline>
        );
        const underlineCharacterMatches = component.getAllByText('し');
        expect(underlineCharacterMatches[0]).toHaveClass('myClass');
        expect(underlineCharacterMatches[1]).toHaveClass('myClass');
    });
});
