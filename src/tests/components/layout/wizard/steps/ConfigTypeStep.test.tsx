import { fireEvent, render, screen } from "@testing-library/react";
import ConfigTypeStep, { ConfigTypeStepProps } from "../../../../../components/layout/wizard/steps/ConfigTypeStep";
import { Environment } from "../../../../../utility/Environment";

const onSelectHandler = jest.fn();
const mockEnvironment = jest.fn();

let props: ConfigTypeStepProps;

beforeEach(() => {
    props = {
        isCustom: false,
        onSelect: onSelectHandler
    };
    Environment.variable = mockEnvironment;
});

const setup = () => {
    const component = render(<ConfigTypeStep {...props} />);
    return {
        preset: component.getByText('Preset'),
        custom: component.getByText('Custom'),
        ...component
    }
}

test('Passing the custom prop as false should set the preset button as selected', () => {
    props.isCustom = false;
    const { preset } = setup();
    const button = preset.parentElement;
    expect(button).toHaveClass('selected');
});

test('Passing the custom prop as true should set the custom button as selected', () => {
    props.isCustom = true;
    const { custom } = setup();
    const button = custom.parentElement;
    expect(button).toHaveClass('selected');
});

test('Clicking the custom button should call the onSelect handler with true', () => {
    const { custom } = setup();
    fireEvent.click(custom);
    expect(onSelectHandler).toHaveBeenLastCalledWith(true);
});

test('Clicking the preset button should call the onSelect handler with false', () => {
    const { preset } = setup();
    fireEvent.click(preset);
    expect(onSelectHandler).toHaveBeenLastCalledWith(false);
});

test('Should render the preset description when preset is selected', () => {
    mockEnvironment.mockReturnValue("Preset description.");
    const { preset } = setup();
    fireEvent.click(preset);
    expect(screen.getByText("Preset description.")).toBeInTheDocument();
});

test('Should render the custom description when custom is selected', () => {
    mockEnvironment.mockReturnValue("Custom description.");
    const { custom } = setup();
    fireEvent.click(custom);
    expect(screen.getByText("Custom description.")).toBeInTheDocument();
});
