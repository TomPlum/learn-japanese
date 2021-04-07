import { fireEvent, render } from "@testing-library/react";
import CalendarFlashCardFront from "../../../../components/learn/calendar/CalendarFlashCardFront";
import Day from "../../../../types/calendar/Day";

const onClickHandler = jest.fn();

const day = new Day("Monday", "月曜日");

test('Should call the onClick event handler when clicking the card', () => {
    const component = render(<CalendarFlashCardFront data={day} onClick={onClickHandler} />);
    fireEvent.click(component.getByText('Monday'));
    expect(onClickHandler).toHaveBeenCalled();
});