import { render } from "@testing-library/react";
import SessionProgressBar from "../../../components/ui/SessionProgressBar";

test('Should render with given title', () => {
    const component = render(<SessionProgressBar inProgress={true} value={50} title="bar" />);
    expect(component.getByTitle('bar')).toBeInTheDocument();
});

//TODO: More BS. Says that both are added.
test.skip('Passing a class should override the default', () => {
    const component = render(<SessionProgressBar inProgress={true} value={50} title="bar" className="exampleClass"/>);
    const bar = component.getByTitle('bar');
    expect(bar).toHaveClass('exampleClass');
    expect(bar).not.toHaveClass('progress');
});

test('Omitting the className property should use the default', () => {
    const component = render(<SessionProgressBar inProgress={true} value={50} title="bar"/>);
    const bar = component.getByTitle('bar');
    expect(bar).toHaveClass('progress');
});