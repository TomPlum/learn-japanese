import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import EditorColumn from "../../../../components/layout/editor/EditorColumn";

const mockGetData = jest.fn();

beforeEach(() => {
    mockGetData.mockReset();
});

test('Should render a card when dropping with valid details', async () => {
    mockGetData.mockReturnValueOnce("{\"name\":\"test-card\",\"size\":\"sm\"}");
    const { container } = render(<EditorColumn />);

    const dropEvent = createEvent.drop(container.firstChild!, { dataTransfer: { getData: mockGetData }});
    fireEvent(container.firstChild!, dropEvent);

    expect(await screen.findByTestId('editor-card-test-card')).toBeInTheDocument();
});

test('Should add the dropping class to the container when dragging over the column', () => {
    const { container } = render(<EditorColumn />);
    const wrappingDiv = container.firstChild!;
    fireEvent(wrappingDiv, createEvent.dragOver(wrappingDiv));
    expect(wrappingDiv).toHaveClass('dropping');
});

test('Should remove the dropping class when dragging out of the column', () => {
    const { container } = render(<EditorColumn />);
    const wrappingDiv = container.firstChild!;
    fireEvent(wrappingDiv, createEvent.dragExit(wrappingDiv));
    expect(wrappingDiv).not.toHaveClass('dropping');
});
