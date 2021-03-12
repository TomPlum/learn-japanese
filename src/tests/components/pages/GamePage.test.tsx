import { fireEvent, render, screen } from "@testing-library/react";
import GamePage from "../../../components/pages/GamePage";

test('Selecting a game mode should hide the menu and render the game', () => {
   render(<GamePage />);
   fireEvent.click(screen.getByText('Start'));
   expect(screen.getByTitle('1/214')).toBeInTheDocument();
});

test('Quitting the game should close the game window and re-render the menu', () => {
   render(<GamePage />);
   fireEvent.click(screen.getByText('Start'));
   fireEvent.click(screen.getByTitle('Quit'));
   expect(screen.getByText('Start')).toBeInTheDocument();
});

//TODO: Test result screen render. Need to emulate a completed game run. Mock RNG and/or Kana Repo?