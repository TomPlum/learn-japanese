import { fireEvent, render, screen } from "@testing-library/react";
import SearchPage from "../../../components/pages/SearchPage";

const setup = () => {
    const component = render(<SearchPage />);
    return {
        search: component.getByPlaceholderText('Enter the romaji'),
        hiragana: component.getByTestId('hiragana-switch'),
        katakana: component.getByTestId('katakana-switch'),
        diagraphs: component.getByTestId('diagraphs-switch'),
        diacriticals: component.getByTestId('diacriticals-switch'),
        ...component
    }
}

test('On mount should render all Kana', () => {
    setup();
    expect(screen.getByText('214 Results')).toBeInTheDocument();
});

test('Toggling the Hiragana button off should hide all Hiragana Kana from the screen', () => {
    const { hiragana } = setup();
    fireEvent.click(hiragana);
    expect(screen.getByText('107 Results')).toBeInTheDocument();
});

test('Toggling the Katakana button off should hide all Katakana Kana from the screen', () => {
    const { katakana } = setup();
    fireEvent.click(katakana);
    expect(screen.getByText('107 Results')).toBeInTheDocument();
});

test('Toggling the Diagraphs button off should hide all diagraphs from the screen', () => {
    const { diagraphs } = setup();
    fireEvent.click(diagraphs);
    expect(screen.getByText('142 Results')).toBeInTheDocument();
});

test('Toggling the Diacriticals button off should hide all diacritical Kana from the screen', () => {
    const { diacriticals } = setup();
    fireEvent.click(diacriticals);
    expect(screen.getByText('137 Results')).toBeInTheDocument();
});

test('Searching should reduce the kana to match the term', () => {
    const { search } = setup();
    fireEvent.change(search, { target: { value: 'a' }});
    expect(screen.getByText('54 Results')).toBeInTheDocument();
});

test('Searching and toggling a filter should combine to further reduce the results', () => {
    const { search, hiragana } = setup();
    fireEvent.change(search, { target: { value: 'a' }});
    fireEvent.click(hiragana);
    expect(screen.getByText('27 Results')).toBeInTheDocument();
});