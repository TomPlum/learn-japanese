import { fireEvent, render, screen } from "@testing-library/react";
import KanaGameModeMenu from "../../../components/layout/KanaGameModeMenu";
import { HARDCORE, KANA, RELAXED, ROMANJI, TIME_ATTACK } from "../../../data/GameModePresets";
import { GameMode } from "../../../types/GameMode";
import { Environment } from "../../../utility/Environment";

const onSelectModeHandler = jest.fn();
const environment = jest.fn();

const setup = () => {
    const component = render(<KanaGameModeMenu onSelectedMode={onSelectModeHandler} />);
    return {
        start: component.getByText('Start'),
        relaxed: component.getByText('Relaxed'),
        timeAttack: component.getByText('Time Attack'),
        romanji: component.getByText('Romanji'),
        kana: component.getByText('Kana'),
        hardcore: component.getByText('Hardcore'),
        custom: component.getByText('Custom'),
        ...component
    }
}

beforeEach(() => {
   Environment.variable = environment;
});

afterEach(() => {
    jest.resetAllMocks();
});

test('On mount it should select \'Relaxed\' mode by default', () => {
    const { start } = setup();
    fireEvent.click(start);
    expect(onSelectModeHandler).toHaveBeenCalledWith(GameMode.RELAXED, RELAXED);
});

test('Selecting \'Time Attack\' mode and starting should call the onSelectMode event handler', () => {
    const { start, timeAttack } = setup();
    fireEvent.click(timeAttack);
    fireEvent.click(start);
    expect(onSelectModeHandler).toHaveBeenCalledWith(GameMode.TIME_ATTACK, TIME_ATTACK);
});

test('Selecting \'Romanji\' mode and starting should call the onSelectMode event handler', () => {
    const { start, romanji } = setup();
    fireEvent.click(romanji);
    fireEvent.click(start);
    expect(onSelectModeHandler).toHaveBeenCalledWith(GameMode.ROMANJI, ROMANJI);
});

test('Selecting \'Kana\' mode and starting should call the onSelectMode event handler', () => {
    const { start, kana } = setup();
    fireEvent.click(kana);
    fireEvent.click(start);
    expect(onSelectModeHandler).toHaveBeenCalledWith(GameMode.KANA, KANA);
});

test('Selecting \'Hardcore\' mode and starting should call the onSelectMode event handler', () => {
    const { start, hardcore } = setup();
    fireEvent.click(hardcore);
    fireEvent.click(start);
    expect(onSelectModeHandler).toHaveBeenCalledWith(GameMode.HARDCORE, HARDCORE);
});

//TODO: Why is this not calling the event handler?
test.skip('Selecting \'Custom\' mode and selecting should call the onSelectMode event handler', () => {
    const { start, custom } = setup();
    fireEvent.click(custom);
    fireEvent.click(screen.getByText('Confirm'));
    fireEvent.click(start);
    expect(onSelectModeHandler).toHaveBeenCalledWith(GameMode.CUSTOM, RELAXED);
});

test('Selecting \'Relaxed\' mode should load the description from the environment variables', () => {
    environment.mockReturnValue("This is the relaxed mode description");
    const { relaxed } = setup();

    fireEvent.click(relaxed);

    expect(environment).toHaveBeenCalledWith("MODE_DESC_Relaxed");
    expect(screen.getByText('This is the relaxed mode description')).toBeInTheDocument();
});

test('Selecting \'Time Attack\' mode should load the description from the environment variables', () => {
    environment.mockReturnValue("This is the time attack mode description");
    const { timeAttack } = setup();

    fireEvent.click(timeAttack);

    expect(environment).toHaveBeenCalledWith("MODE_DESC_Time Attack");
    expect(screen.getByText('This is the time attack mode description')).toBeInTheDocument();
});

test('Selecting \'Romanji\' mode should load the description from the environment variables', () => {
    environment.mockReturnValue("This is the romanji mode description");
    const { romanji } = setup();

    fireEvent.click(romanji);

    expect(environment).toHaveBeenCalledWith("MODE_DESC_Romanji");
    expect(screen.getByText('This is the romanji mode description')).toBeInTheDocument();
});

test('Selecting \'Kana\' mode should load the description from the environment variables', () => {
    environment.mockReturnValue("This is the kana mode description");
    const { kana } = setup();

    fireEvent.click(kana);

    expect(environment).toHaveBeenCalledWith("MODE_DESC_Kana");
    expect(screen.getByText('This is the kana mode description')).toBeInTheDocument();
});

test('Selecting \'Hardcore\' mode should load the description from the environment variables', () => {
    environment.mockReturnValue("This is the hardcore mode description");
    const {  hardcore } = setup();

    fireEvent.click(hardcore);

    expect(environment).toHaveBeenCalledWith("MODE_DESC_Hardcore");
    expect(screen.getByText('This is the hardcore mode description')).toBeInTheDocument();
});

test('Selecting \'Custom\' mode should load the description from the environment variables', () => {
    environment.mockReturnValue("This is the custom mode description");
    const { custom } = setup();

    fireEvent.click(custom); //Open custom settings menu
    fireEvent.click(screen.getByText('Confirm')); //Close settings menu

    expect(environment).toHaveBeenCalledWith("MODE_DESC_Custom");
    expect(screen.getByText('This is the custom mode description')).toBeInTheDocument();
});

test('Selecting \'Custom\' mode should render the custom settings menu', () => {
    environment.mockReturnValue("This is the hardcore mode description");
    const { custom } = setup();
    fireEvent.click(custom);

    //Game Mode Menu should have been un-mounted
    expect(screen.queryByText('Start')).not.toBeInTheDocument();

    //Custom Settings Menu should have been rendered
    expect(screen.getByText('Confirm')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
});