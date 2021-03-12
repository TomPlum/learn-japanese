import { fireEvent, render, screen } from "@testing-library/react";
import KanjiPage from "../../../components/pages/KanjiPage";

test('Should render the menu on load', () => {
    const component = render(<KanjiPage />);
    expect(component.getByText('Start')).toBeInTheDocument();
});

test('Should render the first flash card after starting from the menu', () => {
    const component = render(<KanjiPage />);
    fireEvent.click(component.getByText('Grade 1'));
    fireEvent.click(component.getByText('Start'));
    expect(screen.getByTestId('front')).toBeInTheDocument();
});