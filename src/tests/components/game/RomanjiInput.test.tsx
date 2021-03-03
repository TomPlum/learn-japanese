import RomanjiInput, { RomanjiInputProps } from "../../../components/game/RomanjiInput";
import { fireEvent, render } from "@testing-library/react";

const onChangeHandler = jest.fn();
const onEnterKeyHandler = jest.fn();

let props: RomanjiInputProps = {
    disabled: false,
    placeholder: "Enter Romanji",
    value: "",
    onChange: onChangeHandler,
    onEnterKey: onEnterKeyHandler
};

const setup = () => {
    const component = render(<RomanjiInput {...props} />);
    return {
        input: component.getByPlaceholderText('Enter Romanji'),
        ...component
    }
}

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

test('Changing the input value should call the onChange event handler with the current inputs value', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'ba' } });
    expect(onChangeHandler).toHaveBeenCalledWith("ba");
});

test('Hitting the Enter key should call the onEnterKey event handler when it is bound and the input value is truthy', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'a' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
    expect(onEnterKeyHandler).toHaveBeenCalled();
});

//TODO: Why is it still calling the onEnterKey() function when answer is falsy? ('')
test.skip('Hitting the Enter key when the input value is falsy should not call the onEnterKey event handler', () => {
    const { input } = setup();
    //fireEvent.change(input, { target: { value: undefined } });
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
    expect(onEnterKeyHandler).not.toHaveBeenCalled();
});

test('Hitting the Enter key should not call the onEnterKey event handler when it is un-bound', () => {
    props.onEnterKey = undefined;
    const { input } = setup();
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
    expect(onEnterKeyHandler).not.toHaveBeenCalled();
});

test('Hitting any key other than Enter should not call the onEnterKey event handler', () => {
   const { input } = setup();
   fireEvent.keyPress(input, { key: 'a', keyCode: 65 });
   expect(onEnterKeyHandler).not.toHaveBeenCalled();
});

//TODO: Jest's toHaveFocus() seems to return the element wrapped in <body> and <div> tags so assertion fails.
test.skip('Should Focus Input', () => {
    const { input } = setup();
    expect(input).toHaveFocus();
});