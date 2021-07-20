import { fireEvent, render } from "@testing-library/react";
import LifeSettingsForm from "../../../../components/settings/game/LifeSettingsForm";
import { LifeQuantity } from "../../../../types/game/LifeQuantity";
import { LifeSettingsBuilder } from "../../../../types/session/settings/game/LifeSettings";

const onChangeHandler = jest.fn();

const setup = () => {
    const component = render(<LifeSettingsForm onChange={onChangeHandler} />);
    return {
        enable: component.getByTestId('Enable'),
        lives: component.getByTestId('Lives'),
        ...component
    }
}

beforeEach(() => {
    jest.restoreAllMocks();
});

test('Lives should default to off', () => {
    setup();
    expect(onChangeHandler).toHaveBeenCalledWith(new LifeSettingsBuilder().isEnabled(false).build());
});

test('Selecting \'enable\' should set lives to enabled in the settings', () => {
    const { enable, rerender } = setup();
    fireEvent.click(enable);
    rerender(<LifeSettingsForm onChange={onChangeHandler} />);
    expect(onChangeHandler).toHaveBeenCalledWith(new LifeSettingsBuilder().isEnabled().withQuantity(LifeQuantity.FIVE).build());
});

test('Changing the lives selector should call the onChange event handler', () => {
    const { enable, lives } = setup();
    fireEvent.click(enable);
    fireEvent.change(lives, { target: { value: 3 }} )
    expect(onChangeHandler).toHaveBeenCalledWith(new LifeSettingsBuilder().isEnabled().withQuantity(LifeQuantity.THREE).build());
});