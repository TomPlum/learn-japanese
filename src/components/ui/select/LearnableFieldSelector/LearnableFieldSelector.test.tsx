import { fireEvent, screen } from "@testing-library/react"
import LearnableFieldSelector, {
  LearnableFieldSelectorProps
} from "../../../../components/ui/select/LearnableFieldSelector"
import LearnableField from "types/learn/LearnableField"
import userEvent from "@testing-library/user-event"
import { render } from "__test-utils__"

const onSelectHandler = vi.fn()

let props: LearnableFieldSelectorProps

beforeEach(() => {
  props = {
    onSelect: onSelectHandler
  }
})

const setup = () => {
  const { component } = render(<LearnableFieldSelector {...props} />)
  return {
    field: component.getByTestId("learnable-field-selector"),
    help: component.getByTestId("field-help"),
    ...component
  }
}

test("It should set the default value if the property is passed", () => {
  props.defaultField = LearnableField.KANJI
  const { field } = setup()
  expect(field).toHaveDisplayValue("Kanji")
})

test("Omitting the default property should cause the value to default to kana", () => {
  props.defaultField = undefined
  const { field } = setup()
  expect(field).toHaveDisplayValue("Kana")
})

test("Passing a field to exclude should prevent it from appearing in the select list", async () => {
  props.exclude = LearnableField.RANDOM
  const { field } = setup()
  return userEvent.selectOptions(field, "Random").catch((e: Error) => {
    expect(e.message).toContain('Value "Random" not found in options')
  })
})

test("It should call the onSelect event handler when changing the option", async () => {
  props.defaultField = LearnableField.KANA
  const { field } = setup()
  await userEvent.selectOptions(field, "Kanji")
  expect(onSelectHandler).toHaveBeenLastCalledWith(LearnableField.KANJI)
})

test("It should render an inline help icon that shows the name and description of the selected field", async () => {
  const { field, help } = setup()

  await userEvent.selectOptions(field, "Japanese")
  fireEvent.mouseOver(help)

  expect(await screen.findAllByText("Japanese")).toHaveLength(2)
  expect(
    await screen.findByText("Some words can be expressed in all kanji or a mixture of kanji and kana.")
  ).toBeInTheDocument()
})
