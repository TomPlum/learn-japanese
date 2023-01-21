import { fireEvent, screen } from "@testing-library/react"
import KanjiSettingsForm from "../../../../components/settings/data/KanjiSettingsForm"
import { KyoikuGrade } from "../../../../domain/kanji/KyoikuGrade"
import KanjiSettings, { KanjiSettingsBuilder } from "../../../../domain/session/settings/data/KanjiSettings"
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons"
import { DataSettingsMenuProps } from "../../../../components/settings/data/DataSettingsMenu"
import renderWithTranslation from "../../../renderWithTranslation"

const onConfirmHandler = jest.fn()
const onResetHandler = jest.fn()
const onQuitHandler = jest.fn()

let props: DataSettingsMenuProps<KanjiSettings>

beforeEach(() => {
  props = {
    title: "Kanji",
    icon: faPaintBrush,
    onConfirm: onConfirmHandler,
    onReset: onResetHandler,
    onQuit: onQuitHandler
  }
})

const setup = () => {
  const component = renderWithTranslation(<KanjiSettingsForm {...props} />)
  return {
    grade1: component.getByText("Grade 1"),
    grade2: component.getByText("Grade 2"),
    grade3: component.getByText("Grade 3"),
    grade4: component.getByText("Grade 4"),
    grade5: component.getByText("Grade 5"),
    grade6: component.getByText("Grade 6"),
    quantity: component.getByPlaceholderText("Quantity"),
    back: component.getByText("Back"),
    reset: component.getByText("Reset"),
    confirm: component.getByText("Confirm"),
    ...component
  }
}

test("It should render the default description on load", () => {
  setup()
  expect(screen.getByText("Choose one or many grades below to begin.")).toBeInTheDocument()
})

test("Selecting a single grade should display the quantity in the description", () => {
  const { grade1 } = setup()
  fireEvent.click(grade1)
  expect(screen.getByText("Selected 80 Kanji")).toBeInTheDocument()
})

test("Selecting a multiple grades should display the cumulative quantity in the description", () => {
  const { grade1, grade3 } = setup()
  fireEvent.click(grade1)
  fireEvent.click(grade3)
  expect(screen.getByText("Selected 280 Kanji")).toBeInTheDocument()
})

test("Un-selecting a grade should remove it from the selection and update the description", () => {
  const { grade1, grade3 } = setup()
  fireEvent.click(grade1)
  fireEvent.click(grade3)
  fireEvent.click(grade3)
  expect(screen.getByText("Selected 80 Kanji")).toBeInTheDocument()
})

test("Confirm button should be disabled on load", () => {
  const { confirm } = setup()
  expect(confirm.parentElement).toBeDisabled()
})

test("Selecting a single grade should enable the confirm button", () => {
  const { confirm, grade4 } = setup()
  fireEvent.click(grade4)
  expect(confirm.parentElement).not.toBeDisabled()
})

test("Selecting multiple grades should enable the confirm button", () => {
  const { confirm, grade4, grade6 } = setup()
  fireEvent.click(grade4)
  fireEvent.click(grade6)
  expect(confirm.parentElement).not.toBeDisabled()
})

test("Clicking start with Kyoiku kanji selected should call the onSelected event handler with the selected grades", () => {
  const { confirm, grade1 } = setup()
  fireEvent.click(grade1)
  fireEvent.click(confirm)
  expect(onConfirmHandler).toHaveBeenCalledWith(new KanjiSettingsBuilder().withGrades([KyoikuGrade.ONE]).build())
})

test("Entering a valid quantity should enable the confirm button", () => {
  const { confirm, quantity } = setup()
  fireEvent.change(quantity, { target: { value: 10 } })
  expect(confirm.parentElement).not.toBeDisabled()
})

test("Entering an invalid quantity should NOT enable the confirm button", () => {
  const { confirm, quantity } = setup()
  fireEvent.change(quantity, { target: { value: "a" } })
  expect(confirm.parentElement).toBeDisabled()
})

test("Clicking start with a quantity selected should call the onSelected event handler with the quantity", () => {
  const { confirm, quantity } = setup()
  fireEvent.change(quantity, { target: { value: 10 } })
  fireEvent.click(confirm)
  expect(onConfirmHandler).toHaveBeenCalledWith(new KanjiSettingsBuilder().withQuantity(10).build())
})

test("Clicking start with a quantity and grade selected should call the onSelected event handler with both", () => {
  const { grade1, confirm, quantity } = setup()
  fireEvent.change(quantity, { target: { value: 10 } })
  fireEvent.click(grade1)
  fireEvent.click(confirm)
  expect(onConfirmHandler).toHaveBeenCalledWith(
    new KanjiSettingsBuilder().withGrades([KyoikuGrade.ONE]).withQuantity(10).build()
  )
})

test("Selecting all grades with a quantity specified should render the correct description", () => {
  const { grade1, grade2, grade3, grade4, grade5, grade6, quantity } = setup()

  fireEvent.click(grade1)
  fireEvent.click(grade2)
  fireEvent.click(grade3)
  fireEvent.click(grade4)
  fireEvent.click(grade5)
  fireEvent.click(grade6)
  fireEvent.change(quantity, { target: { value: 10 } })

  expect(screen.getByText("Selected 10 random kanji from all grades.")).toBeInTheDocument()
})

test("Selecting more than 1 grade with a quantity specified should render the correct description", () => {
  const { grade1, grade2, grade3, quantity } = setup()

  fireEvent.click(grade1)
  fireEvent.click(grade2)
  fireEvent.click(grade3)
  fireEvent.change(quantity, { target: { value: 25 } })

  expect(screen.getByText("Selected 25 random kanji from grades 1, 2 & 3.")).toBeInTheDocument()
})

test("Selecting exactly 1 grade with a quantity specified should render the correct description", () => {
  const { grade1, quantity } = setup()
  fireEvent.click(grade1)
  fireEvent.change(quantity, { target: { value: 15 } })
  expect(screen.getByText("Selected 15 random kanji from grade 1.")).toBeInTheDocument()
})

test("Clicking reset should reset the form to its default state", () => {
  const { grade1, quantity, reset } = setup()

  //Change some settings
  fireEvent.click(grade1)
  fireEvent.change(quantity, { target: { value: 20 } })
  expect(screen.getByText("Selected 20 random kanji from grade 1."))

  //Reset
  fireEvent.click(reset)

  //Should be reset to default
  expect(screen.getByText("Choose one or many grades below to begin."))
})

test("Clicking the back button should call the onQuit event handler", () => {
  const { back } = setup()
  fireEvent.click(back)
  expect(onQuitHandler).toHaveBeenCalled()
})
