import { fireEvent, render } from "@testing-library/react";
import SpinnerController from "../../../components/ui/SpinnerController";

const onChangeHandler = jest.fn();

test('Passing in a single reading should render a 1 on the controls section', () => {
    const component = render(<SpinnerController values={["v1"]} onChange={onChangeHandler} />);
    expect(component.getByText('1')).toBeInTheDocument();
});

test('Passing in a disabled title prop should enable it when there is only a single value', () => {
    const component = render(<SpinnerController values={["v1"]} onChange={onChangeHandler} disabledTitle={"test"} />);
    expect(component.getByTitle('test')).toBeInTheDocument();
});

test('Omitting the disabled title prop should default the title when there is only a single value', () => {
    const component = render(<SpinnerController values={["v1"]} onChange={onChangeHandler} />);
    expect(component.getByTitle('There is only one available.')).toBeInTheDocument();
});

test('Clicking the \'Last\' arrow should call the onChange event handler with the last value', () => {
    const component = render(<SpinnerController values={["1", "2", "3"]} onChange={onChangeHandler} />);
    fireEvent.click(component.getByTitle('Last'));
    expect(onChangeHandler).toHaveBeenCalledWith("3");
});

test('Clicking the \'Next\' arrow should call the onChange event handler with the next value', () => {
    const component = render(<SpinnerController values={["1", "2", "3"]} onChange={onChangeHandler} />);
    fireEvent.click(component.getByTitle('Next'));
    expect(onChangeHandler).toHaveBeenCalledWith("2");
});

test('Clicking the \'Last\' arrow arrow should do nothing when there is only 1 value', () => {
    const component = render(<SpinnerController values={["1"]} onChange={onChangeHandler} />);
    expect(component.queryByTitle('Last')).not.toBeInTheDocument();
});

test('Clicking the \'Next\' arrow arrow should do nothing when there is only 1 value', () => {
    const component = render(<SpinnerController values={["1"]} onChange={onChangeHandler} />);
    expect(component.queryByTitle('Next')).not.toBeInTheDocument();
});

test('Clicking the \'Last\' arrow when there are multiple values and the first is selected, should wrap round to the end number', () => {
    const component = render(<SpinnerController values={["v1", "v2", "v3"]} onChange={onChangeHandler} />);
    expect(component.getByText('1')).toBeInTheDocument();
    fireEvent.click(component.getByTitle('Last'));
    expect(component.getByText('3')).toBeInTheDocument();
});

test('Clicking the \'Last\' arrow when there are multiple values and the first is NOT selected, then it should go back one', () => {
    const component = render(<SpinnerController values={["v1", "v2", "v3"]} onChange={onChangeHandler} />);
    expect(component.getByText('1')).toBeInTheDocument();
    fireEvent.click(component.getByTitle('Next'));
    expect(component.getByText('2')).toBeInTheDocument();
    fireEvent.click(component.getByTitle('Last'));
    expect(component.getByText('1')).toBeInTheDocument();
});

test('Clicking the \'Next\' arrow when there are multiple values should change the number', () => {
    const component = render(<SpinnerController values={["v1", "v2", "v3"]} onChange={onChangeHandler} />);
    expect(component.getByText('1')).toBeInTheDocument();
    fireEvent.click(component.getByTitle('Next'));
    expect(component.getByText('2')).toBeInTheDocument();
});

test('Clicking the \'Next\' arrow when there are multiple values and the last is selected should wrap round to the start number', () => {
    const component = render(<SpinnerController values={["v1", "v2", "v3"]} onChange={onChangeHandler} />);
    expect(component.getByText('1')).toBeInTheDocument();
    fireEvent.click(component.getByTitle('Next'));
    expect(component.getByText('2')).toBeInTheDocument();
    fireEvent.click(component.getByTitle('Next'));
    expect(component.getByText('3')).toBeInTheDocument();
    fireEvent.click(component.getByTitle('Next'));
    expect(component.getByText('1')).toBeInTheDocument();
});