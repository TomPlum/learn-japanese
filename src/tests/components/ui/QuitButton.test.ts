import QuitButton, { QuitButtonProps } from "../../../components/ui/QuitButton";
import { fireEvent, render, screen } from "@testing-library/react";
import React from 'react';

test('Quit Button', () => {
    const handleClick = jest.fn();
    render(<QuitButton onClick={handleClick} />);

    fireEvent.click(screen.getByTitle("Quit"));

    expect(handleClick).toHaveBeenCalled();
});