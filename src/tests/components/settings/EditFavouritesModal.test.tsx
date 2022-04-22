import PlayMode from "../../../domain/session/PlayMode";
import { KanaSettingsBuilder } from "../../../domain/session/settings/data/KanaSettings";
import { GameSettingsBuilder } from "../../../domain/session/settings/game/GameSettings";
import LearnMode from "../../../domain/session/LearnMode";
import LearnSettings from "../../../domain/session/settings/LearnSettings";
import renderReduxConsumer from "../../renderReduxConsumer";
import EditFavouritesModal from "../../../components/settings/EditFavouritesModal";
import { fireEvent, screen } from "@testing-library/react";

const onSuccessHandler = jest.fn();
const onDismissHandler = jest.fn();

const eventHandlers = {
    onSuccess: onSuccessHandler,
    onDismiss: onDismissHandler
}

const mockGetAllPresets = jest.fn();
const mockUpdateFavourites = jest.fn();
jest.mock("../../../service/PresetService", () => {
    return function() { return { getAllPresets: mockGetAllPresets }};
});

const playPreset = new PlayMode(1, "Test Play", "#ffffff", "FaAtom", new KanaSettingsBuilder().build(), new GameSettingsBuilder().build(), "", false, 1);
const learnPreset = new LearnMode(2, "Test Learn", "#fdb40e", "あ", new KanaSettingsBuilder().withHiragana().build(), new LearnSettings(), "", false, 2);

test('Should render existing favourites if the service responds successfully', async () => {
    mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] });
    const component = renderReduxConsumer(<EditFavouritesModal favourites={[learnPreset]} {...eventHandlers} />);

    // Should render this as an existing favourite as it's passed in as one
    expect(await component.findByTestId('existing-favourite-button-2')).toBeInTheDocument();

    // This one is not passed in and should not.
    expect(await component.queryByTestId('existing-favourite-button-1')).not.toBeInTheDocument();
});

test('Should render an error alert if the service returns an error', async () => {
    mockGetAllPresets.mockResolvedValueOnce({ error: "Failed to retrieve presets" });
    const component = renderReduxConsumer(<EditFavouritesModal favourites={[learnPreset]} {...eventHandlers} />);
    expect(await component.findByText('Failed to retrieve presets'));
});

test('Should render an error alert if the service promise is rejected', async () => {
    mockGetAllPresets.mockRejectedValueOnce({ error: "A network error occurred." });
    const component = renderReduxConsumer(<EditFavouritesModal favourites={[learnPreset]} {...eventHandlers} />);
    expect(await component.findByText('A network error occurred.'));
});

test('Should call the onDismiss event handler when clicking close after making no changes', async () => {
    mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [] });
    const component = renderReduxConsumer(<EditFavouritesModal favourites={[learnPreset]} {...eventHandlers} />);
    expect(await component.findByTestId('existing-favourite-button-2')).toBeInTheDocument();

    fireEvent.click(component.getByTitle('Close'));

    expect(onDismissHandler).toHaveBeenCalled();
});

test('Should render a confirmation modal if the user has marked an existing favourite for deletion', async () => {
    mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [] });
    const component = renderReduxConsumer(<EditFavouritesModal favourites={[learnPreset]} {...eventHandlers} />);

    // Mark the existing learn favourite for deletion
    const learnFavouriteButton = await component.findByTestId('existing-favourite-button-2');
    fireEvent.click(learnFavouriteButton.children[0]);

    // Clicking close should now render a confirmation modal
    fireEvent.click(component.getByTitle('Close'));
    expect(await screen.findByText('Are you sure you want to quit?')).toBeInTheDocument();
    expect(await screen.findByText('You have unsaved changes to your favourites.')).toBeInTheDocument();

    // Clicking 'Yes' should call the onDismiss event handler but not update the presets
    fireEvent.click(screen.getByText('Yes'));
    expect(onDismissHandler).toHaveBeenCalled();
    expect(mockUpdateFavourites).not.toHaveBeenCalled();
});

test('Should stop rendering the confirmation modal and not update favourites when clicking \'No\'', async () => {
    mockGetAllPresets.mockResolvedValueOnce({ learn: [], play: [playPreset] });
    const component = renderReduxConsumer(<EditFavouritesModal favourites={[playPreset]} {...eventHandlers} />);

    // Mark the existing play favourite for deletion
    const playFavouriteButton = await component.findByTestId('existing-favourite-button-1');
    fireEvent.click(playFavouriteButton.children[0]);

    // Clicking close should now render a confirmation modal
    fireEvent.click(component.getByTitle('Close'));
    expect(await screen.findByTestId('confirm-modal')).toBeInTheDocument();

    // Clicking 'No' should not call the onDismiss handler, nor update the presets
    fireEvent.click(screen.getByText('No'));
    expect(onDismissHandler).not.toHaveBeenCalled();
    expect(mockUpdateFavourites).not.toHaveBeenCalled();
});
