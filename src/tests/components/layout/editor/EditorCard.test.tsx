import { fireEvent, render } from "@testing-library/react";
import EditorCard from "../../../../components/layout/editor/EditorCard";

const onDragStartHandler = jest.fn();
const dataTransfer = jest.fn();

test.skip('Should call the onDragStart event handler when dragging the card', () => {
    const { container } = render(<EditorCard name="test-card" size="sm" onDragStart={onDragStartHandler} />);
    fireEvent.dragStart(container.firstChild!);
    expect(onDragStartHandler).toHaveBeenCalled();
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
