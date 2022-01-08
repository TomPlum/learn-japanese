import { render, screen } from "@testing-library/react";
import GenkiComparisonDisplay from "../../../../components/ui/display/GenkiComparisonDisplay";

test('Should render the pre text if passed', () => {
    const component = render(<GenkiComparisonDisplay
        book={1}
        pre="This is the pre-text"
        firstComparison={{ text: "First Comparison", underline: "First" }}
        secondComparison={{ text: "Second Comparison" }}
        meaning={"This is the meaning."}
    />);
    const preText = component.getByText('This is the pre-text');
    expect(preText).toBeInTheDocument();
});

test('Should render the first comparison text', () => {
    const component = render(<GenkiComparisonDisplay
        book={1}
        pre="This is the pre-text"
        firstComparison={{ text: "First Comparison" }}
        secondComparison={{ text: "Second Comparison" }}
        meaning={"This is the meaning."}
    />);
    const preText = component.getByText('First Comparison');
    expect(preText).toBeInTheDocument();
});

test('Should render the second comparison text', () => {
    const component = render(<GenkiComparisonDisplay
        book={1}
        pre="This is the pre-text"
        firstComparison={{ text: "First Comparison" }}
        secondComparison={{ text: "Second Comparison" }}
        meaning={"This is the meaning."}
    />);
    const preText = component.getByText('Second Comparison');
    expect(preText).toBeInTheDocument();
});

test('Should render the post text if given', () => {
    const component = render(<GenkiComparisonDisplay
        book={1}
        pre="This is the pre-text"
        firstComparison={{ text: "First Comparison" }}
        secondComparison={{ text: "Second Comparison" }}
        post="This it the post-text"
        meaning={"This is the meaning."}
    />);
    const preText = component.getByText('This it the post-text');
    expect(preText).toBeInTheDocument();
});

test('Should render the meaning', () => {
    const component = render(<GenkiComparisonDisplay
        book={1}
        pre="This is the pre-text"
        firstComparison={{ text: "First Comparison" }}
        secondComparison={{ text: "Second Comparison" }}
        meaning={"This is the meaning."}
    />);
    const preText = component.getByText('This is the meaning.');
    expect(preText).toBeInTheDocument();
});

test('Should render the first comparison underline with the genkiOne class if the book is passed as 1', () => {
    const component = render(<GenkiComparisonDisplay
        book={1}
        firstComparison={{ text: "First Comparison", underline: "First" }}
        secondComparison={{ text: "Second Comparison" }}
        meaning={"This is the meaning."}
    />);
    const underlinedText = component.getByText('First');
    expect(underlinedText).toHaveClass('genkiOneUnderline');
});

test('Should render the first comparison underline with the genkiTwo class if the book is passed as 2', () => {
    const component = render(<GenkiComparisonDisplay
        book={2}
        firstComparison={{ text: "First Comparison", underline: "First" }}
        secondComparison={{ text: "Second Comparison" }}
        meaning={"This is the meaning."}
    />);
    const underlinedText = component.getByText('First');
    expect(underlinedText).toHaveClass('genkiTwoUnderline');
});


test('Should render the second comparison underline with the genkiOne class if the book is passed as 1', () => {
    const component = render(<GenkiComparisonDisplay
        book={1}
        firstComparison={{ text: "First Comparison" }}
        secondComparison={{ text: "Second Comparison", underline: "Second" }}
        meaning={"This is the meaning."}
    />);
    const underlinedText = component.getByText('Second');
    expect(underlinedText).toHaveClass('genkiOneUnderline');
});

test('Should render the second comparison underline with the genkiTwo class if the book is passed as 2', () => {
    const component = render(<GenkiComparisonDisplay
        book={2}
        firstComparison={{ text: "First Comparison" }}
        secondComparison={{ text: "Second Comparison", underline: "Second" }}
        meaning={"This is the meaning."}
    />);
    const underlinedText = component.getByText('Second');
    expect(underlinedText).toHaveClass('genkiTwoUnderline');
});
