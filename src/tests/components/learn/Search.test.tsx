import { fireEvent, render, screen } from "@testing-library/react";
import Search from "../../../components/learn/Search";
import Adjective from "../../../types/sentence/Adjective";
import { AdjectiveType } from "../../../types/sentence/AdjectiveType";

const setup = () => {
    const data = [
        new Adjective(["to like"], "好き", AdjectiveType.NA, "すきな"),
        new Adjective(["beautiful or clean"], undefined, AdjectiveType.NA, "きれいな"),
        new Adjective(["quiet"], "静か", AdjectiveType.NA, "しずかな")
    ];

    const component = render(<Search data={data} />);

    return {
        search: component.getByPlaceholderText('Search via english, kana, kanji...'),
        ...component
    }
}

test('Should render all results on mount', () => {
    setup();
    expect(screen.getByText('3 Results')).toBeInTheDocument();
    expect(screen.getByText('to like')).toBeInTheDocument();
    expect(screen.getByText('beautiful or clean')).toBeInTheDocument();
    expect(screen.getByText('quiet')).toBeInTheDocument();
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