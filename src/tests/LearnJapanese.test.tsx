import { render, screen } from "@testing-library/react";
import LearnJapanese from "../LearnJapanese";

test('Should render the main layout', () => {
    render(<LearnJapanese />);
    expect(screen.getByText('A simple memory training app for learning the Japanese Hiragana and Katakana syllabaries.')).toBeInTheDocument();
});