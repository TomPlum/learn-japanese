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
        popover: {
            title: "example title",
            text: "example text"
        },
        className: "exampleClass"
    }
});

test('Should render popover when clicking child element', async () => {
    const { child } = setup();

    fireEvent.click(child);
    expect(await screen.findByTitle('example title')).toBeInTheDocument();

    fireEvent.click(child);
    await waitForElementToBeRemoved(() => screen.getByTitle('example title'));
});

test('Should render popover when focusing child element', async () => {
    const { child } = setup();

    fireEvent.focus(child);
    expect(await screen.findByTitle('example title')).toBeInTheDocument();

    fireEvent.blur(child);
    await waitForElementToBeRemoved(() => screen.getByTitle('example title'));
});

test('Should render popover when hovering child element', async () => {
    const { child } = setup();

    fireEvent.mouseOver(child);
    expect(await screen.findByTitle('example title')).toBeInTheDocument();

    fireEvent.mouseOut(child);
    await waitForElementToBeRemoved(() => screen.getByTitle('example title'));
});

test('Should apply to the \'black\' class to the child by default', () => {
    const { child } = setup();
    expect(child).toHaveClass('black');
});

test('Passing a className should apply it to the child', () => {
    const { child } = setup();
    expect(child).toHaveClass('black');
    expect(child).toHaveClass('exampleClass');
});

test('Passing the colour property as \'white\' should apply the white class', () => {
   props.color = 'white';
   const { child } = setup();
   expect(child).toHaveClass('white');
});

test('Overlay should default to left placement', async () => {
    const { child } = setup();
    fireEvent.click(child);
    expect(await screen.findByTitle('example title')).toHaveAttribute('x-placement', 'left');
});

test('Passing the placement property should override the overlays default placement', async () => {
    props.placement = 'top';
    const { child } = setup();
    fireEvent.click(child);
    expect(await screen.findByTitle('example title')).toHaveAttribute('x-placement', 'top');
});

test('Should render the text in the body of the overlay', async () => {
    const { child } = setup();
    fireEvent.click(child);
    expect(await screen.findByText('example text')).toBeInTheDocument();
});
