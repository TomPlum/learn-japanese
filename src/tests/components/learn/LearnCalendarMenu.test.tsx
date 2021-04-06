import { fireEvent, render, screen } from "@testing-library/react";
import { Environment } from "../../../utility/Environment";
import LearnMenu from "../../../components/learn/LearnMenu";
import LearnCalendarMode from "../../../types/learn/mode/LearnCalendarMode";

const onStartHandler = jest.fn();
const environment = jest.fn();

const setup = () => {
    const component = render(<LearnMenu modes={new LearnCalendarMode()} onStart={onStartHandler} />);
    return {
        days: component.getByText('Days of the Week'),
        months: component.getByText('Months of the Year'),
        nouns: component.getByText('Temporal Nouns'),
        seasonal: component.getByText('Seasonal'),
        phrases: component.getByText('Common Phrases'),
        all: component.getByText('Everything'),
        start: component.getByText('Start'),
        ...component
    }
}

beforeEach(() => {
    Environment.variable = environment;
});

test('Selecting \'Days of the Week\' preset should change the description', () => {
    environment.mockReturnValue('Days of the Week description');
    const { days } = setup();
    fireEvent.click(days);
    expect(environment).toHaveBeenCalledWith('LEARN_CALENDAR_Days of the Week_DESC');
    expect(screen.getByText('Days of the Week description')).toBeInTheDocument();
});

test('Selecting \'Months of the Year\' preset should change the description', () => {
    environment.mockReturnValue('Months of the Year description');
    const { months } = setup();
    fireEvent.click(months);
    expect(environment).toHaveBeenCalledWith('LEARN_CALENDAR_Months of the Year_DESC');
    expect(screen.getByText('Months of the Year description')).toBeInTheDocument();
});

test('Selecting \'Temporal Nouns\' preset should change the description', () => {
    environment.mockReturnValue('Temporal Nouns description');
    const { nouns } = setup();
    fireEvent.click(nouns);
    expect(environment).toHaveBeenCalledWith('LEARN_CALENDAR_Temporal Nouns_DESC');
    expect(screen.getByText('Temporal Nouns description')).toBeInTheDocument();
});

test('Selecting \'Seasonal\' preset should change the description', () => {
    environment.mockReturnValue('Seasonal description');
    const { seasonal } = setup();
    fireEvent.click(seasonal);
    expect(environment).toHaveBeenCalledWith('LEARN_CALENDAR_Seasonal_DESC');
    expect(screen.getByText('Seasonal description')).toBeInTheDocument();
});

test('Selecting \'Common Phrases\' preset should change the description', () => {
    environment.mockReturnValue('Common Phrases description');
    const { phrases } = setup();
    fireEvent.click(phrases);
    expect(environment).toHaveBeenCalledWith('LEARN_CALENDAR_Common Phrases_DESC');
    expect(screen.getByText('Common Phrases description')).toBeInTheDocument();
});

test('Selecting \'All\' preset should change the description', () => {
    environment.mockReturnValue('All description');
    const { all } = setup();
    fireEvent.click(all);
    expect(environment).toHaveBeenCalledWith('LEARN_CALENDAR_Everything_DESC');
    expect(screen.getByText('All description')).toBeInTheDocument();
});

test('Clicking Start with the \'Days of the Week\' preset selected should call the onStart event handler', () => {
    const { start } = setup();
    fireEvent.click(start);
    expect(onStartHandler).toHaveBeenCalledWith({ calendar: { days: true } });
});

test('Clicking Start with the \'Months of the Year\' preset selected should call the onStart event handler', () => {
    const { start, months } = setup();
    fireEvent.click(months);
    fireEvent.click(start);
    expect(onStartHandler).toHaveBeenCalledWith({ calendar: { months: true } });
});

test('Clicking Start with the \'Temporal Nouns\' preset selected should call the onStart event handler', () => {
    const { start, nouns } = setup();
    fireEvent.click(nouns);
    fireEvent.click(start);
    expect(onStartHandler).toHaveBeenCalledWith({ calendar: { nouns: true } });
});

test('Clicking Start with the \'Seasonal\' preset selected should call the onStart event handler', () => {
    const { start, seasonal } = setup();
    fireEvent.click(seasonal);
    fireEvent.click(start);
    expect(onStartHandler).toHaveBeenCalledWith({ calendar: { season: true } });
});

test('Clicking Start with the \'Common Phrases\' preset selected should call the onStart event handler', () => {
    const { start, phrases } = setup();
    fireEvent.click(phrases);
    fireEvent.click(start);
    expect(onStartHandler).toHaveBeenCalledWith({ calendar: { phrases: true } });
});

test('Clicking Start with the \'Everything\' preset selected should call the onStart event handler', () => {
    const { start, all } = setup();
    fireEvent.click(all);
    fireEvent.click(start);
    expect(onStartHandler).toHaveBeenCalledWith({ calendar: { days: true, months: true, season: true, nouns: true, phrases: true } });
});