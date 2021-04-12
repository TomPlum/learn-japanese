import { fireEvent, render } from "@testing-library/react";
import Day from "../../../../types/calendar/Day";
import CalendarFlashCardBack from "../../../../components/learn/calendar/CalendarFlashCardBack";
import TemporalNoun from "../../../../types/calendar/TemporalNoun";

const onClickHandler = jest.fn();

const day = new Day("Monday", "月曜日", "getsuyōbi", "げつようび", "Moon day");

test('Should call the onClick event handler when clicking the reset button', () => {
    const component = render(<CalendarFlashCardBack data={day} onClick={onClickHandler} />);
    fireEvent.click(component.getByTitle('Reset'));
    expect(onClickHandler).toHaveBeenCalled();
});

test('Should render the kanji', () => {
    const component = render(<CalendarFlashCardBack data={day} onClick={onClickHandler} />);
    expect(component.getByText('月曜日')).toBeInTheDocument();
});

test('Should render the day title', () => {
    const component = render(<CalendarFlashCardBack data={day} onClick={onClickHandler} />);
    expect(component.getByText('Day of the Week')).toBeInTheDocument();
});

test('Should render the romaji with the kana', () => {
    const component = render(<CalendarFlashCardBack data={day} onClick={onClickHandler} />);
    expect(component.getByText('げつようび (getsuyōbi)')).toBeInTheDocument();
});

test('Should render the literal meaning', () => {
    const component = render(<CalendarFlashCardBack data={day} onClick={onClickHandler} />);
    expect(component.getByText('Literally meaning: Moon day')).toBeInTheDocument();
});

test('Should not render the meaning when its falsy', () => {
    const hasFalsyMeaning = new TemporalNoun("Tomorrow", "明日", "ashita", "あした", undefined);
    const component = render(<CalendarFlashCardBack data={hasFalsyMeaning} onClick={onClickHandler} />);
    expect(component.queryByText('Literally meaning:')).not.toBeInTheDocument();
});