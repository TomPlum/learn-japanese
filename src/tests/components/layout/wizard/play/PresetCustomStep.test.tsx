import { fireEvent, render, screen } from "@testing-library/react";
import PresetCustomStep from "../../../../../components/layout/wizard/play/PresetCustomStep";
import { Environment } from "../../../../../utility/Environment";

const onNextHandler = jest.fn();
const mockEnvironment = jest.fn();

beforeEach(() => {
    Environment.variable = mockEnvironment;
});

const setup = () => {
    const component = render(<PresetCustomStep onNext={onNextHandler} />);
    return {
        preset: component.getByText('Preset'),
        custom: component.getByText('Custom'),
        next: component.getByText('Next'),
        ...component
    }
}

test('Preset button should start selected', () => {
    const { preset } = setup();
    const button = preset.parentElement;
    expect(button).toHaveClass('selected');
});

test('Custom button should start un-selected', () => {
    const { custom } = setup();
    const button = custom.parentElement;
    expect(button).toHaveClass('button');
});

test('Clicking the custom button should change the class to selected', () => {
    const { custom } = setup();

    const button = custom.parentElement;
    expect(button).toHaveClass('button');

    fireEvent.click(custom);
    expect(button).toHaveClass('selected');
});

test('Clicking the next button in the footer should call the onNext handler with true if custom is selected', () => {
    const { custom, next } = setup();
    fireEvent.click(custom);
    fireEvent.click(next);
    expect(onNextHandler).toHaveBeenLastCalledWith(true);
});

test('Clicking the next button in the footer should call the onNext handler with false if preset is selected', () => {
    const { preset, next } = setup();
    fireEvent.click(preset);
    fireEvent.click(next);
    expect(onNextHandler).toHaveBeenLastCalledWith(false);
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
