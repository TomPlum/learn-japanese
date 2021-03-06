import { fireEvent, render, screen } from "@testing-library/react";
import Search from "../../../components/learn/Search";
import Definition from "../../../types/sentence/Definition";
import { Kanji } from "../../../types/kanji/Kanji";
import { Reading } from "../../../types/kanji/Reading";
import { ReadingType } from "../../../types/kanji/ReadingType";
import { KyoikuGrade } from "../../../types/kanji/KyoikuGrade";

const setup = () => {
    const data = [
        new Definition(["to like"], "好き","すきな", "な Adjective"),
        new Definition(["beautiful or clean"], undefined, "きれいな", "な Adjective"),
        new Definition(["quiet"], "静か", "しずかな", "な Adjective"),
        new Kanji("一", [new Reading("ichi", "いち", ReadingType.ON)], ["one"], KyoikuGrade.ONE, "", [], ["number"]),
        new Kanji("魚", [new Reading("sakana", "さかな", ReadingType.KUN)], ["fish"], KyoikuGrade.TWO, "", [], ["animal"]),
        new Kanji("鳥", [new Reading("tori", "とり", ReadingType.ON)], ["bird"], KyoikuGrade.TWO, "", [], ["animal"]),
    ];

    const component = render(<Search data={data} tags={["number", "animal"]} />);

    return {
        search: component.getByPlaceholderText('Search via english, kana, kanji...'),
        ...component
    }
}

test('Should render all results on mount', () => {
    setup();
    expect(screen.getByText('6 Results')).toBeInTheDocument();
    expect(screen.getByText('to like')).toBeInTheDocument();
    expect(screen.getByText('beautiful or clean')).toBeInTheDocument();
    expect(screen.getByText('quiet')).toBeInTheDocument();
    expect(screen.getByText('one')).toBeInTheDocument();
    expect(screen.getByText('fish')).toBeInTheDocument();
    expect(screen.getByText('bird')).toBeInTheDocument();
});

test('Searching via the english meaning should show the result', () => {
    const { search } = setup();

    fireEvent.change(search, { target: { value: 'like' } });

    expect(screen.getByText('1 Results')).toBeInTheDocument();
    expect(screen.getByText('to like')).toBeInTheDocument();
    expect(screen.queryByText('beautiful or clean')).not.toBeInTheDocument();
    expect(screen.queryByText('quiet')).not.toBeInTheDocument();
});

test('Searching via the kana should show the result', () => {
    const { search } = setup();

    fireEvent.change(search, { target: { value: 'すき' } });

    expect(screen.getByText('1 Results')).toBeInTheDocument();
    expect(screen.getByText('to like')).toBeInTheDocument();
    expect(screen.queryByText('beautiful or clean')).not.toBeInTheDocument();
    expect(screen.queryByText('quiet')).not.toBeInTheDocument();
});

test('Searching via the kanji should show the result', () => {
    const { search } = setup();

    fireEvent.change(search, { target: { value: '好' } });

    expect(screen.getByText('1 Results')).toBeInTheDocument();
    expect(screen.getByText('to like')).toBeInTheDocument();
    expect(screen.queryByText('beautiful or clean')).not.toBeInTheDocument();
    expect(screen.queryByText('quiet')).not.toBeInTheDocument();
});

test('Selecting a tag should filter the results to only the Kanji with that tag', () => {
    setup();

    fireEvent.click(screen.getByText('animal'));

    expect(screen.getByText('2 Results')).toBeInTheDocument();

    expect(screen.queryByText('to like')).not.toBeInTheDocument();
    expect(screen.queryByText('beautiful or clean')).not.toBeInTheDocument();
    expect(screen.queryByText('quiet')).not.toBeInTheDocument();
    expect(screen.queryByText('one')).not.toBeInTheDocument();
    expect(screen.getByText('fish')).toBeInTheDocument();
    expect(screen.getByText('bird')).toBeInTheDocument();
});

test('Selecting a tag and searching should filter only results with that tag and matching the search term', () => {
    const { search } = setup();

    fireEvent.click(screen.getByText('animal')); //Should return bird and fish
    fireEvent.change(search, { target: { value: 'か' } }); //Should return only fish

    expect(screen.getByText('fish')).toBeInTheDocument();
    expect(screen.queryByText('to like')).not.toBeInTheDocument();
    expect(screen.queryByText('beautiful or clean')).not.toBeInTheDocument();
    expect(screen.queryByText('quiet')).not.toBeInTheDocument();
    expect(screen.queryByText('one')).not.toBeInTheDocument();
    expect(screen.queryByText('bird')).not.toBeInTheDocument();
});