import { fireEvent, render, screen } from "@testing-library/react";
import PlayWizardProgress, { PlayWizardProgressProps } from "../../../../../components/layout/wizard/play/PlayWizardProgress";

const onSelectStageHandler = jest.fn();

let props: PlayWizardProgressProps;

const setup = () => {
    const component = render(<PlayWizardProgress {...props} />);
    return {
        topic: component.getByTitle('Topic'),
        type: component.getByTitle('Preset or Custom'),
        ...component
    }
}

beforeEach(() => {
    props = {
        custom: false,
        stage: 1,
        onSelectStage: onSelectStageHandler
    }
});

test('Clicking a step should call on the onSelectStage handler with that stages numerical value', () => {
    const { topic } = setup();
    fireEvent.click(topic);
    expect(onSelectStageHandler).toHaveBeenLastCalledWith(1);
});

test('Passing custom as false should render only the topic, type and preset steps', () => {
    // Set custom to false for preset selection
    props.custom = false;
    setup();

    // These steps should be rendered
    expect(screen.getByTitle('Topic')).toBeInTheDocument();
    expect(screen.getByTitle('Preset or Custom')).toBeInTheDocument();
    expect(screen.getByTitle('Preset')).toBeInTheDocument();

    // These should not
    expect(screen.queryByTitle('Question Settings')).not.toBeInTheDocument();
    expect(screen.queryByTitle('Hint Settings')).not.toBeInTheDocument();
    expect(screen.queryByTitle('Life Settings')).not.toBeInTheDocument();
    expect(screen.queryByTitle('Time Settings')).not.toBeInTheDocument();
    expect(screen.queryByTitle('Data Settings')).not.toBeInTheDocument();
    expect(screen.queryByTitle('Confirmation')).not.toBeInTheDocument();
});

test('Passing custom as true should render all steps except the preset one', () => {
    // Set custom to true for custom configuration
    props.custom = true;
    setup();

    // These steps should be rendered
    expect(screen.getByTitle('Topic')).toBeInTheDocument();
    expect(screen.getByTitle('Preset or Custom')).toBeInTheDocument();
    expect(screen.getByTitle('Question Settings')).toBeInTheDocument();
    expect(screen.getByTitle('Hint Settings')).toBeInTheDocument();
    expect(screen.getByTitle('Life Settings')).toBeInTheDocument();
    expect(screen.getByTitle('Time Settings')).toBeInTheDocument();
    expect(screen.getByTitle('Data Settings')).toBeInTheDocument();
    expect(screen.getByTitle('Confirmation')).toBeInTheDocument();

    // This one should not
    expect(screen.queryByTitle('Preset')).not.toBeInTheDocument();
});
