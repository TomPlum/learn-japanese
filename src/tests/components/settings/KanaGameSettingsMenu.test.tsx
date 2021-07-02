import KanaGameSettingsMenu, { KanaGameSettingsMenuProps } from "../../../components/settings/KanaGameSettingsMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import { DisplayType } from "../../../types/game/DisplayType";
import { GameSettings } from "../../../types/game/GameSettings";
import { LifeQuantity } from "../../../types/game/LifeQuantity";

let settings: GameSettings;

beforeEach(() => {
   settings = {
       kana: { diagraphs: false, hiragana: true, katakana: false, quantity: 50 },
       display: { cards: 1, type: DisplayType.ROMAJI, score: true },
       hints: { enabled: true, quantity: 3 },
       lives: { enabled: false, quantity: LifeQuantity.FIVE },
       time: { countdown: false, timed: true }
   };
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
    settings.display = { type: DisplayType.KANA, cards: 4, score: true }
    expect(onSubmitHandler).toHaveBeenCalledWith(settings);
});

test('Changing the game mode to Kana and resetting should default to Rōmaji', () => {
    const { confirm, kanaModeButton, reset } = setup();
    fireEvent.click(kanaModeButton);
    fireEvent.click(reset);
    fireEvent.click(confirm);
    expect(onSubmitHandler).toHaveBeenCalledWith(settings);
});