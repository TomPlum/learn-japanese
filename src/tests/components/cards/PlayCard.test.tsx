import { fireEvent, screen } from "@testing-library/react";
import PlayCard from "../../../components/cards/PlayCard";
import renderReduxConsumer from "../../renderReduxConsumer";
import { store } from "../../../store";
import { clearLastLearnPreset, clearLastPlayPreset, setLastLearnPreset, setLastPlayPreset } from "../../../slices/SessionSettingsSlice";
import PlayMode from "../../../domain/session/PlayMode";
import { KanaSettingsBuilder } from "../../../domain/session/settings/data/KanaSettings";
import { GameSettingsBuilder } from "../../../domain/session/settings/game/GameSettings";
import LearnMode from "../../../domain/session/LearnMode";
import LearnSettings from "../../../domain/session/settings/LearnSettings";

const playPreset = new PlayMode(1, "Test Play", "#ffffff", "FaAtom", new KanaSettingsBuilder().build(), new GameSettingsBuilder().build(), "Topic", "", false, 3);
const learnPreset = new LearnMode(2, "Test Learn", "#fdb40e", "あ", new KanaSettingsBuilder().withHiragana().build(), new LearnSettings(), "Topic", "", false, 4);


test('Clicking the start button should launch the wizard', async () => {
    const component = renderReduxConsumer(<PlayCard />);
    fireEvent.click(component.getByTestId("launch-wizard"));
    expect(await screen.findByTestId('start-session-wizard')).toBeInTheDocument();
});

test('Closing the wizard should stop rendering it', async () => {
    // Launch Wizard
    const component = renderReduxConsumer(<PlayCard />);
    fireEvent.click(component.getByTestId("launch-wizard"));
    expect(await component.findByTestId("start-session-wizard")).toBeInTheDocument();

    // Quit & Confirm
    fireEvent.click(screen.getByTitle('Close'));
    fireEvent.click(await screen.findByText('Yes'));

    // Should stop rendering wizard
    expect(await component.queryByTestId("start-session-wizard")).not.toBeInTheDocument();
});

test('Should render the start last play session with the correct title if the store is empty', () => {
    store.dispatch(clearLastPlayPreset());
    const component = renderReduxConsumer(<PlayCard />);
    expect(component.getByTitle('You\'ve not played anything recently.')).toBeInTheDocument();
});

test('Should render the start last learn session with the correct title if the store is empty', () => {
    store.dispatch(clearLastLearnPreset());
    const component = renderReduxConsumer(<PlayCard />);
    expect(component.getByTitle('You\'ve not practiced anything recently.')).toBeInTheDocument();
});

test('Should render the launch preset dialog with the last play preset if one is present in the store', async () => {
    store.dispatch(setLastPlayPreset(playPreset));
    const component = renderReduxConsumer(<PlayCard />);

    fireEvent.click(component.getByTitle('Test Play'));

    expect(await screen.findByTestId('launch-preset-confirmation')).toBeInTheDocument();
    expect(screen.getByText('Test Play')).toBeInTheDocument();
});

test('Should render the launch preset dialog with the last learn preset if one is present in the store', async () => {
    // Start with a learn session already in the redux store
    store.dispatch(setLastLearnPreset(learnPreset));
    const component = renderReduxConsumer(<PlayCard />);

    // Click the last learn session button
    fireEvent.click(component.getByTitle('Test Learn'));

    // Should render modal with the learn preset
    expect(await screen.findByTestId('launch-preset-confirmation')).toBeInTheDocument();
    expect(screen.getByText('Test Learn')).toBeInTheDocument();

    // Clicking close should dismiss
    fireEvent.click(screen.getByTitle('Close'));
    expect(screen.queryByTestId('launch-preset-confirmation')).not.toBeInTheDocument();
});

test('Clicking the start last play session button when there are no setting should not launch the modal', async () => {
    store.dispatch(clearLastPlayPreset());
    const component = renderReduxConsumer(<PlayCard />);
    fireEvent.click(component.getByTitle('You\'ve not played anything recently.'));
    expect(await screen.queryByTestId('launch-preset-confirmation')).not.toBeInTheDocument();
});

test('Clicking the start last learn session button when there are no setting should not launch the modal', async () => {
    store.dispatch(clearLastLearnPreset());
    const component = renderReduxConsumer(<PlayCard />);
    fireEvent.click(component.getByTitle('You\'ve not practiced anything recently.'));
    expect(await screen.queryByTestId('launch-preset-confirmation')).not.toBeInTheDocument();
});
