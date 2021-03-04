import { fireEvent, render } from "@testing-library/react";
import LifeSettingsForm from "../../../components/settings/LifeSettingsForm";
import { LifeQuantity } from "../../../types/LifeQuantity";

const onChangeHandler = jest.fn();

const setup = () => {
    const component = render(<LifeSettingsForm onChange={onChangeHandler} />);
    return {
        enable: component.getByTestId('Enable'),
        lives: component.getByTestId('Lives'),
        ...component
    }
}

test('Lives should default to off', () => {
    setup();
    expect(onChangeHandler).toHaveBeenCalledWith({ enabled: false, quantity: LifeQuantity.ZERO });
});

test('Selecting \'enable\' should set lives to enabled in the settings', () => {
    const { enable, rerender } = setup();
    fireEvent.click(enable);
    rerender(<LifeSettingsForm onChange={onChangeHandler} />);
    expect(onChangeHandler).toHaveBeenCalledWith({ enabled: true, quantity: LifeQuantity.FIVE });
});

test('Changing the lives selector should call the onChange event handler', () => {
    const { enable, lives } = setup();
    fireEvent.click(enable);
    fireEvent.change(lives, { target: { value: 3 }} )
    expect(onChangeHandler).toHaveBeenCalledWith({ enabled: true, quantity: LifeQuantity.THREE });
});