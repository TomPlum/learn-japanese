import Copyable from "../../../components/ui/Copyable";
import { fireEvent, render } from "@testing-library/react";

const setup = () => {
    const component = render(<Copyable><p>test</p></Copyable>);
    return {
        text: component.getByText('test'),
        ...component
    }
}

test('Should copy the text contents to the clipboard when clicking the it', async () => {
    const { text } = setup();
    fireEvent.click(text);
    return await navigator.clipboard.readText().then(data => expect(data).toBe('test'));
});