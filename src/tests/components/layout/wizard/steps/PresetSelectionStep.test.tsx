import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import PresetSelectionStep, { PresetSelectionStepProps } from "../../../../../components/layout/wizard/steps/PresetSelectionStep";
import Topic from "../../../../../domain/Topic";
import { AppMode } from "../../../../../domain/AppMode";
import { getValueLastCalledWith } from "../../../../Queries";
import PlayMode from "../../../../../domain/session/PlayMode";

const onSelectHandler = jest.fn();

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
        selected: Topic.KANA,
        onSelect: onSelectHandler
    };
});

test('Changing the topic should render the preset options from that topic', () => {
    setup();

    // Change topic from default to "Basics"
    fireEvent.click(screen.getByText('Hiragana & Katakana'));
    fireEvent.click(screen.getByText('Basics'));

    // Should render new presets
    expect(screen.queryByText('Relaxed')).not.toBeInTheDocument();
    expect(screen.getByText('Colours')).toBeInTheDocument();
});

test('Passing the mode as Learn should render the learn presets', () => {
    props.mode = AppMode.LEARN;
    setup();
    expect(screen.getByText('Hiragana')).toBeInTheDocument();
});

test('Selecting a preset should call the onSelect event handler with that preset', () => {
    setup();
    fireEvent.click(screen.getByText('Hardcore'));
    expect(getValueLastCalledWith<PlayMode>(onSelectHandler).displayName).toBe("Hardcore");
});
