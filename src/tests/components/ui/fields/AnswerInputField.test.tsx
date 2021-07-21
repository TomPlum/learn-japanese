import { fireEvent, render, screen } from "@testing-library/react";
import AnswerInputField, { AnswerInputFieldProps } from "../../../../components/ui/fields/AnswerInputField";
import LearnableField from "../../../../types/learn/LearnableField";

let props: AnswerInputFieldProps;

const onChangeHandler = jest.fn();

beforeEach(() => {
    props = {
        value: "Fish",
        field: LearnableField.MEANING,
        className: "inputFieldClassName",
        disabled: false,
        placeholder: "Enter English Meaning",
        onChange: onChangeHandler
    }
});

const setup = () => {
    const component = render(<AnswerInputField {...props} />);
    return {
        input: component.getByPlaceholderText("Enter English Meaning"),
        help: component.getByTestId("help"),
        ...component
    }
}

test("It should set the passed value in the input field", () => {
    const { input } = setup();
    expect(input).toHaveValue("Fish");
});

test("It should disable the input field when disabled is passed as true", () => {
    props.disabled = true;
    const { input } = setup();
    expect(input).toBeDisabled();
});

test("It should enable the input field when disabled is passed as false", () => {
    props.disabled = false;
    const { input } = setup();
    expect(input).not.toBeDisabled();
});

test("It should pass the passed className to the input", () => {
    const { input } = setup();
    expect(input).toHaveClass("inputFieldClassName");
});

test("It should call the onChange handler with the value if it matches the passed fields' validation regex", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "value with spaces" }});
    expect(onChangeHandler).toHaveBeenLastCalledWith("value with spaces");
});

test("It should not call the onChange handler if the value does not match the passed fields' validation regex", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "value with 123 numbers" }});
    expect(onChangeHandler).not.toHaveBeenCalled();
});

test("It should set the help pop-over title and text to the data in the passed field", () => {
    const { help } = setup();

    fireEvent.mouseOver(help);

    expect(screen.getByTitle("English Meaning"));
    expect(screen.getByText("The meaning of the word or character in English. Usually a single word."));
});