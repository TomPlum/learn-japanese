import { fireEvent, render, screen } from "@testing-library/react";
import KanaSettingsForm from "../../../components/settings/KanaSettingsForm";

const onSelectHandler = jest.fn();

const setup = () => {
    const component = render(<KanaSettingsForm onSelect={onSelectHandler}/>);
    return {
        hiragana: screen.getByTestId('Hiragana'),
        katakana: screen.getByTestId('Katakana'),
        diagraphs: screen.getByTestId('Diagraphs'),
        quantity: screen.getByPlaceholderText('Enter kana quantity'),
        ...component
    }
}

test('Hiragana should be disabled if it selected but Katakana is not', () => {
    const { hiragana } = setup();
    expect(hiragana).toBeDisabled();
});

test('Katakana should be disabled if it selected and Hiragana is not', () => {
    const { hiragana, katakana } = setup();
    fireEvent.click(katakana);
    fireEvent.click(hiragana);
    expect(katakana).toBeDisabled();
});

test('Selecting both Hiragana and Katakana should enable both options', () => {
    const { hiragana, katakana } = setup();
    fireEvent.click(katakana);
    expect(hiragana).not.toBeDisabled();
    expect(katakana).not.toBeDisabled();
});

test('On mount it should call the onSelect event handler with the default settings', () => {
    setup();
    expect(onSelectHandler).toHaveBeenCalledWith({ hiragana: true, katakana: false, diagraphs: false, quantity: 50 });
});

test('Selecting Diagraphs should set the boolean to true in the settings', () => {
    const { diagraphs, rerender } = setup();
    fireEvent.click(diagraphs);
    rerender(<KanaSettingsForm onSelect={onSelectHandler}/>);
    expect(onSelectHandler).toHaveBeenCalledWith({ hiragana: true, katakana: false, diagraphs: true, quantity: 50 });
});

test('Changing the kana quantity should update the value in the settings', () => {
    const { quantity, rerender } = setup();
    fireEvent.change(quantity, { target: { value: 75 } });
    rerender(<KanaSettingsForm onSelect={onSelectHandler}/>);
    expect(onSelectHandler).toHaveBeenCalledWith({ hiragana: true, katakana: false, diagraphs: false, quantity: 75 });
});