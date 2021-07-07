import KanaGameSettingsMenu from "../../../components/settings/KanaGameSettingsMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import { DisplayType } from "../../../types/game/DisplayType";
import GameSettings, { GameSettingsBuilder } from "../../../types/session/settings/game/GameSettings";
import { LifeQuantity } from "../../../types/game/LifeQuantity";
import { CustomLearnMenuProps } from "../../../components/learn/ModeSelectionMenu";
import { SessionSettings } from "../../../types/session/settings/SessionSettings";
import { KanaSettingsBuilder } from "../../../types/session/settings/data/KanaSettings";
import { LifeSettingsBuilder } from "../../../types/session/settings/game/LifeSettings";

let settings: GameSettings;

beforeEach(() => {
   settings = new GameSettingsBuilder()
       .withDisplaySettings({ cards: 1, type: DisplayType.ROMAJI, score: true })
       .withHintSettings({ enabled: true, quantity: 3 })
       .withLifeSettings(new LifeSettingsBuilder().isEnabled(false).withQuantity(LifeQuantity.FIVE).build())
       .withTimeSettings({ countdown: false, timed: true })
       .build();
});

const onSubmitHandler = jest.fn();

let props: CustomLearnMenuProps = {
    onSelect: onSubmitHandler
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
    expect(onSubmitHandler).toHaveBeenCalledWith(
        SessionSettings.forGame(
            new KanaSettingsBuilder().withHiragana().build(),
            settings
        )
    );
});

test('Changing the game mode to Kana and submitting should update the settings', () => {
    const { confirm, kanaModeButton } = setup();

    fireEvent.click(kanaModeButton);

    fireEvent.click(confirm);
    settings = new GameSettingsBuilder()
        .fromExisting(settings)
        .withDisplaySettings({ type: DisplayType.KANA, cards: 4, score: true })
        .build();

    expect(onSubmitHandler).toHaveBeenCalledWith(SessionSettings.forGame(
        new KanaSettingsBuilder().withHiragana().build(),
        settings
    ));
});

test('Changing the game mode to Kana and resetting should default to Rōmaji', () => {
    const { confirm, kanaModeButton, reset } = setup();

    fireEvent.click(kanaModeButton);
    fireEvent.click(reset);
    fireEvent.click(confirm);

    expect(onSubmitHandler).toHaveBeenCalledWith(SessionSettings.forGame(
        new KanaSettingsBuilder().withHiragana().build(),
        settings
    ));
});