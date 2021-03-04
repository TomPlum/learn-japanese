import { fireEvent, render, screen } from "@testing-library/react";
import HintSettingsForm from "../../../components/settings/HintSettingsForm";

const onChangeHandler = jest.fn();

const setup = () => {
    const component = render(<HintSettingsForm onChange={onChangeHandler} />);
    return {
        one: component.getByTestId('1'),
        three: component.getByTestId('3'),
        five: component.getByTestId('5'),
        unlimited: component.getByTestId('Unlimited'),
        ...component
    }
}

test('Hint quantity should default to 3', () => {
    setup();
    expect(onChangeHandler).toHaveBeenCalledWith({ enabled: true, quantity: 3 });
});

test('Selecting 1 hint should set the value to 1', () => {
    const { one, rerender } = setup();
    fireEvent.click(one);
    rerender(<HintSettingsForm onChange={onChangeHandler} />);
    expect(onChangeHandler).toHaveBeenCalledWith({ enabled: true, quantity: 1 });
});

test('Selecting 3 hints should set the value to 3', () => {
    const { three, rerender } = setup();
    fireEvent.click(three);
    rerender(<HintSettingsForm onChange={onChangeHandler} />);
    expect(onChangeHandler).toHaveBeenCalledWith({ enabled: true, quantity: 3 });
});

test('Selecting 5 hints should set the value to 5', () => {
    const { five, rerender } = setup();
    fireEvent.click(five);
    rerender(<HintSettingsForm onChange={onChangeHandler} />);
    expect(onChangeHandler).toHaveBeenCalledWith({ enabled: true, quantity: 5 });
});

test('Selecting unlimited hints should set the value to 999', () => {
    const { unlimited, rerender } = setup();
    fireEvent.click(unlimited);
    rerender(<HintSettingsForm onChange={onChangeHandler} />);
    expect(onChangeHandler).toHaveBeenCalledWith({ enabled: true, quantity: 999 });
});