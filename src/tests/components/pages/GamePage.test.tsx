import { fireEvent, render, screen } from "@testing-library/react";
import GamePage from "../../../components/pages/GamePage";
import hiragana from "../../../data/Hiragana";
import { KanaData } from "../../../data/DataTypes";
import katakana from "../../../data/Katakana";
import { KanaColumn } from "../../../types/kana/KanaColumn";
import { RandomNumberGenerator } from "../../../utility/RandomNumberGenerator";

jest.mock("../../../data/Hiragana");
jest.mock("../../../data/Katakana");

const mockHiragana = hiragana as jest.MockedFunction<() => KanaData[]>;
const mockKatakana = katakana as jest.MockedFunction<() => KanaData[]>;

beforeEach(() => {
   mockHiragana.mockReturnValue([
      { name: "あ", code: "\u3042", romaji: ["a"], column: KanaColumn.VOWEL, diacritical: false },
      { name: "い", code: "\u3044", romaji: ["i"], column: KanaColumn.VOWEL, diacritical: false },
   ]);

   mockKatakana.mockReturnValue([
      { name: "ア", code: "\u30A2", romaji: ["a"], column: KanaColumn.VOWEL, diacritical: false },
   ]);

   RandomNumberGenerator.getRandomObject = jest.fn().mockImplementation((array: any[]) => {
      const objects = [...array];
      const first = objects[0];
      objects.splice(0, 1);
      return [first, objects];
   });
});

const setup = () => {
   const component = render(<GamePage />);
   return {
      mode: component.getByText('Learn'),
      kana: component.queryAllByText('Hiragana & Katakana')[1],
      numbers: component.getByText('Numbers & Counting'),
      kanji: component.getByText('Jōyō Kanji'),
      colours: component.getByText('Colours'),
      weather: component.getByText('Weather'),
      calendar: component.getByText('Days & Months'),
      ...component
   }
}

test('Selecting a game mode should hide the menu and render the game', () => {
   setup();
   fireEvent.click(screen.getByText('Start'));
   expect(screen.getByTitle('1/3')).toBeInTheDocument();
});

test('Changing the AppMode in the ControlsMenu should update the GameSettingsMenu', () => {
   const { mode } = setup();
   expect(screen.getByText('Select Game Mode'));
   fireEvent.click(mode);
   expect(screen.getByText('Select Topic'));
});

describe('Play', () => {
   test('Quitting the game should close the game window and re-render the results screen', () => {
      setup();
      fireEvent.click(screen.getByText('Start'));
      fireEvent.click(screen.getByTitle('Quit'));
      fireEvent.click(screen.getByText('Yes'));
      expect(screen.getByText('Oh no! You quit!')).toBeInTheDocument();
   });

   //TODO: Entering i and clicking check is not working? DOM says value is empty
   test.skip('Finishing a game should render the results screen', () => {
      setup();
      fireEvent.click(screen.getByText('Start')); //Start the default Relaxed mode

      const input = screen.getByPlaceholderText('Enter the Rōmaji');
      const check = screen.getByText('Check');

      expect(screen.getByText('あ')).toBeInTheDocument();
      fireEvent.change(input, { target: { value: 'a' }});
      fireEvent.click(check);

      expect(screen.getByText('い')).toBeInTheDocument();
      fireEvent.change(input, { target: { value: 'i' }});
      fireEvent.click(check);

      expect(screen.getByText('ア')).toBeInTheDocument();
      fireEvent.change(input, { target: { value: 'a' }});
      fireEvent.click(check);

      expect(screen.getByTestId('game-results-screen')).toBeInTheDocument();
   });
});

