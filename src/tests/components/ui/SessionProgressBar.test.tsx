import { render } from "@testing-library/react";
import SessionProgressBar from "../../../components/ui/SessionProgressBar";

test('Should show the progress out of total in the title', () => {
    const component = render(<SessionProgressBar inProgress={true} quantity={50} remaining={20} />);
    expect(component.getByTitle('30/50')).toBeInTheDocument();
});

test('Passing a class should override the default \'.bar\' class', () => {
    const { container } = render(<SessionProgressBar inProgress={true} quantity={50} remaining={20} className="exampleClass" />);
    const bar = container.firstChild;
    expect(bar).toHaveClass('exampleClass');
    expect(bar).toHaveClass('default');
    expect(bar).not.toHaveClass('bar');
});

test('Omitting the className property should use the default \'.bar\' class', () => {
    const component = render(<SessionProgressBar inProgress={true} quantity={50} remaining={20} />);
    const bar = component.getByTitle('30/50');
    expect(bar).toHaveClass('bar');
    expect(bar).toHaveClass('default');
});