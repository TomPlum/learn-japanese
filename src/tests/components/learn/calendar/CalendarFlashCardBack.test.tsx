import { fireEvent, render } from "@testing-library/react";
import Day from "../../../../types/calendar/Day";
import CalendarFlashCardBack from "../../../../components/learn/calendar/CalendarFlashCardBack";

const onClickHandler = jest.fn();

const day = new Day("Monday", "月曜日");

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