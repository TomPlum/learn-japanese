import { fireEvent, render, screen } from "@testing-library/react";
import Search from "../../../components/learn/Search";
import Definition from "../../../types/sentence/Definition";

const setup = () => {
    const data = [
        new Definition(["to like"], "好き","すきな", "な Adjective"),
        new Definition(["beautiful or clean"], undefined, "きれいな", "な Adjective"),
        new Definition(["quiet"], "静か", "しずかな", "な Adjective")
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