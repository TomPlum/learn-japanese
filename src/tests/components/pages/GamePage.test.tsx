import { fireEvent, render, screen } from "@testing-library/react";
import GamePage from "../../../components/pages/GamePage";

test('Selecting a game mode should hide the menu and render the game', () => {
   render(<GamePage />);
   fireEvent.click(screen.getByText('START'));
   expect(screen.getByTitle('1/50')).toBeInTheDocument();
});

test('Quitting the game should close the game window and re-render the results screen', () => {
   render(<GamePage />);
   fireEvent.click(screen.getByText('START'));
   fireEvent.click(screen.getByTitle('Quit'));
   fireEvent.click(screen.getByText('Yes'));
   expect(screen.getByText('Oh no! You quit!')).toBeInTheDocument();
});

//TODO: Test result screen render. Need to emulate a completed game run. Mock RNG and/or Kana Repo?