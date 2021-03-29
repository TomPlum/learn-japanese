import { fireEvent, render, screen } from "@testing-library/react";
import LearnKanaMenu from "../../../components/learn/LearnKanaMenu";
import { Environment } from "../../../utility/Environment";

const onStartHandler = jest.fn();
const environment = jest.fn();

const setup = () => {
    const component = render(<LearnKanaMenu onStart={onStartHandler} />);
    return {
        hiragana: component.getByText('Hiragana'),
        katakana: component.getByText('Katakana'),
        diacriticals: component.getByText('Diacriticals'),
        diagraphs: component.getByText('Diagraphs'),
        all: component.getByText('All'),
        custom: component.getByText('Custom'),
        start: component.getByText('Start'),
        ...component
    }
}

beforeEach(() => {
    Environment.variable = environment;
});

test('Selecting \'Hiragana\' preset should change the description', () => {
    environment.mockReturnValue('Hiragana description');
    const { hiragana } = setup();
    fireEvent.click(hiragana);
    expect(environment).toHaveBeenCalledWith('LEARN_KANA_Hiragana_DESC');
    expect(screen.getByText('Hiragana description')).toBeInTheDocument();
});

test('Selecting \'Katakana\' preset should change the description', () => {
    environment.mockReturnValue('Katakana description');
    const { katakana } = setup();
    fireEvent.click(katakana);
    expect(environment).toHaveBeenCalledWith('LEARN_KANA_Katakana_DESC');
    expect(screen.getByText('Katakana description')).toBeInTheDocument();
});

test('Selecting \'Diacriticals\' preset should change the description', () => {
    environment.mockReturnValue('Diacriticals description');
    const { diacriticals } = setup();
    fireEvent.click(diacriticals);
    expect(environment).toHaveBeenCalledWith('LEARN_KANA_Diacriticals_DESC');
    expect(screen.getByText('Diacriticals description')).toBeInTheDocument();
});

test('Selecting \'Diagraphs\' preset should change the description', () => {
    environment.mockReturnValue('Diagraphs description');
    const { diagraphs } = setup();
    fireEvent.click(diagraphs);
    expect(environment).toHaveBeenCalledWith('LEARN_KANA_Diagraphs_DESC');
    expect(screen.getByText('Diagraphs description')).toBeInTheDocument();
});

test('Selecting \'All\' preset should change the description', () => {
    environment.mockReturnValue('All description');
    const { all } = setup();
    fireEvent.click(all);
    expect(environment).toHaveBeenCalledWith('LEARN_KANA_All_DESC');
    expect(screen.getByText('All description')).toBeInTheDocument();
});

test('Selecting \'Custom\' preset should change the description', () => {
    environment.mockReturnValue('Custom description');
    const { custom } = setup();
    fireEvent.click(custom);
    expect(environment).toHaveBeenCalledWith('LEARN_KANA_Custom_DESC');
    expect(screen.getByText('Custom description')).toBeInTheDocument();
});

test('Should default to \'Hiragana\' preset', () => {
    const { start } = setup();
    fireEvent.click(start);
    expect(onStartHandler).toHaveBeenCalled();
});

test('Clicking Start with the Hiragana preset selected should call the onStart event handler', () => {
    const { start } = setup();
    fireEvent.click(start);
    expect(onStartHandler).toHaveBeenCalledWith({ hiragana: true });
});

test('Clicking Start with the Katakana preset selected should call the onStart event handler', () => {
    const { start, katakana } = setup();
    fireEvent.click(katakana);
    fireEvent.click(start);
    expect(onStartHandler).toHaveBeenCalledWith({ katakana: true });
});

test('Clicking Start with the Diacriticals preset selected should call the onStart event handler', () => {
    const { start, diacriticals } = setup();
    fireEvent.click(diacriticals);
    fireEvent.click(start);
    expect(onStartHandler).toHaveBeenCalledWith({ diacriticals: true });
});

test('Clicking Start with the Diagraphs preset selected should call the onStart event handler', () => {
    const { start, diagraphs } = setup();
    fireEvent.click(diagraphs);
    fireEvent.click(start);
    expect(onStartHandler).toHaveBeenCalledWith({ diagraphs: true });
});

test('Clicking Start with the All preset selected should call the onStart event handler', () => {
    const { start, all } = setup();
    fireEvent.click(all);
    fireEvent.click(start);
    expect(onStartHandler).toHaveBeenCalledWith({ hiragana: true, katakana: true, diagraphs: true, diacriticals: true });
});