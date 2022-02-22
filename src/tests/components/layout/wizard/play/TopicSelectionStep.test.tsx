import { fireEvent, render } from "@testing-library/react";
import TopicSelectionStep from "../../../../../components/layout/wizard/play/TopicSelectionStep";
import Topic from "../../../../../domain/Topic";

const onSelectHandler = jest.fn();

test('Should render all the topics', () => {
    const component = render(<TopicSelectionStep onSelect={onSelectHandler} />);
    Topic.ALL.forEach(topic => {
        expect(component.getByText(topic.name)).toBeInTheDocument();
    });
});

test('Should call the onSelect event handler when clicking a topic', () => {
    const component = render(<TopicSelectionStep onSelect={onSelectHandler} />);
    fireEvent.click(component.getByText('Days & Months'));
    expect(onSelectHandler).toHaveBeenLastCalledWith(Topic.CALENDAR);
});
