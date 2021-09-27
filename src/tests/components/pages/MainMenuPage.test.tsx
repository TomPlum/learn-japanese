import { fireEvent, screen } from "@testing-library/react";
import MainMenuPage from "../../../components/pages/MainMenuPage";
import { KanaColumn } from "../../../domain/kana/KanaColumn";
import Arrays from "../../../utility/Arrays";
import renderReduxConsumer from "../../renderReduxConsumer";
import { Kanji } from "../../../domain/kanji/Kanji";
import { Example } from "../../../domain/kanji/Example";
import { KanjiReading } from "../../../domain/kanji/KanjiReading";
import { ReadingType } from "../../../domain/kanji/ReadingType";
import { KyoikuGrade } from "../../../domain/kanji/KyoikuGrade";
import { Kana } from "../../../domain/kana/Kana";
import KanaType from "../../../domain/kana/KanaType";
import Definition from "../../../domain/sentence/Definition";

//Mock Learning Data Repository
const mockLearningDataRepository = jest.fn();
jest.mock("../../../repository/LearningDataRepository", () => {
   return function () { return { read: mockLearningDataRepository } }
});

//Mock scrollIntoView() as it doesn't exist in JSDom
const scrollIntoView = jest.fn();
window.HTMLElement.prototype.scrollIntoView = scrollIntoView;

//Data
const kanjiGradeOne = new Kanji(
    "人",
    [new KanjiReading("jin", "じん", ReadingType.ON), new KanjiReading("hito", "ひと", ReadingType.KUN)],
    ["person"],
    KyoikuGrade.ONE,
    "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
    [new Example("外国人", ["がいこくじん"], ["foreigner"])],
    []
);

