import { fireEvent, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import FavouritesCard from "../../../components/cards/FavouritesCard";
import PlayMode from "../../../domain/session/PlayMode";
import { KanaSettingsBuilder } from "../../../domain/session/settings/data/KanaSettings";
import { GameSettingsBuilder } from "../../../domain/session/settings/game/GameSettings";
import LearnMode from "../../../domain/session/LearnMode";
import LearnSettings from "../../../domain/session/settings/LearnSettings";
import renderReduxConsumer from "../../renderReduxConsumer";

const mockPresetService = jest.fn();
jest.mock("../../../service/PresetService", () => {
    return function() { return { getFavouritePresets: mockPresetService }};
});

const playPreset = new PlayMode(1, "Test Play", "#ffffff", "FaAtom", new KanaSettingsBuilder().build(), new GameSettingsBuilder().build());
const learnPreset = new LearnMode(1, "Test Learn", "#fdb40e", "あ", new KanaSettingsBuilder().withHiragana().build(), new LearnSettings());

test('It should render preset favourite buttons for each of the presets from the service', async () => {
    mockPresetService.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] });
    const component = render(<FavouritesCard />);
    expect(await component.findByText('Test Play')).toBeInTheDocument();
    expect(component.getByText('Test Learn')).toBeInTheDocument();
});

test('It should render an error if returned by the service', async () => {
    mockPresetService.mockResolvedValueOnce({ learn: [], play: [], error: "Failed to retrieve." });
    const component = render(<FavouritesCard />);
    expect(await component.findByText('Failed to retrieve.')).toBeInTheDocument();
});

test('It should render an error if the service is call is rejected', async () => {
    mockPresetService.mockRejectedValueOnce({ error: "Failed to retrieve." });
    const component = render(<FavouritesCard />);
    expect(await component.findByText('Failed to retrieve.')).toBeInTheDocument();
});

test('Clicking a favourite button should render the confirmation modal', async () => {
    mockPresetService.mockResolvedValueOnce({ learn: [], play: [playPreset] });
    const component = renderReduxConsumer(<FavouritesCard />);
    expect(await component.findByText('Test Play')).toBeInTheDocument();

    fireEvent.mouseEnter(component.getByTestId('favourite-button-test-play').firstChild!);
    expect(await component.findByText('Start Play')).toBeInTheDocument();
    fireEvent.click(component.getByTestId('favourite-button-test-play').firstChild!);

    expect(await screen.findByTestId('launch-preset-confirmation')).toBeInTheDocument();
});

test('Clicking the close button in the confirm modal should stop rendering it', async () => {
    mockPresetService.mockResolvedValueOnce({ learn: [learnPreset], play: [] });
    const component = renderReduxConsumer(<FavouritesCard />);
    expect(await component.findByText('Test Learn')).toBeInTheDocument();

    fireEvent.mouseEnter(component.getByTestId('favourite-button-test-learn').firstChild!);
    expect(await component.findByText('Start Learn')).toBeInTheDocument();
    fireEvent.click(component.getByTestId('favourite-button-test-learn').firstChild!);

    const confirmationModal = await screen.findByTestId('launch-preset-confirmation');
    expect(confirmationModal).toBeInTheDocument();

    fireEvent.click(screen.getByTitle('Close'));
    expect(screen.queryByTestId('launch-preset-confirmation')).not.toBeInTheDocument();
});
