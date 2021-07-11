import { fireEvent, render, screen } from "@testing-library/react";
import QuestionSettingsForm from "../../../../components/settings/kana/QuestionSettingsForm";
import { QuestionType } from "../../../../types/game/QuestionType";
import { Environment } from "../../../../utility/Environment";
import { QuestionSettingsBuilder } from "../../../../types/session/settings/game/QuestionSettings";

const onSelectHandler = jest.fn();
const environment = jest.fn();

const setup = () => {
    const component = render(<QuestionSettingsForm onChange={onSelectHandler}/>);
    return {
        kanaModeButton: screen.getByText('Kana'),
        romanjiModeButton: screen.getByText('Rōmaji'),
        score: screen.getByTestId('score-switch'),
        ...component
    }
}

beforeEach(() => {
    Environment.variable = environment;
});

afterEach(() => {
    jest.restoreAllMocks();
});

test('On mount it should call the onSelect event handler with the default settings', () => {
    setup();
    expect(onSelectHandler).toHaveBeenCalledWith(
        new QuestionSettingsBuilder().withType(QuestionType.ROMAJI).withCardQuantity(1).withScoreTracking(true).build()
    );
});

test('Selecting kana mode should call the onSelect eventHandler', () => {
    const { kanaModeButton } = setup();
    fireEvent.click(kanaModeButton);
    expect(onSelectHandler).toHaveBeenCalledWith(
        new QuestionSettingsBuilder().withType(QuestionType.KANA).withCardQuantity(4).withScoreTracking(true).build()
    );
});

test('Selecting rōmaji mode should call the onSelect eventHandler', () => {
    const { kanaModeButton, romanjiModeButton } = setup();
    fireEvent.click(kanaModeButton);
    fireEvent.click(romanjiModeButton);
    expect(onSelectHandler).toHaveBeenLastCalledWith(
        new QuestionSettingsBuilder().withType(QuestionType.ROMAJI).withCardQuantity(1).withScoreTracking(true).build()
    );
});

test('Selecting kana mode should change the description accordingly', () => {
    environment.mockReturnValue('Kana mode description');
    const { kanaModeButton } = setup();

    fireEvent.click(kanaModeButton);

    expect(environment).toHaveBeenCalledWith('Kana_MODE_DESC');
    expect(screen.getByText('Kana mode description'))
});

test('Selecting romaji mode should change the description accordingly', () => {
    environment.mockReturnValue('Romaji mode description');
    const { romanjiModeButton } = setup();

    fireEvent.click(romanjiModeButton);

    expect(environment).toHaveBeenCalledWith('Rōmaji_MODE_DESC');
    expect(screen.getByText('Romaji mode description'))
});

test('Selecting kana mode should render the 3 quantity buttons', () => {
    const { kanaModeButton } = setup();
    fireEvent.click(kanaModeButton);
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
});

test('Selecting 2 kana quantity should update the description', () => {
    const { kanaModeButton } = setup();
    fireEvent.click(kanaModeButton);
    fireEvent.click(screen.getByText('2'));
    expect(screen.getByText('You\'ll be shown 2 kana to choose from.'));
});

test('Selecting 4 kana quantity should update the description', () => {
    const { kanaModeButton } = setup();
    fireEvent.click(kanaModeButton);
    fireEvent.click(screen.getByText('4'));
    expect(screen.getByText('You\'ll be shown 4 kana to choose from.'));
});

test('Selecting 6 kana quantity should update the description', () => {
    const { kanaModeButton } = setup();
    fireEvent.click(kanaModeButton);
    fireEvent.click(screen.getByText('6'));
    expect(screen.getByText('You\'ll be shown 6 kana to choose from.'));
});

test('Turning off the score tracking system should set the boolean to false', () => {
    const { score } = setup();
    fireEvent.click(score);
    expect(onSelectHandler).toHaveBeenLastCalledWith(
        new QuestionSettingsBuilder().withType(QuestionType.ROMAJI).withCardQuantity(1).withScoreTracking(false).build()
    );
});