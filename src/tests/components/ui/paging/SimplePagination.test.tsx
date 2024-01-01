import { fireEvent, render, screen } from "@testing-library/react"
import SimplePagination, { SimplePaginationProps } from "../../../../components/ui/paging/SimplePagination"

let props: SimplePaginationProps
const onPageChangeHandler = vi.fn()

beforeEach(() => {
  props = {
    page: 0,
    lastPage: 10,
    disabled: false,
    className: "myClass",
    onPageChange: onPageChangeHandler
  }
})

const setup = () => {
  const component = render(<SimplePagination {...props} />)
  return {
    first: component.getByTitle("First"),
    prev: component.getByTitle("Prev"),
    next: component.getByTitle("Next"),
    last: component.getByTitle("Last"),
    ...component
  }
}

test("Clicking the first button should call the onPageChange event handler with page 0", () => {
  props.page = 5
  const { first } = setup()
  fireEvent.click(first)
  expect(onPageChangeHandler).toHaveBeenCalledWith(0)
})

test("Clicking the prev button should call the onPageChange event handler with the page before current", () => {
  props.page = 5
  const { prev } = setup()
  fireEvent.click(prev)
  expect(onPageChangeHandler).toHaveBeenCalledWith(4)
})

test("Clicking the next button should call the onPageChange event handler with the page after current", () => {
  props.page = 5
  const { next } = setup()
  fireEvent.click(next)
  expect(onPageChangeHandler).toHaveBeenCalledWith(6)
})

test("Clicking the last button should call the onPageChange event handler with the last page minus 1", () => {
  props.lastPage = 50
  const { last } = setup()
  fireEvent.click(last)
  expect(onPageChangeHandler).toHaveBeenCalledWith(49)
})

test("Should render the current page and show how many there are in total", () => {
  props.page = 2
  props.lastPage = 14
  setup()
  expect(screen.getByText("3 of 14")).toBeInTheDocument()
})

test("Passing disabled as true should render an ellipsis where the page numbers would be", () => {
  props.disabled = true
  setup()
  expect(screen.getByText("...")).toBeInTheDocument()
})

test("It should render the page number as an ellipsis if not disabled but last page is 0", () => {
  props.disabled = false
  props.lastPage = 0
  setup()
  expect(screen.getByText("...")).toBeInTheDocument()
})

test("Passing disabled as true should disable the first button", () => {
  props.disabled = true
  const { first } = setup()
  expect(first).toBeDisabled()
})

test("Passing disabled as true should disable the previous button", () => {
  props.disabled = true
  const { prev } = setup()
  expect(prev).toBeDisabled()
})

test("Passing disabled as true should disable the next button", () => {
  props.disabled = true
  const { next } = setup()
  expect(next).toBeDisabled()
})

test("Passing disabled as true should disable the last button", () => {
  props.disabled = true
  const { last } = setup()
  expect(last).toBeDisabled()
})

test("Should disable the first button if the component is not disabled, but current page is 0", () => {
  props.disabled = false
  props.page = 0
  const { first } = setup()
  expect(first).toBeDisabled()
})

test("Should disable the previous button if the component is not disabled, but current page is 0", () => {
  props.disabled = false
  props.page = 0
  const { prev } = setup()
  expect(prev).toBeDisabled()
})

test("Should disable the next button if the component is not disabled, but current page is the last", () => {
  props.disabled = false
  props.page = 9
  props.lastPage = 10

  const { next } = setup()

  expect(next).toBeDisabled()
})

test("Should disable the last button if the component is not disabled, but current page is the last", () => {
  props.disabled = false
  props.page = 9
  props.lastPage = 10

  const { last } = setup()

  expect(last).toBeDisabled()
})

test("Should disable the next button if the component is not disabled, but the last page is 0", () => {
  props.disabled = false
  props.lastPage = 0

  const { next } = setup()

  expect(next).toBeDisabled()
})

test("Should disable the last button if the component is not disabled, but the last page is 0", () => {
  props.disabled = false
  props.lastPage = 0

  const { last } = setup()

  expect(last).toBeDisabled()
})
