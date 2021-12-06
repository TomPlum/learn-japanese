import { fireEvent, render, screen } from "@testing-library/react";
import HelpButton from "../../../../components/ui/buttons/HelpButton";

const setup = () => {
    const component = render(<HelpButton/>);
    return {
        button: component.getByTestId('help-button'),
        ...component
    }
}

test('Clicking on the super memo 2 algorithm link should route to the help page', async () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(await screen.findByText('SuperMemo2 Algorithm')).toHaveAttribute('href', "/example-base-path/help");
});

test('Clicking on the FAQs link should route to the help page', async () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(await screen.findByText('Frequently Asked Questions')).toHaveAttribute('href', "/example-base-path/help");
});
