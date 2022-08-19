import { fireEvent, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import ValueSelector, { ValueSelectorProps } from "../../../../components/ui/select/ValueSelector";
import { findAllByTextWithElements, findByTextWithElements, getAllByTextWithElements, getByTextWithElements } from "../../../Queries";
import userEvent from "@testing-library/user-event";

const onChangeHandler = jest.fn();

let props: ValueSelectorProps;

beforeEach(() => {
    props = {
        id: "my-value-selector",
        placement: "top",
        selected: 20,
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
        select: component.getByTestId('my-value-selector'),
        ...component
    }
}

test("Should offer all the values from the property", () => {
    props.values = [10, 20, 30];
    setup();
    expect(getByTextWithElements('Show 20')).toBeInTheDocument();
});

test("Should offer all the values even when limiting the height in a scrollable container", async () => {
    props.values = [10, 20, 30];
    props.showBeforeScrolling = 150;

    setup();

    fireEvent.click(getByTextWithElements('Show 20'));

    expect(await findByTextWithElements('Show 10')).toBeInTheDocument();
    expect(getAllByTextWithElements('Show 20')[1]).toBeInTheDocument();
    expect(getByTextWithElements('Show 30')).toBeInTheDocument();
});

test("Should render the prefix when passed", () => {
    props.prefix = "Show";
    setup();
    expect(getByTextWithElements('Show 20')).toBeInTheDocument();
});

test("Should render no prefix if omitted", () => {
    props.prefix = undefined;
    setup();
    expect(screen.getByText('20')).toBeInTheDocument();
});

test("Should call the onChange event handler when selecting a value", async () => {
    const { select } = setup();

    fireEvent.click(select);
    expect(await screen.findByText('Show 40')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Show 40'))
    expect(onChangeHandler).toHaveBeenLastCalledWith(40);
});

test("Should not render an options menu when clicking the selector if disabled", () => {
    props.disabled = true;
    const { select } = setup();
    fireEvent.click(select);
    expect(screen.queryByText('Show 40')).not.toBeInTheDocument();
});

test("Should set the menu placement to bottom if not specified", async () => {
    props.placement = undefined;
    const { select } = setup();
    fireEvent.click(select);
    expect(await screen.findByText('Show 40')).toBeInTheDocument();
});

test("Clicking outside of the menu should stop rendering it", async () => {
    const { select } = setup();

    // Open the selection menu
    fireEvent.click(select);
    expect(await screen.findByText('Show 40')).toBeInTheDocument();

    // Click outside the menu to dismiss
    userEvent.click(document.body);
    await waitForElementToBeRemoved(screen.queryByText('Show 40'));
});
