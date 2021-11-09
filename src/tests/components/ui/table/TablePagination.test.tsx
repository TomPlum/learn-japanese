import { fireEvent, render, screen } from "@testing-library/react";
import TablePagination, { TablePaginationProps } from "../../../../components/ui/table/TablePagination";
import userEvent from "@testing-library/user-event";
import { getByTextWithElements } from "../../../Queries";

const onFirstPageHandler = jest.fn();
const onNextPageHandler = jest.fn();
const onPreviousPageHandler = jest.fn();
const onLastPageHandler = jest.fn();
const onChangeQuantityHandler = jest.fn();

let props: TablePaginationProps;

beforeEach(() => {
    props = {
        canNextPage: false,
        canPreviousPage: false,
        currentPage: 3,
        totalPages: 10,
        onFirstPage: onFirstPageHandler,
        onNextPage: onNextPageHandler,
        onPreviousPage: onPreviousPageHandler,
        onLastPage: onLastPageHandler,
        onChangeQuantity: onChangeQuantityHandler
    };
});

const setup = () => {
    const component = render(<TablePagination {...props} />);
    return {
        last: component.getByTitle('Last Page'),
        first: component.getByTitle('First Page'),
        next: component.getByTitle('Next Page'),
        previous: component.getByTitle('Previous Page'),
        rows: component.getByTitle('Rows per Page'),
        ...component
    }
}

test('Clicking the last button should call the onLastPage event handler', () => {
    const { last } = setup();
    fireEvent.click(last);
    expect(onLastPageHandler).toHaveBeenCalled();
});

test('Clicking the first button should call the onFirstPage event handler', () => {
    const { first } = setup();
    fireEvent.click(first);
    expect(onFirstPageHandler).toHaveBeenCalled();
});

test('Clicking the next button should call the onNextPage event handler', () => {
    const { next } = setup();
    fireEvent.click(next);
    expect(onNextPageHandler).toHaveBeenCalled();
});

test('Clicking the previous button should call the onPreviousPage event handler', () => {
    const { previous } = setup();
    fireEvent.click(previous);
    expect(onPreviousPageHandler).toHaveBeenCalled();
});

test('Selecting an option from the rows per page select should call the onChangeQuantity event handler', () => {
    const { rows } = setup();
    userEvent.selectOptions(rows, 'Show 20');
    expect(onChangeQuantityHandler).toHaveBeenCalledWith(20);
});

test('Passing canNextPage as true should enable the next button', () => {
    props.canNextPage = true;
    const { next } = setup();
    expect(next.parentElement).not.toHaveClass('disabled');
});

test('Passing canNextPage as false should disable the next button', () => {
    props.canNextPage = false;
    const { next } = setup();
    expect(next.parentElement).toHaveClass('disabled');
});

test('Passing canNextPage as false should disable the last button', () => {
    props.canNextPage = false;
    const { last } = setup();
    expect(last.parentElement).toHaveClass('disabled');
});

test('Passing canPreviousPage as true should enable the previous button', () => {
    props.canPreviousPage = true;
    const { previous } = setup();
    expect(previous).not.toHaveClass('disabled');
});

test('Passing canPreviousPage as false should disable the previous button', () => {
    props.canPreviousPage = false;
    const { previous } = setup();
    expect(previous.parentElement).toHaveClass('disabled');
});

test('Passing canPreviousPage as false should disable the first button', () => {
    props.canPreviousPage = false;
    const { first } = setup();
    expect(first.parentElement).toHaveClass('disabled');
});

test('Should render the current and total pages', () => {
    setup();
    expect(getByTextWithElements('Page 3 of 10')).toBeInTheDocument();
});

test('Should render No Results in if the total pages are 0', () => {
    props.totalPages = 0;
    setup();
    expect(screen.getByText('No Results')).toBeInTheDocument();
});
