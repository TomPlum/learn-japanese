import { render } from "@testing-library/react";
import HelpButton from "../../../components/ui/HelpButton";

const setup = () => {
    const component = render(<HelpButton className="exampleClass" />);
    return {
        button: component.getByTitle('Help'),
        ...component
    }
}

test('Clicking the button should direct to \'/help\'', () => {
    const { button } = setup();
    expect(button).toHaveAttribute('href', '/help');
});

test('Passing a className property should append it with the default', () => {
    const { button } = setup();
    expect(button).toHaveClass('exampleClass');
    expect(button).toHaveClass('button');
});