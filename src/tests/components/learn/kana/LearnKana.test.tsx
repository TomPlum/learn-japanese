import { RandomNumberGenerator } from "../../../../utility/RandomNumberGenerator";
import { Kana } from "../../../../types/kana/Kana";
import KanaType from "../../../../types/kana/KanaType";
import { KanaColumn } from "../../../../types/kana/KanaColumn";
import { fireEvent, render, screen } from "@testing-library/react";
import LearnKana, { LearnKanaProps } from "../../../../components/learn/kana/LearnKana";

const onFinishHandler = jest.fn();

const a = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
const i = new Kana("い", ["i"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
const e = new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
const o = new Kana("お", ["o"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);

let props: LearnKanaProps;

beforeEach(() => {
    props = {
        kana: [a, i, e, o],
        onFinish: onFinishHandler
    };

    RandomNumberGenerator.getRandomObject = jest.fn().mockImplementation((array: any[]) => {
        const objects = [...array];
        const firstKana = objects[0];
        objects.splice(0, 1);
        return [firstKana, objects];
    });
});

afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
});

const setup = () => {
    const component = render(<LearnKana {...props} />);
    return {
        remembered: component.getByTitle('I remembered it'),
        forgot: component.getByTitle('I couldn\'t remember it'),
        next: component.getByText('Next'),
        quit: component.getByTitle('Quit'),
        ...component
    };
}

test('Should show a random flash card to start', () => {
    setup();
    expect(screen.getByText('あ')).toBeInTheDocument();
});

test('Forgotten, Remembered & Next buttons should be disabled before the user has flipped once', () => {
    const { next, remembered, forgot} = setup();
    expect(next).toBeDisabled();
    expect(remembered).toBeDisabled();
    expect(forgot).toBeDisabled();
});

test('Flipping the card should enable the Forgotten & Remembered buttons', () => {
    const { next, remembered, forgot} = setup();
    fireEvent.click(screen.getByText('あ'));
    expect(remembered).not.toBeDisabled();
    expect(forgot).not.toBeDisabled();
    expect(next).toBeDisabled();
});

test('Flipping the card and selecting Remembered should enable the Next button', () => {
    const { next, remembered } = setup();
    fireEvent.click(screen.getByText('あ'));
    fireEvent.click(remembered)
    expect(next).not.toBeDisabled();
});

test('Flipping the card and selecting Forgotten should enable the Next button', () => {
    const { next, forgot } = setup();
    fireEvent.click(screen.getByText('あ'));
    fireEvent.click(forgot)
    expect(next).not.toBeDisabled();
});

test('Clicking Next should render the next Kana', () => {
    const { next, remembered } = setup();
    fireEvent.click(screen.getByText('あ'));
    fireEvent.click(remembered)
    fireEvent.click(next)
    expect(screen.getByText('い')).toBeInTheDocument();
});

test('Clicking Next should advance the progress bar', () => {
    const { next, remembered } = setup();

    expect(screen.getByTitle('1/4')).toBeInTheDocument();

    fireEvent.click(screen.getByText('あ'));
    fireEvent.click(remembered)
    fireEvent.click(next)

    expect(screen.getByTitle('2/4')).toBeInTheDocument();
});

test('Getting to the last kana should not change the Next button to Finish if the card is un-flipped', () => {
    const { next, remembered } = setup();

    fireEvent.click(screen.getByText('あ'));
    fireEvent.click(remembered);
    fireEvent.click(next);

    fireEvent.click(screen.getByText('い'));
    fireEvent.click(remembered);
    fireEvent.click(next);

    fireEvent.click(screen.getByText('え'));
    fireEvent.click(remembered);
    fireEvent.click(next);

    //We're now at the last card (お)
    expect(next).toBeInTheDocument();
});

test('Getting to the last kana and flipping the card should change the Next button to Finish', () => {
    const { next, remembered, forgot } = setup();

    fireEvent.click(screen.getByText('あ'));
    fireEvent.click(forgot);
    fireEvent.click(next);

    fireEvent.click(screen.getByText('い'));
    fireEvent.click(remembered);
    fireEvent.click(next);

    fireEvent.click(screen.getByText('え'));
    fireEvent.click(remembered);
    fireEvent.click(next);

    fireEvent.click(screen.getByText('お'));
    expect(screen.getByText('Finish')).toBeInTheDocument();
});

test('Clicking Finish should call the onFinish event handler with the results', () => {
    const { next, remembered, forgot } = setup();

    fireEvent.click(screen.getByText('あ'));
    fireEvent.click(remembered);
    fireEvent.click(next);

    fireEvent.click(screen.getByText('い'));
    fireEvent.click(forgot);
    fireEvent.click(next);

    fireEvent.click(screen.getByText('え'));
    fireEvent.click(remembered);
    fireEvent.click(next);

    fireEvent.click(screen.getByText('お'));
    fireEvent.click(forgot); //Forgetting the last one here should still be included upon finishing
    fireEvent.click(screen.getByText('Finish'));

    expect(onFinishHandler).toHaveBeenCalledWith({ remembered: [a, e], forgotten: [i, o] });
});

test('Clicking Finish should include the last display kana in the results', () => {
    const { next, remembered, forgot } = setup();

    fireEvent.click(screen.getByText('あ'));
    fireEvent.click(remembered);
    fireEvent.click(next);

    fireEvent.click(screen.getByText('い'));
    fireEvent.click(forgot);
    fireEvent.click(next);

    fireEvent.click(screen.getByText('え'));
    fireEvent.click(remembered);
    fireEvent.click(next);

    fireEvent.click(screen.getByText('お'));
    fireEvent.click(remembered); //Remembering the last one here should still be included upon finishing
    fireEvent.click(screen.getByText('Finish'));

    expect(onFinishHandler).toHaveBeenCalledWith({ remembered: [a, e, o], forgotten: [i] });
});

test('Clicking the Quit button should render the confirmation modal', () => {
    const { quit } = setup();
    fireEvent.click(quit);
    expect(screen.getByText('Are you sure you want to quit?')).toBeInTheDocument();
});

test('Clicking \'Yes\' in the confirmation modal should call the onFinish event handler', () => {
    const { quit } = setup();
    fireEvent.click(quit);
    fireEvent.click(screen.getByText('Yes'));
    expect(onFinishHandler).toHaveBeenCalled();
});

test('Clicking \'No\' in the confirmation modal should resume and hide the modal', () => {
    const { quit } = setup();
    fireEvent.click(quit);
    fireEvent.click(screen.getByText('No'));
    expect(screen.queryByText('Are you sure you want to quit?')).not.toBeInTheDocument();
});