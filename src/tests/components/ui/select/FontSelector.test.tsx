import { fireEvent, render, screen } from "@testing-library/react";
import FontSelector from "../../../../components/ui/select/FontSelector";

const setup = () => {
    const component = render(<FontSelector />);
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
