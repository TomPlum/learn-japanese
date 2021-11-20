import { render, screen } from "@testing-library/react";
import ValueSelector, { ValueSelectorProps } from "../../../../components/ui/select/ValueSelector";
import { getByTextWithElements } from "../../../Queries";
import userEvent from "@testing-library/user-event";

const onChangeHandler = jest.fn();

let props: ValueSelectorProps;

beforeEach(() => {
    props = {
        prefix: "Show",
        className: "myClass",
        disabled: false,
        values: [10, 20, 30, 40],
        onChange: onChangeHandler
    };
});

const setup = () => {
    const component = render(<ValueSelector {...props} />);
    return {
        select: component.getByTestId('value-selector'),
        ...component
    }
}

test("Should offer all the values from the property", () => {
    props.values = [10, 20, 30];
    setup();
    expect(getByTextWithElements('Show 10')).toBeInTheDocument();
});

test("Should render the prefix when passed", () => {
    props.prefix = "Show";
    setup();
    expect(getByTextWithElements('Show 10')).toBeInTheDocument();
});

test("Should render no prefix if omitted", () => {
    props.prefix = undefined;
    setup();
    expect(screen.getByText('10')).toBeInTheDocument();
});

test("Should call the onChange event handler when selecting a value", () => {
    const { select } = setup();
    userEvent.selectOptions(select, 'Show 20');
    expect(onChangeHandler).toHaveBeenLastCalledWith(20);
});
