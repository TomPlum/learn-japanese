import { fireEvent, render, screen } from "@testing-library/react";
import Feedback, { FeedbackProps } from "../../../components/results/Feedback";
import { Kana } from "../../../types/Kana";
import KanaType from "../../../types/KanaType";
import { KanaColumn } from "../../../types/KanaColumn";

let props: FeedbackProps = {
    kana: []
};

const setup = () => {
    const component = render(<Feedback {...props} />);
    return {
        accordion: screen.getByText('View your mistakes'),
        ...component
    };
}

test('A single kana with one failure instance should render 1 tile', () => {
    props.kana = [new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)];
    const { accordion } = setup();

    fireEvent.click(accordion);

    expect(screen.getByText('x1')).toBeInTheDocument();
    expect(screen.getByText('a')).toBeInTheDocument();
    expect(screen.getByText('あ')).toBeInTheDocument();
});

test('Multiple kana should render multiple tiles with their respective mistakes', () => {
    const bya = new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true);
    const a = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
    props.kana = [a, bya, bya];

    const { accordion } = setup();
    fireEvent.click(accordion);

    expect(screen.getByText('x2')).toBeInTheDocument();
    expect(screen.getByText('bya')).toBeInTheDocument();
    expect(screen.getByText('びゃ')).toBeInTheDocument();

    expect(screen.getByText('x1')).toBeInTheDocument();
    expect(screen.getByText('a')).toBeInTheDocument();
    expect(screen.getByText('あ')).toBeInTheDocument();
});