const hiragana = [
   new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
   new Kana("い", ["i"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
];

const day = new Definition(["Monday"], "月曜日", "げつようび", "Day of the Week");

beforeEach(() => {
   Arrays.getRandomObject = jest.fn().mockImplementation((array: any[]) => {
      const objects = [...array];
      const first = objects[0];
      objects.splice(0, 1);
      return [first, objects];
   });
});

const setup = () => {
   const component = renderReduxConsumer(<MainMenuPage
       history={{
          length: 50,
          location: { pathname: "/menu/play", search: "", hash: "", state: undefined },
          action: "POP",
          push: jest.fn(), go: jest.fn(), replace: jest.fn(), goForward: jest.fn(), goBack: jest.fn(),
          block: jest.fn(), listen: jest.fn(), createHref: jest.fn()
       }}
       match={{ params: { mode: "play" }, isExact: true, path: "/menu/:mode", url: "/menu/play" }}
       location={{ pathname: "/menu/play", search: "", hash: "", state: undefined }}
   />);

   return {
      mode: component.getByText('Learn'),
      kana: component.queryAllByText('Hiragana & Katakana')[1],
      numbers: component.getByText('Numbers & Counting'),
      kanji: component.getByText('Jōyō Kanji'),
      basics: component.getByText('Basics'),
      calendar: component.getByText('Days & Months'),
      login: component.getByText('Login'),
      ...component
   }
}

test('Selecting a game mode should hide the menu and render the game', async () => {
   mockLearningDataRepository.mockResolvedValueOnce(hiragana);
   setup();
   fireEvent.click(screen.getByText('Start'));
   expect(await screen.findByTestId('memory-game')).toBeInTheDocument();
});

test('Changing the AppMode in the ControlsMenu should update the SettingsMenu', () => {
   const { mode } = setup();
   expect(screen.getByText('Select Game Mode'));
   fireEvent.click(mode);
   expect(screen.getByText('Select Topic'));
});

test('Clicking the login button while not logged in should launch the user modal', () => {
   const { login } = setup();
   fireEvent.click(login);
   expect(screen.getByTestId('user-modal')).toBeInTheDocument();
});

test('Clicking "x" close button in the user modal should close it', () => {
   const { login } = setup();

   //Clicking login should load the modal
   fireEvent.click(login);
   const userModal = screen.getByTestId('user-modal');
   expect(userModal).toBeInTheDocument();

   //Clicking the 'x' button should close it
   fireEvent.click(screen.getByText('Close'));
   expect(userModal).not.toBeInTheDocument();
});

describe('Play', () => {
   test('Quitting the game should close the game window and re-render the results screen', async () => {
      mockLearningDataRepository.mockResolvedValueOnce(hiragana);
      setup();

      fireEvent.click(screen.getByText('Start'));
      expect(await screen.findByTestId('memory-game')).toBeInTheDocument(); //Should render the memory game

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
   test('Quitting a learning session without having flipped a card should re-render the menu', async () => {
      mockLearningDataRepository.mockResolvedValueOnce(hiragana);

      const { mode } = setup();
      fireEvent.click(mode); //Switch to Learn
      fireEvent.click(screen.getByText('Start')); //Start the default Hiragana mode
      expect(await screen.findByTestId('learn')).toBeInTheDocument(); //Should render the learn component

      fireEvent.click(screen.getByTitle('Quit')); //Open the Quit confirmation modal
      fireEvent.click(screen.getByText('Yes')); //Confirm you want to quit (Without having flipped the first card)

      expect(screen.getByTestId('game-settings-menu')).toBeInTheDocument();
      expect(screen.queryByTestId('learning-results-screen')).not.toBeInTheDocument();
   });

   test('Quitting a learning session mid-session (having flipped one or more cards) should show the result screen', async () => {
      mockLearningDataRepository.mockResolvedValueOnce(hiragana);

      const { mode } = setup();
      fireEvent.click(mode); //Switch to Learn
      fireEvent.click(screen.getByText('Start')); //Start the default Hiragana mode
      expect(await screen.findByTestId('learn')).toBeInTheDocument(); //Should render the learn component

      fireEvent.click(screen.getByText('あ')); //Flip the first card
      fireEvent.click(screen.getByText('Remembered It!')); //Mark the card as remembered
      fireEvent.click(screen.getByTitle('Quit')); //Open the Quit confirmation modal
      fireEvent.click(screen.getByText('Yes')); //Confirm you want to quit

      expect(screen.getByTestId('learning-results-screen')).toBeInTheDocument();
      expect(screen.queryByTestId('game-settings-menu')).not.toBeInTheDocument();
   });

   test('Clicking \'Practice Mistakes\' on the learning results screen should start a new session with the mistakes', async () => {
      mockLearningDataRepository.mockResolvedValueOnce(hiragana);

      const { mode } = setup();
      fireEvent.click(mode); //Switch to Learn
      fireEvent.click(screen.getByText('Start')); //Start the default Hiragana mode
      expect(await screen.findByTestId('learn')).toBeInTheDocument(); //Should render the learn component

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

   test('Dismissing the learning results screen should close it and re-render the main menu', async () => {
      mockLearningDataRepository.mockResolvedValueOnce(hiragana);

      const { mode } = setup();
      fireEvent.click(mode); //Switch to Learn
      fireEvent.click(screen.getByText('Start')); //Start the default Hiragana mode
      expect(await screen.findByTestId('learn')).toBeInTheDocument(); //Should render the learn component

      fireEvent.click(screen.getByText('あ')); //Flip the first card
      fireEvent.click(screen.getByText('Forgot It')); //Mark the card as forgot
      fireEvent.click(screen.getByText('Next')); //Click next to go to the next card

      fireEvent.click(screen.getByTitle('Quit')); //Open the Quit confirmation modal
      fireEvent.click(screen.getByText('Yes')); //Confirm you want to quit

      fireEvent.click(screen.getByTitle('Quit')); //Click the close button to dismiss the results screen
      expect(screen.getByTestId('game-settings-menu')).toBeInTheDocument();
      expect(screen.queryByTestId('learning-results-screen')).not.toBeInTheDocument();
   });

   test('Starting a Calendar learning session should render the correct flash card types', async () => {
      mockLearningDataRepository.mockResolvedValueOnce([day]);
      const { mode, calendar } = setup();

      fireEvent.click(mode); //Switch to Learn
      fireEvent.click(calendar); //Select calendar topic
      fireEvent.click(screen.getByText('Start'));

      expect(await screen.findByText('Monday')).toBeInTheDocument();
   });

   test('Starting a Kanji learning session should render the correct flash card types', async  () => {
      mockLearningDataRepository.mockResolvedValueOnce([kanjiGradeOne]);
      const { mode, kanji } = setup();

      fireEvent.click(mode); //Switch to Learn
      fireEvent.click(kanji); //Select Kanji topic
      fireEvent.click(screen.getByText('Start'));

      expect(await screen.findByText('person')).toBeInTheDocument();
      expect(screen.getAllByText('人')).toBeDefined();
   });
});
