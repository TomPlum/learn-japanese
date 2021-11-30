import { fireEvent, render, screen } from "@testing-library/react";
import LearnableMeaningQuestion, { LearnableMeaningQuestionProps } from "../../../../components/game/questions/LearnableMeaningQuestion";
import { Kanji } from "../../../../domain/kanji/Kanji";
import { KanjiReading } from "../../../../domain/kanji/KanjiReading";
import { ReadingType } from "../../../../domain/kanji/ReadingType";
import { KyoikuGrade } from "../../../../domain/kanji/KyoikuGrade";
import each from "jest-each";
import { Learnable } from "../../../../domain/learn/Learnable";
import React from "react";
import Definition from "../../../../domain/sentence/Definition";
import JLTPLevel from "../../../../domain/learn/JLTPLevel";

const isValidHandler = jest.fn();
const ref = React.createRef<LearnableMeaningQuestion>();

const fish = new Kanji("魚", [new KanjiReading("sakana", "さかな", ReadingType.KUN)], ["fish", "sea creature"], KyoikuGrade.TWO, JLTPLevel.N5, "", [], ["animal"]);

let props: LearnableMeaningQuestionProps;

beforeEach(() => {
    props = {
        data: fish,
        hidden: false,
        isValid: isValidHandler,
    }
});

const setup = () => {
    const component = render(<LearnableMeaningQuestion {...props} ref={ref} />);
    return {
        input: component.getByPlaceholderText('English Meaning'),
        inputHelp: component.getByTestId('game-input-help')
    }
}

test('The answer field should default to empty', () => {
    const { input } = setup();
    expect(input).toHaveValue("");
});

test("Should display the kanji variation of the Learnable object if it has one", () => {
    props.data = fish;
    setup();
    expect(screen.getByText("魚")).toBeInTheDocument();
});

test("Should display the the first kana value from the Learnable object if has no kanji variation", () => {
    props.data = new Definition(["not much"], undefined, "あまり", "Adverb");
    setup();
    expect(screen.getByText("あまり")).toBeInTheDocument();
});

test("Should display 'N/A' if the Learnable object is undefined", () => {
    props.data = undefined;
    setup();
    expect(screen.getByText("N/A")).toBeInTheDocument();
});

test("Should disable the input field when the hidden property is passed as true", () => {
    props.hidden = true;
    const { input } = setup();
    expect(input).toBeDisabled();
});

each([null, undefined]).test("Should disable the input field when the data property is passed falsy", (data: Learnable) => {
    props.data = data;
    const { input } = setup();
    expect(input).toBeDisabled();
});

test("Should enable the input field when the data value is truthy and hidden is false", () => {
    props.hidden = false;
    props.data = fish;
    const { input } = setup();
    expect(input).not.toBeDisabled();
});

test("Should call isValid with true if the value is truthy", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "fish" }});
    expect(isValidHandler).toHaveBeenCalledWith(true);
});

test("Should call isValid with false if the value is falsy", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "abc" }}); //We need to change it to something first so that the falsy values trigger an event
    fireEvent.change(input, { target: { value: '' }});
    expect(isValidHandler).toHaveBeenLastCalledWith(false);
});

each(["fish", "sea creature"]).test("isCorrect should return true if the answer matches any of the data's meanings", (answer: string) => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: answer }});
    expect(ref.current?.isCorrect()).toBe(true);
});

each(["sushi", "fsih"]).test("isCorrect should return false if the does not match any of the data's meanings", (answer: string) => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: answer }});
    expect(ref.current?.isCorrect()).toBe(false);
});

test("isCorrect should return false if the data is undefined", () => {
    props.data = undefined;
    setup();
    expect(ref.current?.isCorrect()).toBe(false);
});
