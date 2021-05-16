import { fireEvent, render } from "@testing-library/react";
import Day from "../../../../types/calendar/Day";
import CalendarFlashCardBack from "../../../../components/learn/calendar/CalendarFlashCardBack";
import TemporalNoun from "../../../../types/calendar/TemporalNoun";

const onClickHandler = jest.fn();

const day = new Day("Monday", "月曜日", "getsuyōbi", "げつようび", "Moon day");

test('Should call the onClick event handler when clicking the reset button', () => {
    const component = render(<CalendarFlashCardBack data={day} onClick={onClickHandler} showRomaji={false} />);
    fireEvent.click(component.getByTitle('Reset'));
    expect(onClickHandler).toHaveBeenCalled();
});

test('Should render the kanji', () => {
    const component = render(<CalendarFlashCardBack data={day} onClick={onClickHandler} showRomaji={false} />);
    expect(component.getByText('月曜日')).toBeInTheDocument();
});

test('Should render the day title', () => {
    const component = render(<CalendarFlashCardBack data={day} onClick={onClickHandler} showRomaji={false} />);
    expect(component.getByText('Day of the Week')).toBeInTheDocument();
});

test('Should render the kana', () => {
    const component = render(<CalendarFlashCardBack data={day} onClick={onClickHandler} showRomaji={false} />);
    expect(component.getByText('げつようび')).toBeInTheDocument();
});

test('Should render the romaji when property is passed as true', () => {
    const component = render(<CalendarFlashCardBack data={day} onClick={onClickHandler} showRomaji={true} />);
    expect(component.getByText('getsuyōbi')).toBeInTheDocument();
});

test.skip('Should render the literal meaning', () => {
    const component = render(<CalendarFlashCardBack data={day} onClick={onClickHandler} showRomaji={false} />);
    expect(component.getByText('Literally meaning: Moon day')).toBeInTheDocument();
});

test.skip('Should not render the meaning when its falsy', () => {
    const hasFalsyMeaning = new TemporalNoun("Tomorrow", "明日", "ashita", "あした");
    const component = render(<CalendarFlashCardBack data={hasFalsyMeaning} onClick={onClickHandler} showRomaji={false} />);
    expect(component.queryByText('Literally meaning:')).not.toBeInTheDocument();
});