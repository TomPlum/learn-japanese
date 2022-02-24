import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import PresetSelectionStep, { PresetSelectionStepProps } from "../../../../../components/layout/wizard/steps/PresetSelectionStep";
import Topic from "../../../../../domain/Topic";
import { AppMode } from "../../../../../domain/AppMode";
import { getValueLastCalledWith } from "../../../../Queries";
import PlayMode from "../../../../../domain/session/PlayMode";
import PlayKanaModes from "../../../../../domain/game/mode/PlayKanaModes";

const onSelectHandler = jest.fn();
const onChangeTopicHandler = jest.fn();

let props: PresetSelectionStepProps;

const setup = () => {
    const component = render(<PresetSelectionStep {...props}  />);
    return {
        topic: component.getByTestId('wizard-topic-selector'),
        ...component
    }
}

beforeEach(() => {
    props = {
        mode: AppMode.PLAY,
        preset: new PlayKanaModes().getModes()[0],
        topic: Topic.KANA,
        onSelect: onSelectHandler,
        onChangeTopic: onChangeTopicHandler
    };
});

test('Should render the play preset options from the given presets when the mode is play', () => {
    // Set the mode to 'Play' and preset
    props.mode = AppMode.PLAY;
    props.preset = new PlayKanaModes().getModes()[0];
    setup();

    // Should render play presets
    expect(screen.getByText('Relaxed')).toBeInTheDocument();
    expect(screen.queryByText('Hiragana')).not.toBeInTheDocument();
});

test('Should render the learn preset options from the given presets when the mode is learn', () => {
    // Set the mode to 'Learn' and preset
    props.mode = AppMode.LEARN;
    props.preset = new PlayKanaModes().getModes()[0];
    setup();

    // Should render learn presets
    expect(screen.getByText('Hiragana')).toBeInTheDocument();
    expect(screen.queryByText('Relaxed')).not.toBeInTheDocument();
});

test('Selecting a preset should call the onSelect event handler with that preset', () => {
    setup();
    fireEvent.click(screen.getByText('Hardcore'));
    expect(getValueLastCalledWith<PlayMode>(onSelectHandler).displayName).toBe("Hardcore");
});

test('Selecting a preset should call the onChangeTopic event handler with that topic', () => {
    setup();

    // Change the topic to 'Basics'
    fireEvent.click(screen.getByText('Hiragana & Katakana'));
    fireEvent.click(screen.getByText('Basics'));

    // Should call the event handler
    expect(onChangeTopicHandler).toHaveBeenLastCalledWith(Topic.BASICS);
});
