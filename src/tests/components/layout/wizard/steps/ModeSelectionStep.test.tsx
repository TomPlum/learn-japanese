import { fireEvent, render, screen } from "@testing-library/react";
import ModeSelectionStep, { ModeSelectionStepProps } from "../../../../../components/layout/wizard/steps/ModeSelectionStep";
import { Environment } from "../../../../../utility/Environment";
import { AppMode } from "../../../../../domain/AppMode";

const onSelectHandler = jest.fn();
const mockEnvironment = jest.fn();

let props: ModeSelectionStepProps;

const setup = () => {
    const component = render(<ModeSelectionStep {...props} />);
    return {
        play: component.getByText('Play').parentElement,
        learn: component.getByText('Learn').parentElement,
        ...component
    }
}

beforeEach(() => {
    props = {
        mode: AppMode.PLAY,
        onSelect: onSelectHandler
    };
    Environment.variable = mockEnvironment;
});

test('Passing mode as play should set the class name to selected', () => {
    props.mode = AppMode.PLAY;
    const { play } = setup();
    expect(play).toHaveClass('selected');
});

test('Clicking the learn mode button should call the onSelect event handler with Learn mode', () => {
    const { learn } = setup();
    fireEvent.click(learn!);
    expect(onSelectHandler).toHaveBeenCalled();
});

test('Passing mode as learn should set the class name to selected', () => {
    props.mode = AppMode.LEARN;
    const { learn } = setup();
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
    props.mode = AppMode.LEARN;
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
