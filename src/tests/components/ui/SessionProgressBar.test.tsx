import { render } from "@testing-library/react";
import SessionProgressBar from "../../../components/ui/SessionProgressBar";
import each from "jest-each";

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

each([5, 6, 10]).test('Passing in a streak greater than or equal to 5 should render with the warning variant', (streak: number) => {
    const { container } = render(<SessionProgressBar inProgress={true} quantity={50} remaining={20} streak={streak} />);
    expect(container.firstChild?.firstChild).toHaveClass('bg-warning');
});

each([4, 2, 0]).test('Passing in a streak less than 5 should render with the primary variant', (streak: number) => {
    const { container } = render(<SessionProgressBar inProgress={true} quantity={50} remaining={20} streak={streak} />);
    expect(container.firstChild?.firstChild).not.toHaveClass('bg-warning'); //bg-primary doesn't exist, it's the default
});

test('Omitting the streak property should render the bar with the default primary variant', () => {
    const { container } = render(<SessionProgressBar inProgress={true} quantity={50} remaining={20} />);
    expect(container.firstChild?.firstChild).not.toHaveClass('bg-warning'); //bg-primary doesn't exist, it's the default
});

test('Passing in a remaining value of 0 sld render the bar with the success variant', () => {
    const { container } = render(<SessionProgressBar inProgress={true} quantity={50} remaining={0} />);
    expect(container.firstChild?.firstChild).toHaveClass('bg-success');
});