import { fireEvent, render, screen } from "@testing-library/react"
import TablePagination, { TablePaginationProps }  from "./TablePagination"
import userEvent from "@testing-library/user-event"
import { getByTextWithElements } from "__test-utils__/Queries"

const onFirstPageHandler = vi.fn()
const onNextPageHandler = vi.fn()
const onPreviousPageHandler = vi.fn()
const onLastPageHandler = vi.fn()
const onChangeQuantityHandler = vi.fn()
const onToggleFirstBookHandler = vi.fn()
const onToggleSecondBookHandler = vi.fn()

let props: TablePaginationProps

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
    onChangeQuantity: onChangeQuantityHandler,
    onToggleFirstBook: onToggleFirstBookHandler,
    onToggleSecondBook: onToggleSecondBookHandler
  }
})

const setup = () => {
  const component = render(<TablePagination {...props} />)
  return {
    last: component.getByTitle("Last Page"),
    first: component.getByTitle("First Page"),
    next: component.getByTitle("Next Page"),
    previous: component.getByTitle("Previous Page"),
    rows: component.getByTitle("Rows per Page"),
    genkiOne: component.getByText("Genki I"),
    genkiTwo: component.getByText("Genki II"),
    ...component
  }
}

test("Clicking the last button should call the onLastPage event handler", () => {
  const { last } = setup()
  fireEvent.click(last)
  expect(onLastPageHandler).toHaveBeenCalled()
})

test("Clicking the first button should call the onFirstPage event handler", () => {
  const { first } = setup()
  fireEvent.click(first)
  expect(onFirstPageHandler).toHaveBeenCalled()
})

test("Clicking the next button should call the onNextPage event handler", () => {
  const { next } = setup()
  fireEvent.click(next)
  expect(onNextPageHandler).toHaveBeenCalled()
})

test("Clicking the previous button should call the onPreviousPage event handler", () => {
  const { previous } = setup()
  fireEvent.click(previous)
  expect(onPreviousPageHandler).toHaveBeenCalled()
})

test("Selecting an option from the rows per page select should call the onChangeQuantity event handler", async () => {
  const { rows } = setup()
  await userEvent.selectOptions(rows, "Show 20")
  expect(onChangeQuantityHandler).toHaveBeenCalledWith(20)
})

test("Passing canNextPage as true should enable the next button", () => {
  props.canNextPage = true
  const { next } = setup()
  expect(next.parentElement).not.toHaveClass("disabled")
})

test("Passing canNextPage as false should disable the next button", () => {
  props.canNextPage = false
  const { next } = setup()
  expect(next.parentElement).toHaveClass("disabled")
})

test("Passing canNextPage as false should disable the last button", () => {
  props.canNextPage = false
  const { last } = setup()
  expect(last.parentElement).toHaveClass("disabled")
})

test("Passing canPreviousPage as true should enable the previous button", () => {
  props.canPreviousPage = true
  const { previous } = setup()
  expect(previous).not.toHaveClass("disabled")
})

test("Passing canPreviousPage as false should disable the previous button", () => {
  props.canPreviousPage = false
  const { previous } = setup()
  expect(previous.parentElement).toHaveClass("disabled")
})

test("Passing canPreviousPage as false should disable the first button", () => {
  props.canPreviousPage = false
  const { first } = setup()
  expect(first.parentElement).toHaveClass("disabled")
})

test("Should render the current and total pages", () => {
  setup()
  expect(getByTextWithElements("Page 3 of 10")).toBeInTheDocument()
})

test("Should render No Results in if the total pages are 0", () => {
  props.totalPages = 0
  setup()
  expect(screen.getByText("No Results")).toBeInTheDocument()
})

test("Should disable page quantity selector when there are 0 results", () => {
  props.totalPages = 0
  const { rows } = setup()
  expect(rows).toBeDisabled()
})

test("Clicking the Genki I button should call the onToggleFirstBook event handler", () => {
  const { genkiOne } = setup()
  fireEvent.click(genkiOne)
  expect(onToggleFirstBookHandler).toHaveBeenCalled()
})

test("Clicking the Genki II button should call the onToggleSecondBook event handler", () => {
  const { genkiTwo } = setup()
  fireEvent.click(genkiTwo)
  expect(onToggleSecondBookHandler).toHaveBeenCalled()
})
