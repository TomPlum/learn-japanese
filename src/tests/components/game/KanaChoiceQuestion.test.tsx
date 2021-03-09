import { fireEvent, render, screen } from "@testing-library/react";
import KanaChoiceQuestion, { KanaChoiceQuestionProps } from "../../../components/game/KanaChoiceQuestion";
import { Kana } from "../../../types/Kana";
import KanaType from "../../../types/KanaType";
import { KanaColumn } from "../../../types/KanaColumn";
import Arrays from "../../../utility/Arrays";
import { getByTextWithElements } from "../../Queries";

const onSubmitHandler = jest.fn();

const a = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
const i = new Kana("い", ["i"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
const e = new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
const o = new Kana("お", ["o"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);

let props: KanaChoiceQuestionProps

const setup = () => {
    const component = render(<KanaChoiceQuestion {...props} />);
    return {
        submit: component.getByText('Check'),
        ...component
    }
}

beforeEach(() => {
    const mockShuffle = jest.fn();
    Arrays.shuffle = mockShuffle;
    mockShuffle.mockReturnValue([a, i, e, o]);

    props = {
        expected: a,
        wrong: [i, e, o],
        hidden: false,
        onSubmit: onSubmitHandler
    };
});

test('Should render the expected and all wrong answers', () => {
    setup();
    expect(screen.getByText('あ')).toBeInTheDocument();
    expect(screen.getByText('い')).toBeInTheDocument();
    expect(screen.getByText('え')).toBeInTheDocument();
    expect(screen.getByText('お')).toBeInTheDocument();
});

test('On mount the submit button should be disabled', () => {
    const { submit } = setup();
    expect(submit).toBeDisabled();
});

test('When hidden, the submit button should be disabled, even if an option is selected', () => {
    props.hidden = true;
    const { submit } = setup();
    fireEvent.click(screen.getByText('あ'));
    expect(submit).toBeDisabled();
});

test('Should render the question banner', () => {
    setup();
    expect(getByTextWithElements('Which kana is \'a\' ?')).toBeInTheDocument();
});

test('Answering correctly should call the onSubmit event handler with true', () => {
    const { submit } = setup();
    fireEvent.click(screen.getByText('あ'));
    fireEvent.click(submit);
    expect(onSubmitHandler).toHaveBeenCalledWith(true);
});

test('Answering incorrectly should call the onSubmit event handler with false', () => {
    const { submit } = setup();
    fireEvent.click(screen.getByText('え'));
    fireEvent.click(submit);
    expect(onSubmitHandler).toHaveBeenCalledWith(false);
});

test('On mount all options should be un-selected and have the default \'tile\' class', () => {
    const { container } = setup();
    container?.firstChild?.firstChild?.firstChild?.childNodes.forEach(child => {
        expect(child).toHaveClass('tile');
    });
});

test('Selecting an option should change its displays container class to \'selected\'', () => {
    setup();
    const option = screen.getByText('え');
    fireEvent.click(option);
    expect(option.parentElement).toHaveClass('selected');
});

test('Selecting an option should change its displays character class colour', () => {
    setup();
    const option = screen.getByText('え');
    fireEvent.click(option);
    expect(option).toHaveProperty('style._values.color', 'rgb(67, 234, 95)');
});

test('Pressing the number key for a given option index should select it', () => {
    const { container } = setup();

    fireEvent.keyDown(container, { key: '1', keyCode: 49 });
    expect(screen.getByText('あ').parentElement).toHaveClass('selected');

    fireEvent.keyDown(container, { key: '2', keyCode: 50 });
    expect(screen.getByText('い').parentElement).toHaveClass('selected');

    fireEvent.keyDown(container, { key: '3', keyCode: 51 });
    expect(screen.getByText('え').parentElement).toHaveClass('selected');

    fireEvent.keyDown(container, { key: '4', keyCode: 52 });
    expect(screen.getByText('お').parentElement).toHaveClass('selected');
});

test('Pressing the enter key when an option is selected should call the onSubmit event handler', () => {
    const { container } = setup();
    fireEvent.click(screen.getByText('え'));
    fireEvent.keyDown(container, { key: 'Enter', keyCode: 13 });
    expect(onSubmitHandler).toHaveBeenCalled();
});

test('Pressing the enter key when no options are selected should not call the onSubmit event handler', () => {
    const { container } = setup();
    fireEvent.keyDown(container, { key: 'Enter', keyCode: 13 });
    expect(onSubmitHandler).not.toHaveBeenCalled();
});