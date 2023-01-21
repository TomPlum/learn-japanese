import GridItem, { GridItemProps } from "../../../../../components/layout/wizard/grid/GridItem"
import Topic from "../../../../../domain/Topic"
import { fireEvent, screen } from "@testing-library/react"
import { faApple } from "@fortawesome/free-brands-svg-icons"
import renderWithTranslation from "../../../../renderWithTranslation"

const onEditHandler = jest.fn()
const onClickHandler = jest.fn()

let props: GridItemProps<Topic>

const setup = () => {
    const component = renderWithTranslation(<GridItem {...props} />)
    return {
        ...component
    }
}

beforeEach(() => {
    props = {
        value: Topic.KANA,
        desc: "Test grid item",
        className: "testClassName",
        iconColour: "#F0F0F0",
        editable: false,
        small: false,
        selected: "Kana",
        icon: faApple,
        onEdit: onEditHandler,
        onClick: onClickHandler,
        style: {},
        id: "grid-item"
    }
})

test("Should render a popover with the description if there is one and the selected matches the value", async () => {
    props.value = Topic.KANA
    props.selected = "Hiragana & Katakana"
    props.desc = "An example test description."

    setup()
    fireEvent.mouseOver(screen.getByText("Hiragana & Katakana"))

    expect(await screen.findByText("An example test description.")).toBeInTheDocument()
})

test("Should NOT render a popover if there is no description, but the selected matches the value", async () => {
    props.value = Topic.KANA
    props.selected = "Hiragana & Katakana"
    props.desc = undefined

    setup()
    fireEvent.mouseOver(screen.getByText("Hiragana & Katakana"))

    expect(await screen.queryByTestId("inspectable")).not.toBeInTheDocument()
})

test("Should NOT render a popover if there a description, but the selected does NOT match the value", async () => {
    props.value = Topic.KANA
    props.selected = "Kanji"
    props.desc = "Hiragana & Katakana"

    setup()
    fireEvent.mouseOver(screen.getByText("Hiragana & Katakana"))

    expect(await screen.queryByTestId("inspectable")).not.toBeInTheDocument()
    expect(await screen.queryByTestId("An example test description.")).not.toBeInTheDocument()
})

test("If the button is editable then it should render an edit button", () => {
    props.editable = true
    setup()
    expect(screen.getByTitle("Edit")).toBeInTheDocument()
})

test("If the button is NOT editable then it should NOT render an edit button", () => {
    props.editable = false
    setup()
    expect(screen.queryByTitle("Edit")).not.toBeInTheDocument()
})

test("Clicking the edit button should fire the onEdit event handler", () => {
    props.editable = true
    props.desc = undefined
    setup()

    fireEvent.click(screen.getByTitle("Edit"))

    expect(onEditHandler).toHaveBeenCalled()
})

test("Should render the small name if the small property is passed as true", () => {
    props.small = true
    setup()
    expect(screen.getByText("Kana")).toBeInTheDocument()
})

test("Should render the long name if the small property is passed as false", () => {
    props.small = false
    setup()
    expect(screen.getByText("Hiragana & Katakana")).toBeInTheDocument()
})
