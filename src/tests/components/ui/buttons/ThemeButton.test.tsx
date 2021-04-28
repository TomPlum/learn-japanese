import { fireEvent, render, screen } from "@testing-library/react";
import ThemeButton from "../../../../components/ui/buttons/ThemeButton";

test('The button should default to dark mode and therefore show the light mode text and icon', () => {
    render(<ThemeButton />);
    expect(screen.getByText('Light')).toBeInTheDocument();
});

test('Clicking the button in dark mode should change to light mode and display the dark mode text and icon', () => {
    render(<ThemeButton />);
    fireEvent.click(screen.getByText('Light'));
    expect(screen.getByText('Dark')).toBeInTheDocument();
});

test('Clicking the button in light mode should change to dark mode and display the light mode text and icon', () => {
    render(<ThemeButton />);
    fireEvent.click(screen.getByText('Light'));
    fireEvent.click(screen.getByText('Dark'));
    expect(screen.getByText('Light')).toBeInTheDocument();
});