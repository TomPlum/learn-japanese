import { fireEvent, screen } from "@testing-library/react";
import FontSelectorButton from "../../../../components/ui/buttons/FontSelectorButton";
import renderReduxConsumer from "../../../renderReduxConsumer";

const setup = () => {
    const component = renderReduxConsumer(<FontSelectorButton />);
    return {
        toggle: component.getByText('Font'),
        ...component
    }
}

test('Clicking the toggle should render the menu', async () => {
    const { toggle } = setup();
    fireEvent.click(toggle);
    expect(await screen.findByText('Default')).toBeInTheDocument();
    expect(await screen.findByText('Handwriting')).toBeInTheDocument();
    expect(await screen.findByText('Gothic')).toBeInTheDocument();
    expect(await screen.findByText('Mincho')).toBeInTheDocument();
});
