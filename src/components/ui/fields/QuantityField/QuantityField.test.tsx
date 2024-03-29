import { fireEvent } from "@testing-library/react"
import QuantityField, { QuantityFieldProps }  from "./QuantityField"
import { render } from "__test-utils__"

let props: QuantityFieldProps

const isValidHandler = vi.fn()
const onChangeHandler = vi.fn()

beforeEach(() => {
  props = {
    value: 25,
    className: "fieldClass",
    isValid: isValidHandler,
    onChange: onChangeHandler
  }
})

const setup = () => {
  const { component }  = render(<QuantityField {...props} />)
  return {
    field: component.getByPlaceholderText("Quantity"),
    ...component
  }
}

test("Should pass the value props into the underlying field", () => {
  props.value = 50
  const { field } = setup()
  expect(field).toHaveValue(50)
})

test("Changing the value should call the onChange event handler", () => {
  const { field } = setup()
  fireEvent.change(field, { target: { value: 10 } })
  expect(onChangeHandler).toHaveBeenLastCalledWith(10)
})

test("Changing the value to something other than a number should not call the onChange event handler", () => {
  const { field } = setup()
  fireEvent.change(field, { target: { value: "A" } })
  expect(onChangeHandler).not.toHaveBeenLastCalledWith("A")
})
