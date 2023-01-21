import Copyable from "../../../components/ui/Copyable"
import { fireEvent, render } from "@testing-library/react"

const mockClipboard = jest.fn()

/*
Object.defineProperty(navigator, "clipboard", {
    value: {
        writeText: mockClipboard,
    }
});
*/

//jest.spyOn(navigator.clipboard, "writeText");

const setup = () => {
    const component = render(
        <Copyable>
            <span>test</span>
        </Copyable>
    )
    return {
        text: component.getByTitle("Click to copy"),
        ...component
    }
}

test.skip("Should copy the text contents to the clipboard when clicking it", async () => {
    const { text } = setup()
    fireEvent.click(text)
    return navigator.clipboard.readText().then((data) => expect(data).toBe("test"))
})

/*
test('Should copy the text contents to the clipboard when clicking it', async () => {
    const component = render(
        <Copyable>
            <span>
                <span>(</span>
                <p>
                    <span>expected-value</span>
                </p>
                <span>)</span>
            </span>
        </Copyable>
    );
    fireEvent.click(component.getByText('expected-value'));
    expect(mockClipboard).toHaveBeenLastCalledWith('expected-value');
});*/