describe('Learn', () => {
   test('Quitting a learning session without having flipped a card should re-render the menu', () => {
      const { mode } = setup();
      fireEvent.click(mode); //Switch to Learn
      fireEvent.click(screen.getByText('Start')); //Start the default Hiragana mode
      fireEvent.click(screen.getByTitle('Quit')); //Open the Quit confirmation modal
      fireEvent.click(screen.getByText('Yes')); //Confirm you want to quit (Without having flipped the first card)
      expect(screen.getByTestId('game-settings-menu')).toBeInTheDocument();
      expect(screen.queryByTestId('learning-results-screen')).not.toBeInTheDocument();
   });

   test('Quitting a learning session mid-session (having flipped one or more cards) should show the result screen', () => {
      const { mode } = setup();
      fireEvent.click(mode); //Switch to Learn
      fireEvent.click(screen.getByText('Start')); //Start the default Hiragana mode
      fireEvent.click(screen.getByText('あ')); //Flip the first card
      fireEvent.click(screen.getByText('Remembered It!')); //Mark the card as remembered
      fireEvent.click(screen.getByTitle('Quit')); //Open the Quit confirmation modal
      fireEvent.click(screen.getByText('Yes')); //Confirm you want to quit
      expect(screen.getByTestId('learning-results-screen')).toBeInTheDocument();
      expect(screen.queryByTestId('game-settings-menu')).not.toBeInTheDocument();
   });

   test('Clicking \'Practice Mistakes\' on the learning results screen should start a new session with the mistakes', () => {
      const { mode } = setup();
      fireEvent.click(mode); //Switch to Learn
      fireEvent.click(screen.getByText('Start')); //Start the default Hiragana mode

      fireEvent.click(screen.getByText('あ')); //Flip the first card
      fireEvent.click(screen.getByText('Forgot It')); //Mark the card as forgot
      fireEvent.click(screen.getByText('Next')); //Click next to go to the next card

      fireEvent.click(screen.getByText('い')); //Flip the first card
      fireEvent.click(screen.getByText('Remembered It!')); //Mark the card as remembered
      fireEvent.click(screen.getByText('Finish')); //Click finish to end the session

      expect(screen.getByTestId('learning-results-screen')).toBeInTheDocument(); //Should render results screen
      fireEvent.click(screen.getByText('Practice Mistakes')); //Click practice mistakes
      expect(screen.queryByTestId('game-settings-menu')).not.toBeInTheDocument(); //Should not render menu

      expect(screen.getByText('あ')).toBeInTheDocument(); //Should show our only mistake first
      fireEvent.click(screen.getByText('あ')); //Flip the card
      expect(screen.getByText('Finish')).toBeInTheDocument(); //If it omitted our mistake, flipping this card should be the last.
   });

   test('Dismissing the learning results screen should close it and re-render the main menu', () => {
      const { mode } = setup();
      fireEvent.click(mode); //Switch to Learn
      fireEvent.click(screen.getByText('Start')); //Start the default Hiragana mode

      fireEvent.click(screen.getByText('あ')); //Flip the first card
      fireEvent.click(screen.getByText('Forgot It')); //Mark the card as forgot
      fireEvent.click(screen.getByText('Next')); //Click next to go to the next card

      fireEvent.click(screen.getByTitle('Quit')); //Open the Quit confirmation modal
      fireEvent.click(screen.getByText('Yes')); //Confirm you want to quit

      fireEvent.click(screen.getByTitle('Quit')); //Click the close button to dismiss the results screen
      expect(screen.getByTestId('game-settings-menu')).toBeInTheDocument();
      expect(screen.queryByTestId('learning-results-screen')).not.toBeInTheDocument();
   });

   test('Starting a Calendar learning session should render the correct flash card types', () => {
      const { mode, calendar } = setup();
      fireEvent.click(mode); //Switch to Learn
      fireEvent.click(calendar);
      fireEvent.click(screen.getByText('Start'));
      expect(screen.getByText('Monday')).toBeInTheDocument();
      expect(screen.getByText('月曜日')).toBeInTheDocument();
   });

   test('Starting a Kanji learning session should render the correct flash card types', () => {
      const { mode, kanji } = setup();
      fireEvent.click(mode); //Switch to Learn
      fireEvent.click(kanji);
      fireEvent.click(screen.getByText('Start'));
      expect(screen.getByText(': person')).toBeInTheDocument();
      expect(screen.getAllByText('人')).toBeDefined();
   });
});