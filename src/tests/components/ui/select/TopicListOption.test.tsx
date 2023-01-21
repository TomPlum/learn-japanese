import { fireEvent, render } from "@testing-library/react"
import TopicListOption from "../../../../components/ui/select/TopicListOption"
import Topic from "../../../../domain/Topic"

const onClickHandler = jest.fn()

test("Clicking an option with a bound event handler should call it", () => {
    const component = render(<TopicListOption onClick={onClickHandler} type={Topic.NUMBERS} />)
    fireEvent.click(component.getByText("Numbers & Counting"))
    expect(onClickHandler).toHaveBeenCalled()
})

test("Passing in a Game Type should render the name in the option item", () => {
    const component = render(<TopicListOption type={Topic.KANA} />)
    expect(component.getByText("Hiragana & Katakana")).toBeInTheDocument()
})

test("Regular options should be 'actionable'", () => {
    const { container } = render(<TopicListOption type={Topic.KANA} />)
    expect(container.firstChild).toHaveClass("list-group-item-action")
})

test("When the selected matches the options type, it should make the list item active", () => {
    const type = Topic.KANA
    const { container } = render(<TopicListOption type={type} selected={type} />)
    expect(container.firstChild).toHaveClass("active")
})

test("When the selected doesn't the options type, it should not be active", () => {
    const { container } = render(<TopicListOption type={Topic.KANA} selected={Topic.NUMBERS} />)
    expect(container.firstChild).not.toHaveClass("active")
})

test("Regular list options should have the default 'item' class", () => {
    const { container } = render(<TopicListOption type={Topic.KANA} />)
    expect(container.firstChild).toHaveClass("item")
    expect(container.firstChild).not.toHaveClass("heading")
})

test("Heading list options should have the 'heading' class", () => {
    const { container } = render(<TopicListOption type={Topic.KANA} isHeading />)
    expect(container.firstChild).toHaveClass("heading")
    expect(container.firstChild).not.toHaveClass("item")
})

test("Passing the text property should override and replace the game type value", () => {
    const component = render(<TopicListOption type={Topic.KANA} text="Some Text" />)
    expect(component.getByText("Some Text")).toBeInTheDocument()
    expect(component.queryByText("Hiragana & Katakana")).not.toBeInTheDocument()
})

test("Wrapping a child component should append the 'icon' class to it", () => {
    const component = render(
        <TopicListOption type={Topic.KANA}>
            <p>Example</p>
        </TopicListOption>
    )
    const child = component.getByText("Example")
    expect(child).toBeInTheDocument()
    expect(child).toHaveClass("icon")
})
