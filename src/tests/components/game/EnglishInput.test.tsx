import { fireEvent, render, screen } from "@testing-library/react";
import EnglishInput, { EnglishInputProps } from "../../../components/game/EnglishInput";
import each from "jest-each";

const onChangeHandler = jest.fn();

let props: EnglishInputProps;

beforeEach(() => {
    props = {
        placeholder: "English Meaning",
        onChange: onChangeHandler
    }
});

const setup = () => {
    const component = render(<EnglishInput {...props} />);
    return {
        input: component.getByPlaceholderText('English Meaning'),
        help: component.getByTestId('help'),
        ...component
    }
}

test("Hovering over the help icon should display a popover", () => {
    const { help } = setup();
    fireEvent.mouseOver(help);
    expect(screen.getByTitle('English Meaning')).toBeInTheDocument();
    expect(screen.getByText('Enter one of the meanings as a single English word.')).toBeInTheDocument();
});

test("Passing in the disabled prop as true should disable the field", () => {
    props.disabled = true;
    const { input } = setup();
    expect(input).toBeDisabled();
});

test("Passing in the disabled prop as false should enable the field", () => {
    props.disabled = false;
    const { input } = setup();
    expect(input).not.toBeDisabled();
});

it("Should set the input value to the given value property", () => {
    props.value = "This is my value";
    const { input } = setup();
    expect(input).toHaveValue("This is my value");
});

each(["nospace", "with spaces"]).test("Should allow alpha characters and spaces [%s]", (value: string) => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: value } });
    expect(onChangeHandler).toHaveBeenCalledWith(value);
});

each(["test123", "hello-"]).test("Should not allow numeric characters or symbols [%s]", (value: string) => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: value } });
    expect(onChangeHandler).not.toHaveBeenCalled();
});

it("Should pass the className property to the field", () => {
    props.className = "My Class";
    const { input } = setup();
    expect(input).toHaveClass("My Class");
});