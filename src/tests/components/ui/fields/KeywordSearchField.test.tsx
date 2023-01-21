import { fireEvent, render, screen } from "@testing-library/react"
import KeywordSearchField, { KeywordSearchFieldProps } from "../../../../components/ui/fields/KeywordSearchField"

let props: KeywordSearchFieldProps

const onChangeHandler = jest.fn()
const onSubmitHandler = jest.fn()
const onRemoveFilterHandler = jest.fn()

beforeEach(() => {
    props = {
        results: 125,
        disabled: false,
        className: "myClassName",
        onChange: onChangeHandler,
        onSubmit: onSubmitHandler,
        onRemoveFilter: onRemoveFilterHandler,
        keywords: [
            { key: "grade", type: "string" },
            { key: "level", type: "string" }
        ]
    }

    jest.useFakeTimers()
})

const setup = () => {
    const component = render(<KeywordSearchField {...props} />)
    return {
        field: component.getByPlaceholderText("search"),
        ...component
    }
}

test("It should call the onChange event handler 300ms after entering a search term", () => {
    const { field } = setup()
    fireEvent.change(field, { target: { value: "person" } })
    jest.advanceTimersByTime(300)
    expect(onChangeHandler).toHaveBeenLastCalledWith("person")
})

test("It should set the field invalid if the term contains an '=' but doesn't contain a keyword", () => {
    const { field } = setup()
    fireEvent.change(field, { target: { value: ">unknown=" } })
    expect(onChangeHandler).not.toHaveBeenCalled()
})

test("It should not call the onChange event handler if in a keyword but haven't added an = yet", () => {
    const { field } = setup()
    fireEvent.change(field, { target: { value: ">grade" } })
    expect(onChangeHandler).not.toHaveBeenCalled()
})

test("It should call the onSubmit event handler when hitting enter when the term is valid and field enabled", () => {
    const { field } = setup()
    fireEvent.change(field, { target: { value: ">grade=1,2,3" } })
    fireEvent.keyPress(field, { key: "Enter", code: 13, charCode: 13 })
    expect(onSubmitHandler).toHaveBeenLastCalledWith([{ key: "grade", type: "string", value: "1,2,3" }])
})

test("It should not call the onSubmit event handler if the parameter is valid but the key press is not enter", () => {
    const { field } = setup()
    fireEvent.change(field, { target: { value: ">grade=1,2,3" } })
    fireEvent.keyPress(field, { key: "Shift", code: 16, charCode: 16 })
    expect(onSubmitHandler).not.toHaveBeenCalled()
})

test("It should not clear the search value if the parameter is valid but the key press is not enter", () => {
    const { field } = setup()
    fireEvent.change(field, { target: { value: ">grade=1,2,3" } })
    fireEvent.keyPress(field, { key: "Shift", code: 16, charCode: 16 })
    expect(field).toHaveValue(">grade=1,2,3")
})

test("It should not call the onSubmit event handler if the parameter is invalid and enter is pressed", () => {
    const { field } = setup()
    fireEvent.change(field, { target: { value: ">grade=" } })
    fireEvent.keyPress(field, { key: "Enter", code: 13, charCode: 13 })
    expect(onSubmitHandler).not.toHaveBeenCalled()
})

test("It should not clear the search value if the parameter is invalid and enter is pressed", () => {
    const { field } = setup()
    fireEvent.change(field, { target: { value: ">grade=" } })
    fireEvent.keyPress(field, { key: "Enter", code: 13, charCode: 13 })
    expect(field).toHaveValue(">grade=")
})

test("It should render a parameter tag if a keyword matching value follows a '>' character", () => {
    const { field } = setup()
    fireEvent.change(field, { target: { value: ">grade=1,2,3" } })
    expect(screen.getByText("Grade 1,2,3")).toBeInTheDocument()
})

test("It should update a parameter tag if a value is changed on an already valid keyword", () => {
    const { field } = setup()

    fireEvent.change(field, { target: { value: ">grade=1,2,3" } })
    expect(screen.getByText("Grade 1,2,3")).toBeInTheDocument()

    fireEvent.change(field, { target: { value: ">grade=1,2,3,4" } })
    expect(screen.getByText("Grade 1,2,3,4")).toBeInTheDocument()
})

test("Clicking the x-button on a parameter tag should dismiss it and stop rendering it", () => {
    const { field } = setup()

    fireEvent.change(field, { target: { value: ">grade=1,2,3" } })
    expect(screen.getByText("Grade 1,2,3")).toBeInTheDocument()

    fireEvent.click(screen.getByTestId("dismiss-tag-grade"))
    expect(screen.queryByText("Grade 1,2,3")).not.toBeInTheDocument()
})

test("Clicking the x-button on a parameter tag should call the onRemoveFilter event handler with its meta", () => {
    const { field } = setup()

    fireEvent.change(field, { target: { value: ">grade=1,2,3" } })
    expect(screen.getByText("Grade 1,2,3")).toBeInTheDocument()

    fireEvent.click(screen.getByTestId("dismiss-tag-grade"))
    expect(onRemoveFilterHandler).toHaveBeenLastCalledWith({ key: "grade", type: "string", value: "1,2,3" })
})

test("Removing a parameter when there are multiple active should only remove the one that was clicked on", () => {
    const { field } = setup()

    // Add a grade filter
    fireEvent.change(field, { target: { value: ">grade=1,2,3" } })
    fireEvent.keyPress(field, { key: "Enter", code: 13, charCode: 13 })

    // Add a level filter
    fireEvent.change(field, { target: { value: ">level=N1,N2" } })
    fireEvent.keyPress(field, { key: "Enter", code: 13, charCode: 13 })

    // Dismissing the grade filter should remove it, but keep the level filter
    fireEvent.click(screen.getByTestId("dismiss-tag-grade"))
    expect(screen.getByTestId("dismiss-tag-level")).toBeInTheDocument()
})

test("It should render a second parameter tag if two key-value pairs are present", () => {
    const { field } = setup()
    fireEvent.change(field, { target: { value: ">grade=1,2,3 level=N5" } })
    expect(screen.getByText("Level N5")).toBeInTheDocument()
})

test("It should call the onChange event handler with the search term if there is no keyword", () => {
    const { field } = setup()
    fireEvent.change(field, { target: { value: "counter" } })
    jest.advanceTimersByTime(300)
    expect(onChangeHandler).toHaveBeenLastCalledWith("counter")
})

test("It should not call onChange event handler if a space is entered with an invalid parameter", () => {
    const { field } = setup()
    fireEvent.change(field, { target: { value: ">grade=" } })
    fireEvent.change(field, { target: { value: ">grade= " } })
    jest.advanceTimersByTime(300)
    expect(onChangeHandler).not.toHaveBeenCalled()
})

test("It should clear the input if a space is entered after filling in a valid parameter", () => {
    const { field } = setup()
    fireEvent.change(field, { target: { value: ">grade=1,2,3" } })
    expect(field).toHaveValue(">grade=1,2,3")

    fireEvent.change(field, { target: { value: ">grade=1,2,3 " } })
    expect(field).toHaveValue("")
})

test("It should render the results in plural if the prop is passed and there is more than 1", () => {
    props.results = 540
    setup()
    expect(screen.getByText("540 Results")).toBeInTheDocument()
})

test("It should render the results in singular if the prop is passed and there is only 1", () => {
    props.results = 1
    setup()
    expect(screen.getByText("1 Result")).toBeInTheDocument()
})
