import LifeSettingsStep from "../../../../../components/layout/wizard/steps/LifeSettingsStep";
import { fireEvent, render } from "@testing-library/react";
import { LifeSettingsBuilder } from "../../../../../domain/session/settings/game/LifeSettings";

const onSelectHandler = jest.fn();

test('Should render the life settings form', () => {
    const component = render(<LifeSettingsStep onSelect={onSelectHandler} />);
    expect(component.getByTestId('life-settings-form')).toBeInTheDocument();
});

test('Changing a value in the form should call the onSelect event handler with the settings', () => {
    const component = render(<LifeSettingsStep onSelect={onSelectHandler} />);
    fireEvent.click(component.getByTestId('enable-lives'));
    expect(onSelectHandler).toHaveBeenLastCalledWith(new LifeSettingsBuilder().isEnabled(true).withQuantity(0).build());
});
