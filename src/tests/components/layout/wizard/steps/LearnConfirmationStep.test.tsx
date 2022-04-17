import { render, screen } from "@testing-library/react";
import LearnConfirmationStep, { LearnConfirmationStepProps } from "../../../../../components/layout/wizard/steps/LearnConfirmationStep";
import { KanaSettingsBuilder } from "../../../../../domain/session/settings/data/KanaSettings";
import { SessionSettings } from "../../../../../domain/session/settings/SessionSettings";
import LearnSettings from "../../../../../domain/session/settings/LearnSettings";

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

test('It should render the learn session settings confirmation step', () => {
    setup();
    expect(screen.getByTestId("learn-session-settings-summary")).toBeInTheDocument();
});
