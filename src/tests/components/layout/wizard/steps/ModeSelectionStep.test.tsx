import { fireEvent, render, screen } from "@testing-library/react";
import ModeSelectionStep from "../../../../../components/layout/wizard/steps/WizardModeStep";
import { Environment } from "../../../../../utility/Environment";
import { AppMode } from "../../../../../domain/AppMode";

const onSelectHandler = jest.fn();
const mockEnvironment = jest.fn();

const setup = () => {
    const component = render(<ModeSelectionStep onSelect={onSelectHandler} />);
    return {
        play: component.getByText('Play').parentElement,
        learn: component.getByText('Learn').parentElement,
        ...component
    }
}

beforeEach(() => {
    Environment.variable = mockEnvironment;
});

test('Play mode should be selected by default', () => {
    const { play } = setup();
    expect(play).toHaveClass('selected');
});

test('Learn mode should not be selected by default', () => {
    const { learn } = setup();
    expect(learn).toHaveClass('button');
});

test('Clicking the learn mode button should call the onSelect event handler with Learn mode', () => {
    const { learn } = setup();
    fireEvent.click(learn!);
    expect(onSelectHandler).toHaveBeenCalled();
});

test('Clicking the learn mode button should set the class name to selected', () => {
    const { learn } = setup();
    fireEvent.click(learn!);
    expect(learn).toHaveClass('selected');
});

test('Clicking the learn mode button should call the onSelect event handler with Learn mode', () => {
    const { learn } = setup();
    fireEvent.click(learn!);
    expect(onSelectHandler).toHaveBeenLastCalledWith(AppMode.LEARN);
});

test('Clicking the play mode button should call the onSelect event handler with Play mode', () => {
    const { play } = setup();
    fireEvent.click(play!);
    expect(onSelectHandler).toHaveBeenLastCalledWith(AppMode.PLAY);
});

test('Clicking the learn mode button should display the Learn mode description', () => {
    mockEnvironment.mockReturnValue("LEARN MODE DESCRIPTION");
    const { learn } = setup();

    fireEvent.click(learn!);

    expect(mockEnvironment).toHaveBeenLastCalledWith('Learn_DESC');
    expect(screen.getByText('LEARN MODE DESCRIPTION')).toBeInTheDocument();
});

test('Clicking the play mode button should display the Play mode description', () => {
    mockEnvironment.mockReturnValue("PLAY MODE DESCRIPTION");
    const { play } = setup();

    fireEvent.click(play!);

    expect(mockEnvironment).toHaveBeenLastCalledWith('Play_DESC');
    expect(screen.getByText('PLAY MODE DESCRIPTION')).toBeInTheDocument();
});
