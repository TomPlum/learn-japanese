import KanaGameSettingsMenu from "../../../components/settings/KanaGameSettingsMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import { QuestionType } from "../../../types/game/QuestionType";
import GameSettings, { GameSettingsBuilder } from "../../../types/session/settings/game/GameSettings";
import { LifeQuantity } from "../../../types/game/LifeQuantity";
import { CustomLearnMenuProps } from "../../../components/learn/ModeSelectionMenu";
import { SessionSettings } from "../../../types/session/settings/SessionSettings";
import { KanaSettingsBuilder } from "../../../types/session/settings/data/KanaSettings";
import { LifeSettingsBuilder } from "../../../types/session/settings/game/LifeSettings";
import { HintSettingsBuilder } from "../../../types/session/settings/game/HintSettings";
import { HintQuantity } from "../../../types/game/HintQuantity";
import { TimeSettingsBuilder } from "../../../types/session/settings/game/TimeSettings";
import { QuestionSettingsBuilder } from "../../../types/session/settings/game/QuestionSettings";

let settings: GameSettings;

beforeEach(() => {
   settings = new GameSettingsBuilder()
       .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.ROMAJI).withCardQuantity(1).withScoreTracking(true).build())
       .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(HintQuantity.THREE).build())
       .withLifeSettings(new LifeSettingsBuilder().isEnabled(false).withQuantity(LifeQuantity.FIVE).build())
       .withTimeSettings(new TimeSettingsBuilder().isTimed().build())
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
        .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.KANA).withCardQuantity(4).withScoreTracking(true).build())
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