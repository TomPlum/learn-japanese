import { render } from "@testing-library/react";
import QuestionDisplay from "../../../../components/ui/display/QuestionDisplay";

test("It should display the given string value", () => {
    const component = render(<QuestionDisplay question="hello" />);
    expect(component.getByText('hello')).toBeInTheDocument();
});