import { fireEvent, render, screen } from "@testing-library/react";
import FavouritesCard from "../../../components/cards/FavouritesCard";
import PlayMode from "../../../domain/session/PlayMode";
import { KanaSettingsBuilder } from "../../../domain/session/settings/data/KanaSettings";
import { GameSettingsBuilder } from "../../../domain/session/settings/game/GameSettings";
import LearnMode from "../../../domain/session/LearnMode";
import LearnSettings from "../../../domain/session/settings/LearnSettings";
import renderReduxConsumer from "../../renderReduxConsumer";
import PresetBuilder from "../../../domain/session/PresetBuilder";

const mockGetFavourites = jest.fn();
const mockGetAllPresets = jest.fn();
const mockUpdateFavourites = jest.fn();
jest.mock("../../../service/PresetService", () => {
    return function() { return {
        getFavouritePresets: mockGetFavourites,
        getAllPresets: mockGetAllPresets,
        updateFavourites: mockUpdateFavourites
    }};
});

const playPreset = new PresetBuilder()
    .withID(1)
    .withDisplayName("Test Play")
    .withColour("#ffffff")
    .withIcon("FaAtom")
    .withDataSettings(new KanaSettingsBuilder().build())
    .withGameSettings(new GameSettingsBuilder().build())
    .withTopicName("Topic")
    .withFavouriteID(1)
    .build();

const learnPreset = new PresetBuilder()
    .withID(2)
    .withDisplayName("Test Learn")
    .withColour("#fdb40e")
    .withIcon("あ")
    .withDataSettings(new KanaSettingsBuilder().build())
    .withLearnSettings(new LearnSettings())
    .withTopicName("Topic")
    .withFavouriteID(2)
    .build();

test('It should render preset favourite buttons for each of the presets from the service', async () => {
    mockGetFavourites.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] });
    const component = render(<FavouritesCard />);
    expect(await component.findByText('Test Play')).toBeInTheDocument();
    expect(component.getByText('Test Learn')).toBeInTheDocument();
});

test('It should render an error if returned by the service', async () => {
    mockGetFavourites.mockResolvedValueOnce({ learn: [], play: [], error: "Failed to retrieve." });
    const component = render(<FavouritesCard />);
    expect(await component.findByText('Failed to retrieve.')).toBeInTheDocument();
});

test('It should render an error if the service is call is rejected', async () => {
    mockGetFavourites.mockRejectedValueOnce({ error: "Failed to retrieve." });
    const component = render(<FavouritesCard />);
    expect(await component.findByText('Failed to retrieve.')).toBeInTheDocument();
});

test('Clicking a favourite button should render the confirmation modal', async () => {
    mockGetFavourites.mockResolvedValueOnce({ learn: [], play: [playPreset] });
    const component = renderReduxConsumer(<FavouritesCard />);
    expect(await component.findByText('Test Play')).toBeInTheDocument();

    fireEvent.mouseEnter(component.getByTestId('favourite-button-1').firstChild!);
    expect(await component.findByText('Start Play')).toBeInTheDocument();
    fireEvent.click(component.getByTestId('favourite-button-1').firstChild!);

    expect(await screen.findByTestId('launch-preset-confirmation')).toBeInTheDocument();
});

test('Clicking the close button in the confirm modal should stop rendering it', async () => {
    mockGetFavourites.mockResolvedValueOnce({ learn: [learnPreset], play: [] });
    const component = renderReduxConsumer(<FavouritesCard />);
    expect(await component.findByText('Test Learn')).toBeInTheDocument();

    fireEvent.mouseEnter(component.getByTestId('favourite-button-2').firstChild!);
    expect(await component.findByText('Start Learn')).toBeInTheDocument();
    fireEvent.click(component.getByTestId('favourite-button-2').firstChild!);

    const confirmationModal = await screen.findByTestId('launch-preset-confirmation');
    expect(confirmationModal).toBeInTheDocument();

    fireEvent.click(screen.getByTitle('Close'));
    expect(screen.queryByTestId('launch-preset-confirmation')).not.toBeInTheDocument();
});

test('When there are no favourites it should render the add button', async () => {
    mockGetFavourites.mockResolvedValueOnce({ learn: [], play: [] });
    const component = renderReduxConsumer(<FavouritesCard />);
    expect(await component.findByText('You can track your favourite presets here')).toBeInTheDocument();
});

test('Clicking the empty state add button should render the edit favourites modal', async () => {
    mockGetFavourites.mockResolvedValueOnce({ learn: [], play: [] });
    mockGetAllPresets.mockResolvedValueOnce({});
    const component = renderReduxConsumer(<FavouritesCard />);

    fireEvent.click(await component.findByText('You can track your favourite presets here'));
    expect(await screen.findByTestId('edit-favourites')).toBeInTheDocument();
});

test('Clicking the edit button from the settings menu should render the edit favourites modal', async () => {
    mockGetFavourites.mockResolvedValueOnce({ learn: [], play: [playPreset] });
    mockGetAllPresets.mockResolvedValueOnce({});
    const component = renderReduxConsumer(<FavouritesCard />);

    fireEvent.click(await component.findByTestId('dashboard-settings-menu-button'));
    fireEvent.click(await component.findByText('Edit'));

    expect(await screen.findByTestId('edit-favourites')).toBeInTheDocument();
});

test('Dismissing the edit favourites modal should stop rendering it and NOT call reload the favourites', async () => {
    mockGetFavourites.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] });
    mockGetAllPresets.mockResolvedValueOnce({});
    const component = renderReduxConsumer(<FavouritesCard />);

    fireEvent.click(await component.findByTestId('dashboard-settings-menu-button'));
    fireEvent.click(await component.findByText('Edit'));
    expect(await screen.findByTestId('edit-favourites')).toBeInTheDocument();
    expect(mockGetFavourites).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByTitle('Close'));
    expect(await screen.queryByTestId('edit-favourites')).not.toBeInTheDocument();
    expect(mockGetFavourites).toHaveBeenCalledTimes(1);
});

test('Saving after updating favourites should reload the data', async () => {
    // Return a singular learn and a play preset
    mockGetFavourites.mockResolvedValue({ learn: [learnPreset], play: [playPreset] });
    mockGetAllPresets.mockResolvedValueOnce({});
    mockUpdateFavourites.mockResolvedValueOnce({ success: true });
    const component = renderReduxConsumer(<FavouritesCard />);

    // Should render both favourites
    expect(await component.findByTestId('favourite-button-1')).toBeInTheDocument();
    expect(await component.findByTestId('favourite-button-2')).toBeInTheDocument();

    // Clicking edit should render the modal
    fireEvent.click(await component.findByTestId('dashboard-settings-menu-button'));
    fireEvent.click(await component.findByText('Edit'));
    expect(await screen.findByTestId('edit-favourites')).toBeInTheDocument();

    // Change something (Remove the test learn preset from favourites)
    fireEvent.click(await screen.findByTestId('existing-favourite-button-2'));
    expect(mockGetFavourites).toHaveBeenCalledTimes(1); // Won't have reloaded yet
    fireEvent.click(screen.getByText('Save'));

    // Should render both favourites (again)
    expect(await component.findByTestId('favourite-button-1')).toBeInTheDocument();
    expect(await component.findByTestId('favourite-button-2')).toBeInTheDocument();
    expect(mockGetFavourites).toHaveBeenCalledTimes(2); // Now it should reload and call for a second time

    // Should stop rendering the edit modal
    expect(await screen.queryByTestId('edit-favourites')).not.toBeInTheDocument();
});
