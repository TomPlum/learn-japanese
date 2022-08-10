import { fireEvent, screen, waitFor } from "@testing-library/react";
import ConfirmationStep from "../../../../../components/layout/wizard/steps/ConfirmationStep";
import { SessionSettings } from "../../../../../domain/session/settings/SessionSettings";
import { KanjiSettingsBuilder } from "../../../../../domain/session/settings/data/KanjiSettings";
import { GameSettingsBuilder } from "../../../../../domain/session/settings/game/GameSettings";
import renderReduxConsumer from "../../../../renderReduxConsumer";
import { clearUser, setUser } from "../../../../../slices/UserSlice";
import { store } from "../../../../../store";
import { testUser } from "../../../../../setupTests";
import renderTranslatedReduxConsumer from "../../../../renderTranslatedReduxConsumer";

const onSelectStageHandler = jest.fn();

const mockPresetService = jest.fn();
jest.mock("../../../../../service/PresetService", () => {
    return function() { return { saveCustomPreset: mockPresetService }};
});

const dataSettings = new KanjiSettingsBuilder();
let settings: SessionSettings;

beforeEach(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    store.dispatch(clearUser());
})

function withGameSettings(gameSettings: GameSettingsBuilder) {
    settings = SessionSettings.forGame(dataSettings.build(), gameSettings.build());
}

test('Should render the session settings summary text', () => {
    withGameSettings(new GameSettingsBuilder());
    const component = renderReduxConsumer(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    expect(component.getByTestId('session-settings-summary')).toBeInTheDocument();
});

test('Clicking the "Save Preset" button should render the custom preset form', () => {
    withGameSettings(new GameSettingsBuilder());
    renderReduxConsumer(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    fireEvent.click(screen.getByText('Save Preset'));
    expect(screen.getByTestId('save-custom-preset-form')).toBeInTheDocument();
});

test('Clicking the cancel button in the save preset form should stop rendering the form', async () => {
    store.dispatch(setUser(testUser));
    withGameSettings(new GameSettingsBuilder());
    renderReduxConsumer(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);

    // Render the form
    fireEvent.click(screen.getByText('Save Preset'));
    expect(screen.getByTestId('save-custom-preset-form')).toBeVisible();

    // The save preset button should have stopped rendering
    expect(screen.queryByText('Save Preset')).not.toBeInTheDocument();

    // Click cancel
    fireEvent.click(screen.getByText('Cancel'));
    //await waitFor(() => expect(screen.getByTestId('save-custom-preset-form')).not.toBeVisible()); // Doesn't work for child element?

    // The save preset button should have been re-rendered
    expect(screen.getByText('Save Preset')).toBeInTheDocument();
});

//TODO: Fix the act() warning here. The setInSavePresetForm() call triggers it. Can't assert much else other than accordion visibility
test('Clicking the save button in the save preset form should hide the form and button after 2 seconds', async () => {
    store.dispatch(setUser(testUser));
    mockPresetService.mockResolvedValueOnce({ success: true });
    withGameSettings(new GameSettingsBuilder());
    renderReduxConsumer(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);

    // Render the form and fill in the details
    fireEvent.click(screen.getByText('Save Preset'));
    expect(screen.getByTestId('save-custom-preset-form')).toBeVisible();
    fireEvent.click(screen.getByText('My Preset'));
    fireEvent.change(screen.getByPlaceholderText('My Preset'), { target: { value: "My Preset"} });

    // The save preset button should have stopped rendering
    const savePresetButton = screen.queryByText('Save Preset');
    expect(savePresetButton).not.toBeInTheDocument();

    // Click save and wait 2 seconds
    fireEvent.click(screen.getByText('Save'));
    expect(await screen.findByText('Saved "My Preset" successfully.')).toBeInTheDocument();
    jest.advanceTimersByTime(2000);

    // The save preset button should not re-render and the accordion should have collapsed
    expect(screen.queryByText('Save Preset')).not.toBeInTheDocument();
    await waitFor(() => expect(screen.getByTestId('confirmation-step-accordion')).not.toHaveAttribute('display', 'none'));
});

test('Hovering over the save button when there is no user in context should render a message', async () => {
    store.dispatch(clearUser());
    renderTranslatedReduxConsumer(<ConfirmationStep settings={settings} onSelectStage={onSelectStageHandler} />);
    fireEvent.mouseOver(screen.getByText('Save Preset'));
    expect(await screen.findByText('You must be logged in to save.')).toBeInTheDocument();
});
