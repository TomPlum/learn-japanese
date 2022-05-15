import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import PresetSelectionStep, { PresetSelectionStepProps } from "../../../../../components/layout/wizard/steps/PresetSelectionStep";
import Topic from "../../../../../domain/Topic";
import { AppMode } from "../../../../../domain/AppMode";
import { getValueLastCalledWith } from "../../../../Queries";
import PlayMode from "../../../../../domain/session/PlayMode";
import { KanaSettingsBuilder } from "../../../../../domain/session/settings/data/KanaSettings";
import { GameSettingsBuilder } from "../../../../../domain/session/settings/game/GameSettings";
import PresetBuilder from "../../../../../domain/session/PresetBuilder";
import LearnSettings from "../../../../../domain/session/settings/LearnSettings";

const mockGetAllPresets = jest.fn();
jest.mock("../../../../../service/PresetService", () => {
    return function() { return {
        getAllPresets: mockGetAllPresets,
    }};
});

const onSelectHandler = jest.fn();
const onChangeTopicHandler = jest.fn();

const playPreset = new PresetBuilder()
    .withID(1)
    .withDisplayName("Test Play")
    .withDescription("This is an example play description")
    .withColour("#ffffff")
    .withIcon("FaAtom")
    .withDataSettings(new KanaSettingsBuilder().build())
    .withGameSettings(new GameSettingsBuilder().build())
    .withTopicName("Hiragana & Katakana")
    .withShortName("Short Play")
    .withFavouriteID(1)
    .build();

const learnPreset = new PresetBuilder()
    .withID(2)
    .withDisplayName("Test Learn")
    .withColour("#fdb40e")
    .withIcon("あ")
    .withDataSettings(new KanaSettingsBuilder().build())
    .withLearnSettings(new LearnSettings())
    .withTopicName("Hiragana & Katakana")
    .withShortName("Short Learn")
    .withFavouriteID(2)
    .build();

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

test('Should render an empty state message if no presets are returned', async () => {
    mockGetAllPresets.mockResolvedValueOnce({ learn: [], play: [] });
    setup();
    expect(await screen.findByText('No presets available for this topic.')).toBeInTheDocument();
});

test('Should render an error message if the service call fails and returns one', async () => {
    mockGetAllPresets.mockResolvedValueOnce({ learn: [], play: [], error: "Failed to retrieve presets." });
    setup();
    expect(await screen.findByText('Failed to retrieve presets.')).toBeInTheDocument();
});

test('Selecting a preset should call the onSelect event handler with that preset', async () => {
    mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] });
    setup();
    fireEvent.click(await screen.findByText('Short Play'));
    expect(await screen.findByText('This is an example play description')).toBeInTheDocument();
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
