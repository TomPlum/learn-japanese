import { fireEvent, render, screen } from "@testing-library/react";
import KanjiWordDisplay from "../../../components/ui/KanjiWordDisplay";

test('Should render the character if it does not match a known Kanji character', () => {
    const component = render(<KanjiWordDisplay value={"き"} />);
    expect(component.getByText('き')).toBeInTheDocument();
});

test('Should render the character as Inspectable if it is a known Kanji character', () => {
    const component = render(<KanjiWordDisplay value={"猫"} />);
    fireEvent.mouseOver(component.getByText('猫'));
    expect(screen.getByTitle('cat')).toBeInTheDocument();
});