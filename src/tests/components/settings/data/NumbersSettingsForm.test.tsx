import { fireEvent } from "@testing-library/react"
import NumbersSettingsForm from "../../../../components/settings/data/NumbersSettingsForm"
import { DataSettingsMenuProps } from "../../../../components/settings/data/DataSettingsMenu"
import NumbersSettings, { NumbersSettingsBuilder } from "../../../../domain/session/settings/data/NumbersSettings"
import { faApple } from "@fortawesome/free-brands-svg-icons"
import { getValueLastCalledWith } from "../../../Queries"
import renderWithTranslation from "../../../renderWithTranslation"

const onConfirmHandler = jest.fn()
const onResetHandler = jest.fn()
const onQuitHandler = jest.fn()
const isValidHandler = jest.fn()

let props: DataSettingsMenuProps<NumbersSettings>

const setup = () => {
    const component = renderWithTranslation(<NumbersSettingsForm {...props} />)
    return {
        numbers: component.getByTestId("numbers"),
        counters: component.getByTestId("counters"),
        age: component.getByTestId("age"),
        exceptions: component.getByTestId("exceptions"),
        units: component.getByTestId("units"),
        sequence: component.getByTestId("sequence"),
        quantity: component.getByPlaceholderText("Quantity"),
        back: component.getByText("Back"),
        reset: component.getByText("Reset"),
        confirm: component.getByText("Confirm"),
        ...component
    }
}

beforeEach(() => {
    props = {
        title: "My Settings",
        icon: faApple,
        isValid: isValidHandler,
        onConfirm: onConfirmHandler,
        onReset: onResetHandler,
        onQuit: onQuitHandler
    }
})

test("Should default numbers to true", () => {
    const { confirm } = setup()
    fireEvent.click(confirm)
    expect(getValueLastCalledWith<NumbersSettings>(onConfirmHandler).numbers).toBe(true)
})

test("Should default counters to true", () => {
    const { confirm } = setup()
    fireEvent.click(confirm)
    expect(getValueLastCalledWith<NumbersSettings>(onConfirmHandler).counters).toBe(true)
})

test("Should default age to true", () => {
    const { confirm } = setup()
    fireEvent.click(confirm)
    expect(getValueLastCalledWith<NumbersSettings>(onConfirmHandler).age).toBe(true)
})

test("Should default exceptions to true", () => {
    const { confirm } = setup()
    fireEvent.click(confirm)
    expect(getValueLastCalledWith<NumbersSettings>(onConfirmHandler).exceptions).toBe(true)
})

test("Should default units to true", () => {
    const { confirm } = setup()
    fireEvent.click(confirm)
    expect(getValueLastCalledWith<NumbersSettings>(onConfirmHandler).units).toBe(true)
})

test("Should default sequence to true", () => {
    const { confirm } = setup()
    fireEvent.click(confirm)
    expect(getValueLastCalledWith<NumbersSettings>(onConfirmHandler).sequence).toBe(true)
})

test("Should default quantity to 25", () => {
    const { confirm } = setup()
    fireEvent.click(confirm)
    expect(getValueLastCalledWith<NumbersSettings>(onConfirmHandler).quantity).toBe(25)
})

test("Turning numbers off should set the settings boolean to false", () => {
    const { numbers, confirm } = setup()
    fireEvent.click(numbers)
    fireEvent.click(confirm)
    expect(getValueLastCalledWith<NumbersSettings>(onConfirmHandler).numbers).toBe(false)
})

test("Turning counters off should set the settings boolean to false", () => {
    const { counters, confirm } = setup()
    fireEvent.click(counters)
    fireEvent.click(confirm)
    expect(getValueLastCalledWith<NumbersSettings>(onConfirmHandler).counters).toBe(false)
})

test("Turning age off should set the settings boolean to false", () => {
    const { age, confirm } = setup()
    fireEvent.click(age)
    fireEvent.click(confirm)
    expect(getValueLastCalledWith<NumbersSettings>(onConfirmHandler).age).toBe(false)
})

test("Turning exceptions off should set the settings boolean to false", () => {
    const { exceptions, confirm } = setup()
    fireEvent.click(exceptions)
    fireEvent.click(confirm)
    expect(getValueLastCalledWith<NumbersSettings>(onConfirmHandler).exceptions).toBe(false)
})

test("Turning units off should set the settings boolean to false", () => {
    const { units, confirm } = setup()
    fireEvent.click(units)
    fireEvent.click(confirm)
    expect(getValueLastCalledWith<NumbersSettings>(onConfirmHandler).units).toBe(false)
})

test("Turning sequence off should set the settings boolean to false", () => {
    const { sequence, confirm } = setup()
    fireEvent.click(sequence)
    fireEvent.click(confirm)
    expect(getValueLastCalledWith<NumbersSettings>(onConfirmHandler).sequence).toBe(false)
})

test("Changing the quantity should update the value in the settings", () => {
    const { quantity, confirm } = setup()
    fireEvent.change(quantity, { target: { value: 50 } })
    fireEvent.click(confirm)
    expect(getValueLastCalledWith<NumbersSettings>(onConfirmHandler).quantity).toBe(50)
})

test("Clicking reset should set the settings to their default state", () => {
    const { numbers, counters, age, exceptions, units, sequence, reset, confirm } = setup()

    // Change the defaults
    fireEvent.click(numbers)
    fireEvent.click(counters)
    fireEvent.click(age)
    fireEvent.click(exceptions)
    fireEvent.click(units)
    fireEvent.click(sequence)

    // Reset
    fireEvent.click(reset)

    // Confirm
    fireEvent.click(confirm)
    expect(onConfirmHandler).toHaveBeenLastCalledWith(
        new NumbersSettingsBuilder()
            .withQuantity(25)
            .withExceptions()
            .withSequence()
            .withCounters()
            .withNumbers()
            .withUnits()
            .withAge()
            .build()
    )
})

test("Clicking the back button should call onQuit event handler", () => {
    const { back } = setup()
    fireEvent.click(back)
    expect(onQuitHandler).toHaveBeenCalled()
})
