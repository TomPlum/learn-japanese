import { fireEvent, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import Inspectable, { InspectableProps } from "../../../components/ui/Inspectable";

let props: InspectableProps;

const setup = () => {
    const child = <button>Button</button>
    const component = render(<Inspectable {...props}>{child}</Inspectable>);
    return {
        child: screen.getByRole('button'),
        ...component
    }
}

beforeEach(() => {
    props = {
        title: "example title",
        text: "example text",
        className: "exampleClass"
    }
});

test('Should render popover when clicking child element', async () => {
    const { child } = setup();

    fireEvent.click(child);
    expect(screen.getByTitle('example title')).toBeInTheDocument();

    fireEvent.click(child);
    await waitForElementToBeRemoved(() => screen.getByTitle('example title'));
});

test('Should render popover when focusing child element', async () => {
    const { child } = setup();

    fireEvent.focus(child);
    expect(screen.getByTitle('example title')).toBeInTheDocument();

    fireEvent.blur(child);
    await waitForElementToBeRemoved(() => screen.getByTitle('example title'));
});

test('Should render popover when hovering child element', async () => {
    const { child } = setup();

    fireEvent.mouseOver(child);
    expect(screen.getByTitle('example title')).toBeInTheDocument();

    fireEvent.mouseOut(child);
    await waitForElementToBeRemoved(() => screen.getByTitle('example title'));
});

test('Should apply to the \'inspectable\' class to the child', () => {
    const { child } = setup();
    expect(child).toHaveClass('inspectable');
});

test('Passing a className should apply it to the child', () => {
    const { child } = setup();
    expect(child).toHaveClass('inspectable');
    expect(child).toHaveClass('exampleClass');
});

test('Overlay should default to left placement', () => {
    const { child } = setup();
    fireEvent.click(child);
    expect(screen.getByTitle('example title')).toHaveAttribute('x-placement', 'left');
});

test('Passing the placement property should override the overlays default placement', () => {
    props.placement = 'top';
    const { child } = setup();
    fireEvent.click(child);
    expect(screen.getByTitle('example title')).toHaveAttribute('x-placement', 'top');
});

test('Should render the text in the body of the overlay', () => {
    const { child } = setup();
    fireEvent.click(child);
    expect(screen.getByText('example text')).toBeInTheDocument();
});