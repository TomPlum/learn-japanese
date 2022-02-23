import { fireEvent, render, screen } from "@testing-library/react";
import LearnConfirmationStep, { LearnConfirmationStepProps } from "../../../../../components/layout/wizard/steps/LearnConfirmationStep";
import { KanaSettingsBuilder } from "../../../../../domain/session/settings/data/KanaSettings";
import { SessionSettings } from "../../../../../domain/session/settings/SessionSettings";
import LearnSettings from "../../../../../domain/session/settings/LearnSettings";
import { WizardStep } from "../../../../../components/layout/wizard/SessionWizard";

const onSelectStageHandler = jest.fn();
let props: LearnConfirmationStepProps;

const setup = () => {
    const component = render(<LearnConfirmationStep {...props} />);
    return {
        ...component
    }
}

beforeEach(() => {
    props = {
        settings: SessionSettings.forLearning(new KanaSettingsBuilder().build(), new LearnSettings()),
        onSelectStage: onSelectStageHandler
    };
});

test('It should render the text before the mode', () => {
    setup();
    expect(screen.getByText("You'll be")).toBeInTheDocument();
});

test('It should render the mode text', () => {
    setup();
    expect(screen.getByText("learning")).toBeInTheDocument();
});

test('It should render the text in-between the mode and the topic', () => {
    setup();
    expect(screen.getByText("about")).toBeInTheDocument();
});

test('It should render the topic name', () => {
    setup();
    expect(screen.getByText("Hiragana & Katakana")).toBeInTheDocument();
});

test('It should render the text after the topic name', () => {
    setup();
    expect(screen.getByText("via flash cards.")).toBeInTheDocument();
});

test('Clicking the mode should call the onSelectStage event handler with the mode stage', () => {
    setup();
    fireEvent.click(screen.getByText('learning'));
    expect(onSelectStageHandler).toHaveBeenLastCalledWith(WizardStep.MODE);
});

test('Clicking the topic should call the onSelectStage event handler with the topic stage', () => {
    setup();
    fireEvent.click(screen.getByText('Hiragana & Katakana'));
    expect(onSelectStageHandler).toHaveBeenLastCalledWith(WizardStep.TOPIC);
});
