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
import { getValueLastCalledWith } from "../../Queries";

let settings: GameSettings;

beforeEach(() => {
   settings = new GameSettingsBuilder()
       .withQuestionSettings(new QuestionSettingsBuilder()
           .withType(QuestionType.TEXT)
           .withCardQuantity(1)
           .withScoreTracking(true)
           .build()
       )
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
        multipleChoiceButton: screen.getByText('Multiple Choice'),
        textModeButton: screen.getByText('Text'),
        ...component
    }
}

test.skip('Clicking submit without changing any settings should call the onSubmit even handler with default settings', () => {
    const { confirm } = setup();
    fireEvent.click(confirm);
    const settings = getValueLastCalledWith<SessionSettings>(onSubmitHandler);
    expect(settings.gameSettings).toStrictEqual(new KanaSettingsBuilder().withHiragana().build())
});

test('Changing the game mode to multiple choice and submitting should update the settings', () => {
    const { confirm, multipleChoiceButton } = setup();

    fireEvent.click(multipleChoiceButton);
    fireEvent.click(confirm);

    expect(getValueLastCalledWith<SessionSettings>(onSubmitHandler).gameSettings?.question.type).toBe(QuestionType.CHOICE);
});

test('Changing the game mode to multiple choice and resetting should default to text', () => {
    const { confirm, multipleChoiceButton, reset } = setup();

    fireEvent.click(multipleChoiceButton);
    fireEvent.click(reset);
    fireEvent.click(confirm);

    expect(getValueLastCalledWith<SessionSettings>(onSubmitHandler).gameSettings?.question.type).toBe(QuestionType.TEXT);
});