import QuestionDisplay from "../../../../components/ui/display/QuestionDisplay";
import renderReduxConsumer from "../../../renderReduxConsumer";

test("It should display the given string value", () => {
    const component = renderReduxConsumer(<QuestionDisplay question="hello" />);
    expect(component.getByText('hello')).toBeInTheDocument();
});
