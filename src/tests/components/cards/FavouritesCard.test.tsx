import PresetService from "../../../service/PresetService";
import { render } from "@testing-library/react";
import FavouritesCard from "../../../components/cards/FavouritesCard";
import PlayMode from "../../../domain/session/PlayMode";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { KanaSettingsBuilder } from "../../../domain/session/settings/data/KanaSettings";
import { GameSettingsBuilder } from "../../../domain/session/settings/game/GameSettings";
import LearnMode from "../../../domain/session/LearnMode";
import LearnSettings from "../../../domain/session/settings/LearnSettings";

const mockPresetService = jest.fn();
jest.mock("../../../service/PresetService", () => {
    return function() { return { getFavouritePresets: mockPresetService }};
});

const playPreset = new PlayMode(1, "Test Play", "#ffffff", "FaAtom", new KanaSettingsBuilder().build(), new GameSettingsBuilder().build());
const learnMode = new LearnMode(1, "Test Learn", "#fdb40e", "あ", new KanaSettingsBuilder().withHiragana().build(), new LearnSettings());

test('It should render preset favourite buttons for each of the presets from the service', async () => {
    mockPresetService.mockResolvedValueOnce({ learn: [learnMode], play: [playPreset] });
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
