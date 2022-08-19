import { createEvent, fireEvent, screen } from "@testing-library/react";
import EditorColumn from "../../../../components/layout/editor/EditorColumn";
import renderWithTranslation from "../../../renderWithTranslation";

const mockGetData = jest.fn();

beforeEach(() => {
    mockGetData.mockReset();
});

test('Should render a card when dropping with valid details', () => {
    mockGetData.mockReturnValueOnce("{\"name\":\"test-card\",\"size\":\"sm\"}");
    const { container } = renderWithTranslation(<EditorColumn />);

    const dropEvent = createEvent.drop(container.firstChild!, { dataTransfer: { getData: mockGetData }});
    fireEvent(container.firstChild!, dropEvent);

    expect(screen.getByTestId('editor-card-test-card')).toBeInTheDocument();
});

test('Should add the dropping class to the container when dragging over the column', () => {
    const { container } = renderWithTranslation(<EditorColumn />);
    const wrappingDiv = container.firstChild!;
    fireEvent(wrappingDiv, createEvent.dragOver(wrappingDiv));
    expect(wrappingDiv).toHaveClass('dropping');
});

test('Should remove the dropping class when dragging out of the column', () => {
    const { container } = renderWithTranslation(<EditorColumn />);
    const wrappingDiv = container.firstChild!;
    fireEvent(wrappingDiv, createEvent.dragExit(wrappingDiv));
    expect(wrappingDiv).not.toHaveClass('dropping');
});

test('Should add the hidden class to the picked card when starting to drag one', () => {
    renderWithTranslation(<EditorColumn defaultCards={[{ name: "test-card", size: "sm" }]} />);
    const card = screen.getByTestId('editor-card-test-card');
    fireEvent(card, createEvent.dragStart(card, { dataTransfer: { setData: jest.fn() }}));
    expect(card).toHaveClass('hidden');
});

test('Should not add the hidden class to the other cards when starting to drag one', () => {
    renderWithTranslation(<EditorColumn defaultCards={[{ name: "test-card", size: "sm" }, { name: "other-card", size: "sm" }]} />);
    const card = screen.getByTestId('editor-card-test-card');
    fireEvent(card, createEvent.dragStart(card, { dataTransfer: { setData: jest.fn() }}));
    expect(screen.getByTestId('editor-card-other-card')).not.toHaveClass('hidden');
});
