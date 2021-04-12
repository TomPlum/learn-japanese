import RomajiInput, { RomajiInputProps } from "../../../components/game/RomajiInput";
import { fireEvent, render, screen } from "@testing-library/react";
import each from "jest-each";

const onChangeHandler = jest.fn();

let props: RomajiInputProps;

const setup = () => {
    const component = render(<RomajiInput {...props} />);
    return {
        input: component.getByPlaceholderText('Enter Rōmaji'),
        help: component.getByTestId('help'),
        ...component
    }
}

beforeEach(() => {
    props = {
        disabled: false,
        placeholder: "Enter Rōmaji",
        value: "",
        onChange: onChangeHandler,
    };
});

test('When the passed disabled property is true it should disable the input field', () => {
    props.disabled = true;
    const { input } = setup();
    expect(input).toBeDisabled();
});

test('The passed value property should populate the input field value', () => {
    props.value = "ka";
    const { input } = setup();
    expect(input).toHaveValue("ka");
});

test('Changing the input value should call the onChange event handler with the inputs current value', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'ba' } });
    expect(onChangeHandler).toHaveBeenCalledWith("ba");
});

//TODO: Jest's toHaveFocus() seems to return the element wrapped in <body> and <div> tags so assertion fails.
test.skip('Should Focus Input', () => {
    const { input } = setup();
    expect(input).toHaveFocus();
});

test('Hovering over help should render the popover', () => {
    const { help } = setup();
    fireEvent.mouseOver(help);
    expect(screen.getByTitle('What is Rōmaji?')).toBeInTheDocument();
});

test('Clicking the help icon should render the popover', () => {
    const { help } = setup();
    fireEvent.click(help);
    expect(screen.getByTitle('What is Rōmaji?')).toBeInTheDocument();
});

each([
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
]).test('The input should accept the letter %s', (letter: string) => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: letter } });
    expect(onChangeHandler).toHaveBeenCalledWith(letter);
});

each([
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '@', '#', '/', ' '
]).test('The input should not accept numbers or special characters', (character: string) => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: character } });
    expect(onChangeHandler).not.toHaveBeenCalled();
});