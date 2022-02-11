import { fireEvent, render, screen } from "@testing-library/react";
import QuestionSettingsForm from "../../../../components/settings/game/QuestionSettingsForm";
import QuestionType from "../../../../domain/game/QuestionType";
import { Environment } from "../../../../utility/Environment";
import QuestionSettings from "../../../../domain/session/settings/game/QuestionSettings";
import { getValueLastCalledWith } from "../../../Queries";
import userEvent from "@testing-library/user-event";
import LearnableField from "../../../../domain/learn/LearnableField";

const onSelectHandler = jest.fn();
const environment = jest.fn();

const setup = () => {
    const component = render(<QuestionSettingsForm onChange={onSelectHandler}/>);
    return {
        multipleChoiceButton: component.getByText('Multiple Choice'),
        textModeButton: component.getByText('Text'),
        matchModeButton: component.getByText('Match'),
        questionFieldSelector: component.getAllByTestId('learnable-field-selector')[0],
        answerFieldSelector: component.getAllByTestId('learnable-field-selector')[1],
        score: component.getByTestId('score-switch'),
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
    expect(getValueLastCalledWith<QuestionSettings>(onSelectHandler).type).toBe(QuestionType.CHOICE);
});

test('Selecting text mode should call the onSelect eventHandler with the updated type in the settings', () => {
    const { multipleChoiceButton, textModeButton } = setup();
    fireEvent.click(multipleChoiceButton);
    fireEvent.click(textModeButton);
    expect(getValueLastCalledWith<QuestionSettings>(onSelectHandler).type).toBe(QuestionType.TEXT);
});

test('Selecting multiple choice mode should change the description accordingly', () => {
    environment.mockReturnValue('Multiple choice mode description');
    const { multipleChoiceButton } = setup();

    fireEvent.click(multipleChoiceButton);

    expect(environment).toHaveBeenCalledWith('Multiple Choice_MODE_DESC');
    expect(screen.getByText('Multiple choice mode description'))
});

test('Selecting text mode should change the description accordingly', () => {
    environment.mockReturnValue('Text mode description');
    const { textModeButton } = setup();

    fireEvent.click(textModeButton);

    expect(environment).toHaveBeenCalledWith('Text_MODE_DESC');
    expect(screen.getByText('Text mode description'))
});

test('Selecting multiple choice mode should render the 3 quantity buttons', () => {
    const { multipleChoiceButton } = setup();
    fireEvent.click(multipleChoiceButton);
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
});

test('Selecting 2 answer quantity should update the description', () => {
    const { multipleChoiceButton } = setup();
    fireEvent.click(multipleChoiceButton);
    fireEvent.click(screen.getByText('2'));
    expect(screen.getByText('You\'ll be shown 2 answers to choose from.'));
});

test('Selecting 4 answer quantity should update the description', () => {
    const { multipleChoiceButton } = setup();
    fireEvent.click(multipleChoiceButton);
    fireEvent.click(screen.getByText('4'));
    expect(screen.getByText('You\'ll be shown 4 answers to choose from.'));
});

test('Selecting 6 answer quantity should update the description', () => {
    const { multipleChoiceButton } = setup();
    fireEvent.click(multipleChoiceButton);
    fireEvent.click(screen.getByText('6'));
    expect(screen.getByText('You\'ll be shown 6 answers to choose from.'));
});

test('Turning off the score tracking system should set the boolean to false', () => {
    const { score } = setup();
    fireEvent.click(score);
    expect(getValueLastCalledWith<QuestionSettings>(onSelectHandler).score).toBe(false);
});

test('The question field should default to romaji', () => {
    const { questionFieldSelector } = setup();
    expect(questionFieldSelector).toHaveValue('Rōmaji');
});

test('The answer field should default to kana', () => {
    const { answerFieldSelector } = setup();
    expect(answerFieldSelector).toHaveValue('Kana');
});

test('Selecting a question field value should remove it from the answer field selector', () => {
    const { questionFieldSelector, answerFieldSelector } = setup();
    userEvent.selectOptions(questionFieldSelector, "Japanese");
    expect(() => userEvent.selectOptions(answerFieldSelector, "Japanese")).toThrow('Value "Japanese" not found in options');
});

test('Selecting an answer field value should remove it from the question field selector', () => {
    const { questionFieldSelector, answerFieldSelector } = setup();
    userEvent.selectOptions(answerFieldSelector, "English Meaning");
    expect(() => userEvent.selectOptions(questionFieldSelector, "English Meaning")).toThrow('Value "English Meaning" not found in options');
});

test('Changing the question field should call the onSelect event handler with the updated settings', () => {
    const { questionFieldSelector } = setup();
    userEvent.selectOptions(questionFieldSelector, "English Meaning");
    expect(getValueLastCalledWith<QuestionSettings>(onSelectHandler).questionField).toBe(LearnableField.MEANING);
});

test('Changing the answer field should call the onSelect event handler with the updated settings', () => {
    const { answerFieldSelector } = setup();
    userEvent.selectOptions(answerFieldSelector, "On'Yomi Reading");
    expect(getValueLastCalledWith<QuestionSettings>(onSelectHandler).answerField).toBe(LearnableField.ONYOMI_READING);
});

test('Selecting the match question type should change the description accordingly', () => {
    environment.mockReturnValue('Match question type description');
    const { matchModeButton } = setup();

    fireEvent.click(matchModeButton);

    expect(environment).toHaveBeenCalledWith('Match_MODE_DESC');
    expect(screen.getByText('Match question type description'))
});

test('Selecting match should call the onSelect event handler with the Match question type and 3 quantity', () => {
    const { matchModeButton } = setup();
    fireEvent.click(matchModeButton);
    expect(getValueLastCalledWith<QuestionSettings>(onSelectHandler).type).toBe(QuestionType.MATCH);
    expect(getValueLastCalledWith<QuestionSettings>(onSelectHandler).quantity).toBe(3);
});
