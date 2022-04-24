import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import PresetSelectionStep, { PresetSelectionStepProps } from "../../../../../components/layout/wizard/steps/PresetSelectionStep";
import Topic from "../../../../../domain/Topic";
import { AppMode } from "../../../../../domain/AppMode";
import { getValueLastCalledWith } from "../../../../Queries";
import PlayMode from "../../../../../domain/session/PlayMode";
import { KanaSettingsBuilder } from "../../../../../domain/session/settings/data/KanaSettings";
import { GameSettingsBuilder } from "../../../../../domain/session/settings/game/GameSettings";
import LearnMode from "../../../../../domain/session/LearnMode";
import LearnSettings from "../../../../../domain/session/settings/LearnSettings";

const mockGetAllPresets = jest.fn();
jest.mock("../../../../../service/PresetService", () => {
    return function() { return {
        getAllPresets: mockGetAllPresets,
    }};
});

const onSelectHandler = jest.fn();
const onChangeTopicHandler = jest.fn();

const playPreset = new PlayMode(1, "Test Play", "#ffffff", "FaAtom", new KanaSettingsBuilder().build(), new GameSettingsBuilder().build(), "Hiragana & Katakana", "Short Play", false, 1);
const learnPreset = new LearnMode(2, "Test Learn", "#fdb40e", "あ", new KanaSettingsBuilder().withHiragana().build(), new LearnSettings(),  "Hiragana & Katakana", " Short Learn", false, 2);

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
        preset: playPreset,
        topic: Topic.KANA,
        onSelect: onSelectHandler,
        onChangeTopic: onChangeTopicHandler
    };
});

test('Should render the play preset options from the given presets when the mode is play', async () => {
    // Set the mode to 'Play' and preset
    mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] });
    props.mode = AppMode.PLAY;
    props.preset = playPreset;
    setup();

    // Should render play presets
    expect(await screen.findByText('Short Play')).toBeInTheDocument();
    expect(screen.queryByText('Short Learn')).not.toBeInTheDocument();
});

test('Should render the learn preset options from the given presets when the mode is learn', async () => {
    // Set the mode to 'Learn' and preset
    mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] });
    props.mode = AppMode.LEARN;
    props.preset = learnPreset
    setup();

    // Should render learn presets
    expect(await screen.findByText('Short Learn')).toBeInTheDocument();
    expect(screen.queryByText('Short Play')).not.toBeInTheDocument();
});

test('Selecting a preset should call the onSelect event handler with that preset', async () => {
    mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] });
    setup();
    fireEvent.click(await screen.findByText('Short Play'));
    expect(await screen.findByText('Placeholder until migrate to API')).toBeInTheDocument();
    expect(getValueLastCalledWith<PlayMode>(onSelectHandler).displayName).toBe("Test Play");
});

test('Selecting a preset should call the onChangeTopic event handler with that topic', async () => {
    mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] });
    const { topic } = setup();
    await waitFor(() => expect(topic).not.toBeDisabled());

    // Change the topic to 'Basics'
    fireEvent.click(screen.getByText('Hiragana & Katakana'));
    fireEvent.click(screen.getByText('Basics'));

    // Should call the event handler
    expect(onChangeTopicHandler).toHaveBeenLastCalledWith(Topic.BASICS);
});
