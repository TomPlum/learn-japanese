import Copyable  from "./Copyable"
import { fireEvent, render } from "@testing-library/react"

const mockClipboard = vi.fn()

Object.defineProperty(navigator, "clipboard", {
    value: {
        writeText: mockClipboard,
    }
});

test('Should copy the text contents (split across elements) to the clipboard when clicking it', async () => {
    mockClipboard.mockResolvedValueOnce({})

    const component = render(
        <Copyable>
            <span>
                <span>(</span>
                <span>
                    <span>expected-value</span>
                </span>
                <span>)</span>
            </span>
        </Copyable>
    );

    fireEvent.click(component.getByText('expected-value'));
    expect(mockClipboard).toHaveBeenLastCalledWith('expected-value');
});
