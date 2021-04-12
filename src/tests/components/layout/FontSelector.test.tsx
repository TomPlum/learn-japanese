import { fireEvent, render, screen } from "@testing-library/react";
import FontSelector from "../../../components/layout/FontSelector";

const onSelectHandler = jest.fn();

const setup = () => {
    const component = render(<FontSelector onSelect={onSelectHandler}/>);
    return {
        toggle: component.getByText('Font'),
        ...component
    }
}

test('Clicking the toggle should render the menu', () => {
    const { toggle } = setup();
    fireEvent.click(toggle);
    expect(screen.getByText('Ciutadella')).toBeInTheDocument();
    expect(screen.getByText('Montserrat')).toBeInTheDocument();
    expect(screen.getByText('Segoe UI')).toBeInTheDocument();
});

test('Clicking a font option from the menu should call the onSelect event handler with that font', () => {
    const { toggle } = setup();
    fireEvent.click(toggle);
    fireEvent.click(screen.getByText('Ciutadella'));
    expect(onSelectHandler).toHaveBeenCalledWith('Ciutadella Rounded Medium');
});