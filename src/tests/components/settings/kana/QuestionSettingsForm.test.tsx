import { fireEvent, render, screen } from "@testing-library/react";
import QuestionSettingsForm from "../../../../components/settings/kana/QuestionSettingsForm";
import { QuestionType } from "../../../../types/game/QuestionType";
import { Environment } from "../../../../utility/Environment";
import QuestionSettings from "../../../../types/session/settings/game/QuestionSettings";
import { getValueLastCalledWith } from "../../../Queries";

const onSelectHandler = jest.fn();
const environment = jest.fn();

const setup = () => {
    const component = render(<QuestionSettingsForm onChange={onSelectHandler}/>);
    return {
        multipleChoiceButton: screen.getByText('Multiple Choice'),
        textModeButton: screen.getByText('Text'),
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

    const settings = getValueLastCalledWith<QuestionSettings>(onSelectHandler);

    //Have to use field access here as equality on whole object fails due to function reference of answerFilter.
    expect(settings.type).toBe(QuestionType.TEXT);
    expect(settings.cards).toBe(1);
    expect(settings.score).toBe(true);
});

test('Selecting multiple choice mode should call the onSelect eventHandler', () => {
    const { multipleChoiceButton } = setup();
    fireEvent.click(multipleChoiceButton);
    console.log("THIS ONE")
    expect(getValueLastCalledWith<QuestionSettings>(onSelectHandler).type).toBe(QuestionType.CHOICE);
});

test('Selecting text mode should call the onSelect eventHandler with the updated type in the settings', () => {
    const { multipleChoiceButton, textModeButton } = setup();
    fireEvent.click(multipleChoiceButton);
    fireEvent.click(textModeButton);
    expect(getValueLastCalledWith<QuestionSettings>(onSelectHandler).type).toBe(QuestionType.TEXT);
});

test('Selecting kana mode should change the description accordingly', () => {
    environment.mockReturnValue('Kana mode description');
    const { multipleChoiceButton } = setup();

    fireEvent.click(multipleChoiceButton);

    expect(environment).toHaveBeenCalledWith('Multiple Choice_MODE_DESC');
    expect(screen.getByText('Kana mode description'))
});

test('Selecting romaji mode should change the description accordingly', () => {
    environment.mockReturnValue('Romaji mode description');
    const { textModeButton } = setup();

    fireEvent.click(textModeButton);

    expect(environment).toHaveBeenCalledWith('Text_MODE_DESC');
    expect(screen.getByText('Romaji mode description'))
});

test('Selecting kana mode should render the 3 quantity buttons', () => {
    const { multipleChoiceButton } = setup();
    fireEvent.click(multipleChoiceButton);
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
});

test('Selecting 2 kana quantity should update the description', () => {
    const { multipleChoiceButton } = setup();
    fireEvent.click(multipleChoiceButton);
    fireEvent.click(screen.getByText('2'));
    expect(screen.getByText('You\'ll be shown 2 kana to choose from.'));
});

test('Selecting 4 kana quantity should update the description', () => {
    const { multipleChoiceButton } = setup();
    fireEvent.click(multipleChoiceButton);
    fireEvent.click(screen.getByText('4'));
    expect(screen.getByText('You\'ll be shown 4 kana to choose from.'));
});

test('Selecting 6 kana quantity should update the description', () => {
    const { multipleChoiceButton } = setup();
    fireEvent.click(multipleChoiceButton);
    fireEvent.click(screen.getByText('6'));
    expect(screen.getByText('You\'ll be shown 6 kana to choose from.'));
});

test('Turning off the score tracking system should set the boolean to false', () => {
    const { score } = setup();
    fireEvent.click(score);
    expect(getValueLastCalledWith<QuestionSettings>(onSelectHandler).score).toBe(false);
});