import KanaGameSettingsMenu, { KanaGameSettingsMenuProps } from "../../../components/settings/KanaGameSettingsMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import { DisplayType } from "../../../types/game/DisplayType";
import GameSettings, { GameSettingsBuilder } from "../../../types/session/GameSettings";
import { LifeQuantity } from "../../../types/game/LifeQuantity";

let settings: GameSettings;

beforeEach(() => {
   settings = new GameSettingsBuilder()
       .withKanaSettings({ diagraphs: false, hiragana: true, katakana: false, quantity: 50 })
       .withDisplaySettings({ cards: 1, type: DisplayType.ROMAJI, score: true })
       .withHintSettings({ enabled: true, quantity: 3 })
       .withLifeSettings({ enabled: false, quantity: LifeQuantity.FIVE })
       .withTimeSettings({ countdown: false, timed: true })
       .build();
});

const onSubmitHandler = jest.fn();

let props: KanaGameSettingsMenuProps = {
    onSubmit: onSubmitHandler
};

const setup = () => {
    const component = render(<KanaGameSettingsMenu {...props} />);
    return {
        confirm: screen.getByText('Confirm'),
        reset: screen.getByText('Reset'),
        kanaModeButton: screen.getByText('Kana'),
        romanjiModeButton: screen.getByText('Rōmaji'),
        ...component
    }
}

test('Clicking submit without changing any settings should call the onSubmit even handler with default settings', () => {
    const { confirm } = setup();
    fireEvent.click(confirm);
    expect(onSubmitHandler).toHaveBeenCalledWith(settings);
});

test('Changing the game mode to Kana and submitting should update the settings', () => {
    const { confirm, kanaModeButton } = setup();

    fireEvent.click(kanaModeButton);
    fireEvent.click(confirm);

    settings = new GameSettingsBuilder()
        .fromExisting(settings)
        .withDisplaySettings({ type: DisplayType.KANA, cards: 4, score: true })
        .build();

    expect(onSubmitHandler).toHaveBeenCalledWith(settings);
});

test('Changing the game mode to Kana and resetting should default to Rōmaji', () => {
    const { confirm, kanaModeButton, reset } = setup();
    fireEvent.click(kanaModeButton);
    fireEvent.click(reset);
    fireEvent.click(confirm);
    expect(onSubmitHandler).toHaveBeenCalledWith(settings);
});