import { fireEvent, render, screen } from "@testing-library/react";
import FontSelectorButton from "../../../../components/ui/buttons/FontSelectorButton";

const setup = () => {
    const component = render(<FontSelectorButton />);
    return {
        toggle: component.getByText('Font'),
        ...component
    }
}

test('Clicking the toggle should render the menu', async () => {
    const { toggle } = setup();
    fireEvent.click(toggle);
    expect(await screen.findByText('Ciutadella')).toBeInTheDocument();
    expect(await screen.findByText('Montserrat')).toBeInTheDocument();
    expect(await screen.findByText('Segoe UI')).toBeInTheDocument();
});
