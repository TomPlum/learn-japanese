import { createEvent, fireEvent, render } from "@testing-library/react";
import EditorCard from "../../../../components/layout/editor/EditorCard";

const onDragStartHandler = jest.fn();
const mockSetData = jest.fn();

test('Should call the onDragStart event handler when dragging the card', () => {
    const { container } = render(<EditorCard name="test-card" size="sm" onDragStart={onDragStartHandler} />);
    const dragEvent = createEvent.dragStart(container.firstChild!, { dataTransfer: { setData: mockSetData }});
    fireEvent(container.firstChild!, dragEvent);
    expect(onDragStartHandler).toHaveBeenLastCalledWith({ name: "test-card", size: "sm" });
});

test('Should set the stringified details json in the data transfer event', () => {
    const { container } = render(<EditorCard name="test-card" size="sm" onDragStart={onDragStartHandler} />);
    const dragEvent = createEvent.dragStart(container.firstChild!, { dataTransfer: { setData: mockSetData }});
    fireEvent(container.firstChild!, dragEvent);
    expect(mockSetData).toHaveBeenLastCalledWith("card", "{\"name\":\"test-card\",\"size\":\"sm\"}");
});

test('Should render the wrapper with the small class if the size is passed as small', () => {
    const { container } = render(<EditorCard name="test-card" size="sm" onDragStart={onDragStartHandler} />);
    expect(container.firstChild).toHaveClass('small');
});

test('Should render the wrapper with the medium class if the size is passed as medium', () => {
    const { container } = render(<EditorCard name="test-card" size="md" onDragStart={onDragStartHandler} />);
    expect(container.firstChild).toHaveClass('medium');
});

test('Should render the wrapper with the large class if the size is passed as large', () => {
    const { container } = render(<EditorCard name="test-card" size="lg" onDragStart={onDragStartHandler} />);
    expect(container.firstChild).toHaveClass('large');
});
